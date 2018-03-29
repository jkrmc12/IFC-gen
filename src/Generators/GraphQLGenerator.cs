using System.Collections.Generic;
using System.Linq;
using System.Text;
using Express;

namespace IFC4.Generators
{
    public class GraphQLGenerator : ILanguageGenerator
    {
        public string FileExtension => "g.gql";

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
            if(result.StartsWith("Ifc"))
            {
                result = result.Substring(3);
            }
            if(result.EndsWith("Enum"))
            {
                result = result.Substring(0,result.Length-4);
            }
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
            foreach(var a in data.Attributes)
            {
                sb.AppendLine($"\t{a.Name}: {a.Type}!");
            }
            return $@"
type {CleanName(data.Name)}{{
{sb.ToString().TrimEnd( '\r', '\n' )}
}}";
        }

        public string EnumTypeString(EnumType data)
        {
            var sb = new StringBuilder();
            foreach(var v in data.Values)
            {
                sb.AppendLine($"\t{v.ToUpper()}");
            }

            var result = $@"
enum {CleanName(data.Name)} {{
{sb.ToString().TrimEnd( '\r', '\n' )}
}}";
            return result;
        }

        public void GenerateManifest(string directory, IEnumerable<string> types){}

        public string ParseSimpleType(ExpressParser.SimpleTypeContext context)
        {
            var type = string.Empty;
            if (context.binaryType() != null)
            {
                type = "byte[]";
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
                type = "Boolean";
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
            var count = data.Values.Count();
            for(var i=0; i<count; i++)
            {
                sb.Append(data.Values.ElementAt(i));
                if(i != count-1)
                {
                    sb.Append("|");
                }
            }

            return $"union {data.Name} {sb.ToString()}";
        }

        public string SimpleTypeString(WrapperType data)
        {
            return $@"
type {CleanName(data.Name)} {{
    value: {data.WrappedType}!
}}";
        }
    }
}