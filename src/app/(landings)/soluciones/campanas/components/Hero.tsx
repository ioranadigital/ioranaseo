'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Target, Users2, Sparkles } from 'lucide-react';
import { HeroAdsLaptopVisual, HeroSocialCardVisual } from './CampanasVisuals';

const HERO_PHOTO = '/assets/img/campanas/hero-campanas-business.webp';

const MICROCARDS = [
  { Icon: Target, title: 'Audiencias precisas', pos: { left: '2%', top: 4 } },
  { Icon: Users2, title: 'Nuevas audiencias', pos: { right: '2%', top: 4 } },
  { Icon: Sparkles, title: 'Más demanda', pos: { left: '34%', bottom: 2 } },
];

/** Foto local con placeholder si el archivo aún no existe (sin imágenes externas ni reutilizar otras páginas). */
function HeroPhoto() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <span className="cph-photo" data-missing={failed || undefined}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={HERO_PHOTO}
          alt="Persona gestionando las campañas publicitarias de su negocio"
          width={480}
          height={480}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="cph-photo__ph" aria-hidden="true">
          <Target size={30} strokeWidth={1.4} />
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="cph-section">
      <div className="cph-grid">
        <div className="cph-left">
          <span className="cph-eyebrow">Campañas</span>
          <h1 className="cph-title">Genera demanda para tu negocio.</h1>
          <p className="cph-sub">
            Campañas en Google y redes sociales para llegar a más personas y conseguir resultados.
          </p>
          <div className="cph-ctas">
            <Link href="/diagnostico/" className="cph-cta cph-cta--primary">
              Analizar mi proyecto
            </Link>
            <a href="#como-trabajamos-campanas" className="cph-cta cph-cta--secondary">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="cph-stage">
          <div className="cph-stage__laptop">
            <HeroAdsLaptopVisual className="cph-stage__svg" />
          </div>
          <div className="cph-stage__social">
            <HeroSocialCardVisual className="cph-stage__social-svg" />
          </div>
          <HeroPhoto />
          {MICROCARDS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={c.title} className={`cph-mc cph-mc--${i}`} style={c.pos}>
                <span className="cph-mc__icon" aria-hidden="true">
                  <Icon size={14} strokeWidth={2.2} />
                </span>
                <strong>{c.title}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cph-section { padding: 56px 20px; background-color: var(--io-bg); }
        .cph-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 48px; align-items: center; }
        .cph-left { display: flex; flex-direction: column; }
        .cph-eyebrow {
          display: inline-block; align-self: flex-start; background: var(--io-bg-soft); color: var(--io-action);
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 14px; border-radius: var(--io-radius-md); margin-bottom: 20px;
        }
        .cph-title { font-size: clamp(30px, 4.4vw, 46px); font-weight: 800; color: var(--io-text); line-height: 1.18; letter-spacing: -0.01em; margin: 0 0 18px; }
        .cph-sub { font-size: 17px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 28px; max-width: 440px; }

        .cph-ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .cph-cta {
          display: inline-flex; align-items: center; justify-content: center; padding: 13px 26px;
          font-size: 15.5px; font-weight: 600; text-decoration: none; border-radius: var(--io-radius-md);
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .cph-cta--primary {
          background: var(--io-accent-dark); color: #fff; border: 1.5px solid var(--io-accent-dark);
          box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
        }
        .cph-cta--primary:hover { background: var(--io-accent-dark-hover); border-color: var(--io-accent-dark-hover); color: #fff; }
        .cph-cta--secondary { background: #fff; color: var(--io-action); border: 1.5px solid var(--io-action); }
        .cph-cta--secondary:hover { background: rgba(51, 111, 230, 0.06); }
        .cph-cta:focus-visible { outline: 3px solid var(--io-action-hover); outline-offset: 2px; }

        .cph-stage { position: relative; width: 100%; min-height: 420px; }
        .cph-stage__laptop { position: absolute; left: 4%; top: 0; width: 82%; }
        .cph-stage__svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 10px 22px rgba(15, 23, 42, 0.10)); }

        .cph-photo {
          position: absolute; left: 1%; bottom: 0; width: 27%; aspect-ratio: 1 / 1; display: block; overflow: hidden;
          border-radius: 50%; border: 4px solid #fff; box-shadow: 0 10px 22px rgba(15, 23, 42, 0.14);
          background: linear-gradient(135deg, #dbe7ff 0%, #ece5fb 100%); z-index: 2;
        }
        .cph-photo img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%; }
        .cph-photo__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(51, 111, 230, 0.45); }

        .cph-stage__social { position: absolute; right: 0; bottom: 4%; width: 38%; z-index: 3; }
        .cph-stage__social-svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 10px 22px rgba(15, 23, 42, 0.16)); }

        .cph-mc {
          position: absolute; z-index: 4; display: flex; align-items: center; gap: 8px; padding: 8px 12px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 999px;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08); white-space: nowrap;
        }
        .cph-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 22px; height: 22px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .cph-mc strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); }

        @media (max-width: 1023px) {
          .cph-section { padding: 48px 20px; }
          .cph-grid { grid-template-columns: 1fr; gap: 40px; }
          .cph-left { align-items: center; text-align: center; }
          .cph-sub { max-width: 560px; }
          .cph-ctas { justify-content: center; }
          .cph-stage { min-height: 380px; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 767px) {
          .cph-section { padding: 40px 20px; }
          .cph-stage { min-height: 320px; }
          .cph-mc { padding: 6px 10px; }
          .cph-mc strong { font-size: 11.5px; }
          .cph-mc--2 { display: none; }
          .cph-mc--0 { top: -8px !important; left: 0 !important; }
          .cph-mc--1 { top: -8px !important; right: 0 !important; }
        }
        @media (max-width: 430px) {
          .cph-section { padding: 32px 16px; }
          .cph-stage { min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
