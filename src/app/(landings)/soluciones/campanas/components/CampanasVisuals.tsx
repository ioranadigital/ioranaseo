import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG propios de /soluciones/campanas/. Lenguaje compartido con el resto del
 * sistema (estructura en --io-action / --io-brand, acento puntual en --io-accent), pero con
 * composiciones centradas en anuncios, audiencias y canales — sin copiar Visibilidad ni Web
 * para empresas. Sin métricas, CTR, ROAS ni resultados ficticios.
 */

const card: CSSProperties = { fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1.5 };
const soft: CSSProperties = { fill: 'var(--io-bg-soft)' };
const softStroke: CSSProperties = { fill: 'var(--io-bg-soft)', stroke: 'var(--io-border)', strokeWidth: 1 };
const blue: CSSProperties = { fill: 'var(--io-action)' };
const blueSoft: CSSProperties = { fill: 'var(--io-action)', fillOpacity: 0.3 };
const brand: CSSProperties = { fill: 'var(--io-brand)' };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
const lavender: CSSProperties = { fill: '#8B7CF6' };
const lavenderSoft: CSSProperties = { fill: '#8B7CF6', fillOpacity: 0.25 };
const dark: CSSProperties = { fill: 'var(--io-text)', fillOpacity: 0.85 };
const muted: CSSProperties = { fill: 'var(--io-text-muted)', fillOpacity: 0.35 };
const noFill: CSSProperties = { fill: 'none' };
const line = (color: string, w = 2): CSSProperties => ({
  ...noFill, stroke: color, strokeWidth: w, strokeLinecap: 'round', strokeLinejoin: 'round',
});

interface VisualProps {
  className?: string;
}

const svgProps = { 'aria-hidden': true, focusable: false as const, role: 'presentation' as const };

/* ───────────── Hero: laptop conceptual con anuncio activo + creatividad social superpuesta ───────────── */

/** Panel principal: laptop/browser mostrando un anuncio de búsqueda activo. */
export function HeroAdsLaptopVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 300 200" className={className} {...svgProps}>
      {/* base del portátil */}
      <path d="M40 176 H260 L272 192 H28 Z" style={softStroke} />
      <rect x="46" y="14" width="208" height="150" rx="8" style={{ fill: '#1a1a1a' }} />
      <rect x="54" y="22" width="192" height="134" rx="3" style={{ fill: '#fff' }} />

      {/* barra de navegador */}
      <rect x="54" y="22" width="192" height="18" style={soft} />
      <circle cx="64" cy="31" r="2.4" style={brand} />
      <circle cx="72" cy="31" r="2.4" style={brand} />
      <rect x="90" y="28" width="110" height="6" rx="3" style={{ fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1 }} />

      {/* anuncio de búsqueda activo */}
      <rect x="66" y="50" width="168" height="52" rx="6" style={{ ...card, stroke: 'var(--io-action)', strokeWidth: 1.4 }} />
      <rect x="76" y="58" width="26" height="8" rx="2" style={{ fill: 'rgba(51,111,230,0.14)' }} />
      <text x="80" y="64.5" style={{ fill: 'var(--io-action)', fontSize: 7, fontWeight: 700 }}>Anuncio</text>
      <rect x="76" y="72" width="120" height="7" rx="3.5" style={blue} />
      <rect x="76" y="84" width="140" height="4" rx="2" style={muted} />
      <rect x="76" y="92" width="100" height="4" rx="2" style={muted} />

      <rect x="66" y="110" width="80" height="34" rx="5" style={soft} />
      <rect x="76" y="118" width="60" height="5" rx="2.5" style={dark} />
      <rect x="76" y="128" width="44" height="4" rx="2" style={muted} />
      <rect x="154" y="110" width="80" height="34" rx="5" style={soft} />
      <rect x="164" y="118" width="60" height="5" rx="2.5" style={dark} />
      <rect x="164" y="128" width="44" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Overlay: creatividad social (feed conceptual) — panel secundario superpuesto. */
