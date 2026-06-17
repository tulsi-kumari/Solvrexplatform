import { C } from "@/lib/theme";

const STEPS = [
  "Career Goal",
  "Resume Optimization",
  "Targeted Applications",
  "Referral Outreach",
  "Interview Preparation",
  "Offer",
];

// 6 nodes over a 12s loop → a node peaks every ~2s (staggered via negative delay).
const CYCLE = 12;

const styles = `
  .sx-cj { position: relative; }
  .sx-cj-nodes { position: relative; display: flex; flex-direction: column; z-index: 1; }
  .sx-cj-node { display: flex; align-items: center; gap: 16px; padding: 13px 0; }
  .sx-cj-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: ${C.bgSurface}; border: 1px solid ${C.borderStrong};
    flex-shrink: 0;
    animation: sx-cj-pulse ${CYCLE}s ease-in-out infinite;
    will-change: transform, box-shadow;
  }
  .sx-cj-label { font-size: 14px; color: ${C.textMuted}; line-height: 1.4; }
  /* vertical connecting line, spanning first → last dot centre */
  .sx-cj-track {
    position: absolute; top: 20px; bottom: 20px; left: 6px; width: 1px;
    background: rgba(77, 124, 255, 0.18); overflow: hidden; z-index: 0;
  }
  .sx-cj-sheen {
    position: absolute; left: 0; top: 0; width: 100%; height: 22%;
    background: linear-gradient(180deg, transparent, ${C.blue}, transparent);
    animation: sx-cj-flow 6.5s linear infinite; will-change: transform;
  }
  @keyframes sx-cj-flow {
    0% { transform: translateY(-120%); }
    100% { transform: translateY(560%); }
  }
  @keyframes sx-cj-pulse {
    0% { background: ${C.bgSurface}; border-color: ${C.borderStrong}; transform: scale(1); box-shadow: 0 0 0 0 rgba(77,124,255,0); }
    5% { background: ${C.blue}; border-color: ${C.blue}; transform: scale(1.25); box-shadow: 0 0 0 5px rgba(77,124,255,0.10), 0 0 16px 2px rgba(77,124,255,0.55); }
    14% { background: ${C.bgSurface}; border-color: ${C.borderStrong}; transform: scale(1); box-shadow: 0 0 0 0 rgba(77,124,255,0); }
    100% { background: ${C.bgSurface}; border-color: ${C.borderStrong}; transform: scale(1); box-shadow: 0 0 0 0 rgba(77,124,255,0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .sx-cj-dot { animation: none !important; }
    .sx-cj-sheen { display: none !important; }
  }
`;

export function CareerJourney() {
  return (
    <div
      className="sx-cj"
      role="img"
      aria-label="Career journey: Career Goal, Resume Optimization, Targeted Applications, Referral Outreach, Interview Preparation, Offer"
    >
      <style>{styles}</style>
      <div className="sx-cj-track">
        <div className="sx-cj-sheen" />
      </div>
      <div className="sx-cj-nodes">
        {STEPS.map((step, i) => (
          <div className="sx-cj-node" key={step}>
            <span className="sx-cj-dot" style={{ animationDelay: `${-i * (CYCLE / STEPS.length)}s` }} />
            <span className="sx-cj-label">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
