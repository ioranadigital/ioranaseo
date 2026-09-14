'use client';

import Link from 'next/link';
import { Search, Megaphone, TrendingUp } from 'lucide-react';

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
            padding: '14px 28px',
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

      {/* Visual Ecosystem — lenguaje Product Growth de Home */}
      <div
        className="soluciones-hero-visual"
        style={{
          maxWidth: '760px',
          margin: '56px auto 0',
          minHeight: '340px',
          backgroundColor: 'white',
          borderRadius: 'var(--io-radius-lg)',
          border: '1px solid var(--io-border)',
          position: 'relative',
          overflow: 'hidden',
          padding: '40px 30px',
        }}
      >
        <div
          className="soluciones-hero-visual-inner"
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
        {/* Líneas de conexión discretas (SVG, detrás de las piezas) */}
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
          preserveAspectRatio="none"
        >
          <line x1="50%" y1="50%" x2="16%" y2="24%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="50%" y1="50%" x2="84%" y2="24%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="50%" y1="50%" x2="50%" y2="86%" stroke="var(--io-border)" strokeWidth="1.5" strokeDasharray="3 4" />
        </svg>

        {/* CENTRAL: ventana web — pieza base */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '128px',
            height: '148px',
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
          <div
            style={{
              height: '8px',
              backgroundColor: 'var(--io-action)',
              marginBottom: '8px',
              borderRadius: '2px',
            }}
          />
          <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '2px', marginBottom: '6px' }} />
          <div style={{ height: '6px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
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
            Web
          </span>
        </div>

        {/* Badge: Search/Google — Visibilidad (arriba izquierda) */}
        <div
          className="soluciones-hero-badge"
          style={{
            position: 'absolute',
            top: '16%',
            left: '6%',
            width: '104px',
            height: '40px',
            backgroundColor: 'white',
            border: '1.5px solid var(--io-border)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            zIndex: 3,
          }}
        >
          <Search size={13} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
          <div style={{ flex: 1, height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
        </div>

        {/* Badge: Ads — Campañas (arriba derecha) */}
        <div
          className="soluciones-hero-badge"
          style={{
            position: 'absolute',
            top: '16%',
            right: '6%',
            width: '92px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Megaphone size={11} strokeWidth={2} style={{ color: 'white', flexShrink: 0 }} />
            <span style={{ fontSize: '9px', fontWeight: 700, color: 'white' }}>Ad</span>
          </div>
          <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '1px' }} />
        </div>

        {/* Badge: Analytics/Lead — Conversión (abajo centro) */}
        <div
          className="soluciones-hero-badge"
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '108px',
            height: '46px',
            backgroundColor: 'white',
            border: '1.5px solid var(--io-border)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '4px',
            padding: '8px 12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            zIndex: 3,
          }}
        >
          <div style={{ width: '4px', height: '10px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '16px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
          <div style={{ width: '4px', height: '22px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
          <TrendingUp
            size={16}
            strokeWidth={2}
            style={{ color: 'var(--io-action)', marginLeft: 'auto', flexShrink: 0 }}
          />
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
