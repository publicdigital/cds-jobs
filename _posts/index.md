---
layout: page.njk
title: Welcome to Less Mess
---

<p class="intro">Find Zero Waste alternatives to products you buy every day.</p>
<form>
	<label>What are you looking for? 
		<input type="search" placeholder="Try searching for 'shampoo', 'toothpaste' or 'cleaning'" />
	</label>
</form>

<ul class="sections">
{%- for category in collections.category -%}
  <li><a href="{{ category.data.url }}">{{ category.data.title }}</a></li>
{%- endfor -%}
  <li><a href="/all">See everything</a></li>
</ul>

