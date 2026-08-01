import { ICONS } from '../iconMap';
import { skills } from '../data';
import { useReveal } from '../hooks/useReveal';

function SkillTile({ skill }) {
  const Icon = ICONS[skill.icon] || null;
  return (
    <div className="skill-tile" style={{ '--glow': skill.color || '#f5a3c7' }}>
      <div className="skill-icon-ring">
        <div className="skill-icon-wrap">
          {Icon ? <Icon className="skill-icon" /> : <span className="skill-icon">◆</span>}
        </div>
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

const categories = [...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section id="skills" className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <span className="sec-tag">// tech-stack</span>
          <h2 className="sec-title">Skills &amp; tools</h2>
        </div>

        <div className="skills-cols reveal" ref={bodyRef}>
          {categories.map((cat) => (
            <div className="skill-cat" key={cat}>
              <h4>{cat}</h4>
              <div className="skill-grid">
                {skills.filter((s) => s.category === cat).map((s) => (
                  <SkillTile skill={s} key={s.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .skills-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;}
        .skill-cat h4{font-family:var(--font-mono);font-size:12.5px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.06em;margin-bottom:18px;}
        .skill-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(84px, 1fr));gap:14px;}

        .skill-tile{
          display:flex;flex-direction:column;align-items:center;gap:10px;
          padding:16px 8px 14px;border-radius:12px;
          border:1px solid var(--border);background:var(--surface);
          transition:border-color .3s ease, transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease;
          cursor:default;
        }
        .skill-icon-ring{
          width:46px;height:46px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          background:var(--surface-hi);border:1px solid var(--border-soft);
          transition:border-color .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .skill-icon-wrap{display:flex;align-items:center;justify-content:center;transition:transform .4s cubic-bezier(.34,1.56,.64,1);}
        .skill-icon{font-size:20px;color:var(--text-faint);transition:color .3s ease;}
        .skill-name{
          font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
          text-align:center;line-height:1.3;transition:color .3s ease;
        }

        .skill-tile:hover{
          border-color:var(--glow);
          transform:translateY(-6px);
          box-shadow:0 14px 28px -12px var(--glow);
        }
        .skill-tile:hover .skill-icon-ring{
          border-color:var(--glow);
          background:color-mix(in srgb, var(--glow) 14%, var(--surface-hi));
          box-shadow:0 0 0 5px color-mix(in srgb, var(--glow) 16%, transparent), 0 0 20px var(--glow);
        }
        .skill-tile:hover .skill-icon-wrap{animation:icon-pop .55s cubic-bezier(.34,1.56,.64,1);}
        .skill-tile:hover .skill-icon{color:var(--glow);}
        .skill-tile:hover .skill-name{color:var(--text);}

        @keyframes icon-pop{
          0%{transform:scale(1) rotate(0deg);}
          35%{transform:scale(1.35) rotate(-14deg);}
          65%{transform:scale(0.95) rotate(8deg);}
          100%{transform:scale(1.15) rotate(0deg);}
        }

        @media (max-width:860px){ .skills-cols{grid-template-columns:1fr;} }
        @media (prefers-reduced-motion: reduce){
          .skill-tile:hover .skill-icon-wrap{animation:none;}
        }
      `}</style>
    </>
  );
}
