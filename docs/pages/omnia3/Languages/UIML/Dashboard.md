---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 UIMLDashboard"
sidebar: omnia3_sidebar
permalink: omnia3_languages_UIMLDashboard.html
folder: omnia3
---

# Dashboard
Dashboard is a group of elements like WebComponents or Lists.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Description | Text | None | 0..1 | The textual explanation of the entities’ purpose. |
| Label | Text | None | 1..1 | Label to display in the application. |
| HelpText | Text | None | 0..1 | Text/annotation to help the user. |
| Type | ElementType | None | 1..1 |  |
| Attributes | ElementAttribute | Composite | 0..* |  |
| Behaviours | ElementBehaviour | Composite | 0..* |  |
| Elements | InnerElement | Composite | 0..* |  |

## Operations

| Name | Type | Description |
| --------- | --------- | --------- |
| Defaults | Initialize |  |

