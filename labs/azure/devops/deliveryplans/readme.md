---
title: Building a roadmap and tracking dependencies across teams with Delivery Plans
layout: page
permalink: /labs/azure/devops/deliveryplans/
---

<div class="rw-ui-container"></div>
<a name="Overview"></a>

## Overview

It takes several teams to develop large software projects. Very large projects require multiple autonomous teams that can manage their own backlog and priority while contributing to a unified direction for that project. Regular reviews of the project schedule with these teams help ensure that the teams are working toward common goals. Delivery Plans provide the needed multi-team view of your project schedule.

**Delivery plans** provide visibility into features under development by several teams across several sprints. With Delivery Plans, portfolio managers can review the schedule of stories or features their teams plan to deliver. Delivery Plans show the scheduled work items by sprint (iteration path) of selected teams against a calendar view.

<div class="bg-slap"><img src="./images/mslearn.png" class="img-icon-cloud" alt="MS teams" style="
    width: 48px; height: 48px;">Want additional learning? Check out the <a href="https://docs.microsoft.com/en-us/learn/modules/manage-delivery-plans/" target="_blank"><b><u> Manage Agile software delivery plans across teams </u></b></a> module on Microsoft Learn.</div>

<a name="Prerequisites"></a>

### Prerequisites

- This lab requires you to complete task 1 from the <a href="../prereq/">prerequisite</a> instructions

<a name="Exercise1"></a>

## Exercise 1: Managing Delivery Plans with Azure DevOps

<a name="Ex1Task1"></a>

### Task 1: Creating a delivery plan

1. <input type="checkbox" class="box" id="azdodevplan-01" />
   From the **Boards** dropdown, select **Delivery Plans**.

   ![image](images/007.png)

1. <input type="checkbox" class="box" id="azdodevplan-02" />
   Click **New plan**.

   ![image](images/008.png)

1. <input type="checkbox" class="box" id="azdodevplan-03" />
   Since you may want to have multiple delivery plans for different aspects of your project, provide the specific name **"Web delivery"**. It should default to the **Parts Unlimited Team**, so select **Features** and click **Create**. Note that you could also organize your deliveries by **Stories** if you used that model instead. There is also the option to add additional teams and criteria to filter stories/features by, but we'll revisit those later.

   ![image](images/009.png)

1. <input type="checkbox" class="box" id="azdodevplan-04" />
   Due to the iteration reconfiguration performed earlier, the "Today" marker is right at the beginning of **Sprint 2**. We have a number of stories listed for delivery in the previous sprint, and we can also see an empty **Sprint 3**. Note that some of the stories shown are **Done**. Although it's useful to see the progress of work, we'll use that as an example by which to filter items out in a moment.

   ![image](images/010.png)

1. <input type="checkbox" class="box" id="azdodevplan-05" />
   Click the **Settings** button.

   ![image](images/011.png)

1. <input type="checkbox" class="box" id="azdodevplan-06" />
   Select the **Field criteria** tab and click **Add criteria**.

   ![image](images/012.png)

1. <input type="checkbox" class="box" id="azdodevplan-07" />
   Set the new criteria to filter down to items where **State** does not equal (**<>**) **Done**.

   ![image](images/013.png)

1. <input type="checkbox" class="box" id="azdodevplan-08" />
   We can also add a custom marker to keep track of significant dates. Select the **Markers** tab and click **Add marker**.

   ![image](images/014.png)

1. <input type="checkbox" class="box" id="azdodevplan-09" />
   Select the fourth Friday from today (it will be the Friday in the middle of **Sprint 3**) and set the **Label** to **"Team offsite"**. Select magenta as the **Color** and click **Save**.

   ![image](images/015.png)

1. <input type="checkbox" class="box" id="azdodevplan-10" />
   The first thing to notice is that the "Closed" story is no longer visible on the delivery plan due to the criteria set in the configuration. In addition, there is now a magenta marker in the middle of **Iteration 3** that says **"Team offsite"** when clicked.

   ![image](images/016.png)

