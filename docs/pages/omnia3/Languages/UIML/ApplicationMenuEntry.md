# ApplicationMenuEntry
Menu entry
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the entity (unique identifier).|
|Label|Text|None|1..*|Label to display.|
|IsFolder|Boolean|None|1..*|Folder entry. Group of other Menu entries.|
|Icon|Text|None|0..*|Icon to present with the entry.|
|Color|Text|None|0..*|Color related to entry.|
|Action|ApplicationMenuEntryAction|Composite|0..*|Will define how the system should behave.|
|Entries|ApplicationMenuEntry|Composite|0..2147483647|Child entries. Used in case of folders.|
