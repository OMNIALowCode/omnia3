# AuthorizationPolicyPermission
Permission and the Roles that have that permission.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the permission (unique identifier).|
|Description|Text|None|0..*|The textual explanation of the permission purpose.|
|Roles|Text|Shared|0..2147483647|List of roles that have the permission.|
