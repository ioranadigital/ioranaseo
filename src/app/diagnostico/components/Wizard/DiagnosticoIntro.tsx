import { Check, Globe, Search, MapPin, MousePointerClick } from 'lucide-react';
import DiagnosticoHeroVisual from './DiagnosticoHeroVisual';

interface DiagnosticoIntroProps {
  onStart: () => void;
}

const TRUST_ITEMS = [
  'Análisis inicial gratuito',
  'Sin acceso a tus cuentas',
  'Detectamos prioridades claras',
  'Recibes el diagnóstico por email',
];

const ANALYSIS_ITEMS = [
  { long: 'Web y estructura', short: 'Web', Icon: Globe },
  { long: 'SEO básico', short: 'SEO', Icon: Search },
  { long: 'Visibilidad local', short: 'Visibilidad', Icon: MapPin },
  { long: 'Conversión y captación', short: 'Conversión', Icon: MousePointerClick },
];

const STYLES = `
  .dg-container { max-width: 1120px; margin: 0 auto; }
  .dg-eyebrow {
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--io-accent);
  }

  .dg-cta {
    display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;
    padding: 15px 32px; font-size: 16px; font-weight: 700; color: #fff;
    background: var(--io-action); border: none; border-radius: var(--io-radius-md);
    cursor: pointer; transition: background-color 0.2s; box-shadow: 0 6px 16px rgba(51, 111, 230, 0.2);
  }
  .dg-cta:hover { background: var(--io-action-hover); }

  /* Hero */
  .dg-hero { padding: 40px 20px 48px; }
  .dg-hero__grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 36px; align-items: center; }
  .dg-hero__grid > * { min-width: 0; }
  .dg-hero h1 {
    font-size: clamp(30px, 8vw, 46px); font-weight: 800; letter-spacing: -0.02em;
    line-height: 1.12; color: var(--io-text); margin: 14px 0 18px;
  }
  .dg-hero__lead { font-size: 17px; line-height: 1.6; color: var(--io-text-muted); margin-bottom: 12px; }
  .dg-hero__note { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin-bottom: 26px; opacity: 0.9; }
  .dg-hero__micro { margin-top: 16px; font-size: 13px; color: var(--io-text-muted); line-height: 1.6; }
  .dg-hero__micro span + span::before { content: '·'; margin: 0 8px; color: var(--io-accent); }

  /* Visual */
  .dg-visual {
    width: 100%; max-width: 440px; margin: 0 auto; padding: 24px 14px;
    background:
      radial-gradient(circle at 92% 6%, rgba(244, 162, 124, 0.16), transparent 42%),
      radial-gradient(circle at 6% 94%, rgba(96, 165, 250, 0.18), transparent 48%),
      #fff;
    border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
    display: flex; flex-direction: column; align-items: center;
  }
  .dg-visual__inputs { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
  .dg-chip {
    display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px;
    font-size: 13px; font-weight: 600; color: var(--io-text);
    background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
  }
  .dg-visual__stem { width: 2px; height: 26px; margin: 4px 0; background: var(--io-brand); border-radius: 2px; }
  .dg-visual__core {
    display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
    font-size: 18px; font-weight: 800; color: #fff; border-radius: var(--io-radius-md);
    background: linear-gradient(135deg, var(--io-action), var(--io-brand));
    box-shadow: 0 0 0 6px rgba(96, 165, 250, 0.14);
  }
  .dg-visual__branches { width: 100%; height: 32px; margin: 6px 0 0; }
  .dg-visual__branches path { fill: none; stroke: var(--io-brand); stroke-width: 2; vector-effect: non-scaling-stroke; stroke-linejoin: round; }
  .dg-visual__outputs { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .dg-result {
    display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center;
    padding: 12px 2px; font-size: 13px; font-weight: 700; line-height: 1.25; min-width: 0; color: var(--io-text);
    background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-md);
  }

  /* Qué analizamos (franja compacta, sin descripciones) */
  .dg-strip { padding: 20px 20px 28px; }
  .dg-strip__inner { display: flex; flex-direction: column; gap: 10px; align-items: center; }
  .dg-strip__title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--io-text-muted); }
  .dg-strip__list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; max-width: 360px; }
  .dg-strip__item {
    display: flex; align-items: center; gap: 8px; padding: 9px 12px; font-size: 13px; font-weight: 600;
    color: var(--io-text); background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-md);
  }
  .dg-strip__long { display: none; }

  /* Trust band */
  .dg-trust { background: #fff; border-top: 1px solid var(--io-border); border-bottom: 1px solid var(--io-border); padding: 18px 20px; }
  .dg-trust__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 16px; }
  .dg-trust__item { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--io-text); line-height: 1.3; }
  .dg-trust__tick {
    flex: none; width: 22px; height: 22px; border-radius: 50%; display: inline-flex;
    align-items: center; justify-content: center; background: var(--io-bg-soft);
  }

  @media (min-width: 480px) {
    .dg-visual { padding: 24px 20px; }
  }
  @media (max-width: 400px) {
    .dg-result { font-size: 11.5px; }
  }
  @media (min-width: 768px) {
    .dg-strip { padding: 16px 32px 32px; }
    .dg-strip__inner { flex-direction: row; justify-content: center; gap: 20px; }
    .dg-strip__list { display: flex; flex-wrap: wrap; justify-content: center; max-width: none; width: auto; }
    .dg-strip__item { padding: 8px 14px; }
    .dg-strip__short { display: none; }
    .dg-strip__long { display: inline; }
    .dg-hero { padding: 56px 32px 64px; }
    .dg-trust { padding: 20px 32px; }
    .dg-trust__grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
  }
  @media (min-width: 1024px) {
    .dg-hero__grid { grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); gap: 56px; }
  }
`;

