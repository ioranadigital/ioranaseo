'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, FileText, Sparkles } from 'lucide-react';

// WebP optimizado (1600×1067) a partir de la fotografía original (5221×3481, ratio 3:2).
const HERO_PHOTO = '/assets/img/visibilidad/hero-visibilidad.webp';

// Microcards aprobadas (sin añadir ni inventar ninguna). Posiciones en % de la capa fotográfica,
// elegidas sobre zonas sin rostros (estantería, mostrador de la mesa).
const MICROCARDS = [
  { Icon: MapPin, title: 'Cerca de ti', copy: 'Presencia preparada para búsquedas locales.', cls: 'vh-mc--near' },
  { Icon: Sparkles, title: 'Más visible', copy: 'Mejor presencia en Google y otros buscadores.', cls: 'vh-mc--visible' },
  { Icon: FileText, title: 'Contenido relevante', copy: 'Información clara para buscadores y asistentes de IA.', cls: 'vh-mc--content' },
];

export default function Hero() {
  return (
    <section className="vh-section">
      <div className="vh-grid">
        <div className="vh-left">
          <span className="vh-eyebrow">Visibilidad</span>
          <h1 className="vh-title">Que te encuentren cuando te necesitan.</h1>
          <p className="vh-sub">
            SEO, SEO Local y Google Maps para aumentar tu visibilidad y atraer más clientes.
          </p>
          <div className="vh-ctas">
            <Link href="/diagnostico/" className="vh-cta vh-cta--primary">
              Analizar mi proyecto
            </Link>
            <a href="#como-trabajamos" className="vh-cta vh-cta--secondary">
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Fondo fotográfico integrado. En desktop es una capa absoluta (detrás del copy) cuya
            parte izquierda —ventana con árboles desenfocados— se funde con el fondo de la sección;
            en ≤1024px (donde el layout aprobado ya apila) pasa a ser un bloque en flujo bajo el copy.
            Escala controlada por la proporción real de la foto (3:2); bordes difuminados. */}
        <div className="vh-bg" aria-hidden="true">
          <div className="vh-bg__fade-x">
            <div className="vh-bg__fade-y">
              <Image
                src={HERO_PHOTO}
                alt=""
                fill
                priority
                sizes="(min-width: 1025px) 600px, 540px"
                className="vh-bg__img"
              />
            </div>
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`vh-mc ${c.cls}`}>
                <span className={`vh-mc__icon${i === 1 ? ' is-accent' : ''}`}>
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="vh-mc__text">
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
        .vh-section { position: relative; padding: 60px 20px; background-color: var(--io-bg); overflow-x: clip; }
        /* Contenedor estándar de los Heroes (referencia /web-para-empresas/): 1280px, padding lateral 20px.
           2ª columna con el mismo tamaño que antes (605px, o 52,5 % del espacio útil si no cabe): la fotografía
           conserva escala y posición; el resto del ancho es para la columna editorial. container-type permite
           usar cqw (ancho real del contenedor) para compensar los 40px que el contenedor gana a cada lado. */
        .vh-grid {
          container-type: inline-size; max-width: 1280px; margin: 0 auto; display: grid; gap: 48px; align-items: center;
          grid-template-columns: minmax(0, 1fr) min(605px, calc((100% - 48px) * 0.525));
        }
        .vh-left { position: relative; z-index: 1; display: flex; flex-direction: column; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .vh-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 16px; border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
        /* max-width = zona segura de ESTE texto: llega hasta ≈85px dentro del fundido de la foto (alfa ≤ 39 %,
           como el solape aceptado en /web-para-empresas/). Inicio de la capa respecto a la columna de texto:
           100% + 48px (gap) − 120px (margen negativo) − --vh-r. */
        .vh-title {
          --vh-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2;
          letter-spacing: -0.01em; margin: 0 0 24px; max-width: calc(100% + 13px - var(--vh-r));
        }
        .vh-sub { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 32px; max-width: 500px; }

        .vh-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .vh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .vh-cta--primary {
          background: var(--io-accent-dark); color: #fff; border: 1.5px solid var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .vh-cta--primary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); color: #fff; }
        .vh-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .vh-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .vh-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        /* ── Capa fotográfica (desktop ≥1024px) ───────────────────────────── */
        .vh-bg {
          /* En flujo, en la 2ª columna: su altura forma parte de la composición y el hero crece con
             ella (no hay altura fija). Con margin-left negativo entra 120px en la columna de texto —
             zona libre y ya muy difuminada (el H1 termina antes) — para ganar presencia sin ampliar
             a las personas más de la cuenta. Proporción real 3:2: se ve la foto completa, sin recorte
             ni cover. Cabeza ≈ 106px; caras en el 42–80 % del ancho, fuera del fundido (0–30 %). */
          /* Ancho propio (720px) y desplazamiento --vh-r hacia la izquierda: foto agrandada como el resto
             de páginas (campañas/conversión, 2026-10-07). */
          --vh-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          position: relative; right: var(--vh-r); z-index: 0; margin-left: -20px;
          width: min(720px, calc(100% + 115px)); aspect-ratio: 3 / 2; pointer-events: none;
        }
        .vh-bg__fade-x, .vh-bg__fade-y { position: absolute; inset: 0; }
        /* Degradado de integración: izquierda → fondo de la sección. Las caras empiezan en el 42 %
           de la foto, así que el fundido (0→30 %) nunca las toca. Derecha: el cuerpo de la mujer
           está cortado por el borde de la foto, se disuelve en el último 12 %. */
        .vh-bg__fade-x {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 30%, #000 88%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 30%, #000 88%, transparent 100%);
        }
        /* Sin cortes duros arriba/abajo (los cuerpos y la mesa están cortados por el borde inferior). */
        .vh-bg__fade-y {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 86%, transparent 100%);
        }
        .vh-bg__img { object-fit: cover; object-position: 50% 50%; }

        .vh-mc {
          position: absolute; z-index: 1; display: flex; align-items: flex-start; gap: 8px; width: 176px; padding: 8px 10px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 14px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08); pointer-events: auto;
        }
        .vh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .vh-mc__icon.is-accent { background: rgba(244, 162, 124, 0.25); color: #c8663a; }
        .vh-mc__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .vh-mc__text strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); line-height: 1.25; }
        .vh-mc__text span { font-size: 11.5px; line-height: 1.3; color: var(--io-text-muted); }
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .vh-mc { transition: transform 180ms ease, box-shadow 180ms ease; }
          .vh-mc:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12); }
        }
        /* Posiciones sobre zonas sin rostro ni manos (foto del taller): pared/techo arriba a la izquierda
           y zona de papeles abajo a la izquierda. La cara y las manos están a la derecha: no se ocupa. */
        .vh-mc--near    { top: 7%; left: 7%; }
        .vh-mc--content { top: 7%; left: 34%; }
        .vh-mc--visible { bottom: 7%; left: 17%; }

        /* Desktop: contenido alineado arriba con el mismo margen superior que /web-para-empresas/
           (60px). La altura resulta de la composición (texto vs. foto), no de un valor fijo. */
        @media (min-width: 1025px) {
          .vh-section { padding-top: 60px; padding-bottom: 60px; }
          .vh-grid { align-items: start; }
        }

        /* ── ≤1024px: layout apilado aprobado (copy centrado); foto en flujo bajo el copy ── */
        @media (max-width: 1024px) {
          .vh-grid { grid-template-columns: 1fr; gap: 40px; }
          .vh-left { align-items: center; text-align: center; }
          .vh-title { max-width: none; }
          .vh-ctas { justify-content: center; }
          .vh-bg {
            position: relative; left: auto; right: auto; top: auto; height: auto; transform: none;
            width: 100%; max-width: 540px; margin: -24px auto 0; aspect-ratio: 6 / 5;
          }
          /* Recorte suave por la izquierda (ventana) para centrar a la pareja: se ve el 80 % derecho. */
          .vh-bg__img { object-position: 100% 50%; }
          .vh-bg__fade-x {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
          .vh-mc { width: auto; padding: 6px 10px; align-items: center; }
          .vh-mc__text span { display: none; }
          .vh-mc__text strong { font-size: 11.5px; white-space: nowrap; }
          .vh-mc--near    { top: 6%; left: 5%; bottom: auto; right: auto; }
          .vh-mc--content { top: 20%; left: 5%; bottom: auto; right: auto; }
          .vh-mc--visible { bottom: 7%; left: 5%; top: auto; right: auto; }
        }
        @media (max-width: 768px) {
          .vh-section { padding: 40px 20px; }
        }
        @media (max-width: 767px) {
          .vh-bg { margin-top: -16px; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .vh-section { padding: 32px 20px; }
          .vh-title { font-size: 36px; line-height: 1.25; }
          .vh-cta { font-size: 15px; }
        }
        @media (max-width: 375px) {
          .vh-section { padding: 32px 16px; }
          .vh-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .vh-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .vh-sub { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
