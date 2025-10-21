---
layout: lab
preIds: az900-lab-02
lab:
    title: 'Exercise - Create an Azure resource'
    module: 'Module 01 - Describe the core architectural components of Azure'
---
[_Back_]

In this exercise, you’ll use the Azure portal to create a resource. The focus of the exercise is observing how Azure resource groups populate with created resources.

{% include important.html text="The sandbox should already be activated, but if the sandbox closed, reactivate the sandbox before continuing." %}

## Task 1: Create a virtual machine

In this task, you’ll create a virtual machine using the Azure portal.

<!-- {% assign counter = 1 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %}Sign in to the [Azure portal](https://portal.azure.com/learn.docs.microsoft.com?azure-portal=true).</span>
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select Create a resource &gt; Compute &gt; Virtual Machine &gt; Create.</span>
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} The Create a virtual machine pane opens to the basics tab.</span>
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Verify or enter the following values for each setting. If a setting isn’t specified, leave the default value.</span>
    
    **Basics tab**
    
    | **Setting**                  | **Value**                                                  |
    | ---------------------------- | ---------------------------------------------------------- |
    | Subscription                 | Concierge Subscription                                     |
    | Resource group               | Select the resource group name that begins with **learn**. |
    | Virtual machine name         | my-VM                                                      |
    | Region                       | Leave default                                              |
    | Availability options         | Leave default                                              |
    | Security type                | Leave default                                              |
    | Image                        | Leave default                                              |
    | VM architecture              | Leave default                                              |
    | Run with Azure Spot discount | Unchecked                                                  |
    | Size                         | Leave default                                              |
    | Authentication type          | Password                                                   |
    | Username                     | azureuser                                                  |
    | Password                     | Enter a custom password                                    |
    | Confirm password             | Reenter the custom password                                |
    | Public inbound ports         | None                                                       |
    {: .table .table-sm .table-striped .table-bordered .table-hover}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select Review and Create.</span>

    {% include caution.html text="Product details will include a cost associated with creating the virtual machine. This is a system function. If you’re creating the VM in the Learn sandbox, you won’t actually incur any costs." %}

    <!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select Create

Wait while the VM is provisioned. Deployment is in progress will change to Deployment is complete when the VM is ready.

## Task 2: Verify resources created

Once the deployment is created, you can verify that Azure created not only a VM, but all of the associated resources the VM needs.
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select Home</span>
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select Resource groups</span>
<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
1.  <span class="form-check">{% include checks.html id=result %} Select the <rgn>[sandbox resource group name]</rgn> resource group</span>

You should see a list of resources in the resource group. The storage account and virtual network are associated with the Learn sandbox. However, the rest of the resources were created when you created the virtual machine. By default, Azure gave them all a similar name to help with association and grouped them in the same resource group.

Congratulations! You've created a resource in Azure and had a chance to see how resources get grouped on creation.

## Clean up

The sandbox automatically cleans up your resources when you're finished with this module.

When you're working in your own subscription, it's a good idea at the end of a project to identify whether you still need the resources you created. Resources that you leave running can cost you money. You can delete resources individually or delete the resource group to delete the entire set of resources.

[_Continue_]

[_Back_]: ../../describe-azure-architecture-and-services
[_Continue_]: ../../describe-azure-architecture-and-services
