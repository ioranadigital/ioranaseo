'use client';

import { MethodStrategyVisual, MethodDesignVisual, MethodSeoVisual, MethodConversionVisual } from './WebVisuals';

const STEPS = [
  {
    number: '01',
    title: 'Estrategia',
    description: 'Entendemos tu negocio, clientes y objetivos.',
    Visual: MethodStrategyVisual,
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Creamos una experiencia clara, atractiva y fácil de utilizar.',
    Visual: MethodDesignVisual,
  },
  {
    number: '03',
    title: 'SEO',
    description: 'Preparamos tu web para que pueda ser encontrada desde el lanzamiento.',
    Visual: MethodSeoVisual,
  },
  {
    number: '04',
    title: 'Conversión',
    description: 'Diseñamos puntos de contacto que transforman visitas en oportunidades.',
    Visual: MethodConversionVisual,
  },
];

export default function OurMethod() {
  return (
    <section className="method-section om-section">
      <div className="om-container">
        <div className="om-header">
          <div className="om-header__row">
            <span className="om-dot" aria-hidden="true" />
            <h2 className="om-title">Nuestro método</h2>
            <span className="om-dot" aria-hidden="true" />
          </div>
          <p className="om-sub">Un proceso claro pensado desde el principio para captar mejor.</p>
        </div>

        {/* Pipeline estático conectado: los 4 pasos siempre visibles, sin scroll ni sticky */}
        <ol className="om-grid">
          {STEPS.map((step, i) => {
            const Visual = step.Visual;
            return (
              <li key={step.number} className="om-step">
                {i < STEPS.length - 1 && <span className="om-conn" aria-hidden="true" />}
                <div className="om-card">
                  <span className="om-num">{step.number}</span>
                  <div className="om-card__visual">
                    <Visual className="om-card__svg" />
                  </div>
                  <h3 className="om-card__title">{step.title}</h3>
                  <p className="om-card__text">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .om-section { padding: 56px 20px; background-color: var(--io-bg); }
        .om-container { max-width: 1200px; margin: 0 auto; }
        .om-header { text-align: center; margin-bottom: 40px; }
        .om-header__row { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 12px; }
        .om-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--io-accent); }
        .om-title { font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0; }
        .om-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 auto; max-width: 560px; }

        .om-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .om-step { position: relative; }
        .om-card {
          height: 100%; padding: 24px 18px; background: #fff; border: 1.5px solid var(--io-action);
          border-radius: var(--io-radius-md); transition: box-shadow 150ms ease, transform 150ms ease;
        }
        .om-card:hover { box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08); transform: translateY(-2px); }
        .om-num { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: var(--io-action); margin-bottom: 10px; }
        .om-card__visual { margin-bottom: 12px; }
        .om-card__svg { display: block; width: 100%; max-width: 176px; height: auto; margin: 0 auto; }
        .om-card__title { font-size: 18px; font-weight: 700; color: var(--io-text); margin: 0 0 8px; line-height: 1.25; }
        .om-card__text { font-size: 14px; line-height: 1.55; color: var(--io-text-muted); margin: 0; }

        /* Conector: solo visible cuando el layout es realmente de 4 columnas (desktop >= 1024px).
           En tablet (768–1023, 2×2) queda oculto para no cruzar cards que no están en la misma fila. */
        .om-conn { display: none; }
        @media (min-width: 1024px) {
          .om-conn {
            display: block; position: absolute; top: 44px; left: -12px; width: 24px; height: 2px;
            background: var(--io-action); opacity: 0.35;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .om-section { padding: 48px 20px; }
          .om-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 767px) {
          .om-section { padding: 40px 20px; }
          .om-header { margin-bottom: 28px; }
          .om-grid { grid-template-columns: 1fr; gap: 16px; }
          .om-card__svg { max-width: 148px; }
        }
        @media (max-width: 375px) {
          .om-section { padding: 32px 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .om-card { transition: none; }
          .om-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
