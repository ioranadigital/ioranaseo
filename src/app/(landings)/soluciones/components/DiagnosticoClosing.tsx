'use client';

import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function DiagnosticoClosing() {
  return (
    <section className="dc-section">
      <div className="dc-panel">
        <span className="dc-icon" aria-hidden="true">
          <Compass size={22} strokeWidth={2} />
        </span>
        <div className="dc-text">
          <h2 className="dc-title">¿No sabes qué solución necesitas?</h2>
          <p className="dc-copy">
            Analizamos tu proyecto y te indicamos por dónde empezar y qué deberías mejorar primero.
          </p>
        </div>
        <Link href="/diagnostico/" className="dc-cta">
          Empezar diagnóstico
        </Link>
      </div>

      <style>{`
        .dc-section { padding: 0 20px 56px; background-color: var(--io-bg); }
        .dc-panel {
          max-width: 1000px; margin: 0 auto; position: relative; overflow: hidden; display: flex; align-items: center;
          gap: 20px; padding: 28px 32px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: radial-gradient(circle at 100% 0%, rgba(51, 111, 230, 0.10) 0%, rgba(51, 111, 230, 0) 55%), var(--io-bg-soft);
        }
        .dc-icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 48px; height: 48px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action); position: relative; z-index: 1;
        }
        .dc-icon::after {
          content: ''; position: absolute; top: -4px; right: -4px; width: 10px; height: 10px; border-radius: 50%;
          background: var(--io-accent);
        }
        .dc-text { flex: 1; min-width: 0; position: relative; z-index: 1; }
        .dc-title { font-size: 20px; font-weight: 700; color: var(--io-text); margin: 0 0 4px; line-height: 1.3; }
        .dc-copy { font-size: 14.5px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }
        .dc-cta {
          flex: none; position: relative; z-index: 1; display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 22px; font-size: 15px; font-weight: 600; color: #fff; text-decoration: none;
          background: var(--io-action); border: 1.5px solid var(--io-action); border-radius: var(--io-radius-md);
          white-space: nowrap; transition: background-color 180ms ease, border-color 180ms ease;
        }
        .dc-cta:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); color: #fff; }
        .dc-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 3px; }

        @media (max-width: 767px) {
          .dc-section { padding: 0 20px 40px; }
          .dc-panel { flex-direction: column; text-align: center; padding: 24px 20px; }
          .dc-cta { width: 100%; }
        }
        @media (max-width: 430px) { .dc-section { padding: 0 16px 32px; } }
      `}</style>
    </section>
  );
}
