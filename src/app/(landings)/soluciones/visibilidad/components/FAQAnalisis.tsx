'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: '¿Qué diferencia hay entre SEO, SEO Local y GEO?',
    a: 'El SEO mejora tu posición en los resultados generales de Google. El SEO Local se centra en que te encuentren clientes de tu zona, principalmente a través de Maps y tu ficha de Google Business Profile. El GEO trabaja tu presencia para que los asistentes de inteligencia artificial puedan identificar y citar tu negocio en sus respuestas.',
  },
  {
    q: '¿Necesito SEO Local si trabajo en toda España?',
    a: 'Depende de tu modelo de negocio. Si atiendes clientes en una zona concreta o tienes ubicación física, el SEO Local es clave. Si trabajas online sin limitación geográfica, el SEO general suele tener más peso. Lo valoramos en el diagnóstico inicial.',
  },
  {
    q: '¿Mi empresa puede aparecer en asistentes de IA?',
    a: 'Podemos optimizar la información y los contenidos de tu negocio para facilitar que los asistentes de IA la identifiquen como fuente relevante. No podemos garantizar apariciones o recomendaciones concretas en herramientas como ChatGPT, Gemini o Perplexity, ya que no dependen de nosotros.',
  },
  {
    q: '¿Cuánto tarda en mejorar mi visibilidad?',
    a: 'Depende del punto de partida y la competencia de tu sector. Es una estrategia progresiva: los primeros cambios se aplican de inmediato y los resultados se consolidan en las semanas y meses siguientes.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'El coste depende del alcance (SEO, SEO Local, GEO o una combinación) y de la situación de partida de tu negocio. Hacemos un diagnóstico previo para ajustar la propuesta a lo que realmente necesitas.',
  },
];

export default function FAQAnalisis() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="va-section">
      <div className="va-container">
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

      <style>{`
        .va-section { padding: 56px 20px 72px; background-color: var(--io-bg); }
        .va-container { max-width: 760px; margin: 0 auto; }
        .va-title { font-size: clamp(26px, 3.2vw, 34px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 24px; text-align: center; }

        .va-list { border-top: 1px solid var(--io-border); }
        .va-item { border-bottom: 1px solid var(--io-border); }
        .va-btn {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 18px 4px;
          text-align: left; font-family: inherit; cursor: pointer; background: none; border: none; color: var(--io-text);
        }
        .va-btn:hover .va-btn__q { color: var(--io-action-hover); }
        .va-btn:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; border-radius: 4px; }
        .va-btn__q { font-size: 15.5px; font-weight: 600; line-height: 1.4; transition: color 150ms ease; }
        .va-btn__icon { flex: none; font-size: 18px; color: var(--io-action); line-height: 1; }
        .va-answer { margin: 0; padding: 0 44px 20px 4px; font-size: 15px; line-height: 1.65; color: var(--io-text-muted); }

        @media (max-width: 767px) {
          .va-section { padding: 40px 20px 56px; }
          .va-btn__q { font-size: 14.5px; }
          .va-answer { padding-right: 8px; font-size: 14px; }
        }
        @media (max-width: 430px) { .va-section { padding: 32px 16px 48px; } }
      `}</style>
    </section>
  );
}
