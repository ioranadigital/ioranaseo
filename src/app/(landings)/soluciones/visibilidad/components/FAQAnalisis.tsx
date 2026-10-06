'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuánto tiempo tarda en verse resultados?',
    a: 'Depende del punto de partida y la competencia. El SEO es una estrategia progresiva: los primeros cambios se aplican de inmediato y los resultados se consolidan en las semanas y meses siguientes.',
  },
  {
    q: '¿Incluye la gestión de Google Business Profile?',
    a: 'Sí. Optimizamos categorías, servicios, contenidos y el resto de elementos de tu ficha para mejorar tu presencia local.',
  },
  {
    q: '¿Funciona si ya tengo una web?',
    a: 'Sí. Analizamos tu web actual para determinar si puede optimizarse o si existen limitaciones que conviene resolver primero.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Conocer tu negocio, tu zona de actuación y disponer de acceso a tu web y a tu ficha de Google. Te guiamos durante todo el proceso.',
  },
];

const BENEFICIOS = ['Sin acceso a tus cuentas', 'Detectamos prioridades claras', 'Diagnóstico por email'];

export default function FAQAnalisis() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="va-section">
      <div className="va-grid">
        <div className="va-left">
          <h2 className="va-title">Preguntas frecuentes</h2>
          <div className="va-list">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="va-item">
                  <button
                    type="button"
                    className="va-btn"
                    aria-expanded={isOpen}
                    aria-controls={`va-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="va-btn__q">{faq.q}</span>
                    <span className="va-btn__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <p id={`va-panel-${i}`} className="va-answer">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="va-promo" aria-labelledby="va-promo-title">
          <p className="va-eyebrow">
            <span className="va-eyebrow__line" aria-hidden="true" />
            Diagnóstico digital gratuito
          </p>
          <h3 id="va-promo-title" className="va-promo__title">
            Analizamos tu visibilidad actual
          </h3>
          <p className="va-promo__copy">
            Revisamos tu presencia digital y te indicamos las mejores oportunidades de mejora.
          </p>
          <ul className="va-checks">
            {BENEFICIOS.map((b) => (
              <li key={b}>
                <span className="va-check" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link href="/diagnostico/" className="va-cta">
            Empezar diagnóstico
          </Link>
        </aside>
      </div>

      <style>{`
        .va-section { padding: 56px 20px 12px; background-color: var(--io-bg); }
        .va-grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 58fr) minmax(0, 42fr); gap: 56px; align-items: start; }
        .va-title { font-size: clamp(26px, 3.2vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 20px; }

        .va-list { border-top: 1px solid var(--io-border); }
        .va-item { border-bottom: 1px solid var(--io-border); }
        .va-btn {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 16px 4px;
          text-align: left; font-family: inherit; cursor: pointer; background: none; border: none; color: var(--io-text);
        }
        .va-btn:hover .va-btn__q { color: var(--io-action-hover); }
        .va-btn:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; border-radius: 4px; }
        .va-btn__q { font-size: 15px; font-weight: 600; line-height: 1.4; transition: color 150ms ease; }
        .va-btn__icon { flex: none; font-size: 18px; color: var(--io-action); line-height: 1; }
        .va-answer { margin: 0; padding: 0 44px 18px 4px; font-size: 15px; line-height: 1.6; color: var(--io-text-muted); }

        .va-promo {
          position: relative; overflow: hidden; padding: 30px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), var(--io-bg-soft);
        }
        .va-eyebrow {
          display: flex; align-items: center; gap: 10px; margin: 0 0 14px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--io-action-hover);
        }
        .va-eyebrow__line { width: 22px; height: 3px; border-radius: 2px; background: var(--io-accent); flex: none; }
        .va-promo__title { font-size: 24px; font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 12px; }
        .va-promo__copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 18px; }

        .va-checks { list-style: none; margin: 0 0 22px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .va-checks li { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--io-text); }
        .va-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 18px; height: 18px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        .va-cta {
          display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 12px 24px;
          font-size: 15px; font-weight: 600; color: #fff; text-decoration: none; background: var(--io-action);
          border: 1.5px solid var(--io-action); border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease;
        }
        .va-cta:hover, .va-cta:focus-visible { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .va-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        @media (max-width: 1023px) {
          .va-section { padding: 48px 20px 12px; }
          .va-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 767px) {
          .va-section { padding: 40px 20px 0; }
          .va-grid { gap: 28px; }
          .va-btn__q { font-size: 14.5px; }
          .va-answer { padding-right: 8px; font-size: 14px; }
          .va-promo { padding: 24px 20px; }
          .va-promo__title { font-size: 21px; }
          .va-promo__copy { font-size: 14px; margin-bottom: 16px; }
        }
        @media (max-width: 430px) { .va-section { padding: 32px 16px 0; } }
      `}</style>
    </section>
  );
}
