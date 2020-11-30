---
title: Development Environment
keywords: omnia3
summary: 'Development Environment'
sidebar: omnia3_sidebar
permalink: omnia3_modeler_developmentenvironment.html
folder: omnia3
---

## 1. Introduction

OMNIA Development Environment runs in containers using Docker, allowing the user to manage it's instances using the `docker-compose` PowerShell commands and access to OMNIA Platform logs in Docker Desktop.

You can also choose what version of the Development Environment to install [here](/omnia3_feed.html#development-environment).

## 2. Stop/Start Development Environment

To **stop** the Development Environment run:

```
    docker-compose -p OmniaPlatform stop
```

To **start** it back again, run:

```
    docker-compose -p OmniaPlatform start
```

You can also **start** the Development Environment by running the "`start.ps1`" script file that's in the Development Environment folder.

## 3. Remove Development Environment

To remove ("_uninstall_") the Development Environment from the machine, you must remove the OMNIA Platform containers from your Docker. For that, you simply need to run:

```
    docker-compose -p OmniaPlatform down --rmi all
```

This will stop every running container from the `OmniaPlatform` project and then remove them all, including it's images.

**NOTE:** This command doesn't remove local storage data.

## 4. Access to OMNIA Platform Logs

Actions in Application side of the OMNIA Platform log information in the Development Environment. They're located inside containers, in `/var/log/omnia`.

To access logs in **real time** open the Docker Desktop and expand the _containers_ of the `OMNIA Platform` project. Now click in a container and you'll be automatically redirected to _Logs_.


## 5. Configuring multiple users

It's required to configure the SMTP settings of your development environment to create a new user.
To do that, edit the `docker-compose.override.yml` file and add the SMTP settings to the `identity-server` container.

```
  identity-server:
    environment:
      - OMNIA_SMTP:Host=smtp.myserver.com
      - OMNIA_SMTP:Port=587
      - OMNIA_SMTP:EnableSsl=true
      - OMNIA_SMTP:Username=mail@mail
      - OMNIA_SMTP:Password=P@ssw0rd
      - OMNIA_SMTP:OriginEmail=noreplay@mail
```