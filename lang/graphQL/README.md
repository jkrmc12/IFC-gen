# BIMQL
A graphQL schema for Building Information Modeling, based on IFC.

This graphQL schema makes the following changes to IFC:
- The preface, "Ifc", is removed from all type names.
- All simple types are represented as `scalar` types.
- Abstract types are implmented as interfaces.
- Optional attributes are implemented as nullable.

To Do:
- Remove suffix "Enum" from all enum types. This is currently not possible due to name clashes.
- Remove empty interfaces. Interfaces like `Representationitem` are only used to create type hierarchies.