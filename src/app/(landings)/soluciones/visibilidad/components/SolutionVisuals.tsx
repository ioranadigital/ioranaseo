import type { ReactNode } from 'react';
import { Search, X, Globe, Navigation, Phone, Image as ImageGlyph, Building2, ArrowUp } from 'lucide-react';

/**
 * Interfaces ilustrativas de las tres tarjetas de soluciones (SEO, SEO Local + Maps, GEO).
 * HTML/CSS + SVG propios, sin logotipos ni recursos de terceros: «Google» aparece solo como texto plano y los
 * colores y marcadores son los de IORANA (no imitan la identidad visual de Google). Sin valoraciones, estrellas,
 * reseñas, fotografías ni marcas de IA; todo son ejemplos ilustrativos y así se rotulan. Escalan con cqw.
 * Diseñadas sobre 200 unidades de ancho: el texto más pequeño mide 8,5 u (≥10 px en el marco más estrecho).
 */

interface VisualProps {
  className?: string;
}

function Frame({ label, className, fade = false, children }: { label: string; className?: string; fade?: boolean; children: ReactNode }) {
  return (
    <div className={`sv${className ? ` ${className}` : ''}`} role="img" aria-label={label}>
      <div className="sv-frame" aria-hidden="true">
        {children}
        {fade && <span className="sv-fade" />}
      </div>
      <span className="sv-note" aria-hidden="true">Ejemplo ilustrativo</span>
    </div>
  );
}

function SearchBar({ query }: { query: string }) {
  return (
    <div className="sv-search">
      <Search className="sv-ico sv-ico--search" strokeWidth={2.4} />
      <span className="sv-search__q">{query}</span>
      <X className="sv-ico sv-ico--x" strokeWidth={2.6} />
    </div>
  );
}

function Tabs({ items, active }: { items: string[]; active: number }) {
  return (
    <div className="sv-tabs">
      {items.map((t, i) => (
        <span key={t} className={`sv-tab${i === active ? ' is-active' : ''}`}>{t}</span>
      ))}
    </div>
  );
}

export function AssistantGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-4 3.5V17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
      />
      <path d="M12 6.2l1.1 3.2 3.2 1.1-3.2 1.1L12 14.8l-1.1-3.2-3.2-1.1 3.2-1.1z" fill="currentColor" />
    </svg>
  );
}

function Pin({ x, y, fill, s }: { x: number; y: number; fill: string; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="1" rx="5" ry="1.8" fill="rgba(15,23,42,0.16)" />
      <path d="M0 0 C -7 -9 -8 -13 -8 -16 A8 8 0 1 1 8 -16 C 8 -13 7 -9 0 0 Z" style={{ fill }} />
      <circle cx="0" cy="-16" r="3.1" fill="#fff" />
    </g>
  );
}

/** Mapa conceptual dibujado a mano en SVG, con la paleta de IORANA (no es un mapa base de ningún proveedor). */
function MapArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 88 118" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="88" height="118" fill="#eef2f8" />
      <path d="M-4 14 C 16 8, 32 20, 30 38 C 28 50, 10 52, -4 47 Z" fill="#dcebe3" />
      <path d="M62 42 C 78 36, 94 42, 96 56 L96 70 C 82 74, 66 66, 62 42 Z" fill="#dcebe3" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-4 92 C 22 82, 48 88, 92 68" stroke="#d9e1ee" strokeWidth="5" />
        <path d="M36 -4 C 42 32, 46 76, 40 122" stroke="#d9e1ee" strokeWidth="4.5" />
        <g stroke="#ffffff" strokeWidth="3">
          <path d="M-4 32 L92 44" />
          <path d="M-4 68 L92 78" />
          <path d="M14 -4 L20 122" />
          <path d="M68 -4 L64 122" />
          <path d="M-4 104 L92 110" />
        </g>
        <g stroke="#ffffff" strokeWidth="1.5">
          <path d="M-4 54 L92 60" />
          <path d="M52 -4 L50 122" />
          <path d="M80 -4 L78 122" />
        </g>
      </g>
      <Pin x={24} y={28} fill="var(--io-accent)" s={0.9} />
      <Pin x={70} y={52} fill="var(--io-accent)" s={0.8} />
      <Pin x={26} y={98} fill="var(--io-accent)" s={0.8} />
      <Pin x={44} y={68} fill="var(--io-action)" s={1.25} />
    </svg>
  );
}

