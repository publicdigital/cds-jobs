---
layout: page.njk
title: Welcome to Less Mess
---

<p class="intro">Find Zero Waste alternatives to products you buy every day.</p>


<ul class="sections">
{%- for category in collections.category -%}
  <li><a href="{{ category.data.url }}">{{ category.data.title }}  🠮</a></li>
{%- endfor -%}
</ul>

