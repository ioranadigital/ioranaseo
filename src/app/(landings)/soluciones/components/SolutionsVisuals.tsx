import type { CSSProperties } from 'react';

/**
 * Microvisuales SVG inline para el hub /soluciones/. Lenguaje compartido con HOME y
 * /web-para-empresas/ (estructura en --io-action / --io-brand, acento puntual en --io-accent),
 * pero con composiciones propias — sin copiar literalmente otros archivos. Sin métricas,
 * rankings, estrellas ni reviews.
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

/** Hero: mini navegador — nav, hero con CTA y franja de bloques. */
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

/* ───────────── Cards "Nuestras soluciones" (280 × 130, banner horizontal) ───────────── */

/** Web para empresas: browser + versión responsive (desktop + móvil). */
export function CardWebVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <rect x="20" y="16" width="176" height="98" rx="8" style={card} />
      <path d="M20 32 V24 a8 8 0 0 1 8 -8 H188 a8 8 0 0 1 8 8 V32 Z" style={softStroke} />
      <circle cx="32" cy="24" r="2.5" style={brand} />
      <circle cx="41" cy="24" r="2.5" style={brand} />
      <rect x="34" y="46" width="60" height="42" rx="5" style={soft} />
      <circle cx="52" cy="60" r="5.5" style={peach} />
      <path d="M34 88 L54 70 L68 80 L94 62 Z" style={{ ...brand, fillOpacity: 0.55 }} />
      <rect x="104" y="46" width="80" height="7" rx="3.5" style={dark} />
      <rect x="104" y="60" width="70" height="4" rx="2" style={muted} />
      <rect x="104" y="68" width="56" height="4" rx="2" style={muted} />
      <rect x="104" y="80" width="42" height="10" rx="5" style={blue} />

      <rect x="208" y="30" width="52" height="80" rx="8" style={card} />
      <rect x="216" y="40" width="36" height="4" rx="2" style={muted} />
      <rect x="216" y="50" width="36" height="26" rx="4" style={soft} />
      <rect x="216" y="80" width="36" height="6" rx="3" style={blue} />
    </svg>
  );
}

/** SEO y SEO Local: campo de búsqueda + resultado + líneas de contenido. */
export function CardSeoVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <rect x="20" y="18" width="240" height="28" rx="14" style={card} />
      <circle cx="40" cy="32" r="6" style={line('var(--io-action)', 2)} />
      <path d="M44.5 36.5 L49 41" style={line('var(--io-action)', 2)} />
      <rect x="62" y="28" width="130" height="7" rx="3.5" style={dark} />

      <rect x="20" y="56" width="240" height="58" rx="8" style={card} />
      <rect x="36" y="68" width="22" height="10" rx="3" style={blue} />
      <rect x="64" y="70" width="120" height="6" rx="3" style={dark} />
      <rect x="44" y="88" width="18" height="8" rx="3" style={blueSoft} />
      <rect x="68" y="89" width="96" height="4" rx="2" style={muted} />
      <rect x="36" y="102" width="150" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** Google Maps: mapa conceptual + pin + ficha de negocio (sin estrellas ni reseñas). */
export function CardMapsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <rect x="20" y="14" width="150" height="102" rx="8" style={softStroke} />
      <path d="M20 65 H170 M75 14 V116 M125 14 V116" style={line('#fff', 5)} />
      <circle cx="95" cy="55" r="14" style={peach} />
      <path d="M85 65 L95 85 L105 65 Z" style={peach} />
      <circle cx="95" cy="55" r="5" style={{ fill: '#fff' }} />

      <rect x="184" y="26" width="76" height="78" rx="8" style={card} />
      <rect x="192" y="36" width="60" height="30" rx="4" style={soft} />
      <path d="M192 66 L206 50 L216 58 L232 44 L252 66 Z" style={{ ...brand, fillOpacity: 0.6 }} />
      <rect x="192" y="74" width="50" height="6" rx="3" style={dark} />
      <rect x="192" y="84" width="40" height="4" rx="2" style={muted} />
      <rect x="192" y="92" width="30" height="8" rx="4" style={blue} />
    </svg>
  );
}

