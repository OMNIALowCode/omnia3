---
title: Developing and Debugging Behaviours
keywords: lowcode visual studio remote development c# behaviours
summary: 'All the information on how to develop and debug C# Behaviours with the help of Visual Studio as a remote development tool for your OMNIA Applications.'
sidebar: omnia3_sidebar
permalink: omnia3_modeler_developingbehaviours.html
folder: omnia3
---

## 1. Introduction

When developing behaviours in the OMNIA platform, writing C# with no context directly into the modeling area is not going to be enough for any other than the simplest scenarios. However, it is possible to download the exact C# classes that the platform will use for its execution of the behaviours, and both develop code and test it in Visual Studio.

## 2. Obtaining the model

- Access the modeling area for the tenant and environment you want to develop in;
- Access **_Versioning > Builds_** and download the build you want, using the _Download build_ option;

## 3. Structure of the downloaded build

After extracting the downloaded build (a .zip file), you will have the following folders:

- **Server**
  - **Behaviours**: The [C# classes](#4-c-behaviours) generated based on the modeled behaviours (Entity, Data and Application);
- **Database**
  - **Queries**: The SQL queries (modeled in advanced mode or not);
- **UI**
  - **Behaviours**: The JavaScript classes generated based on User Interface behaviours;
  - **WebComponents**: The JavaScript files representing the modeled Web Components.
  - **Themes**: The SASS files representing the modeled Themes.

## 4. C# Behaviours

In the build folder, inside the _classes_ folder you will have the following folders:

- **\_common**: Contains the _Data Transfer Objects (DTOs)_ used to transfer the entity's data between systems. To each entity added to the model, a _DTO_ will be generated in this folder;
- **Internal**: Contains a folder to each [Data Source](#41-data-source-structure) that will have behaviours executed in the internal OMNIA behaviour environment (the Data Source _System_ will always be placed here);
- **External**: Contains a folder to each [Data Source](#41-data-source-structure) that will have behaviours executed in an external environment (either on OMNIA Connector or not).

### 4.1 Data Source structure

Each _Data Source_ will have a folder with a _Visual Studio_ C# Project, which contains all the behaviours that will be executed in this _Data Source_.

The project can have (depending of which behaviours are modeled) the following folders:

- **Application**: Contains the [_Application Behaviours_](omnia3_modeler_behaviours.html#5-application-behaviours);
- **Data**: Contains the _Data Access Objects (DAOs)_ (one per entity), each one with the representation of the modeled [_Data Behaviours_](omnia3_modeler_datasources.html#2-types-of-data-behaviours);
- **Entity**: Contains the classes (one per entity) that support the execution of the operations modeled through [_Entity Behaviours_](omnia3_modeler_behaviours.html#2-types-of-behaviours).
  - A file will be generated for each entity and its name will respect the rule _MyEntityName.**Operations.cs**_.

## 5. C# Debugging

All C# behaviours can be debugged using all the debugging features of _Visual Studio_.

To debug and develop behaviours you need to use the OMNIA Connector to receive the requests made to a given _Tenant_ and _Data Source_.

Attaching the connector to a _Data Source_, will make all the requests to to be forwarded to your connector during that session.

### 5.1 Pre-requisites

In order to debug the OMNIA Behaviours you will need to:

- Download and configure the OMNIA Connector. [See here how to do that](omnia3_connector_install.html);
- [Download the build](#2-obtaining-the-model) you want to debug and unzip the file.

### 5.2 Debug Cloud Behaviours

In order to debug the behaviours that will be executed in the cloud (including the behaviours of the _Data Source_ _System_), you need to attach your _OMNIA Connector_ to the _OMNIA Platform_ subscription running on the cloud.

To do that, you need to execute the following command, using the _Command Line_, replacing the Tenant code and the Data Source you want to debug:

```
    ./Omnia.Connector.Windows.exe run --attach -tenant:YourTenantCode -datasource:DataSourceToDebug
```

_Note: The parameters are case sensitive_

Once you have runned the previous command:

- Open the build folder and navigate to the folder _classes_;
- Open the folder of the _Data Source_ you have attached to debug in the previous command;
- Open the C# project in _Visual Studio_, using the _.csproj_ file.

Using the _Visual Studio_ debbuging features, start the debbuger and from now on, all the requests made in the _OMNIA Platform_ to this _Data Source_ will be forwarded to this debug session.

### 5.3 Debug Connector Behaviours

In order to debug the behaviours that will be executed in the Connector, through a custom [_Data Source_](omnia3_modeler_datasources.html), you need to start the _OMNIA Connector_:

- Opening the executable _Omnia.Connector.Windows.exe_;
- Or executing the following command on the _Command Line_:
  ```
      ./Omnia.Connector.Windows.exe
  ```

Once you have the _OMNIA Connector_ running:

- Open the build folder and navigate to the folder _classes_;
- Open the folder of the _Data Source_ you want to debug;
- Open the C# project in _Visual Studio_, using the _.csproj_ file.

Using the _Visual Studio_ debbuging features, start the debbuger and from now on, all the requests made in the _OMNIA Platform_ to this _Data Source_ will be forwarded to this debug session.

## 6. Remote UI Development

### 6.1. Pre-requisites

To develop OMNIA UI Behaviours and WebComponents you will need to:

- Install node.js. [Click here to download](https://nodejs.org/);
- [Download the build](#2-obtaining-the-model) you want to debug and unzip to a new folder.
- Using the command line, go to the extracted UI folder and install the npm packages running the command "`npm install`";

_We recommend to use VS Code and you can open the folder extracted. You can also use your IDE of choice._

### 6.2. Initializing the development environment

To develop the User Interface Behaviours, Web Components and Themes, you need to serve the corresponding files using a local HTTP server.

To do that, your project has a start script, so open the command line, change the working directory to the UI folder inside the unzipped folder (the build files) and run the following command:

```
    npm start
```

After the command executes, the files will be accessible from your browser. Save the Port of the HTTP server (you will need it later).

Once you have the HTTP server running:

- Access the modeler area of the tenant you want to develop;
- In the top bar, open the additional options of the _Build & deploy_ button and select the option **Remote UI Development**;
- Then, you will be prompted about the **Development endpoint port** and you must provide the Port of the HTTP server;
- After you type in the development endpoint port, you can **Start** the remote development environment;
- You will be redirected to the application with the development mode activated.

### 6.3. Debug User Interface Behaviours and Web Components

The best way to debug the JavaScript code executing in the OMNIA platform is using the Browser Developer Tools.

**Example with Chrome Developer Tools**

- Open the Developer Tools (F12);
- Go to the _Sources_ tab;
- Under the _(no domain)_ section, you have access to the loaded files;
- Opening the files, you can set breakpoints and debug the code like in any other web application.

Tip: If you add `debugger;` in any place of your code and have the Developer Tools open, it will act as a breakpoint when the browser hit this line of code.

### 6.4. Developing themes

By running `npm start` you are launching a sass compiler that will watch the changes to your files. So, just edit the _variables.scss_ file of your theme and reload the browser page.

## 7. Development Environment (Docker)

### 7.1. Pre-requisites

To develop an OMNIA Platform on top of a Docker you will need to:

- Install Docker. [Click here to download](https://www.docker.com/products/docker-desktop/);
- [Download the latest version of Development Environment](omnia3_downloads.html) and unzip to a new folder.
- Go to the extracted folder and install OMNIA services by running the PowerShell script file "`start.ps1`";

A new tab on your browser should open in `localhost:5000`, providing you the full OMNIA experience right from machine.

During the first run experience, you must create a user and add a new Tenant to the Platform.

You're only able to use the Development Environment after your first Tenant build (using _Build & Deploy_ option in Modeler). After that you will have local access to Platform's Behaviours and make changes with an instant effect on your Browser.

### 7.2. Initializing the local development environment

To initialize the local development environment you need to install the [Remote - Containers extension](vscode:extension/ms-vscode-remote.remote-containers) on your Visual Studio Code, to be able to open the project workspaces on Docker containers.

OMNIA Platform offers a simple way to open project workspaces directly from the local running Tenant's Modeler section. On how to do that, follow the steps in "`Open Workspaces via Modeler`".

In order to run queries using the local Database, follow the steps on how to ["Debug Database Queries"](#7.5-debug-database-queries).

You can also open workspaces directly from Visual Studio Code, requiring more configuration. For that, follow the steps in the ["Advanced chapter below"](#7.6-advanced-initializing-the-local-development-environment).

#### Open Workspaces via Modeler

Open `localhost:5000` on your Browser, open the Tenant that you want to debug and go to it's Modeler page.

Now click in the dropdown arrow right next to the "_Build & deploy_" option, check the options in the "_Development Workspaces (VS Code)_" section and select the "_Development Workspace_" you want to debug:

- For "_Open UI Development Workspace_" wait for Visual Studio Code to open and continue reading in ["Debug User Interface Behaviours"](#7.3-debug-user-interface-behaviours);

- For "_Open Server Development Workspace_", wait for Visual Studio Code to open, navigate to "`/Behaviours`" folder, select the "`dev.code-workspace`" file to open the Server workspace and continue reading in ["Debug Entity Behaviours"](#7.4-debug-entity-behaviours).

### 7.3. Debug User Interface Behaviours

With the UI workspace open you can check every UI Behaviour inside the "`/Behaviours`" folder, and change any code to debug. Local changes only applies after saving the files.

Now to verify and test your changes, you need to start a _HTTP server_ by pressing `F5` or the `"Run"` button on the left panel. This has the same result as the _HTTP server_ you start when using Remote UI, so don't forget to save the HTTP Port it returns.

To access your local application, navigate to `localhost:5000` and follow the steps in ["Once you have the HTTP server running" section](#6.2-initializing-the-development-environment).

This allows you to locally debug and code any OMNIA Platform application UI Behaviour, use breakpoints and _IntelliSense_ that supports entity and platform properties and variables.

### 7.4. Debug Entity Behaviours

With the Server workspace open you can check every Entity Behaviour and change any code to debug. Local changes only applies after saving the files.

As soon as you open the Server workspace for the first time, you may receive a notification in VS Code to install some `extensions`. We recommend you to do that to enable _IntelliSense_.

Another notification to restore code dependencies must also prompts in the first time running the workspace, having you to confirm it to avoid errors.

Now to verify and test your changes, start a local server by pressing `F5` or the `"Run"` button on the left panel.

To access your local application, navigate to `localhost:5000` and open the _Application_ section.

This allows you to locally debug and code any OMNIA Platform application Entity Behaviour, use breakpoints and _IntelliSense_ that supports entity and platform properties and variables.

### 7.5. Debug Database Queries

Check the Docker icon in your computer task-bar, right click it and open the _Dashboard_. That's where your OMNIA Platform Docker is running, containing all the different _Containers_.

To access your subscription Database, you first need to instantiate pgAdmin. For that, in Docker expand _Containers_ and check the "`PORT`" number where the "`omniaplatform_pgadmin`" container is running. Open that local Port number on your Browser (for example, `localhost:16543`).

To log in pgAdmin use the following credentials:

- **E-mail:** `omnia@omnia`
- **Password:** `omnia`

Now, to link the OMNIA Platform database:

- In the "`Browser`" section, right click in "`Servers`";
- Select "`Create`" and then "`Server...`";
- Set a _Name_ at your preference;
- Select the "`Connection`" tab;
- Set "`omniaplatform_database`" as _Host name/address_;
- Set the "`PORT`" of the _Container_ "`omniaplatform_database`" (check it in Docker, like you did before for "`omniaplatform_pgadmin`") as _Port_;
- Set "`omnia`" as _Username_ and _Password_;
- Hit _Save_.

You've successfully added the new OMNIA local server to pgAdmin. To check the OMNIA database click in the dropdown next to the new server, then do it again in "`Databases`" and "`omnia`".

That's it! Now you have access to the entire subscription database, allowing you to locally run SQL Queries with _IntelliSense_ that supports entity and platform properties and variables.

### 7.6. Advanced: Initializing the local development environment

To initialize the local development environment open Visual Studio Code and follow the next steps:

- Click in the left corner new green button "`Open a Remote Window`";
- Select "`Remote-Container: Attach to Running Container...`" option;
- Select "`/omniaplatform_development`" container.

A new VS Code window will open, you may now close the previous one. The new window is linked with the OMNIA Platform local Container, you will need to select which Behaviours to debug: `UI`, `Entity` or `Queries`. To do so:

- Select "File" option in the top navigation menu;
- Select "Open workspace";
- To set the `.workspace` file location, replace the "`/root/`" path with "`/home/omnia/tmp/behaviours/`";
- Keep editing the directory path, now selecting the Tenant you want to debug;
- Select the environment directory;
- To have access to the most recent application version select "`/Application/Source/latest/`"\* directory. You can also access any other version by replacing `latest` with the desired version's path.

Select one of the folders to choose the Behaviours type to debug:

- "`/UI`", select the "`dev.code-workspace`" file to open the UI workspace and continue reading in ["Debug User Interface Behaviours"](#7.3-debug-user-interface-behaviours);

- "`/Server`", navigate to "`/Behaviours`" folder, select the "`dev.code-workspace`" file to open the Server workspace and continue reading in ["Debug Entity Behaviours"](#7.4-debug-entity-behaviours).

\* NOTE: The `/latest` folder always contains the most recent version of the local Tenant's application, meaning it changes whenever you _Build & Deploy_.

### 7.7. Remove OMNIA Containers from Docker

To remove ("_uninstall_") the OMNIA Platform containers from your Docker, you simply need to run the following command:

```
    docker-compose -p OmniaPlatform down --rmi all
```

This will stop every running container from the `OmniaPlatform` project and then remove them all, including it's images.

NOTE: This command doesn't remove local storage data.
