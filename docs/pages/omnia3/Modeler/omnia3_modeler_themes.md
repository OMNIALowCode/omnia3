---
title: Themes
keywords: omnia3
summary: 'Themes'
sidebar: omnia3_sidebar
permalink: omnia3_modeler_themes.html
folder: omnia3
---

## 1. Introduction

OMNIA Platform enables you to model a Theme that can be rendered in order to change application appearance.

This themes can be useful in case you want to make your Tenant unique, relax the end users with a darker theme or offer them multiple options so they can customize their application as their desire.

OMNIA Themes are based on the [SCSS language](https://sass-lang.com/documentation) and [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/).

## 2. Model Themes

Each theme contains an expression, that will override platform Bootstrap variables, in order to apply visual changes.

### How to add a new Themes?

By accessing **_User Interface / Themes_** in the sidebar, you will have access to the themes management screen.

Selecting the option _Add new_ in the list of themes, you need to fill the following information:

- **Do you want to make this the default theme?**: option to replace OMNIA default theme on current Tenant;
- **Name**: the name of the theme (needs to be unique within the model). If default theme option is enabled, this will be set as _"DefaultTheme"_, meaning it's only possible to have one default theme per Tenant;
- **Label**: the text shown in the theme selector, to represent the theme option;
- **Help Text**: the detailed description of the theme;
- **Description**: the textual explanation of the theme's purpose (can be used as development documentation).

Theme's are generated in build time, therefore you need to build a new model in order to enable the new theme.

### How to update the Theme's expression?

By accessing **_User Interface / Themes_** in the sidebar, select one of the themes of the list.

In the **_Theme_** page will you have theme's **Template**, the place to write the Theme's expression, using the [SCSS language](https://sass-lang.com/documentation).

It's only required to set the values of the desired variables to change (the other variables will remain unchanged, setting it's value to OMNIA default appearance).

Since theme's are generated in build time, to update one you need to re-build the model. If no changes have been applied, use the _"Clean & Build"_ option to fix it.

### Which are the available variables?

Since theme's are overriding Bootstrap variables the modeller must know what are, so to find more information about Bootstrap customization [click here](https://getbootstrap.com/docs/4.0/getting-started/theming/).

In order to allow unlimited customization options, we've added the following custom variables, with the same propose and nomenclature as the official Bootstrap variables:

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

Themes can be used to change any application-side element appearance and, as referred on the topic above, the modeller can set a new theme as the default option for Tenant's users. In order to avoid misunderstanding, let's clarify basic scenarios:

- **No theme set**: OMNIA's default theme will be applied;
- **No theme set, but default theme exists**: User's will have this set has it's platform theme, without the possibility to change it;
- **No theme set, but default and other themes exists**: User's will have the Tenant default theme set has it's platform theme, with the possibility to change it;
- **Applied theme is deleted**: If a default theme exists it will be set as the new theme, otherwise OMNIA's default theme is applied.

**IMPORTANT NOTE**: Theme's are applied per user, browser and device, which means p.e. an user can have a theme on it's phone and a different one on it's computer.

## 4. Samples

Click [here](https://omnialowcode.github.io/omnia3-samples/) to access to our collection of Themes and find a set of templates ready to use in your applications.
