'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* Fotografías aprobadas (380×462, sin editar). `pos` = object-position vertical que mantiene rostros y pantallas
   dentro del recorte; `zoom` oculta la franja clara que traen en el borde izquierdo (2, 6 y 12 px). */
const STEPS = [
  { number: '01', title: 'Analizamos', text: 'Tu situación actual.', photo: '/assets/img/visibilidad/proceso/analizamos.webp', pos: '50% 32%', zoom: 1 },
  { number: '02', title: 'Priorizamos', text: 'Las mejores oportunidades.', photo: '/assets/img/visibilidad/proceso/priorizamos.webp', pos: '50% 36%', zoom: 1.01 },
  { number: '03', title: 'Implementamos', text: 'Las mejoras necesarias.', photo: '/assets/img/visibilidad/proceso/implementamos.webp', pos: '50% 28%', zoom: 1.02 },
  { number: '04', title: 'Medimos', text: 'Resultados y próximos pasos.', photo: '/assets/img/visibilidad/proceso/medimos.webp', pos: '50% 45%', zoom: 1.04 },
];

// Secuencia automática (una vez por carga): espera inicial + 4 tarjetas de 700 ms con 100 ms de pausa ≈ 3,4 s.
const START_DELAY_MS = 300;
const ACTIVE_MS = 700;
const PAUSE_MS = 100;

