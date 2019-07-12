---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 UIMLInnerElement"
sidebar: omnia3_sidebar
permalink: omnia3_languages_UIMLInnerElement.html
folder: omnia3
---

# InnerElement
Child Element
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
| Row | Integer | None | 1..* | The layout row in which the element will be placed. |
| Column | Integer | None | 1..* | The  layout column in which the element will be placed. |
| Size | Integer | None | 1..* | The element size on a scale of 1 (the smaller size) to 12 (the bigger size). |
| IsHidden | Boolean | None | 1..* | The visibility of the element (hidden or visible). |
| VisibleFrom | ScreenSize | None | 0..* | The visibility of the element, related to the user’s device screen size (at sizes smaller than the one selected, the element will be hidden). |


