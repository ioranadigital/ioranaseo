'use client';

import Link from 'next/link';
import { Target, Compass, LineChart, Sprout, FlaskConical, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const beneficios = [
    {
      icon: Target,
      label: 'Más conversiones',
      desc: 'Convierte más visitas.',
    },
    {
      icon: Compass,
      label: 'Mejor experiencia',
      desc: 'Una web que guía.',
    },
    {
      icon: LineChart,
      label: 'Decisiones basadas en datos',
      desc: 'Analiza y mejora.',
    },
    {
      icon: Sprout,
      label: 'Crecimiento sostenible',
      desc: 'Más oportunidades.',
    },
  ];

  return (
    <section
      className="conversion-hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        className="conversion-hero-grid"
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
            Soluciones de conversión
          </div>

          <h1
            className="conversion-hero-h1"
            style={{
              fontSize: 'clamp(32px, 4.6vw, 52px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.18,
              margin: '0 0 24px 0',
              letterSpacing: '-0.015em',
            }}
          >
            Convierte más visitas en clientes.
          </h1>

          <p
            className="conversion-hero-copy"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              maxWidth: '520px',
            }}
          >
            Diseñamos y optimizamos tu web, landing pages y embudos de
            conversión para que cada visita cuente y consigas más leads y
            ventas para tu negocio.
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
            Analizar mi proyecto
          </Link>

          {/* Beneficios - 4 indicadores */}
          <div
            className="conversion-hero-beneficios"
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

        {/* Right: Visual — ecosistema de conversión */}
        <div
          className="conversion-hero-visual"
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
            className="conversion-hero-visual-inner"
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* CENTRAL: landing page con formulario */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '128px',
                height: '152px',
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
              <div style={{ height: '8px', backgroundColor: 'var(--io-action)', marginBottom: '8px', borderRadius: '2px' }} />
              <div style={{ width: '80%', height: '5px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '4px' }} />
              <div style={{ width: '60%', height: '5px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '8px' }} />
              {/* formulario simulado */}
              <div style={{ height: '10px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px', marginBottom: '4px' }} />
              <div style={{ height: '10px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px', marginBottom: '6px' }} />
              <div style={{ height: '12px', backgroundColor: 'var(--io-action)', borderRadius: '2px' }} />
              <span
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--io-text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                Landing
              </span>
            </div>

            {/* Badge: A/B Testing - arriba izquierda */}
            <div
              className="conversion-hero-badge"
              style={{
                position: 'absolute',
                top: '14%',
                left: '6%',
                width: '90px',
                height: '52px',
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                padding: '8px 10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                zIndex: 3,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                <FlaskConical size={13} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text)' }}>A/B Test</span>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '1px' }} />
                <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
              </div>
            </div>

            {/* Badge: Formularios eficaces - arriba derecha */}
            <div
              className="conversion-hero-badge"
              style={{
                position: 'absolute',
                top: '14%',
                right: '6%',
                width: '90px',
                height: '52px',
                backgroundColor: 'var(--io-bg-soft)',
                border: '1.5px solid var(--io-accent)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 8px rgba(244,162,124,0.08)',
                zIndex: 3,
              }}
            >
              <CheckCircle2 size={15} strokeWidth={1.5} style={{ color: 'var(--io-text)' }} />
              <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text)', textAlign: 'center' }}>Formularios</span>
            </div>

            {/* Badge: Tracking y medición - abajo izquierda */}
            <div
              className="conversion-hero-badge"
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '9%',
                width: '84px',
                height: '52px',
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '3px',
                padding: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                zIndex: 3,
              }}
            >
              <div style={{ width: '4px', height: '10px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '16px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '22px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '14px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
            </div>

            {/* Badge: Leads/oportunidades - abajo derecha */}
            <div
              className="conversion-hero-badge"
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '9%',
                width: '86px',
                height: '48px',
                backgroundColor: 'var(--io-action)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '8px 10px',
                gap: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                zIndex: 3,
              }}
            >
              <span style={{ fontSize: '9px', fontWeight: 700, color: 'white' }}>Leads y ventas</span>
              <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '1px' }} />
            </div>

            {/* Anotación */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '11px',
                color: 'var(--io-accent)',
                fontWeight: 700,
                textAlign: 'center',
                zIndex: 15,
              }}
            >
              Todo trabaja junto para convertir más
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
