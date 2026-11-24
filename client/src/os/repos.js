const gh = (r) => `https://github.com/faizantanwar16/${r}`;

export const featured = [
  { title: 'AI Resume Coach', tagline: 'Claude-powered career platform',
    desc: 'Generates resumes from a job description, scores your match, finds gaps and rewrites bullet points. JWT auth, resume versions and an application tracker.',
    tags: ['React', 'TypeScript', 'Node', 'MongoDB', 'Claude API'], github: gh('ai-resume-coach'), live: 'https://ai-resume-coach.vercel.app' },
  { title: 'National Weather Big Data', tagline: 'Crowd-sourced weather intelligence for India',
    desc: 'Collects reports from Bluesky, Mastodon, weather APIs and citizens, then classifies, geotags, deduplicates and trust-scores them with Spark and ML. Verified events show on a live map.',
    tags: ['TypeScript', 'Python', 'Spark', 'ML', 'SSE'], github: gh('-national-weather-bigdata') },
  { title: 'HeartGuard', tagline: 'AI heart disease risk predictor',
    desc: 'Three independent services: React app, Node API and a Flask ML service. Logistic regression on 319,795 CDC records with 90%+ accuracy and an animated risk gauge.',
    tags: ['MERN', 'Flask', 'scikit-learn', 'Recharts'], github: gh('heart-disease-prediction-') },
  { title: 'FinanceIQ', tagline: 'Smart budget planner',
    desc: 'Personal finance app with Zustand, TanStack Query and Recharts. MongoDB aggregations for monthly summaries, category breakdowns and 12-month trends, plus CSV export.',
    tags: ['React', 'Zustand', 'TanStack Query', 'Tailwind', 'MongoDB'], github: gh('financeiq-smart-budget-planner'), live: 'https://financeiq.vercel.app' },
  { title: 'Smart Habit Tracker', tagline: 'Habit and streak dashboard',
    desc: 'JWT login, daily check-offs, streak counters and a completion-rate dashboard, deployed on Vercel and Render.',
    tags: ['React', 'Node', 'MongoDB', 'JWT'], github: gh('smart-habit-tracker') },
];

export const lab = [
  { title: 'College RAG Assistant', desc: 'Answers questions from college PDFs with page citations, and refuses when the answer is not in the documents. Runs fully local.', tags: ['Python', 'AI'], github: gh('college-rag-asssistant') },
  { title: 'Student Task Manager (IaC)', desc: 'Serverless task app deployed entirely with Terraform on Cloudflare Workers and KV, with a CI/CD pipeline.', tags: ['JavaScript', 'DevOps'], github: gh('student-task-manager-iac') },
  { title: 'Student Management System', desc: 'Three-tier cloud app: Netlify frontend, Render API, MongoDB Atlas, with full CRUD and search.', tags: ['JavaScript', 'DevOps'], github: gh('student-management-system-three-tier') },
  { title: 'This portfolio', desc: 'The site you are looking at, built as a desktop you can drag around.', tags: ['JavaScript'], github: gh('portfolio') },
];
