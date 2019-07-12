---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLApplicationBehaviour"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLApplicationBehaviour.html
folder: omnia3
---

# ApplicationBehaviour
Behaviour used to extend the application, which execution can be triggered from another behaviour (entity or data) or directly (using the API).
## Properties
|Name|Type|Aggregation Kind|Multiplicity|Description|
|--|--|--|--|--|
|Name|Text|None|1..*|The name of the entity (unique identifier).|
|Description|Text|None|0..*|The textual explanation of the entities' purpose.|
|Expression|Text|None|1..*|The C# code that will be executed.|
|BehaviourNamespaces|BehaviourNamespace|Composite|0..2147483647|A collection of entries representing the coding namespaces to be included (as usings) on code generated.|
|DataSource|DataSource|Shared|1..*|The Data Source where the behaviour is executed.|
|ExecutionLocation|ExecutionLocation|None|1..*|The location where is executed.|

