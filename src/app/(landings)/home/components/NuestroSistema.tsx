'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { Users } from 'lucide-react';
import {
  PipelineWebVisual,
  PipelineVisibilityVisual,
  PipelineCampaignsVisual,
  PipelineConversionVisual,
} from './HomeMicrovisuals';

const PASOS = [
  {
    numero: '01',
    titulo: 'Web',
    claim: 'Una base preparada para captar.',
    descripcion:
      'Creamos webs y landing pages claras, rápidas y orientadas a convertir visitas en oportunidades.',
    enlace: 'Ver Web para empresas',
    href: '/web-para-empresas',
    Visual: PipelineWebVisual,
  },
  {
    numero: '02',
    titulo: 'Visibilidad',
    claim: 'Aparece cuando te buscan.',
    descripcion:
      'Trabajamos SEO, SEO Local, Google Maps y contenidos para mejorar tu presencia en buscadores.',
    enlace: 'Ver solución de visibilidad',
    href: '/soluciones/visibilidad/',
    Visual: PipelineVisibilityVisual,
  },
  {
    numero: '03',
    titulo: 'Campañas',
    claim: 'Atrae demanda cualificada.',
    descripcion:
      'Utilizamos Google Ads y Meta Ads para llegar a personas que pueden convertirse en clientes.',
    enlace: 'Ver solución de campañas',
    href: '/soluciones/campanas/',
    Visual: PipelineCampaignsVisual,
  },
  {
    numero: '04',
    titulo: 'Conversión',
    claim: 'Convierte tráfico en oportunidades.',
    descripcion:
      'Medimos, analizamos y mejoramos la experiencia para conseguir más contactos y mejores resultados.',
    enlace: 'Ver solución de conversión',
    href: '/soluciones/conversion/',
    Visual: PipelineConversionVisual,
  },
];

// posición de cada elemento en la secuencia: módulo i = 2i, conector i = 2i + 1, salida = 7
const seq = (k: number) => ({ '--k': k }) as CSSProperties;

