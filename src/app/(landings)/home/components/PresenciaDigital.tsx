'use client';

import { Search, FileText, Users } from 'lucide-react';

export default function PresenciaDigital() {
  const steps = [
    {
      icon: Search,
      title: 'Te encuentran',
      description: 'Trabajamos tu visibilidad para aparecer cuando tus clientes buscan lo que ofreces.',
    },
    {
      icon: FileText,
      title: 'Te entienden',
      description: 'Organizamos tu presencia digital para comunicar con claridad qué haces y por qué elegirte.',
    },
    {
      icon: Users,
      title: 'Contactan',
      description: 'Diseñamos recorridos, campañas y puntos de contacto para generar oportunidades.',
    },
  ];

  return (
    <section
      className="presencia-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
            }}
          >
            De la presencia digital a las oportunidades
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            No se trata solo de estar online. Se trata de convertir esa presencia en negocio.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div
          className="presencia-flow"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title}>
                <div
                  style={{
                    flex: '1 1 280px',
                    maxWidth: '320px',
                    textAlign: 'center',
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-bg-soft)',
                      border: '2px solid var(--io-action)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'var(--io-action)',
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'var(--io-text-muted)',
                      margin: '0',
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow - only between steps */}
                {index < steps.length - 1 && (
                  <div
                    className="presencia-arrow"
                    style={{
                      fontSize: '28px',
                      color: 'var(--io-accent)',
                      flex: '0 0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                      opacity: 0.7,
                      fontWeight: 700,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 1024px) {
            .presencia-section {
              padding: 60px 20px;
            }
          }
          @media (max-width: 768px) {
            .presencia-section {
              padding: 40px 20px;
            }
            .presencia-flow {
              gap: 12px !important;
            }
          }
          @media (max-width: 430px) {
            .presencia-section {
              padding: 32px 20px;
            }
          }
          @media (max-width: 375px) {
            .presencia-section {
              padding: 32px 16px;
            }
          }
          @media (max-width: 767px) {
            .presencia-arrow {
              display: none !important;
            }
            .presencia-section > div > div:first-child {
              margin-bottom: 32px !important;
            }
          }
          @media (max-width: 430px) {
            .presencia-section > div > div:first-child {
              margin-bottom: 24px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
