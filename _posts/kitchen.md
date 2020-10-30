---
layout: page.njk
tags: category
url: kitchen
title: Kitchen and Laundry
---


# {{ title }}
<p>Cooking and cleaning creates a lot of mess, and a lot of it becomes trash. There's plenty of home-made alternatives to cleaning products you're already using, but if you neither have the time nor interest in making your own, then we've found products offering a good clean without the compromise.</p>
<ul>
{%- for kitchen in collections.kitchen -%}
  <li><a href="{{ kitchen.data.url }}">{{ kitchen.data.title }}</a>
  	<p>{{kitchen.data.shortdesc}}</p></li>
{%- endfor -%}
</ul>
