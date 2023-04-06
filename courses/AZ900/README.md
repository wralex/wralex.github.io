---
layout: page
title:  'AZ900: Microsoft Azure Fundamentals'
examurl: https://learn.microsoft.com/en-us/certifications/exams/az-900/
permalink: /courses/AZ900/
exam: az900
description: |
  This exam measures your ability to describe the following: cloud concepts;
  Azure architecture and services; and Azure management and governance.

  **Skills measured**

  - Describe cloud concepts (25-30%)
  - Describe Azure architecture and services (35-40%)
  - Describe Azure management and governance (30-35%)
---
**_[EXAM LINK]({{page.examurl}})_**

{{page.description}}

<div style='background-color:lightyellow;' id='toc'><u>
<span style='font-size:26pt;'>Modules</span></u></div>

- Do not remove this line (it will not be displayed)
{:toc style='background-color:lightyellow;font-size:16pt;'}

---

{% for p in site.data.az900 %}

## <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.index}}' style='width:30px;height:30px;' />{% if p.img > '' %}![{{p.title}}]({{p.img}}){:style='width:40px;'}{% endif %}[{{p.title}}]({{p.url}} '{{p.title}}'){:target='_blank'}

{{p.description}}

**Readings**{% for m in p.mods %}

1. <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.parentloop.index}}-m{{forloop.index}}' />{% if m.img > '' %}![{{m.title}}]({{m.img}}){:style='width:20px;'} {% endif %}
   [{{m.title}}]({{m.url}} '{% if m.description > '' %}{{m.description}}{% else %}{{m.title}}{% endif %}' ){:target='_blank'} {% for s in m.sec %}
   1. <input type='checkbox' class='box' id='{{page.exam}}-p{{forloop.parentloop.parentloop.index}}-m{{forloop.parentloop.index}}-s{{forloop.index}}' />[{{s.title}}]({{s.url}} '{{s.title}}'){:target='_blank'}{% endfor %}{% endfor %}

---
{% endfor %}
