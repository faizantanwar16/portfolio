import { useReveal } from '../hooks/useReveal';

const USERNAME = 'faizantanwar16';

export default function GithubSummary() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section id="github" className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <span className="sec-tag">// code-and-contributions</span>
          <h2 className="sec-title">GitHub activity</h2>
          <p className="sec-sub">Live stats pulled straight from my public GitHub profile.</p>
        </div>

        <div className="gh-card reveal" ref={bodyRef}>
          <div className="gh-head">
            <div className="gh-user">
              <span className="mono">@{USERNAME}</span>
              <span className="gh-sub">Contribution activity on GitHub</span>
            </div>
            <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Profile ↗
            </a>
          </div>

          <div className="gh-stats-row">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_title=true&hide_border=true&bg_color=00000000&title_color=f5a3c7&icon_color=f5a3c7&text_color=a7b3bf`}
              alt="GitHub stats"
              loading="lazy"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&hide_border=true&background=00000000&ring=f5a3c7&fire=f5a3c7&currStreakLabel=f5a3c7&sideLabels=a7b3bf&currStreakNum=eef2f5&sideNums=eef2f5&dates=5e6c78`}
              alt="GitHub streak stats"
              loading="lazy"
            />
          </div>

          <div className="gh-chart">
            <img src={`https://ghchart.rshah.org/f5a3c7/${USERNAME}`} alt="GitHub contribution chart" loading="lazy" />
          </div>
        </div>
      </section>

      <style>{`
        .gh-card{border:1px solid var(--border);background:var(--surface);border-radius:16px;padding:36px;}
        .gh-head{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:28px;}
        .gh-user{display:flex;flex-direction:column;gap:4px;}
        .gh-user .mono{font-size:18px;color:var(--pink);}
        .gh-sub{color:var(--text-faint);font-size:13px;}
        .gh-stats-row{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;}
        .gh-stats-row img{width:100%;border-radius:10px;}
        .gh-chart{overflow-x:auto;border-top:1px solid var(--border-soft);padding-top:24px;}
        .gh-chart img{min-width:640px;width:100%;}
        @media (max-width:760px){ .gh-stats-row{grid-template-columns:1fr;} }
      `}</style>
    </>
  );
}
