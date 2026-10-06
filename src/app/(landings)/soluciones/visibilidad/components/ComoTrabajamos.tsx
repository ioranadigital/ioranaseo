'use client';

import {
  StepAnalisisVisual,
  StepOptimizacionVisual,
  StepContenidoVisual,
  StepSeguimientoVisual,
} from './VisibilidadVisuals';

const STEPS = [
  { number: '01', title: 'Análisis', text: 'Estudiamos tu negocio y tu competencia.', Visual: StepAnalisisVisual },
  { number: '02', title: 'Optimización', text: 'Mejoramos tu presencia en Google.', Visual: StepOptimizacionVisual },
  { number: '03', title: 'Contenido', text: 'Creamos contenido relevante para tu sector.', Visual: StepContenidoVisual },
  { number: '04', title: 'Seguimiento', text: 'Medimos resultados y ajustamos la estrategia.', Visual: StepSeguimientoVisual },
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="ct-section">
      <div className="ct-container">
        <div className="ct-header">
          <span className="ct-eyebrow">Cómo trabajamos tu visibilidad</span>
          <h2 className="ct-title">Una estrategia completa y conectada</h2>
        </div>

        <ol className="ct-grid">
          {STEPS.map((s, i) => {
            const Visual = s.Visual;
            return (
              <li key={s.number} className="ct-step">
                {i < STEPS.length - 1 && <span className="ct-conn" aria-hidden="true" />}
                <div className="ct-card">
                  <span className="ct-num">{s.number}</span>
                  <div className="ct-card__visual">
                    <Visual className="ct-card__svg" />
                  </div>
                  <h3 className="ct-card__title">{s.title}</h3>
                  <p className="ct-card__text">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .ct-section { padding: 56px 20px; background-color: var(--io-bg); }
        .ct-container { max-width: 1200px; margin: 0 auto; }
        .ct-header { text-align: center; margin-bottom: 36px; }
        .ct-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .ct-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0; }

        .ct-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .ct-step { position: relative; }
        .ct-card {
          height: 100%; padding: 18px 16px; background: #fff; border: 1.5px solid var(--io-action);
          border-radius: var(--io-radius-md); transition: box-shadow 150ms ease, transform 150ms ease;
        }
        .ct-card:hover { box-shadow: 0 8px 18px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        .ct-num { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-action); margin-bottom: 8px; }
        .ct-card__visual { margin-bottom: 10px; }
        .ct-card__svg { display: block; width: 100%; max-width: 150px; height: auto; margin: 0 auto; }
        .ct-card__title { font-size: 16.5px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .ct-card__text { font-size: 13.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        .ct-conn { display: none; }
        @media (min-width: 1024px) {
          .ct-conn {
            display: block; position: absolute; top: 34px; left: -11px; width: 20px; height: 2px;
            background: var(--io-action); opacity: 0.35;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .ct-section { padding: 48px 20px; }
          .ct-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 767px) {
          .ct-section { padding: 40px 20px; }
          .ct-header { margin-bottom: 24px; }
          .ct-grid { grid-template-columns: 1fr; gap: 14px; }
          .ct-card__svg { max-width: 130px; }
        }
        @media (max-width: 430px) { .ct-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .ct-card { transition: none; } .ct-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
