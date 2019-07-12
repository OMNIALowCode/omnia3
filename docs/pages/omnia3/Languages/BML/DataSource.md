# DataSource
This is a description
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*||
|Description|Text|None|0..*||
|Attributes|Attribute|Composite|0..2147483647||
|EntityBehaviours|EntityBehaviour|Composite|0..2147483647||
|DataBehaviours|DataBehaviour|Composite|0..2147483647||
|BehaviourNamespaces|BehaviourNamespace|Composite|0..2147483647||
|BehaviourRuntime|RuntimeLocation|None|1..*||
|DataAccessRuntime|RuntimeLocation|None|1..*||
|ExecutesInConnector|Boolean|None|1..*||
|BehaviourDependencies|BehaviourDependency|Composite|0..2147483647||
## Operations
|Name|Type|Description|
|--|--|--|
|Defaults|Initialize||
|DefaultsFinalize|BeforeSave||
