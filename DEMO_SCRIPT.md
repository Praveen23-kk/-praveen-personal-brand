# Demo Script

Demo video: TODO - upload 3-5 minute live demo URL

## 0:00-0:30 - Introduce the project

Hi, I am K Praveen Kumar. This is my personal portfolio website, built as my professional home base for the AI Fluency Track final submission.

The site is for recruiters, mentors, and collaborators who need a fast and trustworthy way to understand who I am, what I am learning, and how to contact me. The problem I wanted to solve is that my proof of work is usually spread across LinkedIn, GitHub, a resume, and class deliverables. This portfolio brings those signals into one clean place.

## 0:30-1:30 - Show the real application and main workflow

I am opening the live site at `https://k-praveenkumar.netlify.app`.

At the top, the site introduces my positioning: ML Engineer Intern at FlyRank AI, building ML systems and computer-vision data pipelines, while studying BTech Artificial Intelligence at Marwadi University.

I will scroll through the page. The About section explains my current direction in AI and practical ML. The Experience section shows FlyRank AI, PIVAGA, and Airports Authority of India without making the page too crowded. The Capabilities section highlights skills such as KPI dashboards, Power BI, Excel, machine learning, computer vision, AWS, and Azure AI.

Now I will open the contact page from the Email card. This is the one dynamic feature I chose for the portfolio. I will enter a realistic test message with my name, email, and a short message, then submit it. On the live Netlify site, that submission is sent to Netlify Forms, where I can read it in the dashboard and reply.

## 1:30-2:30 - Explain one design decision

One important design decision was to keep the site lightweight and static instead of rebuilding it with a heavy framework.

I chose plain HTML, CSS, and small JavaScript files because this project is meant to be understandable and explainable. The homepage uses semantic sections, local image assets, smooth scrolling, and small reveal animations. The contact form uses normal browser validation plus a small `contact.js` file that checks for very short messages and disables the button after submit.

You can see that decision in the project structure: the main files are `index.html`, `contact.html`, `styles.css`, `audit.css`, `app.js`, and `contact.js`. There is no complicated build pipeline required to understand the site.

## 2:30-3:30 - Perform another realistic example

For a second realistic example, I will show how an evaluator can find the final submission evidence.

From the Capstone / Featured Project section, the evaluator can see what I built, what the live feature does, what I learned, and where the limitations are. The repository also includes documentation files such as the README, evaluation notes, retrospective, demo checklist, and build-in-public post draft.

The expected result is that someone can understand the project within about one minute, and then check the important evidence within five minutes.

## 3:30-4:30 - Explain one real limitation and future improvement

A real limitation is that the portfolio does not yet contain complete V1/V2 evaluation numbers. I have mobile audit notes, hardening review notes, and feature explanations, but I do not have a complete evaluation dataset with V1 results, V2 results, and a scoring rubric.

That limitation is documented honestly in `docs/EVALUATION.md`. I did not invent numbers because that would make the submission less trustworthy.

In a future version, I would add a small evaluation table with defined criteria such as mobile usability, form reliability, link health, accessibility checks, and speed. I would run the same checks before and after each improvement, record the evidence, and then publish the results in the Capstone section.

## Closing

That is the project: a clean personal portfolio, one real working contact feature, and a final submission package that makes the evidence easy to inspect. The next manual steps are to add the real demo video URL, fill in the hours log with actual work sessions, publish the build-in-public post, and add complete V1/V2 evaluation evidence when available.
