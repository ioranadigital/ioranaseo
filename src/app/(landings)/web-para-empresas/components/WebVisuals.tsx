import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG inline para /web-para-empresas/ (Visual Polish).
 * Lenguaje compartido con HOME (HomeMicrovisuals.tsx / CapabilityVisuals.tsx): estructura en
 * --io-action / --io-brand, acento puntual en --io-accent. Sin métricas, rankings ni reviews.
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

/* ───────────── Web journey (240 × 140): TE ENCUENTRAN / TE ENTIENDEN / CONTACTAN ───────────── */

/** Te encuentran: estructura SEO conceptual (búsqueda + jerarquía de encabezados). */
export function JourneySeoWebVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 140" className={className} {...svgProps}>
      <rect x="20" y="14" width="200" height="26" rx="13" style={card} />
      <circle cx="37" cy="27" r="5.5" style={line('var(--io-action)', 2)} />
      <path d="M41 31 L45 35" style={line('var(--io-action)', 2)} />
      <rect x="56" y="24" width="120" height="6" rx="3" style={dark} />

      <rect x="20" y="52" width="200" height="72" rx="8" style={card} />
      <rect x="34" y="64" width="18" height="10" rx="3" style={blue} />
      <rect x="60" y="66" width="110" height="6" rx="3" style={dark} />
      <rect x="40" y="82" width="16" height="8" rx="3" style={blueSoft} />
      <rect x="64" y="83" width="90" height="5" rx="2.5" style={dark} />
      <rect x="64" y="96" width="130" height="4" rx="2" style={muted} />
      <rect x="34" y="108" width="120" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Te entienden: mini navegador con jerarquía clara (heading, líneas, propuesta). */
export function JourneyMessageWebVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 140" className={className} {...svgProps}>
      <rect x="20" y="14" width="200" height="112" rx="10" style={card} />
      <path d="M20 34 V24 a10 10 0 0 1 10 -10 H210 a10 10 0 0 1 10 10 V34 Z" style={softStroke} />
      <circle cx="34" cy="24" r="3" style={brand} />
      <circle cx="44" cy="24" r="3" style={brand} />
      <circle cx="54" cy="24" r="3" style={brand} />

      <rect x="34" y="48" width="96" height="10" rx="5" style={dark} />
      <rect x="34" y="64" width="130" height="5" rx="2.5" style={muted} />
      <rect x="34" y="74" width="112" height="5" rx="2.5" style={muted} />
      <rect x="34" y="92" width="60" height="16" rx="8" style={blue} />

      <rect x="156" y="46" width="48" height="62" rx="6" style={soft} />
      <circle cx="180" cy="62" r="5" style={peach} />
      <path d="M156 108 L172 88 L186 100 L204 82 V108 Z" style={{ ...brand, fillOpacity: 0.6 }} />
    </svg>
  );
}

/** Contactan: CTA + formulario + acción de contacto. */
export function JourneyContactWebVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 240 140" className={className} {...svgProps}>
      <rect x="30" y="10" width="150" height="120" rx="10" style={card} />
      <rect x="44" y="24" width="122" height="16" rx="5" style={softStroke} />
      <rect x="52" y="30" width="46" height="4" rx="2" style={muted} />
      <rect x="44" y="48" width="122" height="16" rx="5" style={softStroke} />
      <rect x="52" y="54" width="60" height="4" rx="2" style={muted} />
      <rect x="44" y="72" width="122" height="16" rx="5" style={softStroke} />
      <rect x="44" y="98" width="70" height="20" rx="10" style={blue} />

      <circle cx="196" cy="20" r="16" style={peach} />
      <path d="M188 20.5 L194.5 27 L206 12" style={line('#fff', 3)} />
      <path d="M180 96 L200 96 M180 104 L212 104 M180 112 L196 112" style={line('var(--io-action)', 2.4)} />
    </svg>
  );
}

/* ───────────── Nuestro método (200 × 120): Estrategia / Diseño / SEO / Conversión ───────────── */

/** Estrategia: brief + bloques / sitemap. */
export function MethodStrategyVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} {...svgProps}>
      <rect x="20" y="14" width="70" height="92" rx="6" style={card} />
      <rect x="30" y="26" width="40" height="6" rx="3" style={dark} />
      <rect x="30" y="40" width="50" height="4" rx="2" style={muted} />
      <rect x="30" y="50" width="44" height="4" rx="2" style={muted} />
      <rect x="30" y="60" width="50" height="4" rx="2" style={muted} />
      <rect x="30" y="84" width="30" height="10" rx="5" style={blue} />

      <rect x="112" y="16" width="30" height="18" rx="4" style={softStroke} />
      <path d="M127 34 V44 M127 44 H100 M127 44 H154" style={line('var(--io-border)', 2)} />
      <rect x="86" y="48" width="28" height="16" rx="4" style={soft} />
      <rect x="140" y="48" width="28" height="16" rx="4" style={soft} />
      <circle cx="127" cy="85" r="9" style={peach} />
      <path d="M122.5 85.5 L126 89 L133 80" style={line('#fff', 2.2)} />
    </svg>
  );
}

