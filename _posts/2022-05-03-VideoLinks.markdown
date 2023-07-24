---
layout: post
title:  'AZ400 Videos'
name: 'AZ400_Vids'
---

# Videos

{% for p in site.data.az400vids %}1. <input type="checkbox" class='box' id='{{page.name}}-p{{forloop.index}}' /> [{{p.title}}]({{p.url}}){:target="_blank"}
{% for c in p.children %}   1. <input type="checkbox" class='box' id='{{page.name}}-p{{forloop.parentloop.index}}-c{{forloop.index}}' /> [{{c.title}}]({{c.url}}){:target="_blank"}
{% endfor %}{% endfor %}
