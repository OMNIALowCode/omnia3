---
title: OMNIA 3.0 Connector Install Guide
keywords: omnia3
summary: "OMNIA 3.0 Connector Install Guide"
sidebar: omnia3_sidebar
permalink: omnia3_connector_install.html
folder: omnia3
---
## 1. Download connector

First you need to download the connector (Downloads page);

## 2. Configure connector

A configuration file (_**config.json**_) is distributed together with the connector, that you must fill in in order to use it. 

- **Endpoint**: The URL of the OMNIA subscription you want the connector to be used on.
- **Client**: [Click here to know how to get the Client ID and Secret](omnia3_management_introduction.html#52-get-the-api-client-credentials)
    - **ID**: Client ID of the connector configuration you registered on the platform.
    - **Secret**: Client Secret of the connector configuration you registered on the platform.

It also supports optional parameters:

- **BehavioursManagerPort**: The port that the connector will open its behaviours manager on. If ommitted, defaults to **49995**. If this is already in use (i.e. you want to have two connectors in parallel), you must add this configuration.

## 3. Install connector

After you have downloaded the connector (see our [Downloads page](omnia3_downloads.html)) and extracted it, you can either run it directly (not recommended for production environments) or install it as a Windows service.

To run it, you should just do `Omnia.Connector.Windows.exe` (in cmd) or `./Omnia.Connector.Windows.exe` (in powershell) from the folder you extracted it to. In order to install the Windows service, add `install` to the end of that line. To uninstall it, add `uninstall`. In both of these scenarios, ensure you are running as an administrator.

## 4. Managing connector

When the connector is installed as a Windows service, it can be started or stopped on Windows Services list.

The connector can also be started through console, by inserting on cmd `Omnia.Connector.Windows.exe`.

Either way, the connector will launch three different processes on the machine:

- Omnia.Connector.Windows.exe
- Omnia.Services.Behaviours.Manager.exe
- Omnia.Services.Behaviours.Server.exe

All processes are essential and should not be manually closed, so that the connector is always responsive.
