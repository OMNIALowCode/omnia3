---
title: Languages
keywords: omnia3
summary: "All you need to know about the language mechanism of our low-code development platform"
sidebar: omnia3_sidebar
permalink: omnia3_modeler_languagetranslator.html
folder: omnia3
---


## 1. Introduction

Despite being written in English by default, OMNIA allows you to easily add new languages and upload their respective content in a easy and  scalable way. 

Currently there are two language slots available, one for the English language, and one for the Portuguese (this will soon change to allow for the creation of any number of languages).

To start the process the developer simply needs to create the available languages and use the following structure. 


## 2. Structure

In order to build a language-flexible, scalable web application, we developed two features to assure that your work will be easily and fully translatable with very little effort. We call them **Language Variables**, and **Dictionaries**.



 - **Language Variables** operate on the same basic principle of mathematical variables, you place a variable in your UI, and it will be filled with different data according to its users selected language and the data present in the respective language dictionary;

 - **Dictionaries** work as language datasets, this means that each language has its unique dictionary, allowing the developer to fill them with the data he sees fit. Dictionaries can contain single words, or multiple word strings.


The structure of **Language Variables** works as follows:


   **{Texts.Description}** - represents the Language Variable for the term "*Description*" and will output the respective dictionary registry, according to the user's selected language. Following the structure **{Texts.** + **your word/phrase** + **}**, you can create all the language variables you need for your project. 


**Examples:**

In the application's English language dictionary the developer inputs the following values:

![EN_language_examples](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/modeler/language-EN-examples.jpg)

And does the same with the translated terms on the Portuguese language dictionary:

![PT_language_examples](https://raw.githubusercontent.com/OMNIALowCode/omnia3/master/docs/images/modeler/language-PT-examples.jpg)

After the Dictionaries have that variable defined and are assigned a value, the platform will output the value instead of the Language Variable.

Language Variable | English | Portuguese
---------|------------|--------------|
 **{Texts.Description}** | Description | Descrição
 **{Texts.Apples}** | Apples | Maçãs
 **{Texts.CustomerService}** | Customer Service | Atendimento ao Cliente

## 3. Data Upload

As mentioned previously, uploading an entire dictionary dataset can be achieved in a very simple way, by making use of JSON type files.

By using the "Update with JSON" funcionality, which requires only a JSON file (see example below), the user will be able to translate the entire platform in one single click, provided that Language Variables were used correctly.

JSON file for example provided in the previous point:

    
    {
	"name": "PTPT",
	"texts": [
		{
			"name": "Description",
			"value": "Descrição"
		},
		{
			"name": "Apples",
			"value": "Maçãs"
		},
		{
			"name": "CustomerService",
			"value": "Atendimento ao Cliente"
		}
	],
	"culture": "pt-pt",
	"description": "PT"
 }
