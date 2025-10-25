---
title: Implement security and validate code bases for compliance
link: https://learn.microsoft.com/en-us/training/paths/az-400-implement-security-validate-code-bases-compliance/
layout: container
preIds: az-400-compliance
---
[_Back_](.)

{{ site.data.ms.az400.compliance.description }}

<!-- {% assign counter = 0 %} {% assign result = page.preIds | append: "-" | append: counter %} -->
{% for mod in site.data.ms.az400.compliance.modules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=mod.title link=mod.link %}{: .fs-3 }
<span class="ms-4">{{ mod.description }}</span>
{% for sub in mod.submodules %}<!-- {% assign counter = counter | plus: 1 %}{% assign result = page.preIds | append: "-" | append: counter %} -->
{% include checkLine.html id=result title=sub.title link=sub.link %}{: .ms-4 }{% endfor %}
{% endfor %}

[_Back_](.)