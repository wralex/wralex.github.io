---
layout: container
title: 'Develop event-based solutions'
link: 'https://learn.microsoft.com/training/paths/az-204-develop-event-based-solutions/'
preId: 'az204-event'
---
[_Back_](.)

{{ site.data.ms.az204.event.description }}

<!-- {% assign counter = 0 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
{% for mod in site.data.ms.az204.event.modules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=mod.title link=mod.link %}{: .fs-3 }
<span class="ms-4">{{ mod.description }}</span>
{% for sub in mod.submodules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=sub.title link=sub.link %}{: .ms-4 }{% endfor %}
{% endfor %}

[_Back_](.)