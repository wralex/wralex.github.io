<!--Generatre TOC-->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
   <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Table of Contents</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body" markdown="1">
{% for parent in site.data.books.ArDev1.contents %}
{: .no-bullets .py-0 .my-0 .ps-0}
- <span class="py-0 my-0">{% if parent.module %}{{parent.module}}. {% endif %}[**{{parent.title}}**]</span>{% if parent.children %}
  {% for child in parent.children %}
  {: .no-bullets .py-0 .my-0 .ps-2}
  - <span class="py-0 my-0">{% if child.lesson %}{{child.lesson}}. {% endif %}[{{child.title}}]</span>
  {% endfor %}{% endif %}
{% endfor %}
</div>
</div>
