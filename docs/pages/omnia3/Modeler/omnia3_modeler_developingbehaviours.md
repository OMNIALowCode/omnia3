---
title: Developing and Debugging Behaviours
keywords: omnia3
summary: "How to develop and debug Behaviours with the help of Visual Studio"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_developingbehaviours.html
folder: omnia3
---


## 1. Introduction
When developing behaviours in the OMNIA platform, writing C# with no context directly into the modeling area is not going to be enough for any other than the simplest scenarios. However, it is possible to download the exact C# classes that the platform will use for its execution of the behaviours, and both develop code and test it in Visual Studio.


## 2. Obtaining the model

- Access the modeling area for the tenant and environment you want to develop in;
- Access ***Versioning > Builds*** and download the build you want, using the *Download build* option;

## 3. Structure of the downloaded build
After extracting the downloaded build (a .zip file), you will have the following folders:
* **classes**: The [C# classes](#4-c-behaviours) generated based on the modeled behaviours (Entity, Data and Application);
* **queries**: The SQL queries (modeled in advanced mode or not);
* **uiClasses**: The JavaScript classes generated based on User Interface behaviours.

## 4. C# Behaviours
In the build folder, inside the *classes* folder you will have the following folders:
* **_common**: Contains the *Data Transfer Objects (DTOs)* used to transfer the entity's data between systems. To each entity added to the model, a *DTO* will be generated in this folder;
* **Internal**: Contains a folder to each [Data Source](#41-data-source-structure) that will have behaviours executed in the internal OMNIA behaviour environment (the Data Source *System* will always be placed here);
* **External**: Contains a folder to each [Data Source](#41-data-source-structure) that will have behaviours executed in an external environment (either on OMNIA Connector or not).

### 4.1 Data Source structure
Each *Data Source* will have a folder with a *Visual Studio* C# Project, which contains all the behaviours that will be executed in this *Data Source*.

The project can have (depending of which behaviours are modeled) the following folders:
* **Application**: Contains the [*Application Behaviours*](omnia3_modeler_behaviours.html#5-application-behaviours);
* **Data**: Contains the *Data Access Objects (DAOs)* (one per entity), each one with the representation of the modeled [*Data Behaviours*](omnia3_modeler_datasources.html#2-types-of-data-behaviours);
* **Entity**: Contains the classes (one per entity) that support the execution of the operations modeled through [*Entity Behaviours*](omnia3_modeler_behaviours.html#2-types-of-behaviours).
  * To each entity will be generated a file which name will respect the rule _MyEntityName.**Operations.cs**_.

## 5. Debugging
It's possilbe to debug all the C# behaviours, using the _Visual Studio_ and all of its debugging features.

To debug and develop behaviours you need to use the OMNIA Connector to receive the requests made to a given *Tenant* and *Data Source*.

Attaching the connector to a *Data Source*, will make all the requests to to be forwarded to your connector during that session.

### 5.1 Pre-requisites
In order to debug the OMNIA Behaviours you will need to:
* Download and configure the OMNIA Connector. [See here how to do that](omnia3_connector_install.html);
* [Download the build](#2-obtaining-the-model) you want to debug and unzip the file.

### 5.2 Debug Cloud Behaviours
In order to debug the behaviours that will be executed in the cloud (including the behaviours of the *Data Source* *System*), you need to attach your *OMNIA Connector* to the *OMNIA Platform* subscription running on the cloud.

To do that, you need to execute the following command, using the *Command Line*, replacing the Tenant code and the Data Source you want to debug:
```
    ./Omnia.Connector.Windows.exe run --attach -tenant:YourTenantCode -datasource:DataSourceToDebug
```

*Note: The parameters are case sensitive*

Once you have runned the previous command:
* Open the build folder and navigate to the folder *classes*;
* Open the folder of the *Data Source* you have attached to debug in the previous command;
* Open the C# project in _Visual Studio_, using the _.csproj_ file.

Using the _Visual Studio_ debbuging features, start the debbuger and from now on, all the requests made in the _OMNIA Platform_ to this _Data Source_ will be forwarded to this debug session.

### 5.3 Debug Connector Behaviours
In order to debug the behaviours that will be executed in the Connector, through a custom [*Data Source*](omnia3_modeler_datasources.html), you need to start the _OMNIA Connector_:
* Opening the executable *Omnia.Connector.Windows.exe*;
* Or executing the following command on the *Command Line*:
    ```
        ./Omnia.Connector.Windows.exe
    ```

Once you have the *OMNIA Connector* running:
* Open the build folder and navigate to the folder *classes*;
* Open the folder of the *Data Source* you want to debug;
* Open the C# project in _Visual Studio_, using the _.csproj_ file.

Using the _Visual Studio_ debbuging features, start the debbuger and from now on, all the requests made in the _OMNIA Platform_ to this _Data Source_ will be forwarded to this debug session.
