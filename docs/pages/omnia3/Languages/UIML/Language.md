---
title: OMNIA 3.0
keywords: omnia3
summary: "OMNIA 3.0 UIMLLanguage"
sidebar: omnia3_sidebar
permalink: omnia3_languages_UIMLLanguage.html
folder: omnia3
---

# Language
Language available in the application. Used for translations.
## Properties

| Name | Type | Aggregation Kind | Multiplicity | Description |
| --------- | --------- | --------- | --------- | --------- |
| Name | Text | None | 1..* | A reference to the Platform’s language (unique identifier). |
| Description | Text | None | 1..* | The textual explanation of the entities’ purpose. |
| Culture | Text | None | 1..* | The description of the language (e.g.: to American English can be English (US)). If not written, the Platform’s language’s description will be used. |
| Texts | LanguageText | Composite | 0..2147483647 | A collection in which entry is composed by a name and a value, representing the identifier of the text and the translation in the language. |


