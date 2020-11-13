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

To access your subscription Database, you first need to instantiate pgAdmin. For that, in Docker expand _Containers_ and check the "`PORT`" number where the "`omniaplatform_pgadmin`" container is running. Open that local Port number on your Browser (for example, `localhost:16543`).

To log in pgAdmin use the following credentials:

| E-mail | omnia@omnia |
| Password | omnia |

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
