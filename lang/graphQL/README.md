# BIMQL
A graphQL schema for Building Information Modeling, based on IFC.

This graphQL schema maps IFC to graphQL with the following conditions:
- The preface, "Ifc", is removed from all type names.
- All simple types are represented as `scalar` types.
- Abstract types are implmented as interfaces.
- Optional attributes are implemented as nullable.
- Derived types are not implemented.
- Where rules are not implemented. Validations are to be implemented on the server.
- Inverse attributes are not defined on types.

To Do:
- Remove suffix "Enum" from all enum types. This is currently not possible due to name clashes.
- Remove empty interfaces. Interfaces like `Representationitem` are only used to create type hierarchies.