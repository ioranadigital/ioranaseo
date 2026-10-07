import type { CSSProperties } from 'react';

/**
 * Microvisuales decorativos (SVG inline) para la sección "Nuestro sistema de captación". Sin métricas, rankings ni ratings.
 * Colores vía tokens: estructura en --io-action, acento puntual en --io-accent (peach).
 */

const card: CSSProperties = { fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1.5 };
const soft: CSSProperties = { fill: 'var(--io-bg-soft)' };
const softStroke: CSSProperties = { fill: 'var(--io-bg-soft)', stroke: 'var(--io-border)', strokeWidth: 1 };
const blue: CSSProperties = { fill: 'var(--io-action)' };
const brand: CSSProperties = { fill: 'var(--io-brand)' };
const peach: CSSProperties = { fill: 'var(--io-accent)' };
const dark: CSSProperties = { fill: 'var(--io-text)', fillOpacity: 0.78 };
const muted: CSSProperties = { fill: 'var(--io-text-muted)', fillOpacity: 0.28 };
const noFill: CSSProperties = { fill: 'none' };

interface VisualProps {
  className?: string;
}

const svgProps = { 'aria-hidden': true, focusable: false as const, role: 'presentation' as const };

/* ───────────── Pipeline (120 × 72) ───────────── */

/** Web: mini browser — chrome dots, hero block, líneas de texto y CTA. */
export function PipelineWebVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 120 72" className={className} {...svgProps}>
      <rect x="6" y="4" width="108" height="64" rx="6" style={card} />
      <circle cx="14" cy="11" r="2" style={brand} />
      <circle cx="21" cy="11" r="2" style={brand} />
      <circle cx="28" cy="11" r="2" style={brand} />
      <rect x="12" y="17" width="96" height="30" rx="3" style={soft} />
      <rect x="18" y="22" width="46" height="5" rx="2.5" style={dark} />
      <rect x="18" y="30" width="62" height="3" rx="1.5" style={muted} />
      <rect x="18" y="37" width="24" height="6" rx="3" style={blue} />
      <rect x="12" y="51" width="28" height="12" rx="3" style={softStroke} />
      <rect x="46" y="51" width="28" height="12" rx="3" style={softStroke} />
      <rect x="80" y="51" width="28" height="12" rx="3" style={softStroke} />
    </svg>
  );
}

/** Visibilidad: mini interfaz de búsqueda + mini mapa con pin. */
export function PipelineVisibilityVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 120 72" className={className} {...svgProps}>
      <rect x="8" y="5" width="104" height="17" rx="8.5" style={card} />
      <circle cx="19" cy="13.5" r="3.3" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 1.6 }} />
      <path d="M21.6 16 L24 18.4" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 1.6, strokeLinecap: 'round' }} />
      <rect x="29" y="11.5" width="46" height="4" rx="2" style={dark} />

      <rect x="8" y="27" width="104" height="40" rx="6" style={softStroke} />
      <path d="M8 45 H112 M40 27 V67 M78 27 V67" style={{ ...noFill, stroke: '#fff', strokeWidth: 3 }} />
      <circle cx="59" cy="42" r="5.5" style={peach} />
      <path d="M54.6 45.5 L59 53 L63.4 45.5 Z" style={peach} />
      <circle cx="59" cy="42" r="2" style={{ fill: '#fff' }} />
    </svg>
  );
}

/** Campañas: mini anuncio + barras + línea peach. Sin cifras. */
export function PipelineCampaignsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 120 72" className={className} {...svgProps}>
      <rect x="8" y="5" width="54" height="62" rx="5" style={card} />
      <rect x="13" y="10" width="15" height="6" rx="3" style={brand} />
      <rect x="13" y="20" width="44" height="22" rx="3" style={soft} />
      <rect x="13" y="47" width="36" height="4" rx="2" style={dark} />
      <rect x="13" y="55" width="26" height="3" rx="1.5" style={muted} />

      <rect x="72" y="50" width="10" height="16" rx="2" style={{ ...blue, fillOpacity: 0.35 }} />
      <rect x="86" y="38" width="10" height="28" rx="2" style={{ ...blue, fillOpacity: 0.6 }} />
      <rect x="100" y="24" width="10" height="42" rx="2" style={blue} />
      <path d="M77 40 L91 30 L105 15" style={{ ...noFill, stroke: 'var(--io-accent)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
      <circle cx="105" cy="15" r="3" style={peach} />
    </svg>
  );
}

/** Conversión: funnel + mini formulario + señal de oportunidad. Sin métricas. */
export function PipelineConversionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 120 72" className={className} {...svgProps}>
      <rect x="6" y="8" width="62" height="13" rx="4" style={soft} />
      <rect x="14" y="26" width="46" height="13" rx="4" style={brand} />
      <rect x="22" y="44" width="30" height="13" rx="4" style={blue} />
      <path d="M37 59 V66" style={{ ...noFill, stroke: 'var(--io-accent)', strokeWidth: 2, strokeLinecap: 'round' }} />

      <rect x="76" y="14" width="38" height="46" rx="5" style={card} />
      <rect x="81" y="22" width="28" height="7" rx="2.5" style={softStroke} />
      <rect x="81" y="33" width="28" height="7" rx="2.5" style={softStroke} />
      <rect x="81" y="45" width="18" height="9" rx="4.5" style={blue} />
      <circle cx="108" cy="14" r="8" style={peach} />
      <path d="M104 14.3 L107 17.3 L112 11.3" style={{ ...noFill, stroke: '#fff', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
    </svg>
  );
}