/* ───────────── SEO: resultado orgánico en un buscador ───────────── */

export function SeoSearchVisual({ className }: VisualProps) {
  return (
    <Frame label="Ejemplo ilustrativo de un resultado orgánico en una búsqueda en Google" className={className} fade>
      <div className="sv-pad">
        <span className="sv-engine">Búsqueda en Google</span>
        <SearchBar query="asesoría empresas asturias" />
      </div>
      <Tabs items={['Todo', 'Imágenes', 'Vídeos', 'Mapas']} active={0} />
      <div className="sv-serp">
        <div className="sv-site">
          <span className="sv-fav"><Building2 className="sv-ico" strokeWidth={2} /></span>
          <span className="sv-site__txt">
            <span className="sv-site__name">Tu empresa</span>
            <span className="sv-site__url">tuempresa.com</span>
          </span>
        </div>
        <div className="sv-serp__title">Asesoría de empresas en Asturias</div>
        <p className="sv-serp__desc">Asesoramiento fiscal, laboral y contable para empresas.</p>
        <div className="sv-skel">
          <i /><i />
        </div>
      </div>
    </Frame>
  );
}

/* ───────────── SEO Local + Maps: ficha de negocio y mapa ───────────── */

export function LocalMapVisual({ className }: VisualProps) {
  return (
    <Frame label="Ejemplo ilustrativo de una búsqueda local con mapa y ficha de negocio" className={className}>
      <div className="sv-pad">
        <SearchBar query="restaurantes en oviedo" />
      </div>
      <Tabs items={['Todo', 'Mapa', 'Imágenes']} active={1} />
      <div className="sv-local">
        <div className="sv-local__list">
          <div className="sv-biz">
            <span className="sv-biz__name">Tu negocio</span>
            <span className="sv-muted">Restaurante · Oviedo</span>
            <span className="sv-open">Abierto</span>
          </div>
          <div className="sv-actions" aria-hidden="true">
            <span className="sv-action"><Globe className="sv-ico" strokeWidth={2.2} /></span>
            <span className="sv-action"><Navigation className="sv-ico" strokeWidth={2.2} /></span>
            <span className="sv-action"><Phone className="sv-ico" strokeWidth={2.2} /></span>
          </div>
          <div className="sv-biz sv-biz--next">
            <span className="sv-biz__name">Otro restaurante</span>
            <span className="sv-skel-line" />
          </div>
          <span className="sv-fade" />
        </div>
        <MapArt className="sv-local__map" />
      </div>
    </Frame>
  );
}

/* ───────────── GEO: respuesta de un asistente de IA ───────────── */

export function GeoAssistantVisual({ className }: VisualProps) {
  return (
    <Frame label="Ejemplo ilustrativo de una respuesta de un asistente de inteligencia artificial" className={className}>
      <div className="sv-chat">
        <div className="sv-chat__head">
          <span className="sv-assistant"><AssistantGlyph /></span>
          <span className="sv-bubble">¿Qué empresas de reformas recomiendas en Oviedo?</span>
        </div>
        <p className="sv-answer">Algunas opciones en Oviedo:</p>
        <div className="sv-results">
          <div className="sv-result">
            <span className="sv-n">1.</span>
            <span className="sv-result__txt">
              <span className="sv-result__name">Tu negocio</span>
              <span className="sv-link">tuempresa.com</span>
            </span>
            <span className="sv-thumb"><ImageGlyph className="sv-ico" strokeWidth={1.8} /></span>
          </div>
          <div className="sv-result">
            <span className="sv-n">2.</span>
            <span className="sv-result__txt">
              <span className="sv-result__name">Otra empresa</span>
              <span className="sv-link">otroejemplo.com</span>
            </span>
            <span className="sv-thumb"><ImageGlyph className="sv-ico" strokeWidth={1.8} /></span>
          </div>
        </div>
        <div className="sv-input">
          <span>Pregunta lo que quieras…</span>
          <span className="sv-send"><ArrowUp className="sv-ico" strokeWidth={2.6} /></span>
        </div>
      </div>
    </Frame>
  );
}

