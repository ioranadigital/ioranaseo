'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Users, TrendingUp, Handshake, Monitor, Search, MousePointerClick } from 'lucide-react';

const HERO_PHOTO = '/assets/img/soluciones/hero-soluciones-business.webp';

const BENEFITS = [
  { Icon: Users, title: 'Más clientes', text: 'Atrae y convierte' },
  { Icon: TrendingUp, title: 'Crecimiento real', text: 'Estrategias medibles' },
  { Icon: Handshake, title: 'Acompañamiento', text: 'De principio a fin' },
];

// Posiciones comprobadas contra la foto real (recorte panorámico 2.2:1): las
// dos caras están centro-derecha (45-75% x); las 3 microcards flotan sobre
// zonas sin cara/manos — ventana arriba-izquierda del grupo, estanterías
// arriba-derecha, mesa abajo-derecha.
const MICROCARDS = [
  { Icon: Search, title: 'SEO preparado', pos: { left: '38%', top: 10 } },
  { Icon: Monitor, title: 'Diseño responsive', pos: { right: '4%', top: 10 } },
  { Icon: MousePointerClick, title: 'CTA claros', pos: { right: '4%', bottom: 10 } },
];

/** Foto local con placeholder si el archivo aún no existe (sin imágenes externas ni reutilizar la de otras páginas). */
function HeroPhoto() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <span className="sh-bg-photo" data-missing={failed || undefined}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={HERO_PHOTO}
          alt="Dos profesionales de un pequeño negocio trabajando juntos en su presencia digital"
          width={1920}
          height={873}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="sh-bg-photo__ph" aria-hidden="true">
          <Monitor size={40} strokeWidth={1.4} />
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="sh-section">
      {/* Fondo a sangre: foto + degradado que se difumina hacia la derecha
          (sólido/legible a la izquierda, revela la foto según avanza) */}
      <div className="sh-bg" aria-hidden="true">
        <HeroPhoto />
        <div className="sh-bg__fade" />
        {MICROCARDS.map((c, i) => {
          const Icon = c.Icon;
          return (
            <div key={c.title} className={`sh-mc sh-mc--${i}`} style={c.pos}>
              <span className="sh-mc__icon" aria-hidden="true">
                <Icon size={14} strokeWidth={2.2} />
              </span>
              <strong>{c.title}</strong>
            </div>
          );
        })}
      </div>

      <div className="sh-content">
        <span className="sh-eyebrow">Soluciones</span>
        <h1 className="sh-title">Soluciones para hacer crecer tu negocio</h1>
        <p className="sh-sub">
          Web, visibilidad, campañas y conversión conectadas para convertir tu presencia digital en
          oportunidades.
        </p>

        <div className="sh-ctas">
          <a href="#nuestras-soluciones" className="sh-cta sh-cta--primary">
            Ver todas las soluciones
          </a>
          <Link href="/diagnostico/" className="sh-cta sh-cta--secondary">
            Analizar mi proyecto
          </Link>
        </div>

        <div className="sh-benefits">
          {BENEFITS.map((b) => {
            const Icon = b.Icon;
            return (
              <div key={b.title} className="sh-benefit">
                <span className="sh-benefit__icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={2.1} />
                </span>
                <span className="sh-benefit__text">
                  <strong>{b.title}</strong>
                  <span>{b.text}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .sh-section { position: relative; overflow: hidden; background-color: var(--io-bg); padding: 0 20px; }

        /* Fondo a sangre (foto + degradado + microcards), detrás del contenido */
        .sh-bg { position: absolute; inset: 0; z-index: 0; }
        .sh-bg-photo { position: absolute; inset: 0; display: block; overflow: hidden; }
        .sh-bg-photo img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 60% 45%; }
        .sh-bg-photo__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(51, 111, 230, 0.35); background: linear-gradient(135deg, #dbe7ff 0%, #fbe3d6 100%); }
        /* Sólido/legible a la izquierda (mismo tono que el fondo de página), se difumina y revela la foto hacia la derecha */
        .sh-bg__fade {
          position: absolute; inset: 0;
          background: linear-gradient(to right, var(--io-bg) 0%, var(--io-bg) 32%, rgba(248, 250, 252, 0.82) 44%, rgba(248, 250, 252, 0) 62%);
        }

        /* Contenedor estándar de los Heroes (referencia /web-para-empresas/): 1280px, padding lateral 20px
           (en la sección) y 60px de margen superior. El fondo fotográfico sigue a sangre (inset: 0). */
        .sh-content { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 60px 0; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .sh-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 16px; border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
        /* max-width = zona segura de ESTE texto: el degradado deja ≥45 % de foto a partir de ≈50 % del ancho
           de la sección; el H1 (2 líneas, la más larga ≈598px) llega como máximo hasta ahí. */
        .sh-title { font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 24px; max-width: 610px; }
        .sh-sub { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 32px; max-width: 500px; }

        .sh-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 32px; }
        .sh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .sh-cta--primary { background: var(--io-action); color: #fff; border: 1.5px solid var(--io-action); }
        .sh-cta--primary:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .sh-cta--secondary {
          background: var(--io-accent-dark); color: #fff; border: 1.5px solid var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .sh-cta--secondary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); }
        .sh-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        .sh-benefits { display: flex; flex-wrap: wrap; gap: 22px; padding-top: 24px; border-top: 1px solid var(--io-border); max-width: 480px; }
        .sh-benefit { display: flex; align-items: flex-start; gap: 10px; }
        .sh-benefit__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 30px; height: 30px;
          border-radius: 50%; background: var(--io-bg-soft); color: var(--io-action); margin-top: 1px;
        }
        .sh-benefit__text { display: flex; flex-direction: column; gap: 1px; }
        .sh-benefit__text strong { font-size: 13.5px; font-weight: 700; color: var(--io-text); line-height: 1.3; }
        .sh-benefit__text span { font-size: 12.5px; color: var(--io-text-muted); }

        .sh-mc {
          position: absolute; z-index: 1; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12); white-space: nowrap;
        }
        .sh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 22px; height: 22px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .sh-mc strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); }

        /* Desktop (≥1024px, mismo corte que el resto del sitio): fondo a sangre
           con altura fija cómoda para foto + degradado. A 768-1023px el texto
           (max-width fijo en px) ya no cabe dentro de la zona sólida del
           degradado — se probó y el copy quedaba ilegible sobre la foto. */
        @media (min-width: 1024px) {
          .sh-section { min-height: 560px; display: flex; align-items: center; }
          .sh-content { width: 100%; }
        }
        @media (min-width: 1440px) {
          .sh-section { min-height: 600px; }
        }

        /* Mobile/tablet (<1024px): sin fondo a sangre (el texto no cabe con
           legibilidad garantizada dentro del degradado a estas anchuras) —
           vuelve al patrón habitual de foto rectangular apilada bajo el texto. */
        @media (max-width: 1023px) {
          .sh-section { padding: 60px 20px 0; }
          .sh-bg { position: static; display: flex; flex-direction: column; margin-top: 28px; }
          .sh-bg-photo {
            position: relative; width: 100%; aspect-ratio: 1.6; border-radius: var(--io-radius-lg);
            border: 1px solid var(--io-border);
          }
          .sh-bg-photo img { object-position: 55% 45%; }
          .sh-bg__fade { display: none; }
          .sh-content { padding: 0 0 40px; }
          .sh-title, .sh-benefits { max-width: none; }
          .sh-mc { padding: 6px 10px; }
          .sh-mc strong { font-size: 11.5px; }
          .sh-mc--0 { left: 3% !important; right: auto !important; top: 10px !important; }
          .sh-mc--1 { right: 3% !important; top: 10px !important; }
          .sh-mc--2 { right: 3% !important; bottom: 10px !important; }
        }
        @media (max-width: 768px) {
          .sh-section { padding: 40px 20px 0; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .sh-section { padding: 32px 20px 0; }
          .sh-title { font-size: 36px; line-height: 1.25; }
          .sh-cta { font-size: 15px; }
        }
        @media (max-width: 375px) {
          .sh-section { padding: 32px 16px 0; }
          .sh-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .sh-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .sh-sub { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
