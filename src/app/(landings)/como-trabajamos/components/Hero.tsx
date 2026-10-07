'use client';

import Link from 'next/link';
import Image from 'next/image';

const IMG_BASE = '/assets/img/como-trabajamos';

const CARDS = [
  { number: '01', title: 'Diagnóstico', tone: 'blue', image: `${IMG_BASE}/diagnostico.webp` },
  { number: '02', title: 'Plan de acción', tone: 'peach', image: `${IMG_BASE}/plan-accion.webp` },
  { number: '03', title: 'Seguimiento', tone: 'green', image: `${IMG_BASE}/seguimiento.webp` },
] as const;

export default function Hero() {
  return (
    <section className="cth-section">
      <div className="cth-grid">
        <div className="cth-left">
          <span className="cth-eyebrow">Cómo trabajamos</span>
          <h1 className="cth-title">Te acompañamos de principio a fin.</h1>
          <p className="cth-sub">
            Combinamos estrategia, ejecución y seguimiento continuo para que conviertas más visitas en
            oportunidades reales. Siempre con comunicación clara y total transparencia.
          </p>
          <div className="cth-ctas">
            <Link href="/diagnostico/" className="cth-cta cth-cta--primary">
              Empezar diagnóstico
            </Link>
            <Link href="/contacto/" className="cth-cta cth-cta--secondary">
              Hablar con nosotros
            </Link>
          </div>
        </div>

        <div className="cth-stage">
          {CARDS.map((c, i) => {
            return (
              <div key={c.number} className="cth-cardwrap">
                {i < CARDS.length - 1 && <span className="cth-arrow" aria-hidden="true" />}
                <div className={`cth-card cth-card--${c.tone}`}>
                  <span className="cth-card__num">{c.number}</span>
                  <div className="cth-card__visual">
                    <Image className="cth-card__svg" src={c.image} alt="" width={512} height={572} sizes="(max-width: 767px) 56px, 220px" />
                  </div>
                  <span className="cth-card__title">{c.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cth-section { padding: 60px 20px; background-color: var(--io-bg); }
        /* Contenedor estándar de los Heroes (referencia /web-para-empresas/): 1280px, padding lateral 20px.
           2ª columna con el mismo tamaño que antes (662px, o 57,5 % del espacio útil si no cabe): el escenario
           conserva escala y posición; el resto del ancho es para la columna editorial. container-type permite
           usar cqw (ancho real del contenedor) para compensar los 40px que el contenedor gana a cada lado. */
        .cth-grid {
          container-type: inline-size; max-width: 1280px; margin: 0 auto; display: grid; gap: 48px; align-items: center;
          /* 3er término: por debajo de ≈1180px el escenario cede ancho a la columna editorial (≥441px: "Te acompañamos"
             mide 469px a 56px) para que el H1 estándar no pase a 4 líneas. Desde ≈1180px vale 662px. */
          grid-template-columns: minmax(0, 1fr) min(662px, calc((100% - 48px) * 0.575), max(400px, calc(100% - 500px)));
        }
        .cth-left { display: flex; flex-direction: column; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .cth-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 16px; border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
                /* max-width = zona segura de ESTE texto: llega hasta 20px antes del escenario (el escenario conserva su
           posición anterior: empieza en 100% + 48px (gap) − --cth-r respecto a la columna de texto). */
        .cth-title {
          --cth-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px);
          font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2;
          letter-spacing: -0.01em; margin: 0 0 24px; width: calc(100% + 28px - var(--cth-r));
        }
                .cth-sub { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 32px; max-width: 500px; }

        .cth-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cth-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .cth-cta--primary { background: var(--io-action); color: #fff; border: 1.5px solid var(--io-action); }
        .cth-cta--primary:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .cth-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .cth-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .cth-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        /* El escenario conserva su posición anterior: --cth-r compensa el ancho extra del contenedor. */
        .cth-stage { --cth-r: clamp(0px, calc((100cqw - 1200px) / 2), 40px); position: relative; right: var(--cth-r); display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-items: start; }
        .cth-cardwrap { position: relative; padding: 0 6px; }
        .cth-arrow {
          display: block; position: absolute; top: 44px; right: -7px; width: 14px; height: 14px; z-index: 2;
          border-top: 2px solid var(--io-border); border-right: 2px solid var(--io-border); transform: rotate(45deg);
        }
        .cth-card {
          display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px;
          padding: 16px 10px 18px; background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .cth-card--blue { box-shadow: inset 0 3px 0 0 var(--io-action); }
        .cth-card--peach { box-shadow: inset 0 3px 0 0 var(--io-accent); }
        .cth-card--green { box-shadow: inset 0 3px 0 0 #34A86A; }
        .cth-card__num { font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-text-muted); }
        .cth-card__visual { width: 100%; }
        .cth-card__svg { display: block; width: 100%; height: auto; aspect-ratio: 512 / 572; object-fit: contain; }
        .cth-card__title { font-size: 14.5px; font-weight: 700; color: var(--io-text); }

        /* Desktop: contenido alineado arriba con el mismo margen superior que /web-para-empresas/ (60px). */
        @media (min-width: 1025px) {
          .cth-grid { align-items: start; }
        }

        @media (max-width: 1024px) {
          .cth-grid { grid-template-columns: 1fr; gap: 36px; }
          .cth-left { align-items: center; text-align: center; }
          .cth-title { width: auto; }
          .cth-ctas { justify-content: center; }
          .cth-stage { right: auto; }
        }
        @media (max-width: 767px) {
          .cth-stage { grid-template-columns: 1fr; gap: 14px; max-width: 300px; margin: 0 auto; }
          .cth-arrow { display: none; }
          .cth-card { flex-direction: row; text-align: left; padding: 14px 16px; }
          .cth-card__visual { width: 56px; flex: none; }
          .cth-card__num { display: none; }
        }
        @media (max-width: 768px) {
          .cth-section { padding: 40px 20px; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .cth-section { padding: 32px 20px; }
          .cth-title { font-size: 36px; line-height: 1.25; }
          .cth-cta { font-size: 15px; }
        }
        @media (max-width: 375px) {
          .cth-section { padding: 32px 16px; }
          .cth-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .cth-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .cth-sub { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
