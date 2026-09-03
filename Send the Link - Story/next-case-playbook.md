# How to add the next case

## Next case to publish

**FlyRank AI ML Engineer Internship — first publishable ML system case study**

Publish this when you can describe one real piece of work without sharing confidential data. The story can focus on the problem, your contribution, the technical approach, and the outcome or learning.

## Where it goes

Add a new card in the **Selected Direction** section of `../index.html`, then add the full three-beat story directly below that section or link the card to a new page in this folder.

## The three beats

1. **Problem** — What was unclear, slow, error-prone, or difficult? Name the user or team affected.
2. **What I did** — Describe your contribution, stack, data/model work, and the key decision you made.
3. **What came of it** — State a metric if it is safe to share; otherwise use the honest result, what changed, or what you learned.

## Update steps

1. Copy `case-study-template.md` and fill the three beats in plain language.
2. Remove confidential names, data, metrics, and screenshots; get approval if the work is employer-owned.
3. Add a new project card in `../index.html` with a clear title, one-line summary, and link to the case.
4. Add the case URL to the portfolio’s work section and test it on mobile.
5. Update the Praveen AI profile facts in `../app.js` and `../api/chat.js` if the new case changes what the agent should say.
6. Deploy: run `npx vercel deploy --prod` from the project root.
7. Share the updated portfolio link with one recruiter, mentor, or collaborator.

## Definition of done

The case is live, readable in five minutes, uses the three beats, contains no confidential material, and the site’s agent can describe it accurately.
