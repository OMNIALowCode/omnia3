---
title: OMNIA 3
keywords: omnia3
summary: "OMNIA 3 UIMLApplicationMenuEntry"
sidebar: omnia3_sidebar
permalink: omnia3_languages_UIMLApplicationMenuEntry.html
folder: omnia3
---

# ApplicationMenuEntry
Menu entry
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..1 | The name of the entity (unique identifier). |
| Label | Text | None | 1..1 | Label to display. |
| IsFolder | Boolean | None | 1..1 | Folder entry. Group of other Menu entries. |
| Icon | Text | None | 0..1 | Icon to present with the entry. |
| Color | Text | None | 0..1 | Color related to entry. |
| Action | ApplicationMenuEntryAction | Composite | 0..1 | Will define how the system should behave. |
| Entries | ApplicationMenuEntry | Composite | 0..* | Child entries. Used in case of folders. |


