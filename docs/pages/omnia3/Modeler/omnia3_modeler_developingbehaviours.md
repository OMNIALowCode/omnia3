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
* **Server**
  * **Behaviours**: The [C# classes](#4-c-behaviours) generated based on the modeled behaviours (Entity, Data and Application);
* **Database**
  * **Queries**: The SQL queries (modeled in advanced mode or not);
* **UI**
  * **Behaviours**: The JavaScript classes generated based on User Interface behaviours;
  * **WebComponents**: The JavaScript files representing the modeled Web Components.
  * **Themes**: The SASS files representing the modeled Themes.
  
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
  * A file will be generated for each entity and its name will respect the rule _MyEntityName.**Operations.cs**_.

## 5. C# Debugging

All C# behaviours can be debugged using all the debugging features of _Visual Studio_.

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


## 6. Remote UI Development
### 6.1. Pre-requisites
To develop OMNIA UI Behaviours and WebComponents you will need to:
* Install node.js. [Click here to download](https://nodejs.org/);
* [Download the build](#2-obtaining-the-model) you want to debug and unzip to a new folder.
* Using the command line, go to the extracted UI folder and install the npm packages running the command "`npm install`";

*We recommend to use VS Code and you can open the folder extracted. You can also use your IDE of choice.*

### 6.2. Initializing the development environment
To develop the User Interface Behaviours, Web Components and Themes, you need to serve the corresponding files using a local HTTP server. 

To do that, your project has a start script, so open the command line, change the working directory to the UI folder inside the unzipped folder (the build files) and run the following command:

```
    npm start
```

After the command executes, the files will be accessible from your browser. Save the Port of the HTTP server (you will need it later).

Once you have the HTTP server running:
* Access the modeler area of the tenant you want to develop;
* In the top bar, open the additional options of the _Build & deploy_ button and select the option **Remote UI Development**;
* Then, you will be prompted about the **Development endpoint port** and you must provide the Port of the HTTP server;
* After you type in the development endpoint port, you can **Start** the remote development environment;
* You will be redirected to the application with the development mode activated.


### 6.3. Debug User Interface Behaviours and Web Components

The best way to debug the JavaScript code executing in the OMNIA platform is using the Browser Developer Tools.

**Example with Chrome Developer Tools**

* Open the Developer Tools (F12);
* Go to the _Sources_ tab;
* Under the _(no domain)_ section, you have access to the loaded files;
* Opening the files, you can set breakpoints and debug the code like in any other web application.

Tip: If you add ```debugger;``` in any place of your code and have the Developer Tools open, it will act as a breakpoint when the browser hit this line of code.

### 6.4. Developing themes

By running `npm start` you are launching a sass compiler that will watch the changes to your files. So, just edit the _variables.scss_ file of your theme and reload the browser page.