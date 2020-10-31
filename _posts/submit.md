---
layout: page.njk
title: Submit a product to Less Mess
---
## {{ title }}
<p>Found an amazing product?  We'd love to hear from you.</p>
<p>Remember, we look for products that are:</p>
<ul>
	<li>Plastic-free - they should leave no plastic for the consumer to recycle</li>
	<li>Zero-waste - or as close as possible. Compostable products are OK, as well as paper and cardboard recycling.</li>
</ul>
<p>We'll carefully review your submission and if it looks like it's Less Mess, we'll post it to the site. If you leave your email, we'll let you know, too (and we won't send you any other junk mail).</p>

<form name="submission" method="POST" data-netlify="true">
  <p>
    <label>Your email <input type="email" name="email" /></label>
  </p>
  <p>
    <label>What are you recommending? <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


