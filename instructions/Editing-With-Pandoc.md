---zxy]
title: Editing with Pandoc
layout: page
---
## Description

The following method will assist in getting tools ready for editing documents,
in just about any format, and make trackable changes within those document(s).
In this page I make use of Markdown since it's become a standard for many
technical writers today. I will also use a source management system to check
in my edited files. For this page I use **Microsoft's Azure DevOps** for
as a repository storage and building platform to create artifacts.

1. [<img src="https://git-scm.com/images/logo@2x.png" height="15"/>][GIT]
   <span style="color: grey;">version control _(btw, full name is **Global**_
   _**information Tracker**)_</span>
1. [Pandoc] <span style="color: grey;">a universal document converter</span>
1. [Visual Studio Code] <span style="color: grey;">_(a.k.a. **VS Code**)_ for
   editing the documents</span>

## Basic Tools

### Get the Tools

   Download and install these 3 tools onto your desktop.

1. <input type="checkbox" />[GIT][GIT Downloads]
2. <input type="checkbox" />[Pandoc][Install Pandoc]
3. <input type="checkbox" />[Visual Studio Code],

### Configure the Tools

1. **GIT**

   After installation of the GIT Client on your workstation, there are global
   parameters that need to be set. These parameters are used to track the work
   you've contributed while posting the changes to a repository
   _(a.k.a. **repo**)_. Without these paramters set, you will experience errors
   when attempting to publish changes out to a repo.

   1. Verify that you have installed **GIT** on your workstation by completing
      the following steps:  
      1. <input type="checkbox" />Press and hold both the **`Windows Key`⊞**
         along with **`R`** on your keyboard.
         
         This will open a **`Run`** dialog box requesting you to type a command
         into a textbox.
      1. <input type="checkbox" />Type **`cmd`**<i title="Copy Text"
         style="float:right;" class="fas fa-clipboard"
         clip-text='cmd'></i> in the textbox and press the `Enter` key.
         
         This will open a new command window with a prompt.
      1. <input type="checkbox" />Type **`git --version`**<i title="Copy Text"
         style="float:right;" class="fas fa-clipboard"
         clip-text='git --version'></i> at the prompt and press
         the `Enter` key.

         You should get a response showing the GIT version installed on your
         workstation. If you did not get a version, or you received an
         error message, please install/re-install the GIT application and
         complete the above steps.
      1. **Keep the command window open for the next task.**
   1. In the command window type in the below commands **_(replace
      `[Your Name]` and `[Your Email]` with your information)_**.

      _If you have closed the command window please do the steps in the_
      _previous task to re-open the command window._

      1. <input type="checkbox" />Set the **User Name** by typing the following
        text at the prompt _(replace **`[Your Name]`**)_ and press the `Enter`
        key.
         
         <i title="Copy Text" style="float:right;" class="fas fa-clipboard"
         clip-text='git config --global user.name "[Your Name]"'></i>

         ```powershell
         git config --global user.name "[Your Name]"
         ```

      1. <input type="checkbox" />Set the **User Email Address** by typing the
         following text at the prompt _(replace **`[Your Email]`**)_ and press
         the `Enter` key.
      
         <i title="Copy Text" style="float:right;" class="fas fa-clipboard"
         clip-text='git config --global user.email "[Your Email]"'></i>
      
         ```powershell
         git config --global user.email "[Your Email]"
         ```

   1. Close the command window.

1. **VS Code**

   VS Code does contain basic **Markdown** editing capabilities without the
   following extension pack, but these additional features will assist in many
   advanced markdown editing such as support of formulas, images, checkboxes,
   tables, emojis, and more.

   1. <input type="checkbox" />Open a browser window by clicking on the
      following button.

        <button onclick=
          "window.open('https://marketplace.visualstudio.com/items?itemName=bat67.markdown-extension-pack', '_blank');">
          Markdown Extensions Pack
        </button>

   1. <input type="checkbox" />When on the page click the Install button to
      install the extensions in VS Code.

[GIT]: https://git-scm.com/about "git --local-branching-on-the-cheap"
[GIT Downloads]: https://git-scm.com/downloads "git --fast-version-control"
[Visual Studio Code]: https://code.visualstudio.com "Microsoft's Visual Studio Code"
[Pandoc]: https://pandoc.org "Pandoc, a universal document converter"
[Notepad++]: https://notepad-plus-plus.org "Notepad++, a free source code editor and Notepad replacement"
[Install Pandoc]: https://pandoc.org/installing.html "Download and install Pandoc"
[Install Notepad++]: https://notepad-plus-plus.org/downloads "Notepad++ Downloads"
[PowerShell]: https://learn.microsoft.com/en-us/powershell/scripting/overview
[Install Powershell]: https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows "Installing PowerShell on Windows"
[<span style="color:red">z</span>otero]: https://www.zotero.org "zotero, Your personal research assistant"

