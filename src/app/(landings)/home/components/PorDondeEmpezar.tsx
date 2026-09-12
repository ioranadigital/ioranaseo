'use client';

import Link from 'next/link';
import { Monitor, Users, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function PorDondeEmpezar() {
  const cards = [
    {
      id: 'web',
      titulo: 'Necesito una web',
      texto: 'Para crear una nueva presencia digital o relanzar la que ya tienes.',
      bullets: ['Nueva web', 'Rediseño', 'SEO inicial', 'Medición'],
      cta: 'Ver Web de Captación →',
      href: '/web-para-empresas',
      icon: Monitor,
      featured: false,
      gridArea: 'web',
    },
    {
      id: 'clientes',
      titulo: 'Quiero conseguir más clientes',
      texto: 'Para conectar visibilidad, campañas y conversión en un mismo sistema.',
      bullets: ['SEO', 'Campañas', 'Landing pages', 'Analytics', 'CRO'],
      cta: 'Analizar mi proyecto →',
      href: '#contacto',
      icon: Users,
      badge: 'RECOMENDADA',
      featured: true,
      gridArea: 'clientes',
    },
    {
      id: 'crecer',
      titulo: 'Quiero crecer de forma continua',
      texto: 'Para negocios que ya tienen una base digital y quieren seguir mejorando.',
      bullets: ['Visibilidad', 'Campañas', 'Optimización', 'Medición', 'Acompañamiento'],
      cta: 'Ver soluciones de crecimiento →',
      href: '#soluciones',
      icon: ChartNoAxesColumnIncreasing,
      featured: false,
      gridArea: 'crecer',
    },
  ];

  return (
    <section
      className="por-donde-section"
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
              margin: '0 0 16px 0',
            }}
          >
            ¿Por dónde quieres empezar?
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Elige el problema que quieres resolver. Nosotros te ayudamos a definir el resto.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="por-donde-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateAreas: '"web clientes crecer"',
            gap: '24px',
          }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  gridArea: card.gridArea,
                }}
                className="card-link"
              >
                <div
                  className="por-donde-card"
                  style={{
                    position: 'relative',
                    padding: '32px 24px',
                    backgroundColor: 'white',
                    borderRadius: 'var(--io-radius-md)',
                    border: card.featured ? '2px solid var(--io-action)' : '1.5px solid var(--io-border)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    minHeight: '380px',
                    boxShadow: card.featured
                      ? '0 8px 24px rgba(0, 0, 0, 0.1)'
                      : '0 2px 8px rgba(0, 0, 0, 0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--io-action)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = card.featured
                      ? 'var(--io-action)'
                      : 'var(--io-border)';
                    e.currentTarget.style.boxShadow = card.featured
                      ? '0 8px 24px rgba(0, 0, 0, 0.1)'
                      : '0 2px 8px rgba(0, 0, 0, 0.06)';
                  }}
                >
                  {/* Badge */}
                  {card.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '24px',
                        backgroundColor: 'var(--io-accent)',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {card.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--io-bg-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--io-action)',
                      flexShrink: 0,
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
                      margin: '0',
                      lineHeight: 1.2,
                    }}
                  >
                    {card.titulo}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.texto}
                  </p>

                  {/* Bullets */}
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '12px 0 0 0',
                      padding: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      flex: 1,
                    }}
                  >
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        style={{
                          fontSize: '13px',
                          color: 'var(--io-text-muted)',
                          paddingLeft: '20px',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--io-action)',
                            fontWeight: 600,
                          }}
                        >
                          •
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: card.featured ? 'white' : 'var(--io-action)',
                      backgroundColor: card.featured ? 'var(--io-action)' : 'transparent',
                      padding: card.featured ? '12px 16px' : '0',
                      borderRadius: card.featured ? 'var(--io-radius-md)' : '0',
                      marginTop: 'auto',
                      textAlign: card.featured ? 'center' : 'left',
                      transition: 'all 0.2s',
                    }}
                    className="cta-text"
                  >
                    {card.cta}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          /* Desktop 1024px+: Web | Clientes (center) | Crecer */
          @media (min-width: 1024px) {
            .por-donde-grid {
              grid-template-columns: 1fr 1fr 1fr !important;
              grid-template-areas: "web clientes crecer" !important;
              gap: 24px !important;
            }
          }

          /* Tablet 768-1023px: Clientes full-width, Web | Crecer below */
          @media (min-width: 768px) and (max-width: 1023px) {
            .por-donde-section {
              padding: 60px 20px;
            }
            .por-donde-grid {
              grid-template-columns: 1fr 1fr !important;
              grid-template-areas:
                "clientes clientes"
                "web crecer" !important;
              gap: 24px !important;
            }
          }

          /* Mobile <=767px: Clientes first, Web, Crecer (stacked) */
          @media (max-width: 767px) {
            .por-donde-section {
              padding: 40px 20px;
            }
            .por-donde-grid {
              grid-template-columns: 1fr !important;
              grid-template-areas:
                "clientes"
                "web"
                "crecer" !important;
              gap: 16px !important;
            }
          }

          @media (max-width: 430px) {
            .por-donde-section {
              padding: 32px 20px;
            }
          }

          @media (max-width: 375px) {
            .por-donde-section {
              padding: 32px 16px;
            }
            .por-donde-card {
              min-height: auto !important;
            }
          }

          .card-link {
            display: block;
          }

          .card-link:hover .cta-text {
            opacity: 0.9;
          }
        `}
      </style>
    </section>
  );
}