export const SOLUTION_VISUALS_CSS = `
  .sv { container-type: inline-size; width: 100%; max-width: 360px; margin: 0 auto; }
  .sv-frame {
    --u: 0.5cqw;
    position: relative; display: flex; flex-direction: column; width: 100%; aspect-ratio: 6 / 5; overflow: hidden;
    background: #fff; border: 1px solid var(--io-border); border-radius: calc(var(--u) * 8);
    box-shadow: 0 calc(var(--u) * 3) calc(var(--u) * 10) rgba(15, 23, 42, 0.07);
    font-size: calc(var(--u) * 8.5); line-height: 1.25; color: var(--io-text); text-align: left;
  }
  .sv-note { display: block; margin-top: 6px; text-align: center; font-size: 11px; line-height: 1.2; color: var(--io-text-muted); }
  .sv-ico { flex: none; width: calc(var(--u) * 9); height: calc(var(--u) * 9); }
  .sv-fade {
    position: absolute; left: 0; right: 0; bottom: 0; height: calc(var(--u) * 22); pointer-events: none;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  }

  .sv-pad { padding: calc(var(--u) * 8) calc(var(--u) * 8) 0; }
  .sv-engine { display: block; margin-bottom: calc(var(--u) * 4); font-size: calc(var(--u) * 8.5); font-weight: 700; letter-spacing: 0.01em; color: var(--io-text-muted); }
  .sv-search {
    display: flex; align-items: center; gap: calc(var(--u) * 5); height: calc(var(--u) * 20); padding: 0 calc(var(--u) * 8);
    background: #fff; border: 1px solid var(--io-border); border-radius: 999px; box-shadow: 0 1px calc(var(--u) * 3) rgba(15, 23, 42, 0.1);
  }
  .sv-ico--search { color: var(--io-text-muted); }
  .sv-search__q { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(var(--u) * 9.5); font-weight: 500; color: var(--io-text); }
  .sv-ico--x { margin-left: auto; color: var(--io-action); }

  .sv-tabs {
    display: flex; gap: calc(var(--u) * 9); margin-top: calc(var(--u) * 5); padding: 0 calc(var(--u) * 8);
    border-bottom: 1px solid var(--io-border); font-size: calc(var(--u) * 8.5); color: var(--io-text-muted); white-space: nowrap;
  }
  .sv-tab { position: relative; padding-bottom: calc(var(--u) * 4); }
  .sv-tab.is-active { font-weight: 700; color: var(--io-text); }
  .sv-tab.is-active::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: calc(var(--u) * 2); background: var(--io-action); border-radius: 2px 2px 0 0;
  }

  .sv-serp { padding: calc(var(--u) * 7) calc(var(--u) * 8) 0; }
  .sv-site { display: flex; align-items: center; gap: calc(var(--u) * 5); }
  .sv-fav {
    display: inline-flex; align-items: center; justify-content: center; flex: none; width: calc(var(--u) * 15); height: calc(var(--u) * 15);
    border-radius: 50%; background: var(--io-bg-soft); color: var(--io-text-muted);
  }
  .sv-fav .sv-ico { width: calc(var(--u) * 8); height: calc(var(--u) * 8); }
  .sv-site__txt { display: flex; flex-direction: column; min-width: 0; }
  .sv-site__name { font-size: calc(var(--u) * 9.5); font-weight: 700; color: var(--io-text); }
  .sv-site__url { font-size: calc(var(--u) * 8.5); color: var(--io-text-muted); }
  .sv-serp__title { margin-top: calc(var(--u) * 4); font-size: calc(var(--u) * 10); font-weight: 700; line-height: 1.25; color: var(--io-action); }
  .sv-serp__desc { margin: calc(var(--u) * 2) 0 0; font-size: calc(var(--u) * 9.5); line-height: 1.4; color: var(--io-text-muted); }
  .sv-skel { display: flex; flex-direction: column; gap: calc(var(--u) * 4); margin-top: calc(var(--u) * 7); }
  .sv-skel i { display: block; height: calc(var(--u) * 4); border-radius: 999px; background: var(--io-border); }
  .sv-skel i:first-child { width: 88%; background: rgba(51, 111, 230, 0.22); }
  .sv-skel i:nth-child(2) { width: 70%; }

  .sv-local { display: flex; flex: 1; min-height: 0; }
  .sv-local__list { position: relative; flex: 0 0 56%; min-width: 0; padding: calc(var(--u) * 7) calc(var(--u) * 6) 0 calc(var(--u) * 8); }
  .sv-local__map { flex: 1; min-width: 0; width: 44%; height: 100%; display: block; }
  .sv-biz { display: flex; flex-direction: column; gap: calc(var(--u) * 1.5); min-width: 0; }
  .sv-biz__name { font-size: calc(var(--u) * 9.5); font-weight: 700; color: var(--io-text); }
  .sv-muted { font-size: calc(var(--u) * 8.5); color: var(--io-text-muted); }
  .sv-open { font-size: calc(var(--u) * 8.5); font-weight: 600; color: #188038; }
  .sv-actions { display: flex; gap: calc(var(--u) * 8); margin-top: calc(var(--u) * 7); }
  .sv-action {
    display: inline-flex; align-items: center; justify-content: center; width: calc(var(--u) * 18); height: calc(var(--u) * 18);
    border: 1px solid var(--io-border); border-radius: 50%; background: #fff; color: var(--io-action);
  }
  .sv-biz--next { margin-top: calc(var(--u) * 7); padding-top: calc(var(--u) * 6); border-top: 1px solid var(--io-border); }
  .sv-skel-line { display: block; width: 80%; height: calc(var(--u) * 4); margin-top: calc(var(--u) * 3); border-radius: 999px; background: var(--io-border); }

  .sv-chat { display: flex; flex: 1; flex-direction: column; gap: calc(var(--u) * 6); min-height: 0; padding: calc(var(--u) * 8); }
  .sv-chat__head { display: flex; align-items: flex-start; gap: calc(var(--u) * 6); }
  .sv-assistant {
    display: inline-flex; align-items: center; justify-content: center; flex: none; width: calc(var(--u) * 20); height: calc(var(--u) * 20);
    border-radius: calc(var(--u) * 6); background: var(--io-action); color: #fff;
  }
  .sv-assistant svg { width: calc(var(--u) * 12); height: calc(var(--u) * 12); }
  .sv-bubble { flex: 1; min-width: 0; padding: calc(var(--u) * 5) calc(var(--u) * 7); border-radius: calc(var(--u) * 7); background: var(--io-bg-soft); font-size: calc(var(--u) * 9.5); line-height: 1.3; color: var(--io-text); }
  .sv-answer { margin: 0; font-size: calc(var(--u) * 9.5); font-weight: 600; line-height: 1.3; color: var(--io-text); }
  .sv-results { display: flex; flex-direction: column; }
  .sv-result { display: flex; align-items: center; gap: calc(var(--u) * 6); padding: calc(var(--u) * 4) 0; }
  .sv-result + .sv-result { border-top: 1px solid var(--io-border); }
  .sv-n { flex: none; font-size: calc(var(--u) * 9.5); font-weight: 700; color: var(--io-text); }
  .sv-result__txt { display: flex; flex: 1; flex-direction: column; gap: calc(var(--u) * 1); min-width: 0; }
  .sv-result__name { font-size: calc(var(--u) * 9.5); font-weight: 700; color: var(--io-text); }
  .sv-link { font-size: calc(var(--u) * 8.5); color: var(--io-action); }
  .sv-thumb {
    display: inline-flex; align-items: center; justify-content: center; flex: none; width: calc(var(--u) * 20); height: calc(var(--u) * 20);
    border-radius: calc(var(--u) * 4); background: linear-gradient(135deg, #e6eefc, #cfdcf7); color: rgba(51, 111, 230, 0.55);
  }
  .sv-thumb .sv-ico { width: calc(var(--u) * 10); height: calc(var(--u) * 10); }
  .sv-input {
    display: flex; align-items: center; justify-content: space-between; margin-top: auto; height: calc(var(--u) * 18);
    padding: 0 calc(var(--u) * 3) 0 calc(var(--u) * 8); border: 1px solid var(--io-border); border-radius: 999px; font-size: calc(var(--u) * 8.5); color: var(--io-text-muted);
  }
  .sv-send { display: inline-flex; align-items: center; justify-content: center; width: calc(var(--u) * 12); height: calc(var(--u) * 12); border-radius: 50%; background: var(--io-action); color: #fff; }
  .sv-send .sv-ico { width: calc(var(--u) * 7); height: calc(var(--u) * 7); }
`;
