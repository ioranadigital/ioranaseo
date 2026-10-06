'use client';

import {
  StepAnalisisVisual,
  StepHipotesisVisual,
  StepMejoraVisual,
  StepMedicionVisual,
} from './ConversionVisuals';

const STEPS = [
  { number: '01', title: 'Análisis', text: 'Estudiamos tu web, tus usuarios y tus puntos de conversión actuales.', Visual: StepAnalisisVisual },
  { number: '02', title: 'Hipótesis', text: 'Detectamos oportunidades y planteamos mejoras con mayor potencial.', Visual: StepHipotesisVisual },
  { number: '03', title: 'Mejora', text: 'Implementamos los cambios y optimizamos los elementos clave.', Visual: StepMejoraVisual },
  { number: '04', title: 'Medición', text: 'Analizamos los resultados y seguimos iterando para mejorar.', Visual: StepMedicionVisual },
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos-conversion" className="cw-section">
      <div className="cw-container">
        <div className="cw-header">
          <span className="cw-eyebrow">Cómo trabajamos la conversión</span>
          <h2 className="cw-title">Un proceso claro, enfocado en resultados</h2>
        </div>

        <ol className="cw-grid">
          {STEPS.map((s, i) => {
            const Visual = s.Visual;
            return (
              <li key={s.number} className="cw-step">
                {i < STEPS.length - 1 && <span className="cw-conn" aria-hidden="true" />}
                <div className="cw-card">
                  <span className="cw-num">{s.number}</span>
                  <div className="cw-card__visual">
                    <Visual className="cw-card__svg" />
                  </div>
                  <h3 className="cw-card__title">{s.title}</h3>
                  <p className="cw-card__text">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .cw-section { padding: 56px 20px; background-color: var(--io-bg); }
        .cw-container { max-width: 1200px; margin: 0 auto; }
        .cw-header { text-align: center; margin-bottom: 36px; }
        .cw-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .cw-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0; }

        .cw-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .cw-step { position: relative; }
        .cw-card {
          height: 100%; padding: 18px 16px; background: #fff; border: 1px solid var(--io-border);
          border-radius: var(--io-radius-md); transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
        }
        .cw-card:hover { border-color: var(--io-action); box-shadow: 0 8px 18px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        .cw-num { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-action); margin-bottom: 8px; }
        .cw-card__visual { margin-bottom: 10px; }
        .cw-card__svg { display: block; width: 100%; max-width: 130px; height: auto; margin: 0 auto; }
        .cw-card__title { font-size: 16.5px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .cw-card__text { font-size: 13.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        .cw-conn { display: none; }
        @media (min-width: 1024px) {
          .cw-conn {
            display: block; position: absolute; top: 34px; left: -11px; width: 20px; height: 2px;
            background: var(--io-action); opacity: 0.35;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .cw-section { padding: 48px 20px; }
          .cw-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 767px) {
          .cw-section { padding: 40px 20px; }
          .cw-header { margin-bottom: 24px; }
          .cw-grid { grid-template-columns: 1fr; gap: 14px; }
          .cw-card__svg { max-width: 110px; }
        }
        @media (max-width: 430px) { .cw-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .cw-card { transition: none; } .cw-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
