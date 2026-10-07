import { Check, ChartNoAxesColumnIncreasing, ChevronRight, FileText, Mail, Search } from 'lucide-react';

interface DiagnosticoIntroProps {
  onStart: () => void;
}

const STEPS = [
  {
    numero: '1',
    titulo: 'Cuéntanos tu situación',
    texto: 'Rellena un breve formulario con los datos de tu negocio.',
    Icon: FileText,
  },
  {
    numero: '2',
    titulo: 'Analizamos tu presencia',
    texto: 'Revisamos tu web y la información pública disponible.',
    Icon: Search,
  },
  {
    numero: '3',
    titulo: 'Recibes el diagnóstico',
    texto: 'Te enviamos un informe con las principales oportunidades de mejora.',
    Icon: ChartNoAxesColumnIncreasing,
  },
];

const BENEFITS = [
  'Análisis personalizado de tu web',
  'Oportunidades de mejora prioritarias',
  'Recomendaciones claras y accionables',
];

const STYLES = `
  .dg-main { padding: 44px 20px 56px; }
  .dg-container { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr); gap: 40px; align-items: center; }
  .dg-container > * { min-width: 0; }
  .dg-eyebrow {
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--io-accent);
  }
  .dg-h1 {
    font-size: clamp(30px, 8vw, 44px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.12;
    color: var(--io-text); margin: 14px 0 18px; max-width: 580px;
  }
  .dg-lead { font-size: 17px; line-height: 1.6; color: var(--io-text-muted); margin: 0 0 32px; max-width: 560px; }

  /* Pasos */
  .dg-steps { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .dg-step { display: grid; grid-template-columns: 44px minmax(0, 1fr); column-gap: 14px; align-items: start; }
  .dg-step__icon {
    grid-row: span 2; display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px;
    border-radius: 50%; background: color-mix(in srgb, var(--io-accent) 22%, #fff); color: var(--io-accent-dark);
  }
  .dg-step__title { font-size: 15px; font-weight: 800; line-height: 1.3; color: var(--io-text); margin: 2px 0 4px; }
  .dg-step__text { font-size: 14px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }
  .dg-step__chevron { display: none; }

  /* Tarjeta CTA */
  .dg-card {
    width: 100%; max-width: 440px; margin: 0 auto; padding: 28px 24px; box-sizing: border-box;
    background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  }
  .dg-card__icon {
    display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%;
    background: color-mix(in srgb, var(--io-action) 12%, #fff); color: var(--io-action);
  }
  .dg-card__title { font-size: 22px; font-weight: 800; line-height: 1.25; letter-spacing: -0.01em; color: var(--io-text); margin: 16px 0 18px; }
  .dg-benefits { list-style: none; margin: 0 0 24px; padding: 0; display: grid; gap: 12px; }
  .dg-benefit { display: flex; align-items: center; gap: 12px; font-size: 15px; font-weight: 600; line-height: 1.35; color: var(--io-text); }
  .dg-benefit__tick {
    flex: none; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%;
    background: color-mix(in srgb, var(--io-accent) 22%, #fff); color: var(--io-accent-dark);
  }
  .dg-cta {
    display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; box-sizing: border-box;
    padding: 16px 24px; font-size: 16px; font-weight: 700; color: #fff;
    background: var(--io-action); border: none; border-radius: var(--io-radius-md);
    cursor: pointer; transition: background-color 0.2s;
  }
  .dg-cta:hover { background: var(--io-action-hover); }
  .dg-cta:focus-visible { outline: 3px solid var(--io-action); outline-offset: 3px; }
  .dg-micro { margin: 12px 0 0; text-align: center; font-size: 13px; line-height: 1.4; color: var(--io-text-muted); }

  @media (min-width: 768px) {
    .dg-main { padding: 64px 32px 72px; }
    .dg-lead { margin-bottom: 36px; }
    .dg-card { padding: 32px 28px; }
  }
  /* Pasos en fila: apilado (≥768) y columna izquierda en desktop (≥1024) */
  @media (min-width: 768px) {
    .dg-steps { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0 32px; }
    .dg-step { position: relative; grid-template-columns: minmax(0, 1fr); row-gap: 0; align-content: start; }
    .dg-step__icon { grid-row: auto; margin-bottom: 14px; }
    .dg-step__chevron {
      display: block; position: absolute; top: 12px; right: -26px; color: var(--io-border); pointer-events: none;
    }
  }
  @media (min-width: 1024px) {
    .dg-main { padding: 72px 32px 80px; }
    .dg-container { grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); gap: 64px; }
    .dg-card { margin: 0 0 0 auto; }
  }
`;

export default function DiagnosticoIntro({ onStart }: DiagnosticoIntroProps) {
  return (
    <div>
      <style>{STYLES}</style>

      <section className="dg-main" aria-labelledby="dg-hero-title">
        <div className="dg-container">
          <div>
            <div className="dg-eyebrow">DIAGNÓSTICO DIGITAL GRATUITO</div>
            <h1 id="dg-hero-title" className="dg-h1">Descubre qué deberías mejorar primero</h1>
            <p className="dg-lead">
              Cuéntanos brevemente cómo es tu negocio y tu presencia digital. Analizaremos tu web y
              la información pública disponible para detectar las principales oportunidades de
              mejora.
            </p>

            <ol className="dg-steps" aria-label="Cómo funciona">
              {STEPS.map(({ numero, titulo, texto, Icon }, i) => (
                <li key={numero} className="dg-step">
                  <span className="dg-step__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.1} />
                  </span>
                  <h2 className="dg-step__title">{numero}. {titulo}</h2>
                  <p className="dg-step__text">{texto}</p>
                  {i < STEPS.length - 1 && (
                    <ChevronRight className="dg-step__chevron" size={20} strokeWidth={2.2} aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="dg-card">
            <span className="dg-card__icon" aria-hidden="true">
              <Mail size={22} strokeWidth={2.1} />
            </span>
            <h2 className="dg-card__title">Recibe tu diagnóstico gratuito por email</h2>
            <ul className="dg-benefits">
              {BENEFITS.map((b) => (
                <li key={b} className="dg-benefit">
                  <span className="dg-benefit__tick" aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <button type="button" className="dg-cta" onClick={onStart}>
              Empezar diagnóstico <span aria-hidden="true">→</span>
            </button>
            <p className="dg-micro">Sin compromiso · por email</p>
          </div>
        </div>
      </section>
    </div>
  );
}
