# UnaryQueryFilter
Filter condition that compares a given value with a parameter.
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Path|Text|None|1..*|Path to the property to filter.|
|Operator|QueryComparisonOperator|None|1..*|Comparison operator to apply to the condition.|
|Parameter|QueryFilterParameter|Composite|1..*|Parameter to receive the value to filter by.|
