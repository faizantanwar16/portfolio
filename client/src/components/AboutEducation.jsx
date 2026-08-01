import { useReveal } from '../hooks/useReveal';

export default function AboutEducation() {
  const ref = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section id="about" className="wrap">
        <div className="sec-head reveal" ref={ref}>
          <span className="sec-tag">// about-me</span>
          <h2 className="sec-title">Who I am</h2>
        </div>

        <div className="ae-grid">
          <div className="ae-card reveal-left" ref={useReveal()}>
            <div className="ae-icon about-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </div>
            <h3>About Me</h3>
            <p>
              B.Tech Computer Engineering student seeking a Software Engineering internship. I build and
              deploy full-stack <strong>MERN applications</strong> with REST APIs, JWT authentication,
              real-time WebSockets, and AI/ML microservice integration.
            </p>
            <p>
              A <strong>Smart India Hackathon 2025 National Finalist</strong> with four production-grade
              projects shipped end-to-end — every project below is deployed and working, not just a repo.
            </p>
            <div className="ae-facts">
              <div className="fact">
                <div className="flabel">Location</div>
                <div className="fval">📍 Wardha, Maharashtra, IN</div>
              </div>
              <div className="fact">
                <div className="flabel">Languages</div>
                <div className="fval">English · Hindi · Urdu</div>
              </div>
            </div>
          </div>

          <div id="education" className="ae-card reveal-right" ref={useReveal()}>
            <div className="ae-icon edu-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </div>
            <h3>Education</h3>
            <div className="edu-degree">B.Tech in Computer Engineering</div>
            <div className="edu-school">📍 Bajaj Institute of Technology, Wardha</div>
            <div className="edu-meta-row">
              <span className="tag">2023 – 2027 (Expected)</span>
              <span className="tag cgpa">CGPA 7.0</span>
            </div>
            <div className="edu-tags">
              {['DSA', 'OOP (Java)', 'DBMS', 'Computer Networks', 'OS', 'Software Engg.'].map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ae-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:stretch;}
        .ae-card{
          border:1px solid var(--border);background:var(--surface);border-radius:16px;
          padding:32px;display:flex;flex-direction:column;
        }
        .ae-icon{
          width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;
          margin-bottom:18px;
        }
        .about-icon{background:rgba(245,163,199,0.1);color:var(--pink);}
        .edu-icon{background:rgba(78,161,243,0.1);color:var(--blue);}
        .ae-card h3{font-family:var(--font-display);font-size:20px;margin-bottom:14px;}
        .ae-card p{color:var(--text-dim);font-size:15px;margin-bottom:14px;}
        .ae-card p strong{color:var(--text);font-weight:600;}
        .ae-facts{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:auto;padding-top:10px;}
        .fact{border:1px solid var(--border-soft);background:var(--surface-hi);border-radius:10px;padding:12px 14px;}
        .flabel{font-family:var(--font-mono);font-size:10.5px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;}
        .fval{font-size:13.5px;color:var(--text);font-weight:500;}
        .edu-degree{font-family:var(--font-display);font-size:18px;font-weight:600;}
        .edu-school{color:var(--pink);font-size:13.5px;margin-top:6px;margin-bottom:16px;}
        .edu-meta-row{display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap;}
        .cgpa{color:var(--pink);border-color:rgba(245,163,199,0.25);}
        .edu-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;}
        @media (max-width:860px){
          .ae-grid{grid-template-columns:1fr;}
        }
      `}</style>
    </>
  );
}
