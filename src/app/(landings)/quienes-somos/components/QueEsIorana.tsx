'use client';

import { Globe, Search, Megaphone, Target, Sparkles } from 'lucide-react';

const INPUTS = [
  { Icon: Globe, label: 'Web' },
  { Icon: Search, label: 'Visibilidad' },
  { Icon: Megaphone, label: 'Campañas' },
  { Icon: Target, label: 'Conversión' },
];

export default function QueEsIorana() {
  return (
    <section className="qi-section">
      <div className="qi-container">
        <div className="qi-text">
          <span className="qi-eyebrow">IORANA SEO</span>
          <h2 className="qi-title">Una visión completa de la captación digital</h2>
          <p className="qi-copy">
            No trabajamos cada canal de forma aislada. Conectamos las piezas necesarias según el
            punto de partida y los objetivos de cada negocio.
          </p>
        </div>

        <div className="qi-diagram" aria-hidden="true">
          <div className="qi-diagram__inputs">
            {INPUTS.map((item) => {
              const Icon = item.Icon;
              return (
                <span className="qi-chip" key={item.label}>
                  <Icon size={14} strokeWidth={2.1} />
                  {item.label}
                </span>
              );
            })}
          </div>
          <span className="qi-diagram__line" />
          <div className="qi-diagram__core">Captación</div>
          <span className="qi-diagram__arrow" />
          <div className="qi-diagram__result">
            <Sparkles size={15} strokeWidth={2.1} />
            Oportunidades
          </div>
        </div>
      </div>

      <style>{`
        .qi-section { padding: 48px 20px; background-color: #fff; }
        .qi-container { max-width: 640px; margin: 0 auto; text-align: center; }
        .qi-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .qi-title { font-size: clamp(24px, 3.4vw, 30px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 0 10px; }
        .qi-copy { font-size: 15px; line-height: 1.6; color: var(--io-text-muted); margin: 0 auto 36px; max-width: 480px; }

        .qi-diagram { display: flex; flex-direction: column; align-items: center; gap: 0; }
        .qi-diagram__inputs { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 14px; }
        .qi-chip {
          display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; font-size: 12.5px;
          font-weight: 600; color: var(--io-text); background: var(--io-bg-soft); border: 1px solid var(--io-border);
          border-radius: 999px;
        }
        .qi-chip svg { color: var(--io-action); }
        .qi-diagram__line { width: 1px; height: 22px; background: var(--io-border); }
        .qi-diagram__core {
          padding: 10px 24px; background: var(--io-action); color: #fff; font-size: 14px; font-weight: 700;
          border-radius: var(--io-radius-md);
        }
        .qi-diagram__arrow { width: 1px; height: 22px; background: var(--io-border); position: relative; }
        .qi-diagram__arrow::after {
          content: ''; position: absolute; bottom: -1px; left: 50%; width: 6px; height: 6px;
          border-right: 1px solid var(--io-border); border-bottom: 1px solid var(--io-border);
          transform: translateX(-50%) rotate(45deg);
        }
        .qi-diagram__result {
          display: inline-flex; align-items: center; gap: 7px; padding: 9px 20px; margin-top: 14px;
          background: #fff; border: 1.5px solid var(--io-accent); color: var(--io-text); font-size: 14px;
          font-weight: 700; border-radius: 999px;
        }
        .qi-diagram__result svg { color: var(--io-accent); }

        @media (max-width: 767px) {
          .qi-section { padding: 40px 20px; }
          .qi-copy { margin-bottom: 28px; }
        }
        @media (max-width: 430px) {
          .qi-section { padding: 32px 16px; }
        }
      `}</style>
    </section>
  );
}
