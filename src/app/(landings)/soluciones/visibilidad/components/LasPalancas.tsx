'use client';

import { Settings, MapPin, Map, FileText } from 'lucide-react';

export default function LasPalancas() {
  const palancas = [
    {
      id: 'seo-tecnico',
      icon: Settings,
      titulo: 'SEO técnico y On Page',
      copy: 'Preparamos tu web para que Google pueda entenderla, rastrearla y mostrarla para las búsquedas adecuadas.',
      items: ['Auditoría técnica', 'SEO On Page', 'Arquitectura', 'Core Web Vitals', 'Enlazado interno'],
    },
    {
      id: 'seo-local',
      icon: MapPin,
      titulo: 'SEO Local',
      copy: 'Mejoramos tu presencia cuando tus clientes buscan servicios en tu zona.',
      items: ['Estrategia local', 'Páginas por ubicación', 'Citaciones y directorios', 'Competencia local', 'Reputación'],
    },
    {
      id: 'gbp-maps',
      icon: Map,
      titulo: 'Google Business Profile / Maps',
      copy: 'Optimizamos tu ficha para mejorar tu presencia en Google Maps y búsquedas locales.',
      items: ['Optimización de ficha', 'Categorías y servicios', 'Fotos y publicaciones', 'Reseñas', 'Seguimiento'],
    },
    {
      id: 'contenidos',
      icon: FileText,
      titulo: 'Contenidos que responden búsquedas',
      copy: 'Creamos contenidos útiles para las preguntas, problemas y necesidades que ya tienen tus clientes.',
      items: ['Investigación de palabras clave', 'Páginas de servicios', 'Artículos', 'FAQs', 'Estrategia editorial'],
    },
  ];

  return (
    <section
      className="palancas-section"
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
            Las palancas de la visibilidad
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Combinamos distintas estrategias para que tu negocio aparezca,
            destaque y genere oportunidades.
          </p>
        </div>

        <div
          className="palancas-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {palancas.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="palanca-card"
                style={{
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
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
                  {p.titulo}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                  }}
                >
                  {p.copy}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: '4px 0 0 0',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7px',
                  }}
                >
                  {p.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--io-text-muted)',
                        paddingLeft: '16px',
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
