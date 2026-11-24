const gh = (r) => `https://github.com/faizantanwar16/${r}`;

export const about = [
  'B.Tech Computer Engineering student seeking a Software Engineering internship. I build and deploy full-stack MERN applications with REST APIs, JWT authentication, real-time WebSockets and AI/ML microservice integration.',
  'A Smart India Hackathon 2025 National Finalist with four production-grade projects shipped end to end. Every project here is deployed and working, not just a repo.',
];
export const education = {
  degree: 'B.Tech, Computer Engineering', school: 'Bajaj Institute of Technology, Wardha (BATU)',
  when: '2023 to 2027 (expected)', cgpa: 'CGPA 7.0',
  subjects: ['DSA', 'OOP (Java)', 'DBMS', 'Computer Networks', 'OS', 'Software Engineering'],
};
export const stats = [['4', 'apps shipped'], ['90%+', 'ML model accuracy'], ['36 hr', 'hackathon sprint'], ['319K+', 'records modelled']];
export const achievements = [
  ['SIH 2025 National Finalist', 'Top team at Smart India Hackathon 2025, Hardware Edition, Kottayam, Kerala. Competed among thousands of teams in a 36-hour sprint.'],
  ['4 production apps shipped', 'Built and deployed four complete full-stack applications (AI tools, ML-integrated apps and finance platforms), live on Vercel and Render.'],
  ['AI/ML in production', 'Integrated the Claude API and a logistic regression model (319K records, 90%+ accuracy) into live web applications.'],
  ['Three-tier microservices', 'Designed the React + Node.js + Flask ML architecture for HeartGuard, recognised by engineering faculty at Bajaj Institute of Technology.'],
];

export const cases = [
  { slug: 'ai-resume-coach', title: 'AI Resume Coach', tagline: 'Claude-powered career platform', when: '2026',
    what: 'A full-stack platform that tailors your resume to any job description using the Anthropic Claude API.',
    points: ['Generates a resume from a job description', 'Analyses an existing resume and scores the job match', 'Gap analysis and bullet-point rewriting', 'JWT auth, resume version management and an application tracker dashboard', 'TypeScript across the MERN stack'],
    tags: ['React', 'Vite', 'TypeScript', 'Node', 'Express', 'MongoDB', 'Claude API', 'JWT'], github: gh('ai-resume-coach'), live: 'https://ai-resume-coach.vercel.app' },
  { slug: 'national-weather-bigdata', title: 'National Weather Big Data Analytics Platform', tagline: 'Final-year major project, based on an SIH problem statement',
    what: 'Real-time, crowd-sourced weather intelligence for India. It collects reports from social media, public weather APIs and citizen submissions, verifies them with ML, and shows verified events on a live map.',
    points: ['Collectors for Bluesky, Mastodon, OpenWeatherMap, WeatherAPI.com and a citizen form', 'ML pipeline: SVM event classifier, India geotagger, credibility scorer and deduplicator', 'Spark Structured Streaming for enrichment', 'Trust score from 0 to 100, with uncertain reports sent to an admin review queue', 'Live dashboard with map pins and filters, updated in real time over SSE'],
    tags: ['TypeScript', 'Python', 'Apache Spark', 'ML', 'SSE'], github: gh('-national-weather-bigdata') },
  { slug: 'heartguard', title: 'HeartGuard', tagline: 'AI heart disease risk predictor', when: 'Jan to Apr 2026',
    what: 'A three-tier microservices app: a React SPA, a Node.js REST API and a Python Flask ML service, each independently deployable.',
    points: ['Logistic regression on the CDC BRFSS 2020 dataset: 319,795 records, 17 features, 90%+ accuracy', 'Risk result shown on an animated SVG gauge', 'JWT authentication with bcrypt password hashing', 'Recognised by engineering faculty at Bajaj Institute of Technology'],
    tags: ['React', 'Node', 'Flask', 'scikit-learn', 'Recharts', 'JWT'], github: gh('heart-disease-prediction-') },
  { slug: 'financeiq', title: 'FinanceIQ', tagline: 'Smart budget planner', when: '2026',
    what: 'A personal finance app with interactive analytics dashboards.',
    points: ['Zustand for global state and TanStack Query for data fetching', 'MongoDB aggregation pipelines for monthly summaries, category breakdowns and 12-month trends', 'Interactive Recharts visualisations', 'CSV export and multi-parameter filtering'],
    tags: ['React', 'Vite', 'Zustand', 'TanStack Query', 'Tailwind v4', 'MongoDB'], github: gh('financeiq-smart-budget-planner'), live: 'https://financeiq.vercel.app' },
  { slug: 'smart-habit-tracker', title: 'Smart Habit Tracker', tagline: 'Habit and streak dashboard', when: '2025',
    what: 'A full-stack habit tracker, deployed end to end on Vercel and Render.',
    points: ['JWT login and per-user data', 'Daily check-offs and streak counters', 'Completion-rate analytics dashboard'],
    tags: ['React', 'Node', 'Express', 'MongoDB', 'JWT'], github: gh('smart-habit-tracker') },
];
