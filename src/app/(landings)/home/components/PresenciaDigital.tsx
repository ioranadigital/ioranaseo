'use client';

import { useEffect, useRef, useState } from 'react';
import {
  JourneyFindVisual,
  JourneyUnderstandVisual,
  JourneyContactVisual,
} from './HomeMicrovisuals';

const STEPS = [
  {
    id: 'encuentran',
    title: 'Te encuentran',
    description: 'Trabajamos tu visibilidad para aparecer cuando tus clientes buscan lo que ofreces.',
    Visual: JourneyFindVisual,
  },
  {
    id: 'entienden',
    title: 'Te entienden',
    description: 'Organizamos tu presencia digital para comunicar con claridad qué haces y por qué elegirte.',
    Visual: JourneyUnderstandVisual,
  },
  {
    id: 'contactan',
    title: 'Contactan',
    description: 'Diseñamos recorridos, campañas y puntos de contacto para generar oportunidades.',
    Visual: JourneyContactVisual,
  },
];

// Runway de scroll: el contenido queda sticky bajo el header mientras el scroll avanza por un
// spacer (altura en CSS: --pj-runway). Progreso 0 → 1 = recorrido del spacer; step 1/2/3 en STEP_AT.
const STEP_AT = [0, 0.33, 0.66];
const FLOW_LINE = 0.62; // modo flujo normal: una card cuenta como "leída" al cruzar esta línea del viewport

