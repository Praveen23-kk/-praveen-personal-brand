# One working feature: contact form

I chose one feature for this portfolio: a contact form. It gives a visitor a direct way to send me a message without needing their own email app.

A backend is the part of a website that does work behind the scenes. The pages, colours, and buttons are the front end; the backend receives the submitted details and stores or processes them. I did not build and maintain my own server for this portfolio. Instead, I use Netlify Forms, which is included on Netlify’s free tier.

When someone fills in the form and selects **Send message**, their browser sends their name, email address, and message over HTTPS to Netlify. Netlify checks a hidden field that helps catch bots. Real submissions are saved under the portfolio site's Forms dashboard in Netlify. I can open that dashboard, read the message, and reply to the sender’s email address. After the form is accepted, the visitor sees the portfolio’s thank-you page.
