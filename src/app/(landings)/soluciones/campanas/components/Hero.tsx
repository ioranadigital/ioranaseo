'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Users2, Gauge } from 'lucide-react';

// WebP optimizado (1600×1066) a partir de la fotografía original (4603×3066, ratio 3:2).
const HERO_PHOTO = '/assets/img/campanas/hero-campanas.webp';

// Microcards aprobadas (sin añadir ni inventar ninguna). Posiciones en % de la capa fotográfica,
// elegidas sobre zonas sin rostros: pared entre las dos personas, ventana y mesa bajo el portátil.
const MICROCARDS = [
  { Icon: Search, title: 'Alta intención', copy: 'Llega a personas que ya están buscando una solución.', cls: 'cph-mc--intent' },
  { Icon: Users2, title: 'Nuevas audiencias', copy: 'Descubre clientes potenciales en redes sociales.', cls: 'cph-mc--new' },
  { Icon: Gauge, title: 'Medición continua', copy: 'Medimos resultados para optimizar cada campaña.', cls: 'cph-mc--meas' },
];

export default function Hero() {
  return (
    <section className="cph-section">
      <div className="cph-grid">
        <div className="cph-left">
          <span className="cph-eyebrow">Campañas</span>
          <h1 className="cph-title">Genera demanda para tu negocio.</h1>
          <p className="cph-sub">
            Campañas en Google y redes sociales para llegar a más personas y conseguir resultados.
          </p>
          <div className="cph-ctas">
            <Link href="/diagnostico/" className="cph-cta cph-cta--primary">
              Analizar mi proyecto
            </Link>
            <a href="#como-trabajamos-campanas" className="cph-cta cph-cta--secondary">
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Fondo fotográfico integrado. En desktop es una capa en flujo en la 2ª columna (la altura del
            hero resulta de la composición); en ≤1024px (layout apilado aprobado) va bajo el copy.
            Escala controlada por la proporción real de la foto (3:2); bordes difuminados. */}
        <div className="cph-bg" aria-hidden="true">
          <div className="cph-bg__fade-x">
            <div className="cph-bg__fade-y">
              <Image
                src={HERO_PHOTO}
                alt=""
                fill
                priority
                sizes="(min-width: 1025px) 660px, 540px"
                className="cph-bg__img"
              />
            </div>
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`cph-mc ${c.cls}`}>
                <span className={`cph-mc__icon${i === 1 ? ' is-accent' : ''}`}>
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="cph-mc__text">
                  <strong>{c.title}</strong>
                  <span>{c.copy}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* overflow-x: clip — la capa de foto sobresale a propósito por la derecha; sin esto genera scroll horizontal a 1025–1400px. */
        .cph-section { position: relative; padding: 60px 20px; background-color: var(--io-bg); overflow-x: clip; }
        /* Contenedor estándar de los Heroes (referencia /web-para-empresas/): 1280px, padding lateral 20px.
           2ª columna con el mismo tamaño que antes (605px, o 52,5 % del espacio útil si no cabe): la fotografía
           conserva escala y posición; el resto del ancho es para la columna editorial. container-type permite
           usar cqw (ancho real del contenedor) para compensar los 40px que el contenedor gana a cada lado. */
        .cph-grid {
          container-type: inline-size; max-width: 1280px; margin: 0 auto; display: grid; gap: 48px; align-items: center;
          grid-template-columns: minmax(0, 1fr) min(605px, calc((100% - 48px) * 0.525));
        }
        .cph-left { position: relative; z-index: 1; display: flex; flex-direction: column; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .cph-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 16px; border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
        /* max-width = zona segura de ESTE texto: llega hasta ≈29px dentro del fundido de la foto (el fundido
           mide solo el 12 % de la capa ⇒ alfa ≤ 37 %). Inicio de la capa respecto a la columna de texto:
           100% + 48px (gap) − 50px (margen negativo) − --cph-r. */
        .cph-title {
          --cph-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2;
          letter-spacing: -0.01em; margin: 0 0 24px; max-width: calc(100% + 27px - var(--cph-r));
        }
        .cph-sub { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 32px; max-width: 500px; }

        .cph-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cph-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .cph-cta--primary {
          background: var(--io-accent-dark); color: #fff; border: 1.5px solid var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .cph-cta--primary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); color: #fff; }
        .cph-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .cph-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .cph-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        /* ── Capa fotográfica (desktop ≥1024px) ───────────────────────────── */
        .cph-bg {
          /* En flujo, en la 2ª columna: su altura forma parte de la composición (no hay altura fija).
             margin-left negativo: entra 50px en la columna de texto (zona libre: el H1 termina antes, sin solape)
             para dar presencia sin ampliar de más a las personas. Proporción real 3:2: foto completa,
             sin recorte ni cover. Con ~655px de ancho las cabezas miden ≈105–125px (escala moderada).
             Caras en el 16–29 % y 67–78 % del ancho: fuera del fundido izquierdo (0–12 %). */
          /* Ancho propio (720px) y desplazamiento --cph-r hacia la izquierda: foto desplazada 60px
             a la izquierda (2026-10-07). */
          --cph-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          position: relative; right: var(--cph-r); z-index: 0; margin-left: -10px;
          width: min(720px, calc(100% + 115px)); aspect-ratio: 3 / 2; pointer-events: none;
        }
        .cph-bg__fade-x, .cph-bg__fade-y { position: absolute; inset: 0; }
        /* Degradado de integración: izquierda → fondo de la sección. La mujer de la izquierda tiene
           el pelo en el 16 %: el fundido (0→12 %) no la toca. A la derecha, mesa/pared → se disuelve. */
        .cph-bg__fade-x {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 90%, transparent 100%);
        }
        /* El pelo de la mujer izquierda llega al 9 % de la altura: rampa superior corta (0→7 %).
           Cuerpos y mesa cortados por el borde inferior: se disuelven en el último 14 %. */
        .cph-bg__fade-y {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 7%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 7%, #000 86%, transparent 100%);
        }
        .cph-bg__img { object-fit: cover; object-position: 50% 50%; }

        .cph-mc {
          position: absolute; z-index: 1; display: flex; align-items: flex-start; gap: 8px; width: 176px; padding: 8px 10px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 14px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08); pointer-events: auto;
        }
        .cph-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .cph-mc__icon.is-accent { background: rgba(244, 162, 124, 0.25); color: #c8663a; }
        .cph-mc__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .cph-mc__text strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); line-height: 1.25; }
        .cph-mc__text span { font-size: 11.5px; line-height: 1.3; color: var(--io-text-muted); }
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .cph-mc { transition: transform 180ms ease, box-shadow 180ms ease; }
          .cph-mc:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12); }
        }
        /* Zonas libres (% de la capa): pared entre las dos personas (arriba), ventana (arriba dcha.)
           y mesa bajo el portátil (abajo). Ninguna sobre rostros, manos ni el portátil. */
        .cph-mc--intent { top: 5%; left: 32%; }
        .cph-mc--new    { top: 6%; right: 2%; }
        .cph-mc--meas   { bottom: 6%; left: 30%; }

        /* Desktop: contenido alineado arriba con el mismo margen superior que las páginas aprobadas
           (60px). La altura resulta de la composición (texto vs. foto), no de un valor fijo. */
        @media (min-width: 1025px) {
          .cph-section { padding-top: 60px; padding-bottom: 60px; }
          .cph-grid { align-items: start; }
        }

        /* ── ≤1024px: layout apilado aprobado (copy centrado); foto en flujo bajo el copy ── */
        @media (max-width: 1024px) {
          .cph-grid { grid-template-columns: 1fr; gap: 40px; }
          .cph-left { align-items: center; text-align: center; }
          .cph-title { max-width: none; }
          .cph-ctas { justify-content: center; }
          .cph-bg {
            right: auto; margin: -24px auto 0; width: 100%; max-width: 540px; aspect-ratio: 4 / 3;
          }
          /* Recorte suave de los lados (4/3 desde 3/2): se ve del ≈4 % al ≈93 %, ambas caras completas. */
          .cph-bg__img { object-position: 40% 50%; }
          .cph-bg__fade-x {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
          .cph-mc { width: auto; padding: 6px 10px; align-items: center; }
          .cph-mc__text span { display: none; }
          .cph-mc__text strong { font-size: 11.5px; white-space: nowrap; }
          .cph-mc--intent { top: 6%; left: 5%; right: auto; bottom: auto; }
          .cph-mc--new { top: 6%; right: 5%; left: auto; bottom: auto; }
          .cph-mc--meas { bottom: 6%; left: 5%; top: auto; right: auto; }
        }
        @media (max-width: 768px) {
          .cph-section { padding: 40px 20px; }
        }
        @media (max-width: 767px) {
          .cph-bg { margin-top: -16px; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .cph-section { padding: 32px 20px; }
          .cph-title { font-size: 36px; line-height: 1.25; }
          .cph-cta { font-size: 15px; }
        }
        @media (max-width: 375px) {
          .cph-section { padding: 32px 16px; }
          .cph-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .cph-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .cph-sub { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
