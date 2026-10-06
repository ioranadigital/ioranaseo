'use client';

import { ClipboardList, Wrench, TrendingUp } from 'lucide-react';

const FORMATOS = [
  {
    Icon: ClipboardList,
    title: 'Diagnóstico de visibilidad',
    text: 'Identificamos problemas y oportunidades en tu presencia en Google, Maps e inteligencia artificial.',
  },
  {
    Icon: Wrench,
    title: 'Optimización inicial',
    text: 'Implementamos las mejoras prioritarias detectadas en el diagnóstico.',
  },
  {
    Icon: TrendingUp,
    title: 'Crecimiento y seguimiento',
    text: 'Trabajamos tu visibilidad de forma continuada y ajustamos la estrategia con el tiempo.',
  },
];

export default function Comercializacion() {
  return (
    <section className="cm-section">
      <div className="cm-container">
        <div className="cm-header">
          <span className="cm-eyebrow">Cómo trabajamos contigo</span>
          <h2 className="cm-title">Tres formas de empezar</h2>
        </div>

        <div className="cm-grid">
          {FORMATOS.map((f) => {
            const Icon = f.Icon;
            return (
              <article key={f.title} className="cm-card">
                <span className="cm-card__icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="cm-card__title">{f.title}</h3>
                <p className="cm-card__text">{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .cm-section { padding: 56px 20px; background-color: #fff; }
        .cm-container { max-width: 1080px; margin: 0 auto; }
        .cm-header { text-align: center; margin-bottom: 36px; }
        .cm-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .cm-title { font-size: clamp(26px, 4vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0; }

        .cm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .cm-card { padding: 24px; background: var(--io-bg); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg); }
        .cm-card__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; margin-bottom: 14px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .cm-card__title { font-size: 17px; font-weight: 700; color: var(--io-text); margin: 0 0 8px; }
        .cm-card__text { font-size: 14px; line-height: 1.55; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 1023px) {
          .cm-section { padding: 48px 20px; }
          .cm-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 767px) { .cm-section { padding: 40px 20px; } .cm-header { margin-bottom: 24px; } }
        @media (max-width: 430px) { .cm-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
