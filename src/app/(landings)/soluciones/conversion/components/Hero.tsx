'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MousePointerClick, Route, TrendingUp } from 'lucide-react';

// WebP original (1000×667, ratio 3:2) usado tal cual: sin recomprimir ni ampliar (la fuente ya es WebP de 62 KB).
const HERO_PHOTO = '/assets/img/conversion/hero-conversion.webp';

// Microcards aprobadas (se conservan las dos; ninguna métrica). Posiciones en % de la capa fotográfica,
// sobre zonas sin rostro ni manos: fondo de madera a la izquierda del hombre, arriba y abajo.
const MICROCARDS = [
  { Icon: MousePointerClick, title: 'Contacto fácil', copy: 'Menos pasos para convertir una visita en oportunidad.', cls: 'cvh-mc--contact', tone: '' },
  { Icon: Route, title: 'Menos fricción', copy: 'Una experiencia clara que facilita avanzar.', cls: 'cvh-mc--friction', tone: ' is-green' },
  { Icon: TrendingUp, title: 'Mejora continua', copy: 'Medimos y optimizamos para convertir mejor.', cls: 'cvh-mc--improve', tone: ' is-accent' },
];

export default function Hero() {
  return (
    <section className="cvh-section">
      <div className="cvh-grid">
        <div className="cvh-left">
          <span className="cvh-eyebrow">Conversión</span>
          <h1 className="cvh-title">Convierte más visitas en oportunidades reales.</h1>
          <p className="cvh-sub">
            Analizamos tu web, mejoramos la experiencia de usuario y optimizamos cada punto de conversión
            para que más personas contacten, soliciten información o se conviertan en clientes.
          </p>
          <div className="cvh-ctas">
            <Link href="/diagnostico/" className="cvh-cta cvh-cta--primary">
              Analizar mi proyecto
            </Link>
            <a href="#como-trabajamos-conversion" className="cvh-cta cvh-cta--secondary">
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Fondo fotográfico integrado. En desktop es una capa en flujo en la 2ª columna (la altura del hero
            resulta de la composición); en ≤1024px (layout apilado aprobado) va bajo el copy.
            Escala controlada por la proporción real de la foto (3:2); bordes difuminados. */}
        <div className="cvh-bg" aria-hidden="true">
          <div className="cvh-bg__fade-x">
            <div className="cvh-bg__fade-y">
              <Image
                src={HERO_PHOTO}
                alt=""
                fill
                priority
                sizes="(min-width: 1025px) 660px, 540px"
                className="cvh-bg__img"
              />
            </div>
          </div>
          {MICROCARDS.map((c) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`cvh-mc ${c.cls}`}>
                <span className={`cvh-mc__icon${c.tone}`}>
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <span className="cvh-mc__text">
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
        .cvh-section { padding: 60px 20px; background-color: var(--io-bg); overflow-x: clip; }
        /* Contenedor estándar de los Heroes (referencia /web-para-empresas/): 1280px, padding lateral 20px.
           2ª columna de 605px (o 52,5 % del espacio útil si no cabe). container-type permite usar cqw (ancho real
           del contenedor) para compensar los 40px que el contenedor gana a cada lado. */
        .cvh-grid {
          container-type: inline-size; max-width: 1280px; margin: 0 auto; display: grid; gap: 48px; align-items: center;
          grid-template-columns: minmax(0, 1fr) min(605px, calc((100% - 48px) * 0.525));
        }
        .cvh-left { position: relative; z-index: 1; display: flex; flex-direction: column; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .cvh-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 16px; border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
        /* Ancho del H1 = zona segura de ESTE texto: llega hasta ≈70px dentro del fundido de la foto (el fundido mide
           el 30 % de la capa ≈ 196px ⇒ alfa ≤ 36 %). Inicio de la capa respecto a la columna de texto:
           100% + 48px (gap) − 50px (margen negativo) − --cvh-r. (width, no max-width: debe poder pasar de la columna.) */
        .cvh-title {
          --cvh-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2;
          letter-spacing: -0.01em; margin: 0 0 24px; width: calc(100% + 70px - var(--cvh-r));
        }
        .cvh-sub { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 32px; max-width: 500px; }

        .cvh-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cvh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .cvh-cta--primary {
          background: var(--io-accent-dark); color: #fff; border: 1.5px solid var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .cvh-cta--primary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); color: #fff; }
        .cvh-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .cvh-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .cvh-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        /* ── Capa fotográfica (desktop >1024px) ───────────────────────────── */
        .cvh-bg {
          /* En flujo, en la 2ª columna: su altura forma parte de la composición (no hay altura fija). Ancho propio
             (720px) y desplazamiento --cvh-r a la izquierda: foto desplazada 60px a la izquierda (2026-10-07).
             Proporción real 3:2: foto completa, sin recorte ni cover. */
          --cvh-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          position: relative; right: var(--cvh-r); z-index: 0; margin-left: -10px;
          width: min(720px, calc(100% + 115px)); aspect-ratio: 3 / 2; pointer-events: none;
        }
        .cvh-bg__fade-x, .cvh-bg__fade-y { position: absolute; inset: 0; }
        /* Degradado de integración: izquierda (taller desenfocado) → fondo de la sección. El hombre ocupa el 45–94 %;
           su hombro llega al 94 % de la foto: se disuelve en el último 10 %. */
        .cvh-bg__fade-x {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 30%, #000 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 30%, #000 90%, transparent 100%);
        }
        /* El pelo llega al 6 % de la altura: rampa superior corta (0→6 %). Cuerpo y banco cortados por el borde
           inferior: se disuelven en el último 14 %. */
        .cvh-bg__fade-y {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 6%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, #000 6%, #000 86%, transparent 100%);
        }
        .cvh-bg__img { object-fit: cover; object-position: 50% 50%; }

        .cvh-mc {
          position: absolute; z-index: 1; display: flex; align-items: flex-start; gap: 8px; width: 176px; padding: 8px 10px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 14px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08); pointer-events: auto;
        }
        .cvh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .cvh-mc__icon.is-green { background: rgba(34, 160, 96, 0.14); color: #1f8f57; }
        .cvh-mc__icon.is-accent { background: rgba(244, 162, 124, 0.25); color: #c8663a; }
        .cvh-mc__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .cvh-mc__text strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); line-height: 1.25; }
        .cvh-mc__text span { font-size: 11.5px; line-height: 1.3; color: var(--io-text-muted); }
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .cvh-mc { transition: transform 180ms ease, box-shadow 180ms ease; }
          .cvh-mc:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12); }
        }
        /* Zonas libres (% de la capa): madera del fondo a la izquierda del hombre (cabeza en x ≥ 64 %). */
        .cvh-mc--contact  { top: 6%; left: 30%; }
        .cvh-mc--friction { top: 42%; left: 6%; }
        .cvh-mc--improve  { bottom: 6%; left: 34%; }

        /* Desktop: contenido alineado arriba con el mismo margen superior que /web-para-empresas/ (60px). */
        @media (min-width: 1025px) {
          .cvh-grid { align-items: start; }
        }

        @media (max-width: 1024px) {
          .cvh-grid { grid-template-columns: 1fr; gap: 40px; }
          .cvh-left { align-items: center; text-align: center; }
          .cvh-title { width: auto; }
          .cvh-ctas { justify-content: center; }
          .cvh-bg {
            right: auto; margin: -24px auto 0; width: 100%; max-width: 540px; aspect-ratio: 6 / 5;
          }
          /* Recorte de la izquierda (madera): se ve del 20 % al 100 %, el hombre completo. */
          .cvh-bg__img { object-position: 100% 50%; }
          .cvh-bg__fade-x {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%);
          }
          .cvh-mc { width: auto; padding: 6px 10px; align-items: center; }
          .cvh-mc__text span { display: none; }
          .cvh-mc__text strong { font-size: 11.5px; white-space: nowrap; }
          .cvh-mc--contact  { top: 6%; left: 5%; bottom: auto; }
          .cvh-mc--friction { top: 40%; left: 5%; bottom: auto; }
          .cvh-mc--improve  { bottom: 6%; left: 5%; top: auto; }
        }
        @media (max-width: 768px) {
          .cvh-section { padding: 40px 20px; }
        }
        @media (max-width: 767px) {
          .cvh-bg { margin-top: -16px; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .cvh-section { padding: 32px 20px; }
          .cvh-title { font-size: 36px; line-height: 1.25; }
          .cvh-cta { font-size: 15px; }
        }
        @media (max-width: 375px) {
          .cvh-section { padding: 32px 16px; }
          .cvh-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .cvh-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .cvh-sub { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
