import AnalogClock from './AnalogClock';
import { useReveal } from '../hooks/useReveal';

export default function ResumeClockCard() {
  const ref = useReveal();

  return (
    <>
      <div className="section-spacer" />
      <section className="wrap">
        <div className="rc-outer reveal" ref={ref}>
          <div className="rc-card">
            <div className="rc-col rc-resume">
              <span className="mono rc-label">// download</span>
              <h3>Get my full résumé</h3>
              <p>Every project, skill, and achievement in one PDF.</p>
              <a href="/Faizan_Tanwar_Resume.pdf" download className="btn btn-primary">
                ⬇ Download Resume
              </a>
            </div>

            <div className="rc-divider" />

            <div className="rc-col rc-quote">
              <svg className="quote-mark" width="34" height="26" viewBox="0 0 34 26" fill="none">
                <path d="M0 26V14.7C0 9.4 1.3 5.7 3.9 3.4 6.5 1.1 9.8 0 13.9 0v5.1c-2.6 0-4.6.7-6 2S6 10.5 6 13.4h5.9V26H0Zm18.1 0V14.7c0-5.3 1.3-9 3.9-11.3C24.6 1.1 27.9 0 32 0v5.1c-2.6 0-4.6.7-6 2s-2 3.4-2 6.3h5.9V26H18.1Z" fill="var(--pink)" opacity="0.5"/>
              </svg>
              <p className="quote-text">Real artists ship.</p>
              <span className="quote-author mono">— Steve Jobs</span>
            </div>
          </div>

          <div className="rc-clock-overlay">
            <AnalogClock size={280} showCaption={false} />
          </div>
        </div>
      </section>

      <style>{`
        .rc-outer{position:relative;}
        .rc-card{
          position:relative;
          border:1px solid var(--border);background:var(--surface);border-radius:20px;
          display:grid;grid-template-columns:1fr 1fr;align-items:center;
          height:200px;padding:0 60px;
        }
        .rc-col{display:flex;flex-direction:column;max-width:320px;}
        .rc-resume{align-items:flex-start;padding-right:100px;}
        .rc-label{color:var(--text-faint);font-size:11.5px;margin-bottom:8px;}
        .rc-resume h3{font-family:var(--font-display);font-size:19px;margin-bottom:6px;}
        .rc-resume p{color:var(--text-dim);font-size:13px;margin-bottom:14px;}
        .rc-quote{align-items:flex-end;text-align:right;margin-left:auto;padding-left:100px;}
        .quote-mark{margin-bottom:8px;}
        .quote-text{font-family:var(--font-display);font-size:19px;font-weight:600;color:var(--text);line-height:1.3;}
        .quote-author{color:var(--pink);font-size:12px;margin-top:8px;}

        .rc-divider{
          position:absolute;left:50%;top:0;bottom:0;width:1px;margin-left:-0.5px;
          background:var(--border-soft);
        }

        .rc-clock-overlay{
          position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
          z-index:5;
        }

        @media (max-width:900px){
          .rc-card{grid-template-columns:1fr;height:auto;padding:150px 28px 36px;gap:28px;}
          .rc-resume,.rc-quote{max-width:100%;padding:0;margin:0;align-items:center;text-align:center;}
          .rc-divider{left:0;right:0;top:120px;bottom:auto;width:auto;height:1px;}
          .rc-clock-overlay{top:0;left:50%;transform:translate(-50%,-42%) scale(0.72);}
        }
        @media (max-width:480px){
          .rc-card{padding-top:120px;}
          .rc-clock-overlay{transform:translate(-50%,-42%) scale(0.58);}
        }
      `}</style>
    </>
  );
}
