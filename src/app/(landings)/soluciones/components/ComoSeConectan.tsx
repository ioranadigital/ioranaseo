'use client';

import Link from 'next/link';

const NODES = [
  { label: 'Web', text: 'Tu base digital.', href: '/web-para-empresas/' },
  { label: 'Visibilidad', text: 'Te encuentran.', href: '/soluciones/visibilidad/' },
  { label: 'Campañas', text: 'Generas demanda.', href: '/soluciones/campanas/' },
  { label: 'Conversión', text: 'Conviertes y mejoras.', href: '/soluciones/conversion/' },
];

export default function ComoSeConectan() {
  return (
    <section className="csc-section">
      <div className="csc-container">
        <div className="csc-header">
          <h2 className="csc-title">Soluciones que trabajan juntas</h2>
          <p className="csc-sub">
            Puedes empezar por una sola necesidad o conectar varias soluciones en un mismo sistema de
            captación.
          </p>
        </div>

        <ol className="csc-row">
          {NODES.map((n, i) => (
            <li key={n.label} className="csc-node">
              {i < NODES.length - 1 && <span className="csc-conn" aria-hidden="true" />}
              <Link href={n.href} className="csc-node__link">
                <span className="csc-dot" aria-hidden="true" />
                <span className="csc-node__label">{n.label}</span>
                <span className="csc-node__text">{n.text}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .csc-section { padding: 48px 20px; background-color: var(--io-bg); }
        .csc-container { max-width: 1000px; margin: 0 auto; }
        .csc-header { text-align: center; margin-bottom: 32px; }
        .csc-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 8px; }
        .csc-sub { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0 auto; max-width: 520px; }

        .csc-row { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .csc-node { position: relative; }
        .csc-node__link {
          display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; padding: 16px 10px;
          text-decoration: none; background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-md);
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .csc-node__link:hover, .csc-node__link:focus-visible { border-color: var(--io-action); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); }
        .csc-node__link:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .csc-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--io-action); margin-bottom: 2px; }
        .csc-node:last-child .csc-dot { background: var(--io-accent); }
        .csc-node__label { font-size: 15px; font-weight: 700; color: var(--io-text); }
        .csc-node__text { font-size: 12.5px; color: var(--io-text-muted); }

        .csc-conn {
          display: block; position: absolute; top: 50%; right: -8px; width: 16px; height: 2px;
          background: var(--io-border); z-index: 1; transform: translateY(-50%);
        }

        @media (max-width: 767px) {
          .csc-section { padding: 40px 20px; }
          .csc-row { grid-template-columns: 1fr; gap: 10px; max-width: 280px; margin: 0 auto; }
          .csc-node__link { flex-direction: row; text-align: left; gap: 10px; padding: 12px 14px; }
          .csc-dot { margin-bottom: 0; }
          .csc-conn { top: auto; right: auto; left: 21px; bottom: -6px; width: 2px; height: 10px; }
        }
        @media (max-width: 430px) { .csc-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
