'use client';

import Link from 'next/link';
import { Coffee, Sprout, NotebookPen } from 'lucide-react';

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

        {/* Right: Visual — escena de escritorio/oficina (Opción C) */}
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
          {/* Luz natural — glow discreto superior izquierdo */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              left: '-60px',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              backgroundColor: 'rgba(244,162,124,0.08)',
              filter: 'blur(10px)',
              zIndex: 0,
            }}
          />

          <div
            className="ct-hero-visual-inner"
            style={{ position: 'relative', width: '100%', zIndex: 1 }}
          >
            {/* Escritorio: portátil + panel Ideas/Estrategia/Acción/Resultados + props */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Pantalla del portátil */}
              <div
                style={{
                  backgroundColor: 'white',
                  border: '3px solid var(--io-text)',
                  borderRadius: '10px 10px 4px 4px',
                  padding: '14px',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
                  width: '100%',
                  maxWidth: '300px',
                }}
              >
                <div
                  className="ct-hero-board-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
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
                          col.tone === 'action' ? 'var(--io-action)' : 'var(--io-bg-soft)',
                        border: col.tone === 'accent' ? '1.5px solid var(--io-accent)' : 'none',
                        borderRadius: '7px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        minHeight: '58px',
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
                          width: '80%',
                          height: '4px',
                          borderRadius: '1px',
                          backgroundColor:
                            col.tone === 'action' ? 'rgba(255,255,255,0.5)' : 'var(--io-border)',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Base del portátil (teclado) */}
              <div
                style={{
                  width: 'calc(100% + 28px)',
                  maxWidth: '328px',
                  height: '12px',
                  backgroundColor: 'var(--io-text)',
                  borderRadius: '0 0 6px 6px',
                  marginTop: '2px',
                }}
              />

              {/* Superficie del escritorio */}
              <div
                className="ct-hero-desk-line"
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--io-border)',
                  marginTop: '28px',
                  marginBottom: '-1px',
                  position: 'relative',
                }}
              />

              {/* Props sobre el escritorio: café + planta */}
              <div
                className="ct-hero-props-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  maxWidth: '300px',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    border: '1.5px solid var(--io-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                  }}
                >
                  <Coffee size={19} strokeWidth={1.5} />
                </div>

                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    border: '1.5px solid var(--io-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-text)',
                  }}
                >
                  <Sprout size={19} strokeWidth={1.5} />
                </div>
              </div>

              {/* Badge: notas/estrategia colaborativa */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-6px',
                  width: '46px',
                  height: '46px',
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
                <NotebookPen size={20} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
