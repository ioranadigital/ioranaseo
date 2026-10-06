'use client';

import Link from 'next/link';
import {
  CardWebVisual,
  CardSeoVisual,
  CardMapsVisual,
  CardAdsVisual,
  CardAnalyticsVisual,
  CardCroVisual,
} from './SolutionsVisuals';

const CARDS = [
  {
    title: 'Web para empresas',
    copy: 'Una web profesional orientada a captar clientes.',
    href: '/web-para-empresas/',
    tone: 'blue',
    Visual: CardWebVisual,
  },
  {
    title: 'SEO y SEO Local',
    copy: 'Para que te encuentren en Google y en tu zona.',
    href: '/soluciones/visibilidad/',
    tone: 'green',
    Visual: CardSeoVisual,
  },
  {
    title: 'Google Maps',
    copy: 'Aparece en Google Maps y atrae clientes de tu zona.',
    href: '/soluciones/visibilidad/',
    tone: 'peach',
    Visual: CardMapsVisual,
  },
  {
    title: 'Google Ads y Meta Ads',
    copy: 'Genera demanda con campañas en Google y redes sociales.',
    href: '/soluciones/campanas/',
    tone: 'lavender',
    Visual: CardAdsVisual,
  },
  {
    title: 'Analytics y medición',
    copy: 'Mide resultados y toma decisiones basadas en datos.',
    href: '/soluciones/conversion/',
    tone: 'blue',
    Visual: CardAnalyticsVisual,
  },
  {
    title: 'CRO y mejora continua',
    copy: 'Convierte más visitas en clientes y optimiza tu negocio.',
    href: '/soluciones/conversion/',
    tone: 'green',
    Visual: CardCroVisual,
  },
] as const;

export default function NuestrasSoluciones() {
  return (
    <section id="nuestras-soluciones" className="ns-section">
      <div className="ns-container">
        <div className="ns-header">
          <span className="ns-eyebrow">Nuestras soluciones</span>
          <h2 className="ns-title">Soluciones para cada etapa de tu crecimiento</h2>
        </div>

        <div className="ns-grid">
          {CARDS.map((c) => {
            const Visual = c.Visual;
            return (
              <article key={c.title} className="ns-card">
                <div className={`ns-card__visual ns-card__visual--${c.tone}`}>
                  <Visual className="ns-card__svg" />
                </div>
                <h3 className="ns-card__title">{c.title}</h3>
                <p className="ns-card__copy">{c.copy}</p>
                <Link href={c.href} className="ns-card__cta">
                  Ver solución <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .ns-section { padding: 56px 20px; background-color: #fff; }
        .ns-container { max-width: 1200px; margin: 0 auto; }
        .ns-header { text-align: center; margin-bottom: 36px; }
        .ns-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .ns-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto; max-width: 640px; }

        .ns-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ns-card {
          display: flex; flex-direction: column; background: #fff; border: 1px solid var(--io-border);
          border-radius: var(--io-radius-lg); padding: 16px 18px 18px; transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }
        @media (hover: hover) {
          .ns-card:hover { border-color: var(--io-action); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
          .ns-card:hover .ns-card__svg { opacity: 1; }
        }
        .ns-card:focus-within { border-color: var(--io-action); }

        .ns-card__visual { border-radius: var(--io-radius-md); padding: 10px; margin-bottom: 14px; }
        .ns-card__visual--blue { background: var(--io-bg-soft); }
        .ns-card__visual--green { background: rgba(52, 168, 106, 0.08); }
        .ns-card__visual--peach { background: rgba(244, 162, 124, 0.12); }
        .ns-card__visual--lavender { background: rgba(139, 124, 246, 0.10); }
        .ns-card__svg { display: block; width: 100%; height: auto; opacity: 0.92; transition: opacity 150ms ease; }

        .ns-card__title { font-size: 17px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; line-height: 1.25; }
        .ns-card__copy { font-size: 14px; line-height: 1.5; color: var(--io-text-muted); margin: 0 0 12px; flex: 1; }
        .ns-card__cta {
          align-self: flex-start; font-size: 14px; font-weight: 600; color: var(--io-action); text-decoration: none;
        }
        .ns-card__cta:hover { color: var(--io-action-hover); }
        .ns-card__cta:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; border-radius: 2px; }

        @media (max-width: 1023px) {
          .ns-section { padding: 48px 20px; }
          .ns-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 767px) {
          .ns-section { padding: 40px 20px; }
          .ns-header { margin-bottom: 24px; }
          .ns-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 430px) { .ns-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .ns-card { transition: none; } .ns-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
