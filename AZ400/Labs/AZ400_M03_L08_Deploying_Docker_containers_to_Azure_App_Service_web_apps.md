---
layout: page
title:  "Lab 08: Deploying Docker containers to Azure App Service web apps"
chkbx-pre-ids: az400-lab08
---
## Lab requirements

- This lab requires **Microsoft Edge** or an
  [Azure DevOps supported browser.](https://learn.microsoft.com/azure/devops/server/compatibility?view=azure-devops#web-portal-supported-browsers){:target="_blank"}
- **Set up an Azure DevOps organization:** If you don't already have an Azure DevOps organization that you can use for this lab, create one by following the instructions available at
  [Create an organization or project collection](https://learn.microsoft.com/azure/devops/organizations/accounts/create-organization?view=azure-devops){:target="_blank"}.
- Identify an existing Azure subscription or create a new one.
- Verify that you have a Microsoft account or an Azure AD account with the Contributor or the Owner role in the Azure subscription. For details, refer to
  [List Azure role assignments using the Azure portal](https://learn.microsoft.com/azure/role-based-access-control/role-assignments-list-portal){:target="_blank"} and
  [View and assign administrator roles in Azure Active Directory](https://learn.microsoft.com/azure/active-directory/roles/manage-roles-portal){:target="_blank"}.

## Lab overview

In this lab, you will learn how to use an Azure DevOps CI/CD pipeline to build a custom Docker image, push it to Azure
Container Registry, and deploy it as a container to Azure App Service.

## Objectives

After you complete this lab, you will be able to:

- Build a custom Docker image by using a Microsoft hosted Linux agent.
- Push an image to Azure Container Registry.
- Deploy a Docker image as a container to Azure App Service by using Azure DevOps.

## Estimated timing: 30 minutes

## Instructions

### Exercise 0: Configure the lab prerequisites

In this exercise, you will set up the prerequisites for the lab, which consist of a new Azure DevOps project with a
repository based on the [eShopOnWeb](https://github.com/MicrosoftLearning/eShopOnWeb){:target="_blank"}.

#### Task 1: (skip if done) Create and configure the team project

In this task, you will create an **eShopOnWeb** Azure DevOps project to be used by several labs.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task1-01" name="{{ page.chkbx-pre-ids }}-exer0-task1-01" /> On your lab computer,
   in a browser window open your Azure DevOps organization. Click on **New Project**. Give your project the
   name <span id="labtitle">**eShopOnWeb**</span><i title="Copy Text" class="fas fa-clipboard" onclick="posttoclip('labtitle')"></i> and
   choose **Scrum** on the **Work Item process** dropdown. Click on **Create**.

#### Task 2: (skip if done) Import eShopOnWeb Git Repository

In this task you will import the eShopOnWeb Git repository that will be used by several labs.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task2-01" name="{{ page.chkbx-pre-ids }}-exer0-task2-01" /> On your lab computer,
   in a browser window open your Azure DevOps organization and the previoulsy created **eShopOnWeb** project.
   Click on **Repos>Files** , **Import**. On the **Import a Git Repository** window, paste the following
   URL [https://github.com/MicrosoftLearning/eShopOnWeb.git](https://github.com/MicrosoftLearning/eShopOnWeb.git){:target="_blank"} <i title="Copy URL" class="fas fa-clipboard" onclick="texttoclip('https://github.com/MicrosoftLearning/eShopOnWeb.git')"></i> and click on **Import**.
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task2-02" name="{{ page.chkbx-pre-ids }}-exer0-task2-02" /> The
   repository is organized the following way:

   - **.ado** folder contains Azure DevOps YAML pipelines
   - **.devcontainer** folder container setup to develop using containers (either locally in VS Code or GitHub Codespaces)
   - **.azure** folder contains Bicep&ARM infrastructure as code templates used in some lab scenarios.
   - **.github** folder container YAML GitHub workflow definitions.
   - **src** folder contains the .NET 6 website used on the lab scenarios.

#### Task 3: (skip if done) Set main branch as default branch

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task3-01" name="{{ page.chkbx-pre-ids }}-exer0-task3-01" /> Go
   to **Repos>Branches**
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task3-02" name="{{ page.chkbx-pre-ids }}-exer0-task3-02" /> Hover
   on the **main** branch then click the ellipsis on the right of the column.
3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer0-task3-03" name="{{ page.chkbx-pre-ids }}-exer0-task3-03" /> Click
   on **Set as default branch**.

### Exercise 1: Manage the service connection

In this exercise, you will configure the service connection with your Azure Subscription then import and run the CI pipeline.

#### Task 1: (skip if done) Manage the service connection

You can create a connection from Azure Pipelines to external and remote services for executing tasks in a job.

In this task, you will create a service principal by using the Azure CLI, which will allow Azure DevOps to:

- Deploy resources on your azure subscription
- Push the docker image to Azure Container Registry
- Add a role assignment to allow Azure App Service pull the docker image from Azure Container Registry

> **Note**: If you do already have a service principal, you can proceed directly to the next task.

You will need a service principal to deploy  Azure resources from Azure Pipelines.

A service principal is automatically created by Azure Pipeline when you connect to an Azure subscription from inside a
pipeline definition or when you create a new service connection from the project settings page (automatic option). You
can also manually create the service principal from the portal or using Azure CLI and re-use it across projects.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-" name="{{ page.chkbx-pre-ids }}-exer1-task1-" /> From
   the lab computer, start a web browser, navigate to the [**Azure Portal**](https://portal.azure.com){:target="_blank"},
   and sign in with the user account that has the Owner role in the Azure subscription you will be using in this lab and
   has the role of the Global Administrator in the Azure AD tenant associated with this subscription.
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-" name="{{ page.chkbx-pre-ids }}-exer1-task1-" /> In
   the Azure portal, click on the **Cloud Shell** icon, located directly to the right of the search textbox at the top of the page.
3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-" name="{{ page.chkbx-pre-ids }}-exer1-task1-" /> If
   prompted to select either **Bash** or **PowerShell**, select **Bash**.

   >**Note**: If this is the first time you are starting **Cloud Shell** and you are presented with
   > the **You have no storage mounted** message, select the subscription you are using in this lab, and
   > select **Create storage**.

4. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-04" name="{{ page.chkbx-pre-ids }}-exer1-task1-" /> From
   the **Bash** prompt, in the **Cloud Shell** pane, run the following commands to retrieve the values of the Azure
   subscription ID attribute:

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer1-task1-04-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer1-task1-04-code"><span class="nv">subscriptionName</span><span class="o">=</span><span class="si">$(</span>az account show <span class="nt">--query</span> name <span class="nt">--output</span> tsv<span class="si">)</span>
   <span class="nv">subscriptionId</span><span class="o">=</span><span class="si">$(</span>az account show <span class="nt">--query</span> <span class="nb">id</span> <span class="nt">--output</span> tsv<span class="si">)</span>
   <span class="nb">echo</span> <span class="nv">$subscriptionName</span>
   <span class="nb">echo</span> <span class="nv">$subscriptionId</span></code></pre>
   </div></div>

    > **Note**: Copy both values to a text file. You will need them later in this lab.

5. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-05" name="{{ page.chkbx-pre-ids }}-exer1-task1-05" />  From the **Bash**
   prompt, in the **Cloud Shell** pane, run the following command to create a service principal:

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer1-task1-05-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer1-task1-05-code">az ad sp create-for-rbac <span class="nt">--name</span> sp-az400-azdo <span class="nt">--role</span> contributor <span class="nt">--scopes</span> /subscriptions/<span class="nv">$subscriptionId</span></code></pre></div>    </div>

    > **Note**: The command will generate a JSON output. Copy the output to text file. You will need it later in this lab.

6. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-06" name="{{ page.chkbx-pre-ids }}-exer1-task1-06" /> Next, from the lab
   computer, start a web browser, navigate to the Azure DevOps **eShopOnWeb** project. Click on
   **Project Settings>Service Connections (under Pipelines)** and **New Service Connection**.
7. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-07" name="{{ page.chkbx-pre-ids }}-exer1-task1-07" /> On the **New service
   connection** blade, select **Azure Resource Manager** and **Next** (may need to scroll down).
8. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-08" name="{{ page.chkbx-pre-ids }}-exer1-task1-08" /> The choose
   **Service principal (manual)** and click on **Next**.
9. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-09" name="{{ page.chkbx-pre-ids }}-exer1-task1-09" /> Fill in the empty
   fields using the information gathered during previous steps:
   - Subscription Id and Name
   - Service Principal Id (or clientId), Key (or Password) and TenantId.
   - In **Service connection name** type **azure-connection**. This name will be referenced in YAML pipelines when needing
     an Azure DevOps Service Connection to communicate with your Azure subscription.
10. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer1-task1-10" name="{{ page.chkbx-pre-ids }}-exer1-task1-10" /> Click on **Verify and Save**.

### Exercise 2: Import and run the CI pipeline

In this exercise, you will import and run the CI pipeline.

#### Task 1: Import and run the CI pipeline

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-01" name="{{ page.chkbx-pre-ids }}-exer2-task1-01" /> Go to **Pipelines>Pipelines**
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-02" name="{{ page.chkbx-pre-ids }}-exer2-task1-02" /> Click on **New pipeline** button
3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-03" name="{{ page.chkbx-pre-ids }}-exer2-task1-03" /> Select **Azure Repos Git (Yaml)**
4. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-04" name="{{ page.chkbx-pre-ids }}-exer2-task1-04" /> Select the **eShopOnWeb** repository
5. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-05" name="{{ page.chkbx-pre-ids }}-exer2-task1-05" /> Select **Existing Azure Pipelines YAML File**
6. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-06" name="{{ page.chkbx-pre-ids }}-exer2-task1-06" /> Select the **/.ado/eshoponweb-ci-docker.yml** file then click on **Continue**
7. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-07" name="{{ page.chkbx-pre-ids }}-exer2-task1-07" /> In the YAML pipeline definition, customize:
   - **YOUR-SUBSCRIPTION-ID** with your Azure subscription id.
   - **rg-az400-container-NAME** with the resource group name defined before in the lab.
8. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-08" name="{{ page.chkbx-pre-ids }}-exer2-task1-08" /> Click on **Save and Run** and wait for the pipeline to execute succesfully.

   > **Note**: The deployment may take a few minutes to complete.

   The CI definition consists of the following tasks:
   - **Resources**: It downloads the repository filest will be used in the followinf tasks.
   - **AzureResourceManagerTemplateDeployment**: Deploys the Azure Container Registry using bicep template.
   - **PowerShell**: Retrieve the **ACR Login Server** value from the previous task's output and create a new parameter **acrLoginServer**
   - [**Docker**](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/docker-v0?view=azure-pipelines){:target="_blank"} **- Build**:
     Build the docker image and create two tags (Latest and current BuildID)
   - **Docker - Push**: Push the images to Azure Container Registry
9. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-09" name="{{ page.chkbx-pre-ids }}-exer2-task1-09" /> Your pipeline will take a name based on the project name. Let's **rename** it for identifying the pipeline better. Go to **Pipelines>Pipelines** and click on the recently created pipeline. Click on the ellipsis and **Rename/Remove** option. Name it **eshoponweb-ci-docker** and click on **Save**.
10. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer2-task1-10" name="{{ page.chkbx-pre-ids }}-exer2-task1-10" /> Navigate to the [**Azure Portal**](https://portal.azure.com){:target="_blank"}, search for the Azure Container Registry in the recently created Resource Group (it should be named **rg-az400-container-NAME**). Make sure that the **eshoponweb/web** was created and contains two tags (one of them is **Latest**).

### Exercise 3: Import and run the CD pipeline

In this exercise, you will configure the service connection with your Azure Subscription then import and run the CD pipeline.

#### Task 1: Add a new role assignment

In this task, you will add a new role assignment to allow Azure App Service pull the docker image from Azure Container Registry.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task1-01" name="{{ page.chkbx-pre-ids }}-exer3-task1-01" /> Navigate to the [**Azure Portal**](https://portal.azure.com){:target="_blank"}.
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task1-02" name="{{ page.chkbx-pre-ids }}-exer3-task1-02" /> In the Azure portal, click on the **Cloud Shell** icon, located directly to the right of the search textbox at the top of the page.
3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task1-03" name="{{ page.chkbx-pre-ids }}-exer3-task1-03" /> If prompted to select either **Bash** or **PowerShell**, select **Bash**.
4. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task1-04" name="{{ page.chkbx-pre-ids }}-exer3-task1-04" /> From the **Bash** prompt, in the **Cloud Shell** pane, run the following commands to retrieve the values of the Azure subscription ID attribute:

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer3-task1-04-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer3-task1-04-code"><span class="nv">spId</span><span class="o">=</span><span class="si">$(</span>az ad sp list <span class="nt">--display-name</span> sp-az400-azdo <span class="nt">--query</span> <span class="s2">"[].id"</span> <span class="nt">--output</span> tsv<span class="si">)</span>
   <span class="nb">echo</span> <span class="nv">$spId</span>
   <span class="nv">roleName</span><span class="o">=</span><span class="si">$(</span>az role definition list <span class="nt">--name</span> <span class="s2">"User Access Administrator"</span> <span class="nt">--query</span> <span class="o">[</span>0].name <span class="nt">--output</span> tsv<span class="si">)</span>
   <span class="nb">echo</span> <span class="nv">$roleName</span></code></pre></div></div>

5. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task1-05" name="{{ page.chkbx-pre-ids }}-exer3-task1-05" /> After getting the service principal ID and the role name, let's create the role assignment by running this command (replace **rg-az400-container-NAME** with your resource group name)

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer3-task1-05-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer3-task1-05-code">az role assignment create <span class="nt">--assignee</span> <span class="nv">$spId</span> <span class="nt">--role</span> <span class="nv">$roleName</span> <span class="nt">--resource-group</span> <span class="s2">"rg-az400-container-NAME"</span></code></pre></div>    </div>

You should now see the JSON output which confirms the success of the command run.

#### Task 2: Import and run the CD pipeline

In this task, you will import and run the CI pipeline.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-01" name="{{ page.chkbx-pre-ids }}-exer3-task2-01" /> Go to **Pipelines>Pipelines**
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-02" name="{{ page.chkbx-pre-ids }}-exer3-task2-02" /> Click on **New pipeline** button
3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-03" name="{{ page.chkbx-pre-ids }}-exer3-task2-03" /> Select **Azure Repos Git (Yaml)**
4. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-04" name="{{ page.chkbx-pre-ids }}-exer3-task2-04" /> Select the **eShopOnWeb** repository
5. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-05" name="{{ page.chkbx-pre-ids }}-exer3-task2-05" /> Select **Existing Azure Pipelines YAML File**
6. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-06" name="{{ page.chkbx-pre-ids }}-exer3-task2-06" /> Select the **/.ado/eshoponweb-cd-webapp-docker.yml** file then click on **Continue**
7. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-07" name="{{ page.chkbx-pre-ids }}-exer3-task2-07" /> In the YAML pipeline definition, customize:
   - **YOUR-SUBSCRIPTION-ID** with your Azure subscription id.
   - **rg-az400-container-NAME** with the resource group name defined before in the lab.
8. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-08" name="{{ page.chkbx-pre-ids }}-exer3-task2-08" /> Click on **Save and Run** and wait for the pipeline to execute succesfully.

   > **Note**: The deployment may take a few minutes to complete.

   The CI definition consists of the following tasks:
   - **Resources**: It downloads the repository filest will be used in the followinf tasks.
   - **AzureResourceManagerTemplateDeployment**: Deploys the Azure App Service using bicep template.
   - **AzureResourceManagerTemplateDeployment**: Add role assignment using Bicep
9. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task2-09" name="{{ page.chkbx-pre-ids }}-exer3-task2-09" /> Your pipeline will take a name based on the project name. Let's **rename** it for identifying the pipeline better. Go to **Pipelines>Pipelines** and click on the recently created pipeline. Click on the ellipsis and **Rename/Remove** option. Name it **eshoponweb-cd-webapp-docker** and click on **Save**.

   > **Note 1**: The use of the **/.azure/bicep/webapp-docker.bicep** template creates an app service plan, a web app with system assigned managed identity enabled, and references the docker image pushed previously: **${acr.properties.loginServer}/eshoponweb/web:latest**.
   >
   > **Note 2**: The use of the **/.azure/bicep/webapp-to-acr-roleassignment.bicep** template creates a new role assignment for the web app with AcrPull role to be able to retreive the docker image. This could be done in the first template, but since the role assignment can take some time to propagate, it's a good idea to do both tasks separately.

#### Task 3: Test the solution

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task3-01" name="{{ page.chkbx-pre-ids }}-exer3-task3-01" /> In the Azure Portal, navigate to the recently created Resource Group, you should now see three resources (Ap Service, App Service Plan and Container Registry).
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer3-task3-02" name="{{ page.chkbx-pre-ids }}-exer3-task3-02" /> Navigate to the App Service, then click **Browse**, this will take you to the website.

Congratulations! In this exercise, you deployed a website using custom docker image.

### Exercise 4: Remove the Azure lab resources

In this exercise, you will remove the Azure resources provisioned in this lab to eliminate unexpected charges.

>**Note**: Remember to remove any newly created Azure resources that you no longer use. Removing unused resources ensures you will not see unexpected charges.

#### Task 1: Remove the Azure lab resources

In this task, you will use Azure Cloud Shell to remove the Azure resources provisioned in this lab to eliminate unnecessary charges.

1. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer4-task1-01" name="{{ page.chkbx-pre-ids }}-exer4-task1-01" /> In the Azure portal, open the **Bash** shell session within the **Cloud Shell** pane.
2. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer4-task1-02" name="{{ page.chkbx-pre-ids }}-exer4-task1-02" /> List all resource groups created throughout the labs of this module by running the following command:

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer4-task1-02-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer4-task1-02-code">az group list <span class="nt">--query</span> <span class="s2">"[?starts_with(name,'rg-az400-container-')].name"</span> <span class="nt">--output</span> tsv</code></pre></div>    </div>

3. <input type="checkbox" class="box" id="{{ page.chkbx-pre-ids }}-exer4-task1-03" name="{{ page.chkbx-pre-ids }}-exer4-task1-03" /> Delete all resource groups you created throughout the labs of this module by running the following command:

   <i title="Copy Text" style="float:right" class="fas fa-clipboard" onclick="posttoclip('exer4-task1-03-code')"></i>
   <div class="language-bash highlighter-rouge"><div class="highlight">
   <pre class="highlight"><code id="exer4-task1-03-code">az group list <span class="nt">--query</span> <span class="s2">"[?starts_with(name,'rg-az400-container-')].[name]"</span> <span class="nt">--output</span> tsv | xargs <span class="nt">-L1</span> bash <span class="nt">-c</span> <span class="s1">'az group delete --name $0 --no-wait --yes'</span></code></pre></div>    </div>

   > **Note**: The command executes asynchronously (as determined by the --nowait parameter),
   > so while you will be able to run another Azure CLI command immediately afterwards within the same Bash session,
   > it will take a few minutes before the resource groups are actually removed.

## Review

In this lab, you learned how to use an Azure DevOps CI/CD pipeline to build a custom Docker image, push it to Azure
Container Registry, and deploy it as a container to Azure App Service.
