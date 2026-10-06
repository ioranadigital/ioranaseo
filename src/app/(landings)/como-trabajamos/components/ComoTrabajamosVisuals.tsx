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

/* ───────────── Hero: 3 documentos/cards conceptuales (170 × 190) ───────────── */

/** 01 Diagnóstico: búsqueda/análisis + mini gráfico. */
export function HeroDiagnosticoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 190" className={className} {...svgProps}>
      <rect x="8" y="8" width="154" height="174" rx="10" style={card} />
      <rect x="8" y="8" width="154" height="30" rx="10" style={soft} />
      <circle cx="26" cy="23" r="6" style={line('var(--io-action)', 2)} />
      <path d="M30.5 27.5 L36 33" style={line('var(--io-action)', 2)} />
      <rect x="46" y="19" width="60" height="7" rx="3.5" style={dark} />

      <rect x="24" y="56" width="122" height="56" rx="6" style={softStroke} />
      <path d="M36 96 L52 78 L64 86 L82 66 L104 76 L134 60" style={line('var(--io-action)', 2.4)} />
      <circle cx="82" cy="66" r="4" style={peach} />

      <rect x="24" y="124" width="90" height="6" rx="3" style={dark} />
      <rect x="24" y="138" width="122" height="4" rx="2" style={muted} />
      <rect x="24" y="148" width="96" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** 02 Plan de acción: checklist + prioridades. */
export function HeroPlanVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 190" className={className} {...svgProps}>
      <rect x="8" y="8" width="154" height="174" rx="10" style={card} />
      <rect x="8" y="8" width="154" height="30" rx="10" style={{ fill: 'rgba(244,162,124,0.14)' }} />
      <circle cx="26" cy="23" r="7" style={peach} />
      <path d="M22 23 l3 3 l6 -7" style={line('#fff', 2)} />
      <rect x="46" y="19" width="58" height="7" rx="3.5" style={dark} />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="24" y={56 + i * 32} width="18" height="18" rx="5" style={i === 0 ? peach : softStroke} />
          {i === 0 && <path d="M29 65 l3 3 l6 -7" style={line('#fff', 2)} />}
          <rect x="52" y={60 + i * 32} width={94 - i * 14} height="6" rx="3" style={i === 0 ? dark : muted} />
        </g>
      ))}
      <rect x="24" y="158" width="70" height="14" rx="7" style={blue} />
    </svg>
  );
}

/** 03 Seguimiento: gráfico + indicador de mejora. */
export function HeroSeguimientoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 170 190" className={className} {...svgProps}>
      <rect x="8" y="8" width="154" height="174" rx="10" style={card} />
      <rect x="8" y="8" width="154" height="30" rx="10" style={{ fill: 'rgba(52,168,106,0.12)' }} />
      <circle cx="26" cy="23" r="7" style={green} />
      <path d="M22 26 l3 -6 l3 4 l4 -8" style={line('#fff', 1.8)} />
      <rect x="46" y="19" width="60" height="7" rx="3.5" style={dark} />

      <rect x="24" y="56" width="122" height="70" rx="6" style={softStroke} />
      <path d="M36 106 L54 90 L68 98 L88 76 L108 84 L132 62" style={line('#34A86A', 2.6)} />
      <circle cx="132" cy="62" r="4.5" style={peach} />
      <path d="M24 138 a 14 14 0 1 1 -9.9 23.9" style={{ ...noFill, stroke: 'var(--io-accent)', strokeWidth: 2, strokeLinecap: 'round' }} transform="translate(90,0)" />
      <rect x="24" y="138" width="80" height="6" rx="3" style={dark} />
      <rect x="24" y="150" width="60" height="4" rx="2" style={muted} />
    </svg>
  );
}

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
