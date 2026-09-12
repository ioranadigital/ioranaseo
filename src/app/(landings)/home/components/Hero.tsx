'use client';

import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function Hero() {
  const capabilities = [
    {
      icon: Monitor,
      label: 'Web',
      desc: 'Una base preparada para captar.',
    },
    {
      icon: Search,
      label: 'Visibilidad',
      desc: 'Aparece cuando te buscan.',
    },
    {
      icon: Megaphone,
      label: 'Campañas',
      desc: 'Atrae demanda cualificada.',
    },
    {
      icon: Target,
      label: 'Conversión',
      desc: 'Convierte visitas en oportunidades.',
    },
  ];

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '50px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: Content */}
        <div>
          {/* Eyebrow */}
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--io-bg-soft)',
              color: 'var(--io-action)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '8px 16px',
              borderRadius: 'var(--io-radius-md)',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            Captación digital para pequeños negocios y pymes
          </div>

          {/* H1 */}
          <h1
            className="hero-h1"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 56px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              maxWidth: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Convierte tu presencia digital en oportunidades.
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              maxWidth: '500px',
            }}
          >
            Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.
          </p>

          {/* CTA */}
          <button
            className="hero-cta"
            style={{
              padding: '14px 32px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action)';
            }}
          >
            Analizar mi proyecto
          </button>

          {/* Capabilities - 4 items with icons */}
          <div
            className="hero-capabilities"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '60px',
              paddingTop: '48px',
              borderTop: '1px solid var(--io-border)',
            }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-bg-soft)',
                      border: '2px solid var(--io-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      color: 'var(--io-action)',
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Label */}
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {item.label}
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--io-text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Visual Ecosystem */}
        <div
          className="hero-visual"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '420px',
            backgroundColor: 'white',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px 30px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* CENTRAL: Web Desktop - Pieza principal prominente */}
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
            {/* Header simulado */}
            <div
              style={{
                height: '8px',
                backgroundColor: 'var(--io-action)',
                marginBottom: '8px',
                borderRadius: '2px',
              }}
            />
            {/* Content area */}
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px', marginBottom: '6px' }} />
            {/* Footer */}
            <div style={{ height: '6px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
          </div>

          {/* Mobile secundario - Solapado ligeramente */}
          <div
            style={{
              position: 'absolute',
              right: '22%',
              bottom: '25%',
              width: '72px',
              height: '110px',
              backgroundColor: 'white',
              border: '3px solid var(--io-text)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              padding: '5px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
              zIndex: 7,
            }}
          >
            <div
              style={{
                height: '5px',
                backgroundColor: 'var(--io-action)',
                marginBottom: '4px',
                borderRadius: '1px',
              }}
            />
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '1px' }} />
          </div>

          {/* Badge: Google/Maps - arriba izquierda */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '72px',
              height: '52px',
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

          {/* Badge: Campañas - arriba derecha */}
          <div
            style={{
              position: 'absolute',
              top: '18%',
              right: '12%',
              width: '75px',
              height: '50px',
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
            📢 Campañas
          </div>

          {/* Badge: Analytics - abajo derecha */}
          <div
            style={{
              position: 'absolute',
              bottom: '18%',
              right: '14%',
              width: '72px',
              height: '54px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              padding: '6px',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            <div style={{ width: '70%', height: '3px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
            <div style={{ width: '50%', height: '3px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
            <div style={{ width: '65%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
          </div>

          {/* Badge: Leads/Oportunidades - abajo izquierda */}
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '12%',
              width: '75px',
              height: '52px',
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

          {/* Accent annotation - Discreta */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '18px',
              fontSize: '11px',
              color: 'var(--io-accent)',
              fontWeight: 700,
              lineHeight: 1.3,
              textAlign: 'right',
              zIndex: 15,
            }}
          >
            ✦ Más visibilidad.
            <br />
            Más oportunidades.
          </div>
        </div>
      </div>
    </section>
  );
}
