import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG propios de /soluciones/visibilidad/. Lenguaje compartido con el resto del
 * sistema (estructura en --io-action / --io-brand, acento puntual en --io-accent), pero con
 * composiciones centradas en búsqueda, mapa y ficha local — sin copiar otras páginas.
 * Sin métricas, rankings, estrellas ni reviews.
 */

const card: CSSProperties = { fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1.5 };
const soft: CSSProperties = { fill: 'var(--io-bg-soft)' };
const softStroke: CSSProperties = { fill: 'var(--io-bg-soft)', stroke: 'var(--io-border)', strokeWidth: 1 };
const blue: CSSProperties = { fill: 'var(--io-action)' };
const blueSoft: CSSProperties = { fill: 'var(--io-action)', fillOpacity: 0.3 };
const brand: CSSProperties = { fill: 'var(--io-brand)' };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
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

/* ───────────── Hero: interfaz de búsqueda + resultados (panel principal, 300 × 210) ───────────── */

export function HeroSearchVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 300 210" className={className} {...svgProps}>
      <rect x="10" y="10" width="280" height="46" rx="23" style={card} />
      <circle cx="34" cy="33" r="8" style={line('var(--io-action)', 2.4)} />
      <path d="M40 39 L46 45" style={line('var(--io-action)', 2.4)} />
      <rect x="60" y="27" width="150" height="12" rx="6" style={dark} />
      <circle cx="256" cy="33" r="14" style={blue} />
      <path d="M250 33 h12 M256 27 v12" style={line('#fff', 2.4)} />

      <rect x="10" y="68" width="280" height="132" rx="10" style={card} />
      <rect x="28" y="82" width="30" height="16" rx="4" style={blue} />
      <rect x="64" y="84" width="150" height="8" rx="4" style={dark} />
      <rect x="40" y="106" width="24" height="10" rx="3" style={blueSoft} />
      <rect x="70" y="107" width="120" height="5" rx="2.5" style={muted} />
      <rect x="28" y="122" width="250" height="4" rx="2" style={muted} />
      <rect x="28" y="132" width="210" height="4" rx="2" style={muted} />

      <rect x="28" y="150" width="244" height="1" style={{ fill: 'var(--io-border)' }} />
      <rect x="46" y="80" width="12" height="12" rx="3" style={{ fill: 'none' }} />
      <circle cx="40" cy="168" r="9" style={peach} />
      <path d="M40 168 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0" style={{ fill: '#fff' }} />
      <rect x="58" y="164" width="120" height="5" rx="2.5" style={dark} />
      <rect x="58" y="174" width="90" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Overlay: mapa simplificado + pin + ficha local (panel secundario, 210 × 170). */
export function HeroMapCardVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 210 170" className={className} {...svgProps}>
      <rect x="6" y="6" width="198" height="158" rx="10" style={card} />
      <clipPath id="hmcClip"><rect x="6" y="6" width="198" height="94" rx="10" /></clipPath>
      <g clipPath="url(#hmcClip)">
        <rect x="6" y="6" width="198" height="94" style={soft} />
        <path d="M6 40 H204 M6 70 H204 M70 6 V100 M140 6 V100" style={{ ...noFill, stroke: '#fff', strokeWidth: 4 }} />
      </g>
      <circle cx="105" cy="56" r="13" style={peach} />
      <path d="M96 66 L105 84 L114 66 Z" style={peach} />
      <circle cx="105" cy="56" r="4.5" style={{ fill: '#fff' }} />

      <rect x="18" y="112" width="42" height="34" rx="5" style={softStroke} />
      <path d="M18 146 L34 128 L42 136 L60 118 Z" style={{ ...brand, fillOpacity: 0.55 }} />
      <rect x="68" y="114" width="126" height="8" rx="4" style={dark} />
      <rect x="68" y="128" width="100" height="5" rx="2.5" style={muted} />
      <rect x="68" y="138" width="60" height="10" rx="5" style={blue} />
    </svg>
  );
}

/* ───────────── Bloque 1 — tres formas de ganar visibilidad (260 × 130) ───────────── */

