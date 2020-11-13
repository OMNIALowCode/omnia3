---
title: UI Development
keywords: omnia3
summary: 'UI Development'
sidebar: omnia3_sidebar
permalink: omnia3_uidevelopment.html
folder: omnia3
toc: false
---

## 1. Initializing User Interface Development

OMNIA Platform UI development workspace hold the _User Interface Behaviours_ of a Tenant. To open it while locally running a Development Environment, open `http://host.docker.internal:5000` on your Browser and access the Modeler page of the Tenant you want to debug in.

Click in the dropdown arrow right next to the "_Build & deploy_" option, check the options in the "_Development Workspaces (VS Code)_" section and select the "_Open UI Development Workspace_".

A new Visual Studio Code window will now open.

## 2. Switching Tenant Model

With Server Development opened, you can switch to another model by following the steps in ["Initializing User Interface Development"](#1.initializing-user-interface-development) relatively the other desired Tenant.

This will replace the content in your Visual Studio Code window with the model that you now opened.

## 3. Change code and apply changes to Model

You can check every _User Interface Behaviour_ in the User Interface Workspace and change any code. Note that local changes only applies after saving the files.

Now to verify and test your changes, you need to start a _HTTP server_ by pressing `F5` or the `"Run"` button on the left panel. This has the same result as the _HTTP server_ you start when using Remote UI, so don't forget to save the HTTP Port it returns.

To access your local application, navigate to `http://host.docker.internal:5000` and follow the steps in ["Once you have the HTTP server running" section](omnia3_modeler_developingbehaviours.html#6.2-initializing-the-development-environment).

When you're satisfied with the result, you can apply the code to the Tenant's model using OMNIA CLI. For that, run the following code line in Powershell:

```
omnia-cli model behaviours apply --subscription [Subscription] --tenant [Tenant] --environment [Environment] --path [Path] --build
```

Change the Parameters inside "_[ ]_" with:

| Parameter    | Description                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| Subscription | The name of the configured subscription                                                                 |
| Tenant       | The code of the tenant to be downloaded                                                                 |
| Environment  | (Optional) The tenant environment. If not inserted, PRD is assumed                                      |
| Path         | (Optional) The path where the model will be downloaded to. If not inserted, the current path is assumed |

Note the flag `"--build"`, it ensures a new Tenant's Build is created. If you **don't** want a new build, you can execute the code without this flag, but be aware the code you send to the OMNIA Platform will remain in the Tenant's Modeler as "_changed_".

## 4. Debug

You can always locally debug any User Interface Behaviour, and since you're using Visual Studio Code it's also possible to use breakpoints and _IntelliSense_ that supports entity and platform properties and variables.
