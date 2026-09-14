'use client';

import Link from 'next/link';
import { CheckCircle2, Search, Star } from 'lucide-react';

export default function QueHacemos() {
  const checklist = [
    'Optimización SEO técnica y On Page',
    'SEO Local y Google Maps',
    'Investigación de palabras clave e intención',
    'Arquitectura y enlazado interno',
    'Creación y optimización de contenidos',
    'Estrategia de reputación y reseñas',
    'Análisis de competencia',
    'Medición y mejora continua',
  ];

  return (
    <section
      className="que-hacemos-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        className="que-hacemos-grid"
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
            Qué hacemos
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0 0 32px 0',
            }}
          >
            Un enfoque completo para aumentar tu presencia en las búsquedas
            que realmente importan para tu negocio.
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
            className="que-hacemos-checklist"
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
            href="#que-necesitas-mejorar"
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
          className="que-hacemos-visual"
          style={{
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '36px 28px',
            position: 'relative',
            minHeight: '340px',
          }}
        >
          <div
            className="que-hacemos-visual-inner"
            style={{ position: 'relative' }}
          >
            {/* Resultado de búsqueda */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <Search size={13} strokeWidth={2} style={{ color: 'var(--io-action)' }} />
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--io-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Más presencia
                </span>
              </div>
              <div style={{ width: '75%', height: '5px', backgroundColor: 'var(--io-action)', borderRadius: '1px', marginBottom: '6px' }} />
              <div style={{ width: '90%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '4px' }} />
              <div style={{ width: '60%', height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
            </div>

            {/* Reseñas + Maps en fila */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: '8px',
                  padding: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={10} strokeWidth={0} fill="var(--io-accent)" />
                  ))}
                </div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--io-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Búsquedas relevantes
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'var(--io-action)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '9px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Más oportunidades
                </span>
              </div>
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
