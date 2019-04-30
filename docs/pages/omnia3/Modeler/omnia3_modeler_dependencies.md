---
title: Behaviour Dependencies
keywords: omnia3
summary: "How to use .NET dependencies"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_dependencies.html
folder: omnia3
---


## 1. Introduction

The platform's behaviours allow you to use write C# code to handle a series of scenarios (see [data](omnia3_modeler_datasources.html) and [entity](omnia3_modeler_behaviours.html) behaviours explained).

One of the most important things about working in C# is the ability to use dependencies by referencing DLLs. 

In OMNIA, if you want to depend from external code, you can accomplish it by:

1. **File Dependency:** Reference a DLL.
2. **Code Dependency:** Add code that supports the logic of the modeled behaviours.

##  2. File dependencies

### 2.1 Adding file dependencies

In order to add dependencies, you can access the modeler, edit a data source, and go to ***Behaviour Dependencies > Add new > File dependency***. Here, you identify the reference you want:

- **Name:** A platform-side identifier for the dependency;
- **Description:** A human-readable description for the dependency;
- **Path:** The path to that dependency. The following paths are valid:

    - If it's a System.* reference, the path can be defined with only the assembly file name. i.e. System.Data.dll (File will be searched in the folder of the current .net SDK)
    - For non-System assemblies, a full path (including the file name) can be provided i.e. C:\Assemblies\MyAssembly.dll
    - Relative paths are also supported. The assumed start path is the folder where the application is running. i.e. If it is located on C:\Omnia, and your assembly is on C:\Assemblies, the path should be ..\Assemblies\MyAssembly.dll
- **Assembly name:** The assembly name of the reference you are importing.
- **Execution Location:** The location where the assembly is going to be used. Possible values:

    - Other system (External): The assembly will be available to be used only on behaviours external to Omnia
    - OMNIA (Internal): The assembly will be available to be used only on behaviours executed on Omnia

    

### 2.2 Referencing dependency namespaces

After adding the assembly reference, they can be used on *Entities* and *Application Behaviours*, by referencing the namespaces to be used. The process to add namespaces is:

- **Entities**: Edit the Entity, and go to **Behaviour Namespaces / Add new**
- **Application Behaviours**: Edit the behaviour, and go to **Edit Namespaces / Add new**

Then, identify the following information:
- **Name:** A platform-side identifier for the reference;
- **Description:** A human-readable description for the reference;
- **Fully Qualified Name:** The fully qualified name of the reference. Will be added as an "using" on C# code
- **Execution Location:** Where in the data source the namespace will be available


### 2.3 Supported references

As the platform uses .NET Core, all references that run on an Internal data source will have to be compiled against one of the following:

- **.NET Core 1.0 - 2.1**
- **.NET Standard 1.0 - 2.0**

References that run on External data sources have to be compiled against:

- **.NET 4.7.2**

This is the only way we can guarantee compatibility. The most recent version of either is recommended, if you're developing a library yourself.



## 3. Code dependencies

Code dependencies can be used to add code that your behaviours depend on but you don't have a physical DLL to depend on.

This feature will enable you to add C# Code that will be compiled together with the behaviours, inside a *"CodeDependencies"* folder and the file will have the name of the Dependency.

Code dependencies don't need to respect any contract so you can add complete classes. 

The code provided will be generated inside of a namespace related to the tenant, and the tenant namespace will be automatically added.

```c#
using Omnia.Behaviours.MyTenant.Dtos;
using Omnia.Behaviours.MyTenant.Internal.System;

namespace Omnia.Behaviours.MyTenant.Internal.System
{
	// Code dependency code goes here
}
```



### 3.1 Adding code dependencies

In order to add code/expression dependencies, you can access the modeler, edit a data source, and go to ***Behaviour Dependencies > Add new > Code/Expression dependency***. Here, you identify the code you want:

- **Name:** A platform-side identifier for the dependency;
- **Description:** A human-readable description for the dependency;
- **Generate the following C# code:** The code you want to add to the compiled assembly.
- **Execution Location:** The location where the assembly is going to be used. Possible values:
  - Other system (External): The assembly will be available to be used only on behaviours external to Omnia
  - OMNIA (Internal): The assembly will be available to be used only on behaviours executed on Omnia

### 3.2 Using code dependencies

To use a code dependency you can simply invoke the code from your behaviours.

### 3.3 Declaring namespaces in code dependencies

In .NET you can declare an *using* inside of a namespace, so you accomplish it by declaring the using on the top of the code expression.

```c#
using Omnia.Behaviours.MyTenant.Dtos;
using Omnia.Behaviours.MyTenant.Internal.System;

namespace Omnia.Behaviours.MyTenant.Internal.System
{
    using System.Linq;
	namespace CodeDependencies {
        
    }
}
```



### 3.4  Recommended

- Use namespaces
- Prefer multiple Code Dependencies to one huge Code Dependency

