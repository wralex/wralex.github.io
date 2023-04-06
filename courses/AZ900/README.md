---
layout: page
title:  "AZ900: Microsoft Azure Fundamentals"
url: https://learn.microsoft.com/en-us/training/modules/introduction-to-devops
permalink: /courses/AZ900/
---
This exam measures your ability to describe the following: cloud concepts;
Azure architecture and services; and Azure management and governance.

**Skills measured**

- Describe cloud concepts (25-30%)
- Describe Azure architecture and services (35-40%)
- Describe Azure management and governance (30-35%)

<div style="background-color:lightyellow;" id="toc"><u>
<span style="font-size:26pt;">Modules</span></u></div>

- Do not remove this line (it will not be displayed)
{:toc style="background-color:lightyellow;font-size:16pt;"}

{% assign i = 0 %}{% for p in site.data.az900 %}{% increment i %}{{ i }}

## <input type="checkbox" class="box" id="{{ p.chkbxid }}" style="width:30px;height:30px;vertical-align:middle;" />![image]({{ p.img }}){:style="width:40px;"}&nbsp;[{{ p.title }}]({{ p.url }}){:target="_blank"}

{{ p.description }}{% assign j = 0 %}{% for m in p.mods %}{% increment j %}{{j}}

1. <input type="checkbox" class="box" id="{{ p.chkbxid }}-{{ m.chkbxid }}" />[{{ m.title }}]({{ m.url }}){:target="_blank"}{% assign k = 0 %}{% for s in m.sec %}{% increment k %}{{k}}
   1. <input type="checkbox" class="box" id="{{ p.chkbxid }}-{{ m.chkbxid }}-{{ s.chkbxid }}" />[{{ s.title }}]({{ s.url }}){:target="_blank"}{% endfor %}{% endfor %}{% endfor %}
