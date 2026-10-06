import type { CSSProperties } from 'react';

/**
 * Microvisuales decorativos (SVG inline, 360 × 210) para "Todo lo que necesitas para captar mejor".
 * Sin métricas, rankings, reviews ni estrellas. Estructura en --io-action, acento puntual en --io-accent.
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

const svgProps = { 'aria-hidden': true, focusable: false as const, role: 'presentation' as const, viewBox: '0 0 360 210' };

/** Web y landing pages: navegador con hero, líneas de texto y CTA. */
export function CapWebVisual({ className }: VisualProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="10" width="320" height="190" rx="10" style={card} />
      <path d="M20 40 V20 a10 10 0 0 1 10 -10 H330 a10 10 0 0 1 10 10 V40 Z" style={softStroke} />
      <circle cx="36" cy="25" r="3.5" style={brand} />
      <circle cx="48" cy="25" r="3.5" style={brand} />
      <circle cx="60" cy="25" r="3.5" style={brand} />
      <rect x="84" y="18" width="150" height="14" rx="7" style={card} />

      <rect x="36" y="54" width="288" height="78" rx="6" style={soft} />
      <rect x="52" y="68" width="120" height="10" rx="5" style={dark} />
      <rect x="52" y="86" width="150" height="5" rx="2.5" style={muted} />
      <rect x="52" y="97" width="130" height="5" rx="2.5" style={muted} />
      <rect x="52" y="110" width="54" height="14" rx="7" style={blue} />
      <rect x="226" y="64" width="84" height="58" rx="6" style={{ fill: '#fff' }} />
      <circle cx="248" cy="82" r="6" style={peach} />
      <path d="M226 122 L252 98 L272 114 L284 104 L310 122 Z" style={{ ...brand, fillOpacity: 0.7 }} />

      <rect x="36" y="144" width="90" height="46" rx="5" style={softStroke} />
      <rect x="135" y="144" width="90" height="46" rx="5" style={softStroke} />
      <rect x="234" y="144" width="90" height="46" rx="5" style={softStroke} />
      <rect x="44" y="153" width="40" height="5" rx="2.5" style={dark} />
      <rect x="143" y="153" width="40" height="5" rx="2.5" style={dark} />
      <rect x="242" y="153" width="40" height="5" rx="2.5" style={dark} />
      <rect x="44" y="164" width="70" height="4" rx="2" style={muted} />
      <rect x="143" y="164" width="70" height="4" rx="2" style={muted} />
      <rect x="242" y="164" width="70" height="4" rx="2" style={muted} />
    </svg>
  );
}

/** SEO y SEO Local: búsqueda + estructura de encabezados + indicador local. */
export function CapSeoVisual({ className }: VisualProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="12" width="320" height="34" rx="17" style={card} />
      <circle cx="44" cy="29" r="7" style={line('var(--io-action)', 2.4)} />
      <path d="M49 34 L55 40" style={line('var(--io-action)', 2.4)} />
      <rect x="68" y="25" width="130" height="8" rx="4" style={dark} />

      <rect x="20" y="58" width="320" height="140" rx="10" style={card} />
      {/* resultado principal con estructura de encabezados */}
      <rect x="36" y="72" width="24" height="12" rx="3" style={blue} />
      <rect x="68" y="74" width="150" height="8" rx="4" style={dark} />
      <rect x="44" y="94" width="20" height="9" rx="3" style={blueSoft} />
      <rect x="72" y="96" width="110" height="6" rx="3" style={dark} />
      <rect x="44" y="110" width="20" height="9" rx="3" style={blueSoft} />
      <rect x="72" y="112" width="128" height="6" rx="3" style={dark} />
      <rect x="72" y="128" width="130" height="4" rx="2" style={muted} />
      <rect x="72" y="138" width="110" height="4" rx="2" style={muted} />
      <rect x="36" y="156" width="150" height="6" rx="3" style={muted} />
      <rect x="36" y="168" width="120" height="4" rx="2" style={muted} />
      <rect x="36" y="180" width="140" height="4" rx="2" style={muted} />

      {/* indicador local */}
      <rect x="226" y="88" width="96" height="94" rx="8" style={softStroke} />
      <path d="M226 128 H322 M266 88 V182 M296 88 V182" style={line('#fff', 4)} />
      <circle cx="274" cy="122" r="11" style={peach} />
      <path d="M266.5 129 L274 142 L281.5 129 Z" style={peach} />
      <circle cx="274" cy="122" r="4" style={{ fill: '#fff' }} />
    </svg>
  );
}

