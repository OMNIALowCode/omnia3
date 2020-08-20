---
title: Authorization Management
keywords: omnia3
summary: "Authorization"
sidebar: omnia3_sidebar
permalink: omnia3_authorizationmanagement.html
folder: omnia3
---

## 1. Introduction

On OMNIA Platform, authorization is managed on two distinct areas, one for the Platform and another for the tenant.

### 1.1 Platform

In the platform authorization area (option **Management / Security**) you can manage all the *Policies* and *Roles*. 

### Roles

By default, Omnia Platform has one role, named *Administration*. This role cannot be removed and it has, by default, associated the user identified on platform setup as the *Platform Administrator*. Other users can be added to this *Role*.

Additionally, when a tenant is created, two new roles are automatically created:

- Administration[TenantCode]: administration role for the tenant. The user responsible for the tenant creation is automatically added to this role.
- Users[TenantCode]: general users role for the tenant. Other tenant users should be added to this role, so that they have access to the tenant.

If needed, new Roles can be created to grant a set of policies to a group of users.

### Policies

By default, Omnia Platform has one policy, named *PlatformSecurity*, that controls the access to the following security permissions:

- Tenants
- Users
- Roles
- Privileges

*Administration* role has access granted to all this permissions by default.

When a new tenant is created, a new policy is created whose name is the tenant code with the Tenant suffix (e.g. TenantAnalogSound). These policies only have one possible permission (ALL - grants access to the tenant), and multiple roles can be added to it.

Since policies and permissions are limited and managed by the platform, they cannot be created manually or removed.

### Users

User accounts grant access to the OMNIA Platform. By default, OMNIA has one User with the Role of Administration.

You can add new users to the Platform on its Management Area, by adding a new username and its roles.
Existent users can be listed and added/removed from roles.

When a new user is created an email notification is sent to confirm the account. The user must confirm the account by setting its credentials on the 24 hours that follow the email reception. After that period, a password reset request must be made, using the option "Forgot your password" on the Login page.


### 1.2 Tenant

In the tenant authorization area (option **Security** on right side of top navbar) you can manage all *Policies* and *Roles* inside a tenant. Access to this option is limited by the Platform Roles.

### Roles

By default, every tenant has only one Role, named *Administration*. This role cannot be removed and it has, by default, associated the user responsible for the tenant creation. Other users can be added to this *Role*.

If needed, new Roles can be created to grant a set of policies to a group of users.

### Policies

By default, each tenant has three policies:

- **Model**: controls the access to the tenant modeling area;
- **Security**: controls the access to the tenant security features (Users, Privileges and Roles);
- **Application**: controls the access to the modeled entities CRUD operations.

*Administration* role has access granted to all this permissions. If new roles are added, access to the permissions can be granted.

Since policies and permissions are limited and managed by the platform, they cannot be created manually or removed.

### Users

By default, each tenant has one user that is automatically associated to the Administration role on the moment the tenant is created.

Other users can be added to the tenant, by introducing the username and defining its roles. Existent users can be listed and added/removed from roles.

When a new user is created, it is automatically associated to the tenant Users[TenantCode] role and receives an email notification to set its credentials.