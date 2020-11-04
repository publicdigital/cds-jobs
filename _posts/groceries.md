---
layout: page.njk
tags: category
url: groceries
title: "Online Groceries"
---


# {{ title }}

<p>Grocery shopping is where we're picking up a lot of our plastic waste. When you're in the supermarket in person, you can of course try and make plastic-free choices for yourself (such as skipping the plastic bags for your fruit and veg) but when you're shopping online for food, it can be tricky to know what you're getting. We're hoping more online grocers go plastic-free and zero waste, but there aren't many doing it by default. We've found a few, though.</p>
<ul class="listings">
{%- for groceries in collections.groceries -%}
  <li><a href="{{ groceries.data.url }}">{{ groceries.data.title }}</a>
  	<p>{{groceries.data.shortdesc}}</p></li>
{%- endfor -%}
</ul>
