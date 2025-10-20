---
layout: default
title: Excercise - Explore interacting with Azure
---

In this exercise, you explore ways to interact with Microsoft Azure. You can interact with Azure in different ways, including through the web portal or using the Azure command line interface (CLI) with PowerShell or Bash commands.

## Access the Azure Portal

The Azure portal provides a graphic user interface (GUI) to interact with Azure services. You can navigate to different service areas, manage subscriptions and accounts, search for specific services or settings, and so on.

The Azure portal is accessed at <https://portal.azure.com>

Once you're logged into the portal, you can navigate around Azure using the interface, or you can use the command line interface with PowerShell and BASH commands.

## Use the command line interface

You can use the CLI from within the Azure portal. Once logged into Azure, access the CLI by selecting the Cloud Shell icon. Launching Cloud Shell brings up a CLI window in PowerShell or BASH mode. If you’re familiar with PowerShell, you can manage your Azure environment using PowerShell commands.

To access CloudShell from the Azure portal, select the CloudShell icon.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/open-cloudshell.png){: style="width: 900px;"}

You can quickly change between PowerShell and BASH in the CLI by selecting the **Switch to ...** button or entering `BASH` or `PWSH`.

![](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/switch-button.png){: style="width: 900px;"}

<div class="card w-50">
<div class="card-header bg-success pt-3 text-light"><h5><strong>Tip</strong></h5></div>
<div class="card-body"><p>When in PowerShell mode, the command line starts with PS. When in BASH mode, the command line starts with your user name@azure.</p>
<img src="https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-powershell-11569b2c-7a9a0db5.png"  style="width: 600px;"/>

</div>
</div>

<h3 id="use-powershell-in-the-cli">Use PowerShell in the CLI</h3>
<p>Use the PowerShell <code>Get-date</code> command to get the current date and time.</p>
<p>The Get-date command is a PowerShell specific command. Most Azure specific commands start with the letters <strong>az</strong>. Let's try an Azure command to check what version of the CLI you're using right now.</p>
<div class="codeHeader" id="code-try-0" data-bi-name="code-header"><span class="language">PowerShell</span>
  <button type="button" class="action position-relative display-none-print" data-bi-name="copy">
   <span class="icon margin-right-xxs" aria-hidden="true">
    <span class="docon docon-edit-copy"></span>
   </span>
   <span>Copy</span>
   <div class="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
    <span class="icon font-size-lg">
     <span class="docon docon-check-mark"></span>
    </span>
   </div>
  </button>
 </div><pre class="has-inner-focus"><code class="lang-powershell" data-author-content="az version
"><span>az version
</span></code></pre>
<h3 id="use-bash-in-the-cli">Use BASH in the CLI</h3>
<p>If you’re more familiar with BASH, you can use BASH commands instead by shifting to the BASH CLI.</p>
<p>Enter <code>bash</code> to switch to the BASH CLI.</p>
<p><span class="mx-imgBorder">
<img src="../../wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-bash-363cf104-9c91b89d.png" alt="Screenshot of the Azure BASH CLI at initial launch." data-linktype="relative-path">
</span>
</p>
<div class="alert is-success">
<p class="alert-title"><span class="docon docon-lightbulb" aria-hidden="true"></span> Tip</p>
<p>You can tell you're in BASH mode by the username displayed on the command line, your username@azure.</p>
</div>
<p>Again, use the <code>Get-date</code> command to get the current date and time.</p>
<p>You received an error because Get-date is a PowerShell specific command.</p>
<p><span class="mx-imgBorder">
<img src="../../wwl-azure/describe-core-architectural-components-of-azure/media/sandbox-bash-date-8b20e391-afa1b510.png" alt="Screenshot of BASH error message get-date command not found." data-linktype="relative-path">
</span>
</p>
<p>Use the <code>date</code> command to get the current date and time.</p>
<p>Just like in the PowerShell mode of the CLI, use the letters az to start an Azure command in the BASH mode. Try to run an update to the CLI with <code>az upgrade</code>.</p>
<p>You can change back to PowerShell mode by entering pwsh on the BASH command line.</p>
<h2 id="use-azure-cli-interactive-mode">Use Azure CLI interactive mode</h2>
<p>Another way to interact is using the Azure CLI interactive mode. This changes CLI behavior to more closely resemble an integrated development environment (IDE). Interactive mode provides autocompletion, command descriptions, and even examples. If you’re unfamiliar with BASH and PowerShell, but want to use the command line, interactive mode may help you.</p>
<p>Enter <code>az interactive</code> to enter interactive mode.</p>
<p>Decide whether you wish to send telemetry data and enter <code>YES</code> or <code>NO</code>.</p>
<p>You may have to wait a minute or two to allow the interactive mode to fully initialize. Then, enter the letter “a” and auto-completion should start to work. If auto-completion isn’t working, wait a bit longer and try again.</p>
<p><span class="mx-imgBorder">
<img src="../../wwl-azure/describe-core-architectural-components-of-azure/media/azure-interactive-mode-c8421a2d-3c3d662b.png" alt="Screenshot of interactive mode with autocompletion providing commands that start with A." data-linktype="relative-path">
</span>
</p>
<p>Once initialized, you can use the arrow keys or tab to help complete your commands. Interactive mode is set up specifically for Azure, so you don't need to enter az to start a command. Try the <code>upgrade</code> or <code>version</code> commands again, but this time without az in front.</p>
<p>The commands should have worked the same as before, and given you the same results. Use the <code>exit</code> command to leave interactive mode.</p>
<h2 id="continue">Continue</h2>
<p>You're all set. Continue on with the training.</p>

  </div>
  <div id="next-section" class="modular-content-container"><div><hr class="hr"><div><!---->
  <h2 class="title is-4 margin-top-none"><!---->All units complete:<!----></h2>
  <div class="buttons">
   
    <a data-bi-name="previous-unit" id="previous-unit-link" class="button" href="/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts/">
     <span class="icon" aria-hidden="true">
      <span class="docon docon-chevron-left-light"></span>
     </span>
     <span><!---->Previous<!----></span>
    </a>
    
   <a class="button button-primary button-filled" href="/training/modules/describe-core-architectural-components-of-azure/9-summary/#completion" data-bi-name="unlock-achievement">
    <span><!---->Complete module<!----></span>
    
   </a>
  </div>
 <!----></div></div></div>
 </div>
