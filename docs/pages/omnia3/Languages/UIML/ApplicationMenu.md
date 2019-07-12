# ApplicationMenu
Application Menu. Describe the application navigation structure.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the entity (unique identifier).|
|Description|Text|None|0..*|The textual explanation of the entities’ purpose.|
|Label|Text|None|1..*|Label to display in the application.|
|HelpText|Text|None|0..*|Text/annotation to help the user.|
|Type|ElementType|None|1..*||
|Attributes|ElementAttribute|Composite|0..2147483647||
|Behaviours|ElementBehaviour|Composite|0..2147483647||
|Elements|InnerElement|Composite|0..2147483647||
## Operations
|Name|Type|Description|
|--|--|--|
|Defaults|Initialize||
