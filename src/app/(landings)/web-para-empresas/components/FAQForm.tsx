'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const FAQS = [
  {
    id: 0,
    question: '¿Cuánto tiempo tarda en estar lista la web?',
    answer: 'Habitualmente entre 4 y 6 semanas, dependiendo del alcance del proyecto y de los tiempos de validación.',
  },
  {
    id: 1,
    question: '¿Qué necesito para empezar?',
    answer:
      'Necesitaremos conocer tu negocio, servicios, objetivos y disponer de los materiales y accesos necesarios. Te guiamos durante todo el proceso.',
  },
  {
    id: 2,
    question: '¿La web estará preparada para SEO?',
    answer: 'Sí. La arquitectura y la optimización inicial se plantean desde el principio.',
  },
  {
    id: 3,
    question: '¿La web y el dominio serán míos?',
    answer: 'Sí. El dominio y los activos del proyecto permanecen bajo control del cliente.',
  },
  {
    id: 4,
    question: '¿Podré gestionar la web yo mismo?',
    answer: 'Sí. Incluimos formación básica para realizar cambios habituales.',
  },
  {
    id: 5,
    question: '¿Qué ocurre después del lanzamiento?',
    answer:
      'Puedes gestionarla por tu cuenta, contratar mantenimiento o continuar trabajando con Iorana SEO en captación y crecimiento.',
  },
];

const BENEFICIOS = ['Web y estructura', 'SEO básico', 'Conversión', 'Diagnóstico por email'];

export default function FAQForm() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section className="faq-section wf-section">
      <div className="wf-grid">
        {/* Left: FAQ */}
        <div>
          <h2 className="wf-title">Preguntas frecuentes</h2>
          <div className="wf-list">
            {FAQS.map((faq) => {
              const open = expandedId === faq.id;
              return (
                <div key={faq.id} className="wf-item">
                  <button
                    type="button"
                    className="wf-btn"
                    aria-expanded={open}
                    aria-controls={`wf-panel-${faq.id}`}
                    onClick={() => setExpandedId(open ? null : faq.id)}
                  >
                    <span className="wf-btn__q">{faq.question}</span>
                    <span className="wf-btn__icon" aria-hidden="true">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <p id={`wf-panel-${faq.id}`} className="wf-answer">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: promoción del diagnóstico real (el wizard vive en /diagnostico/) */}
        <aside className="wf-promo" aria-labelledby="wf-promo-title">
          <p className="wf-eyebrow">
            <span className="wf-eyebrow__line" aria-hidden="true" />
            Diagnóstico digital gratuito
          </p>
          <h3 id="wf-promo-title" className="wf-promo__title">
            Descubre qué debería mejorar tu web primero.
          </h3>
          <p className="wf-promo__copy">
            Analizamos tu web y tu presencia digital para detectar las principales oportunidades de mejora.
          </p>

          <ul className="wf-checks">
            {BENEFICIOS.map((b) => (
              <li key={b}>
                <span className="wf-check" aria-hidden="true">
                  <Check size={11} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <Link href="/diagnostico/" className="wf-cta">
            Empezar diagnóstico
          </Link>
        </aside>
      </div>

      <style>{`
        .wf-section { padding: 56px 20px; background-color: #fff; }
        .wf-grid {
          max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
          gap: 56px; align-items: start;
        }
        .wf-title { font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 28px; }

        .wf-list { border-top: 1px solid var(--io-border); }
        .wf-item { border-bottom: 1px solid var(--io-border); }
        .wf-btn {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 16px 4px;
          text-align: left; font-family: inherit; cursor: pointer; background: none; border: none; color: var(--io-text);
        }
        .wf-btn:hover .wf-btn__q { color: var(--io-action-hover); }
        .wf-btn:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; border-radius: 4px; }
        .wf-btn__q { font-size: 15px; font-weight: 600; line-height: 1.4; transition: color 150ms ease; }
        .wf-btn__icon { flex: none; font-size: 18px; color: var(--io-action); line-height: 1; }
        .wf-answer { margin: 0; padding: 0 44px 18px 4px; font-size: 15px; line-height: 1.6; color: var(--io-text-muted); }

        .wf-promo {
          position: relative; overflow: hidden; padding: 32px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), var(--io-bg-soft);
        }
        .wf-eyebrow {
          display: flex; align-items: center; gap: 10px; margin: 0 0 14px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--io-action-hover);
        }
        .wf-eyebrow__line { width: 22px; height: 3px; border-radius: 2px; background: var(--io-accent); flex: none; }
        .wf-promo__title { font-size: 24px; font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 12px; }
        .wf-promo__copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 18px; }

        .wf-checks { list-style: none; margin: 0 0 22px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .wf-checks li { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--io-text); }
        .wf-check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 18px; height: 18px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        .wf-cta {
          display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 12px 24px;
          font-size: 15px; font-weight: 600; color: #fff; text-decoration: none; background: var(--io-action);
          border: 1.5px solid var(--io-action); border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease;
        }
        .wf-cta:hover, .wf-cta:focus-visible { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .wf-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        @media (max-width: 1023px) {
          .wf-section { padding: 48px 20px; }
          .wf-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 767px) {
          .wf-section { padding: 40px 20px; }
          .wf-grid { gap: 28px; }
          .wf-title { margin-bottom: 20px; }
          .wf-btn__q { font-size: 14.5px; }
          .wf-answer { padding-right: 8px; font-size: 14px; }
          .wf-promo { padding: 24px 20px; }
          .wf-promo__title { font-size: 21px; }
          .wf-promo__copy { font-size: 14px; margin-bottom: 16px; }
        }
        @media (max-width: 375px) { .wf-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
