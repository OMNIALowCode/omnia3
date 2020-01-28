---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 BMLState"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLState.html
folder: omnia3
---

# State
Definition of an entity possible state.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities' purpose. |
| IsInitial | Boolean | None | 1..1 | State machine first state. One state machine can only have one initial state. |
| DisableOperations | Boolean | None | 1..1 | Disable all operations when the entity is in the current state. |
| DisableAttributes | Boolean | None | 1..1 | Disable all attributes when the entity is in the current state. |
| AssignToExpression | Text | None | 0..1 | C# expression to define to whom will be assigned the record when it is in this state. |
| Transitions | StateTransition | Composite | 0..* | Collection of transitions that can happen in the current state. |
| Decisions | StateDecision | Composite | 0..* | Collection of decisions that the user can take in the current state. |
| EnabledOperations | StateEnabledOperation | Composite | 0..* | Collection of operations to enable. This is an exception list when the DisableOperations configuration is active. |
| EnabledAttributes | StateEnabledAttribute | Composite | 0..* | Collection of attributes to enable. This is an exception list when the DisableAttributes configuration is active. |
| Behaviours | StateBehaviour | Composite | 0..* | A collection of entries representing how the state machine behaves. |


