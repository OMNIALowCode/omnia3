---
title: Connector Development
keywords: omnia3
summary: "How to develop locally behaviours executed on Omnia Connector"
sidebar: omnia3_sidebar
permalink: omnia3_connectordevelopment.html
folder: omnia3
toc: false
---

## 1. Introduction

Behaviours executed on Omnia Connector can be developed and tested on a local environment.

## 2. Requisites

- [Omnia Connector](https://docs.omnialowcode.com/omnia3_connector_introduction.html) must be installed and configured
- For behaviour code development, [Visual Studio 2019](https://visualstudio.microsoft.com/downloads/) is suggested
- The local environment where Omnia is running must be accessible from the machine where Omnia connector is installed
- [Omnia-CLI](omnia3_clisetup.html) is recommended to import and export model

## 2. Develop and Debug

- Download model using Omnia-CLI, as described [here](omnia3_modeldeployment.html#2-download-a-model)
- Open the project file (.csproj) of the data source whose behaviours will be edited, on the folder *Server/Behaviours/External/DataSourceName*
- Start Omnia Connector by opening *Omnia.Connector.Windows.exe*
- After changing the behaviours code, use Visual Studio *Debug* to test your changes
- When you are happy with your code, sync model changes using Omnia-CLI, as described [here](omnia3_serverdeployment.html#3-change-code-and-apply-changes-to-model)