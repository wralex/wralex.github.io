---
layout: page
title:  "Design and implement a release strategy"
---

This learning path explains the concepts of continuous delivery and releases strategy considerations for setting up deployment stages and your delivery and deployment cadence, and lastly, setting up your release approvals.

{% for entry in site.data.az400mod4 %}
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
<https://learn.microsoft.com/en-us/training/paths/az-400-design-implement-release-strategy/></small>
