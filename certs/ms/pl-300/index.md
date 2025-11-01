---
layout: container
title: |
    Microsoft Certified: Power BI Data Analyst Associate <em>(PL-300)</em>
link: https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/
---

{{ site.data.ms.pl300.index.description }}

<div class="row p-1 py-4">
  <div class="col-4 px-1" markdown="1">

### Jump to
  </div>
  <div class="col-8 bg-warning-subtle px-1" markdown="1">

### At a glance
  </div>
  <div class="col-4">{% for j in site.data.ms.pl300.index.jumpTos %}
    <a href='{{j.link}}' class="list-group-item btn btn-outline-secondary text-start ps-4 rounded">{{j.title}}</a>{% endfor %}
  </div>
  <div class="col-4 bg-warning-subtle px-5">
    <div class="vstack">
      <div class="fw-bold">Level</div>
      <div class="ps-2">{{ site.data.ms.pl300.index.level }}</div>
      <div class="fw-bold">Role</div>
      <div class="ps-2">{{ site.data.ms.pl300.index.role }}</div>
      <div class="fw-bold">Renewal Frequency</div>
      <div class="ps-2">{{ site.data.ms.pl300.index.renewalFrequency }}</div>
    </div>
  </div>
  <div class="col-4 bg-warning-subtle px-5">
    <div class="vstack">
      <div class="fw-bold">Product</div>
      <div class="ps-2">{{ site.data.ms.pl300.index.product }}</div>
      <div class="fw-bold">Subject</div>
      <div class="ps-2">{{ site.data.ms.pl300.index.subject }}</div>
    </div>
  </div>
</div>

### Modules

<div class="list-group pb-3">{% for m in site.data.ms.pl300.index.modules %}
  <label class="list-group-item d-flex gap-3 fs-4">
    {% include checks.html id=m.id style="font-size: 1.375em;" class="flex-shrink-0" %}
    <img class="img-fluid" src="{{ m.image }}" style="width:40px; height: auto;" />
    <a href="{{ m.link }}" class="pt-1 form-checked-content fw-bolder">{{ m.title }}</a>
  </label>{% endfor %}
</div>
