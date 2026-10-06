'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, Check, ChevronRight } from 'lucide-react';

const FAQS = [
  {
    q: '¿Por dónde debería empezar?',
    a: 'Depende de tu situación actual. Analizamos tu web, visibilidad, captación y medición para identificar dónde existe la mayor oportunidad de mejora.',
  },
  {
    q: '¿Necesito una web nueva para trabajar con vosotros?',
    a: 'No necesariamente. Podemos crear una nueva web, mejorar la actual o trabajar otras áreas de captación si ya tienes una buena base.',
  },
  {
    q: '¿Trabajáis SEO y campañas conjuntamente?',
    a: 'Sí. Podemos trabajar cada área por separado o conectarlas dentro de una estrategia de captación más amplia.',
  },
  {
    q: '¿Puedo contratar solo un servicio?',
    a: 'Sí. El punto de partida depende de las necesidades de tu negocio.',
  },
  {
    q: '¿Cómo sabré si está funcionando?',
    a: 'Definimos qué queremos conseguir y configuramos la medición necesaria para saber qué está generando tráfico, contactos y oportunidades.',
  },
  {
    q: '¿Trabajáis con pequeños negocios y PYMEs?',
    a: 'Sí. Iorana SEO está especializada en autónomos, pequeños negocios, negocios locales y PYMEs.',
  },
  {
    q: '¿Cuánto tiempo se tarda en ver resultados?',
    a: 'Depende del punto de partida y del canal. Algunas mejoras se notan pronto; otras requieren un trabajo más progresivo.',
  },
  {
    q: '¿Necesito estar en todos los canales a la vez?',
    a: 'No. Empezamos por los canales donde hay más oportunidad para tu negocio, no por estar en todos desde el primer momento.',
  },
];

const BENEFICIOS = ['Sin acceso a tus cuentas', 'Detectamos prioridades claras', 'Diagnóstico por email'];

