---
layout: lab
preIds: az900-lab-08
lab:
    title: 'Exercise - Configure a resource lock'
    module: 'Module 05 - Describe features and tools in Azure for governance and compliance'
---

[_Back_]

In this exercise, you’ll create a resource and configure a resource lock. Storage accounts are one of the easiest types of resource locks to quickly see the impact, so you’ll use a storage account for this exercise.

This exercise is a Bring your own subscription exercise, meaning you’ll need to provide your own Azure subscription to complete the exercise. Don’t worry though, the entire exercise can be completed for free with the 12 month free services when you sign up for an Azure account.

For help with signing up for an Azure account, see the [Create an Azure account](https://docs.microsoft.com/learn/modules/create-an-azure-account/) learning module.

Once you’ve created your free account, follow the steps below. If you don’t have an Azure account, you can review the steps to see the process for adding a simple resource lock to a resource.

## Task 1: Create a resource

In order to apply a resource lock, you have to have a resource created in Azure. The first task focuses on creating a resource that you can then lock in subsequent tasks.

<!-- {% assign counter = 1 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Sign in to the [**Azure portal**](https://portal.azure.com)</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select **Create a resource**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Under Categories, select **`Storage`**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Under Storage Account, select **Create**.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} On the Basics tab of the Create storage account blade, fill in the following information. Leave the defaults for everything else.</span>
    
    | **Setting**          | **Value**                           |
    | -------------------- | ----------------------------------- |
    | Resource group       | Create new                          |
    | Storage account name | enter a unique storage account name |
    | Location             | default                             |
    | Performance          | Standard                            |
    | Redundancy           | Locally redundant storage (LRS)     |
    {: .table table-sm .table-bordered .table-striped .table-hover .w-75}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} Select Review + Create to review your storage account settings and allow Azure to validate the configuration.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
7.  <span class="form-check">{% include checks.html id=result %} Once validated, select Create. Wait for the notification that the account was successfully created.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
8.  <span class="form-check">{% include checks.html id=result %} Select Go to resource.</span>

## Task 2: Apply a read-only resource lock

In this task you apply a read-only resource lock to the storage account. What impact do you think that will have on the storage account?

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Scroll down until you find the Settings section of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select Locks.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select + Add.</span>
    
    ![Screenshot of the Add lock feature on a storage account set for a read-only lock.](./Media/read-only-lock-e7777623.png)

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Enter a Lock name.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} Verify the Lock type is set to Read-only.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} Select OK.</span>

## Task 3: Add a container to the storage account

In this task, you add a container to the storage account, this container is where you can store your blobs.

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Scroll up until you find the Data storage section of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select Containers.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select + Container.</span>
    
    ![Screenshot of the add container process outlined in this task.](./Media/add-container-steps-a6739e88.png)

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Enter a container name and select Create.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} You should receive an error message: Failed to create storage container.</span>
    
    ![Screenshot of the Failed to create storage container error message.](./Media/failed-to-create-warning-291af699.png)

{% include note.html text="The error message lets you know that you couldn't create a storage container because a lock is in place. The read-only lock prevents any create or update operations on the storage account, so you're unable to create a storage container." %}

## Task 4: Modify the resource lock and create a storage container

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Scroll down until you find the Settings section of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select Locks.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select the read-only resource lock you created.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Change the Lock type to Delete and select OK.</span>
    
    ![Screenshot midway through task process of changing the lock type on a resource lock.](./Media/resource-lock-change-e5281189.png)

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} Scroll up until you find the Data storage section of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} Select Containers.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
7.  <span class="form-check">{% include checks.html id=result %} Select + Container.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
8.  <span class="form-check">{% include checks.html id=result %} Enter a container name and select Create.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
9.  <span class="form-check">{% include checks.html id=result %} Your storage container should appear in your list of containers.</span>

You can now understand how the read-only lock prevented you from adding a container to your storage account. Once the lock type was changed (you could have removed it instead), you were able to add a container.

## Task 5: Delete the storage account

You'll actually do this last task twice. Remember that there is a delete lock on the storage account, so you won't actually be able to delete the storage account yet.

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Scroll up until you find Overview at the top of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Select Overview.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select Delete.</span>
    
    ![Screenshot of the deletion process for deleting a storage account.](./Media/storage-overview-page-ec75f9e6.png)

You should get a notification letting you know you can't delete the resource because it has a delete lock. In order to delete the storage account, you'll need to remove the delete lock.

![Screenshot of the Delete storage account error, explaining that a resource lock prevents deletion.](./Media/storage-delete-lock-warning-5ea6faa5.png)

## Task 6: Remove the delete lock and delete the storage account

In the final task, you remove the resource lock and delete the storage account from your Azure account. This step is important. You want to make sure you don't have any idle resource just sitting in your account.

<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select your storage account name in the breadcrumb at the top of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
2.  <span class="form-check">{% include checks.html id=result %} Scroll down until you find the Settings section of the blade on the left of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
3.  <span class="form-check">{% include checks.html id=result %} Select Locks.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
4.  <span class="form-check">{% include checks.html id=result %} Select Delete.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
5.  <span class="form-check">{% include checks.html id=result %} Select Home in the breadcrumb at the top of the screen.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
6.  <span class="form-check">{% include checks.html id=result %} Select Storage accounts</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
7.  <span class="form-check">{% include checks.html id=result %} Select the storage account you used for this exercise.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
8.  <span class="form-check">{% include checks.html id=result %} Select Delete.</span>
    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
9.  <span class="form-check">{% include checks.html id=result %} To prevent accidental deletion, Azure prompts you to enter the name of the storage account you want to delete. Enter the name of the storage account and select Delete.</span>
    
    ![Screenshot of the deletion confirmation message before deleting a storage account.](./Media/storage-account-delete-f4d60c3b.png)

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
10. <span class="form-check">{% include checks.html id=result %} You should receive a message that the storage account was deleted. If you go Home &gt; Storage accounts, you should see that the storage account you created for this exercise is gone.</span>

Congratulations! You've completed configuring, updating, and removing a resource lock on an Azure resource.

{% include important.html text = "Make sure you complete Task 6, the removal of the storage account. You are solely responsible for the resources in your Azure account. Make sure you clean up your account after completing this exercise." %}


[_Continue_]

[_Back_]: ../../describe-azure-management-and-governance
[_Continue_]: ../../describe-azure-management-and-governance