export default function DiagnosticoIntro({ onStart }: DiagnosticoIntroProps) {
  return (
    <div>
      <style>{STYLES}</style>

      {/* A) HERO */}
      <section className="dg-hero" aria-labelledby="dg-hero-title">
        <div className="dg-container dg-hero__grid">
          <div>
            <div className="dg-eyebrow">DIAGNÓSTICO DIGITAL GRATUITO</div>
            <h1 id="dg-hero-title">Descubre qué deberías mejorar primero</h1>
            <p className="dg-hero__lead">
              Cuéntanos brevemente cómo es tu negocio y tu presencia digital. Analizaremos tu web y
              la información pública disponible para detectar las principales oportunidades de
              mejora.
            </p>
            <p className="dg-hero__note">
              No necesitas conocimientos técnicos ni acceso a tus cuentas. Solo necesitamos
              entender tu situación actual.
            </p>
            <button type="button" className="dg-cta" onClick={onStart}>
              Empezar diagnóstico
            </button>
            <p className="dg-hero__micro">
              <span>Sin acceso a tus cuentas</span>
              <span>Sin conocimientos técnicos</span>
              <span>Diagnóstico por email</span>
            </p>
          </div>
          <DiagnosticoHeroVisual />
        </div>
      </section>

      {/* B) FRANJA DE CONFIANZA */}
      <section className="dg-trust" aria-label="Ventajas del diagnóstico">
        <div className="dg-container dg-trust__grid">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="dg-trust__item">
              <span className="dg-trust__tick">
                <Check size={14} color="var(--io-action)" strokeWidth={3} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* C) QUÉ ANALIZAMOS (compacto) */}
      <section className="dg-strip" aria-label="Qué analizamos">
        <div className="dg-container dg-strip__inner">
          <span className="dg-strip__title">Qué analizamos</span>
          <ul className="dg-strip__list">
            {ANALYSIS_ITEMS.map(({ long, short, Icon }) => (
              <li key={long} className="dg-strip__item">
                <Icon size={16} color="var(--io-action)" strokeWidth={2.2} />
                <span className="dg-strip__short">{short}</span>
                <span className="dg-strip__long">{long}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
