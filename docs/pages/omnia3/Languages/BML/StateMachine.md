---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 BMLStateMachine"
sidebar: omnia3_sidebar
permalink: omnia3_languages_BMLStateMachine.html
folder: omnia3
---

# StateMachine
State Machine related to a given Definition.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the state machine (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the state machine purpose. |
| Definition | Text | None | 1..1 | the entity that will be managed using the State Machine. |
| States | State | Composite | 0..* | A collection of states of the current State Machine. |

## Operations

| Name | Type | Description |
| --------- | --------- | --------- |
| Defaults | Initialize |  |