/** Google Maps: mapa + pin + tarjeta de negocio simplificada. */
export function CapMapsVisual({ className }: VisualProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="10" width="320" height="190" rx="10" style={softStroke} />
      <path d="M20 70 H340 M20 140 H340 M110 10 V200 M230 10 V200" style={line('#fff', 9)} />
      <path d="M20 105 L340 60" style={line('#fff', 6)} />
      <rect x="128" y="86" width="86" height="42" rx="4" style={{ ...blue, fillOpacity: 0.12 }} />
      <rect x="252" y="20" width="60" height="38" rx="4" style={{ ...brand, fillOpacity: 0.12 }} />

      {/* pin */}
      <circle cx="120" cy="68" r="16" style={peach} />
      <path d="M108 78 L120 100 L132 78 Z" style={peach} />
      <circle cx="120" cy="68" r="6" style={{ fill: '#fff' }} />

      {/* ficha de negocio simplificada */}
      <rect x="170" y="112" width="152" height="76" rx="8" style={card} />
      <rect x="180" y="122" width="44" height="34" rx="5" style={soft} />
      <path d="M180 156 L194 140 L204 148 L212 142 L224 156 Z" style={{ ...brand, fillOpacity: 0.6 }} />
      <rect x="234" y="124" width="76" height="8" rx="4" style={dark} />
      <rect x="234" y="138" width="60" height="5" rx="2.5" style={muted} />
      <rect x="180" y="166" width="58" height="14" rx="7" style={blue} />
      <rect x="246" y="166" width="58" height="14" rx="7" style={softStroke} />
    </svg>
  );
}

/** Google Ads y Meta Ads: dos piezas de campaña conceptuales (sin cifras ni UI oficial). */
export function CapAdsVisual({ className }: VisualProps) {
  const label: CSSProperties = { fill: 'var(--io-text)', fontSize: 10, fontWeight: 700, letterSpacing: '0.02em' };
  return (
    <svg {...svgProps} className={className}>
      {/* pieza 1: búsqueda / texto */}
      <rect x="18" y="14" width="156" height="182" rx="10" style={card} />
      <rect x="30" y="26" width="64" height="16" rx="8" style={softStroke} />
      <text x="38" y="37.5" style={label}>Google Ads</text>
      <rect x="30" y="52" width="132" height="70" rx="6" style={soft} />
      <path d="M30 122 L58 92 L82 110 L102 96 L162 122 Z" style={{ ...brand, fillOpacity: 0.55 }} />
      <circle cx="140" cy="70" r="8" style={peach} />
      <rect x="30" y="132" width="104" height="8" rx="4" style={dark} />
      <rect x="30" y="146" width="84" height="5" rx="2.5" style={muted} />
      <rect x="30" y="166" width="66" height="18" rx="9" style={blue} />

      {/* pieza 2: social / imagen */}
      <rect x="186" y="14" width="156" height="182" rx="10" style={card} />
      <rect x="198" y="26" width="56" height="16" rx="8" style={softStroke} />
      <text x="206" y="37.5" style={label}>Meta Ads</text>
      <rect x="198" y="52" width="132" height="86" rx="6" style={soft} />
      <circle cx="250" cy="86" r="16" style={{ ...blue, fillOpacity: 0.7 }} />
      <path d="M198 138 L232 108 L258 126 L282 110 L330 138 Z" style={{ ...brand, fillOpacity: 0.45 }} />
      <circle cx="312" cy="70" r="6" style={peach} />
      <rect x="198" y="148" width="100" height="8" rx="4" style={dark} />
      <rect x="198" y="166" width="66" height="18" rx="9" style={blue} />
    </svg>
  );
}

