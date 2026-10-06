interface LegalHeroProps {
  title: string;
  intro: string;
}

export default function LegalHero({ title, intro }: LegalHeroProps) {
  return (
    <div className="lgl-hero">
      <span className="lgl-hero__eyebrow">Legal</span>
      <h1 className="lgl-hero__title">{title}</h1>
      <p className="lgl-hero__intro">{intro}</p>

      <style>{`
        .lgl-hero { margin-bottom: 28px; }
        .lgl-hero__eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .lgl-hero__title { font-size: clamp(28px, 4vw, 38px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 10px; }
        .lgl-hero__intro { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0; max-width: 640px; }
      `}</style>
    </div>
  );
}
