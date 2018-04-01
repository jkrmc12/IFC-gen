using System.Collections.Generic;
using System.Linq;
using System.Text;
using Express;

namespace IFC4.Generators
{
    public class GraphQLGenerator : ILanguageGenerator
    {
        public string FileExtension => "graphql";

        private Dictionary<string,SelectType> selectData = new Dictionary<string, SelectType>();
        public Dictionary<string,SelectType> SelectData 
        {
            get{return selectData;}
            set{selectData = value;}
        }

        public string AttributeDataString(AttributeData data)
        {
            return "foo";
        }

        public static string CleanName(string value)
        {
            var result = value;
            if(result.StartsWith("Ifc") && result != "IfcBoolean")
            {
                result = result.Substring(3);
            }
            // if(result.EndsWith("Enum"))
            // {
            //     result = result.Substring(0,result.Length-4);
            // }
            return result;
        }

        public string AttributeDataType(bool isCollection, int rank, string type, bool isGeneric)
        {
            if (isCollection)
            {
                return $"{string.Join("", Enumerable.Repeat("[", rank))}{CleanName(type)}{string.Join("", Enumerable.Repeat("]", rank))}";
            }

            // Item is used in functions.
            if(isGeneric)
            {
                return "T";
            }

            // https://github.com/ikeough/IFC-gen/issues/25
            if(type == "IfcSiUnitName")
            {
                return "IfcSIUnitName";
            }

            return CleanName(type);
        }

        public string AttributeStepString(AttributeData data, bool isDerivedInChild)
        {
            return string.Empty;
        }

        public string EntityString(Entity data)
        {
            var sb = new StringBuilder();
            var attribs = data.ParentsAndSelf().SelectMany(x=>x.Attributes).Where(a=>!a.IsDerived && !a.IsInverse);
            if(attribs.Count() == 0)
            {
                sb.AppendLine("# empty interface");
                sb.AppendLine("\t_: Boolean");
            }
            else
            {
                foreach(var a in attribs)
                {
                    sb.AppendLine($"\t{a.Name}: {a.Type}{(a.IsOptional?"!":string.Empty)}");
                }
            }

            var subs = data.Subs.Count() > 0 ? $" implements {CleanName(data.Subs[0].Name)}":string.Empty;
            return $@"{DocumentationLink(data.Name)}
#{subs}
type {CleanName(data.Name)}{{
{sb.ToString().TrimEnd( '\r', '\n' )}
}}{"\n"}";
/*{(data.IsAbstract?"interface":"type")} {CleanName(data.Name)}{(data.IsAbstract?string.Empty:subs)}{{
{sb.ToString().TrimEnd( '\r', '\n' )}
}}{"\n"}"; */
        }

        private string DocumentationLink(string name)
        {
            return $"\"[Documentation...](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/{name.ToLower()}.htm)\"";
        }

        public string EnumTypeString(EnumType data)
        {
            var sb = new StringBuilder();
            foreach(var v in data.Values)
            {
                sb.AppendLine($"\t{v.ToUpper()}");
            }

            var result = $@"{DocumentationLink(data.Name)}
enum {CleanName(data.Name)} {{
{sb.ToString().TrimEnd( '\r', '\n' )}
}}{"\n"}";
            return result;
        }

        public void GenerateManifest(string directory, IEnumerable<string> types){}

        public string ParseSimpleType(ExpressParser.SimpleTypeContext context)
        {
            var type = string.Empty;
            if (context.binaryType() != null)
            {
                type = "String";
            }
            else if (context.booleanType() != null)
            {
                type = "Boolean";
            }
            else if (context.integerType() != null)
            {
                type = "Int";
            }
            else if (context.logicalType() != null)
            {
                type = "Boolean!";
            }
            else if (context.numberType() != null)
            {
                type = "Float";
            }
            else if (context.realType() != null)
            {
                type = "Float";
            }
            else if (context.stringType() != null)
            {
                type = "String";
            }
            return type;
        }

        public string SelectTypeString(SelectType data)
        {
            var sb = new StringBuilder();
            ExpandSelect(data, sb);
            return $@"{DocumentationLink(data.Name)}
union {CleanName(data.Name)} = {sb.ToString()}{"\n"}";
        }

        private void ExpandSelect(SelectType s, StringBuilder sb)
        {
            var count = s.Values.Count();
            for(var i=0; i<count; i++)
            {
                // expand select types so that selects
                // don't contain selects
                var v = s.Values.ElementAt(i);
                if(selectData.ContainsKey(v))
                {
                    ExpandSelect(selectData[v], sb);
                }
                else 
                {
                    if(v == "IfcNullStyle")
                    {
                        continue;
                    }
                    sb.Append(CleanName(v));
                }
                if(i != count-1)
                {
                    sb.Append(" | ");
                }
            }
        }

        public string SimpleTypeString(WrapperType data)
        {
            //return $"scalar {CleanName(data.Name)}\n";
            return $@"
{DocumentationLink(data.Name)}
type {CleanName(data.Name)}{{
    value: {CleanName(data.WrappedType)}
}}";
        }
    }
}