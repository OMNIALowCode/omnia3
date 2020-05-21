---
title: OMNIA 3 Infrastructure
keywords: omnia3
summary: "Requirements for deploying and maintaining an OMNIA installation"
sidebar: omnia3_sidebar
permalink: omnia3_deploymentrequirements.html
folder: omnia3
---

## Hardware Infrastructure
### Required
- A server (virtual machine or not), running Linux. The current officially supported version is **18.04 LTS**.
- A PostgreSQL server, running a compatible version of Postgres (9.6 or higher).

    **Best practises**: avoid sharing the PostgreSQL server between multiple separate installations of OMNIA. As the platform allows modelers to write their own C# code, it could potentially lead to them accessing information of other installations.

### Optional
- A Redis server, with support for Redis PubSub. Tested on version 4.0.9 and above. **Required** in Production environments and when scaling the platform horizontally - in that scenario, each instance will have to point to the same redis server.

    **Best practises**: avoid sharing the redis server between multiple separate installations of OMNIA. As the platform allows modelers to write their own C# code, it could potentially lead to them accessing information of other installations.

    If you are doing horizontal scaling, it will be necessary to use **sticky sessions**.

## Software Infrastructure
In the Linux server, it will be necessary to have the below software installed.

### Required
- NGINX (**1.10.3** or above), configured to act as a reverse proxy.
- systemd (**229** or above), to run the various parts of OMNIA as services. Comes installed with Ubuntu by default.
- .NET Core **3.1** SDK (3.1.201 or above).

## Ports and SSL
In order to run the platform, SSL is the only **supported** mode - it is possible to run it in plain HTTP, but we do not suggest doing so, as it is **not secure** and not GDPR-compliant.

To do so, we suggest using a tool such as Let's Encrypt.

Internally, each of the services runs on a fixed port:

- 49900: Web API
- 49901: Tenant API
- 49902: Identity Server
- 49999-50***: Behaviours (49999 for the manager, the others used for any servers necessary)

However, none of these ports need to be exposed to the exterior, as NGINX will handle reverse proxying duties.

## Maintenance
- You will need to have a way to access the machine the platform is running on, for accessing logs and downloading/uploading files. For this we recommend an **SSH** tool such as **MobaXTerm** (on Windows) that also supports SCP or SFTP. 

    **Best practises**: Be aware of the ports that need to be opened on the server's firewall for this - it's a security best practise to avoid opening ports such as 22 to the wider world.

- You will also need to have maintenance access to the PostgreSQL server, with a tool such as **pgAdmin** or similar. 

    **Best practises**: Firewall access will also be necessary, and the same security best practise as above.
