---
layout: post
title:  'AZ400 Videos'
name: 'AZ400_Vids'
date:   2022-05-03 18:41:04 -0400
categories: Bill Alexander Web Site
---

# Videos

{% for p in site.data.az400vids %}1. <input type="checkbox" class='box' id='{{page.name}}-p{{forloop.index}}' /> [{{p.title}}]({{p.url}}){:target="_blank"}
{% for c in p.children %}   1. <input type="checkbox" class='box' id='{{page.name}}-p{{forloop.parentloop.index}}-c{{forloop.index}}' /> [{{c.title}}]({{c.url}}){:target="_blank"}
{% endfor %}{% endfor %}
