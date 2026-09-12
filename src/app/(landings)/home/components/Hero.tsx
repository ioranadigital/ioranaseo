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
            padding: '40px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Web Desktop - Center Left */}
          <div
            style={{
              position: 'absolute',
              left: '15%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '90px',
              height: '110px',
              backgroundColor: 'white',
              border: '2.5px solid var(--io-text)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              padding: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              zIndex: 5,
            }}
          >
            <div style={{ height: '6px', backgroundColor: 'var(--io-action)', marginBottom: '4px', borderRadius: '2px' }} />
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px' }} />
            <div style={{ height: '4px', backgroundColor: 'var(--io-border)', marginTop: '4px', borderRadius: '2px' }} />
          </div>

          {/* Mobile - Center Right */}
          <div
            style={{
              position: 'absolute',
              right: '18%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60px',
              height: '100px',
              backgroundColor: 'white',
              border: '2.5px solid var(--io-text)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              padding: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              zIndex: 5,
            }}
          >
            <div style={{ height: '4px', backgroundColor: 'var(--io-action)', marginBottom: '3px', borderRadius: '2px' }} />
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px' }} />
          </div>

          {/* Google/Maps - Top Left */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '8%',
              width: '65px',
              height: '48px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--io-text-muted)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              zIndex: 2,
            }}
          >
            📍 Maps
          </div>

          {/* Campañas - Top Right */}
          <div
            style={{
              position: 'absolute',
              top: '16%',
              right: '8%',
              width: '70px',
              height: '45px',
              backgroundColor: 'var(--io-action)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 600,
              color: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 2,
            }}
          >
            📢 Campañas
          </div>

          {/* Analytics - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '14%',
              right: '10%',
              width: '65px',
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
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              zIndex: 2,
            }}
          >
            <div style={{ width: '70%', height: '3px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
            <div style={{ width: '45%', height: '3px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
            <div style={{ width: '60%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
          </div>

          {/* Leads/Oportunidades - Bottom Left */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '10%',
              width: '68px',
              height: '50px',
              backgroundColor: 'var(--io-bg-soft)',
              border: '1.5px solid var(--io-accent)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--io-text)',
              boxShadow: '0 2px 8px rgba(244,162,124,0.1)',
              zIndex: 2,
            }}
          >
            👥 Leads
          </div>

          {/* Accent annotation - Refined */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              fontSize: '12px',
              color: 'var(--io-accent)',
              fontWeight: 700,
              lineHeight: 1.3,
              textAlign: 'right',
              zIndex: 10,
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