/** Diseño: navegador con layout equilibrado. */
export function MethodDesignVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} {...svgProps}>
      <rect x="16" y="10" width="168" height="100" rx="8" style={card} />
      <path d="M16 28 V18 a8 8 0 0 1 8 -8 H176 a8 8 0 0 1 8 8 V28 Z" style={softStroke} />
      <circle cx="28" cy="18" r="2.5" style={brand} />
      <circle cx="37" cy="18" r="2.5" style={brand} />

      <rect x="28" y="40" width="66" height="46" rx="5" style={soft} />
      <circle cx="48" cy="56" r="6" style={peach} />
      <path d="M28 86 L52 66 L68 78 L94 60 Z" style={{ ...brand, fillOpacity: 0.55 }} />

      <rect x="104" y="40" width="68" height="10" rx="5" style={dark} />
      <rect x="104" y="56" width="60" height="5" rx="2.5" style={muted} />
      <rect x="104" y="66" width="50" height="5" rx="2.5" style={muted} />
      <rect x="104" y="80" width="40" height="12" rx="6" style={blue} />
    </svg>
  );
}

/** SEO: búsqueda + estructura de contenido. */
export function MethodSeoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} {...svgProps}>
      <rect x="16" y="10" width="168" height="26" rx="13" style={card} />
      <circle cx="34" cy="23" r="5" style={line('var(--io-action)', 2)} />
      <path d="M38 27 L42 31" style={line('var(--io-action)', 2)} />
      <rect x="52" y="20" width="100" height="6" rx="3" style={dark} />

      <rect x="16" y="46" width="168" height="64" rx="8" style={card} />
      <rect x="30" y="58" width="20" height="9" rx="3" style={blue} />
      <rect x="56" y="60" width="96" height="5" rx="2.5" style={dark} />
      <rect x="36" y="76" width="18" height="8" rx="3" style={blueSoft} />
      <rect x="60" y="77" width="80" height="4" rx="2" style={muted} />
      <rect x="30" y="92" width="110" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Conversión: formulario + CTA. */
export function MethodConversionVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 200 120" className={className} {...svgProps}>
      <rect x="24" y="10" width="152" height="100" rx="8" style={card} />
      <rect x="38" y="24" width="124" height="14" rx="4" style={softStroke} />
      <rect x="44" y="29" width="40" height="4" rx="2" style={muted} />
      <rect x="38" y="44" width="124" height="14" rx="4" style={softStroke} />
      <rect x="44" y="49" width="54" height="4" rx="2" style={muted} />
      <rect x="38" y="64" width="60" height="20" rx="10" style={blue} />
      <circle cx="150" cy="74" r="14" style={peach} />
      <path d="M143 74.5 L148 79.5 L158 66.5" style={line('#fff', 2.6)} />
    </svg>
  );
}

/** Hero: mini navegador — nav, hero con CTA y franja de 3 bloques (footer/servicios). */
export function HeroBrowserVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 190" className={className} {...svgProps}>
      <rect x="10" y="8" width="260" height="174" rx="10" style={card} />
      <path d="M10 30 V18 a10 10 0 0 1 10 -10 H260 a10 10 0 0 1 10 10 V30 Z" style={softStroke} />
      <circle cx="26" cy="18" r="3" style={brand} />
      <circle cx="36" cy="18" r="3" style={brand} />
      <circle cx="46" cy="18" r="3" style={brand} />
      <rect x="188" y="14" width="66" height="8" rx="4" style={muted} />

      <rect x="26" y="44" width="228" height="66" rx="6" style={soft} />
      <rect x="40" y="56" width="110" height="10" rx="5" style={dark} />
      <rect x="40" y="72" width="140" height="5" rx="2.5" style={muted} />
      <rect x="40" y="82" width="120" height="5" rx="2.5" style={muted} />
      <rect x="40" y="94" width="56" height="14" rx="7" style={blue} />
      <circle cx="220" cy="76" r="14" style={peach} />
      <path d="M198 100 L218 82 L232 92 L246 78" style={{ ...brand, fillOpacity: 0.5 }} />

      <rect x="26" y="120" width="70" height="46" rx="5" style={softStroke} />
      <rect x="104" y="120" width="70" height="46" rx="5" style={softStroke} />
      <rect x="182" y="120" width="72" height="46" rx="5" style={softStroke} />
      <rect x="34" y="130" width="40" height="5" rx="2.5" style={dark} />
      <rect x="112" y="130" width="40" height="5" rx="2.5" style={dark} />
      <rect x="190" y="130" width="40" height="5" rx="2.5" style={dark} />
      <rect x="34" y="142" width="50" height="4" rx="2" style={muted} />
      <rect x="112" y="142" width="50" height="4" rx="2" style={muted} />
      <rect x="190" y="142" width="50" height="4" rx="2" style={muted} />
    </svg>
  );
}

