---
layout: page.njk
title: Welcome to Less Mess
---
## {{ title }}
<p>It's easy to say "just use less" or "go green", but the truth is that we're all busy people who don't have the time to research and compare each individual item we need to purchase. At Less Mess, we're making it a little bit easier for you to make zero waste choices by gathering up companies offering zero waste by default and leave the consumer with no plastic.</p>
<p>This site doesn't take any fees or payment for recommendations, it's simply a list of products and services we know work well for normal people who just want to make less mess in the world.</p>

### What are you looking for?
<ul class="sections">
{%- for category in collections.category -%}
  <li><a href="{{ category.data.url }}">{{ category.data.title }}</a></li>
{%- endfor -%}
</ul>
