'use client';

import Link from 'next/link';
import { Store, Compass, Sparkles } from 'lucide-react';

const FLOW = [
  { Icon: Store, label: 'Negocio' },
  { Icon: Compass, label: 'Estrategia' },
  { Icon: Sparkles, label: 'Oportunidades' },
];

export default function Hero() {
  return (
    <section className="qh-section">
      <div className="qh-container">
        <span className="qh-eyebrow">Quiénes somos</span>
        <h1 className="qh-title">Marketing digital pensado para negocios reales.</h1>
        <p className="qh-copy">
          Ayudamos a pequeños negocios y PYMEs a convertir su presencia digital en oportunidades,
          conectando estrategia, web, visibilidad, campañas y conversión.
        </p>

        <div className="qh-ctas">
          <Link href="/contacto/" className="qh-cta qh-cta--primary">
            Hablar con nosotros
          </Link>
          <Link href="/soluciones/" className="qh-cta qh-cta--secondary">
            Ver nuestras soluciones
          </Link>
        </div>

        <div className="qh-flow" aria-hidden="true">
          {FLOW.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div className="qh-flow__item" key={step.label}>
                <div className="qh-flow__node">
                  <span className="qh-flow__icon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="qh-flow__label">{step.label}</span>
                </div>
                {i < FLOW.length - 1 && <span className="qh-flow__arrow" />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .qh-section { padding: 60px 20px; background-color: var(--io-bg); text-align: center; }
        /* Composición centrada propia de esta página (sin fotografía). El contenedor se ensancha (640 → 900px)
           para que el H1 estándar de 56px siga en 2 líneas; el párrafo mantiene el máximo estándar de 500px. */
        .qh-container { max-width: 900px; margin: 0 auto; }
        /* Tipografía y espaciados estándar (referencia /web-para-empresas/, ver docs/analysis/HERO_TYPOGRAPHY_STANDARD.md) */
        .qh-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 8px 16px;
          border-radius: var(--io-radius-md); margin-bottom: 24px;
        }
        .qh-title { font-size: clamp(32px, 5.2vw, 56px); font-weight: 800; color: var(--io-text); line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 24px; }
        .qh-copy { font-size: 18px; line-height: 1.65; color: var(--io-text-muted); margin: 0 auto 32px; max-width: 500px; }

        .qh-ctas { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
        .qh-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 31px; min-height: 48px; /* + borde (1–1,5px) ≈ 14/32 de la referencia */
          font-size: 16px; font-weight: 600; border-radius: var(--io-radius-md); text-decoration: none;
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .qh-cta--primary { background: var(--io-action); border: 1.5px solid var(--io-action); color: #fff; }
        .qh-cta--primary:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); }
        .qh-cta--secondary { background: #fff; border: 1.5px solid var(--io-border); color: var(--io-text); }
        .qh-cta--secondary:hover { border-color: var(--io-action); color: var(--io-action); }

        .qh-flow { display: inline-flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
        .qh-flow__item { display: flex; align-items: center; }
        .qh-flow__node { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 18px; }
        .qh-flow__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .qh-flow__label { font-size: 12.5px; font-weight: 600; color: var(--io-text-muted); white-space: nowrap; }
        .qh-flow__arrow {
          width: 32px; height: 1px; background: var(--io-border); position: relative; flex-shrink: 0;
          margin-bottom: 20px;
        }
        .qh-flow__arrow::after {
          content: ''; position: absolute; right: 0; top: 50%; width: 6px; height: 6px;
          border-right: 1px solid var(--io-border); border-bottom: 1px solid var(--io-border);
          transform: translateY(-50%) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .qh-section { padding: 40px 20px; }
        }
        @media (max-width: 767px) {
          .qh-ctas { margin-bottom: 36px; }
          .qh-flow__arrow { width: 20px; }
        }
        /* Escala móvil estándar (referencia): H1 36px; ≤375px interlineado/tracking y párrafo más compactos. */
        @media (max-width: 430px) {
          .qh-section { padding: 32px 20px; }
          .qh-title { font-size: 36px; line-height: 1.25; }
          .qh-cta { width: 100%; font-size: 15px; }
          .qh-ctas { flex-direction: column; align-items: stretch; }
          .qh-flow__node { padding: 0 10px; }
          .qh-flow__arrow { width: 14px; }
        }
        @media (max-width: 375px) {
          .qh-section { padding: 32px 16px; }
          .qh-eyebrow { font-size: 11px; padding: 6px 12px; margin-bottom: 12px; }
          .qh-title { line-height: 1.08; letter-spacing: -0.015em; margin-bottom: 16px; }
          .qh-copy { font-size: 15px; line-height: 1.6; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
