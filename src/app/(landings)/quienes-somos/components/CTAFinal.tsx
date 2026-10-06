'use client';

import Link from 'next/link';

export default function CTAFinal() {
  return (
    <section className="qc-section">
      <div className="qc-container">
        <h2 className="qc-title">¿Hablamos de tu proyecto?</h2>
        <p className="qc-copy">
          Cuéntanos dónde estás y qué quieres conseguir. Te ayudamos a definir el siguiente paso.
        </p>
        <Link href="/contacto/" className="qc-cta">
          Contacto
        </Link>
        <Link href="/diagnostico/" className="qc-link">
          Empezar diagnóstico →
        </Link>
      </div>

      <style>{`
        .qc-section {
          padding: 64px 20px; text-align: center;
          background: radial-gradient(circle at 50% 0%, rgba(51, 111, 230, 0.08) 0%, rgba(51, 111, 230, 0) 60%), #fff;
        }
        .qc-container { max-width: 480px; margin: 0 auto; }
        .qc-title { font-size: clamp(24px, 3.4vw, 30px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 0 12px; }
        .qc-copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 28px; }
        .qc-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 32px;
          background: var(--io-action); border: 1.5px solid var(--io-action); color: #fff; font-size: 15px;
          font-weight: 600; border-radius: var(--io-radius-md); text-decoration: none;
          transition: background-color 180ms ease, border-color 180ms ease;
        }
        .qc-cta:hover { background: var(--io-action-hover); border-color: var(--io-action-hover); }
        .qc-link {
          display: block; margin-top: 16px; font-size: 14px; font-weight: 600; color: var(--io-text-muted);
          text-decoration: none; transition: color 180ms ease;
        }
        .qc-link:hover { color: var(--io-action); }

        @media (max-width: 767px) {
          .qc-section { padding: 48px 20px; }
        }
        @media (max-width: 430px) {
          .qc-section { padding: 40px 16px; }
          .qc-cta { width: 100%; }
        }
      `}</style>
    </section>
  );
}
