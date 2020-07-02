---
title: Themes
keywords: lowcode user interface bootstrap SCSS
summary: 'All the information regarding our Themes feature. Build amazing user interfaces fast using bootstrap's SCSS and bring your web applications to the next level.'
sidebar: omnia3_sidebar
permalink: omnia3_modeler_themes.html
folder: omnia3
---

## 1. Introduction

This feature allows you to add, edit or develop new user interface (UI) themes for your web applications.

UI Themes allow you to make your applications unique and improve their User Experience. As a modeler, you can choose what theme your users will use, or you can provide them with a range of choices.

OMNIA Themes are based on the [SCSS language](https://sass-lang.com/documentation) and [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/), we recommend that you become familiar with SCSS before trying to dive into this feature.

## 2. Modelling Themes

Themes are built using SCSS variables and, because OMNIA uses Bootstrap 4 as its framework, they will override the default Bootstrap variables.

### How to add a new Themes?

To add a new theme, go to your modeler and find the **_User Interface / Themes_** option on the menu and access it. This will take you to your themes management dashboard.

Now select _Add new_ and fill in the following information:

- **Do you want to make this the default theme?**: option to define the theme as the application's default;
- **Name**: the name of the theme (needs to be unique within the model). If default theme option is enabled, this will be set as _"DefaultTheme"_, meaning it's only possible to have one default theme per application;
- **Label**: the text shown in the theme selector, representing its name;
- **Help Text**: the detailed description of the theme;
- **Description**: the textual explanation of the theme's purpose (can be used as development documentation).

Theme's are generated in build time, therefore you need to build a new model in order to enable the new theme.

### How to edit a Theme?

By accessing **_User Interface / Themes_** in the sidebar and selecting one from the list.

In the **_Theme_** page will you have theme's **Template**. Here's where you add/edit the Theme's expression, using [SCSS language](https://sass-lang.com/documentation).

A theme does not require a minimum amount of variables to work. You can change only one variable, or you can change them all. Every variable not edited in a theme will assume the default OMNIA theme's value.

Because themes are generated in build time, if a platform update performs changes at the UI level, you'll need to use the _"Clean & Build"_ option to make it compatible with the new update.

### Which are the available variables?

OMNIA Themes are based in Bootstrap 4 variables and, for that reason, we recommend modellers to become familiar with them. To find more information about Bootstrap 4 variables [click here](https://getbootstrap.com/docs/4.0/getting-started/theming/).

Alongside Bootstrap variables and elements, OMNIA features a few Custom Variables, designed to allow the styling of the following custom OMNIA elements:

#### Side Panel

The right-side panel that opens when the user accesses Notifications or History Tab.

```SCSS
$side-panel-bg-color:       $body-bg;
$side-panel-min-size-open:  300px;
$side-panel-size-sm-open:   70%;
$side-panel-border-color:   $section-border-color;
```

#### Sidebar

The left-side panel navigation Menu.

```SCSS
$sidebar-bg-color:          $body-bg;
$sidebar-border-color:      $section-border-color;
$sidebar-color:             $body-color;
$sidebar-icon-color:        lighten($sidebar-color, 35%);
$sidebar-min-size:          50px;
$sidebar-min-size-open:     $side-panel-min-size-open;
$sidebar-height-sm-open:    50px;
$sidebar-size-sm:           $sidebar-min-size;
$sidebar-size-sm-open:      $side-panel-size-sm-open;
```

#### Topbar

The top-side panel navigation Menu.

```SCSS
$topbar-height:             56px;
$topbar-bg-color:           $body-bg;
$topbar-border-color:       $section-border-color;
$topbar-color:              $body-color;
```

## 3. Themes Usage

Themes are used to customize the look and feel of your applications and it's up to the Modeller to control which themes are available to each application's users. To clarify, here are some basic scenarios:

- **No theme set**: OMNIA's default theme will be applied;
- **No theme set, but default theme exists**: User's will have this set has it's platform theme, without the possibility to change it;
- **No theme set, but default and other themes exists**: User's will have the Tenant default theme set has it's platform theme, with the possibility to change it;
- **Applied theme is deleted**: If a default theme exists it will be set as the new theme, otherwise OMNIA's default theme is applied.

**IMPORTANT NOTE**: Theme's are applied per user, browser and device, which means p.e. an user can have a theme on it's phone and a different one on it's computer.

## 4. Samples

Click [here](https://omnialowcode.github.io/omnia3-samples/) to access our collection of Themes and you'll find a set of templates ready to use in your applications. Just copy and paste its SCSS variables, build your model and your application will immediately have a new theme available for its users.
