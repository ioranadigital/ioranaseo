'use client';

import { useState } from 'react';
import { Smartphone, Search, MessageCircle, ChartColumn, FileText, GraduationCap } from 'lucide-react';
import { SharedWebVisual, type WebZone } from './WebVisuals';

const ITEMS: { label: string; zone: WebZone; Icon: typeof Smartphone }[] = [
  { label: 'Diseño personalizado y responsive', zone: 'responsive', Icon: Smartphone },
  { label: 'Arquitectura y optimización SEO inicial', zone: 'seo', Icon: Search },
  { label: 'Formularios, llamadas y WhatsApp', zone: 'contact', Icon: MessageCircle },
  { label: 'Analytics y medición de conversiones', zone: 'analytics', Icon: ChartColumn },
  { label: 'Textos orientados a conversión', zone: 'copy', Icon: FileText },
  { label: 'Formación básica para gestionar tu web', zone: 'training', Icon: GraduationCap },
];

export default function WhatIncludes() {
  // Board de capacidades: hover previsualiza, click fija; una sola capacidad resaltada a la vez.
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? selected;

  return (
    <section className="includes-section wi-section">
      <div className="wi-grid">
        <div className="wi-left">
          <div className="wi-header">
            <span className="wi-dot" aria-hidden="true" />
            <h2 className="wi-title">Qué incluye tu web</h2>
          </div>
          <p className="wi-sub">Todo lo necesario para lanzar una web preparada para captar.</p>

          <ul className="wi-list">
            {ITEMS.map((item, i) => {
              const Icon = item.Icon;
              const active = shown === i;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`wi-chip${active ? ' is-active' : ''}`}
                    aria-pressed={selected === i}
                    aria-controls="wi-visual"
                    onClick={() => setSelected(i)}
                    onPointerEnter={(e) => {
                      if (e.pointerType === 'mouse') setHover(i);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === 'mouse') setHover(null);
                    }}
                  >
                    <span className="wi-chip__icon" aria-hidden="true">
                      <Icon size={16} strokeWidth={2.1} />
                    </span>
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="wi-visual" className="wi-visual" role="img" aria-label={ITEMS[shown].label}>
          <SharedWebVisual zone={ITEMS[shown].zone} className="wi-visual__svg" />
        </div>
      </div>

      <style>{`
        .wi-section { padding: 56px 20px; background-color: #fff; }
        .wi-grid {
          max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 42fr) minmax(0, 58fr);
          gap: 48px; align-items: center;
        }
        .wi-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .wi-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--io-accent); flex: none; }
        .wi-title { font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0; }
        .wi-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 0 28px; }

        .wi-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .wi-chip {
          display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 14px; text-align: left;
          font-family: inherit; font-size: 15px; font-weight: 600; color: var(--io-text); cursor: pointer;
          background: #fff; border: 1.5px solid var(--io-border); border-radius: var(--io-radius-md);
          transition: border-color 150ms ease, background-color 150ms ease;
        }
        .wi-chip:hover { border-color: var(--io-action); }
        .wi-chip.is-active { border-color: var(--io-action); background: var(--io-bg-soft); }
        .wi-chip:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .wi-chip__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px;
          border-radius: 50%; background: var(--io-bg-soft); color: var(--io-action); transition: background-color 150ms ease, color 150ms ease;
        }
        .wi-chip.is-active .wi-chip__icon { background: var(--io-action); color: #fff; }

        .wi-visual {
          padding: 24px; background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .wi-visual__svg { display: block; width: 100%; height: auto; }

        @media (max-width: 1023px) {
          .wi-section { padding: 48px 20px; }
          .wi-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 767px) {
          .wi-section { padding: 40px 20px; }
          .wi-sub { font-size: 15px; margin-bottom: 20px; }
          .wi-chip { font-size: 14px; padding: 9px 12px; }
          .wi-visual { padding: 16px; }
        }
        @media (max-width: 375px) {
          .wi-section { padding: 32px 16px; }
        }
      `}</style>
    </section>
  );
}
