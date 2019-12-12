---
title: OMNIA 3 Notifications & Operations
keywords: omnia3
summary: "OMNIA 3 Notifications & Operations"
sidebar: omnia3_sidebar
permalink: omnia3_application_notifications_and_operations.html
folder: omnia3
---

## 1. Introduction

Most functionality of the platform is synchronous, i.e. when the user does an action, they will have to wait in that browser tab for it to be completed, while the 'processing' animation plays. However, there are some scenarios in which we have **asynchronous** behaviours. In these scenarios, the user will have to be notified later about the results of his work.

## 2. Notifications

On the top right corner of the screen, you will see a small bell with a number next to it. This is the access to the **notification area**, where all notifications of the platform are placed.

In order for this area to have anything, you will need to have an application that has **After Save** behaviours modeled. When a user saves an entity that has an [After Save behaviour](omnia3_modeler_behaviours.html), the contents of this entity will be saved to an **outbox**, a platform-wide 'staging area' for requests to be processed. Gradually, all of these will be sent to be executed and, if successful, a **success** message will pop up on the users' screen, in the notification area.

If the After Save fails, the after save execution will be marked as a failure, removed from the outbox, and a **failure** notification will be sent. An error, defined by the modeler on behaviour code is shown, and a *Retry* option is available, so that operation can be retried after the error cause is fixed.

## 3. Operations

After opening the notification area, a **Go to operations list** button is visible. This button opens a list of all the Operations in the tenant, together with their state. An operation is the entity used to place in the Outbox so that we can execute the After Save behaviours. Here you can see the state of all operations that have happened, regardless of any notifications that may have been fired meanwhile.
