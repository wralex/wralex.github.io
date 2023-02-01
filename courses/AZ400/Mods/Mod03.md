---
layout: page
title:  "Implement CI with Azure Pipelines and GitHub Actions"
---

This learning path introduces the continuous integration concept using Azure Pipelines and GitHub Actions and provides instruction on configuring those services and building applications.

{% for entry in site.data.az400mod3 %}
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

[**Next (<small>_Module 04: Design and implement a release strategy_</small>) >**](Mod04)
