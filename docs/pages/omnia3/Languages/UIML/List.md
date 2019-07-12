---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 UIMLList"
sidebar: omnia3_sidebar
permalink: omnia3_languages_UIMLList.html
folder: omnia3
---

# List
Application list, used to present data from a given Query. A list is little more than a way to see a query displayed in the web app: you select a query, (part or all of) its columns, and how to display those columns.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..* | The name of the entity (unique identifier). |
| Description | Text | None | 0..* | The textual explanation of the entities’ purpose. |
| Label | Text | None | 1..* | Label to display in the application. |
| HelpText | Text | None | 0..* | Text/annotation to help the user. |
| Type | ElementType | None | 1..* |  |
| Attributes | ElementAttribute | Composite | 0..2147483647 |  |
| Behaviours | ElementBehaviour | Composite | 0..2147483647 |  |
| Elements | InnerElement | Composite | 0..2147483647 |  |
| Query | Query | Shared | 1..* | Reference a previously created query to use. |
| DataSource | Text | None | 0..* | The Data Source in which the entities are computed and/or persisted |

## Operations

| Name | Type | Description |
| --------- | --------- | --------- |
| Defaults | Initialize |  |

