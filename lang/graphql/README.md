# BIMQL
A graphQL schema for Building Information Modeling, based on IFC.

This graphQL schema maps IFC to graphQL with the following conditions:
- The preface, "Ifc", is removed from all type names, except for "IfcBoolean" where the prefix remains to avoid a type name clash with GraphQL's Boolean type.

- Optional attributes are implemented as nullable.
- Derived types are not implemented.
- Where rules are not implemented. Validations are to be implemented on the server.
- Inverse attributes are not defined on types.
- Select types are expanded. Selects are represented as unions in GraphQL. GraphQL does not allow unions in unions.
- `IfcNullStyle` is not included in `PresentationStyleSelect`, as it is an `enum`, which is not allowed in a GraphQL union.
- Empty types contain one field like `_: Boolean`, in order to pass schema parsing.

To Do:
- Implement abstract types as interfaces. This is currently not supported because select types specify concrete types and abstract base types indiscriminantly. GraphQL does not support the use of interfaces in unions.
- Remove suffix "Enum" from all enum types. This is currently not possible due to name clashes.
- Remove empty interfaces. Interfaces like `Representationitem` are only used to create type hierarchies.
- Represent simple types as `scalar`. This is currently not supported in environments like AWS App Sync.