# V1/V2 Evaluation

## What was evaluated

The repository contains evidence around the personal portfolio website, especially:

- Mobile responsiveness and link-card behavior
- Contact form validation and submission flow
- SEO/social metadata presence
- Basic launch hygiene such as favicon, HTTPS, and footer badge status
- The dynamic feature: a Netlify Forms contact form

## Existing evidence found in the repository

- `MOBILE-AUDIT-FIX-LOG.md`: simulated phone/tablet/desktop audit and fixes
- `HARDENING-REVIEW.md`: negative testing and known limitations
- `FEATURE-EXPLAINER.md`: plain-language backend/contact-form explanation
- `DNS-WALKTHROUGH.md`: DNS explanation deliverable
- `LAUNCH-STATUS-REPORT.html` and `LAUNCH-STATUS-REPORT.pdf`: launch readiness status with screenshot
- `contact.html` and `contact.js`: actual form implementation and validation behavior
- `netlify.toml`: Netlify publish settings and basic security headers

## Evaluation methodology used so far

The evidence so far is a qualitative product-hardening audit, not a full quantitative V1/V2 evaluation. The checks included:

- Open homepage and contact page at simulated mobile, tablet, and desktop widths
- Check for horizontal overflow, missing images, hidden content, and touch target issues
- Submit contact form with empty, invalid, short, and valid inputs
- Confirm title, description, canonical, Open Graph, Twitter card metadata, and favicon are present locally
- Check key links where automated checks were possible
- Document known limitations instead of hiding them

## V1 results

Evidence exists for pre-fix issues from the mobile audit and hardening review:

- Reveal sections could stay hidden if JavaScript did not run.
- Some phone touch targets were smaller than recommended.
- The unused booking placeholder looked like a live link.
- The form needed stronger client-side validation for short/low-quality input.
- The form submit button did not initially prevent fast duplicate submissions.
- Search/social metadata was incomplete before the hardening pass.

The repository does not contain numeric V1 scores.

## V2 results

Evidence exists for post-fix outcomes:

- Reveal behavior was adjusted so content remains available when JavaScript is unavailable or reduced motion is preferred.
- The monogram/footer links received larger phone tap areas.
- The booking placeholder is hidden until a real URL exists.
- Contact form fields use required validation, `type="email"`, min/max lengths, and client-side trim checks.
- Valid submit disables the button and updates status text to reduce duplicate submissions.
- Homepage metadata now includes title, description, canonical URL, Open Graph tags, Twitter card tags, and favicon placeholder.
- Local simulated viewport checks found no horizontal overflow, hidden revealed sections, or missing images.

The repository does not contain numeric V2 scores.

## What changed between V1 and V2

- Link logos and important cards were moved into static HTML instead of relying on JavaScript injection.
- Mobile tap targets and focus-visible styles were improved.
- The Booking placeholder was hidden because it did not yet have a real URL.
- Contact-form validation became stricter and clearer.
- SEO/social metadata was added.
- Limitations were documented in `HARDENING-REVIEW.md` and launch status was separated from unverified claims.

## What improved

- Mobile reliability
- Accessibility basics such as focus visibility and usable tap targets
- Form resilience against empty, invalid, or very short submissions
- Duplicate-submit behavior
- Findability metadata
- Reviewer navigation and documentation completeness

## What did not improve or remains incomplete

- Complete V1/V2 numerical evaluation is not present.
- Physical-phone testing still needs to be performed and recorded by Praveen.
- Independent mentor/peer hardening review still needs evidence.
- Analytics is not installed in the current repository evidence.
- The FlyRank badge needs a real personal verification link or credential ID.
- Search indexing cannot be proven just because metadata exists.

## V2 Evaluation - TODO

To complete this requirement without fabricating results, Praveen needs to provide or create:

- The exact V1 baseline date or version.
- The exact V2 date or version.
- A small evaluation rubric, such as mobile layout, link health, form validation, duplicate submit behavior, accessibility basics, SEO metadata, and speed.
- Evidence for each criterion before and after, such as screenshots, browser test output, Netlify Forms proof, or PageSpeed/Lighthouse reports.
- Any numeric results only if they come from a real tool or reproducible checklist.
- A short note explaining what changed between V1 and V2.

Suggested simple rubric:

| Criterion | V1 evidence | V1 result | V2 evidence | V2 result | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile layout at 390px | TODO | TODO | TODO | TODO | Use screenshot and overflow check |
| Contact form empty submit | TODO | TODO | TODO | TODO | Browser validation evidence |
| Invalid email submit | TODO | TODO | TODO | TODO | Browser validation evidence |
| Duplicate submit | TODO | TODO | TODO | TODO | Button disabled after valid submit |
| Link health | TODO | TODO | TODO | TODO | Manual LinkedIn check required |
| SEO metadata | TODO | TODO | TODO | TODO | Inspect page head |
| Speed check | TODO | TODO | TODO | TODO | Lighthouse/PageSpeed |

Do not fill this table with estimates. Use only real test evidence.