1. <input type="checkbox" class="box" id="azdodevplan-11" />
   Another neat feature of the delivery plan extension is the ability to easily scale the calendar. You can use **Zoom out** to view multiple months at once. And **Zoom in** to a much more precise view.

   ![image](images/017.png)

<a name="Ex1Task2"></a>

### Task 2: Adding an external team to the project

1. <input type="checkbox" class="box" id="azdodevplan-12" />
   Our delivery plan has been pretty simple so far because we only have the one team. However, the real power of delivery planning comes into play when orchestrating multiple autonomous teams across their efforts. Open the settings page using the **Project Settings** navigation located at the bottom left of the page.

   ![image](images/019.png)

1. <input type="checkbox" class="box" id="azdodevplan-13" />
   From the **Teams** tab, click **New team**.

   ![image](images/020.png)

1. <input type="checkbox" class="box" id="azdodevplan-14" />
   This new team will be responsible for the efforts that involve integrating with external services, such as 3rd party services for things like weather forecasts and payment processing. Set the **Team name** to **"External integration team"** and click **Create team**.

   ![image](images/021.png)

1. <input type="checkbox" class="box" id="azdodevplan-15" />
   Select the **Project configuration** tab under **Boards**.

   ![image](images/022.png)

1. <input type="checkbox" class="box" id="azdodevplan-16" />
   Note the dates of **Sprint 2** and **Sprint 3**, which will vary for your account based on when you generated the project data. We're going to add two new iterations for the external services team that do not align exactly with the main team's schedule.

   ![image](images/023.png)

1. <input type="checkbox" class="box" id="azdodevplan-17" />
   With the root **PartsUnlimited** node select, click **New child**.

   ![image](images/024.png)

1. <input type="checkbox" class="box" id="azdodevplan-18" />
   Set the **Iteration name** to **"Iteration 50"**. Use today as the **Start date** and set the **End date** to three Fridays from today. This will also happen to be the day of the team offsite. Click **Save and close**.

   ![image](images/025.png)

1. <input type="checkbox" class="box" id="azdodevplan-19" />
   Use the same process to add an **Iteration 51** that starts the Monday after **Iteration 50** ends and has an end date three Fridays later.

   ![image](images/026.png)

1. <input type="checkbox" class="box" id="azdodevplan-20" />
   Now we need to configure the new team to use those new project sprints as its iterations. Select the **Teams** tab and click **External integration team**.

   ![image](images/027.png)

1. <input type="checkbox" class="box" id="azdodevplan-21" />
   Click **Iterations and Area Paths**.

   ![image](images/028.png)

1. <input type="checkbox" class="box" id="azdodevplan-22" />
   Select the **Iterations** tab.

   ![image](images/029.png)

1. <input type="checkbox" class="box" id="azdodevplan-23" />
   Click **Select iterations** and use the **+ Iteration** button to select **Iteration 50** and **Iteration 51**. Click **Save and close**.

   ![image](images/030.png)

<a name="Ex1Task3"></a>

### Task 3: Making delivery decisions

1. <input type="checkbox" class="box" id="azdodevplan-24" />
   From the **Boards** dropdown, select **Delivery Plans**.

   ![image](images/007.png)

1. <input type="checkbox" class="box" id="azdodevplan-25" />
   Select the **Web Delivery** plan.
1. <input type="checkbox" class="box" id="azdodevplan-26" />
   Click the **Settings** button.

   ![image](images/011.png)

1. <input type="checkbox" class="box" id="azdodevplan-27" />
   Select the **Teams** tab and click **Add team**.

   ![image](images/033.png)

1. <input type="checkbox" class="box" id="azdodevplan-28" />
   Select the **External integration team** and **Features**. Click **Save**.

   ![image](images/034.png)

1. <input type="checkbox" class="box" id="azdodevplan-29" />
   Use the **Zoom out** to fit the width of **Iteration 50** and **Iteration 51**.

   ![image](images/035.png)

