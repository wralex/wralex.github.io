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
      1. <input type="checkbox" />Press and hold both the **`Windows Key`🪟**
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

3. **Pandoc**

   There really aren't any configuration settings for Pandoc. Just verify that
   the tool has been installed by executing the following steps.

   1. <input type="checkbox" />Press and hold both the **`Windows Key`🪟**
      along with **`R`** on your keyboard.

      📓 _This will open a **`Run`** dialog box requesting you to type a_
      _command into a textbox._

   2. <input type="checkbox" />Type **`cmd`**<i title="Copy Text"
      class="fas fa-clipboard" clip-text='cmd'></i> in the textbox and press
      the `Enter` key.

      📓 _This will open a new command window with a prompt._

   3. <input type="checkbox" />Type **`pandoc --version`**<i title="Copy Text"
      class="fas fa-clipboard" clip-text='pandoc --version'></i> at the prompt
      and press the `Enter` key.

      📓 _You should get a response showing the version of Pandoc installed on_
      _your workstation. If you did not get a version, or you received an_
      _error message, please install/re-install Pandoc and_
      _complete the above steps._

   4. <input type="checkbox" />Close the command window.

## Create a New Repo and Populate

If this is a new Repository that will be used please start here, otherwise skip
this section and begin with [Modifying a Document](#modifying-a-document)
below.

1. <input type="checkbox" />Have a DevOps Project Administrator create a new
   Repository for the document.

   ![New Repo](images/new_repo.png)

2. <input type="checkbox" />Open the link to the Repository created and click
   the `Clone in VS Code` button.

   📓 _If the `Clone in VS Code` is not shown by default when this screen is
   opened, click the dropdown icon on the right of the button and select it
   from the selections._

   ![Clone in VS Code](images/clone_repo.png)

3. <input type="checkbox" />VS Code will open automatically and you will be
   to provide credentials. Sign in with your account so that the repository is
   cloned locally to your workstation.

   ![DevOps Sign-in](images/devops_signin.png)

4. <input type="checkbox" />Once the project opens up in VS Code move the mouse
   over the **Folder+** Icon _(to the right of the name of the Repo)_ and click
   the mouse button to create a folder named `original` _(or whatever you
   prefer to use as a name, but for this tutorial we will be using `original`)_.
   This will be where the orignal document is to be stored in the project and
   okaced into the repo when commited and published later.

   ![New Folder](images/new_folder.png)

5. <input type="checkbox" />Open a File Explorer Window and open to where the
   document currently is placed, then click and hold down the mouse button
   and use drag to place a copy into the `original` folder in VS Code.

   📓 _If you would like to use a sample document for this tutorial you can
   download a sample file **[public.docx](../samples/public.docx)**)._

   ![Click and Drag](images/click_drag.png)

   📓 _Verify that the file is under the folder by collapsing the `original`
   folder and seeing if the file isn't displayed. If it is still visible then
   the file is placed in the root of the project and will need to move. If it
   does require to be moved you can also click and drag the file within the VS
   Code file tree view. It will ask you to confirm it to be moved, if so please
   approve it._

6. <input type="checkbox" />While in VS Code window press and hold **`Ctrl`**
   and **<code>&grave;</code>** _(the key to the left of the 1 key)_ for the
   **Terminal** section to open up at the bottom.

   📓 _You can also open this up by using the app's menu navigation **View**_
   _➡️ **Terminal**_

7. <input type="checkbox" />Within the Terminal windows make sure you're at the
   root directory of the project and type the following command _(replace_
   _**[Word Filename]** with the actual file name of the document in both_
   _locations)_ and press the **Enter** key:

   <i title="Copy Text" style="float:right;" class="fas fa-clipboard" clip-text=
   'pandoc -s "original/[Word Filename].docx" -t markdown_mmd --extract-media=images -o "[Word Filename].md"'></i>

   ```powershell
   pandoc -s "original/[Word Filename].docx" -t markdown_mmd --extract-media=images -o "[Word Filename].md"
   ```

   📓 _If you are in a sub-directory, like `...\orginal`, just type **`cd ..`**_
   _and press the **Enter** key to go up a directory level and type the above_
   _command._

   📓 This will generate the new Markdown file _(**[Word Filename].md**)_ along
   with any embeded images that it could pull out of the document and place
   them into a new directory called images.

   ![To Markdown](images/to_markdown.png)

   ![Converted to MD](images/convert_to_md.png)

8. <input type="checkbox" />Go to the **Source Control** icon on the left side
   and in the textbox, above the **✔️ Commit** button, enter
   a statement such as `Initial with Converted` and then click on the
   **:heavy_check_mark: Commit** button to commit the initial files _(this_
   _doesn't push it to the repo yet, that's the next step)_.

   ![Begin Commit](images/begin_commit.png)

9. <input type="checkbox" />The **✔️ Commit** should have
    changed to a **Sync Changes 1 ⬆️** button that you will click and this will
    publish your changes to the repository.

    📓 Once the publishing of the changes are complete you may go back to DevOps
    and see all of the files you've placed in the project are now also stored in
    the repository including the original document, markdown file, and any
    images.

    ![Up To DevOps](images/to_devops.png)

# Modifying a Document

[GIT]: https://git-scm.com/about "git --local-branching-on-the-cheap"
[GIT Downloads]: https://git-scm.com/downloads "git --fast-version-control"
[Visual Studio Code]: https://code.visualstudio.com "Microsoft's Visual Studio Code"
[Pandoc]: https://pandoc.org "Pandoc, a universal document converter"
[Install Pandoc]: https://pandoc.org/installing.html "Download and install Pandoc"
