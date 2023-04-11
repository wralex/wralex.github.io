---
layout: page
title:  'AZ400: Designing and Implementing Microsoft DevOps Solutions'
examurl: https://learn.microsoft.com/en-us/certifications/exams/az-400/
permalink: /courses/AZ400/
description: |
  DevOps engineers are developers or infrastructure administrators who also have
  subject matter expertise in working with people, processes, and products to
  enable continuous delivery of value in organizations.

  Responsibilities for this role include designing and implementing strategies 
  for collaboration, code, infrastructure, source control, security, compliance,
  continuous integration, testing, delivery, monitoring, and feedback.

  DevOps engineers work on cross-functional teams that include developers, site
  reliability engineers, and Azure administrators.

  DevOps engineers must have experience with administering and developing in
  Azure, with strong skills in at least one of these areas. They should be
  familiar with both Azure DevOps and GitHub.

  This exam measures your ability to accomplish the following technical tasks:

  - Configure processes and communications
  - Design and implement source control
  - Design and implement build and release pipelines
  - Develop a security and compliance plan
  - Implement an instrumentation strategy

  **Skills measured**

  - Configure processes and communications (10-15%)
  - Design and implement source control (15-20%)
  - Design and implement build and release pipelines (40-45%)
  - Develop a security and compliance plan (10-15%)
  - Implement an instrumentation strategy (10-15%)

  > **Tips**
  >
  > - Watch [AZ-400 exam prep videos
  >   ](https://learn.microsoft.com/en-us/shows/exam-readiness-zone/preparing-for-az-400-configure-processes-and-communications-1-of-5){:target='_blank'}
  >   on Learn
  > - Review the [AZ-400 study guide
  >   ](https://aka.ms/AZ400-StudyGuide){:target='_blank'} to prepare for the
  >   exam
  > - Try a [Sample Quiz](quiz){:target='_blank'}
---
**_[EXAM LINK]({{page.examurl}} '{{ page.title}}')_**

{{page.description}}

<div style='background-color:lightyellow;' id='toc'><u>
<span style='font-size:26pt;'>Modules</span></u></div>

- Do not remove this line (it will not be displayed)
{:toc style='background-color:lightyellow;font-size:16pt;'}

---

{% for p in site.data.az400 %}

## <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.index}}' style='width:30px;height:30px;' />{% if p.img > '' %}![{{p.title}}]({{p.img}}){:style='width:40px;'}{% endif %}[{{p.title}}]({{p.url}} '{{p.title}}'){:target='_blank'}

{{p.description}}

**Readings**{% for m in p.mods %}

1. <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.parentloop.index}}-m{{forloop.index}}' />{% if m.img > '' %}![{{m.title}}]({{m.img}}){:style='width:20px;'} {% endif %}
   [{{m.title}}]({{m.url}} '{% if m.description > '' %}{{m.description}}{% else %}{{m.title}}{% endif %}' ){:target='_blank'} {% for s in m.sec %}
   1. <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.parentloop.parentloop.index}}-m{{forloop.parentloop.index}}-s{{forloop.index}}' />[{{s.title}}]({{s.url}} '{{s.title}}'){:target='_blank'}{% endfor %}{% endfor %}

---
{% endfor %}
