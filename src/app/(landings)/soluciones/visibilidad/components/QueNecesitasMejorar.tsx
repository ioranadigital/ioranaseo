'use client';

import Link from 'next/link';
import { Search, MapPin, Map, FileText } from 'lucide-react';

export default function QueNecesitasMejorar() {
  const opciones = [
    {
      id: 'posicionamiento',
      icon: Search,
      titulo: 'Mejorar mi posicionamiento',
      copy: 'Quiero aparecer mejor para las búsquedas importantes de mi negocio.',
      cta: 'Analizar mi proyecto',
      href: '#contacto',
      badge: 'RECOMENDADA',
      featured: true,
    },
    {
      id: 'local',
      icon: MapPin,
      titulo: 'Ganar visibilidad local',
      copy: 'Quiero que más personas me encuentren cuando buscan en mi zona.',
      cta: 'Ver SEO Local →',
      href: '/soluciones/visibilidad/seo-local',
      featured: false,
    },
    {
      id: 'ficha',
      icon: Map,
      titulo: 'Optimizar mi ficha de Google',
      copy: 'Tengo una ficha o necesito crearla y quiero mejorar su rendimiento.',
      cta: 'Ver Google Maps →',
      href: '/soluciones/visibilidad/google-maps',
      featured: false,
    },
    {
      id: 'contenidos',
      icon: FileText,
      titulo: 'Atraer tráfico con contenidos',
      copy: 'Quiero crear páginas y contenidos que respondan a búsquedas relevantes.',
      cta: 'Ver contenidos →',
      href: '/soluciones/visibilidad/contenidos',
      featured: false,
    },
  ];

  return (
    <section
      id="que-necesitas-mejorar"
      className="que-necesitas-section"
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
            ¿Qué necesitas mejorar?
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
            Cuéntanos tu objetivo y te orientaremos hacia el mejor punto de
            partida.
          </p>
        </div>

        <div
          className="que-necesitas-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {opciones.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.id}
                className="que-necesitas-card"
                style={{
                  position: 'relative',
                  backgroundColor: 'white',
                  border: op.featured
                    ? '2px solid var(--io-action)'
                    : '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '28px 24px',
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
                      right: '20px',
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
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: '17px',
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
                    fontSize: '13.5px',
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
                    padding: op.featured ? '11px 16px' : '0',
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
