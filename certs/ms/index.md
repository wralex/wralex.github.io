---
layout: default
title: Microsoft Certifications
---
| **Certification**                                                                                             | **Level**         | **Exam No.**      | **Description**           | **Exam Cost**             |  **Links**                                                                |
|---------------------------------------------------------------------------------------------------------------|:-----------------:|:-----------------:|---------------------------|--------------------------:|:-------------------------------------------------------------------------:|{% for cert in site.data.ms.certificates %}
| [<i class="bi bi-microsoft"></i>]({{ cert.msUrl }}){: .ps-1 }{% if cert.url > '' %}**[{{ cert.name }}]({{ cert.url }})**{% else %}**{{ cert.name }}**{% endif %}{: .ps-2} | {{ cert.level }}  | {{ cert.code }}   | {{ cert.description }}    | $ {{ cert.examCost }}.00  | {% if cert.courseLink > '' %} [Course]({{ cert.courseLink }}) {% endif %} |{% endfor %}
{: .table .table-sm .table-striped .table-hover .table-bordered .w-75 }