export default function ComoTrabajamos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timers: number[] = [];
    const run = () => {
      // En fila (≥768 px) el recorrido va de derecha a izquierda (04 → 01); apiladas, de arriba abajo.
      const horizontal = window.matchMedia('(min-width: 768px)').matches;
      const order = horizontal ? [3, 2, 1, 0] : [0, 1, 2, 3];
      order.forEach((idx, k) => {
        const start = START_DELAY_MS + k * (ACTIVE_MS + PAUSE_MS);
        timers.push(window.setTimeout(() => setActive(idx), start));
        timers.push(window.setTimeout(() => setActive(null), start + ACTIVE_MS));
      });
    };

    // ≥35 % de la sección visible; si es más alta que el viewport basta con que ocupe la mitad de la pantalla.
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e || !e.isIntersecting) return;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (e.intersectionRatio >= 0.35 || e.intersectionRect.height >= vh * 0.5) {
          io.disconnect();
          run();
        }
      },
      { threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.75] },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <section id="como-trabajamos" className="ct-section" ref={sectionRef}>
      <div className="ct-container">
        <div className="ct-header">
          <span className="ct-eyebrow">Cómo trabajamos</span>
          <h2 className="ct-title">Un proceso claro para mejorar tu visibilidad</h2>
          <p className="ct-subtitle">Analizamos tu situación, priorizamos las oportunidades, implementamos las mejoras y medimos resultados.</p>
        </div>

        <ol className="ct-grid">
          {STEPS.map((s, i) => {
            return (
              <li key={s.number} className="ct-step">
                <div className={`ct-card${active === i ? ' is-active' : ''}`}>
                  <span className="ct-num">{s.number}</span>
                  <div className="ct-card__visual">
                    <Image
                      src={s.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 232px, (min-width: 768px) 320px, 90vw"
                      className="ct-photo"
                      style={{ objectPosition: s.pos, '--ct-zoom': s.zoom } as CSSProperties}
                    />
                  </div>
                  <div className="ct-card__body">
                    <h3 className="ct-card__title">{s.title}</h3>
                    <p className="ct-card__text">{s.text}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="ct-arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .ct-section { padding: 56px 20px; background-color: var(--io-bg); }
        .ct-container { max-width: 1200px; margin: 0 auto; }
        .ct-header { text-align: center; margin-bottom: 32px; }
        .ct-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .ct-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 12px; }
        .ct-subtitle { font-size: 15.5px; line-height: 1.6; color: var(--io-text-muted); max-width: 640px; margin: 0 auto; }

        .ct-grid { --ct-gap: 44px; list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--ct-gap); }
        .ct-step { position: relative; display: flex; }

        /* Tarjeta: reposo discreto y un único estado activo compartido por hover y por la secuencia automática. */
        .ct-card {
          display: flex; flex: 1; flex-direction: column; gap: 12px; padding: 18px 18px 20px; background: #fff;
          border: 1px solid rgba(51, 111, 230, 0.22); border-radius: var(--io-radius-md); box-shadow: 0 1px 2px rgba(15, 23, 42, 0.02);
          transition: transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1), border-color 300ms ease, box-shadow 300ms ease;
        }
        .ct-card.is-active, .ct-card:hover {
          transform: translateY(-3px); border-color: rgba(51, 111, 230, 0.5); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
        }

        .ct-num {
          display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; width: 32px; height: 32px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.1); color: var(--io-action); font-size: 13px; font-weight: 700;
          letter-spacing: 0.02em; transition: background-color 300ms ease;
        }
        .ct-card.is-active .ct-num, .ct-card:hover .ct-num { background: rgba(51, 111, 230, 0.2); }

        /* Fotografía: el contenedor recorta (overflow) y el zoom del estado activo ocurre dentro de él: sin layout shift. */
        .ct-card__visual {
          position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 10px; background: var(--io-bg-soft);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08); transition: box-shadow 300ms ease;
        }
        .ct-photo {
          object-fit: cover; transform: scale(var(--ct-zoom, 1)); transform-origin: 100% 50%;
          transition: transform 350ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 300ms ease;
        }
        .ct-card.is-active .ct-card__visual, .ct-card:hover .ct-card__visual { box-shadow: 0 6px 14px rgba(15, 23, 42, 0.14); }
        .ct-card.is-active .ct-photo, .ct-card:hover .ct-photo {
          transform: scale(calc(var(--ct-zoom, 1) * 1.02)); filter: contrast(1.04) saturate(1.03);
        }

        .ct-card__title { margin: 0 0 6px; font-size: 16.5px; font-weight: 700; color: var(--io-text); }
        .ct-card__title::after {
          content: ''; display: block; width: 22px; height: 3px; margin-top: 8px; border-radius: 3px;
          background: var(--io-accent); opacity: 0.6; transition: opacity 300ms ease;
        }
        .ct-card.is-active .ct-card__title::after, .ct-card:hover .ct-card__title::after { opacity: 1; }
        .ct-card__text { margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--io-text-muted); }

        /* Flecha en el hueco entre tarjetas (no invade ninguna). */
        .ct-arrow {
          position: absolute; top: 0; right: calc(var(--ct-gap) * -1); width: var(--ct-gap); height: 100%;
          display: none; align-items: center; justify-content: center; color: var(--io-action); pointer-events: none;
        }
        @media (min-width: 1024px) { .ct-arrow { display: flex; } }

        @media (max-width: 1023px) { .ct-card__visual { aspect-ratio: 16 / 10; } }
        @media (min-width: 768px) and (max-width: 1023px) {
          .ct-section { padding: 48px 20px; }
          .ct-grid { --ct-gap: 18px; grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .ct-section { padding: 40px 20px; }
          .ct-header { margin-bottom: 24px; }
          .ct-grid { --ct-gap: 30px; grid-template-columns: 1fr; }
          .ct-arrow { display: flex; top: auto; right: 0; bottom: calc(var(--ct-gap) * -1); width: 100%; height: var(--ct-gap); }
          .ct-arrow svg { transform: rotate(90deg); }
        }
        @media (max-width: 430px) { .ct-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) {
          .ct-card, .ct-num, .ct-card__visual, .ct-photo, .ct-card__title::after { transition: none; }
          .ct-card.is-active, .ct-card:hover { transform: none; }
          .ct-card.is-active .ct-photo, .ct-card:hover .ct-photo { transform: scale(var(--ct-zoom, 1)); }
        }
      `}</style>
    </section>
  );
}
