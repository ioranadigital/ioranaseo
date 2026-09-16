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
            gap: '28px',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '28px' }}>
                <div
                  style={{
                    flex: '1 1 280px',
                    maxWidth: '300px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Icon circle - Enhanced visibility */}
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-bg-soft)',
                      border: '2.5px solid var(--io-action)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      color: 'var(--io-action)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Title - Enhanced hierarchy */}
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: 'var(--io-text)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description - Better spacing */}
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      fontWeight: 500,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connector line - Secondary element */}
                {index < steps.length - 1 && (
                  <div
                    className="presencia-arrow"
                    style={{
                      fontSize: '24px',
                      color: 'var(--io-action)',
                      flex: '0 0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '24px',
                      opacity: 0.35,
                      fontWeight: 600,
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

          /* Tablet 768px - 3 columnas horizontales con arrows */
          @media (min-width: 768px) and (max-width: 1023px) {
            .presencia-section {
              padding: 40px 20px;
            }
            .presencia-flow {
              gap: 16px !important;
              flex-wrap: nowrap !important;
            }
            .presencia-flow > div {
              display: flex;
              align-items: flex-start;
              gap: 16px;
            }
            .presencia-arrow {
              display: flex !important;
              margin-top: 24px !important;
              font-size: 28px !important;
            }
          }

          @media (max-width: 767px) {
            .presencia-section {
              padding: 40px 20px;
            }
            .presencia-flow {
              gap: 12px !important;
              flex-wrap: wrap !important;
            }
            .presencia-arrow {
              display: none !important;
            }
            .presencia-section > div > div:first-child {
              margin-bottom: 32px !important;
            }
          }

          @media (max-width: 430px) {
            .presencia-section {
              padding: 32px 20px;
            }
            .presencia-section > div > div:first-child {
              margin-bottom: 24px !important;
            }
          }

          @media (max-width: 375px) {
            .presencia-section {
              padding: 32px 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
