---
title: Editing with Pandoc
layout: page
---
## Description

This is a series of steps to use tools available to download online for
editing documents, in just about any format, and make trackable changes
within those document(s). In this page I make use of Markdown since it's become a
standard for many technical writers today. I also use the following tools to
work with the documents, Markdown files, and a source management system to check
in my edited files. For this page I'm using the following tools, but you may use
others. In addition, I also use **Microsoft's Azure DevOps** for publishing to a
repository but you may use an alternative source management service where that
will go beyond the scope of this page.

1. [<img src="https://git-scm.com/images/logo@2x.png" height="15"/>][GIT]
   <span style="color: grey;">version control</span>
   _(btw, full name is **Global information Tracker**)_
1. [Pandoc] <span style="color: grey;">a universal document converter</span>
1. [Visual Studio Code] _(a.k.a. **VS Code**)_

## Download and Install

1. <input type="checkbox" />Download and install [GIT][GIT Downloads]
2. <input type="checkbox" />Download and [Install Pandoc] on your system
3. <input type="checkbox" />Download and install [VS Code][Visual Studio Code],
   or an alternate development tool _(but you'll need to understand how to_
   _check in your added/modified files into the Repo)_.

   **VS Code**

   1. <input type="checkbox" />Download the [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) for Windows.
   1. <input type="checkbox" />Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.
   1. By default, VS Code is installed under `C:\Users\{Username}\AppData\Local\Programs\Microsoft VS Code`.

   Once you have installed VS Code, these topics will help you learn more about VS Code:  
   _(these are optional)_

   - <input type="checkbox" />[Additional Components](https://code.visualstudio.com/docs/setup/additional-components)
     \- Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
   - <input type="checkbox" />[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface)
     \- A quick orientation to VS Code.
   - <input type="checkbox" />[User/Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
     \- Learn how to configure VS Code to your preferences through settings.
   - <input type="checkbox" />[Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
     \- Lets you jump right in and learn how to be productive with VS Code.

## Setup

1. **Configuring GIT**

   To configure GIT you will need to setup global parameters for any changes
   made to files pushed back into a repository _(a.k.a. **Repo**)_.  
   Open a **command**, or **PowerShell**, window on your desktop and type in the
   following _(replacing **`[Your Name]`** and **`[Your Email]`** with_
   _appropriate information)_.

   <input type="checkbox" style="float:left;" />
   <i title="Copy Text"  style="float:right;" class="fas fa-clipboard" clip-text='git config --global user.name "[Your Name]"'></i>

   ```powershell
   git config --global user.name "[Your Name]"
   ```

   <input type="checkbox" style="float:left;" />
   <i title="Copy Text"  style="float:right;" class="fas fa-clipboard" clip-text='git config --global user.email "[Your Email]"'></i>

   ```powershell
   git config --global user.email "[Your Email]"
   ```

1. **Configuring VS Code Extensions**

   1. <input type="checkbox" />Open **VS Code** on your desktop. It may go through some checks and updates
      so you may want to give it a few minutes.
   1. <input type="checkbox" />Add the following extensions _(if you're_
      _unfamiliar with how to install extions please go to_
      _[VS Code: **Extension Marketplace**] to learn how to install extensions)_
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/github-markdown-preview/0.3.0/1651533762167/Microsoft.VisualStudio.Services.Icons.Default" height="15" />GitHub Markdown Preview][GitHub Markdown Preview]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="GitHub Markdown Preview"></i>
      - <input type="checkbox" />[<img src="https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare/1.0.5834/1678124842214/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Live Share][Live Share]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Live Share"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-checkbox/0.4.0/1667513871796/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Checkboxes][Markdown Checkboxes]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Checkboxes"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-emoji/0.3.0/1657843376933/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Emoji][Markdown Emoji]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Emoji"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-footnotes/0.1.1/1668806677422/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Footnotes][Markdown Footnotes]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Footnotes"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-preview-github-styles/1.0.1/1642545629948/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Preview Github Styling][Markdown Preview Github Styling]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Preview Github Styling"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-mermaid/1.17.7/1678235901215/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Preview Mermaid Support][Markdown Preview Mermaid Support]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Preview Mermaid Support"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-yaml-preamble/0.1.0/1631131915840/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown yaml Preamble][Markdown yaml Preamble]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown yaml Preamble"></i>
      - <input type="checkbox" />[<img src="https://bpruitt-goddard.gallerycdn.vsassets.io/extensions/bpruitt-goddard/mermaid-markdown-syntax-highlighting/1.5.1/1676597143386/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Mermaid Markdown Syntax Highlighting][Mermaid Markdown Syntax Highlighting]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Mermaid Markdown Syntax Highlighting"></i>
      - <input type="checkbox" />[<img src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/9.10.4/1673460374911/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Pretier - Code formatter][Pretier - Code formatter]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Pretier - Code formatter"></i>
      - <input type="checkbox" />[<img src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/azure-repos/0.29.2023030801/1678268706093/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Azure Repos][Azure Repos]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Azure Repos"></i>
      - <input type="checkbox" />[<img src="https://github.gallerycdn.vsassets.io/extensions/github/github-vscode-theme/6.3.3/1673918670432/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Github Theme][Github Theme]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Github Theme"></i>
      - <input type="checkbox" />[<img src="https://visualstudioexptteam.gallerycdn.vsassets.io/extensions/visualstudioexptteam/vscodeintellicode/1.2.30/1673034060126/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Intellicode][Intellicode]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Intellicode"></i>
      - <input type="checkbox" />[<img src="https://docsmsft.gallerycdn.vsassets.io/extensions/docsmsft/docs-markdown/0.2.117/1670976096682/Microsoft.VisualStudio.Services.Icons.Default" height="15" />learn-markdown][learn-markdown]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="learn-markdown"></i>
      - <input type="checkbox" />[<img src="https://yzhang.gallerycdn.vsassets.io/extensions/yzhang/markdown-all-in-one/3.5.0/1668948176406/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown All in One][Markdown All in One]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown All in One"></i>
      - <input type="checkbox" />[<img src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/markdown-image-size/0.0.4/1556842265146/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Image Size][Markdown Image Size]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Image Size"></i>
      - <input type="checkbox" />[<img src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/theme-markdownkit/0.1.4/1499504007109/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Markdown Theme Kit][Markdown Theme Kit]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Markdown Theme Kit"></i>
      - <input type="checkbox" />[<img src="https://davidanson.gallerycdn.vsassets.io/extensions/davidanson/vscode-markdownlint/0.49.0/1673500187272/Microsoft.VisualStudio.Services.Icons.Default" height="15" />markdownlint][markdownlint]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="markdownlint"></i>
      - <input type="checkbox" />[<img src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/powershell/2023.2.1/1677183697434/Microsoft.VisualStudio.Services.Icons.Default" height="15" />PowerShell][VS Code PowerShell]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="PowerShell"></i>
      - <input type="checkbox" />[<img src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/remote-repositories/0.31.2023030901/1678353498718/Microsoft.VisualStudio.Services.Icons.Default" height="15" />Remote Repositories][Remote Repositories]
        <i title="Copy Text" class="fas fa-clipboard" clip-text="Remote Repositories"></i>

## Convert a Document to Markdown

1. <input type="checkbox" />Open File Explorer on your desktop and go to a folder on your workstation
   of where you would like to place a new project. At that location create a
   new folder and rename it to a name you choose. In this example we will use
   the name `testdoc`<i title="Copy Text" class="fas fa-clipboard" clip-text='testdoc'></i>.

   ![testdoc](/images/new_testdoc_folder.png)
1. <input type="checkbox" />Open the folder and create a new folder called `original`<i title="Copy Text" class="fas fa-clipboard" clip-text='original'></i>.
1. <input type="checkbox" />Get a Word document _(or other, but in this_
   _example we will use a Microsoft Word file)_ that you would like to
   convert into **Markdown** and place it into the subfolder `original`. Here
   is a document that you can use for this exercise:
   **[public.docx](/samples/public.docx)**.
1. <input type="checkbox" />Open the folder where the document is in File
   Explorer and right click anywhere in the white area of the screen that is
   displaying your Word document and click the Open in Terminal selection.
   If that option isn't available you can also click in the address area and
   type `powershell` and click enter. Either option should open a new window
   where a cursor is showing you the full directory where that Word document
   is stored.

   ![Select Terminal](/images/Select_terminal.png)

1. <input type="checkbox" />At the command prompt type the following _(if the_
   _file name is different than the example, just replace `public` [Both_
   _spots] with the appropriate name)_. This will create a new Markdown file
   and any embded images will be placed in a new directory below.

   <i title="Copy Text"  style="float:right;" class="fas fa-clipboard" clip-text='pandoc -s "public.docx" -t markdown_mmd --extract-media=images -o "public.md"'></i>

   ```powershell
   pandoc -s "public.docx" -t markdown_mmd --extract-media=images -o "public.md"
   ```

   ![New Markdown](/images/new_markdown.png)

1. <input type="checkbox" />Move the new Markdown file and the images
   into the parent directory leaving just the original Word document in the
   original sub-folder.

   ![New Location](/images/new_location.png)

1. You can now close the File Explorer and PowerShell window.

## Optional Tools

1. [<img
   src="https://notepad-plus-plus.org/images/logo.svg"
   height="15" />Notepad++][Notepad++] _(also an alternate development tool)_
1. [<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgc
   ICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcB
   BgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERET
   F9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAdAAABAwUBAAAAAAAAAAAAAAAIAAYHAQIDBAUJ/9
   oACAEBAAAAACl5eK23eyg0/YZ5pQyOHUuNWGj1YcQTKPLC9Nxe5DPfrWNqqSov/8QAFgEBAQEAAAA
   AAAAAAAAAAAAAAgME/9oACgICEAMQAAAAvJGb0xjSVGQgv//EADcQAAEDAwMABgcGBwAAAAAAAAMB
   AgQABQYHERITMTJBUWEWM0JVcZTSCBUhMFOiVmJygpWz4v/aAAgBAQABPwCjXyxxzPCe7wBEYuz2P
   kDa5q+aKtekeOe/bb80L6q9Jca9/Wz5oX1V6UYx/EFr+bF9VQrra7ihFg3CLK4bc+gMwvHfq5cFXa
   p0tkGDLmP7EcBDO+A2q6oboUm6xXXQxGRiymumFZ+L0Y5271StRNPGWIA7vZ1WRaCtYqry6RQ8up3
   LvG6ivTwSivTwSvs7W5RWi/3XvkSxx2fADP8AutUrgkHCLl3PkuHGZ/e7d37Uoj60qzmVHnCxiZGJ
   OgTOTBjRnSqDn2t0/RX2q1XwYeJXOOWGTeBO5rHYvbErO0zzbRi1pPavuvT3HhL2zAWU/wCMh3Otd
   bnxFYra13WpZL0/YysSwa/ZdJVsNnQQ2O2NOI3cbfJie2+pF6xTTcJLLjNufdb8X1yMapibs7zqP/
   W2sjHqBf5xZ90tV4MXbrdEKjGM8GJx2a2oMU1yuMOCH1kk4ws/qI5GpUeOKLHDHE3YYRtGxPBrE4p
   WrtsyW55kd0ay3A8cMYAglEB5GOTbn1t83ULI9VYeKxseg47cowQsViSQwjIdR9fGsbZqRi12W52v
   Grp06heJyFgGe1zH07U/XLuxQ3+KPWlOC5ObPrZPudkmx48UrpRSyAPCnNvY7f8AP+R//8QAHxEAA
   gICAQUAAAAAAAAAAAAAAQIAAxExQRASEyEi/9oACAECAQE/AKaRYGJJAEFNZGQ5joFG5SQlOTzC30
   W1niM2Z5fSjt1C+eOn/8QAHhEBAAICAQUAAAAAAAAAAAAAAQACAxExEBITISL/2gAIAQMBAT8AyZO
   xAOY5bjpCVssyDfJCvyHMCeP2u+YV10//2Q==" height="15"/>PowerShell][PowerShell]
   _(for Windows users, but Linux & macOs versions are also available)_


Below are steps that I've outlines that may help you, and if you
find other steps that may assist others please contact me at <wralex@gmail.com>
so that I may share with future readers.

### Optional Tools

1. <input type="checkbox" />Download and [Install Notepad++] to have an additional editor/viewer of
   Markdown documents.  
   <small>_(**explanation**: I use this tool for previewing
   Markdown components, such as Grid Matrix tables, that are not currently
   viewable in VS Code's MD previews. I also use this for easy macros and
   RegEdit features that VS Code and other editors don't provide [i.e. block selections with the `Alt` key])_</small>

## Advanced Optional Tools

1. [<span style="color:red">Z</span>otero] _(useful to keep track of
   bibliography links, documents, etc. for output results)_

1. <input type="checkbox" />Download and install <span style="color:red">Z</span>otero if
   you would like to track reference links, documents, journals, etc., within
   the resulting documentation.  
   > **Note**: Personally I found this tool useful since there are so many links
   to track in large documents and this has the ability to produce useful
   export files that Pandoc uses for generating bibliography links within the
   outputs _(Word, HTML, etc.)_.
   >
   > **Note**: I also recomend to setting up an online account so that you can
   syncronize references and collections online with other members in a group
   sharing the referenced libraries with those members.



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
[VS Code: **Extension Marketplace**]: https://code.visualstudio.com/docs/editor/extension-marketplace
[GitHub Markdown Preview]: https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview
[Live Share]: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
[Markdown Checkboxes]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox
[Markdown Emoji]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji
[Markdown Footnotes]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes
[Markdown Preview Github Styling]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles
[Markdown Preview Mermaid Support]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
[Markdown yaml Preamble]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-yaml-preamble
[Mermaid Markdown Syntax Highlighting]: https://marketplace.visualstudio.com/items?itemName=bpruitt-goddard.mermaid-markdown-syntax-highlighting
[Pretier - Code formatter]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[Azure Repos]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-repos
[Github Theme]: https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme
[Intellicode]: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
[learn-markdown]: https://marketplace.visualstudio.com/items?itemName=docsmsft.docs-markdown
[Markdown All in One]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[Markdown Image Size]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-image-size
[Markdown Theme Kit]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-MarkdownKit
[markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[VS Code PowerShell]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell
[Remote Repositories]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-repositories
