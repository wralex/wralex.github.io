---
layout: default
title: Microsoft Certifications
---
| **Certification**                                                                                             | **Level**         | **Exam No.**      | **Description**           | **Exam Cost**             |  **Links**                                                                |
|---------------------------------------------------------------------------------------------------------------|:-----------------:|:-----------------:|---------------------------|--------------------------:|:-------------------------------------------------------------------------:|{% for cert in site.data.ms.certificates %}
| [<i class="bi bi-windows"></i>]({{ cert.msUrl }}){: .ps-1 }{% if cert.url > '' %}**[{{ cert.name }}]({{ cert.url }})**{% else %}**{{ cert.name }}**{% endif %}{: .ps-2} | {{ cert.level }}  | {{ cert.code }}   | {{ cert.description }}    | $ {{ cert.examCost }} | {% if cert.courseLink > '' %} [Course]({{ cert.courseLink }}) {% endif %} |{% endfor %}
{: .table .table-sm .table-striped .table-hover .table-bordered .w-75 }

<div class="container row row-cols-2 w-75">
    <div class="col-3 fw-bold border-bottom border-5 border-dark">
        Useful links
    </div>
    <div class="col-9 fw-bold border-bottom border-5 border-dark">
        Description
    </div>
    <div class="col-3 p-2 border-bottom d-flex align-items-center justify-content-center">
        <a role="button" class="btn btn-sm btn-outline-primary" href='https://learn.microsoft.com/en-us/credentials/certifications'>
            How to earn certification
        </a>
    </div>
    <div class="col-9 border-bottom d-flex align-items-center">
        <span>Some certifications only require passing one exam, while others require passing multiple exams.</span>
    </div>
    <div class="col-3 p-2 border-bottom d-flex align-items-center justify-content-center">
        <a role="button" class="btn btn-sm btn-outline-primary" href='https://learn.microsoft.com/en-us/users/me/activity/'>
            Your Learn profile
        </a>
    </div>
    <div class="col-9 border-bottom d-flex align-items-center">
        <span>Connecting your certification profile to Microsoft Learn allows you to schedule and renew exams and share and print certificates.</span>
    </div>
    <div class="col-3 p-2 border-bottom d-flex align-items-center justify-content-center">
        <a role="button" class="btn btn-sm btn-outline-primary" href='https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'>
            Exam scoring and reports
        </a>
    </div>
    <div class="col-9 border-bottom d-flex align-items-center">
        <span>A passing score is 700 or greater, out of 1000. <em>This is a scaled score, it may not equal 70%</em>.</span>
    </div>
</div>
