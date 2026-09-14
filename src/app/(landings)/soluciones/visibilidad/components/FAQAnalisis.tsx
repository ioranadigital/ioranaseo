'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAnalisis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(0);

  const faqs = [
    {
      q: '¿Cuánto tiempo tarda en verse el resultado del SEO?',
      a: 'Depende del punto de partida, la competencia y el tipo de búsqueda. El SEO es una estrategia progresiva y los resultados evolucionan a medida que mejoramos la presencia y Google procesa los cambios.',
    },
    {
      q: '¿Necesito una web nueva para posicionar?',
      a: 'No necesariamente. Primero analizamos la web actual para determinar si puede mejorarse o si existen limitaciones que justifiquen un rediseño.',
    },
    {
      q: '¿Qué diferencia hay entre SEO y SEO Local?',
      a: 'El SEO trabaja la visibilidad general en buscadores. El SEO Local se concentra en búsquedas relacionadas con una ubicación, Google Maps y negocios cercanos.',
    },
    {
      q: '¿Gestionáis también la ficha de Google?',
      a: 'Sí. Podemos optimizar Google Business Profile, categorías, servicios, contenidos, reseñas y otros elementos relacionados con la presencia local.',
    },
    {
      q: '¿También podéis crear los contenidos?',
      a: 'Sí. Podemos trabajar la investigación, planificación, redacción y optimización de contenidos orientados a búsquedas relevantes.',
    },
    {
      q: '¿Cómo medís los resultados?',
      a: 'Analizamos visibilidad, consultas, tráfico, comportamiento y conversiones para entender qué está funcionando y dónde existen nuevas oportunidades.',
    },
  ];

  const opciones = [
    {
      titulo: 'Quiero aparecer más en Google',
      desc: 'Necesito mejorar mi posicionamiento.',
    },
    {
      titulo: 'Quiero mejorar mi visibilidad local',
      desc: 'Quiero que me encuentren en mi zona.',
    },
    {
      titulo: 'Quiero atraer tráfico más cualificado',
      desc: 'Necesito búsquedas con mayor intención.',
    },
    {
      titulo: 'No lo tengo claro',
      desc: 'Necesito orientación.',
    },
  ];

  return (
    <section
      id="analisis"
      className="faq-analisis-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
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
            backgroundColor: 'var(--io-bg-soft)',
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
            Responde unas preguntas breves y te ayudaremos a identificar el
            mejor punto de partida.
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
