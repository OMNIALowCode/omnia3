---
title: OMNIA 3.0 Connector Introduction
keywords: omnia3
summary: "OMNIA 3.0 Connector Introduction"
sidebar: omnia3_sidebar
permalink: omnia3_connector_introduction.html
folder: omnia3
---


## 1. Introduction

The **OMNIA Connector** is the software that the OMNIA Platform uses to communicate with the customer's servers in order to execute external behaviours. 

## 2. How it works
The **OMNIA Connector** shares the same behaviours engine as the **OMNIA Platform**. When the connector starts it'll launch a **Behaviours Manager** process. The manager is responsible for locating and launching the required **Behaviours Servers**. The server, aside from the execution of the desired behaviours, is also responsible for their compilation.

![Connector architecture](images\connector_arch.jpg){: .image-center}

The manager will launch a new server process when configurable maximal number of builds is reached. This new process will co-exist with the other server processes in the connector.

## 3. Requirements

* Internet access
    - Access to the OMNIA Platform address (Port 443 or 80 if not running under HTTPS).
* .NET Framework 4.7.2
* Compatible Windows version:
    - Windows Server 2012 or higher
    - Windows 8.1+ or 10 (Anniversary Update and beyond).

## 4. Debugging behaviours on the connector
By default, the behaviours the connector executes will be downloaded to the temporary folder of your system, under an "omnia" folder, i.e., `%temp%/omnia` on Windows, and organized inside that folder by their tenant/environment codes.

Following the instructions on [this page]( omnia3_modeler_developingbehaviours.html), you will be able to develop and/or test any behaviours that are meant to run connector-side. Our recommendation is to, if possible, install Visual Studio on the same machine that is running the connector, so you can reference all the same DLLs and local files that are being used in the behaviours.

## 5. Connectivity
Once the connector is running, the connection between it and the server will be kept active without the user having to do anything. 

However, there are scenarios where it is necessary to perform manual maintenance on the installation, namely, when disconnections occur, or the connector is failing to start its behaviour executing components.

### 5.1. Start policy
If the connector cannot establish a connection when launching, it will retry that connection for up to one minute before crashing. 

### 5.2. Disconnection retry policy
If the connector is running and a disconnection is detected, it will begin a process of **exponential backoff**. 

This means that the connector will keep attempting to re-establish the connection, with more and more space between attempts. 

If after **22 attempts** (approximately 2 hours and 20 minutes total), we assume there is a _permanent_ issue with the connection and will stop trying to reconnect. 

This will lead to manual intervention being necessary.

### 5.3 Single connection per Connector
Only one connector can be connected using the same pair of configurations (client and secret). For this reason, if you start a new connector with the same configuration, the platform will request the previously active connector to shut down. 

In this case, you will see a warning in the new connector saying *"Another connector or connection has been disconnected."*. This message can also mean that the connector for some reason (network instability for example) needed to start a new connection with the server.

## 6. Communication Security
The Connector initiates a communication socket with the Platform servers. During the connection the connector is authenticated in the platform using the Id and Secret configured. 

This way, the connector is treated by the security system as a user, enabling the platform administrator to manage the privileges to that connector user.

Besides the authorization part, is higlhy recommended to configure the [OMNIA Platform to work with HTTPS](https://docs.omnialowcode.com/omnia3_deploymenttutorial.html#53-configure-https), in order to use a secure communication channel.
