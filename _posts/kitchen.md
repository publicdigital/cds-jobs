---
layout: page.njk
tags: category
url: kitchen
title: kitchen stuff
---


# {{ title }}
<p>From files:</p>
<ul>
{%- for kitchen in collections.kitchen -%}
  <li><a href="{{ kitchen.data.url }}">{{ kitchen.data.title }}</a>
  	<p>{{kitchen.data.shortdesc}}</p></li>
{%- endfor -%}
</ul>
