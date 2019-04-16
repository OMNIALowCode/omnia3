---
title: References in Behaviours
keywords: omnia3
summary: "How to reference .NET assemblies"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_references.html
folder: omnia3
---


## 1. Introduction

The platform's behaviours allow you to use write C# code to handle a series of scenarios (see [data](omnia3_modeler_datasources.html) and [entity](omnia3_modeler_behaviours.html) behaviours explained).

One of the most important things about working in C# is the ability to use references, whether via NuGet or just by referencing the DLLs. In OMNIA, if you want to utilize those references, you can, by adding **references** to your entities.

## 2. Adding references

There are two different kinds of references you can add to your model:
- **Entity references**: Associated with Entity behaviours. 
- **Data references**: Associated with Data behaviours. 

In order to add them, you can access the modeler, edit a data source, and go to ***Behaviour Dependencies > Add new***. Here, you identify the reference you want:
- **Name:** A platform-side identifier for the reference;
- **Description:** A human-readable description for the reference;
- **Path:** The path to that reference. The following paths are valid:
    - If it's a System.* reference, the path can be defined with only the assembly file name. i.e. System.Data.dll
    - For non-System assemblies, a full path (including the file name) can be provided i.e. C:\Assemblies\MyAssembly.dll
    - Relative paths are also supported. The assumed start path is the folder where the application is running. i.e. If it is located on C:\Omnia, and your assembly is on C:\Assemblies, the path should be ..\Assemblies\MyAssembly.dll
- **Assembly name:** The assembly name of the reference you are importing.
- **Execution Location:** The location where the assembly is going to be used. Possible values:
    - Other system (External): The assembly will be available to be used only on behaviours external to Omnia
    - OMNIA (Internal): The assembly will be available to be used only on behaviours executed on Omnia
    
    
After adding the assembly reference, they can be used on *Entities* and *Application Behaviours*, by referencing the namespaces to be used. The process to add namespaces is:

- **Entities**: Edit the Entity, and go to **Behaviour Namespaces / Add new**
- **Application Behaviours**: Edit the behaviour, and go to **Edit Namespaces / Add new**

Then, identify the following information:
- **Name:** A platform-side identifier for the reference;
- **Description:** A human-readable description for the reference;
- **Fully Qualified Name:** The fully qualified name of the reference. Will be added as an "using" on C# code
- **Execution Location:** Where in the data source the namespace will be available


## 3. Supported references

As the platform uses .NET Core, all references that run on an Internal data source will have to be compiled against one of the following:

- **.NET Core 1.0 - 2.1**
- **.NET Standard 1.0 - 2.0**

References that run on External data sources have to be compiled against:

- **.NET 4.7.2**

This is the only way we can guarantee compatibility. The most recent version of either is recommended, if you're developing a library yourself.
