'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';

/* Mini-ilustraciones planas (56 × 56): relleno en dos tonos, sin degradados, blur ni halo. Colores vía tokens. */
const blue: CSSProperties = { fill: 'var(--io-action)' };
const blueDark: CSSProperties = { fill: 'var(--io-action-hover)' };
const blueSoft: CSSProperties = { fill: 'var(--io-border)' };
const white: CSSProperties = { fill: '#fff' };
const orange: CSSProperties = { fill: 'var(--io-accent-dark)' };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
const stroke = (color: string, w: number): CSSProperties => ({
  fill: 'none', stroke: color, strokeWidth: w, strokeLinecap: 'round', strokeLinejoin: 'round',
});
const svgProps = { viewBox: '0 0 56 56', 'aria-hidden': true, focusable: false as const, role: 'presentation' as const };

function WebIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...svgProps}>
      <rect x="5" y="8" width="38" height="28" rx="4.5" style={blue} />
      <rect x="9" y="12" width="30" height="20" rx="2" style={blueSoft} />
      <rect x="12" y="15" width="14" height="3.5" rx="1.75" style={blue} />
      <rect x="12" y="21" width="22" height="2.5" rx="1.25" style={{ fill: 'var(--io-brand)' }} />
      <rect x="12" y="26" width="9" height="3.5" rx="1.75" style={orange} />
      <rect x="19" y="36" width="10" height="5" style={blueDark} />
      <rect x="14" y="41" width="20" height="3.5" rx="1.75" style={blueDark} />
      <rect x="34" y="21" width="17" height="30" rx="4" style={white} />
      <rect x="34" y="21" width="17" height="30" rx="4" style={stroke('var(--io-action)', 2.6)} />
      <rect x="37" y="26" width="11" height="16" rx="1.5" style={blueSoft} />
      <circle cx="42.5" cy="46.5" r="1.4" style={blue} />
    </svg>
  );
}

function VisibilityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M35 35 L48.5 48.5" style={stroke('var(--io-action-hover)', 7)} />
      <circle cx="23" cy="23" r="16" style={blueSoft} />
      <rect x="14" y="26" width="5" height="8" rx="1.5" style={{ fill: 'var(--io-brand)' }} />
      <rect x="21" y="19" width="5" height="15" rx="1.5" style={blue} />
      <rect x="28" y="23" width="5" height="11" rx="1.5" style={{ fill: 'var(--io-brand)' }} />
      <circle cx="23" cy="23" r="16" style={stroke('var(--io-action)', 4.5)} />
      <path d="M12.5 17 a12.5 12.5 0 0 1 7 -6" style={stroke('#fff', 2.4)} />
    </svg>
  );
}

function CampaignIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...svgProps}>
      <path d="M15 34 L19 47 a2 2 0 0 0 2 1.5 h4 a2 2 0 0 0 1.9 -2.6 L23 34 Z" style={blueDark} />
      <rect x="6" y="20" width="13" height="16" rx="3.5" style={blueDark} />
      <path d="M17 20 L39 9 a2 2 0 0 1 2.9 1.8 V45.2 a2 2 0 0 1 -2.9 1.8 L17 36 Z" style={blue} />
      <path d="M17 20 L39 9 a2 2 0 0 1 2.9 1.8 V18 L17 28 Z" style={{ fill: 'var(--io-brand)' }} />
      <path d="M47 22 q4 6 0 12" style={stroke('var(--io-accent-dark)', 3)} />
      <path d="M51 17 q7 11 0 22" style={stroke('var(--io-accent)', 3)} />
    </svg>
  );
}

function ConversionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...svgProps}>
      <g transform="translate(25 25)">
        {[0, 45, 90, 135].map((a) => (
          <rect key={a} x="-3.8" y="-19" width="7.6" height="38" rx="2" transform={`rotate(${a})`} style={orange} />
        ))}
        <circle r="14.5" style={orange} />
        <circle r="14.5" style={stroke('var(--io-accent)', 2)} />
        <circle r="6" style={white} />
      </g>
      <circle cx="43" cy="43" r="10.5" style={blue} />
      <circle cx="43" cy="43" r="10.5" style={stroke('#fff', 2)} />
      <path d="M37.5 47 L42 42.5 L44.5 45 L49 40.5" style={stroke('#fff', 2.4)} />
      <path d="M45 40 H49.3 V44.3" style={stroke('#fff', 2.4)} />
    </svg>
  );
}

const NODES = [
  { label: 'Web', Icon: WebIcon, text: 'Tu base digital.', href: '/web-para-empresas/' },
  { label: 'Visibilidad', Icon: VisibilityIcon, text: 'Te encuentran.', href: '/soluciones/visibilidad/' },
  { label: 'Campañas', Icon: CampaignIcon, text: 'Generas demanda.', href: '/soluciones/campanas/' },
  { label: 'Conversión', Icon: ConversionIcon, text: 'Conviertes y mejoras.', href: '/soluciones/conversion/' },
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
          {NODES.map((n, i) => {
            const Icon = n.Icon;
            return (
            <li key={n.label} className="csc-node">
              {i < NODES.length - 1 && <span className="csc-conn" aria-hidden="true" />}
              <Link href={n.href} className="csc-node__link">
                <Icon className="csc-icon" />
                <span className="csc-node__label">{n.label}</span>
                <span className="csc-node__text">{n.text}</span>
              </Link>
            </li>
            );
          })}
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
          display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; padding: 18px 10px 16px;
          text-decoration: none; background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-md);
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .csc-node__link:hover, .csc-node__link:focus-visible { border-color: var(--io-action); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); }
        .csc-node__link:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .csc-icon { display: block; flex: none; width: 52px; height: 52px; margin-bottom: 4px; }
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
          .csc-icon { width: 40px; height: 40px; margin-bottom: 0; }
          .csc-conn { top: auto; right: auto; left: 21px; bottom: -6px; width: 2px; height: 10px; }
        }
        @media (max-width: 430px) { .csc-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
