---
layout: page
title:  "Implement a secure continuous deployment using Azure Pipelines"
---

This learning path helps you understand automated release gates, secrets, and secret management in your pipeline. You will learn how to implement alerting mechanisms, report on your quality, and get notified by using service hooks.

{% for entry in site.data.az400mod5 %}
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
<https://learn.microsoft.com/en-us/training/paths/az-400-implement-secure-continuous-deployment/></small>
