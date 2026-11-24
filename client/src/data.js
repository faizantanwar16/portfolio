// Static content — no database, no backend. Edit this file directly and
// redeploy any time you want to change your projects or skills.

export const projects = [
  {
    title: 'AI Resume Coach',
    tagline: 'Claude-Powered Career Platform',
    description:
      'Full-stack AI career platform using the Anthropic Claude API — JD-based resume generation, resume analysis, job match scoring, gap analysis, and bullet point rewriting. TypeScript MERN stack with JWT auth, resume version management, and an application tracker dashboard.',
    date: '2026',
    tags: ['React · Vite · TS', 'Node · Express', 'MongoDB', 'Claude API', 'JWT'],
    githubUrl: 'https://github.com/faizantanwar16/ai-resume-coach',
    liveUrl: 'https://ai-resume-coach.vercel.app',
    order: 1,
  },
  {
    title: 'HeartGuard',
    tagline: 'AI Heart Disease Risk Predictor',
    description:
      'Three-tier microservices architecture — React SPA, Node.js REST API, and Python Flask ML service, each independently deployable. Logistic Regression on the CDC BRFSS 2020 dataset (319,795 records, 17 features) with 90%+ accuracy, rendered as an animated SVG risk gauge.',
    date: 'Jan – Apr 2026',
    tags: ['MERN', 'Python · Flask', 'scikit-learn', 'Recharts', 'JWT · bcrypt'],
    githubUrl: 'https://github.com/faizantanwar16/heart-disease-prediction-',
    liveUrl: '',
    order: 2,
  },
  {
    title: 'FinanceIQ',
    tagline: 'Smart Budget Planner',
    description:
      'Personal finance SPA with Zustand global state, TanStack Query data fetching, and interactive Recharts visualizations. MongoDB aggregation pipelines for monthly summaries, category breakdowns, and 12-month trend analysis with CSV export and multi-parameter filtering.',
    date: '2026',
    tags: ['React · Vite', 'Zustand', 'TanStack Query', 'Tailwind v4', 'Node · MongoDB'],
    githubUrl: 'https://github.com/faizantanwar16/financeiq-smart-budget-planner',
    liveUrl: 'https://financeiq.vercel.app',
    order: 3,
  },
  {
    title: 'Smart Habit Tracker',
    tagline: 'Full-Stack Habit & Streak Dashboard',
    description:
      'Full-stack tracker with JWT authentication, daily check-off, streak counters, and a completion-rate analytics dashboard — fully deployed end-to-end on Vercel and Render.',
    date: '2025',
    tags: ['React', 'Node · Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/faizantanwar16/smart-habit-tracker',
    liveUrl: '',
    order: 4,
  },
];

// `icon` refers to a key exported from src/iconMap.js
export const skills = [
  { name: 'React.js', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
  { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', category: 'Frontend', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Redux Toolkit', category: 'Frontend', icon: 'SiRedux', color: '#764ABC' },
  { name: 'TanStack Query', category: 'Frontend', icon: 'SiReactquery', color: '#FF4154' },
  { name: 'Recharts', category: 'Frontend', icon: 'SiChartdotjs', color: '#f5a3c7' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#38BDF8' },
  { name: 'Vite', category: 'Frontend', icon: 'SiVite', color: '#B73CFE' },

  { name: 'Node.js', category: 'Backend & Data', icon: 'SiNodedotjs', color: '#68A063' },
  { name: 'Express.js', category: 'Backend & Data', icon: 'SiExpress', color: '#f5f5f5' },
  { name: 'MongoDB', category: 'Backend & Data', icon: 'SiMongodb', color: '#47A248' },
  { name: 'REST APIs', category: 'Backend & Data', icon: 'SiSwagger', color: '#85EA2D' },
  { name: 'Socket.io', category: 'Backend & Data', icon: 'SiSocketdotio', color: '#f5f5f5' },
  { name: 'JWT Auth', category: 'Backend & Data', icon: 'SiJsonwebtokens', color: '#f5a3c7' },
  { name: 'Python', category: 'Backend & Data', icon: 'SiPython', color: '#3776AB' },
  { name: 'Flask', category: 'Backend & Data', icon: 'SiFlask', color: '#f5f5f5' },
  { name: 'scikit-learn', category: 'Backend & Data', icon: 'SiScikitlearn', color: '#F7931E' },

  { name: 'Claude API', category: 'AI & Tooling', icon: 'SiAnthropic', color: '#f5a3c7' },
  { name: 'OpenAI API', category: 'AI & Tooling', icon: 'SiOpenai', color: '#f5f5f5' },
  { name: 'Docker', category: 'AI & Tooling', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Git & GitHub', category: 'AI & Tooling', icon: 'SiGithub', color: '#f5f5f5' },
  { name: 'Postman', category: 'AI & Tooling', icon: 'SiPostman', color: '#FF6C37' },
  { name: 'Vercel', category: 'AI & Tooling', icon: 'SiVercel', color: '#f5f5f5' },
  { name: 'DSA (Java)', category: 'AI & Tooling', icon: 'SiOpenjdk', color: '#f5a3c7' },
];
