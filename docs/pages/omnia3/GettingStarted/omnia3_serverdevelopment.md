---
title: Server Development
keywords: omnia3
summary: 'Server Development'
sidebar: omnia3_sidebar
permalink: omnia3_serverdevelopment.html
folder: omnia3
toc: false
---

## 1. Initializing Server Development

OMNIA Platform Server development workspace hold the _Entity Behaviours_ of a Tenant. To open it while locally running a Development Environment, open `http://host.docker.internal:5000` on your Browser and access the Modeler page of the Tenant you want to debug in.

Click in the dropdown arrow right next to the "_Build & deploy_" option, check the options in the "_Development Workspaces (VS Code)_" section and select the "_Open Server Development Workspace_".

A new Visual Studio Code window will now open.

As soon as you open the Server workspace for the first time, you may receive a notification in VS Code to install some `extensions`. We recommend you to do that to enable _IntelliSense_.

Another notification to restore code dependencies must also prompts in the first time running the workspace, having you to confirm it to avoid errors. This also happens after a _Clean & Build_.

## 2. Switching Tenant Model

With Server Development opened, you can switch to another model by following the steps in ["Initializing Server Development"](#1.initializing-server-development) relatively the other desired Tenant.

This replaces all the code in the model that you opened with Visual Studio Code.

## 3. Change code and apply changes to Model

You can check every _Entity Behaviour_ in the Server Workspace and change any code. Note that local changes only applies after saving the files.

Now to verify and test your changes, start a local server by pressing `F5` or the `"Run"` button on the left panel.

To access your local application, navigate to `http://host.docker.internal:5000` and open the _Application_ section.

When you're satisfied with the result, you can apply the code to the Tenant's model using OMNIA CLI. For that, run the following code line in Powershell:

```
omnia-cli model behaviours apply --subscription [Subscription] --tenant [Tenant] --environment [Environment] --path [Path] --build
```

Change the Parameters inside "_[ ]_" with:

| Parameter    | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| Subscription | (Optional) The name of the configured subscription. Optional if there's only one subscription configured. |
| Tenant       | The code of the tenant to be downloaded                                                                   |
| Environment  | (Optional) The tenant environment. If not inserted, PRD is assumed                                        |
| Path         | (Optional) The path where the model will be downloaded to. If not inserted, the current path is assumed   |

Note the flag `"--build"`, it ensures a new Tenant's Build is created. If you **don't** want a new build, you can execute the code without this flag, but be aware the code you send to the OMNIA Platform will remain in the Tenant's Modeler as "_changed_".

**Example:**

    ```
        omnia-cli model behaviours apply --subscription local --tenant mytenant --environment PRD
    ```

## 4. Debug

You can always locally debug any Entity Behaviour, and since you're using Visual Studio Code it's also possible to use breakpoints and _IntelliSense_ that supports entity and platform properties and variables.
