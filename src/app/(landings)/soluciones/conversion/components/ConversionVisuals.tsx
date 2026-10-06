import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG propios de /soluciones/conversion/. Lenguaje compartido con el resto del
 * sistema (estructura en --io-action / --io-brand, acento puntual en --io-accent), pero con
 * composiciones centradas en comportamiento, UX, datos y mejora continua — sin copiar
 * Visibilidad (búsqueda/mapa) ni Campañas (anuncios/audiencias). Sin métricas ni cifras ficticias.
 */

const card: CSSProperties = { fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1.5 };
const soft: CSSProperties = { fill: 'var(--io-bg-soft)' };
const softStroke: CSSProperties = { fill: 'var(--io-bg-soft)', stroke: 'var(--io-border)', strokeWidth: 1 };
const blue: CSSProperties = { fill: 'var(--io-action)' };
const blueSoft: CSSProperties = { fill: 'var(--io-action)', fillOpacity: 0.3 };
const brand: CSSProperties = { fill: 'var(--io-brand)' };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
const green: CSSProperties = { fill: '#34A86A' };
const greenSoft: CSSProperties = { fill: '#34A86A', fillOpacity: 0.18 };
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

/* ───────────── Hero: web conceptual con formulario + overlay A/B ───────────── */

/** Panel principal: navegador con web de PYME neutra (headline + imagen + CTA + formulario). */
export function HeroWebsiteVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 300 210" className={className} {...svgProps}>
      <rect x="10" y="8" width="280" height="194" rx="10" style={card} />
      <path d="M10 30 V18 a10 10 0 0 1 10 -10 H280 a10 10 0 0 1 10 10 V30 Z" style={softStroke} />
      <circle cx="26" cy="19" r="3" style={brand} />
      <circle cx="36" cy="19" r="3" style={brand} />
      <circle cx="46" cy="19" r="3" style={brand} />

      <rect x="26" y="44" width="248" height="56" rx="6" style={soft} />
      <rect x="40" y="56" width="120" height="10" rx="5" style={dark} />
      <rect x="40" y="74" width="140" height="5" rx="2.5" style={muted} />
      <rect x="40" y="84" width="56" height="14" rx="7" style={blue} />
      <circle cx="238" cy="72" r="14" style={{ ...brand, fillOpacity: 0.5 }} />

      <rect x="26" y="112" width="128" height="72" rx="8" style={{ ...card, stroke: 'var(--io-action)', strokeWidth: 1.4 }} />
      <rect x="38" y="124" width="104" height="12" rx="4" style={softStroke} />
      <rect x="38" y="142" width="104" height="12" rx="4" style={softStroke} />
      <rect x="38" y="160" width="60" height="12" rx="6" style={blue} />

      <rect x="166" y="112" width="108" height="72" rx="8" style={softStroke} />
      <rect x="178" y="124" width="84" height="6" rx="3" style={dark} />
      <path d="M178 154 L196 140 L210 148 L230 130 L252 146" style={line('var(--io-action)', 2.2)} />
      <circle cx="230" cy="130" r="3.5" style={peach} />
    </svg>
  );
}

/** Overlay: comparación conceptual A / B (sin ganador, sin porcentajes). */
export function HeroAbTestVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 130" className={className} {...svgProps}>
      <rect x="6" y="6" width="188" height="118" rx="12" style={card} />
      <rect x="18" y="18" width="76" height="94" rx="7" style={softStroke} />
      <circle cx="32" cy="30" r="7" style={blue} />
      <text x="29" y="33" style={{ fill: '#fff', fontSize: 8, fontWeight: 700 }}>A</text>
      <rect x="26" y="46" width="56" height="6" rx="3" style={dark} />
      <rect x="26" y="58" width="44" height="4" rx="2" style={muted} />
      <rect x="26" y="90" width="40" height="12" rx="6" style={blueSoft} />

      <rect x="106" y="18" width="76" height="94" rx="7" style={softStroke} />
      <circle cx="120" cy="30" r="7" style={peach} />
      <text x="117" y="33" style={{ fill: '#fff', fontSize: 8, fontWeight: 700 }}>B</text>
      <rect x="114" y="46" width="56" height="6" rx="3" style={dark} />
      <rect x="114" y="58" width="44" height="4" rx="2" style={muted} />
      <rect x="114" y="90" width="48" height="12" rx="6" style={blue} />

      <path d="M96 65 h8" style={line('var(--io-border)', 2)} />
    </svg>
  );
}

