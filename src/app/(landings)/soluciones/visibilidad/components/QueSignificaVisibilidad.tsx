'use client';

import { Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';

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
