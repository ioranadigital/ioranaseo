'use client';

import { Search, MapPin, Sparkles, Check } from 'lucide-react';
import { CardSeoVisual, CardMapsVisual, CardGeoVisual } from './VisibilidadVisuals';

const CARDS = [
  {
    key: 'seo',
    Icon: Search,
    eyebrow: 'SEO',
    title: 'Que te encuentren en Google.',
    copy: 'Mejoramos el posicionamiento de tu web para que aparezca en las búsquedas relevantes de tu sector y atraiga visitas con intención de compra.',
    bullets: ['Estrategia de palabras clave', 'Optimización técnica y de contenidos', 'Autoridad y enlaces de calidad'],
    Visual: CardSeoVisual,
  },
  {
    key: 'local',
    Icon: MapPin,
    eyebrow: 'SEO Local + Google Maps',
    title: 'Que te encuentren cerca de ti.',
    copy: 'Reforzamos tu presencia en Google y Maps para llegar a personas que buscan tus servicios en tu zona y atraer más clientes locales.',
    bullets: ['Optimización de Google Business Profile', 'Mejora de visibilidad en Maps', 'Gestión de reseñas y reputación local'],
    Visual: CardMapsVisual,
  },
  {
    key: 'geo',
    Icon: Sparkles,
    eyebrow: 'GEO · Visibilidad en IA',
    title: 'Que la IA pueda descubrir y citar tu negocio.',
    copy: 'Preparamos y mejoramos la información de tu empresa para facilitar su identificación como fuente relevante en respuestas de asistentes de inteligencia artificial.',
    bullets: ['Diagnóstico de presencia en IA', 'Optimización de contenidos y estructura', 'Seguimiento de menciones y citas'],
    Visual: CardGeoVisual,
  },
] as const;

export default function TresFormas() {
  return (
    <section className="tf-section">
      <div className="tf-container">
        <div className="tf-header">
          <span className="tf-eyebrow">Nuestras soluciones de visibilidad</span>
          <h2 className="tf-title">
            Tres formas de aparecer. Un mismo objetivo: <span className="tf-title__accent">más clientes para tu negocio.</span>
          </h2>
        </div>

        <div className="tf-grid">
          {CARDS.map((c) => {
            const Icon = c.Icon;
            const Visual = c.Visual;
            return (
              <article key={c.key} className="tf-card">
                <span className="tf-card__icon">
                  <Icon size={16} strokeWidth={2.2} />
                </span>
                <span className="tf-card__eyebrow">{c.eyebrow}</span>
                <h3 className="tf-card__title">{c.title}</h3>
                <p className="tf-card__copy">{c.copy}</p>
                <ul className="tf-card__list">
                  {c.bullets.map((b) => (
                    <li key={b}>
                      <span className="tf-card__check" aria-hidden="true">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="tf-card__visual">
                  <Visual className="tf-card__svg" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .tf-section { padding: 56px 20px; background-color: var(--io-bg); }
        .tf-container { max-width: 1120px; margin: 0 auto; }
        .tf-header { text-align: center; margin-bottom: 36px; }
        .tf-eyebrow {
          display: inline-block; background: #fff; border: 1px solid var(--io-border); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .tf-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 auto; max-width: 680px; }
        .tf-title__accent { color: var(--io-action); display: block; }

        .tf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
        .tf-card {
          display: flex; flex-direction: column; background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          padding: 24px; transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }
        @media (hover: hover) {
          .tf-card:hover { border-color: var(--io-action); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); transform: translateY(-2px); }
        }
        .tf-card__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; margin-bottom: 14px;
          border-radius: 50%; background: var(--io-bg-soft); color: var(--io-action); flex: none;
        }
        .tf-card__eyebrow { display: block; font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--io-action); margin-bottom: 8px; }
        .tf-card__title { font-size: 19px; font-weight: 700; color: var(--io-text); line-height: 1.3; margin: 0 0 8px; }
        .tf-card__copy { font-size: 14.5px; line-height: 1.55; color: var(--io-text-muted); margin: 0 0 16px; }

        .tf-card__list { list-style: none; margin: 0 0 20px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .tf-card__list li { display: flex; align-items: center; gap: 9px; font-size: 13.5px; font-weight: 500; color: var(--io-text); }
        .tf-card__check {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 17px; height: 17px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.14); color: var(--io-action);
        }

        .tf-card__visual { margin-top: auto; border-radius: var(--io-radius-md); background: var(--io-bg-soft); padding: 10px; }
        .tf-card__svg { display: block; width: 100%; height: auto; }

        @media (max-width: 1023px) {
          .tf-section { padding: 48px 20px; }
          .tf-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 767px) {
          .tf-section { padding: 40px 20px; }
          .tf-header { margin-bottom: 24px; }
        }
        @media (max-width: 430px) { .tf-section { padding: 32px 16px; } }
        @media (prefers-reduced-motion: reduce) { .tf-card { transition: none; } .tf-card:hover { transform: none; } }
      `}</style>
    </section>
  );
}
