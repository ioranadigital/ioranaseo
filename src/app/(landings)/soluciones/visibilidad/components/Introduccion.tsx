'use client';

import { Search, MapPin, Sparkles } from 'lucide-react';

const CANALES = [
  { Icon: Search, title: 'Google', text: 'Buscan servicios, comparan y eligen.' },
  { Icon: MapPin, title: 'Maps', text: 'Buscan negocios cercanos en su zona.' },
  { Icon: Sparkles, title: 'Inteligencia artificial', text: 'Piden recomendaciones y opciones fiables.' },
];

export default function Introduccion() {
  return (
    <section className="vi-section">
      <div className="vi-container">
        <span className="vi-eyebrow">Visibilidad en buscadores e IA</span>
        <h2 className="vi-title">
          Tus clientes ya no buscan siempre <span className="vi-title__accent">de la misma manera</span>
        </h2>
        <p className="vi-copy">
          Algunos buscan servicios en Google. Otros comparan negocios cercanos en Maps. Y cada vez más
          personas utilizan asistentes de inteligencia artificial para informarse y encontrar soluciones.
          Trabajamos tu visibilidad para que tu negocio tenga una presencia clara, relevante y competitiva
          en los canales donde buscan tus clientes.
        </p>

        <div className="vi-row">
          {CANALES.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className="vi-item">
                <span className="vi-item__icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div className="vi-item__copy">
                  <strong>{c.title}</strong>
                  <p>{c.text}</p>
                </div>
                {i < CANALES.length - 1 && <span className="vi-arrow" aria-hidden="true">→</span>}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .vi-section { padding: 56px 20px; background-color: #fff; }
        .vi-container { max-width: 900px; margin: 0 auto; text-align: center; }
        .vi-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .vi-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 0 16px; }
        .vi-title__accent { color: var(--io-action); display: block; }
        .vi-copy { font-size: 16px; line-height: 1.65; color: var(--io-text-muted); max-width: 720px; margin: 0 auto 36px; }

        .vi-row { display: flex; align-items: center; justify-content: center; gap: 18px; background: var(--io-bg); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg); padding: 20px 24px; }
        .vi-item { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
        .vi-item__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .vi-item__copy { text-align: left; min-width: 0; }
        .vi-item__copy strong { display: block; font-size: 15px; font-weight: 700; color: var(--io-text); }
        .vi-item__copy p { margin: 2px 0 0; font-size: 13px; line-height: 1.4; color: var(--io-text-muted); }
        .vi-arrow { flex: none; color: var(--io-border); font-size: 18px; }

        @media (max-width: 767px) {
          .vi-section { padding: 40px 20px; }
          .vi-row { flex-direction: column; align-items: stretch; gap: 16px; padding: 20px; }
          .vi-item { flex-direction: column; text-align: center; }
          .vi-item__copy { text-align: center; }
          .vi-arrow { transform: rotate(90deg); align-self: center; }
        }
        @media (max-width: 430px) { .vi-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
