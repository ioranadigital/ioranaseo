import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG propios de /como-trabajamos/. Lenguaje compartido con el resto del sistema
 * (estructura en --io-action / --io-brand, acento puntual en --io-accent), pero con composiciones
 * centradas en proceso, colaboración y seguimiento — sin copiar Visibilidad, Campañas ni
 * Conversión. Sin métricas ni cifras ficticias.
 */

const card: CSSProperties = { fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1.5 };
const soft: CSSProperties = { fill: 'var(--io-bg-soft)' };
const softStroke: CSSProperties = { fill: 'var(--io-bg-soft)', stroke: 'var(--io-border)', strokeWidth: 1 };
const blue: CSSProperties = { fill: 'var(--io-action)' };
const blueSoft: CSSProperties = { fill: 'var(--io-action)', fillOpacity: 0.3 };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
const green: CSSProperties = { fill: '#34A86A' };
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

/* ───────────── Del diagnóstico a la acción — 3 pasos (170 × 110) ───────────── */

export function StepPrioridadesVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 110" className={className} {...svgProps}>
      <circle cx="52" cy="52" r="24" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 2.2 }} />
      <path d="M69 69 L86 86" style={line('var(--io-action)', 3)} />
      <rect x="112" y="34" width="42" height="6" rx="3" style={dark} />
      <rect x="112" y="46" width="34" height="4" rx="2" style={muted} />
      <rect x="112" y="58" width="38" height="4" rx="2" style={muted} />
      <circle cx="106" cy="44" r="3" style={peach} />
    </svg>
  );
}

export function StepPlanVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 110" className={className} {...svgProps}>
      <rect x="18" y="24" width="70" height="62" rx="6" style={card} />
      <rect x="28" y="34" width="14" height="14" rx="4" style={blue} />
      <rect x="46" y="37" width="34" height="5" rx="2.5" style={dark} />
      <rect x="28" y="54" width="14" height="14" rx="4" style={softStroke} />
      <rect x="46" y="57" width="34" height="5" rx="2.5" style={muted} />
      <rect x="104" y="20" width="48" height="48" rx="6" style={softStroke} />
      <path d="M104 36 H152" style={line('var(--io-border)', 1.6)} />
      <rect x="112" y="44" width="10" height="10" rx="2" style={peach} />
      <rect x="128" y="44" width="10" height="10" rx="2" style={blueSoft} />
    </svg>
  );
}

export function StepEjecucionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 110" className={className} {...svgProps}>
      <circle cx="46" cy="52" r="20" style={blue} />
      <path d="M40 52 l14 0 M48 46 l6 6 l-6 6" style={line('#fff', 2.4)} />
      <rect x="94" y="24" width="60" height="60" rx="8" style={softStroke} />
      <path d="M104 68 L118 52 L130 60 L146 40" style={line('#34A86A', 2.4)} />
      <circle cx="146" cy="40" r="4" style={peach} />
    </svg>
  );
}
