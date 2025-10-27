---
layout: default
title: "Welcome to WRAJ"
---

## Prerequisites

- **Use/Create a [Microsoft Azure subscription]**

  All/Most excercises require a [Microsoft Azure subscription]. If you don't have one yet, you can sign up for a **[free](https://azure.microsoft.com/en-us/pricing/free-services/)** or **[pay-as-you-go](https://go.microsoft.com/fwlink/?linkid=2332614&clcid=0x409)** plan.

- **[Visual Studio Code]**

  VS Code is a free code editor, which runs on the macOS, Linux, and Windows operating systems. Getting up and running with Visual Studio Code is quick and easy. It is a small download so you can install in a matter of minutes and give VS Code a try.

  VS Code is lightweight and should run on most available hardware and platform versions. You can review the [System Requirements](https://code.visualstudio.com/docs/supporting/requirements) to check if your computer configuration is supported.

  [Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview){: .btn .btn-primary .btn-sm}

- **[Microsoft Edge] Browser**

  I suggest using MS Edge's features like **[Split screen]** that will help view and work with the lessons linked within the lessons linked.  
  In addition, you should create a **[Profile]** within Edge configured to your [Microsoft Azure subscription] mentioned above. This way you will not have to switch your login when you are working these lessons.

<blockquote>
    Open the console in the browser developer tools to see the API responses.
</blockquote>
<div id="userOptions">
    <button class="btn btn-sm btn-primary" id="list" onclick="listUsers()">List</button>
    <button class="btn btn-sm btn-warning" id="get" onclick="getUser(1)">Get</button>
    <button class="btn btn-sm btn-secondary" id="update" onclick="updateUser()">Update</button>
    <button class="btn btn-sm btn-danger" id="create" onclick="createUser()">Create</button>
    <button class="btn btn-sm btn-dark" id="delete" onclick="delUser()">Delete</button>
</div>

[Microsoft Azure subscription]: https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account
[Microsoft Edge]: https://www.microsoft.com/en-us/edge
[Split screen]: https://www.microsoft.com/en-us/edge/features/split-screen?form=MA13FJ
[Profile]: https://www.microsoft.com/en-us/edge/features/profiles?form=MA13FJ
[Visual Studio Code]: https://code.visualstudio.com

<script src="{{ "/assets/js/dataUsers.js" | relative_url }}"></script>