/** Google Ads y Meta Ads: dos piezas de campaña conceptuales (sin logos oficiales). */
export function CardAdsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <rect x="20" y="18" width="112" height="94" rx="8" style={card} />
      <rect x="30" y="28" width="40" height="14" rx="7" style={softStroke} />
      <rect x="30" y="50" width="92" height="36" rx="5" style={soft} />
      <path d="M30 86 L52 66 L68 76 L92 58 Z" style={{ ...brand, fillOpacity: 0.55 }} />
      <circle cx="100" cy="36" r="6" style={peach} />
      <rect x="30" y="94" width="56" height="9" rx="4.5" style={blue} />

      <rect x="146" y="18" width="112" height="94" rx="8" style={card} />
      <circle cx="164" cy="34" r="8" style={{ ...blue, fillOpacity: 0.7 }} />
      <rect x="178" y="30" width="60" height="8" rx="4" style={softStroke} />
      <rect x="156" y="54" width="92" height="34" rx="5" style={soft} />
      <rect x="156" y="94" width="70" height="9" rx="4.5" style={blue} />
    </svg>
  );
}

/** Analytics y medición: dashboard conceptual con sparkline y barras (sin cifras). */
export function CardAnalyticsVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <rect x="20" y="16" width="240" height="98" rx="8" style={card} />
      <rect x="34" y="30" width="106" height="66" rx="6" style={softStroke} />
      <rect x="44" y="40" width="46" height="5" rx="2.5" style={muted} />
      <path d="M44 82 L64 66 L82 74 L104 52 L128 60" style={line('var(--io-action)', 2.4)} />
      <circle cx="104" cy="52" r="3.5" style={peach} />

      <rect x="150" y="30" width="96" height="66" rx="6" style={softStroke} />
      <rect x="160" y="40" width="46" height="5" rx="2.5" style={muted} />
      <rect x="162" y="68" width="12" height="18" rx="2" style={blueSoft} />
      <rect x="180" y="58" width="12" height="28" rx="2" style={{ ...blue, fillOpacity: 0.6 }} />
      <rect x="198" y="48" width="12" height="38" rx="2" style={blue} />
      <rect x="216" y="60" width="12" height="26" rx="2" style={{ ...blue, fillOpacity: 0.7 }} />
    </svg>
  );
}

/** CRO y mejora continua: visitante → formulario → acción de conversión. */
export function CardCroVisual({ className }: VisualProps) {
  return (
    <svg viewBox="0 0 280 130" className={className} {...svgProps}>
      <circle cx="42" cy="60" r="18" style={soft} />
      <circle cx="42" cy="52" r="7" style={{ ...brand, fillOpacity: 0.7 }} />
      <path d="M30 70 a12 10 0 0 1 24 0" style={{ ...brand, fillOpacity: 0.7 }} />
      <path d="M66 60 H92" style={line('var(--io-border)', 2)} />
      <path d="M86 54 L92 60 L86 66" style={line('var(--io-border)', 2)} />

      <rect x="100" y="26" width="80" height="68" rx="8" style={card} />
      <rect x="110" y="38" width="60" height="10" rx="4" style={softStroke} />
      <rect x="110" y="54" width="60" height="10" rx="4" style={softStroke} />
      <rect x="110" y="72" width="36" height="12" rx="6" style={blue} />

      <path d="M186 60 H210" style={line('var(--io-border)', 2)} />
      <path d="M204 54 L210 60 L204 66" style={line('var(--io-border)', 2)} />
      <circle cx="238" cy="60" r="20" style={peach} />
      <path d="M229 60.5 L235.5 67 L248 51" style={line('#fff', 3.2)} />
    </svg>
  );
}
