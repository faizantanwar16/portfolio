export const profile = {
  name: 'Faizan Tanwar',
  role: 'Full Stack Developer — MERN Stack',
  pitch:
    'B.Tech Computer Engineering student shipping production-grade full-stack apps — REST APIs, JWT auth, and AI/ML microservices, end to end.',
  location: 'Wardha, Maharashtra, India',
  github: 'https://github.com/faizantanwar16',
  linkedin: 'https://linkedin.com/in/faizan-tanwar',
  email: 'faizantanwar1611@gmail.com',
  phone: '+91 84210 83326',
  badge: {
    title: 'SIH 2025 National Finalist',
    detail: 'Hardware Edition · Kottayam, Kerala',
  },
}

export const stats = [
  { value: '4', label: 'production apps shipped' },
  { value: '90%+', label: 'ML model accuracy' },
  { value: '319K+', label: 'records in training dataset' },
  { value: '784+', label: 'LinkedIn network' },
]

export const bootSequence = [
  { cmd: 'whoami', out: 'faizan_tanwar — full stack developer (MERN)' },
  { cmd: 'cat status.txt', out: 'targeting SWE internships @ product companies' },
  { cmd: 'npm run faizan --portfolio', out: 'booting interface…' },
]

export const projects = [
  {
    id: 'ai-resume-coach',
    name: 'AI Resume Coach',
    tagline: 'Claude-powered career platform — JD-aware, not templated',
    stack: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Claude API', 'JWT'],
    problem:
      'Generic resume builders produce generic resumes — they don\u2019t read the job description, so every application looks the same.',
    approach:
      'Full TypeScript MERN stack integrating the Anthropic Claude API: JD-based resume generation, job match scoring, gap analysis, and bullet-point rewriting, plus multiple resume version management and an application tracker dashboard.',
    challenge:
      'Built a structured prompt-engineering layer so Claude\u2019s output comes back as parseable, ATS-optimized data (match scores, gap lists) instead of free-text — and added one-click PDF export on top of it.',
    outcome:
      'Live full-stack platform with JD-tailored resume generation as the flagship feature, deployed on Vercel & Render.',
    links: {
      github: 'https://github.com/faizantanwar16/ai-resume-coach',
      live: 'https://ai-resume-coach.vercel.app',
    },
    status: 'Deployed · 2026',
  },
  {
    id: 'heartguard',
    name: 'HeartGuard',
    tagline: 'Three-tier ML system predicting heart disease risk',
    stack: ['React', 'Node.js', 'Express.js', 'Python', 'Flask', 'scikit-learn', 'Recharts', 'JWT', 'bcrypt'],
    problem: 'Needed a system combining a real ML model with production-style, independently-deployable service architecture.',
    approach:
      'Three-tier microservices design — React SPA, Node.js REST API, and a separate Python/Flask ML service, each independently deployable. Logistic Regression trained on the CDC BRFSS 2020 dataset (319,795 records, 17 features), with results rendered as an animated SVG risk gauge (green/amber/red).',
    challenge:
      'Keeping the Node API layer and the Python ML service cleanly decoupled so each tier could be built, tested, and deployed independently — plus building personal vitals logging with Recharts trend charts and a chronological prediction history tracker on top of the core model.',
    outcome: '90%+ prediction accuracy on 319,795 real health records, with JWT auth, bcrypt hashing, and a full prediction-history feature set. Recognised by engineering faculty at Bajaj Institute of Technology.',
    links: {
      github: 'https://github.com/faizantanwar16/heart-disease-prediction-',
    },
    status: 'Jan – Apr 2026',
  },
  {
    id: 'financeiq',
    name: 'FinanceIQ — Smart Budget Planner',
    tagline: 'Personal finance SPA with real-time analytics',
    stack: ['React', 'Vite', 'Zustand', 'TanStack Query', 'Recharts', 'Tailwind CSS v4', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    problem:
      'Most budget trackers are spreadsheets with a UI on top — no real insight into spending patterns until it\u2019s too late.',
    approach:
      'Personal finance SPA with Zustand for global state, TanStack Query for data fetching, and interactive Recharts (pie, bar, line) for real-time financial insight. MongoDB aggregation pipelines power monthly summaries, category breakdowns, and 12-month trend analysis, with CSV export and multi-parameter filtering.',
    challenge:
      'Resolved complex Tailwind CSS v4 compatibility issues mid-build — migrating from v3\u2019s JS config to v4\u2019s CSS-based token system — while following a professional GitHub workflow: feature branching, conventional commits, PR-based merges.',
    outcome:
      'Live budget planner with real-time dashboards, CSV export, and a full production-style Git workflow, deployed on Vercel & Render.',
    links: {
      github: 'https://github.com/faizantanwar16/financeiq-smart-budget-planner',
      live: 'https://financeiq.vercel.app',
    },
    status: 'Deployed · 2026',
  },
  {
    id: 'smart-habit-tracker',
    name: 'Smart Habit Tracker',
    tagline: 'Full-stack habit tracking, deployed end to end',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    problem: 'Wanted a real deployed full-stack app proving shipping ability end to end, not just local demos.',
    approach:
      'Full-stack tracker with JWT auth, daily check-off, streak counters, and a completion-rate analytics dashboard.',
    challenge:
      'Keeping streak calculations correct across timezone and day-boundary edge cases so a late-night check-in doesn\u2019t silently break the streak count.',
    outcome: 'Fully deployed end to end on Vercel & Render, with working auth, streaks, and analytics.',
    links: {
      github: 'https://github.com/faizantanwar16/smart-habit-tracker',
      live: 'https://smart-habit-tracker-three-roan.vercel.app',
      api: 'https://smart-habit-tracker-1.onrender.com',
    },
    status: 'Deployed · 2025',
  },
]

export const achievements = [
  {
    title: 'SIH 2025 National Finalist',
    detail: 'Top team at Smart India Hackathon 2025 — Hardware Edition, Kottayam, Kerala. Competed among thousands of teams in a 36-hour sprint.',
  },
  {
    title: '4 Production Apps Shipped',
    detail: 'Built and deployed 4 complete full-stack applications — AI-powered tools, ML-integrated apps, and finance platforms — all live on Vercel & Render.',
  },
  {
    title: 'AI/ML in Production',
    detail: 'Integrated the Claude API (Anthropic) and a Logistic Regression model (319K records, 90%+ accuracy) into live web applications.',
  },
  {
    title: 'Three-Tier Microservices',
    detail: 'Designed a React + Node.js + Flask ML architecture for HeartGuard, recognised by engineering faculty at Bajaj Institute of Technology.',
  },
]

export const education = {
  degree: 'B.Tech in Computer Engineering',
  school: 'Bajaj Institute of Technology, Wardha',
  period: '2023 – 2027 (Expected)',
  cgpa: '7.0 CGPA',
  coursework: ['DSA', 'OOP (Java)', 'DBMS', 'Computer Networks', 'OS', 'Software Engineering'],
}

export const skills = {
  frontend: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Vite', 'Zustand', 'Redux Toolkit', 'TanStack Query', 'Recharts'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.io', 'JWT Auth', 'Docker'],
  ml_ai: ['Python', 'Flask', 'scikit-learn', 'Claude API', 'OpenAI API'],
  tooling: ['Git & GitHub', 'Postman', 'Vercel / Render', 'DSA (Java)'],
}

export const languages = [
  { name: 'English', level: 'Native / Professional Fluency' },
  { name: 'Hindi', level: 'Native / Bilingual Proficiency' },
  { name: 'Urdu', level: 'Conversational Proficiency' },
]
