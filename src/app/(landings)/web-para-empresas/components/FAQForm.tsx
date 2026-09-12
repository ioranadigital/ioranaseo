'use client';

import { useState } from 'react';

export default function FAQForm() {
  const [expandedId, setExpandedId] = useState<number | null>(0);
  const [formStep, setFormStep] = useState(0);

  const faqs = [
    {
      id: 0,
      question: '¿Cuánto tiempo tarda en estar lista la web?',
      answer:
        'Habitualmente entre 4 y 6 semanas, dependiendo del alcance del proyecto y de los tiempos de validación.',
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
      answer:
        'Sí. La arquitectura y la optimización inicial se plantean desde el principio.',
    },
    {
      id: 3,
      question: '¿La web y el dominio serán míos?',
      answer:
        'Sí. El dominio y los activos del proyecto permanecen bajo control del cliente.',
    },
    {
      id: 4,
      question: '¿Podré gestionar la web yo mismo?',
      answer:
        'Sí. Incluimos formación básica para realizar cambios habituales.',
    },
    {
      id: 5,
      question: '¿Qué ocurre después del lanzamiento?',
      answer:
        'Puedes gestionarla por tu cuenta, contratar mantenimiento o continuar trabajando con Iorana SEO en captación y crecimiento.',
    },
  ];

  const formOptions = [
    'Crear una nueva web',
    'Renovar mi web actual',
    'Mi web no consigue resultados',
    'No estoy seguro',
  ];

  return (
    <section
      className="faq-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        className="faq-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: FAQ */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              margin: '0 0 40px 0',
            }}
          >
            Preguntas frecuentes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                style={{
                  borderBottom: '1px solid var(--io-border)',
                  paddingBottom: '16px',
                }}
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--io-text)',
                      margin: '0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                    <span
                      style={{
                        fontSize: '18px',
                        color: 'var(--io-action)',
                        flexShrink: 0,
                        transform:
                          expandedId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      ▼
                    </span>
                  </h3>
                </button>

                {expandedId === faq.id && (
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'var(--io-text-muted)',
                      margin: '12px 0 0 0',
                      paddingTop: '12px',
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="form-box"
          style={{
            backgroundColor: 'white',
            padding: '48px',
            borderRadius: 'var(--io-radius-md)',
            border: '2px solid var(--io-action)',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.1)',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--io-action)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-accent)',
              }}
            />
            Cuéntanos tu proyecto
          </div>

          <h2
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--io-text)',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            Analizamos tu proyecto sin compromiso
          </h2>

          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--io-text-muted)',
              margin: '0 0 40px 0',
            }}
          >
            Responde unas preguntas breves y podremos orientarte sobre la
            solución que mejor encaja.
          </p>

          {/* Progress */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--io-text-muted)',
              gap: '8px',
            }}
          >
            {[1, 2, 3, 4].map((step) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor:
                      step <= formStep + 1 ? 'var(--io-action)' : 'var(--io-border)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    style={{
                      width: '8px',
                      height: '1px',
                      backgroundColor: 'var(--io-border)',
                      margin: '0 6px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {formStep === 0 && (
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--io-text)',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                ¿Qué necesitas?
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {formOptions.map((option) => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 18px',
                      backgroundColor: 'var(--io-bg-soft)',
                      borderRadius: 'var(--io-radius-md)',
                      border: '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minHeight: '52px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--io-action)';
                      e.currentTarget.style.backgroundColor = 'var(--io-bg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = 'var(--io-bg-soft)';
                    }}
                  >
                    <input
                      type="radio"
                      name="need"
                      value={option}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        flexShrink: 0,
                        accentColor: 'var(--io-action)',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: 'var(--io-text)',
                        lineHeight: 1.4,
                      }}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              <button
                onClick={() => setFormStep(1)}
                style={{
                  marginTop: '40px',
                  width: '100%',
                  padding: '16px 24px',
                  backgroundColor: 'var(--io-action)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: 'var(--io-radius-md)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--io-action)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
                }}
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Steps 2-4: Placeholder */}
          {formStep > 0 && (
            <div
              style={{
                padding: '24px',
                backgroundColor: 'white',
                borderRadius: 'var(--io-radius-md)',
                textAlign: 'center',
                color: 'var(--io-text-muted)',
                fontSize: '14px',
              }}
            >
              Paso {formStep + 1}/4 — Formulario multistep a completar
            </div>
          )}
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 1024px) {
            .faq-section {
              padding: 60px 20px;
            }
            .faq-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
          }
          @media (max-width: 768px) {
            .faq-section {
              padding: 40px 20px;
            }
            .faq-grid {
              gap: 40px !important;
            }
            .form-box {
              padding: 32px 24px !important;
            }
          }
          @media (max-width: 430px) {
            .faq-section {
              padding: 32px 20px;
            }
            .faq-grid {
              gap: 32px !important;
            }
            .form-box {
              padding: 24px 16px !important;
              border: 1px solid var(--io-action) !important;
            }
          }
          @media (max-width: 375px) {
            .faq-section {
              padding: 32px 16px;
            }
            .faq-grid {
              gap: 28px !important;
            }
            .form-box {
              padding: 20px 14px !important;
              border: 1px solid var(--io-action) !important;
            }
          }
        `}
      </style>
    </section>
  );
}
