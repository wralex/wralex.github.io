---
layout: page
title:  "Get started on a DevOps transformation journey"
---

This learning path helps you understand **what DevOps is** and how to **plan for a DevOps transformation journey**.

{% for entry in site.data.az400mod1 %}
<details style="margin-bottom:20px;">
    <summary>
        <input class="box" type="checkbox" id="{{ entry.chkbxid }}" name="{{ entry.chkbxid }}"/>
        <a href='{{ entry.url }}' target='_blank'>
            <strong>{{ entry.title }}</strong></a>
        <p>{{ entry.description }}</p>
    </summary>
    {% for mod in entry.mods %}<input type="checkbox" class="box" id="{{ mod.chkbxid }}"  name="{{ mod.chkbxid }}" /> <a href='{{ mod.url }}' target='_blank'>{{ mod.title }}</a><br />
    {% endfor %}
</details>
{% endfor %}

<small>_referenced from_<br />
<https://learn.microsoft.com/en-us/training/paths/az-400-get-started-devops-transformation-journey/></small>
