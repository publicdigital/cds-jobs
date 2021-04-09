---
layout: page.njk
title: Canada Digital Service Jobs
---

<p class="intro">Intro</p>


<ul class="sections">
{%- for category in collections.category -%}
  <li><a href="{{ category.data.url }}">{{ category.data.title }}</a></li>
{%- endfor -%}
  <li><a href="/all">See everything</a></li>
</ul>

