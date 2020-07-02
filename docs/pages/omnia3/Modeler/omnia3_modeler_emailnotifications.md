---
title: Email Notifications
keywords: email notifications web application lowcode
summary: "Here's all you need to know to build the perfect system of Email Notifications for your web applications."
sidebar: omnia3_sidebar
permalink: omnia3_modeler_emailnotifications.html
folder: omnia3
---

## 1. Introduction

OMNIA Platform enables you to send email notifications using the SMTP server configured in your Platform configuration.

Besides that, the Platform lets you take advantage of modeled [Text Templates](/omnia3_modeler_texttemplates.html) to compose your emails.


## 2. Using Email Notifications

To send email notifications in the context of your applications, OMNIA has an API endpoint available in the context of your application.
This endpoint can be used in the context of your behaviours for example.

### How to send an email using OMNIA?

To send emails, you can define:

 - Who will receive the notification; 
 - Subject; 
 - Body _(Email body is handled as HTML that is embeded in the global notification style used by the Platform.)_.

The Subject and Body can be composed using a given text or using a Text Template [(see here how to use Text Templates)](/omnia3_modeler_texttemplates.html).

**Accelerator**
The accelerator _"Send an e-mail using a Text Template"_ is available in After Save Behaviours. This accelerator helps you to easily compose a request to send an email using Text Templates. To render the Text Template, the accelerator will us the current Entity as input data to the Template.


```c#

var httpClient = _Context.CreateApplicationHttpClient();

var dto = this.ToDto();
var emailRequestData = new
{
    To = new [] { new { Address = this._assigned } },
    Subject = new { Template = "SubjectTemplate", TemplateData = dto },
    Body = new { Template = "BodyTemplate", TemplateData = dto }
};

var requestResult = await httpClient.PostAsync("Email", emailRequestData);

if (!requestResult.IsSuccessStatusCode)
    return new AfterSaveMessage("It was not possible to send the email notification.", AfterSaveMessageType.Warning);

```


## 2. Customize Platform Notifications

You can customize lists "Export as CSV" feature notifications.
To do that, create a Text Template for the Subject and other to the Body.

You will be receiving the Link (as _DownloadLink_) in the Text Template Data parameters.



### How to customize the Export CSV Notification subject?

 1. Create a new Text Template using the name:  _ExportCsvSuccessEmailSubject_
 1. Change the Template with the desired text. Example: _OMNIA Platform - Your download is ready_


### How to customize the Export CSV Notification body?

 1. Create a new Text Template using the name:  _ExportCsvSuccessEmailBody_
 1. Change the Template with the desired text (HTML can be used). 
 
```HTML
  <p>The data export you have requested has been processed.</p>
  <p>Click the "Download" link below to download the generated file:</p>
  <a href="{{Data.DownloadLink}}"><b>Download</b></a>
```
 
