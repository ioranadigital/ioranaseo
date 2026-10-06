'use client';

import { Search, Lightbulb, Rocket, LineChart, MessageCircle, Target, CheckCircle2, Handshake } from 'lucide-react';

const NOSOTROS = [
  { Icon: Search, title: 'Analizamos', text: 'Tu web, tu mercado y tu competencia.' },
  { Icon: Lightbulb, title: 'Proponemos', text: 'Estrategias y acciones con impacto real.' },
  { Icon: Rocket, title: 'Ejecutamos', text: 'Implementamos las mejoras acordadas.' },
  { Icon: LineChart, title: 'Medimos', text: 'Analizamos resultados y proponemos nuevos pasos.' },
];

const TU = [
  { Icon: MessageCircle, title: 'Compartes contexto', text: 'Nos cuentas tus objetivos, público y particularidades.' },
  { Icon: Target, title: 'Validas prioridades', text: 'Nos ayudas a enfocar lo más importante.' },
  { Icon: CheckCircle2, title: 'Apruebas avances', text: 'Revisas y das feedback en los hitos clave.' },
  { Icon: Handshake, title: 'Tomamos decisiones juntos', text: 'Decidimos con total transparencia.' },
];

export default function Colaboracion() {
  return (
    <section className="cl-section">
      <div className="cl-container">
        <div className="cl-header">
          <span className="cl-eyebrow">Equipo y colaboración</span>
          <h2 className="cl-title">Trabajamos contigo, no solo para ti</h2>
          <p className="cl-sub">
            Un proceso colaborativo en el que cada uno aporta su experiencia para tomar mejores decisiones.
          </p>
        </div>

        <div className="cl-grid">
          <article className="cl-panel cl-panel--blue">
            <h3 className="cl-panel__title">Nosotros</h3>
            <p className="cl-panel__copy">Aportamos la experiencia, la metodología y el conocimiento técnico.</p>
            <ul className="cl-list">
              {NOSOTROS.map((a) => {
                const Icon = a.Icon;
                return (
                  <li key={a.title}>
                    <span className="cl-list__icon" aria-hidden="true">
                      <Icon size={15} strokeWidth={2.1} />
                    </span>
                    <span className="cl-list__text">
                      <strong>{a.title}</strong> {a.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="cl-panel cl-panel--peach">
            <h3 className="cl-panel__title">Tú</h3>
            <p className="cl-panel__copy">Conoces tu negocio y nos das la información clave para tomar mejores decisiones.</p>
            <ul className="cl-list">
              {TU.map((a) => {
                const Icon = a.Icon;
                return (
                  <li key={a.title}>
                    <span className="cl-list__icon cl-list__icon--peach" aria-hidden="true">
                      <Icon size={15} strokeWidth={2.1} />
                    </span>
                    <span className="cl-list__text">
                      <strong>{a.title}</strong> {a.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </div>

      <style>{`
        .cl-section { padding: 56px 20px; background-color: var(--io-bg); }
        .cl-container { max-width: 1080px; margin: 0 auto; }
        .cl-header { text-align: center; margin-bottom: 36px; }
        .cl-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .cl-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto 10px; max-width: 560px; }
        .cl-sub { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0 auto; max-width: 520px; }

        .cl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .cl-panel { padding: 24px 24px 20px; border-radius: var(--io-radius-lg); border: 1px solid var(--io-border); }
        .cl-panel--blue { background: var(--io-bg-soft); }
        .cl-panel--peach { background: rgba(244, 162, 124, 0.08); }
        .cl-panel__title { font-size: 20px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .cl-panel__copy { font-size: 14.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0 0 18px; }

        .cl-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .cl-list li { display: flex; align-items: flex-start; gap: 10px; }
        .cl-list__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px;
          margin-top: 1px; border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .cl-list__icon--peach { background: rgba(244, 162, 124, 0.22); color: #c8663a; }
        .cl-list__text { font-size: 14px; line-height: 1.45; color: var(--io-text-muted); }
        .cl-list__text strong { color: var(--io-text); font-weight: 700; }

        @media (max-width: 767px) {
          .cl-section { padding: 40px 20px; }
          .cl-header { margin-bottom: 24px; }
          .cl-grid { grid-template-columns: 1fr; gap: 16px; }
          .cl-panel { padding: 20px 18px 18px; }
        }
        @media (max-width: 430px) { .cl-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
