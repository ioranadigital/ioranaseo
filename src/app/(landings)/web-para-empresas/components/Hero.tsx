'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Monitor, Search, MousePointerClick } from 'lucide-react';
import { HeroBrowserVisual } from './WebVisuals';

const HERO_PHOTO = '/assets/img/web-para-empresas/hero-business.webp';

const MICROCARDS = [
  { Icon: Monitor, title: 'Diseño responsive', pos: { left: '0%', bottom: 6 } },
  { Icon: Search, title: 'SEO preparado', pos: { left: '38%', top: 4 } },
  { Icon: MousePointerClick, title: 'CTA claros', pos: { right: '0%', top: 2 } },
];

/** Foto local con placeholder si el archivo aún no existe (sin imágenes externas). */
function HeroPhoto() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <span className="hero-photo" data-missing={failed || undefined}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={HERO_PHOTO}
          alt="Propietario de un pequeño negocio atendiendo su web"
          width={620}
          height={520}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="hero-photo__ph" aria-hidden="true">
          <Monitor size={40} strokeWidth={1.4} />
        </span>
      )}
    </span>
  );
}

export default function Hero() {
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
            Web para pequeños negocios y pymes
          </div>

          {/* H1 - 2 lines in desktop, 2-3 in mobile */}
          <h1
            className="hero-h1"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 56px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              marginBottom: '24px',
              margin: '0 0 24px 0',
              maxWidth: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Una web preparada
            <br />
            para captar clientes.
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              marginBottom: '32px',
              margin: '0 0 32px 0',
              maxWidth: '500px',
            }}
          >
            Diseñamos tu web para que las personas te encuentren, entiendan lo
            que haces y se pongan en contacto contigo.
          </p>

          {/* CTA */}
          <Link
            href="/diagnostico/"
            className="hero-cta"
            style={{
              padding: '14px 32px',
              backgroundColor: 'var(--io-accent-dark)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(246, 119, 82, 0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-accent-dark-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-accent-dark)';
            }}
          >
            Analizar mi proyecto
          </Link>

          {/* Benefits — 2x2 on mobile, 4 on desktop */}
          <div
            className="benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid var(--io-border)',
            }}
          >
            {[
              'SEO desde el inicio',
              'Medición incluida',
              '100 % responsive',
              'Preparada para convertir',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--io-text-muted)',
                  lineHeight: 1.4,
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-action)',
                    flexShrink: 0,
                    marginTop: '6px',
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: composición foto real + mini navegador + microcards flotantes */}
        <div className="hero-stage">
          <HeroPhoto />
          <div className="hero-stage__browser">
            <HeroBrowserVisual className="hero-stage__browser-svg" />
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`hero-mc hero-mc--${i}`} style={c.pos}>
                <span className="hero-mc__icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <strong>{c.title}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .hero-stage { position: relative; width: 100%; min-height: 420px; padding: 0; }
        .hero-photo {
          position: absolute; left: 0; top: 0; width: 62%; height: 100%; display: block; overflow: hidden;
          border-radius: var(--io-radius-lg); border: 1px solid var(--io-border);
          background: linear-gradient(135deg, #dbe7ff 0%, #fbe3d6 100%);
        }
        .hero-photo img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 58% 50%; }
        .hero-photo__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(51, 111, 230, 0.45); }

        .hero-stage__browser { position: absolute; right: 0; top: 60%; width: 58%; transform: translateY(-50%); z-index: 2; }
        .hero-stage__browser-svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 10px 24px rgba(15, 23, 42, 0.14)); }

        .hero-mc {
          position: absolute; z-index: 3; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); white-space: nowrap;
        }
        .hero-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 22px; height: 22px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .hero-mc strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); }

        @media (max-width: 1024px) {
          .hero-stage { min-height: 380px; }
        }
        @media (max-width: 767px) {
          .hero-stage { min-height: 300px; }
          .hero-photo { width: 100%; height: 62%; }
          .hero-photo img { object-position: 58% 10%; }
          .hero-stage__browser { width: 78%; top: auto; bottom: 0; right: 4%; transform: none; }
          .hero-mc { padding: 6px 10px; }
          .hero-mc strong { font-size: 11.5px; }
          /* Reposicionar para evitar solape en un stage estrecho (apiladas, no lado a lado) */
          .hero-mc--0 { left: 0 !important; right: auto !important; top: auto !important; bottom: 6px !important; }
          .hero-mc--1 { left: 4% !important; right: auto !important; top: 8px !important; bottom: auto !important; }
          .hero-mc--2 { left: auto !important; right: 4% !important; top: 8px !important; bottom: auto !important; }
        }
        @media (max-width: 430px) {
          .hero-stage { min-height: 260px; }
        }
      `}</style>
    </section>
  );
}
