---
layout: page.njk
title: this is the index.md from _posts
---
# {{ title }}
<ul>
{%- for category in collections.category -%}
  <li><a href="{{ category.data.url }}">{{ category.data.title }}</a></li>
{%- endfor -%}
</ul>