/** SEO: campo de búsqueda + jerarquía de contenido. */
export function CardSeoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 130" className={className} {...svgProps}>
      <rect x="16" y="16" width="228" height="26" rx="13" style={card} />
      <circle cx="34" cy="29" r="5.5" style={line('var(--io-action)', 2)} />
      <path d="M38 33 L42 37" style={line('var(--io-action)', 2)} />
      <rect x="52" y="25" width="120" height="6" rx="3" style={dark} />

      <rect x="16" y="52" width="228" height="62" rx="8" style={card} />
      <rect x="30" y="64" width="20" height="9" rx="3" style={blue} />
      <rect x="56" y="65" width="104" height="6" rx="3" style={dark} />
      <rect x="38" y="82" width="16" height="8" rx="3" style={blueSoft} />
      <rect x="60" y="83" width="86" height="4" rx="2" style={muted} />
      <rect x="30" y="96" width="140" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** SEO Local: búsqueda + radio de cercanía alrededor de un pin (concepto "cerca de mí"). */
export function CardSeoLocalVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 130" className={className} {...svgProps}>
      <rect x="16" y="12" width="228" height="28" rx="14" style={card} />
      <circle cx="36" cy="26" r="6" style={line('var(--io-action)', 2)} />
      <path d="M40.5 30.5 L45 35" style={line('var(--io-action)', 2)} />
      <rect x="56" y="22" width="110" height="7" rx="3.5" style={dark} />

      <circle cx="130" cy="90" r="34" style={{ ...blue, fillOpacity: 0.06 }} />
      <circle cx="130" cy="90" r="22" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 1.5, strokeOpacity: 0.35, strokeDasharray: '3 4' }} />
      <circle cx="94" cy="76" r="5" style={blueSoft} />
      <circle cx="168" cy="102" r="5" style={blueSoft} />
      <circle cx="130" cy="90" r="11" style={peach} />
      <path d="M124 98 L130 112 L136 98 Z" style={peach} />
      <circle cx="130" cy="90" r="4" style={{ fill: '#fff' }} />
    </svg>
  );
}

/** Google Maps: mapa con cuadrícula + pin + ficha simplificada (sin estrellas/reseñas). */
export function CardMapsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 130" className={className} {...svgProps}>
      <rect x="16" y="14" width="140" height="102" rx="8" style={softStroke} />
      <path d="M16 65 H156 M70 14 V116 M110 14 V116" style={{ ...noFill, stroke: '#fff', strokeWidth: 4 }} />
      <circle cx="86" cy="56" r="13" style={peach} />
      <path d="M77 66 L86 84 L95 66 Z" style={peach} />
      <circle cx="86" cy="56" r="4.5" style={{ fill: '#fff' }} />

      <rect x="170" y="26" width="74" height="78" rx="8" style={card} />
      <rect x="178" y="36" width="58" height="28" rx="4" style={soft} />
      <path d="M178 64 L192 48 L202 56 L218 40 L236 64 Z" style={{ ...brand, fillOpacity: 0.55 }} />
      <rect x="178" y="72" width="46" height="6" rx="3" style={dark} />
      <rect x="178" y="82" width="36" height="4" rx="2" style={muted} />
      <rect x="178" y="90" width="26" height="8" rx="4" style={blue} />
    </svg>
  );
}

/* ───────────── Bloque 2 — proceso (200 × 116) ───────────── */

export function StepAnalisisVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 116" className={className} {...svgProps}>
      <rect x="20" y="14" width="90" height="88" rx="6" style={card} />
      <rect x="32" y="26" width="50" height="6" rx="3" style={dark} />
      <rect x="32" y="42" width="60" height="4" rx="2" style={muted} />
      <rect x="32" y="52" width="54" height="4" rx="2" style={muted} />
      <rect x="32" y="62" width="60" height="4" rx="2" style={muted} />
      <rect x="32" y="78" width="40" height="4" rx="2" style={muted} />
      <circle cx="130" cy="70" r="22" style={line('var(--io-action)', 3)} />
      <path d="M147 87 L162 102" style={line('var(--io-action)', 3.4)} />
      <circle cx="130" cy="70" r="7" style={peach} />
    </svg>
  );
}

