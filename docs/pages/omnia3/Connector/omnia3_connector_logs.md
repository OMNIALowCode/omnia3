---
title: OMNIA 3 Connector Logging
keywords: omnia3
summary: "OMNIA 3 Connector Logging"
sidebar: omnia3_sidebar
permalink: omnia3_connector_logs.html
folder: omnia3
---
## 1. Obtaining the logs
There are three different logs being produced when you run the connector: the connector itself's logs, the behaviour manager's, and the behaviour server's. To understand what these three different softwares do, please read [this page](omnia3_connector_introduction.html).

Each of them will output their logs into the log folder configured by the user, following the same logging logic as the rest of the platform: a file prefixed by the date, such as `20180606-behavioursserver.log`. These files will be automatically split when they become too large.

### Where to find the log files?

The default locations are:

 - **Behaviours logs:** c:\var\log
 - **Connector logs:** %temp%\omnia\

_Note: if the Connector is running in the context of Local System user, the Temp folder of that user is: C:\Windows\Temp\omnia_

## 2. Analyzing the logs
To analyze these logs, we recommend using a tool such as Notepad++, due to their potentially large file size and contents.

By default, they will be present in the temporary folder of your system, under an "omnia" folder, i.e., `%temp%/omnia` on Windows.
