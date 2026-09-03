# Hardening review — where this portfolio breaks

## Review scope

This is a structured self-review of the portfolio home page and Netlify contact form. I tested phone, tablet, and desktop widths, negative form inputs, asset loading, internal links, and key external destinations. It is not a mentor review; a mentor or peer should still review this list before launch.

## Fix now — completed

| Finding | Test | Fix applied | Evidence |
| --- | --- | --- | --- |
| Empty form could be submitted only if browser validation was bypassed. | Clicked Send with empty fields. | Required fields plus length constraints are now present; native validation stops the request. | Form validity check returned `false` for empty input. |
| Garbage email input could reach the normal submit path in weak clients. | Entered an invalid email address. | `type="email"`, `required`, and a 254-character limit keep malformed addresses out in modern browsers. | Form validity check returned `false` for an invalid email. |
| Whitespace or very short messages were not meaningful. | Entered a one-character name and short/whitespace message. | Client-side trim validation requires a 2-character name and 10-character message. | The inline live status describes what needs correction. |
| Fast repeated clicks could create duplicate form messages. | Reviewed the submit path and simulated valid submit state. | Button disables and changes to “Sending…” immediately after valid submission. | Valid submit test set `disabled=true` and announced “Sending your message securely…”. |
| Search and social previews had only title/description. | Inspected page head. | Added canonical URL, Open Graph title/description/type/site name, and X/Twitter card metadata. | Present in `index.html`. |
| Important content or link cards depended on JavaScript. | Tested JavaScript/reveal behavior at phone, tablet, desktop widths. | Logos and link cards moved to static HTML; reveals only hide after JavaScript starts. | No hidden revealed sections found after scroll; content remains available without JS. |

## Known limitations — named, not hidden

| Limitation | Why it remains | Next action |
| --- | --- | --- |
| Server-side Netlify Forms limits are basic. A malicious client can bypass browser validation. | Free static-form service has no custom server validation in this project. | Keep honeypot enabled; add a serverless function and rate limiting if spam becomes a real problem. |
| The site is not yet indexed simply because metadata was added. | Search engines choose when to crawl/index. | Add the production URL to Google Search Console after production deploy. |
| LinkedIn returned HTTP 999 to automated link checking. | LinkedIn blocks bot-style requests. | Manually open the public profile in a normal browser/real phone before launch. |
| The final physical-phone test and independent mentor/peer review are outstanding. | This review used browser simulations, not a physical device or external reviewer. | Test on a real phone and have a mentor/peer review this document. |
| The hardening changes are local until Netlify deploy access is restored. | Current session cannot publish to Netlify. | Deploy, then repeat the live form and PageSpeed checks. |

## Findability and speed

- Homepage title and description are present.
- Canonical, Open Graph, and X/Twitter metadata are present.
- Google PageSpeed Insights was requested against the current production URL, but its free endpoint responded with HTTP 429 (rate limited). Re-run it after deploying this hardening update so the score reflects the new metadata and form script.

## Review hand-off

Share this file and the live portfolio with a mentor or peer. Ask them: “Try to break the contact form, check the site on your phone, and list only must-fix launch blockers.” Record their feedback here before declaring the review complete.
