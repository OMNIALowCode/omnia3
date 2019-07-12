# AuthorizationRole
Authorization Role.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the role (unique identifier).|
|Description|Text|None|0..*|The textual explanation of the entities’ purpose.|
|Subjects|AuthorizationRoleSubject|Composite|0..2147483647|List of subjects (users) that have the role assigned.|
