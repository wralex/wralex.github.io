---
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

1. [<img src="https://git-scm.com/images/logo@2x.png" height="15"/>][GIT]<span
   style="color: grey;"> version control _(btw, full name is **Global information Tracker**)_</span>
2. [<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAGBwAFCAME/9oACAEBAAAAANRyLAOZdMwVOqDSF6p56EDhDn4Khy1wa5DEBz7derT0gYrHP//EABgBAQADAQAAAAAAAAAAAAAAAAUCAwQG/9oACgICEAMQAAAA05UjFxIzpuTL4bv2gmwf/8QAMxAAAgEDAgMECAYDAAAAAAAAAQIDAAQFBhIRMVETIUFCByIjMlJhYsEQICRxdKElcoH/2gAIAQEAAT8A/HV2uhbdpYYqUGbvWa5Hk6rH9XU1p7NZKzg3w3L98jcQx3Kf3BrHa0tJQVvYzC4HvLxZD9xV16SbaPJdnBadrZKeDS8pG+pBVhkLPI2qXNpOskTeYeBHMMDyIrWWvVlEmOxEvs+U90vn6rH9PU0m+R44oo2eR2CoiDczE+AAoYq+xKR214qrMyCUoDu2B+QJ61urWWiQEuMnjFVQoMlxByHAc3T7io7u5ihuIYriVI502yqjEB16GsZh8llb+Oys41eRwTuZtqKo5s1aY0djcBH2i+3vGXhJcsP6QeVa1uf86f48dbq1nrqfOu9pbExY9W93k0xHmf7CsDpTUOWsZru3tv06LxiLna0x6RUk09tOrozxTRP3EcVdGX+wRWlfSHDc7LPLusc3JLnkj/7/AAmtdnhnj/GirdV7oHTV9mBk57Ql+O54QeEMj/E60AAAAAAAAAO4ACtY6KhzKPeWgWO/A/ZZgPB/n0NXEU9tPLBPE0csbFXRxwKkeBqyuZprWPtZWfZ6ibiTtReSj5Ct4/Jq3RtnqCDtE2w3yLwim8GHwSdRWkdIXmVilDXUUMUUpDkAu/8AwEAViNM4fFKewtw0hXg00nrua//EACYRAAIBAwMCBwEAAAAAAAAAAAECAwAEEQUhMSJBEiQyUWFz4cH/2gAIAQIBAT8AmtLiBUaSMqG4NWOncSzD5Cn+09ha3USsV3I2deas3eK1UXjrjYDxdvYGtWtrsx5hOY8dSjn9Faevkbb6xTyyOFDuSFGBk8VperGErDOSY+Fbuv5V5qtrZ9GC0mPSNq//xAAlEQACAgICAAUFAAAAAAAAAAABAgMEABEFMRIhMkHhQlFhc8H/2gAIAQMBAT8Agu1p3dI5QxXsZf5PuKBvwXH8xOQt1JWUMdA+aN1l1I5rTNSRtgEnw+/3Izh7VNZdTjUv0sevg5yLavWf2HEiijLFEVSx2dDvOW4dZw08AAk7Zeg3zlPiLd0l9hI9+snef//Z" height="15" /> Visual Studio Code][Visual Studio Code] <span style="color: grey;">_(a.k.a. **VS Code**)_ for editing the documents</span>
3. [Pandoc] <span style="color: grey;">a universal document converter</span>

## Basic Tools

### Get the Tools

   Download and install these 3 tools onto your desktop.

1. <input type="checkbox" />[GIT][GIT Downloads]
2. <input type="checkbox" />[Pandoc][Install Pandoc]
3. <input type="checkbox" />[Visual Studio Code]

### Configure the Tools

1. **GIT**

   After installation of the GIT Client on your workstation, there are global
   parameters that required to be set. These parameters are used for tracking
   work you've contributed upon posting changes to a repository
   _(a.k.a. **repo**)_. Without these paramters set, you will experience errors.

   1. Verify that you have installed **GIT** on your workstation by completing
      the following steps:  
      1. <input type="checkbox" />Press and hold both the **`Windows Key`⊞**
         along with **`R`** on your keyboard.

         📓 _This will open a **`Run`** dialog box requesting you to type a_
         _command into a textbox._

      2. <input type="checkbox" />Type **`cmd`**<i title="Copy Text"
         class="fas fa-clipboard" clip-text='cmd'></i> in the textbox and press
         the `Enter` key.

         📓 _This will open a new command window with a prompt._

      3. <input type="checkbox" />Type **`git --version`**<i title="Copy Text"
         class="fas fa-clipboard" clip-text='git --version'></i> at the prompt
         and press the `Enter` key.

         📓 _You should get a response showing the GIT version installed on_
         _your workstation. If you did not get a version, or you received an_
         _error message, please install/re-install the GIT application and_
         _complete the above steps._

      4. **Keep the command window open for the next task.**

   2. In the command window type in the below commands **_(replace
      `[Your Name]` and `[Your Email]` with your information)_**.

      ❗ _If you have closed the command window please do the steps in the_
      _previous task to re-open the command window._

      1. <input type="checkbox" />Set **User Name**

         Type the following text  _(replace **`[Your Name]`**)_ and press the
         `Enter` key.

         <i title="Copy Text" style="float:right;" class="fas fa-clipboard"
         clip-text='git config --global user.name "[Your Name]"'></i>

         ```powershell
         git config --global user.name "[Your Name]"
         ```

      2. <input type="checkbox" />Set **User Email Address**

         Type the following text _(replace **`[Your Email]`**)_ and press the
         `Enter` key.

         <i title="Copy Text" style="float:right;" class="fas fa-clipboard"
         clip-text='git config --global user.email "[Your Email]"'></i>

         ```powershell
         git config --global user.email "[Your Email]"
         ```

   3. Close the command window.

2. **VS Code**

   VS Code does contain basic **Markdown** editing capabilities without the
   following extension pack, but these additional features will assist in many
   advanced markdown editing such as support of formulas, images, checkboxes,
   tables, emojis, and more.

   1. <input type="checkbox" />Open a browser window by clicking on the
      following button.

        <button onclick="window.open('https://marketplace.visualstudio.com/items?itemName=bat67.markdown-extension-pack', '_blank');">
          <img height="15" src="https://bat67.gallerycdn.vsassets.io/extensions/bat67/markdown-extension-pack/0.7.0/1614239921497/Microsoft.VisualStudio.Services.Icons.Default" />
          Markdown Extensions Pack</button>

   2. <input type="checkbox" />On the new browser page click the **`Install`**
      button.

      VS Code should open up with the same web page displayed in a tab of the
      main window.

   3. <input type="checkbox" />Click the **`Install`** button again on the page.

      This should now show that it's instaling the additional Markdown editing
      features. In a couple of minutes you can open the Extension Viewer to see
      the new features. Within the extensions view you may click each feature
      and read more details about each which may also provide how best to use
      each.

   4. <input type="checkbox" />Install the following VS Code features by
      clicking the buttons below and follow the methods as in the previous steps.

      <ul>
        <li><button style="width:200px;text-align:left;" onclick="window.open('https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview', '_blank');">
          <img height="15" src="https://bierner.gallerycdn.vsassets.io/extensions/bierner/github-markdown-preview/0.3.0/1651533762167/Microsoft.VisualStudio.Services.Icons.Default" />
          GitHub Markdown Preview</button></li>
        <li><button style="width:200px;text-align:left;" onclick="window.open('https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack', '_blank');">
          <img height="15" src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/vscode-node-azure-pack/1.1.1/1667846329462/Microsoft.VisualStudio.Services.Icons.Default" />
          Azure Tools</button></li>
        <li><button style="width:200px;text-align:left;" onclick="window.open('https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode', '_blank');">
          <img height="15" src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/9.10.4/1673460374911/Microsoft.VisualStudio.Services.Icons.Default" />
          Prettier</button></li>
      </ul>

[GIT]: https://git-scm.com/about "git --local-branching-on-the-cheap"
[GIT Downloads]: https://git-scm.com/downloads "git --fast-version-control"
[Visual Studio Code]: https://code.visualstudio.com "Microsoft's Visual Studio Code"
[Pandoc]: https://pandoc.org "Pandoc, a universal document converter"
[Install Pandoc]: https://pandoc.org/installing.html "Download and install Pandoc"
