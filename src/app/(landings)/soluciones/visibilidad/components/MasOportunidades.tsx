'use client';

import { Check } from 'lucide-react';
import { ResultVisual } from './VisibilidadVisuals';

const BENEFITS = [
  'Mejores posiciones en búsquedas relevantes',
  'Más visibilidad en tu zona',
  'Tu negocio en Google Maps',
  'Contenido que atrae clientes',
  'Estrategia adaptada a tu sector',
];

export default function MasOportunidades() {
  return (
    <section className="mo-section">
      <div className="mo-grid">
        <div className="mo-visual">
          <ResultVisual className="mo-visual__svg" />
        </div>
        <div className="mo-content">
          <h2 className="mo-title">Más visibilidad, más oportunidades</h2>
          <ul className="mo-list">
            {BENEFITS.map((b) => (
              <li key={b}>
                <span className="mo-check" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .mo-section { padding: 56px 20px; background-color: #fff; }
        .mo-grid { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
        .mo-visual { background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg); padding: 20px; }
        .mo-visual__svg { display: block; width: 100%; height: auto; }
        .mo-title { font-size: clamp(26px, 4vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 20px; }
        .mo-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .mo-list li { display: flex; align-items: center; gap: 12px; font-size: 15.5px; font-weight: 500; color: var(--io-text); }
        .mo-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 20px; height: 20px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        @media (max-width: 1023px) {
          .mo-section { padding: 48px 20px; }
          .mo-grid { grid-template-columns: 1fr; gap: 32px; }
          .mo-title { text-align: center; }
          .mo-list { max-width: 420px; margin: 0 auto; }
        }
        @media (max-width: 767px) { .mo-section { padding: 40px 20px; } }
        @media (max-width: 430px) { .mo-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
