---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 BMLBehaviourDependency"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLBehaviourDependency.html
folder: omnia3
---

# BehaviourDependency
Assembly or Expression loaded to be used on behaviours.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| Type | BehaviourDependencyType | None | 1..1 | The dependency type. |
| Version | Integer | None | 0..1 | The version of the dependency. |
| ExecutionLocation | ExecutionLocation | None | 1..1 | The location where is loaded. |
| Path | Text | None | 0..1 | The path from where the dependency is loaded. |
| AssemblyName | Text | None | 0..1 | The assembly name of the dependency (when the Type is 'File') |
| Expression | Text | None | 0..1 | The C# code that will be executed (when the Type is 'Expression'). |


