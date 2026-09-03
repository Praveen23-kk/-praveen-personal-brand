# Mobile audit fix log

## Scope and method

I checked the home page and contact form at simulated phone (390 x 844), tablet (768 x 1024), and desktop (1440 x 900) sizes. I also checked that every page asset loaded, keyboard focus is visible, form controls have clear labels, and the contact form still works. This was browser/device-size testing, not a physical-phone test; a final check on a real phone is still recommended.

## Fixes made

| Before | After |
| --- | --- |
| Sections used a default `opacity: 0` reveal state. If JavaScript did not run, important content could stay hidden. | Reveal hiding now only applies after JavaScript marks the page as ready. With JavaScript or reduced motion disabled, all content remains visible. |
| The resume logo was selected by a broad script selector, so it appeared in the header instead of the CV card. The removed Portfolio card also depended on JavaScript. | Link cards and logos now live in the page HTML. The Portfolio card is gone even if JavaScript is off, and the CV icon is correctly attached to the CV card. |
| Keyboard focus did not have a site-wide visible indicator. | Added a high-contrast `:focus-visible` outline. |
| The monogram and footer link were smaller than the recommended 44px phone touch target. | Both now have a 44px minimum tap area. The main action already meets that size. |
| The unused Booking placeholder looked like a live link but led nowhere. | It is hidden until a real booking URL is available. The remaining visible links lead to real destinations. |
| Mobile content needed validation for horizontal spilling, hidden sections, and missing images. | At 390px, 768px, and 1440px: no horizontal overflow, no hidden revealed sections after scroll, and no missing images were found. |

## Readability and performance checks

- Body copy is 14–16px with approximately 1.55–1.65 line height; headings use responsive `clamp()` sizing.
- The dark background, off-white text, muted text, and teal accent have strong contrast. The teal accent is used for labels and focus, not long paragraphs.
- Portfolio images are local PNGs and small: the largest is the LinkedIn logo at roughly 119 KB; all others are smaller. There are no large work captures or oversized photography assets.
- Reduced-motion preference disables the ambient animation and reveals content immediately.

## Evidence

- `audit-before-mobile.png` records the phone-sized capture before the reliability changes.
- `audit-after-mobile.png` records the phone-sized capture after the changes, including all sections and working link cards.
- Direct checks returned HTTP 200 for the portfolio, contact page, thank-you page, GitHub profile, and resume link. LinkedIn returned its automated-request block (HTTP 999) in this audit environment, so it still needs one human browser click as part of the final phone check.
- A final real-phone check remains the one manual step: open the live URL on your own phone, tap the CV, LinkedIn, GitHub, Email/contact, and back-to-top controls, then submit a test message.
