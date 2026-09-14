'use client';

import Link from 'next/link';
import { Rocket, ChartNoAxesColumnIncreasing, PanelsTopLeft } from 'lucide-react';

export default function PorDondeEmpezar() {
  const opciones = [
    {
      id: 'campanas',
      titulo: 'Necesito lanzar campañas',
      copy: 'Quiero poner en marcha campañas de Google Ads o Meta Ads desde cero.',
      cta: 'Analizar mi proyecto →',
      href: '#contacto',
      icon: Rocket,
      badge: 'RECOMENDADA',
      featured: true,
      gridArea: 'campanas',
    },
    {
      id: 'mejorar',
      titulo: 'Quiero mejorar campañas actuales',
      copy: 'Tengo campañas en marcha y quiero conseguir mejores resultados.',
      cta: 'Ver cómo podemos ayudarte →',
      href: '#contacto',
      icon: ChartNoAxesColumnIncreasing,
      featured: false,
      gridArea: 'mejorar',
    },
    {
      id: 'landing',
      titulo: 'Necesito una landing que convierta',
      copy: 'Quiero una landing page optimizada para convertir el tráfico de mis campañas.',
      cta: 'Ver solución de landing →',
      href: '#contacto',
      icon: PanelsTopLeft,
      featured: false,
      gridArea: 'landing',
    },
  ];

  return (
    <section
      id="por-donde-empezar"
      className="por-donde-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
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
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Elige el punto de partida que mejor se adapta a tu negocio.
          </p>
        </div>

        <div
          className="por-donde-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateAreas: '"campanas mejorar landing"',
            gap: '24px',
          }}
        >
          {opciones.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.id}
                className="por-donde-card"
                style={{
                  position: 'relative',
                  gridArea: op.gridArea,
                  backgroundColor: 'white',
                  border: op.featured
                    ? '2px solid var(--io-action)'
                    : '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: op.featured
                    ? '0 8px 24px rgba(59,130,246,0.1)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {op.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      backgroundColor: 'var(--io-accent)',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {op.badge}
                  </div>
                )}

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--io-text)',
                    margin: '0',
                    lineHeight: 1.3,
                  }}
                >
                  {op.titulo}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {op.copy}
                </p>

                <Link
                  href={op.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: op.featured ? 'white' : 'var(--io-action)',
                    backgroundColor: op.featured ? 'var(--io-action)' : 'transparent',
                    padding: op.featured ? '12px 16px' : '0',
                    borderRadius: op.featured ? 'var(--io-radius-md)' : '0',
                    textAlign: op.featured ? 'center' : 'left',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  {op.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
