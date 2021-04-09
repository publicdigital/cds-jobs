---
layout: page.njk
title: Everything
---

# {{ title }}




<ul class="listings">
	{%- for roles in collections.roles -%}
	  <li><a href="/roles/{{ roles.data.url }}">{{ roles.data.title }}</a>
	  	<p>{{roles.data.shortdesc}}</p></li>
	{%- endfor -%}
</ul>