export default function FAQAnalisis() {
  // Un solo item abierto a la vez; todos cerrados por defecto (comportamiento previo).
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-analisis-section fq-section">
      <div className="fq-grid">
        {/* FAQ */}
        <div className="fq-left">
          <h2 className="fq-title">Preguntas frecuentes</h2>
          <div className="fq-list">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className={`fq-item${isOpen ? ' is-open' : ''}`}>
                  <h3 className="fq-item__head">
                    <button
                      type="button"
                      id={`fq-btn-${i}`}
                      className="fq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`fq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="fq-btn__q">{faq.q}</span>
                      <span className="fq-btn__icon" aria-hidden="true">
                        {isOpen ? <Minus size={18} strokeWidth={2.2} /> : <Plus size={18} strokeWidth={2.2} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`fq-panel-${i}`}
                    role="region"
                    aria-labelledby={`fq-btn-${i}`}
                    className="fq-panel"
                  >
                    <div className="fq-panel__inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel promocional del diagnóstico (el diagnóstico vive en /diagnostico/) */}
        <aside className="fq-promo" aria-labelledby="fq-promo-title">
          <p className="fq-eyebrow">
            <span className="fq-eyebrow__line" aria-hidden="true" />
            Diagnóstico digital gratuito
          </p>
          <h3 id="fq-promo-title" className="fq-promo__title">
            Descubre qué deberías mejorar primero.
          </h3>
          <p className="fq-promo__copy">
            Analizamos tu web y tu presencia digital para detectar las principales oportunidades de mejora.
          </p>

          <ul className="fq-checks">
            {BENEFICIOS.map((b) => (
              <li key={b}>
                <span className="fq-check" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="fq-flow" aria-hidden="true">
            <div className="fq-flow__row">
              <span className="fq-chip">Web</span>
              <span className="fq-chip">SEO</span>
              <span className="fq-chip">Maps</span>
              <span className="fq-chip">Ads</span>
            </div>
            <div className="fq-flow__row">
              <ChevronRight size={14} strokeWidth={2.4} className="fq-flow__arrow" />
              <span className="fq-chip fq-chip--blue">Diagnóstico</span>
              <ChevronRight size={14} strokeWidth={2.4} className="fq-flow__arrow" />
              <span className="fq-chip fq-chip--peach">Prioridades</span>
            </div>
          </div>

          <Link href="/diagnostico/" className="fq-cta">
            Empezar diagnóstico
          </Link>
        </aside>
      </div>

      <style>{`
        .fq-section { padding: 56px 20px 0; background-color: var(--io-bg); }
        .fq-grid {
          max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 58fr) minmax(0, 42fr);
          gap: 56px; align-items: start;
        }
        .fq-title { font-size: clamp(26px, 3.2vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 20px; }

        /* Accordion limpio: separadores, sin cards */
        .fq-list { border-top: 1px solid var(--io-border); }
        .fq-item { border-bottom: 1px solid var(--io-border); }
        .fq-item__head { margin: 0; font-size: inherit; }
        .fq-btn {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 16px 4px;
          text-align: left; font-family: inherit; cursor: pointer; background: none; border: none; color: var(--io-text);
        }
        .fq-btn:hover .fq-btn__q { color: var(--io-action-hover); }
        .fq-btn:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; border-radius: 4px; }
        .fq-btn__q { font-size: 16px; font-weight: 600; line-height: 1.4; transition: color 150ms ease; }
        .fq-btn__icon { display: inline-flex; flex: none; color: var(--io-action); }

        .fq-panel {
          display: grid; grid-template-rows: 0fr; visibility: hidden;
          transition: grid-template-rows 200ms ease, visibility 0s linear 200ms;
        }
        .fq-item.is-open .fq-panel { grid-template-rows: 1fr; visibility: visible; transition-delay: 0s; }
        .fq-panel__inner { overflow: hidden; }
        .fq-panel p { margin: 0; padding: 0 44px 18px 4px; font-size: 15px; line-height: 1.6; color: var(--io-text-muted); }

        /* Panel diagnóstico: soft, sin card pesada */
        .fq-promo {
          position: relative; overflow: hidden; padding: 30px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), var(--io-bg-soft);
        }
        .fq-eyebrow {
          display: flex; align-items: center; gap: 10px; margin: 0 0 18px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--io-action-hover);
        }
        .fq-eyebrow__line { width: 22px; height: 3px; border-radius: 2px; background: var(--io-accent); flex: none; }
        .fq-promo__title { font-size: 26px; font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 16px; }
        .fq-promo__copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 24px; }

        .fq-checks { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 11px; }
        .fq-checks li { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--io-text); }
        .fq-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 18px; height: 18px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        .fq-flow { display: flex; flex-direction: column; gap: 6px; margin: 0 0 28px; }
        .fq-flow__row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
        .fq-chip {
          padding: 2px 8px; font-size: 11.5px; font-weight: 600; line-height: 1.4; color: var(--io-text-muted);
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
        }
        .fq-chip--blue { color: var(--io-action-hover); border-color: rgba(51, 111, 230, 0.35); }
        .fq-chip--peach { color: var(--io-text); border-color: rgba(244, 162, 124, 0.8); background: rgba(244, 162, 124, 0.14); }
        .fq-flow__arrow { color: var(--io-text-muted); flex: none; }

        .fq-cta {
          display: flex; align-items: center; justify-content: center; padding: 12px 24px; font-size: 15px; font-weight: 600;
          color: #fff; text-decoration: none; background: var(--io-action); border: 1.5px solid var(--io-action);
          border-radius: var(--io-radius-md); transition: background-color 180ms ease, border-color 180ms ease;
          margin-left: auto; width: fit-content;
        }
        .fq-cta:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .fq-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        /* Tablet: FAQ y panel en stack */
        @media (max-width: 1023px) {
          .fq-section { padding: 48px 20px 0; }
          .fq-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        /* Mobile: panel compacto (sin microvisual) */
        @media (max-width: 767px) {
          .fq-section { padding: 40px 20px 0; }
          .fq-grid { gap: 32px; }
          .fq-btn__q { font-size: 15px; }
          .fq-panel p { padding-right: 8px; font-size: 14px; }
          .fq-promo { padding: 24px 20px; }
          .fq-promo__title { font-size: 22px; }
          .fq-promo__copy { font-size: 14px; margin-bottom: 14px; }
          .fq-checks { margin-bottom: 18px; }
          .fq-checks li { font-size: 14px; }
          .fq-flow { display: none; }
          .fq-cta { width: 100%; }
        }
        @media (max-width: 375px) { .fq-section { padding-left: 16px; padding-right: 16px; } }

        @media (prefers-reduced-motion: reduce) {
          .fq-panel, .fq-btn__q, .fq-cta { transition: none; }
        }
      `}</style>
    </section>
  );
}
