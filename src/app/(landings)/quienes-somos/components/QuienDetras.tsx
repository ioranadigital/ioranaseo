'use client';

import { Compass, Search, Megaphone, BarChart3, Cog } from 'lucide-react';

const AREAS = [
  { Icon: Compass, label: 'Estrategia digital' },
  { Icon: Search, label: 'SEO y visibilidad' },
  { Icon: Megaphone, label: 'Campañas' },
  { Icon: BarChart3, label: 'Analítica y conversión' },
  { Icon: Cog, label: 'Tecnología y automatización' },
];

export default function QuienDetras() {
  return (
    <section className="qd-section">
      <div className="qd-container">
        <span className="qd-eyebrow">Quiénes somos</span>
        <h2 className="qd-title">Quién está detrás</h2>
        <p className="qd-headline">
          Un equipo de especialistas, según lo que necesita cada proyecto.
        </p>
        <p className="qd-copy">
          En IORANA SEO combinamos perfiles especializados en estrategia digital, SEO, publicidad,
          analítica, conversión y tecnología para abordar cada proyecto con el conocimiento adecuado
          en cada fase.
        </p>

        <ul className="qd-areas">
          {AREAS.map((area) => {
            const Icon = area.Icon;
            return (
              <li key={area.label} className="qd-area">
                <span className="qd-area__icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={2.1} />
                </span>
                <span className="qd-area__label">{area.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="qd-neosuma">
          <span className="qd-neosuma__accent" aria-hidden="true" />
          <h3 className="qd-neosuma__title">IORANA SEO forma parte de NEOSUMA</h3>
          <p className="qd-neosuma__copy">
            IORANA SEO es la unidad especializada en captación digital de NEOSUMA, donde se integra
            con otras capacidades de estrategia, tecnología y automatización para abordar proyectos
            de forma más completa cuando es necesario.
          </p>
        </div>
      </div>

      <style>{`
        .qd-section { padding: 56px 20px; background-color: #fff; }
        .qd-container { max-width: 760px; margin: 0 auto; }
        .qd-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .qd-title { font-size: clamp(26px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 0 10px; }
        .qd-headline { font-size: 17px; font-weight: 600; color: var(--io-text); line-height: 1.5; margin: 0 0 10px; }
        .qd-copy { font-size: 15px; line-height: 1.65; color: var(--io-text-muted); margin: 0 0 28px; max-width: 640px; }

        .qd-areas { list-style: none; margin: 0 0 44px; padding: 0; display: flex; flex-wrap: wrap; gap: 10px; }
        .qd-area {
          display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px 9px 10px;
          background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: 999px;
        }
        .qd-area__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 26px; height: 26px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .qd-area__label { font-size: 13.5px; font-weight: 600; color: var(--io-text); white-space: nowrap; }

        .qd-neosuma {
          position: relative; padding: 20px 22px 20px 24px; background: var(--io-bg); border: 1px solid var(--io-border);
          border-radius: var(--io-radius-lg); overflow: hidden;
        }
        .qd-neosuma__accent {
          position: absolute; top: 0; left: 0; bottom: 0; width: 3px; background: var(--io-accent);
        }
        .qd-neosuma__title { font-size: 15px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .qd-neosuma__copy { font-size: 13.5px; line-height: 1.6; color: var(--io-text-muted); margin: 0; max-width: 600px; }

        @media (max-width: 767px) {
          .qd-section { padding: 40px 20px; }
          .qd-area { padding: 8px 12px 8px 8px; }
          .qd-area__label { white-space: normal; }
        }
        @media (max-width: 430px) {
          .qd-section { padding: 32px 16px; }
          .qd-area { flex: 1 1 calc(50% - 5px); }
        }
      `}</style>
    </section>
  );
}
