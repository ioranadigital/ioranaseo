'use client';

import { Settings, MapPin, Map, FileText } from 'lucide-react';

function MicroVisual({ id }: { id: string }) {
  if (id === 'seo-tecnico') {
    return (
      <div style={{ width: '52px', height: '40px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', flexDirection: 'column', padding: '4px', gap: '2px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
          <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
        </div>
        <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '90%' }} />
        <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '70%' }} />
      </div>
    );
  }
  if (id === 'seo-local') {
    return (
      <div style={{ width: '52px', height: '40px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
        <MapPin size={10} color="var(--io-action)" />
        <div style={{ width: '20px', height: '16px', border: '1px solid var(--io-action)', borderRadius: '2px', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '3px', right: '3px', width: '4px', height: '4px', backgroundColor: 'var(--io-accent)', borderRadius: '50%' }} />
        </div>
      </div>
    );
  }
  if (id === 'gbp-maps') {
    return (
      <div style={{ width: '52px', height: '40px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', flexDirection: 'column', padding: '4px', gap: '2px', justifyContent: 'center' }}>
        <svg viewBox="0 0 40 20" style={{ width: '100%', height: '14px' }}>
          <path d="M2,16 Q10,8 20,14 T38,10" stroke="var(--io-action)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="20" cy="14" r="2" fill="var(--io-accent)" />
        </svg>
        <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '80%', alignSelf: 'center' }} />
      </div>
    );
  }
  // contenidos
  return (
    <div style={{ width: '52px', height: '40px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', flexDirection: 'column', padding: '4px', gap: '2px' }}>
      <div style={{ height: '3px', backgroundColor: 'var(--io-action)', borderRadius: '1px', width: '70%' }} />
      <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '90%' }} />
      <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '60%' }} />
    </div>
  );
}

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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
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
                  <MicroVisual id={p.id} />
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
