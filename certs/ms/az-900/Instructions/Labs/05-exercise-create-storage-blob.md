---
layout: lab
preIds: az900-lab-05
lab:
    title: 'Exercise - Create a storage blob'
    module: 'Module 03 - Describe Azure storage services'
---
[_Back_]

## Create a storage account

In this task, you'll create a new storage account.

<!-- {% assign counter = 1 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Sign in to the Azure portal at [https://portal.azure.com](https://portal.azure.com/learn.docs.microsoft.com?azure-portal=true)</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select **Create a resource**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Under Categories, select **Storage**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Under Storage account, select **Create**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} On the **Basics** tab of the Create a storage account blade, fill in the following information. Leave the defaults for everything else.</span>
    
    | **Setting**          | **Value**                                                      |
    | -------------------- | -------------------------------------------------------------- |
    | Subscription         | Select the subscription you want to use for the exercise.      |
    | Resource group       | Select Create new and enter **`IntroAzureRG`** and select OK   |
    | Storage account name | Create a unique storage account name                           |
    | Region               | Leave default                                                  |
    | Performance          | Standard                                                       |
    | Redundancy           | Locally redundant storage (LRS)                                |
    {: .table table-sm .table-bordered .table-striped .table-hover .w-75}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} On the **Advanced** tab of the Create a storage account blade, fill in the following information. Leave the defaults for everything else.</span>
    
    | **Setting**                                              | **Value** |
    | -------------------------------------------------------- | --------- |
    | Allow enabling anonymous access on individual containers | Checked   |
    {: .table table-sm .table-bordered .table-striped .table-hover .w-75}
    
    ![Screenshot showing how to enable anonymous-access containers on a storage account.](./Media/storage-account-anonymous-containers-5e5f584a.png)
    
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
7.  <span class="form-check">{% include checks.html id=result %} Select **Review** to review your storage account settings and allow Azure to validate the configuration.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
8.  <span class="form-check">{% include checks.html id=result %} Once validated, select **Create**. Wait for the notification that the account was successfully created.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
9.  <span class="form-check">{% include checks.html id=result %} Select **Go to resource**.</span>

## Work with blob storage

In this section, you'll create a Blob container and upload a picture.

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Under **Data storage**, select **Containers**.</span>
    
    ![Screenshot of the Container add section of a storage account.](./Media/storage-account-menu-9472480e.png)
    
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select **+ Container** and complete the information.</span>
    
    | **Setting**         | **Value**                      |
    | ------------------- | ------------------------------ |
    | Name                | Enter a name for the container |
    | Public access level | Private (no anonymous access)  |
    {: .table table-sm .table-bordered .table-striped .table-hover .w-75}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select Create.</span>

    {% include note.html text="Step 4 will need an image. If you want to upload an image you already have on your computer, continue to Step 4. Otherwise, open a new browser window and search Bing for an image of a flower. Save the image to your computer." %}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Back in the Azure portal, select the container you created, then select Upload.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} Browse for the image file you want to upload. Select it and then select upload.</span>

    {% include note.html text="You can upload as many blobs as you like in this way. New blobs will be listed within the container." %}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} Select the Blob (file) you just uploaded. You should be on the properties tab.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
7.  <span class="form-check">{% include checks.html id=result %} Copy the URL from the URL field and paste it into a new tab.</span>
    
    You should receive an error message similar to the following.
    
    ```xml
    <Error>
      <Code>ResourceNotFound</Code>
      <Message>The specified resource does not exist. RequestId:4a4bd3d9-101e-005a-1a3e-84bd42000000</Message>
    </Error>
    
    ```

## Change the access level of your blob

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Go back to the Azure portal.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select Change access level.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Set the Public access level to Blob (anonymous read access for blobs only).</span>
    
    ![Screenshot with Change access level highlighted.](./Media/blob-access-level-213a74e6.png)
    
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Select OK.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} Refresh the tab where you attempted to access the file earlier.</span>

Congratulations - you've completed this exercise. You created a storage account, added a container to the storage account, and then uploaded blobs (files) to your container. Then you changed the access level so you could access your file from the internet.

## Clean up

To clean up the assets created in this exercise and avoid unnecessary costs, delete the resource group _(and all associated resources)_.

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1. <span class="form-check">{% include checks.html id=result %} From the Azure home page, under Azure services, select Resource groups.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1. <span class="form-check">{% include checks.html id=result %} Select the IntroAzureRG resource group.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1. <span class="form-check">{% include checks.html id=result %} Select Delete resource group.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1. <span class="form-check">{% include checks.html id=result %} Enter **`IntroAzureRG`** to confirm deletion of the resource group and select delete.</span>

[_Continue_]

[_Back_]: ../../describe-azure-architecture-and-services
[_Continue_]: ../../describe-azure-architecture-and-services
