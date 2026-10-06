'use client';

import Link from 'next/link';
import { Gauge, FlaskConical } from 'lucide-react';
import { HeroWebsiteVisual, HeroAbTestVisual } from './ConversionVisuals';

const MICROCARDS = [
  { Icon: Gauge, title: 'Analiza y optimiza', pos: { left: '2%', top: 4 } },
  { Icon: FlaskConical, title: 'A/B Test', pos: { right: '4%', bottom: 2 } },
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

        <div className="cvh-stage">
          <div className="cvh-stage__main">
            <HeroWebsiteVisual className="cvh-stage__svg" />
          </div>
          <div className="cvh-stage__ab">
            <HeroAbTestVisual className="cvh-stage__ab-svg" />
          </div>
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`cvh-mc cvh-mc--${i}`} style={c.pos}>
                <span className="cvh-mc__icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <strong>{c.title}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cvh-section { padding: 56px 20px; background-color: var(--io-bg); }
        .cvh-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 48px; align-items: center; }
        .cvh-left { display: flex; flex-direction: column; }
        .cvh-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 14px; border-radius: var(--io-radius-md); margin-bottom: 20px;
        }
        .cvh-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; color: var(--io-text); line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 18px; }
        .cvh-sub { font-size: 16.5px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 28px; max-width: 460px; }

        .cvh-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cvh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 26px;
          font-size: 15.5px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
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

        .cvh-stage { position: relative; width: 100%; min-height: 410px; }
        .cvh-stage__main {
          position: absolute; left: 0; top: 0; width: 78%; padding: 8px; background: #fff;
          border: 1px solid var(--io-border); border-radius: var(--io-radius-lg); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }
        .cvh-stage__svg { display: block; width: 100%; height: auto; }
        .cvh-stage__ab { position: absolute; right: 0; bottom: 0; width: 52%; z-index: 2; }
        .cvh-stage__ab-svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 10px 22px rgba(15, 23, 42, 0.14)); }

        .cvh-mc {
          position: absolute; z-index: 3; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); white-space: nowrap;
        }
        .cvh-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 22px; height: 22px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .cvh-mc strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); }

        @media (max-width: 1023px) {
          .cvh-section { padding: 48px 20px; }
          .cvh-grid { grid-template-columns: 1fr; gap: 40px; }
          .cvh-left { align-items: center; text-align: center; }
          .cvh-sub { max-width: 560px; }
          .cvh-ctas { justify-content: center; }
          .cvh-stage { min-height: 370px; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 767px) {
          .cvh-section { padding: 40px 20px; }
          .cvh-stage { min-height: 300px; }
          .cvh-mc { padding: 6px 10px; }
          .cvh-mc strong { font-size: 11.5px; }
          .cvh-mc--0 { top: -8px !important; left: 0 !important; }
          .cvh-mc--1 { bottom: -6px !important; right: 2% !important; }
        }
        @media (max-width: 430px) {
          .cvh-section { padding: 32px 16px; }
          .cvh-stage { min-height: 270px; }
        }
      `}</style>
    </section>
  );
}
