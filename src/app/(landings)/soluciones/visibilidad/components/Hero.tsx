'use client';

import Link from 'next/link';
import { MapPin, FileText, Sparkles } from 'lucide-react';
import { HeroSearchVisual, HeroMapCardVisual } from './VisibilidadVisuals';

const MICROCARDS = [
  { Icon: MapPin, title: 'Cerca de ti', pos: { left: '2%', top: 6 } },
  { Icon: FileText, title: 'Contenido relevante', pos: { left: '30%', bottom: 4 } },
  { Icon: Sparkles, title: 'Más visible', pos: { right: '2%', top: 6 } },
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

        <div className="vh-stage">
          <div className="vh-stage__main">
            <HeroSearchVisual className="vh-stage__svg" />
          </div>
          <div className="vh-stage__card">
            <HeroMapCardVisual className="vh-stage__card-svg" />
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`vh-mc vh-mc--${i}`} style={c.pos}>
                <span className="vh-mc__icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <strong>{c.title}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .vh-section { padding: 56px 20px; background-color: var(--io-bg); }
        .vh-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 48px; align-items: center; }
        .vh-left { display: flex; flex-direction: column; }
        .vh-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 14px; border-radius: var(--io-radius-md); margin-bottom: 20px;
        }
        .vh-title { font-size: clamp(30px, 4.4vw, 46px); font-weight: 800; color: var(--io-text); line-height: 1.18; letter-spacing: -0.01em; margin: 0 0 18px; }
        .vh-sub { font-size: 17px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 28px; max-width: 440px; }

        .vh-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .vh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 26px;
          font-size: 15.5px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
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

        .vh-stage { position: relative; width: 100%; min-height: 400px; }
        .vh-stage__main {
          position: absolute; left: 0; top: 0; width: 76%; padding: 8px; background: #fff;
          border: 1px solid var(--io-border); border-radius: var(--io-radius-lg); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        .vh-stage__svg { display: block; width: 100%; height: auto; }
        .vh-stage__card {
          position: absolute; right: 0; bottom: 0; width: 54%; z-index: 2;
        }
        .vh-stage__card-svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 10px 22px rgba(15, 23, 42, 0.14)); }

        .vh-mc {
          position: absolute; z-index: 3; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); white-space: nowrap;
        }
        .vh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 22px; height: 22px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .vh-mc strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); }

        @media (max-width: 1023px) {
          .vh-section { padding: 48px 20px; }
          .vh-grid { grid-template-columns: 1fr; gap: 40px; }
          .vh-left { align-items: center; text-align: center; }
          .vh-sub { max-width: 560px; }
          .vh-ctas { justify-content: center; }
          .vh-stage { min-height: 360px; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 767px) {
          .vh-section { padding: 40px 20px; }
          .vh-stage { min-height: 300px; }
          .vh-stage__main { width: 100%; }
          .vh-stage__card { width: 66%; }
          .vh-mc { padding: 6px 10px; }
          .vh-mc strong { font-size: 11.5px; }
          .vh-mc--0 { left: 0 !important; right: auto !important; top: -6px !important; }
          .vh-mc--1 { left: auto !important; right: 0 !important; top: -6px !important; bottom: auto !important; }
          .vh-mc--2 { display: none; }
        }
        @media (max-width: 430px) {
          .vh-section { padding: 32px 16px; }
          .vh-stage { min-height: 270px; }
        }
      `}</style>
    </section>
  );
}
