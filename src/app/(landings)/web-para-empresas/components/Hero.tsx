'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Monitor, Search, MousePointerClick } from 'lucide-react';

// WebP optimizado (1600×1102) a partir de la fotografía original (4854×3343).
const HERO_PHOTO = '/assets/img/web-para-empresas/hero-business.webp';

// Microcards aprobadas (sin añadir ni inventar ninguna). Posiciones en % de la capa
// fotográfica, elegidas sobre zonas sin rostros (estanterías, mostrador).
const MICROCARDS = [
  { Icon: Search, title: 'SEO preparado', copy: 'Estructura pensada para posicionar mejor.', cls: 'wh-mc--seo' },
  { Icon: Monitor, title: 'Diseño responsive', copy: 'Preparada para todos los dispositivos.', cls: 'wh-mc--resp' },
  { Icon: MousePointerClick, title: 'CTA claros', copy: 'Recorridos pensados para facilitar el contacto.', cls: 'wh-mc--cta' },
];

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
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
        {/* Left: Content (por encima de la capa fotográfica, que se ancla a la sección) */}
        <div style={{ position: 'relative', zIndex: 1 }}>
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
            className="benefits-grid wh-benefits"
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

        {/* Fondo fotográfico integrado. En desktop es una capa absoluta anclada a la
            derecha del hero (detrás del contenido); en ≤1024px (donde el layout
            aprobado ya apila) pasa a ser un bloque en flujo bajo el copy.
            La escala se controla con la proporción real de la foto (sin recorte, sin
            `cover` sobre una franja ancha) y los bordes se funden con el fondo. */}
        <div className="wh-bg" aria-hidden="true">
          <div className="wh-bg__fade-x">
            <div className="wh-bg__fade-y">
              <Image
                src={HERO_PHOTO}
                alt=""
                fill
                priority
                sizes="(min-width: 1025px) 720px, 640px"
                className="wh-bg__img"
              />
            </div>
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`wh-mc ${c.cls}`}>
                <span className={`wh-mc__icon${i === 2 ? ' is-accent' : ''}`}>
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="wh-mc__text">
                  <strong>{c.title}</strong>
                  <span>{c.copy}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ── Capa fotográfica (desktop >1024px) ───────────────────────────── */
        .wh-bg {
          --wh-w: clamp(440px, calc(66.7vw - 213px), 720px);
          --wh-r: clamp(16px, calc(7vw + 160px), 260px);
          /* Posición mínima por la izquierda: sigue a la columna de texto (rejilla centrada, máx. 1280px).
             El H1 termina ~553px dentro de la rejilla; la foto puede entrar unos px en ese margen (zona
             ya muy difuminada) pero no pasar por detrás del texto, que es el protagonista. */
          --wh-min-left: calc(max(20px, (100% - 1280px) / 2) + 515px);
          position: absolute; z-index: 0; top: 47%; transform: translateY(-50%);
          /* La foto se desplaza a la izquierda con un margen --wh-r respecto al borde derecho (más
             margen cuanto más ancho el viewport), sin bajar de --wh-min-left. */
          left: max(var(--wh-min-left), calc(100% - var(--wh-w) - var(--wh-r)));
          width: min(var(--wh-w), calc(100% - var(--wh-min-left) - 16px));
          aspect-ratio: 4854 / 3343; pointer-events: none;
        }
        .wh-bg__fade-x, .wh-bg__fade-y { position: absolute; inset: 0; }
        /* Degradado de integración: izquierda → fondo de la sección (blanco suave), la
           foto aparece progresivamente; el rostro de la mujer (x≈16-27%) queda ya opaco. */
        .wh-bg__fade-x {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 16%, #000 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 16%, #000 90%, transparent 100%);
        }
        /* Sin cortes duros arriba/abajo: la capa es más baja que el hero y se disuelve. */
        .wh-bg__fade-y {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%);
        }
        .wh-bg__img { object-fit: cover; object-position: 50% 50%; }

        .wh-mc {
          position: absolute; z-index: 1; display: flex; align-items: flex-start; gap: 8px; width: 190px; padding: 8px 10px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 14px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }
        .wh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .wh-mc__icon.is-accent { background: rgba(244, 162, 124, 0.25); color: #c8663a; }
        .wh-mc__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .wh-mc__text strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); line-height: 1.25; }
        .wh-mc__text span { font-size: 11.5px; line-height: 1.3; color: var(--io-text-muted); }
        /* Posiciones sobre zonas sin rostros: estantería sup. dcha., estantería dcha., mostrador. */
        .wh-mc--seo  { top: 9%;  right: 8%; }
        .wh-mc--resp { top: 41%; right: 5%; }
        .wh-mc--cta  { bottom: 9%; right: 6%; }

        /* Los beneficios no deben invadir la zona de la foto en desktop */
        @media (min-width: 1025px) {
          .wh-benefits { max-width: 560px; }
        }

        /* ── ≤1024px: layout apilado aprobado; foto en flujo bajo el copy ──── */
        @media (max-width: 1024px) {
          .wh-bg {
            position: relative; left: auto; right: auto; top: auto; transform: none;
            width: 100%; max-width: 640px; margin: -28px auto 0;
          }
          .wh-bg__fade-x {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
          .wh-mc { width: auto; padding: 6px 10px; align-items: center; }
          .wh-mc__text span { display: none; }
          .wh-mc__text strong { font-size: 11.5px; white-space: nowrap; }
        }
        /* Móvil: se omite la microcard puramente decorativa para preservar encuadre y lectura */
        @media (max-width: 767px) {
          .wh-bg { margin-top: -20px; }
          .wh-mc--resp { display: none; }
          .wh-mc--seo  { top: 6%;  right: 0; }
          .wh-mc--cta  { bottom: 10%; right: 4%; }
        }
      `}</style>
    </section>
  );
}