type Mode = 'off' | 'runway' | 'flow';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export default function PresenciaDigital() {
  // progreso: <0 sin empezar, 0..1 en recorrido; 1 por defecto (SSR / sin JS / reduced motion / sin IntersectionObserver)
  const [progress, setProgress] = useState(1);
  const [mode, setMode] = useState<Mode>('off');
  const wrapperRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const enhanced = mode !== 'off';

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const spacer = spacerRef.current;
    if (!wrapper || !sticky || !spacer || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let listening = false;
    let currentMode: Mode = 'off';

    const measure = () => {
      raf = 0;
      const vh = window.innerHeight;
      // mismo offset que el CSS: altura real del header (--io-header-h) + 8px de margen
      const stickyTop = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--io-header-h')) || 64) + 8;

      // ¿cabe la composición completa bajo el header? si no, flujo normal (sin sticky ni scale)
      const fits = sticky.offsetHeight + stickyTop <= vh;
      const next: Mode = fits ? 'runway' : 'flow';
      if (next !== currentMode) {
        currentMode = next;
        setMode(next);
        // el spacer cambia de altura al cambiar el modo: medir en el siguiente frame
        raf = requestAnimationFrame(measure);
        return;
      }

      if (next === 'runway') {
        const runway = spacer.offsetHeight || 1;
        setProgress(clamp((stickyTop - wrapper.getBoundingClientRect().top) / runway, -1, 1));
      } else {
        const cards = wrapper.querySelectorAll('.pj-card');
        const c1 = cards[0].getBoundingClientRect();
        const c3 = cards[cards.length - 1].getBoundingClientRect();
        const y1 = c1.top + c1.height / 2;
        const y3 = c3.top + c3.height / 2;
        const p = ((vh * FLOW_LINE - y1) / Math.max(y3 - y1, 1)) * STEP_AT[2];
        setProgress(clamp(p, -1, 1));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const listen = (on: boolean) => {
      if (on === listening) return;
      listening = on;
      if (on) {
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
      } else {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };

    // el observer solo activa/desactiva el listener cuando el wrapper está cerca del viewport;
    // fuera de él se fija el extremo correcto (antes de empezar / ya completado)
    const io = new IntersectionObserver(
      ([entry]) => {
        listen(entry.isIntersecting);
        measure();
      },
      { rootMargin: '25% 0px 25% 0px' },
    );

    measure();
    io.observe(wrapper);
    return () => {
      io.disconnect();
      listen(false);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const count = progress < 0 ? 0 : progress < STEP_AT[1] ? 1 : progress < STEP_AT[2] ? 2 : 3;

  return (
    <section ref={wrapperRef} className={`presencia-section pj-runway${mode === 'runway' ? ' is-runway' : ''}`}>
      <div ref={stickyRef} className="pj-sticky pj-section">
      <div className="pj-container">
        <div className="pj-header">
          <h2 className="pj-title">De la presencia digital a las oportunidades</h2>
          <p className="pj-sub">
            No se trata solo de estar online. Se trata de convertir esa presencia en negocio.
          </p>
        </div>

        <ol className={`pj-journey${enhanced ? ' is-enhanced' : ''}`}>
          {STEPS.map((step, i) => {
            const on = i < count;
            const current = on && i === count - 1;
            const seg = clamp((progress - STEP_AT[i]) / (STEP_AT[i + 1] - STEP_AT[i]), 0, 1);
            const { Visual } = step;
            return (
              <li key={step.id} className={`pj-row ${on ? 'is-on' : 'is-off'}${current ? ' is-current' : ''}`}>
                <div className="pj-rail" aria-hidden="true">
                  {i < STEPS.length - 1 && (
                    <span className="pj-seg">
                      <span className="pj-seg__fill" style={{ height: `${seg * 100}%` }} />
                    </span>
                  )}
                  <span className="pj-dot" />
                  <span className="pj-label">{step.title}</span>
                </div>
                <div className="pj-card">
                  <div className="pj-card__visual">
                    <Visual className="pj-card__svg" />
                  </div>
                  <div className="pj-card__text">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      </div>
      <div ref={spacerRef} className="pj-spacer" aria-hidden="true" />

      <style>{`
        .pj-runway { --pj-runway: 480px; background-color: #fff; }
        .pj-spacer { height: 0; }
        .pj-runway.is-runway .pj-spacer { height: var(--pj-runway); }
        .pj-runway.is-runway .pj-sticky { position: sticky; top: calc(var(--io-header-h, 64px) + 8px); z-index: 1; }
        .pj-section { padding: 14px 20px; background-color: #fff; }
        .pj-container { max-width: 1280px; margin: 0 auto; }
        .pj-header { text-align: center; margin-bottom: 18px; }
        .pj-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 10px;
        }
        .pj-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 auto; max-width: 600px; }

        .pj-journey { --pj-gap: 12px; list-style: none; margin: 0; padding: 0; display: grid; gap: var(--pj-gap); }
        .pj-row { display: grid; grid-template-columns: 23% 1fr; column-gap: 16px; align-items: stretch; }

        .pj-rail { position: relative; display: flex; align-items: center; gap: 14px; padding-left: 8%; }
        .pj-dot {
          position: relative; z-index: 1; flex: none; width: 18px; height: 18px; border-radius: 50%; box-sizing: border-box;
          background: #fff; border: 2px solid var(--io-border);
          transition: background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
        }
        .pj-label { font-size: 16px; font-weight: 600; color: var(--io-text-muted); transition: color 200ms ease; }
        .pj-seg {
          position: absolute; left: calc(8% + 7.5px); top: 50%; width: 3px; height: calc(100% + var(--pj-gap));
          border-radius: 2px; background: var(--io-border);
        }
        .pj-seg__fill { display: block; width: 100%; border-radius: 2px; background: var(--io-action); transition: height 200ms ease; }

        .pj-row.is-on .pj-dot { background: var(--io-action); border-color: var(--io-action); }
        .pj-row.is-on .pj-label { color: var(--io-text); font-weight: 800; }
        .pj-row.is-current .pj-dot {
          background: var(--io-accent); border-color: var(--io-accent); box-shadow: 0 0 0 5px rgba(244, 162, 124, 0.25);
        }

        .pj-card {
          display: grid; grid-template-columns: 156px 1fr; gap: 20px; align-items: center; min-height: 80px;
          padding: 8px 20px; box-sizing: border-box; background: var(--io-bg); border: 1px solid var(--io-border);
          border-radius: var(--io-radius-lg);
          transition: opacity 200ms ease, border-color 200ms ease, transform 200ms ease, background-color 200ms ease;
        }
        .pj-card__svg { display: block; width: 100%; height: auto; transition: filter 200ms ease, opacity 200ms ease; }
        .pj-card__text h3 { font-size: 17px; font-weight: 800; color: var(--io-text); margin: 0 0 3px; line-height: 1.2; }
        .pj-card__text p { font-size: 15px; line-height: 1.5; color: var(--io-text-muted); margin: 0; font-weight: 500; }

        .pj-row.is-on .pj-card { border-color: color-mix(in srgb, var(--io-action) 35%, var(--io-border)); background: #fff; }
        .pj-row.is-on .pj-card__svg [style*="fill-opacity: 0.78"] { fill-opacity: 1 !important; }
        .pj-row.is-on .pj-card__svg [style*="fill-opacity: 0.28"] { fill-opacity: 0.5 !important; }
        .pj-row.is-on .pj-card__svg [style*="stroke: var(--io-border)"] { stroke: color-mix(in srgb, var(--io-action) 30%, var(--io-border)) !important; }
        .pj-journey.is-enhanced .pj-row.is-off .pj-card { opacity: 0.6; transform: translateY(4px); }
        .pj-journey.is-enhanced .pj-row.is-off .pj-card__svg { opacity: 0.65; filter: grayscale(0.7); }

        @media (max-width: 767px) {
          .pj-runway { --pj-runway: 320px; }
          .pj-section { padding: 28px 20px; }
          .pj-header { margin-bottom: 18px; }
          .pj-sub { font-size: 15px; }
          .pj-row { grid-template-columns: 22px 1fr; column-gap: 12px; }
          .pj-rail { padding-left: 0; }
          .pj-label { display: none; }
          .pj-seg { left: 9.5px; }
          .pj-card { grid-template-columns: 84px 1fr; gap: 12px; padding: 10px 12px; }
          .pj-card__text h3 { font-size: 16px; }
          .pj-card__text p { font-size: 14px; line-height: 1.45; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .pj-runway { --pj-runway: 400px; }
          .pj-row { grid-template-columns: 27% 1fr; column-gap: 16px; }
          .pj-rail { padding-left: 6%; gap: 10px; }
          .pj-seg { left: calc(6% + 7.5px); }
          .pj-label { font-size: 15px; }
          .pj-card { grid-template-columns: 120px 1fr; gap: 16px; padding: 8px 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pj-dot, .pj-label, .pj-seg__fill, .pj-card, .pj-card__svg { transition: none; }
        }
      `}</style>
    </section>
  );
}