export function HeroSocialCardVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 190 190" className={className} {...svgProps}>
      <rect x="6" y="6" width="178" height="178" rx="14" style={card} />
      <circle cx="30" cy="30" r="12" style={lavenderSoft} />
      <rect x="48" y="24" width="60" height="6" rx="3" style={dark} />
      <rect x="48" y="34" width="40" height="4" rx="2" style={muted} />

      <rect x="18" y="52" width="154" height="90" rx="8" style={soft} />
      <circle cx="70" cy="90" r="16" style={lavender} />
      <path d="M18 130 L54 100 L76 112 L110 84 L172 130 Z" style={{ ...brand, fillOpacity: 0.45 }} />

      <circle cx="30" cy="158" r="9" style={peach} />
      <path d="M24 158 L28 163 L37 152" style={line('#fff', 2.2)} />
      <rect x="46" y="152" width="90" height="6" rx="3" style={dark} />
      <rect x="46" y="163" width="60" height="10" rx="5" style={lavender} />
    </svg>
  );
}

/* ───────────── Bloque canales: 2 paneles grandes ───────────── */

/** Google Ads: anuncio de búsqueda conceptual (sin CTR/precio/ranking). */
export function ChannelGoogleAdsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 320 200" className={className} {...svgProps}>
      <rect x="16" y="16" width="288" height="34" rx="17" style={card} />
      <circle cx="40" cy="33" r="7" style={line('var(--io-action)', 2.2)} />
      <path d="M45 38 L51 44" style={line('var(--io-action)', 2.2)} />
      <rect x="64" y="29" width="150" height="8" rx="4" style={dark} />

      <rect x="16" y="62" width="288" height="76" rx="8" style={{ ...card, stroke: 'var(--io-action)', strokeWidth: 1.4 }} />
      <rect x="32" y="76" width="30" height="10" rx="3" style={{ fill: 'rgba(51,111,230,0.14)' }} />
      <text x="37" y="83.5" style={{ fill: 'var(--io-action)', fontSize: 8, fontWeight: 700 }}>Ad</text>
      <rect x="32" y="94" width="150" height="9" rx="4.5" style={blue} />
      <rect x="32" y="110" width="220" height="5" rx="2.5" style={muted} />
      <rect x="32" y="120" width="180" height="5" rx="2.5" style={muted} />

      <rect x="16" y="150" width="138" height="34" rx="6" style={soft} />
      <rect x="16" y="150" width="138" height="34" rx="6" style={{ ...noFill, stroke: 'var(--io-border)', strokeWidth: 1 }} />
      <rect x="166" y="150" width="138" height="34" rx="6" style={soft} />
      <path d="M28 172 L46 158 L60 166 L80 148" style={line('var(--io-accent)', 2.4)} />
      <path d="M178 172 L196 158 L210 166 L230 148" style={line('var(--io-accent)', 2.4)} />
    </svg>
  );
}

/** Meta Ads: feed social con anuncio de imagen + copy corto (sin logos oficiales). */
export function ChannelMetaAdsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 320 200" className={className} {...svgProps}>
      <rect x="94" y="10" width="132" height="180" rx="18" style={card} />
      <rect x="94" y="10" width="132" height="180" rx="18" style={{ ...noFill, stroke: 'var(--io-border)', strokeWidth: 1.4 }} />
      <circle cx="118" cy="34" r="9" style={lavenderSoft} />
      <rect x="134" y="29" width="50" height="5" rx="2.5" style={dark} />
      <rect x="134" y="37" width="30" height="4" rx="2" style={muted} />

      <rect x="108" y="54" width="104" height="82" rx="8" style={soft} />
      <circle cx="140" cy="86" r="12" style={lavender} />
      <path d="M108 122 L134 100 L150 110 L172 90 L212 122 Z" style={{ ...brand, fillOpacity: 0.5 }} />

      <rect x="108" y="146" width="90" height="5" rx="2.5" style={dark} />
      <rect x="108" y="156" width="60" height="4" rx="2" style={muted} />
      <rect x="108" y="166" width="60" height="10" rx="5" style={lavender} />

      <circle cx="52" cy="60" r="20" style={lavenderSoft} />
      <circle cx="270" cy="130" r="24" style={{ fill: 'rgba(244,162,124,0.18)' }} />
      <circle cx="270" cy="130" r="7" style={peach} />
    </svg>
  );
}

/* ───────────── Proceso — 4 pasos (180 × 110) ───────────── */

