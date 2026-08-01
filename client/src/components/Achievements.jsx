import { useReveal } from '../hooks/useReveal';

const ACHIEVEMENTS = [
  {
    title: 'SIH 2025 National Finalist',
    desc: 'Top team at Smart India Hackathon 2025 — Hardware Edition, Kottayam, Kerala. Competed among thousands of teams in a 36-hour sprint.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4" />
      </svg>
    ),
  },
  {
    title: '4 Production Apps Shipped',
    desc: 'Built and deployed four complete full-stack applications — AI-powered tools, ML-integrated apps, and finance platforms — all live on Vercel & Render.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'AI/ML in Production',
    desc: 'Integrated the Claude API (Anthropic) and a Logistic Regression model (319K records, 90%+ accuracy) into live web applications.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Three-Tier Microservices',
    desc: 'Designed a React + Node.js + Flask ML architecture for HeartGuard, recognised by engineering faculty at Bajaj Institute of Technology.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
        <path d="M12 15v2M9.5 17.5 7 19M14.5 17.5 17 19" />
      </svg>
    ),
  },
];

export default function Achievements() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section id="achievements" className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <span className="sec-tag">// milestones</span>
          <h2 className="sec-title">Achievements</h2>
        </div>
        <div className="ach-grid reveal" ref={bodyRef}>
          {ACHIEVEMENTS.map((a) => (
            <div className="ach-card" key={a.title}>
              <div className="ach-icon">{a.icon}</div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .ach-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
        .ach-card{border:1px solid var(--border);background:var(--surface);border-radius:14px;padding:28px;display:flex;gap:18px;transition:border-color .25s ease, transform .25s ease;}
        .ach-card:hover{border-color:var(--pink-dim);transform:translateY(-3px);}
        .ach-icon{width:44px;height:44px;flex-shrink:0;border-radius:10px;background:rgba(240,193,75,0.1);display:flex;align-items:center;justify-content:center;color:var(--amber);}
        .ach-card h3{font-family:var(--font-display);font-size:17px;margin-bottom:6px;}
        .ach-card p{color:var(--text-dim);font-size:13.5px;}
        @media (max-width:820px){ .ach-grid{grid-template-columns:1fr;} }
      `}</style>
    </>
  );
}
