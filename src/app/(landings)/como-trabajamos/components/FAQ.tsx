'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Trabajáis con todo tipo de negocios?',
      a: 'Trabajamos principalmente con pequeños negocios y PYMEs donde podemos aportar valor en presencia digital, captación y crecimiento.',
    },
    {
      q: '¿Cuánto tiempo tarda en verse una mejora?',
      a: 'Depende del punto de partida y de las acciones necesarias. Algunas mejoras pueden implementarse rápidamente y otras requieren un trabajo progresivo.',
    },
    {
      q: '¿Qué pasa si ya tengo una web?',
      a: 'No partimos de la idea de sustituir lo que ya tienes. Primero analizamos si puede mejorarse y qué está limitando actualmente sus resultados.',
    },
    {
      q: '¿Cómo decidís por dónde empezar?',
      a: 'Analizamos tu situación, tus objetivos y los datos disponibles para identificar las oportunidades con mayor impacto y priorizarlas.',
    },
    {
      q: '¿Puedo contratar solo una parte del servicio?',
      a: 'Sí. Podemos trabajar una necesidad concreta cuando está claramente identificada, aunque siempre analizamos cómo encaja con el resto de tu captación digital.',
    },
    {
      q: '¿Qué diferencia a Iorana SEO de otras agencias?',
      a: 'No empezamos recomendando un servicio concreto. Primero entendemos el problema y después conectamos las capacidades que realmente necesita el proyecto.',
    },
  ];

  return (
    <section
      className="ct-faq-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 700,
            color: 'var(--io-text)',
            lineHeight: 1.2,
            margin: '0 0 32px 0',
            textAlign: 'center',
          }}
        >
          Preguntas frecuentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                overflow: 'hidden',
                backgroundColor: 'white',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--io-bg-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-expanded={openFaq === index}
              >
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--io-action)',
                    transition: 'transform 0.3s',
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--io-text)',
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
              </button>

              {openFaq === index && (
                <div
                  style={{
                    padding: '16px',
                    paddingTop: '0',
                    borderTop: '1px solid var(--io-border)',
                    backgroundColor: 'white',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
