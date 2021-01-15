---
title: Secret Manager Setup
keywords: omnia3
summary: "Using a Secret Manager to host your configurations."
sidebar: omnia3_sidebar
permalink: omnia3_secretmanager.html
folder: omnia3
---

## 1. Introduction

OMNIA allows you to configure a Secret Manager that will help you protect secrets needed to access your services. 
OMNIA supports multiple kinds of Secret Managers:

  - Azure Key Vault
  - AWS System Manager Parameter Store
  - HashiCorp Vault

## 2. Secrets

Any configuration option used by OMNIA (`config/omnia.json`) can be overridden by the configured Secret Manager.

**Example:** to store the PostgreSQL Connection String as a secret, you can configure a secret and the configuration in the `omnia.json` will be ignored.


## 3. Services

### 3.1. Azure Key Vault

You can use the [Azure Key Vault with Managed Identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/tutorial-linux-vm-access-nonaad).

To configure OMNIA to use Key Vault, add the following section to the configuration file (`config/omnia.json`):

```json
"SecretManager":{
	"Name":"AzureKeyVault",
	"Arguments":{
		"KeyVaultName": "MY AZURE KEY VAULT NAME"
	}
}
```

**Note:** The secret key name must obey the multiple levels of the configuration structure. 
Use "--" to represent hierarchy navigation.
Example: ConnectionStrings--PostgreSQL.

### 3.2. AWS System Manager Parameter Store

To configure OMNIA to use [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html), add the following section to the configuration file (`config/omnia.json`):

```json
"SecretManager":{
	"Name":"AwsSystemManager",
	"Arguments":{
		"Path": "/omnia/"
	}
}
```

**Note:** The secret key name must obey the multiple levels of the configuration structure. 
Use "/" to represent hierarchy navigation.
Example (for a configured path `/omnia/`): /omnia/ConnectionStrings/PostgreSQL.


### 3.3. HashiCorp Vault

To configure OMNIA to use [Vault](https://www.vaultproject.io/docs/what-is-vault), add the following section to the configuration file (`config/omnia.json`):

```json
"SecretManager":{
	"Name":"HashiCorpVault",
	"Arguments":{
		"VaultUri": "http://.../",
		"Token": "MY TOKEN",
		"Path":"/secret/omnia"
	}
}
```

**Note:** The secret key name must obey the multiple levels of the configuration structure. 
Use ":" to represent hierarchy navigation.
Example: ConnectionStrings:PostgreSQL.