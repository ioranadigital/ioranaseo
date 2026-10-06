'use client';

import { PillarFormsVisual, PillarUxVisual, PillarMeasureVisual } from './ConversionVisuals';

const PILLARS = [
  {
    title: 'Formularios y contacto',
    copy: 'Simplificamos y optimizamos tus formularios para que sea más fácil contactar o solicitar información.',
    tone: 'blue',
    Visual: PillarFormsVisual,
  },
  {
    title: 'Experiencia de usuario (UX)',
    copy: 'Mejoramos la claridad, la estructura y los contenidos para guiar a tus visitantes hacia la acción.',
    tone: 'green',
    Visual: PillarUxVisual,
  },
  {
    title: 'Medición y mejora continua',
    copy: 'Analizamos datos, probamos cambios y optimizamos de forma continua.',
    tone: 'peach',
    Visual: PillarMeasureVisual,
  },
] as const;

export default function QueOptimizamos() {
  return (
    <section className="qo-section">
      <div className="qo-container">
        <div className="qo-header">
          <span className="qo-eyebrow">Qué optimizamos</span>
          <h2 className="qo-title">Mejoramos los puntos que convierten visitas en oportunidades</h2>
        </div>

        <div className="qo-grid">
          {PILLARS.map((p) => {
            const Visual = p.Visual;
            return (
              <article key={p.title} className="qo-card">
                <div className={`qo-card__visual qo-card__visual--${p.tone}`}>
                  <Visual className="qo-card__svg" />
                </div>
                <h3 className="qo-card__title">{p.title}</h3>
                <p className="qo-card__copy">{p.copy}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .qo-section { padding: 56px 20px; background-color: #fff; }
        .qo-container { max-width: 1120px; margin: 0 auto; }
        .qo-header { text-align: center; margin-bottom: 36px; }
        .qo-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .qo-title { font-size: clamp(24px, 3.6vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 auto; max-width: 680px; }

        .qo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .qo-card {
          background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          padding: 16px 18px 20px; transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
        }
        @media (hover: hover) {
          .qo-card:hover { border-color: var(--io-action); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        }
        .qo-card__visual { border-radius: var(--io-radius-md); padding: 10px; margin-bottom: 14px; }
        .qo-card__visual--blue { background: var(--io-bg-soft); }
        .qo-card__visual--green { background: rgba(52, 168, 106, 0.08); }
        .qo-card__visual--peach { background: rgba(244, 162, 124, 0.12); }
        .qo-card__svg { display: block; width: 100%; height: auto; }
        .qo-card__title { font-size: 17.5px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .qo-card__copy { font-size: 14.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 1023px) {
          .qo-section { padding: 48px 20px; }
          .qo-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .qo-grid .qo-card:last-child { grid-column: 1 / -1; max-width: calc(50% - 10px); margin: 0 auto; }
        }
        @media (max-width: 767px) {
          .qo-section { padding: 40px 20px; }
          .qo-header { margin-bottom: 24px; }
          .qo-grid { grid-template-columns: 1fr; gap: 16px; }
          .qo-grid .qo-card:last-child { max-width: none; }
        }
        @media (max-width: 430px) { .qo-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .qo-card { transition: none; } .qo-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
