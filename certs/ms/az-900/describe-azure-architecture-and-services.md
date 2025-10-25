---
layout: container
title: 'Introduction to Microsoft Azure: Describe Azure architecture and services'
preIds: az900-architecture-and-services
---
[_Parent_](.)

{{ site.data.ms.az900.architecture.description }}

<!-- {% assign counter = 0 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
{% for mod in site.data.ms.az900.architecture.modules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=mod.title link=mod.link %}{: .fs-3 }
<span class="ms-4">{{ mod.description }}</span>
{% for sub in mod.submodules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=sub.title link=sub.link %}{: .ms-4 }{% endfor %}
{% endfor %}