/** Analytics y medición: dashboard con sparkline e indicadores de evento (sin cifras). */
export function CapAnalyticsVisual({ className }: VisualProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="10" width="320" height="190" rx="10" style={card} />
      <rect x="20" y="10" width="62" height="190" rx="10" style={softStroke} />
      <rect x="32" y="26" width="38" height="8" rx="4" style={dark} />
      <rect x="32" y="48" width="38" height="6" rx="3" style={blue} />
      <rect x="32" y="64" width="30" height="6" rx="3" style={muted} />
      <rect x="32" y="80" width="34" height="6" rx="3" style={muted} />
      <rect x="32" y="96" width="26" height="6" rx="3" style={muted} />

      <rect x="96" y="24" width="106" height="66" rx="6" style={softStroke} />
      <rect x="104" y="32" width="44" height="5" rx="2.5" style={muted} />
      <path d="M104 78 L124 62 L142 70 L164 50 L192 56" style={line('var(--io-action)', 2.4)} />
      <circle cx="164" cy="50" r="3.5" style={peach} />
      <rect x="212" y="24" width="112" height="66" rx="6" style={softStroke} />
      <rect x="220" y="32" width="44" height="5" rx="2.5" style={muted} />
      <rect x="222" y="66" width="12" height="16" rx="2" style={blueSoft} />
      <rect x="240" y="58" width="12" height="24" rx="2" style={{ ...blue, fillOpacity: 0.55 }} />
      <rect x="258" y="50" width="12" height="32" rx="2" style={{ ...blue, fillOpacity: 0.8 }} />
      <rect x="276" y="44" width="12" height="38" rx="2" style={blue} />

      <rect x="96" y="104" width="228" height="82" rx="6" style={{ fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1 }} />
      <path d="M108 168 L136 148 L160 158 L190 128 L222 140 L252 116 L280 126 L312 112" style={line('var(--io-action)', 2.6)} />
      <path d="M108 176 H312" style={line('var(--io-border)', 1)} />
      <circle cx="190" cy="128" r="4" style={peach} />
      <circle cx="252" cy="116" r="4" style={peach} />
      <circle cx="136" cy="148" r="3.5" style={{ ...blue }} />
    </svg>
  );
}

/** CRO y mejora continua: landing con formulario y CTA + indicador de mejora. */
export function CapCroVisual({ className }: VisualProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="10" width="320" height="190" rx="10" style={card} />
      <path d="M20 40 V20 a10 10 0 0 1 10 -10 H330 a10 10 0 0 1 10 10 V40 Z" style={softStroke} />
      <circle cx="36" cy="25" r="3.5" style={brand} />
      <circle cx="48" cy="25" r="3.5" style={brand} />
      <circle cx="60" cy="25" r="3.5" style={brand} />
      <rect x="84" y="18" width="150" height="14" rx="7" style={card} />

      {/* hero */}
      <rect x="36" y="58" width="132" height="10" rx="5" style={dark} />
      <rect x="36" y="76" width="116" height="5" rx="2.5" style={muted} />
      <rect x="36" y="87" width="96" height="5" rx="2.5" style={muted} />
      <rect x="36" y="112" width="70" height="18" rx="9" style={blue} />
      <rect x="36" y="146" width="132" height="42" rx="6" style={soft} />
      <path d="M36 188 L64 164 L86 178 L104 168 L168 188 Z" style={{ ...brand, fillOpacity: 0.5 }} />

      {/* formulario */}
      <rect x="192" y="52" width="132" height="136" rx="8" style={softStroke} />
      <rect x="204" y="66" width="108" height="18" rx="5" style={{ fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1 }} />
      <rect x="210" y="72" width="40" height="5" rx="2.5" style={muted} />
      <rect x="204" y="94" width="108" height="18" rx="5" style={{ fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1 }} />
      <rect x="210" y="100" width="56" height="5" rx="2.5" style={muted} />
      <rect x="204" y="122" width="108" height="18" rx="5" style={{ fill: '#fff', stroke: 'var(--io-border)', strokeWidth: 1 }} />
      <rect x="204" y="152" width="72" height="24" rx="12" style={blue} />

      <circle cx="322" cy="50" r="15" style={peach} />
      <path d="M314.5 50.5 L320 56 L330 44" style={line('#fff', 3)} />
    </svg>
  );
}
