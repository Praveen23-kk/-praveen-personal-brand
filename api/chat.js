const profile = {
  role: "Machine Learning Engineer Intern at FlyRank AI",
  focus: "machine learning, computer-vision data pipelines, KPI dashboards, Power BI, and Excel",
  education: "BTech in Artificial Intelligence at Marwadi University, expected in 2027",
  experience: "At PIVAGA, he developed image and video annotation pipelines, optimized preprocessing workflows, and supported dataset curation and model evaluation. He also worked with the Airports Authority of India on network segmentation and server-room operations.",
  learning: "He is building depth across the AI stack: data preparation, model evaluation, cloud foundations, dashboards, and practical AI products.",
  contact: "praveennaaz23@gmail.com"
};

function answer(question) {
  const q = question.toLowerCase();
  if (q.includes("do") || q.includes("role") || q.includes("work")) return `Praveen is a ${profile.role}. His current focus is ${profile.focus}.`;
  if (q.includes("vision") || q.includes("pipeline") || q.includes("pivaga")) return profile.experience;
  if (q.includes("learn") || q.includes("next") || q.includes("stack")) return profile.learning;
  if (q.includes("study") || q.includes("education") || q.includes("college")) return `He is pursuing a ${profile.education}.`;
  if (q.includes("contact") || q.includes("email") || q.includes("reach")) return `The best way to reach Praveen is ${profile.contact}.`;
  if (q.includes("skill") || q.includes("power bi") || q.includes("excel")) return `His profile highlights ${profile.focus}, along with cloud and AI foundations.`;
  return "I can speak about Praveen’s role, computer-vision experience, education, skills, learning direction, or how to contact him.";
}

async function saveMessage(row) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;
  await fetch(`${url}/rest/v1/agent_messages`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(row)
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const question = String(req.body?.question || "").trim().slice(0, 500);
    if (!question) return res.status(400).json({ error: "Question is required" });
    const response = answer(question);
    await Promise.allSettled([
      saveMessage({ role: "user", content: question }),
      saveMessage({ role: "assistant", content: response })
    ]);
    return res.status(200).json({ answer: response });
  } catch (error) {
    return res.status(500).json({ error: "Agent unavailable" });
  }
}