/* ───────────── Qué incluye tu web: navegador compartido con zona resaltada según capacidad ─────────────
   viewBox 320 × 220. `zone` decide qué parte del navegador se resalta (peach + azul reforzado). */

export type WebZone = 'responsive' | 'seo' | 'contact' | 'analytics' | 'copy' | 'training';

export function SharedWebVisual({ className, zone }: VisualProps & { zone: WebZone }) {
  const on = (z: WebZone) => z === zone;
  const zoneStyle = (z: WebZone, base: CSSProperties): CSSProperties =>
    on(z) ? { ...base, stroke: 'var(--io-action)', strokeWidth: 2 } : base;

  return (
    <svg viewBox="0 0 320 220" className={className} {...svgProps}>
      {/* Frame: escritorio */}
      <rect x="16" y="10" width="220" height="170" rx="8" style={card} />
      <path d="M16 28 V18 a8 8 0 0 1 8 -8 H228 a8 8 0 0 1 8 8 V28 Z" style={softStroke} />
      <circle cx="28" cy="18" r="2.5" style={brand} />
      <circle cx="37" cy="18" r="2.5" style={brand} />
      <circle cx="46" cy="18" r="2.5" style={brand} />

      {/* nav (contenido / SEO técnico) */}
      <g style={zoneStyle('seo', softStroke)}>
        <rect x="28" y="38" width="196" height="14" rx="4" style={on('seo') ? { ...soft, stroke: 'var(--io-action)', strokeWidth: 2 } : soft} />
        <rect x="36" y="43" width="14" height="4" rx="2" style={muted} />
        <rect x="56" y="43" width="14" height="4" rx="2" style={muted} />
        <rect x="76" y="43" width="14" height="4" rx="2" style={muted} />
      </g>

      {/* hero + copy (textos orientados a conversión) */}
      <g>
        <rect x="28" y="60" width="196" height="46" rx="6" style={on('copy') ? { ...soft, stroke: 'var(--io-action)', strokeWidth: 2 } : soft} />
        <rect x="40" y="70" width="110" height="8" rx="4" style={on('copy') ? blue : dark} />
        <rect x="40" y="84" width="140" height="5" rx="2.5" style={muted} />
        <rect x="40" y="92" width="90" height="5" rx="2.5" style={muted} />
      </g>

      {/* formulario / contacto (formularios, llamadas, WhatsApp) */}
      <g>
        <rect x="28" y="114" width="90" height="52" rx="6" style={on('contact') ? { ...card, stroke: 'var(--io-action)', strokeWidth: 2 } : softStroke} />
        <rect x="38" y="124" width="70" height="8" rx="3" style={muted} />
        <rect x="38" y="138" width="70" height="8" rx="3" style={muted} />
        <rect x="38" y="152" width="40" height="10" rx="5" style={on('contact') ? peach : blue} />
      </g>

      {/* analytics (medición) */}
      <g>
        <rect x="128" y="114" width="52" height="52" rx="6" style={on('analytics') ? { ...card, stroke: 'var(--io-action)', strokeWidth: 2 } : softStroke} />
        <rect x="136" y="150" width="8" height="10" rx="2" style={blueSoft} />
        <rect x="148" y="142" width="8" height="18" rx="2" style={{ ...blue, fillOpacity: 0.6 }} />
        <rect x="160" y="132" width="8" height="28" rx="2" style={blue} />
      </g>

      {/* responsive (dispositivos) */}
      <g>
        <rect x="190" y="114" width="34" height="52" rx="6" style={on('responsive') ? { ...card, stroke: 'var(--io-action)', strokeWidth: 2 } : softStroke} />
        <rect x="197" y="121" width="20" height="30" rx="2" style={soft} />
        <circle cx="207" cy="157" r="3" style={on('responsive') ? peach : muted} />
      </g>

      {/* formación: mini nota flotante */}
      <g style={{ opacity: on('training') ? 1 : 0.55 }}>
        <rect x="244" y="66" width="60" height="66" rx="8" style={{ ...card, stroke: on('training') ? 'var(--io-action)' : 'var(--io-border)', strokeWidth: on('training') ? 2 : 1.5 }} />
        <circle cx="274" cy="86" r="11" style={on('training') ? peach : muted} />
        <path d="M266 86 h16 M266 94 h16 M266 102 h10" style={line('#fff', 2)} />
        <rect x="254" y="116" width="40" height="6" rx="3" style={muted} />
        <rect x="254" y="126" width="30" height="5" rx="2.5" style={muted} />
      </g>
    </svg>
  );
}
