'use client';

import Link from 'next/link';
import { Eye, Target, TrendingUp, Sprout, Search, MapPin } from 'lucide-react';

export default function Hero() {
  const beneficios = [
    {
      icon: Eye,
      label: 'Más visibilidad',
      desc: 'Te encuentran antes.',
    },
    {
      icon: Target,
      label: 'Tráfico cualificado',
      desc: 'Personas que realmente buscan lo que ofreces.',
    },
    {
      icon: TrendingUp,
      label: 'Más oportunidades',
      desc: 'Más posibilidades de contacto.',
    },
    {
      icon: Sprout,
      label: 'Crecimiento sostenible',
      desc: 'Resultados que pueden mejorar con el tiempo.',
    },
  ];

  return (
    <section
      className="visibilidad-hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        className="visibilidad-hero-grid"
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
          <div
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
            Soluciones de visibilidad
          </div>

          <h1
            className="visibilidad-hero-h1"
            style={{
              fontSize: 'clamp(32px, 4.6vw, 52px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.18,
              margin: '0 0 24px 0',
              letterSpacing: '-0.015em',
            }}
          >
            Aparece cuando tus clientes te buscan.
          </h1>

          <p
            className="visibilidad-hero-copy"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              maxWidth: '520px',
            }}
          >
            Trabajamos SEO, SEO Local, Google Maps y contenidos para que tu
            negocio gane visibilidad en búsquedas con intención real.
          </p>

          <Link
            href="#contacto"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: 'var(--io-radius-md)',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action)';
            }}
          >
            Analizar mi proyecto →
          </Link>

          {/* Beneficios - 4 indicadores */}
          <div
            className="visibilidad-hero-beneficios"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '56px',
              paddingTop: '40px',
              borderTop: '1px solid var(--io-border)',
            }}
          >
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--io-radius-md)',
                      backgroundColor: 'var(--io-bg-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--io-action)',
                      marginBottom: '10px',
                    }}
                  >
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                    }}
                  >
                    {b.label}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--io-text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    {b.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Visual — búsqueda / resultados / Maps / móvil */}
        <div
          className="visibilidad-hero-visual"
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
          <div
            className="visibilidad-hero-visual-inner"
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* CENTRAL: resultados de búsqueda */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '176px',
                backgroundColor: 'white',
                border: '3px solid var(--io-text)',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                zIndex: 10,
              }}
            >
              {/* barra de búsqueda */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--io-bg-soft)',
                  borderRadius: '999px',
                  padding: '6px 10px',
                  marginBottom: '10px',
                }}
              >
                <Search size={11} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
                <div style={{ flex: 1, height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              </div>
              {/* resultado 1 - destacado (tu negocio) */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ width: '70%', height: '5px', backgroundColor: 'var(--io-action)', borderRadius: '1px', marginBottom: '4px' }} />
                <div style={{ width: '90%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '3px' }} />
                <div style={{ width: '60%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              </div>
              {/* resultado 2 */}
              <div style={{ marginBottom: '8px', opacity: 0.5 }}>
                <div style={{ width: '55%', height: '4px', backgroundColor: 'var(--io-text-muted)', borderRadius: '1px', marginBottom: '4px' }} />
                <div style={{ width: '75%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              </div>
              {/* resultado 3 */}
              <div style={{ opacity: 0.3 }}>
                <div style={{ width: '50%', height: '4px', backgroundColor: 'var(--io-text-muted)', borderRadius: '1px', marginBottom: '4px' }} />
                <div style={{ width: '65%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              </div>
            </div>

            {/* Badge: Google Maps - arriba izquierda */}
            <div
              className="visibilidad-hero-badge"
              style={{
                position: 'absolute',
                top: '14%',
                left: '6%',
                width: '92px',
                height: '58px',
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                padding: '8px 10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                zIndex: 3,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                <MapPin size={13} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text)' }}>Maps</span>
              </div>
              <div style={{ width: '80%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '3px' }} />
              <div style={{ width: '55%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
            </div>

            {/* Badge: móvil - arriba derecha */}
            <div
              className="visibilidad-hero-badge"
              style={{
                position: 'absolute',
                top: '12%',
                right: '8%',
                width: '58px',
                height: '92px',
                backgroundColor: 'white',
                border: '3px solid var(--io-text)',
                borderRadius: '9px',
                display: 'flex',
                flexDirection: 'column',
                padding: '5px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                zIndex: 5,
              }}
            >
              <div style={{ height: '4px', backgroundColor: 'var(--io-action)', marginBottom: '4px', borderRadius: '1px' }} />
              <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '1px' }} />
            </div>

            {/* Badge: contenido/web - abajo */}
            <div
              className="visibilidad-hero-badge"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '10%',
                width: '96px',
                height: '52px',
                backgroundColor: 'var(--io-bg-soft)',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                padding: '8px 10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                zIndex: 3,
              }}
            >
              <div style={{ width: '60%', height: '4px', backgroundColor: 'var(--io-action)', borderRadius: '1px', marginBottom: '5px' }} />
              <div style={{ width: '85%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '3px' }} />
              <div style={{ width: '70%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
            </div>

            {/* Anotación */}
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
              Más visibilidad.
              <br />
              Más oportunidades.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
