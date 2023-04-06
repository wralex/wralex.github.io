---
layout: page
title:  'AZ204: Developing Solutions for Microsoft Azure'
examurl: https://learn.microsoft.com/en-us/certifications/exams/az-204/
permalink: /courses/AZ204
exam: az204
description: |
  This exam measures your ability to accomplish the following technical tasks:
  develop Azure compute solutions; develop for Azure storage; implement Azure
  security; monitor, troubleshoot, and optimize Azure solutions; and connect to
  and consume Azure services and third-party services. You will be able to
  select the code language (C# or Python) that’s included in the questions when
  you launch the exam.

  **Skills measured**

  - Develop Azure compute solutions (25-30%)
  - Develop for Azure storage (15-20%)
  - Implement Azure security (20-25%)
  - Monitor, troubleshoot, and optimize Azure solutions (15-20%)
  - Connect to and consume Azure services and third-party services (15-20%)
  
  **Prerequisites**

  - At least one year of experience developing scalable solutions through all
    phases of software development.
  - Have a base understanding of Azure and cloud concepts, services, and the
    Azure portal.
  - If you are new to Azure or cloud computing it is recommended you complete
    the [AZ-900: Azure Fundamentals
    ](https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/)
    course.
---
**_[EXAM LINK]({{page.examurl}})_**

{{page.description}}

<div style="background-color:lightyellow;" id="toc"><u>
<span style="font-size:26pt;">Modules</span></u></div>

- Do not remove this line (it will not be displayed)
{:toc style="background-color:lightyellow;font-size:16pt;"}

---

{% for p in site.data.az204 %}

## <input type="checkbox" class="box" id="{{page.exam}}-p{{forloop.index}}" style="width:30px;height:30px;vertical-align:middle;" />![{{p.title}}]({{p.img}}){:style="width:40px;"}&nbsp;[{{p.title}}]({{p.url}}){:target="_blank"}

{{p.description}}

**Readings**{% for m in p.mods %}

1. <input type="checkbox" class="box" style="vertical-align:middle;" id="{{page.exam}}-p{{forloop.parentloop.index}}-m{{forloop.index}}" />
   {% if m.img > "" %}![{{m.title}}]({{m.img}}){:style="width:20px;"}&nbsp;{% endif %}[{{m.title}}]({{m.url}} '{{m.description}}'){:target="_blank"}{% for s in m.sec %}
   1. <input type="checkbox" class="box" id="{{page.exam}}-p{{forloop.parentloop.parentloop.index}}-m{{forloop.parentloop.index}}-s{{forloop.index}}" />[{{s.title}}]({{s.url}}){:target="_blank"}{% endfor %}{% endfor %}

---
{% endfor %}
