'use client';

import { JourneySeoWebVisual, JourneyMessageWebVisual, JourneyContactWebVisual } from './WebVisuals';

const STEPS = [
  {
    id: 'encuentran',
    title: 'Que te encuentren',
    text: 'Preparamos tu web para aparecer cuando tus clientes buscan servicios como los tuyos.',
    Visual: JourneySeoWebVisual,
  },
  {
    id: 'entienden',
    title: 'Que entiendan lo que haces',
    text: 'Organizamos diseño y contenido para comunicar claramente qué haces y por qué elegirte.',
    Visual: JourneyMessageWebVisual,
  },
  {
    id: 'contactan',
    title: 'Que contacten',
    text: 'Facilitamos llamadas, formularios y acciones para convertir visitas en oportunidades.',
    Visual: JourneyContactWebVisual,
  },
];

export default function VisibilityToResults() {
  return (
    <section className="wj-section">
      <div className="wj-container">
        <div className="wj-header">
          <h2 className="wj-title">De la visibilidad a los resultados</h2>
          <p className="wj-sub">Una web preparada para captar, explicada paso a paso.</p>
        </div>

        <ol className="wj-row">
          {STEPS.map((s, i) => {
            const Visual = s.Visual;
            return (
              <li key={s.id} className="wj-step">
                <div className="wj-step__visual">
                  <Visual className="wj-step__svg" />
                </div>
                <span className="wj-step__num">{`0${i + 1}`}</span>
                <h3 className="wj-step__title">{s.title}</h3>
                <p className="wj-step__text">{s.text}</p>
                {i < STEPS.length - 1 && <span className="wj-arrow" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .wj-section { padding: 56px 20px; background-color: #fff; }
        .wj-container { max-width: 1120px; margin: 0 auto; }
        .wj-header { text-align: center; margin-bottom: 40px; }
        .wj-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 10px;
        }
        .wj-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 auto; max-width: 560px; }

        .wj-row { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .wj-step { position: relative; display: flex; flex-direction: column; }
        .wj-step__visual {
          padding: 8px; margin-bottom: 14px; background: var(--io-bg-soft); border: 1px solid var(--io-border);
          border-radius: var(--io-radius-lg);
        }
        .wj-step__svg { display: block; width: 100%; height: auto; }
        .wj-step__num { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-action); margin-bottom: 4px; }
        .wj-step__title { font-size: 18px; font-weight: 700; color: var(--io-text); margin: 0 0 8px; line-height: 1.25; }
        .wj-step__text { font-size: 14.5px; line-height: 1.55; color: var(--io-text-muted); margin: 0; }

        /* Conector: flecha discreta entre pasos, alineada con el visual */
        .wj-arrow {
          display: block; position: absolute; top: 38px; right: -22px; width: 14px; height: 14px;
          border-top: 2px solid var(--io-border); border-right: 2px solid var(--io-border);
          transform: rotate(45deg); border-radius: 0 2px 0 0;
        }

        @media (max-width: 1024px) {
          .wj-section { padding: 48px 20px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .wj-row { gap: 24px; }
          .wj-arrow { right: -16px; }
        }
        @media (max-width: 767px) {
          .wj-section { padding: 40px 20px; }
          .wj-header { margin-bottom: 28px; }
          .wj-sub { font-size: 15px; }
          .wj-row { grid-template-columns: 1fr; gap: 28px; }
          .wj-arrow { display: none; }
        }
        @media (max-width: 375px) {
          .wj-section { padding: 32px 16px; }
        }
      `}</style>
    </section>
  );
}
