---
layout: post
title:  "AZ400 Videos"
date:   2022-05-03 18:41:04 -0400
categories: Bill Alexander Web Site
---

# Videos

{% for p in site.data.az400vids %}1. <input type="checkbox" /> [{{p.title}}]({{p.url}}){:target="_blank"}
{% for c in p.children %}   1. <input type="checkbox" /> [{{c.title}}](c.url){:target="_blank"}
{% endfor %}{% endfor %}
