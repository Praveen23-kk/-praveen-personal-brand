# Plan to Keep Building

## 1. How to Add the Next Case Study (<30 mins)

*This AI workspace preserves your identity kit, layout style, and code stack. Keep returning here to update your portfolio cheaply.*

1. **Write the Three-Beat Story (10 mins)**
   - **Problem:** State the business or technical friction clearly.
   - **What I did:** Name your exact technical intervention.
   - **What came of it:** State the measurable result or working artifact.
2. **Gather Evidence (5 mins)**
   - Secure 1-2 screenshots, a GitHub repo link, or a live demo URL. (Proof over claims).
3. **Duplicate the Native Layout in `index.html` (10 mins)**
   - Copy the existing `<section class="capstone wrap reveal" id="capstone">` block.
   - Change the ID to something like `id="project-agent"`.
   - Paste your three-beat text into the `<h2>`, `<p class="lead">`, and standard `<p>` nodes.
   - Update the quick-facts `<aside>` with your results and tech stack.
4. **Update Navigation (5 mins)**
   - Add `<a href="#project-agent">Profile Agent</a>` to the `<nav>` block inside `<header>`.
   - Run `git add .`, `git commit -m "feat: add new case study"`, and `git push`.

---

## 2. The Next Named Piece of Work

**Project Name:** Interactive AI Profile Agent (Week 10 / Capstone Extension)

**The Frame (Three-Beat Setup):**
- **Problem:** Standard LLMs hallucinate professional facts, meaning visitors couldn't reliably query my background without risking fabricated data.
- **What I did:** Built a deterministic, serverless AI chat agent (`api/chat.js`) using JavaScript and Netlify Functions, backed by a Supabase database for query logging.
- **What came of it:** A live, strictly-constrained portfolio assistant that answers recruiter questions instantly while providing analytics on what skills are searched most often.

---

## 3. The Reminder

A reminder has been scheduled in this Antigravity workspace to notify you to add the AI Profile Agent case study once it's complete!
