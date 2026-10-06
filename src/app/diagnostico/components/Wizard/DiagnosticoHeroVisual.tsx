import { Globe, Search, MapPin, Megaphone, Target, ListChecks, Lightbulb, Route } from 'lucide-react';

const INPUTS = [
  { label: 'Web', Icon: Globe },
  { label: 'SEO', Icon: Search },
  { label: 'Google Business Profile', Icon: MapPin },
  { label: 'Anuncios', Icon: Megaphone },
  { label: 'Conversión', Icon: Target },
];

const OUTPUTS = [
  { label: 'Prioridades', Icon: ListChecks },
  { label: 'Oportunidades', Icon: Lightbulb },
  { label: 'Siguientes pasos', Icon: Route },
];

/** Composición diagramática: presencia digital → Diagnóstico → resultados. Sin cifras. */
export default function DiagnosticoHeroVisual() {
  return (
    <div className="dg-visual" aria-hidden="true">
      <div className="dg-visual__inputs">
        {INPUTS.map(({ label, Icon }) => (
          <span key={label} className="dg-chip">
            <Icon size={15} color="var(--io-action)" strokeWidth={2.2} />
            {label}
          </span>
        ))}
      </div>

      <div className="dg-visual__stem" />

      <div className="dg-visual__core">
        <Search size={20} strokeWidth={2.4} />
        Diagnóstico
      </div>

      <svg
        className="dg-visual__branches"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d="M50 0 V12 H16.7 V32" />
        <path d="M50 0 V32" />
        <path d="M50 12 H83.3 V32" />
      </svg>

      <div className="dg-visual__outputs">
        {OUTPUTS.map(({ label, Icon }) => (
          <span key={label} className="dg-result">
            <Icon size={18} color="var(--io-accent)" strokeWidth={2.2} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
