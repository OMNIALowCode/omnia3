---
title: OMNIA 3 Feed
keywords: omnia3
summary: 'How to use OMNIA versions feed'
sidebar: omnia3_sidebar
permalink: omnia3_feed.html
folder: omnia3
---

## Introduction

OMNIA Platform is composed of three different resources that you can download and install: Platform, Connector and Development Environment.

These resources are available online to be downloaded. A feed, in the form of a xml file, is available to simplify the download of the Platform, Connector and Development Environment versions.

All Omnia packages are made available as .zip package files.

## How to consume the feed?

### Platform

The platform feed is available on [this](https://mymiswebdeploy.blob.core.windows.net/omnia3/platform/updateFeed.xml) page, and its structure is the following:

- PlatformVersion: the file root element
  - Version: a specific Omnia Platform version. Version information contains:
    - Number: the identifier of the version
    - PackageFull: Url to access the full Omnia package. To be downloaded on new installations
    - PackageBinaries: Url to access the smaller Omnia package, that only contains the binaries to be replaced

### Connector

The connector feed is available on [this](https://mymiswebdeploy.blob.core.windows.net/omnia3/connector/updateFeed.xml) page, and its structure is the following:

- ConnectorVersion: the file root element
  - Version: a specific Omnia Connector version. Version information contains:
    - Number: the identifier of the version
    - Package: Url to access the connector package, contained on a .zip file

### Development Environment

The development environment feed is available on [this](https://mymiswebdeploy.blob.core.windows.net/omnia3/devEnvironment/updateFeed.xml) page, and its structure is the following:

- Development Environment: the file root element
  - Version: a specific Omnia Development Environment version. Version information contains:
    - Number: the identifier of the version
    - Package: Url to access the development environment package, contained on a .zip file
