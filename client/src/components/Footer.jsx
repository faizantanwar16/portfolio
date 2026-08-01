export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="logo">
              <span className="dot" />
              faizan.dev
            </a>
            <p>Full Stack Developer building AI-integrated MERN applications from Wardha, Maharashtra, India.</p>
          </div>
          <div className="foot-col">
            <h5>Navigate</h5>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <a href="https://github.com/faizantanwar16" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/faizan-tanwar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:faizantanwar1611@gmail.com">Email</a>
          </div>
          <div className="foot-col">
            <h5>Languages</h5>
            <span className="foot-static">English — Native</span>
            <span className="foot-static">Hindi — Native</span>
            <span className="foot-static">Urdu — Conversational</span>
          </div>
        </div>
        <div className="foot-bottom mono">
          <span>© {new Date().getFullYear()} Faizan Tanwar. All rights reserved.</span>
          <span>Built with the MERN stack ✦ Hosted on Vercel</span>
        </div>
      </div>

      <style>{`
        footer{border-top:1px solid var(--border-soft);padding:56px 0 32px;position:relative;z-index:1;margin-top:150px;}
        .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px;margin-bottom:44px;}
        .foot-brand .logo{margin-bottom:14px;font-family:var(--font-mono);font-weight:600;font-size:15px;display:flex;align-items:center;gap:8px;}
        .foot-brand .dot{width:7px;height:7px;border-radius:50%;background:var(--pink);}
        .foot-brand p{color:var(--text-faint);font-size:13.5px;max-width:280px;}
        .foot-col h5{font-family:var(--font-mono);font-size:11.5px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.06em;margin-bottom:16px;}
        .foot-col a, .foot-static{display:block;color:var(--text-dim);font-size:13.5px;margin-bottom:10px;transition:color .2s;}
        .foot-col a:hover{color:var(--pink);}
        .foot-bottom{
          display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;
          padding-top:24px;border-top:1px solid var(--border-soft);
          font-size:12px;color:var(--text-faint);
        }
        @media (max-width:760px){ .foot-grid{grid-template-columns:1fr 1fr;} }
        @media (max-width:480px){ .foot-grid{grid-template-columns:1fr;} }
      `}</style>
    </footer>
  );
}