/* ───────────── Qué optimizamos — 3 pilares (260 × 150) ───────────── */

/** Formularios y contacto: formulario compacto + CTA. */
export function PillarFormsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 150" className={className} {...svgProps}>
      <rect x="40" y="16" width="180" height="118" rx="10" style={card} />
      <rect x="56" y="32" width="148" height="16" rx="5" style={softStroke} />
      <rect x="64" y="38" width="48" height="4" rx="2" style={muted} />
      <rect x="56" y="56" width="148" height="16" rx="5" style={softStroke} />
      <rect x="64" y="62" width="60" height="4" rx="2" style={muted} />
      <rect x="56" y="80" width="148" height="16" rx="5" style={softStroke} />
      <rect x="56" y="106" width="76" height="16" rx="8" style={blue} />
      <circle cx="196" cy="114" r="14" style={peach} />
      <path d="M189 114.5 L194.5 120 L204 108" style={line('#fff', 2.6)} />
    </svg>
  );
}

/** Experiencia de usuario: cursor recorriendo un camino de navegación claro. */
export function PillarUxVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 150" className={className} {...svgProps}>
      <rect x="30" y="16" width="200" height="118" rx="10" style={card} />
      <rect x="46" y="30" width="80" height="8" rx="4" style={dark} />
      <rect x="46" y="46" width="168" height="20" rx="5" style={soft} />
      <path d="M46 100 C 90 100, 90 70, 130 70 S 170 110, 214 110" style={line('#34A86A', 2.4)} />
      <circle cx="46" cy="100" r="4.5" style={greenSoft} />
      <circle cx="214" cy="110" r="6" style={green} />
      <path d="M60 118 l8 -6 l5 7 l-6 5 Z" style={{ fill: 'var(--io-text)', fillOpacity: 0.75 }} />
      <rect x="46" y="80" width="60" height="14" rx="7" style={softStroke} />
      <rect x="140" y="92" width="60" height="14" rx="7" style={blue} />
    </svg>
  );
}

/** Medición y mejora continua: analytics + bucle de iteración. */
export function PillarMeasureVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 260 150" className={className} {...svgProps}>
      <rect x="34" y="20" width="130" height="94" rx="8" style={softStroke} />
      <path d="M48 92 L68 74 L84 82 L106 60 L150 44" style={line('var(--io-action)', 2.4)} />
      <circle cx="106" cy="60" r="4" style={peach} />
      <path d="M48 104 H150" style={line('var(--io-border)', 1.4)} />

      <path d="M186 40 a 28 28 0 1 1 -19.8 47.8" style={{ ...noFill, stroke: 'var(--io-accent)', strokeWidth: 2.6, strokeLinecap: 'round' }} />
      <path d="M160 82 l6 12 l12 -4 Z" style={peach} />
      <circle cx="186" cy="68" r="5" style={blue} />
    </svg>
  );
}

/* ───────────── Proceso — 4 pasos (180 × 110) ───────────── */

export function StepAnalisisVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <circle cx="60" cy="55" r="26" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 2 }} />
      <path d="M79 74 L96 91" style={line('var(--io-action)', 3)} />
      <circle cx="50" cy="46" r="3" style={peach} />
      <circle cx="68" cy="58" r="3" style={blueSoft} />
      <circle cx="56" cy="66" r="3" style={{ ...blue, fillOpacity: 0.6 }} />
      <rect x="120" y="40" width="40" height="6" rx="3" style={dark} />
      <rect x="120" y="52" width="32" height="4" rx="2" style={muted} />
      <rect x="120" y="62" width="36" height="4" rx="2" style={muted} />
    </svg>
  );
}

