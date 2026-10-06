'use client';

import { Eye, Flag, RefreshCw } from 'lucide-react';

const PRINCIPLES = [
  {
    Icon: Eye,
    title: 'Claridad',
    text: 'Sabes qué estamos haciendo y por qué.',
    accent: 'var(--io-action)',
    accentSoft: 'var(--io-bg-soft)',
  },
  {
    Icon: Flag,
    title: 'Prioridad',
    text: 'Nos centramos primero en lo que puede generar más impacto.',
    accent: 'var(--io-accent)',
    accentSoft: 'rgba(244, 162, 124, 0.14)',
  },
  {
    Icon: RefreshCw,
    title: 'Mejora continua',
    text: 'Medimos, aprendemos y ajustamos.',
    accent: '#34A86A',
    accentSoft: 'rgba(52, 168, 106, 0.12)',
  },
];

export default function Principios() {
  return (
    <section className="qp-section">
      <div className="qp-container">
        <div className="qp-header">
          <span className="qp-eyebrow">Nuestra forma de trabajar</span>
          <h2 className="qp-title">Menos ruido. Más claridad.</h2>
        </div>

        <div className="qp-list">
          {PRINCIPLES.map((p) => {
            const Icon = p.Icon;
            return (
              <div className="qp-item" key={p.title} style={{ borderTopColor: p.accent }}>
                <span className="qp-item__icon" style={{ background: p.accentSoft, color: p.accent }}>
                  <Icon size={16} strokeWidth={2.1} />
                </span>
                <span className="qp-item__title">{p.title}</span>
                <p className="qp-item__text">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .qp-section { padding: 48px 20px; background-color: var(--io-bg); }
        .qp-container { max-width: 900px; margin: 0 auto; }
        .qp-header { text-align: center; margin-bottom: 32px; }
        .qp-eyebrow {
          display: inline-block; background: #fff; color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px; border: 1px solid var(--io-border);
        }
        .qp-title { font-size: clamp(22px, 3.2vw, 28px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0; }

        .qp-list { display: flex; gap: 20px; }
        .qp-item {
          flex: 1; padding: 16px 18px 18px; background: #fff; border-top: 3px solid; border-radius: var(--io-radius-md);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        }
        .qp-item__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px;
          border-radius: 50%; margin-bottom: 10px;
        }
        .qp-item__title { display: block; font-size: 15px; font-weight: 700; color: var(--io-text); margin-bottom: 4px; }
        .qp-item__text { font-size: 13.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 767px) {
          .qp-section { padding: 40px 20px; }
          .qp-header { margin-bottom: 24px; }
          .qp-list { flex-direction: column; gap: 12px; }
        }
        @media (max-width: 430px) {
          .qp-section { padding: 32px 16px; }
        }
      `}</style>
    </section>
  );
}
