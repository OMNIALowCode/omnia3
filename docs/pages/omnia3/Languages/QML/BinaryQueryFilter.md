# BinaryQueryFilter
Binary condition that is composed by two logical conditions.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Left|QueryFilter|Composite|1..*|Left part of the condition.|
|Operator|QueryLogicalOperator|None|1..*|Logical operator over the left and right condition result.|
|Right|QueryFilter|Composite|1..*|Right part of the condition.|
