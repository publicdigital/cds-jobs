---
layout: page.njk
tags: category
url: bathroom
title: "Bathroom and Beauty"
---


# {{ title }}

<p>A huge amount of plastic waste comes from our bathrooms - shampoo bottles, toothpaste tubes, lotions and potions. Fortunately, there's a huge variety of alternatives out there now that clean and soothe just as well as whatever you're already using.</p>
<ul class="listings">
{%- for bathroom in collections.bathroom -%}
  <li><a href="{{ bathroom.data.url }}">{{ bathroom.data.title }}</a>
  	<p>{{bathroom.data.shortdesc}}</p></li>
{%- endfor -%}
</ul>
