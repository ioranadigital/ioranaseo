"use client";
import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const faqs = [
  {
    q: "¿Qué incluye el análisis gratuito?",
    a: "Revisamos tu presencia en Google y Maps, el estado técnico de tu web y las oportunidades que no estás aprovechando frente a tu competencia. Recibirás un diagnóstico claro, sin tecnicismos, con recomendaciones concretas.",
  },
  {
    q: "¿Tiene algún coste?",
    a: "No. El análisis inicial es gratuito y sin compromiso. A partir de ahí, si quieres que lo implementemos, te proponemos el plan que mejor encaje con tu negocio y tu presupuesto.",
  },
  {
    q: "¿Existe algún compromiso de permanencia?",
    a: "No exigimos permanencia. Trabajamos mes a mes, con informes que puedes revisar en cualquier momento para ver el progreso real.",
  },
  {
    q: "¿Trabajáis con cualquier tipo de negocio?",
    a: "Trabajamos sobre todo con pymes y negocios locales que quieren que más clientes los encuentren en Google. Durante el análisis te decimos con honestidad si podemos ayudarte a conseguir resultados.",
  },
  {
    q: "¿Necesito una web nueva para empezar?",
    a: "No siempre. Muchas veces el problema no es la web, sino cómo está configurada tu presencia en Google, Maps o tus fichas locales. Si tu web sí es el freno, te lo diremos como parte del análisis.",
  },
  {
    q: "¿SEO o Google Ads? ¿Cuál necesito?",
    a: "Depende de tu situación. El SEO construye visibilidad sostenida a medio plazo; Google Ads genera clientes desde el primer día. En el análisis te indicamos qué combinación tiene más sentido para tu caso.",
  },
  {
    q: "¿Cuándo puedo empezar?",
    a: "En cuanto recibamos tu solicitud. Normalmente contactamos en menos de 24-48 horas para agendar el análisis y explicarte los primeros pasos.",
  },
];

const LandingFaq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.white }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h2
          className="landing-h2"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.ink,
            textAlign: "center",
            margin: "0 0 40px",
            letterSpacing: "-0.01em",
          }}
        >
          Preguntas frecuentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                style={{
                  border: `1px solid ${LANDING_COLORS.border}`,
                  borderRadius: "14px",
                  backgroundColor: LANDING_COLORS.bgLight,
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "18px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left" as const,
                    fontFamily: LANDING_FONT,
                    fontWeight: 700,
                    fontSize: "15px",
                    color: LANDING_COLORS.ink,
                  }}
                >
                  {item.q}
                  <ChevronDown
                    size={18}
                    style={{
                      flexShrink: 0,
                      color: LANDING_COLORS.primary,
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {open && (
                  <div style={{ padding: "0 20px 20px" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: LANDING_COLORS.inkSoft, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
