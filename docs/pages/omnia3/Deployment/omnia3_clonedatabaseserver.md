---
title: OMNIA 3.0 Clone Database Server
keywords: omnia3
summary: "How to clone an OMNIA Postgres server"
permalink: omnia3_clonedatabaseserver.html
folder: omnia3
---

## Prerequisites

- PostgreSQL server must be installed on the machine where the process is being executed  ([PostgreSQL download page](https://www.postgresql.org/download))

- Access to origin and destination server must be granted


### Steps

The following steps must be executed on command line:

- Use [pg_dumpall](https://www.postgresql.org/docs/10/app-pg-dumpall.html) utility to export origin server. The following command options must be considered:
  - -h: Server endpoint
  - -U: Server username
  - -f: Destination file

  Example:
```console
pg_dumpall.exe -h myOriginHostname -U myServerUser -f myDestinationFile.sql -W -v
```

- To import to the destination server use [psql](https://www.postgresql.org/docs/10/app-psql.html) command. The following command options must be considered:

  - -f: Destination file
  - -h: Server endpoint
  - -d: Database to connect. Since we're copying the full server, we suggest connection to the maintenance database (usually "postgres")
  - -U: Server username
  
  Example:

  ```console
  psql.exe -f myDestinationFile.sql -h myDestinationHostname -d postgres -U myServerUser -W
  ```

- After the copy ends, access the copied Omnia databases to change references to the previous server. The following queries must be executed:

 - Update the server on table tenants.environments (replace myDestinationHostname by the correct server hostname):

   ```sql
   UPDATE tenants.environments SET server = 'myDestinationHostname'
   ```
  - (Optional) If your destination server is an Azure Postgres Server, to comply with Azure username requirements (user@servername):

     ```sql
     UPDATE tenants.environments SET username = REPLACE(username, 'originServername', 'newServername'), business_read_username = REPLACE(business_read_username, 'originServername', 'newServername')
     ```
