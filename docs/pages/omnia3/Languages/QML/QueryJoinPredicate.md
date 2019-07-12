# QueryJoinPredicate
Condition that defines the relation between to tables.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|InnerPath|Text|None|1..*|Path to the property of the source table of the join.|
|OuterPath|Text|None|1..*|Path to the property of the target table of the join.|
|OuterDefinition|Text|None|1..*|Path to the target table of the join condition.|
