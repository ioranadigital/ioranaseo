'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAnalisis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(0);

  const faqs = [
    {
      q: '¿Tengo que contratar todas las soluciones?',
      a: 'No. Empezamos por la necesidad que tenga mayor sentido para tu negocio y añadimos otras capacidades solo cuando pueden aportar valor.',
    },
    {
      q: '¿Por dónde debería empezar?',
      a: 'Depende de tu situación actual. Analizamos tu web, visibilidad, captación y medición para identificar dónde existe la mayor oportunidad de mejora.',
    },
    {
      q: '¿Puedo empezar solo con SEO?',
      a: 'Sí. Podemos trabajar una única capacidad si es el punto de partida adecuado para tu negocio.',
    },
    {
      q: '¿Trabajáis Google Ads y Meta Ads?',
      a: 'Sí. Diseñamos y optimizamos campañas en Google Ads y Meta Ads cuando la publicidad puede acelerar la captación.',
    },
    {
      q: '¿Podéis mejorar una web existente?',
      a: 'Sí. No siempre es necesario crear una nueva web. Podemos analizar la actual y mejorar los puntos que estén limitando su rendimiento.',
    },
    {
      q: '¿Cómo medís los resultados?',
      a: 'Definimos qué queremos conseguir y configuramos la medición necesaria para saber qué está generando tráfico, contactos y oportunidades.',
    },
  ];

  const opciones = [
    {
      titulo: 'Necesito una web',
      desc: 'Quiero crearla desde cero o renovar la actual.',
    },
    {
      titulo: 'Quiero que me encuentren más',
      desc: 'Necesito mejorar mi visibilidad en Google.',
    },
    {
      titulo: 'Quiero conseguir más clientes',
      desc: 'Quiero generar más oportunidades.',
    },
    {
      titulo: 'No estoy seguro',
      desc: 'Necesito orientación para saber por dónde empezar.',
    },
  ];

  return (
    <section
      id="analisis"
      className="faq-analisis-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'flex-start',
        }}
        className="faq-grid"
      >
        {/* FAQ */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 32px 0',
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
                      fontSize: '14px',
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

        {/* Análisis Inicial */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--io-action)',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Análisis inicial
          </div>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'var(--io-text)',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            Cuéntanos qué quieres mejorar
          </h3>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              lineHeight: 1.6,
            }}
          >
            Responde unas preguntas breves y te ayudaremos a identificar qué necesita tu negocio.
          </p>

          {/* Progress */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '32px',
              fontSize: '12px',
              color: 'var(--io-text-muted)',
              fontWeight: 600,
            }}
          >
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                style={{
                  flex: 1,
                  height: '4px',
                  backgroundColor:
                    step <= formStep + 1 ? 'var(--io-action)' : 'var(--io-border)',
                  borderRadius: '2px',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </div>

          {/* Question */}
          {formStep === 0 && (
            <div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--io-text)',
                  margin: '0 0 20px 0',
                }}
              >
                ¿Qué necesitas mejorar?
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {opciones.map((opcion, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFormStep(1)}
                    style={{
                      padding: '16px',
                      backgroundColor: 'white',
                      border: '1.5px solid var(--io-border)',
                      borderRadius: 'var(--io-radius-md)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--io-action)';
                      e.currentTarget.style.backgroundColor = 'var(--io-bg-soft)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--io-border)';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--io-text)',
                        marginBottom: '4px',
                      }}
                    >
                      {opcion.titulo}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--io-text-muted)',
                      }}
                    >
                      {opcion.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {formStep === 1 && (
            <div style={{ textAlign: 'center', color: 'var(--io-text-muted)' }}>
              <p>Pregunta 2 de 4</p>
              <p>Próximamente más pasos...</p>
            </div>
          )}

          {/* CTA */}
          {formStep === 0 && (
            <div
              style={{
                marginTop: '24px',
                fontSize: '13px',
                color: 'var(--io-text-muted)',
              }}
            >
              Continuar →
            </div>
          )}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (min-width: 1024px) {
            .faq-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 60px !important;
            }
          }

          @media (max-width: 1023px) {
            .faq-analisis-section {
              padding: 60px 20px;
            }
            .faq-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .faq-analisis-section {
              padding: 40px 20px;
            }
            .faq-grid {
              gap: 32px !important;
            }
          }

          @media (max-width: 430px) {
            .faq-analisis-section {
              padding: 32px 20px;
            }
          }

          @media (max-width: 375px) {
            .faq-analisis-section {
              padding: 32px 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