export function StepHipotesisVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <circle cx="60" cy="46" r="20" style={peach} />
      <path d="M52 46 a8 8 0 1 1 16 0 c0 5 -4 6 -4 12 h-8 c0 -6 -4 -7 -4 -12 Z" style={{ fill: '#fff' }} />
      <rect x="54" y="66" width="12" height="5" rx="2" style={{ fill: '#fff' }} />
      <rect x="110" y="30" width="50" height="14" rx="4" style={softStroke} />
      <rect x="110" y="50" width="50" height="14" rx="4" style={softStroke} />
      <rect x="110" y="70" width="34" height="12" rx="6" style={blue} />
    </svg>
  );
}

export function StepMejoraVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <circle cx="55" cy="55" r="22" style={line('var(--io-action)', 2.4)} />
      <path d="M55 41 v6 M55 63 v6 M41 55 h6 M63 55 h6 M46 46 l4 4 M60 46 l-4 4 M46 64 l4 -4 M60 64 l-4 -4" style={line('var(--io-action)', 2.4)} />
      <circle cx="55" cy="55" r="6" style={peach} />
      <rect x="104" y="34" width="60" height="42" rx="6" style={card} />
      <rect x="112" y="42" width="44" height="6" rx="3" style={dark} />
      <rect x="112" y="54" width="30" height="12" rx="6" style={green} />
    </svg>
  );
}

export function StepMedicionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 180 110" className={className} {...svgProps}>
      <rect x="24" y="20" width="132" height="70" rx="8" style={card} />
      <path d="M38 74 L58 56 L74 64 L96 42 L120 52 L142 30" style={line('var(--io-action)', 2.6)} />
      <circle cx="96" cy="42" r="4" style={peach} />
      <path d="M142 30 a 14 14 0 1 1 -9.9 23.9" style={{ ...noFill, stroke: 'var(--io-accent)', strokeWidth: 2, strokeLinecap: 'round' }} />
      <path d="M126 46 l4 8 l8 -3 Z" style={peach} />
    </svg>
  );
}

/* ───────────── Resultados — 3 iconos compactos (100 × 76) ───────────── */

export function ResultContactsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <circle cx="34" cy="30" r="12" style={soft} />
      <circle cx="34" cy="26" r="5" style={{ ...brand, fillOpacity: 0.7 }} />
      <path d="M25 38 a9 8 0 0 1 18 0" style={{ ...brand, fillOpacity: 0.7 }} />
      <circle cx="70" cy="20" r="10" style={peach} />
      <path d="M64 20.5 L68.5 25 L77 15" style={line('#fff', 2.2)} />
      <rect x="20" y="56" width="60" height="6" rx="3" style={muted} />
    </svg>
  );
}

export function ResultBookingsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <rect x="22" y="14" width="48" height="44" rx="6" style={softStroke} />
      <rect x="22" y="14" width="48" height="12" rx="6" style={blue} />
      <path d="M32 30 h8 M44 30 h8 M32 40 h8 M44 40 h8" style={line('var(--io-border)', 2.4)} />
      <circle cx="72" cy="50" r="12" style={green} />
      <path d="M66 50.5 L70.5 55 L79 45" style={line('#fff', 2.2)} />
    </svg>
  );
}

export function ResultPerformanceVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 100 76" className={className} {...svgProps}>
      <rect x="16" y="14" width="60" height="44" rx="6" style={softStroke} />
      <path d="M26 46 L38 34 L48 40 L64 22" style={line('var(--io-action)', 2.4)} />
      <circle cx="64" cy="22" r="4" style={peach} />
      <path d="M16 62 H76" style={line('var(--io-border)', 1.4)} />
    </svg>
  );
}