export function StepOptimizacionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 116" className={className} {...svgProps}>
      <rect x="20" y="18" width="112" height="78" rx="8" style={card} />
      <rect x="34" y="30" width="60" height="8" rx="4" style={dark} />
      <rect x="34" y="46" width="84" height="14" rx="4" style={softStroke} />
      <path d="M40 53 L46 59 L58 45" style={line('var(--io-action)', 2.6)} />
      <rect x="34" y="68" width="84" height="14" rx="4" style={softStroke} />
      <path d="M40 75 L46 81 L58 67" style={line('var(--io-action)', 2.6)} />
      <circle cx="160" cy="40" r="18" style={peach} />
      <path d="M160 30 v6 M160 44 v6 M150 40 h6 M164 40 h6 M153 33 l4 4 M167 33 l-4 4 M153 47 l4 -4 M167 47 l-4 -4" style={line('#fff', 2)} />
    </svg>
  );
}

export function StepContenidoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 116" className={className} {...svgProps}>
      <rect x="26" y="14" width="100" height="88" rx="6" style={card} />
      <rect x="38" y="28" width="76" height="7" rx="3.5" style={dark} />
      <rect x="38" y="44" width="76" height="4" rx="2" style={muted} />
      <rect x="38" y="53" width="66" height="4" rx="2" style={muted} />
      <rect x="38" y="62" width="70" height="4" rx="2" style={muted} />
      <rect x="38" y="80" width="40" height="12" rx="6" style={blue} />
      <path d="M140 82 L156 66 L172 82" style={line('var(--io-accent)', 3)} />
      <circle cx="156" cy="50" r="10" style={{ ...brand, fillOpacity: 0.7 }} />
    </svg>
  );
}

export function StepSeguimientoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 116" className={className} {...svgProps}>
      <rect x="20" y="16" width="160" height="84" rx="8" style={card} />
      <path d="M34 76 L58 56 L78 66 L102 40 L128 50 L152 30" style={line('var(--io-action)', 2.8)} />
      <circle cx="102" cy="40" r="4.5" style={peach} />
      <circle cx="152" cy="30" r="4.5" style={peach} />
      <path d="M34 88 H152" style={line('var(--io-border)', 1.5)} />
    </svg>
  );
}

/* ───────────── Bloque 3 — visual de resultado (280 × 220, composición vertical distinta al Hero) ───────────── */

export function ResultVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 220" className={className} {...svgProps}>
      <rect x="16" y="14" width="248" height="42" rx="21" style={card} />
      <circle cx="42" cy="35" r="7" style={line('var(--io-action)', 2.2)} />
      <path d="M47 40 L53 46" style={line('var(--io-action)', 2.2)} />
      <rect x="66" y="30" width="130" height="10" rx="5" style={dark} />

      <rect x="16" y="68" width="150" height="138" rx="8" style={card} />
      <rect x="30" y="82" width="24" height="12" rx="3" style={blue} />
      <rect x="60" y="84" width="90" height="7" rx="3.5" style={dark} />
      <rect x="30" y="106" width="122" height="4" rx="2" style={muted} />
      <rect x="30" y="116" width="100" height="4" rx="2" style={muted} />
      <rect x="30" y="134" width="24" height="12" rx="3" style={blueSoft} />
      <rect x="60" y="136" width="90" height="7" rx="3.5" style={dark} />
      <rect x="30" y="158" width="122" height="4" rx="2" style={muted} />
      <rect x="30" y="168" width="90" height="4" rx="2" style={muted} />
      <rect x="30" y="186" width="60" height="10" rx="5" style={blue} />

      <rect x="180" y="68" width="84" height="92" rx="8" style={softStroke} />
      <path d="M180 114 H264 M212 68 V160 M244 68 V160" style={{ ...noFill, stroke: '#fff', strokeWidth: 3 }} />
      <circle cx="222" cy="100" r="10" style={peach} />
      <path d="M216 108 L222 122 L228 108 Z" style={peach} />
      <circle cx="222" cy="100" r="3.5" style={{ fill: '#fff' }} />

      <rect x="180" y="168" width="84" height="38" rx="6" style={card} />
      <rect x="188" y="176" width="60" height="6" rx="3" style={dark} />
      <rect x="188" y="188" width="44" height="4" rx="2" style={muted} />
    </svg>
  );
}
