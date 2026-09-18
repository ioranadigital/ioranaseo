'use client';

import { Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';

function MicroVisualEncuentran() {
  return (
    <div style={{ width: '48px', height: '36px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', flexDirection: 'column', padding: '4px', gap: '3px', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '4px' }}>
        <Search size={8} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
        <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
      </div>
      <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '70%' }} />
      <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '55%' }} />
    </div>
  );
}

function MicroVisualComparan() {
  return (
    <div style={{ width: '48px', height: '36px', display: 'flex', gap: '4px', alignItems: 'center' }}>
      <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', padding: '3px', gap: '2px', justifyContent: 'center' }}>
        <div style={{ height: '2px', backgroundColor: 'var(--io-action)', borderRadius: '1px', width: '70%' }} />
        <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '90%' }} />
      </div>
      <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', padding: '3px', gap: '2px', justifyContent: 'center' }}>
        <div style={{ height: '2px', backgroundColor: 'var(--io-action)', borderRadius: '1px', width: '75%' }} />
        <div style={{ height: '2px', backgroundColor: 'var(--io-border)', borderRadius: '1px', width: '80%' }} />
      </div>
    </div>
  );
}

function MicroVisualEligen() {
  return (
    <div style={{ width: '48px', height: '36px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: '28px', height: '20px', border: '1.5px solid var(--io-action)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '4px', height: '8px', borderRight: '1.5px solid var(--io-action)', borderBottom: '1.5px solid var(--io-action)', transform: 'rotate(-45deg)', marginRight: '2px' }} />
      </div>
    </div>
  );
}

export default function QueSignificaVisibilidad() {
  const pasos = [
    {
      icon: Search,
      titulo: 'Te encuentran',
      texto: 'Apareces en Google, Maps y otros resultados cuando buscan soluciones como la tuya.',
    },
    {
      icon: FileText,
      titulo: 'Te comparan',
      texto: 'Encuentran información, contenido, servicios, reseñas y señales que les ayudan a valorar tu negocio.',
    },
    {
      icon: CheckCircle,
      titulo: 'Te eligen',
      texto: 'Una presencia clara y relevante genera confianza y facilita el siguiente paso.',
    },
  ];

  return (
    <section
      className="que-significa-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Qué significa tener visibilidad
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
            Estar presente en el momento adecuado, para las personas
            adecuadas, cuando buscan lo que ofreces.
          </p>
        </div>

        <div
          className="que-significa-row"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={paso.titulo}
                className="que-significa-item"
                style={{ display: 'flex', alignItems: 'flex-start' }}
              >
                <div
                  className="que-significa-paso"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '14px',
                    maxWidth: '220px',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--io-bg-soft)',
                        border: '2px solid var(--io-action)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--io-action)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    {paso.titulo.includes('encuentran') && <MicroVisualEncuentran />}
                    {paso.titulo.includes('comparan') && <MicroVisualComparan />}
                    {paso.titulo.includes('eligen') && <MicroVisualEligen />}
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                      margin: '0',
                    }}
                  >
                    {paso.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      lineHeight: 1.55,
                    }}
                  >
                    {paso.texto}
                  </p>
                </div>

                {index < pasos.length - 1 && (
                  <ArrowRight
                    className="que-significa-arrow"
                    size={22}
                    strokeWidth={2}
                    style={{
                      color: 'var(--io-accent)',
                      margin: '24px 24px 0',
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
