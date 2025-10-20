---
layout: container
title: Excercise - Explore interacting with Azure
---

[_Previous_](../describe-azure-architecture-and-services)

In this exercise, you explore ways to interact with Microsoft Azure. You can interact with Azure in different ways, including through the web portal or using the Azure command line interface (CLI) with PowerShell or Bash commands.

## Access the Azure Portal

The Azure portal provides a graphic user interface (GUI) to interact with Azure services. You can navigate to different service areas, manage subscriptions and accounts, search for specific services or settings, and so on.

The Azure portal is accessed at <https://portal.azure.com>

Once you're logged into the portal, you can navigate around Azure using the interface, or you can use the command line interface with PowerShell and BASH commands.

## Use the command line interface

You can use the CLI from within the Azure portal. Once logged into Azure, access the CLI by selecting the Cloud Shell icon. Launching Cloud Shell brings up a CLI window in PowerShell or BASH mode. If you’re familiar with PowerShell, you can manage your Azure environment using PowerShell commands.

To access CloudShell from the Azure portal, select the CloudShell icon.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/open-cloudshell.png){: style="width: 900px;"}

You can quickly change between PowerShell and BASH in the CLI by selecting the **Switch to ...** button or entering `BASH`{: .bg-secondary-subtle .px-2} or `PWSH`{: .bg-secondary-subtle .px-2}.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/switch-button.png){: style="width: 900px;"}

<div class="card w-75 ms-5">
<div class="card-header bg-success pt-3 text-light"><h5><strong>Tip</strong></h5></div>
<div class="card-body bg-success-subtle"><p>When in PowerShell mode, the command line starts with PS. When in BASH mode, the command line starts with your user name@azure.</p>
<img src="https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-powershell-11569b2c-7a9a0db5.png"  style="width: 900px;"/>

</div>
</div>

### Use PowerShell in the CLI

Use the PowerShell `Get-date`{: .bg-secondary-subtle .px-2} command to get the current date and time.

The Get-date command is a PowerShell specific command. Most Azure specific commands start with the letters **az**. Let's try an Azure command to check what version of the CLI you're using right now.

```powershell
az version
```

### Use BASH in the CLI

If you’re more familiar with BASH, you can use BASH commands instead by shifting to the BASH CLI.

Enter `bash`{: .bg-secondary-subtle .px-2} to switch to the BASH CLI.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-bash-363cf104-9c91b89d.png){: style="width: 1000px;"}

<div class="card w-50 ms-5">
<div class="card-header bg-success pt-3 text-light"><h5><strong>Tip</strong></h5></div>
<div class="card-body bg-success-subtle"><p>You can tell you're in BASH mode by the username displayed on the command line, your username@azure.</p>

</div>
</div>

Again, use the `Get-date`{: .bg-secondary-subtle .px-2} command to get the current date and time.

You received an error because Get-date is a PowerShell specific command.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-bash-date-8b20e391-afa1b510.png){: style="width: 1000px;"}

Use the `date`{: .bg-secondary-subtle .px-2} command to get the current date and time.

Just like in the PowerShell mode of the CLI, use the letters az to start an Azure command in the BASH mode. Try to run an update to the CLI with `az upgrade`{: .bg-secondary-subtle .px-2}.

You can change back to PowerShell mode by entering pwsh on the BASH command line.

## Use Azure CLI interactive mode

Another way to interact is using the Azure CLI interactive mode. This changes CLI behavior to more closely resemble an integrated development environment (IDE). Interactive mode provides autocompletion, command descriptions, and even examples. If you’re unfamiliar with BASH and PowerShell, but want to use the command line, interactive mode may help you.

Enter `az interactive`{: .bg-secondary-subtle .px-2} to enter interactive mode.

Decide whether you wish to send telemetry data and enter `YES`{: .bg-secondary-subtle .px-2} or `NO`{: .bg-secondary-subtle .px-2}.

You may have to wait a minute or two to allow the interactive mode to fully initialize. Then, enter the letter “a” and auto-completion should start to work. If auto-completion isn’t working, wait a bit longer and try again.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/azure-interactive-mode-c8421a2d-3c3d662b.png){: style="width: 1000px;"}

Once initialized, you can use the arrow keys or tab to help complete your commands. Interactive mode is set up specifically for Azure, so you don't need to enter az to start a command. Try the <code>upgrade</code> or <code>version</code> commands again, but this time without az in front.

The commands should have worked the same as before, and given you the same results. Use the <code>exit</code> command to leave interactive mode.

## Continue

You're all set. [Continue on with the training](../describe-azure-architecture-and-services).
