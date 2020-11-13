---
title: Development Environment
keywords: omnia3
summary: 'Development Environment'
sidebar: omnia3_sidebar
permalink: omnia3_modeler_developmentenvironment.html
folder: omnia3
---

## 1. Introduction

OMNIA Development Environment run in containers using Docker, allowing the user to manage it's instances using the `docker-compose` PowerShell commands.

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