1. <input type="checkbox" class="box" id="azdodevplan-30" />
   The new team doesn't have any stories added yet. Fortunately, you can add them directly to their team and iteration using the inline functionality. Select the **Iteration 50** iteration. Click the **New item** button that appears.

   ![image](images/036.png)

1. <input type="checkbox" class="box" id="azdodevplan-31" />
   Enter **"Integrate with weather service"** and press **Enter**. That item is now in the backlog with its area and iteration configured.

   ![image](images/037.png)

1. <input type="checkbox" class="box" id="azdodevplan-32" />
   Follow the same process to add an item for integrating with corporate branding assets to **Iteration 51**.

   ![image](images/038.png)

1. <input type="checkbox" class="box" id="azdodevplan-33" />
   Now we can step back to see how these two teams are working toward our common goals. Upon closer examination, it appears that the main team is planning to reuse some corporate branding assets during the current sprint that will not be available until well after it's over. It's a good thing we have this view to catch these sort of potential problems early on.

   ![image](images/039.png)

1. <input type="checkbox" class="box" id="azdodevplan-34" />
   The first thing we should do is to move the branding integration work to an earlier iteration. Drag and drop the corporate branding story onto **Iteration 50**. In order to free up the bandwidth, drag the weather service story onto **Iteration 51**.

   ![image](images/040.png)

1. <input type="checkbox" class="box" id="azdodevplan-35" />
   Next, drag the branding work item from **Sprint 1** to **Sprint 3** so that there's a chance the dependencies will be available in time for this team to be unblocked.

   ![image](images/041.png)

1. <input type="checkbox" class="box" id="azdodevplan-36" />
   Now we can review the delivery plan again. It should be more feasible now.

   ![image](images/042.png)

1. <input type="checkbox" class="box" id="azdodevplan-37" />
   There are a lot of ways to quickly customize the view of the delivery plan. For example, you can collapse all teams (or specific teams) using the toggle buttons next to their names.

   ![image](images/044.png)

### Task 4 : Track dependencies by using Delivery Plans

With Delivery Plans, you can track dependencies that have been added to work items. Dependency tracking supports the **Predecessor/Successor** link type between work items.

1. <input type="checkbox" class="box" id="azdodevplan-38" />
   Navigate to **Web Delivery** Plan.
1. <input type="checkbox" class="box" id="azdodevplan-39" />
   Move branding feature to **Sprint 1**

   ![image](images/dependecytracker_01.png)

1. <input type="checkbox" class="box" id="azdodevplan-40" />
   And click on **Links** tab and add **Integrate with weather service** and **integrating with corporate branding assets** features as **Successors** and **Save & Close**

   ![image](images/dependecytracker_02.png)

1. <input type="checkbox" class="box" id="azdodevplan-41" />
   Now your delivery plan looks like below. Click on ![](images/dependency-green-icon.png) to view the dependency summary

   ![image](images/dependecytracker_03.png)

1. <input type="checkbox" class="box" id="azdodevplan-42" />
   You can see the Dependencies detailed view. This  indicates that the work item has two successors and no issues with delivery dates.

   ![image](images/dependencydetailedview.png)

1. <input type="checkbox" class="box" id="azdodevplan-43" />
   Now move the branding feature to **sprint 2** and refresh the page.

1. <input type="checkbox" class="box" id="azdodevplan-44" />
   Now you can see red icon ![](images/dependency-red-icon.png) on feature. Click to see the details. Here we can see one feature has delivery issue. With this information we can plan the delivery of the dependent feature.

   ![image](images/dependencytracker_06.png)

   ![image](images/dependencytracker_07.png)

1. <input type="checkbox" class="box" id="azdodevplan-45" />
   Click on **Show all dependencies** icon. Dependency lines that have no issues show up as black lines. Dependency lines that have issues, show up with red lines. To view the issue or details you can click on those lines.

   ![image](images/dependencytracker_08.png)
  
## Reference

Thanks to **Nagaraj Bhairaji** for making a video on this lab. You can watch the following video that walks you through all the steps explained in this lab

<https://www.youtube.com/embed/WlWVJyxY-l8>
