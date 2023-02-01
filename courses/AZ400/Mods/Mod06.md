---
layout: page
title:  "Manage infrastructure as code using Azure and DSC"
---

This learning path explores the “Infrastructure as Code” (IaC) concept and how to manage your operations environment the same way you do applications or other code for general release.

{% for entry in site.data.az400mod6 %}
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

[**Next (<small>_Module 07: Design and implement a dependency management strategy_</small>) >**](Mod07)
