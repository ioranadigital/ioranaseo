import type { CSSProperties } from 'react';

/**
 * Microvisuales decorativos (SVG inline) para las secciones "De la presencia digital a las
 * oportunidades" y "Nuestro sistema de captación". Sin métricas, rankings ni ratings.
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

/* ───────────── Journey (240 × 100) ───────────── */

/** Te encuentran: mini búsqueda + resultado + pin. */
export function JourneyFindVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 100" className={className} {...svgProps}>
      <rect x="16" y="6" width="208" height="26" rx="13" style={card} />
      <circle cx="33" cy="19" r="5" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 2 }} />
      <path d="M37 23 L41 27" style={{ ...noFill, stroke: 'var(--io-action)', strokeWidth: 2, strokeLinecap: 'round' }} />
      <rect x="50" y="16" width="92" height="6" rx="3" style={dark} />

      <rect x="16" y="40" width="208" height="24" rx="6" style={card} />
      <rect x="28" y="46" width="76" height="5" rx="2.5" style={dark} />
      <rect x="28" y="55" width="120" height="4" rx="2" style={muted} />

      <rect x="16" y="70" width="208" height="26" rx="6" style={{ ...card, stroke: 'var(--io-accent)' }} />
      <circle cx="35" cy="80" r="6.5" style={peach} />
      <path d="M30 84.5 L35 92.5 L40 84.5 Z" style={peach} />
      <circle cx="35" cy="80" r="2.3" style={{ fill: '#fff' }} />
      <rect x="50" y="76" width="84" height="5" rx="2.5" style={dark} />
      <rect x="50" y="85" width="112" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Te entienden: mini browser / bloque de contenido con heading y líneas. */
export function JourneyUnderstandVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 100" className={className} {...svgProps}>
      <rect x="20" y="6" width="200" height="90" rx="8" style={card} />
      <path d="M20 22 V14 a8 8 0 0 1 8 -8 H212 a8 8 0 0 1 8 8 V22 Z" style={softStroke} />
      <circle cx="32" cy="14" r="2.5" style={brand} />
      <circle cx="41" cy="14" r="2.5" style={brand} />
      <circle cx="50" cy="14" r="2.5" style={brand} />

      <rect x="32" y="34" width="86" height="8" rx="4" style={dark} />
      <rect x="32" y="48" width="112" height="4" rx="2" style={muted} />
      <rect x="32" y="56" width="98" height="4" rx="2" style={muted} />
      <rect x="32" y="70" width="44" height="14" rx="7" style={blue} />

      <rect x="154" y="32" width="56" height="52" rx="6" style={soft} />
      <circle cx="170" cy="46" r="5" style={peach} />
      <path d="M154 84 L176 62 L192 76 L200 68 L210 78 V84 Z" style={{ ...brand, fillOpacity: 0.7 }} />
    </svg>
  );
}

/** Contactan: mini formulario / mensaje + pequeño indicador de oportunidad. */
export function JourneyContactVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 100" className={className} {...svgProps}>
      <rect x="46" y="8" width="148" height="86" rx="8" style={card} />
      <rect x="60" y="20" width="118" height="14" rx="4" style={softStroke} />
      <rect x="66" y="25" width="40" height="4" rx="2" style={muted} />
      <rect x="60" y="40" width="118" height="14" rx="4" style={softStroke} />
      <rect x="66" y="45" width="56" height="4" rx="2" style={muted} />
      <rect x="60" y="62" width="118" height="14" rx="4" style={softStroke} />
      <rect x="60" y="80" width="54" height="10" rx="5" style={blue} />

      <circle cx="194" cy="16" r="13" style={peach} />
      <path d="M187.5 16.5 L192 21 L200.5 11.5" style={{ ...noFill, stroke: '#fff', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
    </svg>
  );
}

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
