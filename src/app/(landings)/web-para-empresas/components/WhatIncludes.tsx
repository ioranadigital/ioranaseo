'use client';

export default function WhatIncludes() {
  const items = [
    'Diseño personalizado y responsive',
    'Arquitectura y optimización SEO inicial',
    'Formularios, llamadas y WhatsApp',
    'Analytics y medición de conversiones',
    'Textos orientados a conversión',
    'Formación básica para gestionar tu web',
  ];

  return (
    <section
      className="includes-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        className="includes-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: Checklist */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-accent)',
              }}
            />
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 44px)',
                fontWeight: 700,
                color: 'var(--io-text)',
                lineHeight: 1.2,
                margin: '0',
              }}
            >
              Qué incluye tu web
            </h2>
          </div>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0 0 40px 0',
            }}
          >
            Todo lo necesario para lanzar una web preparada para captar.
          </p>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {items.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--io-action)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.5,
                    color: 'var(--io-text)',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Secondary Link */}
          <a
            href="#"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--io-action)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--io-action-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--io-action)';
            }}
          >
            Ver todos los detalles →
          </a>
        </div>

        {/* Right: Visual Mockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px 30px',
            position: 'relative',
          }}
        >
          {/* Simplified Web Preview */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Browser Frame — Web preview */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid var(--io-border)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Browser Header */}
              <div
                style={{
                  height: '40px',
                  borderBottom: '1px solid var(--io-border)',
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'white',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-action)',
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: '6px',
                    backgroundColor: 'var(--io-border)',
                    borderRadius: '2px',
                    maxWidth: '200px',
                  }}
                />
              </div>
              {/* Web Content */}
              <div
                style={{
                  flex: 1,
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {/* Nav section */}
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '3px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                  <div
                    style={{
                      width: '12px',
                      height: '3px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                  <div
                    style={{
                      width: '8px',
                      height: '3px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                </div>
                {/* Hero title */}
                <div
                  style={{
                    height: '12px',
                    backgroundColor: 'var(--io-action)',
                    borderRadius: '2px',
                    width: '80%',
                  }}
                />
                {/* Image area */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--io-bg)',
                    borderRadius: '2px',
                    marginTop: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Visual placeholder */}
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-action)',
                      opacity: 0.2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Badges Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {[
                'Tu negocio en Google',
                'Diseño responsive',
                'Medición incluida',
              ].map((badge) => (
                <div
                  key={badge}
                  style={{
                    backgroundColor: 'var(--io-action)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    fontSize: '11px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  ✓ {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 1024px) {
            .includes-section {
              padding: 60px 20px;
            }
            .includes-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
          }
          @media (max-width: 768px) {
            .includes-section {
              padding: 40px 20px;
            }
            .includes-grid {
              gap: 40px !important;
            }
          }
          @media (max-width: 430px) {
            .includes-section {
              padding: 32px 20px;
            }
            .includes-grid {
              gap: 32px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
