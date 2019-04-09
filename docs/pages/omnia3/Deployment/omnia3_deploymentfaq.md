---
title: OMNIA 3.0 Deployment FAQ
keywords: omnia3
summary: "FAQs about deploying and managing our platform"
sidebar: omnia3_sidebar
permalink: omnia3_deploymentfaq.html
folder: omnia3
---

### How do I know if the platform is running, and how much memory it is using?

As all of the parts of the platform are hosted as services, you can use `systemctl` to see their status, i.e. `systemctl status omnia omnia-*`.

Alternatively, you can use `ps`, i.e. `ps aux | grep Omnia`, `top`, or `htop` (requires install) to see more information, such as memory usage or service uptime.

In order to know the memory of the VM, you can use `free`, i.e. `free -m`.

### How do I extract the platform?

The easiest way is to install `unzip`, and just do `unzip OmniaPlatform.Full.VersionNumber.zip`. You can also install `p7zip-full` and do `7z x OmniaPlatform.Full.VersionNumber.zip`.

### How do I read logs?

The logs produced by the platform all go to `/var/log/omnia/`. You can consult them with whatever solution you prefer: downloading and reading locally, using `tail` or `less`, etc.

On top of those, the services themselves will log to the system's log, which you can access with `journalctl`, i.e. `journalctl -xef`.

Finally, NGINX also has its own logs. They are configured to go to `/var/log/nginx/`.

### How do I monitor disk space?

The recommended tool to see what is using disk space in your vm is `ncdu`, which must be installed. Running it as `sudo ncdu /` will give you the most details.

### How do I update the platform?
Download the `OmniaPlatform.Binaries.VersionNumber.zip`. Delete the contents of `/home/omnia/bin/`, then extract it to that folder. Restart the site with `systemctl restart omnia`.
