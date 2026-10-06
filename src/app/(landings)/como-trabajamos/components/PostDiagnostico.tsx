'use client';

import { StepPrioridadesVisual, StepPlanVisual, StepEjecucionVisual } from './ComoTrabajamosVisuals';

const STEPS = [
  {
    number: '01',
    title: 'Definimos prioridades',
    text: 'Analizamos los resultados del diagnóstico y enfocamos las oportunidades con mayor impacto.',
    Visual: StepPrioridadesVisual,
  },
  {
    number: '02',
    title: 'Organizamos el plan',
    text: 'Diseñamos una hoja de ruta clara con tareas, responsables y prioridades.',
    Visual: StepPlanVisual,
  },
  {
    number: '03',
    title: 'Ponemos en marcha y medimos',
    text: 'Ejecutamos las acciones y seguimos los resultados de forma continua, ajustando lo que haga falta.',
    Visual: StepEjecucionVisual,
  },
];

export default function PostDiagnostico() {
  return (
    <section className="pd-section">
      <div className="pd-container">
        <div className="pd-header">
          <span className="pd-eyebrow">Del diagnóstico a la acción</span>
          <h2 className="pd-title">Qué pasa después del diagnóstico</h2>
          <p className="pd-sub">
            Convertimos el análisis en un plan claro y accionable, con tu participación en cada paso.
          </p>
        </div>

        <div className="pd-grid">
          {STEPS.map((s) => {
            const Visual = s.Visual;
            return (
              <article key={s.number} className="pd-card">
                <span className="pd-num">{s.number}</span>
                <div className="pd-card__visual">
                  <Visual className="pd-card__svg" />
                </div>
                <h3 className="pd-card__title">{s.title}</h3>
                <p className="pd-card__text">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .pd-section { padding: 56px 20px; background-color: #fff; }
        .pd-container { max-width: 1100px; margin: 0 auto; }
        .pd-header { text-align: center; margin-bottom: 36px; }
        .pd-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .pd-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 auto 10px; max-width: 560px; }
        .pd-sub { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0 auto; max-width: 520px; }

        .pd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pd-card {
          padding: 18px 16px; background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
        }
        @media (hover: hover) {
          .pd-card:hover { border-color: var(--io-action); box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06); transform: translateY(-2px); }
        }
        .pd-num { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-action); margin-bottom: 8px; }
        .pd-card__visual { margin-bottom: 10px; }
        .pd-card__svg { display: block; width: 100%; max-width: 150px; height: auto; margin: 0 auto; }
        .pd-card__title { font-size: 16.5px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .pd-card__text { font-size: 13.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 1023px) {
          .pd-section { padding: 48px 20px; }
        }
        @media (max-width: 767px) {
          .pd-section { padding: 40px 20px; }
          .pd-header { margin-bottom: 24px; }
          .pd-grid { grid-template-columns: 1fr; gap: 14px; }
          .pd-card__svg { max-width: 130px; }
        }
        @media (max-width: 430px) { .pd-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .pd-card { transition: none; } .pd-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
