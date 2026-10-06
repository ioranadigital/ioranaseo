'use client';

import Link from 'next/link';
import { Check, ChartColumn } from 'lucide-react';

const CARDS = [
  {
    id: 'web',
    titulo: 'Necesito una web',
    texto: 'Para crear una nueva presencia digital o relanzar la que ya tienes.',
    bullets: ['Nueva web', 'Rediseño', 'SEO inicial', 'Medición'],
    cta: 'Ver Web de Captación →',
    href: '/web-para-empresas/',
    featured: false,
  },
  {
    id: 'clientes',
    titulo: 'Quiero conseguir más clientes',
    texto: 'Para conectar visibilidad, campañas y conversión en un mismo sistema.',
    bullets: ['SEO', 'Campañas', 'Landing pages', 'Analytics', 'CRO'],
    cta: 'Analizar mi proyecto',
    href: '/diagnostico/',
    badge: 'RECOMENDADA',
    featured: true,
  },
  {
    id: 'crecer',
    titulo: 'Quiero crecer de forma continua',
    texto: 'Para negocios que ya tienen una base digital y quieren seguir mejorando.',
    bullets: ['Visibilidad', 'Campañas', 'Optimización', 'Medición', 'Acompañamiento'],
    cta: 'Ver soluciones de crecimiento →',
    href: '/soluciones/',
    featured: false,
  },
];

export default function PorDondeEmpezar() {
  return (
    <section className="por-donde-section pd-section">
      <div className="pd-container">
        <div className="pd-header">
          <h2 className="pd-title">¿Por dónde quieres empezar?</h2>
          <p className="pd-sub">
            Elige la solución que mejor encaja con el punto en el que está tu negocio.
          </p>
        </div>

        <div className="pd-grid">
          {CARDS.map((card) => (
            <article key={card.id} className={`pd-card${card.featured ? ' is-featured' : ''}`}>
              {card.badge && <span className="pd-badge">{card.badge}</span>}
              <h3 className="pd-card__title">{card.titulo}</h3>
              <p className="pd-card__text">{card.texto}</p>
              <ul className="pd-list">
                {card.bullets.map((b) => (
                  <li key={b}>
                    <span className="pd-check" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={card.href} className={`pd-cta${card.featured ? ' pd-cta--primary' : ''}`}>
                {card.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="pd-strip">
          <span className="pd-strip__icon" aria-hidden="true">
            <ChartColumn size={18} strokeWidth={2.1} />
          </span>
          <div className="pd-strip__text">
            <strong>Diagnóstico inicial gratuito</strong>
            <span>Si no tienes claro qué opción encaja contigo, empieza por el análisis inicial.</span>
          </div>
          <Link href="/diagnostico/" className="pd-strip__link">
            Empezar diagnóstico <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <style>{`
        .pd-section { padding: 56px 20px; background-color: #fff; }
        .pd-container { max-width: 1120px; margin: 0 auto; }
        .pd-header { text-align: center; margin-bottom: 40px; }
        .pd-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 12px;
        }
        .pd-sub { font-size: 16px; line-height: 1.6; color: var(--io-text-muted); margin: 0 auto; max-width: 600px; }

        .pd-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: stretch; }

        .pd-card {
          position: relative; display: flex; flex-direction: column; padding: 28px 24px 24px; background: #fff;
          border: 1px solid rgba(244, 162, 124, 0.55); border-radius: var(--io-radius-lg);
          transition: background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
        }
        .pd-card.is-featured {
          border: 2px solid #F4A27C; padding: 27px 23px 23px; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
        }
        .pd-card:focus-within {
          background-color: rgba(244, 162, 124, 0.08); border-color: rgba(244, 162, 124, 0.95);
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
        }
        .pd-card.is-featured:focus-within { border-color: #F4A27C; }
        @media (hover: hover) {
          .pd-card:hover {
            background-color: rgba(244, 162, 124, 0.08); border-color: rgba(244, 162, 124, 0.95);
            box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08); transform: translateY(-2px);
          }
          .pd-card.is-featured:hover { border-color: #F4A27C; }
        }

        .pd-badge {
          position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); padding: 4px 12px; border-radius: 999px;
          background: #F4A27C; color: var(--io-text); font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          line-height: 1.3; white-space: nowrap;
        }

        .pd-card__title { font-size: 20px; font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 8px; }
        .pd-card__text { font-size: 15px; line-height: 1.5; color: var(--io-text-muted); margin: 0 0 16px; }

        .pd-list { list-style: none; margin: 0 0 20px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .pd-list li { display: flex; align-items: center; gap: 10px; font-size: 15px; line-height: 1.35; color: var(--io-text-muted); }
        .pd-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 18px; height: 18px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }

        .pd-cta {
          display: flex; align-items: center; justify-content: center; margin-top: auto; padding: 11px 16px;
          font-size: 15px; font-weight: 600; text-align: center; text-decoration: none; color: var(--io-action);
          background: #fff; border: 1.5px solid var(--io-action); border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
        }
        /* el a:hover global fija color; se reafirma el color de cada variante para que no se pierda contraste */
        .pd-cta:hover { background: rgba(51, 111, 230, 0.05); color: var(--io-action); }
        .pd-cta--primary, .pd-cta--primary:hover, .pd-cta--primary:focus-visible { color: #fff; }
        .pd-cta--primary {
          background: var(--io-accent-dark); border-color: var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .pd-cta--primary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); }
        .pd-cta:focus-visible, .pd-strip__link:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        /* Franja de diagnóstico: helper compacto, no una card grande */
        .pd-strip {
          display: flex; align-items: center; gap: 14px; margin-top: 28px; padding: 14px 20px;
          background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .pd-strip__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 36px; height: 36px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .pd-strip__text { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; text-align: left; }
        .pd-strip__text strong { font-size: 16px; font-weight: 700; color: var(--io-text); }
        .pd-strip__text span { font-size: 14px; line-height: 1.45; color: var(--io-text-muted); }
        .pd-strip__link { flex: none; font-size: 15px; font-weight: 600; color: var(--io-action); text-decoration: none; white-space: nowrap; }
        .pd-strip__link:hover { color: var(--io-action-hover); }

        /* Tablet: 3 columnas más compactas */
        @media (min-width: 768px) and (max-width: 1023px) {
          .pd-section { padding: 48px 20px; }
          .pd-grid { gap: 16px; }
          .pd-card { padding: 26px 18px 20px; }
          .pd-card.is-featured { padding: 25px 17px 19px; }
          .pd-card__title { font-size: 18px; }
          .pd-card__text, .pd-list li { font-size: 14px; }
          /* CTAs en una sola línea: menos padding, algo más de ancho útil y fuente ajustada solo en las secundarias */
          .pd-cta { margin-inline: -8px; padding-inline: 4px; white-space: nowrap; }
          .pd-cta:not(.pd-cta--primary) { font-size: clamp(12.5px, 1.65vw, 15px); }
        }

        /* Mobile: stack vertical en el orden del brief */
        @media (max-width: 767px) {
          .pd-section { padding: 40px 20px; }
          .pd-header { margin-bottom: 32px; }
          .pd-sub { font-size: 15px; }
          .pd-grid { grid-template-columns: 1fr; gap: 24px; }
          .pd-strip { flex-wrap: wrap; align-items: flex-start; }
          .pd-strip__text { flex-basis: calc(100% - 60px); }
          .pd-strip__link { margin-left: 50px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pd-card, .pd-cta { transition: none; }
          .pd-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
