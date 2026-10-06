'use client';

import { ChannelGoogleAdsVisual, ChannelMetaAdsVisual } from './CampanasVisuals';

export default function Canales() {
  return (
    <section className="ch-section">
      <div className="ch-container">
        <div className="ch-header">
          <span className="ch-eyebrow">Plataformas que hacen crecer tu negocio</span>
          <h2 className="ch-title">Campañas en los canales donde están tus clientes</h2>
        </div>

        <div className="ch-grid">
          <article className="ch-panel ch-panel--blue">
            <div className="ch-panel__visual">
              <ChannelGoogleAdsVisual className="ch-panel__svg" />
            </div>
            <h3 className="ch-panel__title">Google Ads</h3>
            <p className="ch-panel__copy">Aparece cuando te buscan y capta clientes con alta intención.</p>
          </article>

          <article className="ch-panel ch-panel--lavender">
            <div className="ch-panel__visual">
              <ChannelMetaAdsVisual className="ch-panel__svg" />
            </div>
            <h3 className="ch-panel__title">Meta Ads</h3>
            <p className="ch-panel__copy">Llega a nuevas audiencias en Instagram y Facebook.</p>
          </article>
        </div>
      </div>

      <style>{`
        .ch-section { padding: 56px 20px; background-color: #fff; }
        .ch-container { max-width: 1120px; margin: 0 auto; }
        .ch-header { text-align: center; margin-bottom: 36px; }
        .ch-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .ch-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto; max-width: 640px; }

        .ch-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .ch-panel {
          padding: 22px 24px 24px; border-radius: var(--io-radius-lg); border: 1px solid var(--io-border);
          transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }
        @media (hover: hover) {
          .ch-panel:hover { box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        }
        .ch-panel--blue { background: var(--io-bg-soft); }
        .ch-panel--blue:hover { border-color: var(--io-action); }
        .ch-panel--lavender { background: rgba(139, 124, 246, 0.07); }
        .ch-panel--lavender:hover { border-color: #8B7CF6; }

        .ch-panel__visual { background: #fff; border-radius: var(--io-radius-md); padding: 12px; margin-bottom: 16px; border: 1px solid var(--io-border); }
        .ch-panel__svg { display: block; width: 100%; height: auto; }
        .ch-panel__title { font-size: 20px; font-weight: 700; color: var(--io-text); margin: 0 0 6px; }
        .ch-panel__copy { font-size: 15px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 767px) {
          .ch-section { padding: 40px 20px; }
          .ch-header { margin-bottom: 24px; }
          .ch-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 430px) { .ch-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .ch-panel { transition: none; } .ch-panel:hover { transform: none; } }
      `}</style>
    </section>
  );
}
