'use client';

import { ResultContactsVisual, ResultBookingsVisual, ResultPerformanceVisual } from './ConversionVisuals';

const CARDS = [
  { title: 'Más contactos', copy: 'Facilita que más visitantes den el paso de ponerse en contacto contigo.', Visual: ResultContactsVisual },
  { title: 'Más reservas o solicitudes', copy: 'Optimiza tus páginas clave para facilitar reservas, presupuestos o solicitudes.', Visual: ResultBookingsVisual },
  { title: 'Mejor rendimiento de tu web', copy: 'Mejora la experiencia y aprovecha mejor el tráfico que ya recibes.', Visual: ResultPerformanceVisual },
];

export default function Resultados() {
  return (
    <section className="rs-section">
      <div className="rs-container">
        <div className="rs-header">
          <span className="rs-eyebrow">Resultados que puedes conseguir</span>
          <h2 className="rs-title">Más oportunidades para tu negocio</h2>
          <p className="rs-sub">
            Una web más efectiva, con más contactos, solicitudes y acciones útiles, sin depender únicamente
            de aumentar el tráfico.
          </p>
        </div>

        <div className="rs-grid">
          {CARDS.map((c) => {
            const Visual = c.Visual;
            return (
              <article key={c.title} className="rs-card">
                <span className="rs-card__icon" aria-hidden="true">
                  <Visual className="rs-card__svg" />
                </span>
                <h3 className="rs-card__title">{c.title}</h3>
                <p className="rs-card__copy">{c.copy}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .rs-section { padding: 56px 20px; background-color: #fff; }
        .rs-container { max-width: 1000px; margin: 0 auto; }
        .rs-header { text-align: center; margin-bottom: 32px; }
        .rs-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .rs-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto 10px; max-width: 560px; }
        .rs-sub { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0 auto; max-width: 560px; }

        .rs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rs-card {
          display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px;
          padding: 22px 16px; background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .rs-card__icon { display: block; width: 76px; }
        .rs-card__svg { display: block; width: 100%; height: auto; }
        .rs-card__title { font-size: 16px; font-weight: 700; color: var(--io-text); margin: 4px 0 0; }
        .rs-card__copy { font-size: 13.5px; line-height: 1.45; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 767px) {
          .rs-section { padding: 40px 20px; }
          .rs-header { margin-bottom: 24px; }
          .rs-grid { grid-template-columns: 1fr; gap: 12px; }
          .rs-card { flex-direction: row; text-align: left; padding: 14px 16px; }
          .rs-card__icon { flex: none; width: 56px; }
        }
        @media (max-width: 430px) { .rs-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
