'use client';

import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function NuestroSistema() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Web',
      claim: 'Una base preparada para captar.',
      descripcion:
        'Creamos webs y landing pages claras, rápidas y orientadas a convertir visitas en oportunidades.',
      icon: Monitor,
    },
    {
      numero: '02',
      titulo: 'Visibilidad',
      claim: 'Aparece cuando te buscan.',
      descripcion:
        'Trabajamos SEO, SEO Local, Google Maps y contenidos para mejorar tu presencia en buscadores.',
      icon: Search,
    },
    {
      numero: '03',
      titulo: 'Campañas',
      claim: 'Atrae demanda cualificada.',
      descripcion:
        'Utilizamos Google Ads y Meta Ads para llegar a personas que pueden convertirse en clientes.',
      icon: Megaphone,
    },
    {
      numero: '04',
      titulo: 'Conversión',
      claim: 'Convierte tráfico en oportunidades.',
      descripcion:
        'Medimos, analizamos y mejoramos la experiencia para conseguir más contactos y mejores resultados.',
      icon: Target,
    },
  ];

  return (
    <section
      className="sistema-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
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
            Nuestro sistema de captación
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Conectamos las piezas que hacen que tu presencia digital genere resultados.
          </p>
        </div>

        {/* 4-Step System Grid */}
        <div
          className="sistema-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative',
          }}
        >
          {/* Horizontal connector line - only on desktop */}
          <div
            style={{
              position: 'absolute',
              top: '80px',
              left: '12.5%',
              right: '12.5%',
              height: '1.5px',
              backgroundColor: 'var(--io-action)',
              zIndex: 0,
              opacity: 0.2,
            }}
            className="sistema-connector-line"
          />

          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={paso.numero}
                style={{
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Step card */}
                <div
                  style={{
                    padding: '32px 24px',
                    backgroundColor: 'white',
                    borderRadius: 'var(--io-radius-md)',
                    border: '1.5px solid var(--io-border)',
                    textAlign: 'center',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-action)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 700,
                      border: '2px solid white',
                    }}
                  >
                    {paso.numero}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-bg-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      marginTop: '8px',
                      color: 'var(--io-action)',
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                      margin: '0 0 8px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {paso.titulo}
                  </h3>

                  {/* Claim */}
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--io-accent)',
                      marginBottom: '12px',
                    }}
                  >
                    {paso.claim}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    {paso.descripcion}
                  </p>
                </div>

                {/* Arrow connector - only between items on desktop */}
                {index < pasos.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '80px',
                      left: '100%',
                      width: '24px',
                      textAlign: 'center',
                      color: 'var(--io-action)',
                      fontSize: '20px',
                      opacity: 0.3,
                      zIndex: 2,
                    }}
                    className="sistema-connector-arrow"
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          /* Decorative desktop-only connectors: hidden by default, shown at 1024px+ */
          .sistema-connector-line,
          .sistema-connector-arrow {
            display: none;
          }

          /* Desktop: 4 columns */
          @media (min-width: 1024px) {
            .sistema-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 24px !important;
            }
            .sistema-connector-line {
              display: block;
            }
            .sistema-connector-arrow {
              display: block;
            }
          }

          /* Tablet: 2×2 */
          @media (min-width: 768px) and (max-width: 1023px) {
            .sistema-section {
              padding: 60px 20px;
            }
            .sistema-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }
          }

          /* Mobile large: 1 column */
          @media (min-width: 431px) and (max-width: 767px) {
            .sistema-section {
              padding: 40px 20px;
            }
            .sistema-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }

          /* Mobile small: 1 column */
          @media (max-width: 430px) {
            .sistema-section {
              padding: 32px 20px;
            }
            .sistema-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }

          @media (max-width: 375px) {
            .sistema-section {
              padding: 32px 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
