using Express;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace IFC4.Generators
{
    public class NodeGenerator : ILanguageGenerator
    {
        private Dictionary<string,SelectType> selectData = new Dictionary<string, SelectType>();

        public Dictionary<string,SelectType> SelectData
        {
            get{return selectData;}
            set{selectData = value;}
        }

        public string Assignment(AttributeData data)
        {
            return $"\t\tthis.{data.Name} = {data.ParameterName}";
        }

        public string Allocation(AttributeData data)
        {
            if (data.IsCollection)
            {
                return $"\t\tthis.{data.Name} = new {data.Type}()";
            }
            return string.Empty;
        }

        public string AttributeDataType(bool isCollection, int rank, string type, bool isGeneric)
        {
            if (isCollection)
            {
                if(selectData.ContainsKey(type))
                {
                    var unionType = string.Join('|', ExpandPossibleTypes(type));
                    return $"{string.Join("", Enumerable.Repeat("Array<", rank))}{unionType}{string.Join("", Enumerable.Repeat(">", rank))}";
                }
                else
                {
                    return $"{string.Join("", Enumerable.Repeat("Array<", rank))}{type}{string.Join("", Enumerable.Repeat(">", rank))}";
                }
            }

            if(selectData.ContainsKey(type))
            {
                return string.Join('|', ExpandPossibleTypes(type));
            }

            return type;
        }


        private IEnumerable<string> ExpandPossibleTypes(string baseType)
        {
            if(!selectData.ContainsKey(baseType))
            {
                // return right away, it's not a select
                return new List<string>{baseType};
            }

            var values = selectData[baseType].Values;
            var result = new List<string>();
            foreach(var v in values)
            {
                result.AddRange(ExpandPossibleTypes(v));
            }

            return result;
        }

        public string AttributeDataString(AttributeData data)
        {
            var prop = string.Empty;

            if(data.IsDerived)
            {
                var name = data.Name;
                prop = $@"
    Object.defineProperty(this, '{name}', {{
        get: () => {{throw ""Derived property logic has not been implemented for {name}.""}}, // derived
        set: (value) => {{this.{name} = value}}
    }})";
            }
            else if (data.IsOptional || data.IsInverse)
            {
                var tags = new List<string>();
                if(data.IsOptional) tags.Add("optional");
                if(data.IsInverse) tags.Add("inverse");
                prop = $"\tthis.{data.Name} = null {(tags.Any()? " // " + string.Join(",",tags) : string.Empty)}";
            }

            return prop;
        }

        public string AttributeStepString(AttributeData data, bool isDerivedInChild)
        {
            var step = $"\t\tparameters.push(BaseIfc.toStepValue(this.{data.Name}))";

            if(isDerivedInChild)
            {
                step = "\t\tparameters.push(\"*\");";
                return step;
            }

            // TODO: Not all enums are called xxxEnum. This emits code which causes
            // 'never equal to null' errors. Find a better way to handle enums which don't
            // end in 'enum'.
            if (data.Type.EndsWith("Enum") | data.Type == "bool" | data.Type == "int" | data.Type == "double")
            {
                step = $"\t\tparameters.push(BaseIfc.toStepValue(this.{data.Name}))";
            }
            return step;
        }

        private string WrappedType(WrapperType data)
        {
            if (data.IsCollectionType)
            {
                return $"[] // {data.WrappedType}";
            }
            return data.WrappedType;
        }

        public string SimpleTypeString(WrapperType data)
        {
            var badTypes = new List<string>{"Boolean","Number","String","Boolean","Buffer"};
            var wrappedTypeImport = badTypes.Contains(data.WrappedType)?string.Empty:$"const {data.WrappedType} = require('./{data.WrappedType}')";
            var result =
$@"
const BaseIfc = require('./BaseIfc')
{wrappedTypeImport}

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
module.exports = {WrappedType(data)}";
            return result;
        }

        public string EnumTypeString(EnumType data)
        {
            var result =
$@"
//http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
module.exports = {{
  {string.Join(",\n", data.Values.Select(v=>$"{v}: '{v}'"))}
}}
";
            return result;
        }

        public string SelectTypeString(SelectType data)
        {
            throw new NotImplementedException("NodeJS Javascript doesn't use a class which wraps SELECT types.");
        }

        public string EntityConstructorParams(Entity data, bool includeOptional)
        {
            // Constructor parameters include the union of this type's attributes and all super type attributes.
            // A constructor parameter is created for every attribute which does not derive
            // from IFCRelationship.

            var parents = data.ParentsAndSelf().Reverse();
            var attrs = parents.SelectMany(p => p.Attributes);

            if (!attrs.Any())
            {
                return string.Empty;
            }

            var validAttrs = includeOptional ? AttributesWithOptional(attrs) : AttributesWithoutOptional(attrs);

            return string.Join(", ", validAttrs.Select(a => $"{a.ParameterName}"));
        }

        public string EntityBaseConstructorParams(Entity data, bool includeOptional)
        {
            // Base constructor parameters include the union of all super type attributes.
            var parents = data.Parents().Reverse();

            var attrs = parents.SelectMany(p => p.Attributes);

            if (!attrs.Any())
            {
                return string.Empty;
            }

            var validAttrs = includeOptional ? AttributesWithOptional(attrs) : AttributesWithoutOptional(attrs);

            return string.Join(",", validAttrs.Select(a => $"{a.ParameterName}"));
        }

        public string EntityString(Entity data)
        {
            var importBuilder = new StringBuilder();
            foreach(var d in Dependencies(data))
            {
                importBuilder.AppendLine($"const {d} = require('./{d}')");
            }

            var super = "BaseIfc";
            var newMod = string.Empty;
            if (data.Subs.Any())
            {
                super = data.Subs[0].Name; ;
                newMod = "new";
            }


            string constructors = string.Empty;

                constructors = $@"
    constructor({ConstructorParams(data, false)}) {{
        super({BaseConstructorParams(data, false)}){Assignments(data, false)}
        {data.Properties(selectData)}
    }}";

            var classStr =
$@"
const BaseIfc = require('./BaseIfc')
{importBuilder.ToString()}
/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{data.Name.ToLower()}.htm
 */
module.exports = class {data.Name} extends {super} {{
  {constructors}{StepParameters(data)}
}}";
            return classStr;
        }

        public string StepParameters(Entity data)
        {
            if(data.IsAbstract)
            {
                return string.Empty;
            }

            var stepParameters = $@"
    getStepParameters() {{
        const parameters = []
    {data.StepProperties()}
        return parameters.join()
    }}";
            return stepParameters;
        }

        public string EntityTest(Entity data)
        {
            return string.Empty;
        }

        public string FileExtension
        {
            get { return "js"; }
        }

        public string ParseSimpleType(ExpressParser.SimpleTypeContext context)
        {
            var type = string.Empty;
            if (context.binaryType() != null)
            {
                type = "Buffer";
            }
            else if (context.booleanType() != null)
            {
                type = "Boolean";
            }
            else if (context.integerType() != null)
            {
                type = "Number";
            }
            else if (context.logicalType() != null)
            {
                type = "Boolean";
            }
            else if (context.numberType() != null)
            {
                type = "Number";
            }
            else if (context.realType() != null)
            {
                type = "Number";
            }
            else if (context.stringType() != null)
            {
                type = "String";
            }
            return type;
        }

        private string Assignments(Entity entity, bool includeOptional)
        {
            var attrs = includeOptional ? AttributesWithOptional(entity.Attributes) : AttributesWithoutOptional(entity.Attributes);
            if (!attrs.Any())
            {
                return string.Empty;
            }

            var assignBuilder = new StringBuilder();
            assignBuilder.AppendLine(); // add one line space

            foreach (var a in attrs)
            {
                var assign = Assignment(a);
                if (!string.IsNullOrEmpty(assign))
                {
                    assignBuilder.AppendLine(assign);
                }
            }
            return assignBuilder.ToString();
        }

        private string Allocations(Entity entity, bool includeOptional)
        {

            var allocBuilder = new StringBuilder();
            allocBuilder.AppendLine(); // add one line space

            var attrs = entity.Attributes.Where(a => !a.IsDerived)
                                            .Where(a => a.IsInverse || includeOptional && a.IsOptional);

            foreach (var a in attrs)
            {
                var alloc = Allocation(a);
                if (!string.IsNullOrEmpty(alloc))
                {
                    allocBuilder.AppendLine(alloc);
                }
            }
            return allocBuilder.ToString();
        }

        internal IEnumerable<AttributeData> AttributesWithOptional(IEnumerable<AttributeData> ad)
        {
            return ad.Where(a => !a.IsInverse)
                        .Where(a => !a.IsDerived);
        }

        internal IEnumerable<AttributeData> AttributesWithoutOptional(IEnumerable<AttributeData> ad)
        {
            return ad.Where(a => !a.IsInverse)
                        .Where(a => !a.IsDerived)
                        .Where(a => !a.IsOptional);
        }

        /// <summary>
        /// Return a set of constructor parameters in the form 'Type name1, Type name2'
        /// </summary>
        /// <returns></returns>
        private string ConstructorParams(Entity data, bool includeOptional)
        {
            return EntityConstructorParams(data, includeOptional);
        }

        /// <summary>
        /// Return a set of constructor params in the form `name1, name2`.
        /// </summary>
        /// <returns></returns>
        private string BaseConstructorParams(Entity data, bool includeOptional)
        {
            return EntityBaseConstructorParams(data, includeOptional);
        }

        public void GenerateManifest(string directory, IEnumerable<string> names)
        {
            var importBuilder = new StringBuilder();
            foreach(var name in names)
            {
                importBuilder.AppendLine($"exports.{name} = require('./{name}')");
            }
            importBuilder.AppendLine("exports.BaseIfc = require('./BaseIfc')");
            importBuilder.AppendLine("exports.Select = require('./Select')");

            var path = Path.Combine(directory, "index.js");

            File.WriteAllText(path, importBuilder.ToString());
        }

        public IEnumerable<string> Dependencies(Entity entity)
        {
            var parents = entity.ParentsAndSelf().Reverse();
            var attrs = parents.SelectMany(p => p.Attributes);

            var result = new List<string>();

            result.AddRange(AddRelevantTypes(attrs)); // attributes for constructor parameters for parents
            result.AddRange(AddRelevantTypes(entity.Attributes)); // atributes of self
            //result.AddRange(this.Supers.Select(s=>s.Name)); // attributes for all sub-types
            result.AddRange(entity.Subs.Select(s=>s.Name)); // attributes for all super types

            var badTypes = new List<string>{"Boolean","Number","String","Buffer"};
            var types = result.Distinct().Where(t=>!badTypes.Contains(t) && t!=entity.Name);

            return types;
        }

        private IEnumerable<string> AddRelevantTypes(IEnumerable<AttributeData> attrs)
        {
            var result = new List<string>();

            foreach(var a in attrs)
            {
                result.AddRange(ExpandPossibleTypes(a.type));
            }

            return result.Distinct();
        }
    }
}
