'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Hero() {
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
          maxWidth: '780px',
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
            maxWidth: '560px',
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
            padding: '14px 32px',
            backgroundColor: 'var(--io-action)',
            color: 'white',
            fontSize: '15px',
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
      </div>

      {/* Visual Ecosystem — identidad propia: 4 capacidades conectadas (no un mockup de HOME) */}
      <div
        className="soluciones-hero-visual"
        style={{
          maxWidth: '760px',
          margin: '56px auto 0',
          minHeight: '440px',
          background: `
            radial-gradient(circle at 20% 15%, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0) 40%),
            radial-gradient(circle at 85% 85%, rgba(244,162,124,0.07) 0%, rgba(244,162,124,0) 40%),
            white
          `,
          borderRadius: 'var(--io-radius-lg)',
          border: '1px solid var(--io-border)',
          position: 'relative',
          overflow: 'hidden',
          padding: '40px 30px',
        }}
      >
        {/* Real responsive layout: absolute "orbit" on desktop, CSS grid on tablet/mobile
            (see styles.css) — no transform:scale() anywhere. */}
        <div
          className="soluciones-hero-visual-inner"
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {/* Conectores — finos, bajo contraste, un único acento peach marcando el destino (Conversión) */}
          <svg
            className="soluciones-hero-connectors"
            width="100%"
            height="100%"
            style={{ position: 'absolute', inset: 0, zIndex: 1 }}
            preserveAspectRatio="none"
          >
            <line x1="50%" y1="50%" x2="16%" y2="24%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="50%" y1="50%" x2="84%" y2="24%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="50%" y1="50%" x2="50%" y2="86%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="50%" cy="68%" r="3" fill="var(--io-accent)" />
          </svg>

          {/* CENTRAL: WEB — mini navegador reconocible (mismo lenguaje que HOME, simplificado) */}
          <div
            className="sol-hero-node sol-hero-node-web"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              gridArea: 'web',
              width: '136px',
              height: '148px',
              backgroundColor: 'white',
              border: '3px solid var(--io-text)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-accent)' }} />
            </div>
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '4px' }} />
            <div style={{ height: '4px', width: '100%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
            <div style={{ height: '4px', width: '65%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
            <div style={{ height: '12px', width: '45%', backgroundColor: 'var(--io-action)', borderRadius: '3px', flexShrink: 0 }} />
            <span
              className="sol-hero-node-label"
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
              Web
            </span>
          </div>

          {/* VISIBILIDAD: mini buscador + mini mapa con pin — "te encuentran" */}
          <div
            className="sol-hero-node sol-hero-node-visibilidad"
            style={{
              position: 'absolute',
              top: '14%',
              left: '5%',
              gridArea: 'visibilidad',
              width: '118px',
              height: '92px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: 'var(--io-bg-soft)', borderRadius: '10px', padding: '4px 8px', flexShrink: 0 }}>
              <Search size={10} strokeWidth={2.5} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
              <div style={{ flex: 1, height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
            </div>
            <div style={{ flex: 1, position: 'relative', borderRadius: '6px', backgroundColor: 'var(--io-bg-soft)', overflow: 'hidden' }}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <path d="M0,30 Q25,10 50,25 T100,15" fill="none" stroke="var(--io-border)" strokeWidth="2" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '55%',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50% 50% 50% 0',
                  backgroundColor: 'var(--io-action)',
                  transform: 'rotate(-45deg)',
                }}
              />
            </div>
            <span
              className="sol-hero-node-label"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--io-text-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              Visibilidad
            </span>
          </div>

          {/* CAMPAÑAS: mini anuncio + mini gráfico con línea ascendente — "generar demanda" */}
          <div
            className="sol-hero-node sol-hero-node-campanas"
            style={{
              position: 'absolute',
              top: '14%',
              right: '5%',
              gridArea: 'campanas',
              width: '112px',
              height: '92px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '12px', borderRadius: '2px', backgroundColor: 'var(--io-action)', flexShrink: 0 }}>
                <span style={{ fontSize: '7px', fontWeight: 800, color: 'white', lineHeight: 1 }}>Ad</span>
              </div>
              <div style={{ flex: 1, height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
            </div>
            <div style={{ flex: 1, position: 'relative', borderRadius: '6px', backgroundColor: 'var(--io-bg-soft)', display: 'flex', alignItems: 'flex-end', gap: '3px', padding: '6px' }}>
              <div style={{ width: '5px', height: '35%', backgroundColor: 'var(--io-action)', opacity: 0.4, borderRadius: '1px' }} />
              <div style={{ width: '5px', height: '55%', backgroundColor: 'var(--io-action)', opacity: 0.6, borderRadius: '1px' }} />
              <div style={{ width: '5px', height: '40%', backgroundColor: 'var(--io-action)', opacity: 0.75, borderRadius: '1px' }} />
              <div style={{ width: '5px', height: '75%', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <polyline points="0,35 30,22 55,26 78,10 100,5" fill="none" stroke="var(--io-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="sol-hero-node-label"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--io-text-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              Campañas
            </span>
          </div>

          {/* CONVERSIÓN: mini funnel — "convertir visitas en oportunidades" */}
          <div
            className="sol-hero-node sol-hero-node-conversion"
            style={{
              position: 'absolute',
              bottom: '6%',
              left: '50%',
              transform: 'translateX(-50%)',
              gridArea: 'conversion',
              width: '118px',
              height: '80px',
              backgroundColor: 'white',
              border: '1.5px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '10px 12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 3,
            }}
          >
            <div style={{ width: '85%', height: '8px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
            <div style={{ width: '60%', height: '8px', backgroundColor: 'var(--io-action)', opacity: 0.6, borderRadius: '2px' }} />
            <div style={{ width: '32%', height: '8px', backgroundColor: 'var(--io-action)', borderRadius: '2px' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--io-accent)', marginTop: '2px' }} />
            <span
              className="sol-hero-node-label"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--io-text-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              Conversión
            </span>
          </div>

          {/* Microacento discreto */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              right: '18px',
              fontSize: '11px',
              color: 'var(--io-accent)',
              fontWeight: 700,
              zIndex: 15,
            }}
          >
            ✦ Trabajan juntas
          </div>
        </div>
      </div>
    </section>
  );
}
