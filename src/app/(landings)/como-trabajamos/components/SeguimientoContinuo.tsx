'use client';

import { Search, ListChecks, PlayCircle, LineChart } from 'lucide-react';

const NODES = [
  { Icon: Search, title: 'Revisar', text: 'Analizamos resultados y nuevos datos.' },
  { Icon: ListChecks, title: 'Priorizar', text: 'Definimos las siguientes oportunidades.' },
  { Icon: PlayCircle, title: 'Ejecutar', text: 'Implementamos las mejoras.' },
  { Icon: LineChart, title: 'Mejorar', text: 'Medimos el impacto y repetimos el ciclo.' },
];

export default function SeguimientoContinuo() {
  return (
    <section className="sc-section">
      <div className="sc-container">
        <div className="sc-header">
          <span className="sc-eyebrow">Un proceso en evolución</span>
          <h2 className="sc-title">Seguimiento continuo</h2>
          <p className="sc-sub">No es un proyecto con final, sino un proceso de mejora constante.</p>
        </div>

        <div className="sc-loop">
          {NODES.map((n, i) => {
            const Icon = n.Icon;
            return (
              <div key={n.title} className="sc-node">
                {i < NODES.length - 1 && <span className="sc-arrow" aria-hidden="true" />}
                <span className="sc-node__icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2.1} />
                </span>
                <span className="sc-node__title">{n.title}</span>
                <span className="sc-node__text">{n.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .sc-section { padding: 56px 20px; background-color: #fff; }
        .sc-container { max-width: 1000px; margin: 0 auto; }
        .sc-header { text-align: center; margin-bottom: 36px; }
        .sc-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .sc-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 8px; }
        .sc-sub { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0; }

        .sc-loop { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .sc-node {
          position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;
          padding: 18px 10px; background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .sc-node__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .sc-node:last-child .sc-node__icon { color: var(--io-accent); border-color: var(--io-accent); }
        .sc-node__title { font-size: 15px; font-weight: 700; color: var(--io-text); }
        .sc-node__text { font-size: 12.5px; line-height: 1.4; color: var(--io-text-muted); }

        .sc-arrow {
          display: block; position: absolute; top: 50%; right: -8px; width: 16px; height: 2px;
          background: var(--io-border); z-index: 1; transform: translateY(-50%);
        }
        @media (max-width: 767px) {
          .sc-section { padding: 40px 20px; }
          .sc-header { margin-bottom: 24px; }
          .sc-loop { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .sc-arrow { display: none; }
        }
        @media (max-width: 430px) { .sc-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
