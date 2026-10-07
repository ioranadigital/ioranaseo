'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { Smartphone, Search, MessageCircle, ChartColumn, FileText, GraduationCap } from 'lucide-react';

/* Una entrada por opción. Para cambiar una imagen basta con editar `imageSrc` / `imageAlt` de su entrada.
   Imágenes definitivas en /assets/img/web-para-empresas/what-includes/; `imageAlt` = título de la opción. */
const ITEMS = [
  { id: 'diseno', title: 'Diseño personalizado y responsive', icon: Smartphone, imageSrc: '/assets/img/web-para-empresas/what-includes/01-diseno-responsive.webp', imageAlt: 'Diseño personalizado y responsive' },
  { id: 'seo', title: 'Arquitectura y optimización SEO inicial', icon: Search, imageSrc: '/assets/img/web-para-empresas/what-includes/02-seo-geo.webp', imageAlt: 'Arquitectura y optimización SEO inicial' },
  { id: 'contacto', title: 'Formularios, llamadas y WhatsApp', icon: MessageCircle, imageSrc: '/assets/img/web-para-empresas/what-includes/03-formularios-contacto.webp', imageAlt: 'Formularios, llamadas y WhatsApp' },
  { id: 'analytics', title: 'Analytics y medición de conversiones', icon: ChartColumn, imageSrc: '/assets/img/web-para-empresas/what-includes/04-analytics-conversiones.webp', imageAlt: 'Analytics y medición de conversiones' },
  { id: 'textos', title: 'Textos orientados a conversión', icon: FileText, imageSrc: '/assets/img/web-para-empresas/what-includes/05-textos-conversion.webp', imageAlt: 'Textos orientados a conversión' },
  { id: 'formacion', title: 'Formación básica para gestionar tu web', icon: GraduationCap, imageSrc: '/assets/img/web-para-empresas/what-includes/06-formacion-web.webp', imageAlt: 'Formación básica para gestionar tu web' },
] as const;

export default function WhatIncludes() {
  const [activeItem, setActiveItem] = useState<string>(ITEMS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = ITEMS.findIndex((it) => it.id === activeItem);

  // Teclado (patrón de pestañas): flechas, Inicio y Fin mueven el foco y la selección.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = ITEMS.length - 1;
    let next = -1;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = activeIndex === last ? 0 : activeIndex + 1;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = activeIndex === 0 ? last : activeIndex - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next < 0) return;
    e.preventDefault();
    setActiveItem(ITEMS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="includes-section wi-section">
      <div className="wi-grid">
        <div className="wi-left">
          <div className="wi-header">
            <span className="wi-dot" aria-hidden="true" />
            <h2 className="wi-title">Qué incluye tu web</h2>
          </div>
          <p className="wi-sub">Todo lo necesario para lanzar una web preparada para captar.</p>

          <div className="wi-list" role="tablist" aria-orientation="vertical" aria-label="Qué incluye tu web" onKeyDown={onKeyDown}>
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              const active = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`wi-tab-${item.id}`}
                  aria-selected={active}
                  aria-controls="wi-panel"
                  tabIndex={active ? 0 : -1}
                  className={`wi-chip${active ? ' is-active' : ''}`}
                  onClick={() => setActiveItem(item.id)}
                  onFocus={() => setActiveItem(item.id)}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse') setActiveItem(item.id);
                  }}
                >
                  <span className="wi-chip__icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={2.1} />
                  </span>
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="wi-visual">
          <div className="wi-stage" role="tabpanel" id="wi-panel" aria-labelledby={`wi-tab-${activeItem}`}>
            {ITEMS.map((item) => {
              const on = item.id === activeItem;
              return (
                <div key={item.id} className={`wi-slide${on ? ' is-active' : ''}`} aria-hidden={!on}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 572px, 92vw"
                    className="wi-slide__img"
                  />
                </div>
              );
            })}
          </div>
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

        .wi-list { display: flex; flex-direction: column; gap: 6px; }
        .wi-chip {
          display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 14px; text-align: left;
          font-family: inherit; font-size: 15px; font-weight: 600; color: var(--io-text); cursor: pointer;
          background: #fff; border: 1.5px solid var(--io-border); border-radius: var(--io-radius-md);
          transition: border-color 150ms ease, background-color 150ms ease, box-shadow 150ms ease;
        }
        .wi-chip:hover { border-color: var(--io-action); }
        .wi-chip.is-active { border-color: var(--io-action); background: var(--io-bg-soft); box-shadow: 0 4px 12px rgba(51, 111, 230, 0.14); }
        .wi-chip:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .wi-chip__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px;
          border-radius: 50%; background: var(--io-bg-soft); color: var(--io-action); transition: background-color 150ms ease, color 150ms ease;
        }
        .wi-chip.is-active .wi-chip__icon { background: var(--io-action); color: #fff; }

        .wi-visual {
          padding: 24px; background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        /* Escenario de proporción fija: las seis imágenes se apilan y solo la activa es visible (sin layout shift). */
        .wi-stage { position: relative; aspect-ratio: 3 / 2; overflow: hidden; border-radius: var(--io-radius-md); background: #fff; }
        /* La imagen entrante se funde sobre la saliente, que se oculta al terminar: sin aclarado a mitad de transición. */
        .wi-slide {
          position: absolute; inset: 0; z-index: 0; opacity: 0; transform: translateY(6px); pointer-events: none;
          transition: opacity 0s linear 320ms, transform 0s linear 320ms;
        }
        .wi-slide.is-active { z-index: 1; opacity: 1; transform: none; transition: opacity 320ms ease, transform 320ms ease; }
        .wi-slide__img { object-fit: cover; }

        @media (max-width: 1023px) {
          .wi-section { padding: 48px 20px; }
          .wi-grid { grid-template-columns: minmax(0, 1fr); gap: 32px; }
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
        @media (prefers-reduced-motion: reduce) {
          .wi-chip, .wi-chip__icon { transition: none; }
          .wi-slide, .wi-slide.is-active { transition: none; transform: none; }
        }
      `}</style>
    </section>
  );
}
