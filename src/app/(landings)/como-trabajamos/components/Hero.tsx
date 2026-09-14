'use client';

import Link from 'next/link';
import { Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="ct-hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        className="ct-hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
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
            Cómo trabajamos
          </div>

          <h1
            className="ct-hero-h1"
            style={{
              fontSize: 'clamp(32px, 4.6vw, 52px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.18,
              margin: '0 0 24px 0',
              letterSpacing: '-0.015em',
            }}
          >
            Un partner estratégico para hacer crecer tu negocio.
          </h1>

          <p
            className="ct-hero-copy"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              maxWidth: '520px',
            }}
          >
            Nos implicamos en cada proyecto como un equipo más, combinando
            estrategia, experiencia y ejecución para conseguir resultados
            reales.
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
        </div>

        {/* Right: Visual — colaboración / tablero de trabajo */}
        <div
          className="ct-hero-visual"
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
            className="ct-hero-visual-inner"
            style={{ position: 'relative', width: '100%' }}
          >
            {/* Tablero: Ideas / Estrategia / Acción / Resultados */}
            <div
              style={{
                backgroundColor: 'white',
                border: '3px solid var(--io-text)',
                borderRadius: '10px',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
              </div>

              <div
                className="ct-hero-board-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '10px',
                }}
              >
                {[
                  { label: 'Ideas', tone: 'soft' },
                  { label: 'Estrategia', tone: 'soft' },
                  { label: 'Acción', tone: 'action' },
                  { label: 'Resultados', tone: 'accent' },
                ].map((col) => (
                  <div
                    key={col.label}
                    style={{
                      backgroundColor:
                        col.tone === 'action'
                          ? 'var(--io-action)'
                          : col.tone === 'accent'
                          ? 'var(--io-bg-soft)'
                          : 'var(--io-bg-soft)',
                      border: col.tone === 'accent' ? '1.5px solid var(--io-accent)' : 'none',
                      borderRadius: '8px',
                      padding: '10px 8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      minHeight: '92px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: col.tone === 'action' ? 'white' : 'var(--io-text)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {col.label}
                    </span>
                    <div
                      style={{
                        width: '100%',
                        height: '5px',
                        borderRadius: '1px',
                        backgroundColor:
                          col.tone === 'action' ? 'rgba(255,255,255,0.5)' : 'var(--io-border)',
                      }}
                    />
                    <div
                      style={{
                        width: '70%',
                        height: '5px',
                        borderRadius: '1px',
                        backgroundColor:
                          col.tone === 'action' ? 'rgba(255,255,255,0.5)' : 'var(--io-border)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Badge: colaboración */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-10px',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '1.5px solid var(--io-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--io-action)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <Users size={22} strokeWidth={1.5} />
            </div>

            {/* Badge: resultados a largo plazo */}
            <div
              style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-10px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-bg-soft)',
                border: '1.5px solid var(--io-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--io-text)',
                boxShadow: '0 4px 12px rgba(244,162,124,0.1)',
              }}
            >
              <Target size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
