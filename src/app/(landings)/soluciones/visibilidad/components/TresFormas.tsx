'use client';

import { CardSeoVisual, CardSeoLocalVisual, CardMapsVisual } from './VisibilidadVisuals';

const CARDS = [
  {
    title: 'SEO',
    copy: 'Apareces en las búsquedas relevantes de tu sector.',
    tone: 'blue',
    Visual: CardSeoVisual,
  },
  {
    title: 'SEO Local',
    copy: 'Llega a clientes de tu zona cuando te buscan.',
    tone: 'peach',
    Visual: CardSeoLocalVisual,
  },
  {
    title: 'Google Maps',
    copy: 'Muestra tu negocio en el mapa y atrae visitas cercanas.',
    tone: 'green',
    Visual: CardMapsVisual,
  },
] as const;

export default function TresFormas() {
  return (
    <section className="tf-section">
      <div className="tf-container">
        <div className="tf-header">
          <span className="tf-eyebrow">Tres formas de ganar visibilidad</span>
          <h2 className="tf-title">Más presencia en los momentos que importan</h2>
        </div>

        <div className="tf-grid">
          {CARDS.map((c) => {
            const Visual = c.Visual;
            return (
              <article key={c.title} className="tf-card">
                <div className={`tf-card__visual tf-card__visual--${c.tone}`}>
                  <Visual className="tf-card__svg" />
                </div>
                <h3 className="tf-card__title">{c.title}</h3>
                <p className="tf-card__copy">{c.copy}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .tf-section { padding: 56px 20px; background-color: #fff; }
        .tf-container { max-width: 1120px; margin: 0 auto; }
        .tf-header { text-align: center; margin-bottom: 36px; }
        .tf-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .tf-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto; max-width: 620px; }

        .tf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .tf-card {
          background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          padding: 16px 18px 20px; transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }
        @media (hover: hover) {
          .tf-card:hover { border-color: var(--io-action); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        }
        .tf-card__visual { border-radius: var(--io-radius-md); padding: 10px; margin-bottom: 14px; }
        .tf-card__visual--blue { background: var(--io-bg-soft); }
        .tf-card__visual--peach { background: rgba(244, 162, 124, 0.12); }
        .tf-card__visual--green { background: rgba(52, 168, 106, 0.08); }
        .tf-card__svg { display: block; width: 100%; height: auto; }
        .tf-card__title { font-size: 18px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .tf-card__copy { font-size: 14.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 1023px) {
          .tf-section { padding: 48px 20px; }
          .tf-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .tf-grid .tf-card:last-child { grid-column: 1 / -1; max-width: calc(50% - 10px); margin: 0 auto; }
        }
        @media (max-width: 767px) {
          .tf-section { padding: 40px 20px; }
          .tf-header { margin-bottom: 24px; }
          .tf-grid { grid-template-columns: 1fr; gap: 16px; }
          .tf-grid .tf-card:last-child { max-width: none; }
        }
        @media (max-width: 430px) { .tf-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .tf-card { transition: none; } .tf-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
