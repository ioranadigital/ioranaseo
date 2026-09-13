'use client';

import Link from 'next/link';
import { Monitor, Search, Megaphone, Target, ArrowRight } from 'lucide-react';

export default function Hero() {
  const piezas = [
    { icon: Monitor, label: 'Web' },
    { icon: Search, label: 'Visibilidad' },
    { icon: Megaphone, label: 'Campañas' },
    { icon: Target, label: 'Conversión' },
  ];

  return (
    <section
      className="soluciones-hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        className="soluciones-hero-inner"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
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
          Soluciones de captación digital
        </div>

        {/* H1 */}
        <h1
          className="soluciones-hero-h1"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: 'var(--io-text)',
            lineHeight: 1.15,
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em',
          }}
        >
          Las piezas que necesita tu negocio para captar mejor.
        </h1>

        {/* Copy */}
        <p
          style={{
            fontSize: '17px',
            color: 'var(--io-text-muted)',
            lineHeight: 1.6,
            margin: '0 0 32px 0',
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Web, visibilidad, campañas y conversión conectadas para ayudarte a
          generar más oportunidades.
        </p>

        {/* CTA */}
        <Link
          href="#contacto"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            backgroundColor: 'var(--io-action)',
            color: 'white',
            fontSize: '15px',
            fontWeight: 600,
            borderRadius: 'var(--io-radius-md)',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
            marginBottom: '56px',
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

        {/* Visual: piezas conectadas */}
        <div
          className="soluciones-piezas-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            flexWrap: 'wrap',
          }}
        >
          {piezas.map((pieza, index) => {
            const Icon = pieza.icon;
            return (
              <div
                key={pieza.label}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div
                  className="soluciones-pieza"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: '1.5px solid var(--io-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--io-action)',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.08)',
                    }}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--io-text)',
                    }}
                  >
                    {pieza.label}
                  </span>
                </div>

                {index < piezas.length - 1 && (
                  <ArrowRight
                    className="soluciones-pieza-arrow"
                    size={20}
                    strokeWidth={2}
                    style={{
                      color: 'var(--io-accent)',
                      margin: '0 16px',
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
