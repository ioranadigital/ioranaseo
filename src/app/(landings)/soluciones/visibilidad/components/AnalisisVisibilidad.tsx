'use client';

import { useState } from 'react';
import Link from 'next/link';

const PREOCUPACIONES = ['Google', 'Maps', 'Inteligencia artificial', 'No estoy seguro'];

export default function AnalisisVisibilidad() {
  const [web, setWeb] = useState('');
  const [preocupa, setPreocupa] = useState('');

  return (
    <section className="av-section">
      <div className="av-card">
        <div className="av-copy">
          <span className="av-eyebrow">Análisis de visibilidad</span>
          <h2 className="av-title">¿Sabes dónde están encontrando a tu competencia?</h2>
          <p className="av-text">
            Analizamos la presencia de tu negocio en Google, Maps e inteligencia artificial y te ayudamos
            a identificar las oportunidades más relevantes.
          </p>
        </div>

        {/* Campos visuales (coinciden con el mockup aprobado); no envían datos por sí solos — no existe
            un endpoint propio para captar solo estos dos valores. El CTA lleva al flujo funcional real
            (/diagnostico/, con backend probado); documentado en el informe de entrega para no simular
            un envío que no se procesa. */}
        <form className="av-form" onSubmit={(e) => e.preventDefault()}>
          <label className="av-field">
            <span className="av-field__label">Tu web</span>
            <input
              type="text"
              className="av-input"
              placeholder="https://tuempresa.com"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            />
          </label>
          <label className="av-field">
            <span className="av-field__label">¿Qué te preocupa más?</span>
            <select className="av-select" value={preocupa} onChange={(e) => setPreocupa(e.target.value)}>
              <option value="">¿Qué te preocupa más?</option>
              {PREOCUPACIONES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
          <Link href="/diagnostico/" className="av-cta">
            Analizar mi visibilidad →
          </Link>
        </form>
        <p className="av-footnote">Sin compromiso. Respuesta en 24-48h.</p>
      </div>

      <style>{`
        .av-section { padding: 56px 20px; background-color: var(--io-bg); }
        .av-card {
          max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 32px;
          padding: 40px 48px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), #fff;
        }
        .av-copy { max-width: 480px; }
        .av-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .av-title { font-size: clamp(24px, 3.2vw, 30px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 0 12px; }
        .av-text { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0; }

        .av-form { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 300px; }
        .av-field { display: flex; flex-direction: column; gap: 4px; }
        .av-field__label {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }
        .av-input, .av-select {
          width: 100%; padding: 11px 14px; font-size: 14px; font-family: inherit; color: var(--io-text);
          background: #fff; border: 1.5px solid var(--io-border); border-radius: var(--io-radius-md);
        }
        .av-input:focus, .av-select:focus { outline: none; border-color: var(--io-action); }
        .av-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23475569' stroke-width='1.6' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
        .av-cta {
          display: inline-flex; align-items: center; justify-content: center; margin-top: 4px; padding: 13px 24px;
          font-size: 15px; font-weight: 600; color: #fff; text-decoration: none; background: var(--io-accent-dark);
          border: 1.5px solid var(--io-accent-dark); border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease;
        }
        .av-cta:hover, .av-cta:focus-visible { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); }
        .av-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }
        .av-footnote { grid-column: 1 / -1; margin: 0; font-size: 12.5px; color: var(--io-text-muted); text-align: right; }

        @media (max-width: 1023px) {
          .av-card { grid-template-columns: 1fr; text-align: center; padding: 36px 28px; }
          .av-copy { max-width: none; }
          .av-form { max-width: 360px; margin: 0 auto; }
          .av-footnote { text-align: center; }
        }
        @media (max-width: 767px) { .av-section { padding: 40px 20px; } }
        @media (max-width: 430px) { .av-section { padding: 32px 16px; } .av-card { padding: 28px 20px; } }
      `}</style>
    </section>
  );
}