export default function NuestroSistema() {
  // seleccionado (click / tap / Enter / Space) y vista previa por hover (solo ratón)
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  // intro: undefined = visible (SSR, sin JS, reduced motion) | 'pending' = oculto | 'play' = animando
  const [intro, setIntro] = useState<'pending' | 'play' | undefined>(undefined);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntro('play');
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    setIntro('pending');
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = hover ?? selected;
  const paso = PASOS[shown];

  return (
    <section className="sistema-section ps-section">
      <div className="ps-container">
        <div className="ps-header">
          <h2 className="ps-title">Nuestro sistema de captación</h2>
          <p className="ps-sub">
            Conectamos las piezas que hacen que tu presencia digital genere resultados.
          </p>
        </div>

        <div ref={gridRef} className="ps-grid" data-intro={intro} role="group" aria-label="Sistema de captación">
          {PASOS.map((p, i) => {
            const Visual = p.Visual;
            const active = i === shown;
            return [
              <div
                key={p.numero}
                className={`ps-mod ps-anim${active ? ' is-active' : ''}`}
                style={{ ...seq(i * 2), '--o': i * 2 } as CSSProperties}
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse') setHover(i);
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === 'mouse') setHover(null);
                }}
              >
              <button
                type="button"
                className="ps-mod__btn"
                aria-pressed={i === selected}
                aria-current={i === shown ? 'true' : undefined}
                aria-controls="ps-detail"
                onClick={() => setSelected(i)}
              >
                <span className="ps-mod__visual">
                  <Visual className="ps-mod__svg" />
                </span>
                <span className="ps-mod__meta">
                  <span className="ps-mod__head">
                    <span className="ps-num">{p.numero}</span>
                    <span className="ps-name">{p.titulo}</span>
                  </span>
                  <span className="ps-claim">{p.claim}</span>
                </span>
              </button>
              {/* Solo móvil (el panel de detalle no se muestra ahí): enlace compacto en el módulo activo */}
              {i === selected && (
                <Link href={p.href} className="ps-mod__link" aria-label={p.enlace}>
                  Ver solución <span aria-hidden="true">→</span>
                </Link>
              )}
              </div>,
              <span
                key={`c${p.numero}`}
                className={`ps-conn ps-conn--${i + 1} ps-anim${i === shown ? ' is-on' : ''}`}
                style={{ ...seq(i * 2 + 1), '--o': i * 2 + 1 } as CSSProperties}
                aria-hidden="true"
              />,
            ];
          })}

          <div className="ps-out ps-anim" style={{ ...seq(8), '--o': 8 } as CSSProperties}>
            <span className="ps-out__icon" aria-hidden="true">
              <Users size={16} strokeWidth={2.2} />
            </span>
            <span className="ps-out__label">Oportunidades</span>
          </div>

          {/* Panel de detalle único y compartido */}
          <div
            id="ps-detail"
            className="ps-detail"
            style={{ '--po': shown * 2 } as CSSProperties}
          >
            <div key={paso.numero} className="ps-detail__body ps-detail-in">
              <div className="ps-detail__text">
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
              </div>
              <Link href={paso.href} className="ps-detail__link">
                {paso.enlace} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ps-section { padding: 68px 20px; background-color: var(--io-bg-soft); }
        .ps-container { max-width: 1280px; margin: 0 auto; }
        .ps-header { text-align: center; margin-bottom: 16px; }
        .ps-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 10px;
        }
        .ps-sub { font-size: 16px; line-height: 1.6; color: var(--io-text-muted); margin: 0 auto; max-width: 700px; }

        /* Desktop: pipeline horizontal — 4 módulos + salida, detalle en banda inferior */
        .ps-grid {
          display: grid; grid-template-columns: 1fr 28px 1fr 28px 1fr 28px 1fr 28px auto;
          align-items: center; row-gap: 36px;
        }

        .ps-mod {
          display: flex; flex-direction: column; align-self: stretch; min-width: 0; padding: 8px 8px 10px; background: #fff;
          border: 1.5px solid var(--io-border); border-radius: var(--io-radius-lg);
          transition: border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease;
        }
        .ps-mod:hover, .ps-mod.is-active { border-color: var(--io-accent); }
        .ps-mod.is-active { box-shadow: 0 4px 14px rgba(244, 162, 124, 0.35); }
        .ps-mod__btn {
          display: flex; flex-direction: column; gap: 8px; flex: 1; width: 100%; padding: 0; text-align: left;
          font-family: inherit; color: inherit; cursor: pointer; background: none; border: none;
        }
        .ps-mod__btn:focus-visible { outline: 2px solid var(--io-action); outline-offset: 4px; border-radius: 4px; }
        .ps-mod__link { display: none; }
        .ps-mod__visual {
          display: block; padding: 6px; background: var(--io-bg-soft); border-radius: var(--io-radius-md);
        }
        .ps-mod__svg { display: block; width: 100%; max-width: 136px; height: auto; margin: 0 auto; opacity: 0.8; transition: opacity 150ms ease; }
        .ps-mod:hover .ps-mod__svg, .ps-mod.is-active .ps-mod__svg { opacity: 1; }
        .ps-mod__meta { display: flex; flex-direction: column; gap: 3px; padding: 0 4px; }
        .ps-mod__head { display: flex; align-items: center; gap: 8px; }
        .ps-num { font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: var(--io-text-muted); }
        .ps-mod.is-active .ps-num { color: var(--io-accent); }
        .ps-name { font-size: 15px; font-weight: 800; color: var(--io-text); text-transform: uppercase; letter-spacing: 0.03em; }
        .ps-claim { font-size: 13.5px; line-height: 1.4; color: var(--io-text-muted); font-weight: 500; }

        /* Conectores: línea fina + flecha discreta; azul el que sale del módulo activo */
        .ps-conn { position: relative; display: block; height: 10px; }
        .ps-conn::before {
          content: ''; position: absolute; left: 0; right: 5px; top: 50%; height: 1.5px; margin-top: -0.75px;
          background: var(--io-border); transition: background-color 150ms ease;
        }
        .ps-conn::after {
          content: ''; position: absolute; right: 0; top: 50%; margin-top: -4px; width: 0; height: 0;
          border-left: 6px solid var(--io-border); border-top: 4px solid transparent; border-bottom: 4px solid transparent;
          transition: border-color 150ms ease;
        }
        .ps-conn.is-on::before { background: var(--io-action); }
        .ps-conn.is-on::after { border-left-color: var(--io-action); }

        /* Salida: nodo pequeño, no es una quinta solución */
        .ps-out {
          display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 12px;
          border: 1.5px dashed var(--io-border); border-radius: var(--io-radius-lg); background: transparent;
        }
        .ps-out__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px;
          border-radius: 50%; background: var(--io-accent); color: #fff;
        }
        .ps-out__label { font-size: 12px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--io-text); }

        /* Detalle compartido */
        .ps-detail { grid-column: 1 / -1; order: 99; }
        .ps-detail__body {
          display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 20px; padding: 10px 20px;
          background: color-mix(in srgb, var(--io-accent) 24%, #fff); border: 1px solid var(--io-accent);
          border-radius: var(--io-radius-lg);
        }
        .ps-detail__text h3 { font-size: 16px; font-weight: 800; color: var(--io-text); margin: 0 0 2px; line-height: 1.25; }
        .ps-detail__text p { font-size: 15px; line-height: 1.5; color: var(--io-text); margin: 0; }
        .ps-detail__link {
          font-size: 15px; font-weight: 700; color: #fff; text-decoration: none; white-space: nowrap;
          padding: 8px 14px; border: 1.5px solid var(--io-action); border-radius: 999px; background: var(--io-action);
          transition: background-color 200ms ease, border-color 200ms ease;
        }
        .ps-detail__link:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .ps-detail__link:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .ps-detail-in { animation: ps-fade 180ms ease-out; }
        @keyframes ps-fade { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }

        /* Intro única: módulos y conectores aparecen en cadena (~900ms en total) */
        .ps-grid[data-intro='pending'] .ps-anim { opacity: 0; transform: translateY(6px); }
        .ps-grid[data-intro='play'] .ps-anim {
          animation: ps-intro 200ms ease-out both; animation-delay: calc(var(--k) * 90ms);
        }
        @keyframes ps-intro { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        /* Tablet: 2 × 2, salida centrada debajo, conectores simplificados (solo dentro de cada fila) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ps-section { padding: 56px 20px; }
          .ps-grid { grid-template-columns: 1fr 28px 1fr; row-gap: 32px; }
          .ps-mod { padding: 8px; }
          .ps-mod__btn { flex-direction: row; align-items: center; gap: 12px; }
          .ps-mod__visual { flex: none; width: 112px; }
          .ps-mod__meta { flex: 1; padding: 0; }
          .ps-conn--2, .ps-conn--4 { display: none; }
          .ps-out { grid-column: 1 / -1; flex-direction: row; justify-self: center; gap: 10px; padding: 8px 16px; }
        }

        /* Mobile: pipeline vertical compacto; el panel se inserta bajo el módulo activo */
        @media (max-width: 767px) {
          .ps-section { padding: 44px 20px; }
          .ps-header { margin-bottom: 16px; }
          .ps-sub { font-size: 15px; }
          .ps-grid { grid-template-columns: 1fr; row-gap: 0; }
          .ps-detail { display: none; }
          .ps-mod { padding: 8px; }
          .ps-mod__btn { flex-direction: row; align-items: center; gap: 12px; }
          .ps-mod__visual { flex: none; width: 104px; }
          .ps-mod__meta { flex: 1; padding: 0; }
          .ps-mod { position: relative; }
          /* Enlace en la esquina inferior derecha, sobre el espacio libre: no altera la altura de la card.
             El área táctil se amplía con ::after (sin invadir el copy). */
          .ps-mod__link {
            display: block; position: absolute; right: 6px; bottom: 2px; margin: 0; padding: 0;
            font-size: 13px; font-weight: 700; line-height: 1.4; color: var(--io-action); text-decoration: none;
          }
          .ps-mod__link::after { content: ''; position: absolute; top: 0; left: -10px; right: -6px; bottom: -8px; }
          .ps-mod__link:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; border-radius: 2px; }
          .ps-conn { height: 11px; margin-left: 60px; width: 12px; }
          .ps-conn::before { left: 50%; right: auto; top: 0; bottom: 4px; width: 1.5px; height: auto; margin: 0 0 0 -0.75px; }
          .ps-conn::after {
            left: 50%; right: auto; top: auto; bottom: 0; margin: 0 0 0 -4px;
            border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 6px solid var(--io-border); border-bottom: none;
          }
          .ps-conn.is-on::after { border-top-color: var(--io-action); border-left-color: transparent; }
          .ps-out { flex-direction: row; justify-self: start; margin-left: 30px; gap: 10px; padding: 6px 14px; }
          .ps-detail__body { grid-template-columns: 1fr; gap: 10px; padding: 12px 14px; }
          .ps-detail__link { justify-self: start; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ps-mod, .ps-mod__svg, .ps-conn::before, .ps-conn::after { transition: none; }
          .ps-detail-in { animation: none; }
        }
      `}</style>
    </section>
  );
}
