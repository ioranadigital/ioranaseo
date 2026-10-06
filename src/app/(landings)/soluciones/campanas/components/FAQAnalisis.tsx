'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const FAQS = [
  {
    q: '¿Qué presupuesto necesito?',
    a: 'Depende del mercado, la competencia y el objetivo. Antes de lanzar una campaña definimos un presupuesto que permita obtener datos suficientes y tenga sentido para tu negocio.',
  },
  {
    q: '¿En qué plataformas trabajáis?',
    a: 'Google Ads y Meta Ads. Seleccionamos el canal o la combinación de canales según el objetivo, la audiencia y el proceso de compra.',
  },
  {
    q: '¿Cuánto tiempo se tarda en ver resultados?',
    a: 'Las campañas pueden generar tráfico y datos desde el lanzamiento, pero necesitan tiempo y volumen suficiente para analizar resultados y optimizar correctamente.',
  },
  {
    q: '¿Cómo sé que las campañas funcionan?',
    a: 'Configuramos las conversiones y analizamos indicadores relevantes como contactos y oportunidades para entender qué está funcionando y dónde ajustar.',
  },
];

const BENEFICIOS = ['Sin acceso a tus cuentas', 'Detectamos prioridades claras', 'Diagnóstico por email'];

export default function FAQAnalisis() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="cf-section">
      <div className="cf-grid">
        <div className="cf-left">
          <h2 className="cf-title">Preguntas frecuentes</h2>
          <div className="cf-list">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="cf-item">
                  <button
                    type="button"
                    className="cf-btn"
                    aria-expanded={isOpen}
                    aria-controls={`cf-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="cf-btn__q">{faq.q}</span>
                    <span className="cf-btn__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <p id={`cf-panel-${i}`} className="cf-answer">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="cf-promo" aria-labelledby="cf-promo-title">
          <p className="cf-eyebrow">
            <span className="cf-eyebrow__line" aria-hidden="true" />
            Diagnóstico digital gratuito
          </p>
          <h3 id="cf-promo-title" className="cf-promo__title">
            ¿Quieres mejorar tus resultados?
          </h3>
          <p className="cf-promo__copy">
            Analizamos tu situación y te proponemos la mejor estrategia de campañas para tu negocio.
          </p>
          <ul className="cf-checks">
            {BENEFICIOS.map((b) => (
              <li key={b}>
                <span className="cf-check" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link href="/diagnostico/" className="cf-cta">
            Empezar diagnóstico
          </Link>
        </aside>
      </div>

      <style>{`
        .cf-section { padding: 56px 20px 12px; background-color: var(--io-bg); }
        .cf-grid { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 58fr) minmax(0, 42fr); gap: 56px; align-items: start; }
        .cf-title { font-size: clamp(26px, 3.2vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 20px; }

        .cf-list { border-top: 1px solid var(--io-border); }
        .cf-item { border-bottom: 1px solid var(--io-border); }
        .cf-btn {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 16px 4px;
          text-align: left; font-family: inherit; cursor: pointer; background: none; border: none; color: var(--io-text);
        }
        .cf-btn:hover .cf-btn__q { color: var(--io-action-hover); }
        .cf-btn:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; border-radius: 4px; }
        .cf-btn__q { font-size: 15px; font-weight: 600; line-height: 1.4; transition: color 150ms ease; }
        .cf-btn__icon { flex: none; font-size: 18px; color: var(--io-action); line-height: 1; }
        .cf-answer { margin: 0; padding: 0 44px 18px 4px; font-size: 15px; line-height: 1.6; color: var(--io-text-muted); }

        .cf-promo {
          position: relative; overflow: hidden; padding: 30px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), var(--io-bg-soft);
        }
        .cf-eyebrow {
          display: flex; align-items: center; gap: 10px; margin: 0 0 14px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--io-action-hover);
        }
        .cf-eyebrow__line { width: 22px; height: 3px; border-radius: 2px; background: var(--io-accent); flex: none; }
        .cf-promo__title { font-size: 24px; font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 12px; }
        .cf-promo__copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 18px; }

        .cf-checks { list-style: none; margin: 0 0 22px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .cf-checks li { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--io-text); }
        .cf-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 18px; height: 18px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        .cf-cta {
          display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 12px 24px;
          font-size: 15px; font-weight: 600; color: #fff; text-decoration: none; background: var(--io-action);
          border: 1.5px solid var(--io-action); border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease;
        }
        .cf-cta:hover, .cf-cta:focus-visible { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .cf-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        @media (max-width: 1023px) {
          .cf-section { padding: 48px 20px 12px; }
          .cf-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 767px) {
          .cf-section { padding: 40px 20px 0; }
          .cf-grid { gap: 28px; }
          .cf-btn__q { font-size: 14.5px; }
          .cf-answer { padding-right: 8px; font-size: 14px; }
          .cf-promo { padding: 24px 20px; }
          .cf-promo__title { font-size: 21px; }
          .cf-promo__copy { font-size: 14px; margin-bottom: 16px; }
        }
        @media (max-width: 430px) { .cf-section { padding: 32px 16px 0; } }
      `}</style>
    </section>
  );
}
