# QueryJoin
Defines the relation between to tables.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the entity (unique identifier).|
|Table|QueryTable|Composite|1..*|Table with of the Definition to join with.|
|JoinType|QueryJoinType|None|1..*|Type of join/relation.|
|Predicate|QueryJoinPredicate|Composite|1..*|Relationship condition.|
## Operations
|Name|Type|Description|
|--|--|--|
|SetName|Initialize||
