---
title: Database Development
keywords: omnia3
summary: 'Database Development'
sidebar: omnia3_sidebar
permalink: omnia3_databasedevelopment.html
folder: omnia3
toc: false
---

## 1. Initializing Database Development

OMNIA Platform Database Development hold the _Database_ of a Tenant. To open it when locally running a Development Environment, check the Docker icon in your computer task-bar, right click it and open the _Dashboard_. That's where your OMNIA Platform Development Environment is running, containing all the different _Containers_.

To access your subscription Database, you first need to instantiate pgAdmin. For that open `http://host.docker.internal:16543` on your Browser.

`16543` is the default port of pgAdmin, but it can be **customized**. Check [here](#2-find-a-customized-port) on how to find a **customized** port.

To log in pgAdmin use the following credentials:

| E-mail | omnia@omnia |
| Password | omnia |

> If you're using the OMNIA Platform version 3.X or lower it is necessary to link the OMNIA Platform database. Follow the instructions in [How to link OMNIA Platform Database](#3-how-to-link-omnia-platform-database), below.

You've successfully added the new OMNIA local server to pgAdmin. To check the OMNIA database click in the dropdown next to the new server, then do it again in "`Databases`" and "`omnia`".

That's it! Now you have access to the entire subscription database, allowing you to locally run SQL Queries with _IntelliSense_ that supports entity and platform properties and variables. You may also **edit** those queries, check [here](#4-how-to-edit-sql-queries) on how to.

## 2. Find a customized port

Open Docker Desktop and expand the _containers_ of the `OMNIA Platform` project. Now check the "`PORT`" number of a container.

For example, with the **default** configurations, you should find _16543_ as "`omniaplatform_pgadmin`" and _5432_ as "`omniaplatform_database`" ports.

## 3. How to link OMNIA Platform Database

To link the OMNIA Platform Database:

- In the "`Browser`" section, right click in "`Servers`";
- Select "`Create`" and then "`Server...`";
- Set a _Name_ at your preference;
- Select the "`Connection`" tab;
- Set "`omniaplatform_database`" as _Host name/address_;
- Set the **default** port _5432_ as _Port_ (check [here](#2-find-a-customized-port) on how to find a **customized** port);
- Set "`omnia`" as _Username_ and _Password_;
- Hit _Save_.

## 4. Change SQL Queries and apply changes to Model

With the OMNIA database open in pgAdmin open a "`Query Editor`", you may do so by clicking in the "`Query tool`", the first icon right after the "`Browser`" section.

Now we must choose a query to edit. Select the "`Open File`" option (or press `ALT + O` for a quick access).

The OMNIA Platform subscription's behaviours are located in the _base path_ below. The files are organized by **Tenant**, **environment** and it's **build version**.

| Base path | /home/omnia/tmp/behaviours |

Navigate to the _base path_ and choose the **Tenant** and **environment**. Select the **Application** and **Source** folders and now choose the Tenant's **build version**.

> The latest successful build is always in the `/latest` folder.

You may read about the [structure of the build](omnia3_modeler_developingbehaviours.html#3-structure-of-the-downloaded-build), but for this case it's only important to navigate to `/Database/Queries`.

Finally, you may now select the query you wish to edit.

> Notice the `TEST AREA` in the head of any query, you may _set_ any value to test **only** in pgAdmin. Check [here]() to find out more about this test area.

Now to verify and test your changes, execute the query by clicking in the `"Execute/Refresh"` button in the buttons panel above, or press `F5` for quick access.

Verify the result in the `Data Output` panel below.

When you're satisfied with the result, you can apply the code to the Tenant's model using OMNIA CLI. For that, run the following code line in Powershell:

```
omnia-cli model apply --subscription [Subscription] --tenant [Tenant] --environment [Environment] --path [Path] --build
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
        omnia-cli model apply --subscription local --tenant mytenant --environment PRD
    ```
