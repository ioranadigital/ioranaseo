'use client';

import { CheckCircle2 } from 'lucide-react';

export default function TodoLoQueNecesitas() {
  const items = [
    'Web y landing pages',
    'SEO y SEO Local',
    'Google Maps',
    'Google Ads y Meta Ads',
    'Analytics y medición',
    'CRO y mejora continua',
  ];

  return (
    <section
      className="todo-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
        className="todo-grid"
      >
        {/* Left: Content */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Todo lo que necesitas para captar mejor
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0 0 40px 0',
              maxWidth: '500px',
              lineHeight: 1.6,
            }}
          >
            Una estrategia conectada, desde tu presencia digital hasta la conversión.
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
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 162, 124, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    style={{
                      color: 'var(--io-action)',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--io-text)',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#soluciones"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--io-action)',
              textDecoration: 'none',
              marginTop: '32px',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = '12px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '8px';
            }}
          >
            Ver todas las soluciones
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>

        {/* Right: Visual Ecosystem */}
        <div
          className="todo-visual"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '420px',
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* CENTRAL: Web/Landing - Main piece */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130px',
              height: '155px',
              backgroundColor: 'white',
              border: '3px solid var(--io-text)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              padding: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: '8px',
                backgroundColor: 'var(--io-action)',
                marginBottom: '8px',
                borderRadius: '2px',
              }}
            />
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px', marginBottom: '6px' }} />
            <div style={{ height: '6px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
          </div>

          {/* Google/Maps - Top Left */}
          <div
            style={{
              position: 'absolute',
              top: '18%',
              left: '10%',
              width: '68px',
              height: '48px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 600,
              color: 'var(--io-text)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            📍 Maps
          </div>

          {/* Campañas - Top Right */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              width: '70px',
              height: '46px',
              backgroundColor: 'var(--io-action)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 600,
              color: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 3,
            }}
          >
            📢 Ads
          </div>

          {/* Analytics - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '16%',
              right: '12%',
              width: '68px',
              height: '50px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              padding: '5px',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            <div style={{ width: '65%', height: '3px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
            <div style={{ width: '45%', height: '3px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
            <div style={{ width: '55%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
          </div>

          {/* Oportunidades - Bottom Left */}
          <div
            style={{
              position: 'absolute',
              bottom: '18%',
              left: '10%',
              width: '70px',
              height: '48px',
              backgroundColor: 'var(--io-bg-soft)',
              border: '1.5px solid var(--io-accent)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 600,
              color: 'var(--io-text)',
              boxShadow: '0 2px 8px rgba(244,162,124,0.08)',
              zIndex: 3,
            }}
          >
            👥 Leads
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          /* Tablet: stacked */
          @media (max-width: 1023px) {
            .todo-section {
              padding: 60px 20px;
            }
            .todo-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .todo-section {
              padding: 40px 20px;
            }
            .todo-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }

          @media (max-width: 430px) {
            .todo-section {
              padding: 32px 20px;
            }
            .todo-visual {
              min-height: 300px !important;
            }
          }

          @media (max-width: 375px) {
            .todo-section {
              padding: 32px 16px;
            }
            .todo-visual {
              min-height: 280px !important;
              padding: 30px 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
