'use client';

import Link from 'next/link';
import { HeroDiagnosticoVisual, HeroPlanVisual, HeroSeguimientoVisual } from './ComoTrabajamosVisuals';

const CARDS = [
  { number: '01', title: 'Diagnóstico', tone: 'blue', Visual: HeroDiagnosticoVisual },
  { number: '02', title: 'Plan de acción', tone: 'peach', Visual: HeroPlanVisual },
  { number: '03', title: 'Seguimiento', tone: 'green', Visual: HeroSeguimientoVisual },
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
            const Visual = c.Visual;
            return (
              <div key={c.number} className="cth-cardwrap">
                {i < CARDS.length - 1 && <span className="cth-arrow" aria-hidden="true" />}
                <div className={`cth-card cth-card--${c.tone}`}>
                  <span className="cth-card__num">{c.number}</span>
                  <div className="cth-card__visual">
                    <Visual className="cth-card__svg" />
                  </div>
                  <span className="cth-card__title">{c.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cth-section { padding: 56px 20px; background-color: var(--io-bg); }
        .cth-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 48px; align-items: center; }
        .cth-left { display: flex; flex-direction: column; }
        .cth-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 14px; border-radius: var(--io-radius-md); margin-bottom: 20px;
        }
        .cth-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; color: var(--io-text); line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 18px; }
        .cth-sub { font-size: 16.5px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 28px; max-width: 440px; }

        .cth-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cth-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 26px;
          font-size: 15.5px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .cth-cta--primary { background: var(--io-action); color: #fff; border: 1.5px solid var(--io-action); }
        .cth-cta--primary:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .cth-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .cth-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .cth-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        .cth-stage { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-items: start; }
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
        .cth-card__svg { display: block; width: 100%; height: auto; }
        .cth-card__title { font-size: 14.5px; font-weight: 700; color: var(--io-text); }

        @media (max-width: 1023px) {
          .cth-section { padding: 48px 20px; }
          .cth-grid { grid-template-columns: 1fr; gap: 36px; }
          .cth-left { align-items: center; text-align: center; }
          .cth-sub { max-width: 560px; }
          .cth-ctas { justify-content: center; }
        }
        @media (max-width: 767px) {
          .cth-section { padding: 40px 20px; }
          .cth-stage { grid-template-columns: 1fr; gap: 14px; max-width: 300px; margin: 0 auto; }
          .cth-arrow { display: none; }
          .cth-card { flex-direction: row; text-align: left; padding: 14px 16px; }
          .cth-card__visual { width: 56px; flex: none; }
          .cth-card__num { display: none; }
        }
        @media (max-width: 430px) { .cth-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
