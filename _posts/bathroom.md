---
layout: page.njk
tags: category
url: bathroom
title: bathroom stuff
---


# {{ title }}
<p>From files:</p>
<ul>
{%- for bathroom in collections.bathroom -%}
  <li><a href="{{ bathroom.data.url }}">{{ bathroom.data.title }}</a></li>
{%- endfor -%}
</ul>
