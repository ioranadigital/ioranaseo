"use client";
import { FC } from "react";
import LandingCtaButton from "./LandingCtaButton";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const steps = [
  { n: "01", title: "Analizamos", text: "Detectamos problemas y oportunidades." },
  { n: "02", title: "Priorizamos", text: "Definimos qué acciones pueden generar mayor impacto." },
  { n: "03", title: "Ejecutamos", text: "Aplicamos la estrategia adecuada." },
];

const LandingMethodology: FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.bgLight }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2
          className="landing-h2"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.ink,
            margin: "0 0 48px",
            letterSpacing: "-0.01em",
          }}
        >
          De tu situación actual a un sistema de captación.
        </h2>

        <div className="landing-grid-3" style={{ display: "grid", gap: "24px", marginBottom: "44px" }}>
          {steps.map((step) => (
            <div
              key={step.n}
              style={{
                backgroundColor: LANDING_COLORS.white,
                border: `1px solid ${LANDING_COLORS.border}`,
                borderRadius: "18px",
                padding: "32px 24px",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: LANDING_FONT,
                  fontWeight: 800,
                  fontSize: "36px",
                  color: "rgba(77, 50, 165, 0.16)",
                  marginBottom: "8px",
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  fontFamily: LANDING_FONT,
                  fontWeight: 700,
                  fontSize: "18px",
                  color: LANDING_COLORS.ink,
                  margin: "0 0 8px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: LANDING_COLORS.inkSoft, margin: 0 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <LandingCtaButton eventName="landing_methodology_cta_click" size="lg">
          QUIERO ANALIZAR MI NEGOCIO
        </LandingCtaButton>
      </div>
    </section>
  );
};

export default LandingMethodology;