export function StepEstrategiaVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <circle cx="60" cy="55" r="30" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 2 }} />
      <circle cx="60" cy="55" r="6" style={peach} />
      <path d="M110 30 L130 55 L110 80" style={line('var(--io-border)', 2)} />
      <rect x="128" y="40" width="34" height="6" rx="3" style={dark} />
      <rect x="128" y="52" width="30" height="4" rx="2" style={muted} />
      <rect x="128" y="62" width="24" height="4" rx="2" style={muted} />
    </svg>
  );
}

export function StepCreacionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <rect x="30" y="20" width="80" height="70" rx="8" style={card} />
      <rect x="42" y="32" width="56" height="8" rx="3" style={{ fill: 'rgba(51,111,230,0.14)' }} />
      <rect x="42" y="48" width="56" height="6" rx="3" style={dark} />
      <rect x="42" y="60" width="40" height="4" rx="2" style={muted} />
      <rect x="42" y="70" width="30" height="8" rx="4" style={blue} />
      <path d="M120 30 l10 -10 l14 14 l-10 10 Z" style={peach} />
      <path d="M116 44 l6 -6" style={line('var(--io-accent)', 2)} />
    </svg>
  );
}

export function StepOptimizacionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <rect x="30" y="24" width="120" height="62" rx="8" style={softStroke} />
      <rect x="44" y="60" width="12" height="18" rx="2" style={blueSoft} />
      <rect x="60" y="50" width="12" height="28" rx="2" style={{ ...blue, fillOpacity: 0.6 }} />
      <rect x="76" y="38" width="12" height="40" rx="2" style={blue} />
      <path d="M44 46 L60 36 L76 40 L100 28" style={line('var(--io-accent)', 2.4)} />
      <circle cx="100" cy="28" r="4.5" style={peach} />
    </svg>
  );
}

export function StepResultadosVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <rect x="34" y="20" width="112" height="70" rx="8" style={card} />
      <rect x="46" y="32" width="60" height="6" rx="3" style={dark} />
      <path d="M46 70 L64 54 L78 62 L98 44 L124 58" style={line('var(--io-action)', 2.4)} />
      <circle cx="98" cy="44" r="4" style={peach} />
      <path d="M46 78 H124" style={line('var(--io-border)', 1.4)} />
    </svg>
  );
}

/* ───────────── Objetivos — 3 iconos compactos (100 × 76) ───────────── */

export function ObjectiveLeadsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <rect x="20" y="10" width="60" height="56" rx="8" style={card} />
      <rect x="32" y="22" width="36" height="8" rx="2" style={softStroke} />
      <rect x="32" y="36" width="36" height="8" rx="2" style={softStroke} />
      <rect x="32" y="50" width="22" height="10" rx="5" style={blue} />
      <circle cx="74" cy="16" r="10" style={peach} />
      <path d="M69 16.5 L73 20.5 L80 12" style={line('#fff', 2.2)} />
    </svg>
  );
}

export function ObjectiveVentasVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <path d="M24 22 H74 L68 52 H32 Z" style={softStroke} />
      <path d="M24 22 L18 14 H10" style={line('var(--io-border)', 2.4)} />
      <circle cx="38" cy="62" r="5" style={blue} />
      <circle cx="62" cy="62" r="5" style={blue} />
      <rect x="34" y="30" width="32" height="6" rx="3" style={blueSoft} />
      <rect x="34" y="40" width="24" height="5" rx="2.5" style={muted} />
      <circle cx="76" cy="18" r="9" style={peach} />
      <path d="M76 13 v10 M71 18 h10" style={line('#fff', 2)} />
    </svg>
  );
}

export function ObjectiveMarcaVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <circle cx="50" cy="38" r="8" style={blue} />
      <circle cx="26" cy="24" r="6" style={blueSoft} />
      <circle cx="74" cy="24" r="6" style={blueSoft} />
      <circle cx="20" cy="50" r="5" style={{ ...blue, fillOpacity: 0.2 }} />
      <circle cx="80" cy="50" r="5" style={{ ...blue, fillOpacity: 0.2 }} />
      <path d="M50 38 L26 24 M50 38 L74 24 M50 38 L20 50 M50 38 L80 50" style={line('var(--io-border)', 1.4)} />
      <circle cx="50" cy="38" r="3" style={peach} />
    </svg>
  );
}
