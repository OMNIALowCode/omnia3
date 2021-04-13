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

Since version **3.4.131** of the Development Environment, connection to OMNIA local server is predefined, and the server is automatically listed.

For **previous** Development Environment versions, execute the following steps:

1. Log in pgAdmin using the following credentials:

| E-mail | omnia@omnia |
| Password | omnia |

2. Connect to the OMNIA Platform database:

- In the "`Browser`" section, right click in "`Servers`";
- Select "`Create`" and then "`Server...`";
- Set a _Name_ at your preference;
- Select the "`Connection`" tab;
- Set "`omniaplatform_database`" as _Host name/address_;
- Set the **default** port _5432_ as _Port_ (check [here](#2-find-a-customized-port) on how to find a **customized** port);
- Set "`omnia`" as _Username_ and _Password_;
- Hit _Save_.

You've successfully added the new OMNIA local server to pgAdmin. To check the OMNIA database click in the dropdown next to the new server, then do it again in "`Databases`" and "`omnia`".

That's it! Now you have access to the entire subscription database, allowing you to locally run SQL Queries with _IntelliSense_ that supports entity and platform properties and variables.

## 2. Find a customized port

Open Docker Desktop and expand the _containers_ of the `OMNIA Platform` project. Now check the "`PORT`" number of a container.

For example, with the **default** configurations, you should find _16543_ as "`omniaplatform_pgadmin`" and _5432_ as "`omniaplatform_database`" ports.
