---
title: Modeling Enumerations
keywords: omnia3
summary: "Modeling Enumerations"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_enumerations.html
folder: omnia3
---

## 1. Introduction

In OMNIA Platform you can add your own enumerations, in order to support definitions with multiple constant values.

## 2. Model Enumerations
Each enumeration contains a set of ordered constant values, and can be used as attribute in the entities.

### How to add a new enumeration?
 
By accessing **_Enumerations_** in the sidebar, you will have access to the enumerations management screen.

Selecting the option _Add new_ in the list of enumerations, you need to fill the following information:
* **Name**: the name of the enumeration (needs to be unique within the model);
* **Description**: the textual explanation of the enumeration' purpose (can be used as development documentation).

### How to add a new value to an existing enumeration?

By accessing **_Enumerations_** in the sidebar, select one of the enumerations of the list.

In the **_Enumeration_** page will you have a list with all the values. In that list, choose the option _Add new_, and fill the following information:
* **Name**: the name of the value (needs to be unique);
* **Description**: the textual explanation of the enumeration value purpose (can be used as development documentation);
* **Label**: the text shown in the value selector, to represent the enumeration value;
* **Order**: a value used to order the enumeration values.