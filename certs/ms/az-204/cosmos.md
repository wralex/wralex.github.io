---
layout: container
title: 'Develop solutions that use Azure Cosmos DB'
link: 'https://learn.microsoft.com/training/paths/az-204-develop-solutions-that-use-azure-cosmos-db/'
preId: 'az204-cosmos'
---
[_Back_](.)

{{ site.data.ms.az204.cosmos.description }}

<!-- {% assign counter = 0 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
{% for mod in site.data.ms.az204.cosmos.modules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=mod.title link=mod.link %}{: .fs-3 }
<span class="ms-4">{{ mod.description }}</span>
{% for sub in mod.submodules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=sub.title link=sub.link %}{: .ms-4 }{% endfor %}
{% endfor %}

[_Back_](.)