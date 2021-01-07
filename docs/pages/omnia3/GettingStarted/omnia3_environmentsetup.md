---
title: Environment Setup
keywords: omnia3
summary: 'How to setup a local Omnia Development Environment'
sidebar: omnia3_sidebar
permalink: omnia3_environmentsetup.html
folder: omnia3
toc: false
---

## 1. Requirements

- Operating System: Windows 10 Pro/Enterprise
- Software:
  - [Docker Desktop](https://www.docker.com/products/docker-desktop) (recommended version: 2.3.0.4)
  - [Visual Studio Code](https://code.visualstudio.com/download)
    - After VS Code is installed, install extension [Remote-Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Disk space to install Omnia Development Environment: 3GB

## 2. Install

- Download development environment package [here](omnia3_downloads.html);
- In case of _Security Policy_ errors, open the zip file properties (right click on it and then select "_Properties_"). In the "_General_" tab, check the "_Security_" option and tic the "_Unblock_" box. Click "_OK_";
- Unzip to a folder;
- Open a PowerShell window on that folder;
- Execute file _start.ps1_. Omnia Docker images will be downloaded and its containers created.

> You might get an _Execution Policy_ error during the **first installing**. Run the following command to allow scripts execution:
>
> ```
>        Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

After the development environment setup ends, a new browser tab with local Omnia installation (endpoint below) is opened. Configure the administrator username and password (password is required, since by default SMTP configurations are not set).

## 3. Environment Credentials

|                               |                                   |
| :---------------------------- | :-------------------------------- |
| **Omnia Endpoint**            | http://host.docker.internal:5000  |
| **Omnia Username/Password**   | Defined on setup after install    |
| **pgAdmin (database client)** | http://host.docker.internal:16543 |
| **Database Username**         | omnia@omnia                       |
| **Database Password**         | omnia                             |
