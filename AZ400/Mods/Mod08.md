---
layout: page
title:  "Implement continuous feedback"
---

This learning path introduces the continuous feedback concept and describes how to implement it in your DevOps cycle.

{% for entry in site.data.az400mod8 %}
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

[**Next (<small>_Module 09: Implement security and validate code bases for compliance_</small>) >**](Mod09)
