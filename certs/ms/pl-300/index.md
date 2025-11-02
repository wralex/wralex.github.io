---
layout: container
title: 'Microsoft Certified: Power BI Data Analyst Associate'
code: PL-300
---
_[Microsoft Certifications](..)_

{% assign data = site.data.ms.pl300.index %}{{ data.description }}

<div class="row mb-3">
  <div class="col-6 col-md-4 col-lg-3">
    <h3>Jump to</h3>
    <div class="list-group list-group-flush">{% for j in data.jumpTos %}
      <a href='{{j.link}}' markdown="1" class="list-group-item btn btn-outline-secondary btn-sm text-start ps-2 rounded">{{j.title}}</a>{% endfor %}
    </div>
  </div>
  <div class="col-6 col-md-8 col-lg-9">
    <h3>At a glance</h3>
    <div class="row row-cols-1 row-cols-md-2 bg-warning-subtle rounded m-1">
      {% if data.level %}<div class="col pb-3">
        <dt>Level</dt>
        <dd class="ps-2">{{ data.level }}</dd>
      </div>{% endif %}
      {% if data.product %}<div class="col pb-3">
        <dt>Product</dt>
        <dd class="ps-2">{{ data.product }}</dd>
      </div>{% endif %}
      {% if data.role %}<div class="col pb-3">
        <dt>Role</dt>
        <dd class="ps-2">{{ data.role }}</dd>
      </div>{% endif %}
      {% if data.subject %}<div class="col pb-3">
        <dt>Subject</dt>
        <dd class="ps-2">{{ data.subject }}</dd>
      </div>{% endif %}
      {% if data.renewalFrequency %}<div class="col pb-3">
        <dt>Renewal Frequency</dt>
        <dd class="ps-2">{{ data.renewalFrequency }}</dd>
      </div>{% endif %}
      {% if data.link %}<div class="col pb-3">
        <dt>MS Link</dt>
        <dd class="ps-2"><a href="{{ data.link }}">{{ data.title }}</a></dd>
      </div>{% endif %}
    </div>
  </div>
</div>

### Modules

<div class="pb-3">{% for m in data.modules %}
  {% include divCheck.html id=m.id title=m.title image=m.image link=m.link
  chkStyle="font-size: 1.375em;" divClass="fs-4 fw-bolder" imgStyle="width:40px; height: auto;" %}
{% endfor %}</div>
