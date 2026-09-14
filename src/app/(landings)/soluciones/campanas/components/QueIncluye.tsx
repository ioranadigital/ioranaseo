'use client';

import Link from 'next/link';
import { CheckCircle2, Megaphone, Users2 } from 'lucide-react';

export default function QueIncluye() {
  const checklist = [
    'Configuración y gestión de Google Ads',
    'Configuración y gestión de Meta Ads',
    'Investigación de audiencias y palabras clave',
    'Redacción de copies orientados a conversión',
    'Diseño de creatividades y anuncios',
    'Desarrollo y optimización de landing pages',
    'Configuración de eventos y conversiones',
    'Reporting y recomendaciones continuas',
  ];

  return (
    <section
      className="que-incluye-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        className="que-incluye-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: contenido */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Qué incluye
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0 0 32px 0',
            }}
          >
            Todo lo que necesitas para lanzar campañas que generen
            resultados.
          </p>

          <ul
            style={{
              listStyle: 'none',
              margin: '0 0 32px 0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
            className="que-incluye-checklist"
          >
            {checklist.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '14px',
                  color: 'var(--io-text)',
                  lineHeight: 1.4,
                }}
              >
                <CheckCircle2
                  size={17}
                  strokeWidth={2}
                  style={{ color: 'var(--io-action)', flexShrink: 0, marginTop: '1px' }}
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="#por-donde-empezar"
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--io-action)',
              textDecoration: 'none',
            }}
          >
            Ver todos los detalles →
          </Link>
        </div>

        {/* Right: visual */}
        <div
          className="que-incluye-visual"
          style={{
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '36px 28px',
            position: 'relative',
            minHeight: '340px',
          }}
        >
          <div className="que-incluye-visual-inner" style={{ position: 'relative' }}>
            {/* Campañas activas: Google Ads + Meta Ads */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'var(--io-action)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <Megaphone size={14} strokeWidth={2} style={{ color: 'white' }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Campañas activas
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <Users2 size={14} strokeWidth={2} style={{ color: 'var(--io-action)' }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Conversiones
                </span>
              </div>
            </div>

            {/* Landing mockup */}
            <div
              style={{
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                padding: '14px',
                marginBottom: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ width: '50%', height: '5px', backgroundColor: 'var(--io-action)', borderRadius: '1px', marginBottom: '8px' }} />
              <div style={{ width: '90%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '4px' }} />
              <div style={{ width: '75%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '8px' }} />
              <div style={{ width: '40%', height: '10px', backgroundColor: 'var(--io-accent)', borderRadius: '2px' }} />
              <span style={{ display: 'block', fontSize: '9px', fontWeight: 700, color: 'var(--io-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>
                Leads
              </span>
            </div>

            {/* Medición */}
            <div
              style={{
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                borderRadius: '8px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '5px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ width: '4px', height: '10px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '16px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '22px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '14px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
              <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text-muted)', marginLeft: '8px' }}>
                Medición
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
