---
layout: page.njk
title: Everything we recommend
---

# {{ title }}




<ul class="listings">
	{%- for bathroom in collections.bathroom -%}
	  <li><a href="/bathroom/{{ bathroom.data.url }}">{{ bathroom.data.title }}</a>
	  	<p>{{bathroom.data.shortdesc}}</p></li>
	{%- endfor -%}
	{%- for kitchen in collections.kitchen -%}
	  <li><a href="/kitchen/{{ kitchen.data.url }}">{{ kitchen.data.title }}</a>
	  	<p>{{kitchen.data.shortdesc}}</p></li>
	{%- endfor -%}
	{%- for groceries in collections.groceries -%}
	  <li><a href="/groceries/{{ groceries.data.url }}">{{ groceries.data.title }}</a>
	  	<p>{{groceries.data.shortdesc}}</p></li>
	{%- endfor -%}
</ul>
