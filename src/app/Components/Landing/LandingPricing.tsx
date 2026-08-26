"use client";
import { FC } from "react";
import { trackEvent } from "@/lib/trackEvent";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const plans = [
  { title: "Inicial", price: "€349", badge: undefined },
  { title: "Básico", price: "€699", badge: "Más Vendido" },
  { title: "Avanzado", price: "€899", badge: undefined },
  { title: "Premium", price: "€1.299", badge: undefined },
];

const LandingPricing: FC = () => {
  return (
    <section style={{ padding: "72px 20px", backgroundColor: LANDING_COLORS.white }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
        <h2
          className="landing-h2-sm"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.ink,
            margin: "0 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          ¿Cuánto puede costar trabajar con IoranaSEO?
        </h2>
        <p style={{ color: LANDING_COLORS.inkSoft, fontSize: "15px", margin: "0 0 36px" }}>
          Planes reales de IoranaSEO. Precio por mes, sin permanencia.
        </p>

        <div className="landing-grid-4" style={{ display: "grid", gap: "16px", marginBottom: "32px" }}>
          {plans.map((plan) => (
            <div
              key={plan.title}
              style={{
                border: `1px solid ${LANDING_COLORS.border}`,
                borderRadius: "16px",
                padding: "24px 18px",
                backgroundColor: LANDING_COLORS.bgLight,
                position: "relative",
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "-11px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: LANDING_COLORS.accent,
                    color: LANDING_COLORS.white,
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {plan.badge.toUpperCase()}
                </span>
              )}
              <div style={{ fontSize: "13px", fontWeight: 700, color: LANDING_COLORS.inkSoft, marginBottom: "10px" }}>
                {plan.title}
              </div>
              <div style={{ fontFamily: LANDING_FONT, fontWeight: 800, fontSize: "28px", color: LANDING_COLORS.ink }}>
                {plan.price}
                <span style={{ fontSize: "13px", fontWeight: 600, color: LANDING_COLORS.inkSoft }}>/mes</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#lead-form"
          onClick={() => trackEvent("landing_pricing_cta_click")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: LANDING_FONT,
            fontWeight: 700,
            fontSize: "14px",
            color: LANDING_COLORS.primary,
            textDecoration: "none",
            borderBottom: `2px solid ${LANDING_COLORS.primary}`,
            paddingBottom: "2px",
          }}
        >
          NO SÉ QUÉ PLAN NECESITO →
        </a>
      </div>
    </section>
  );
};

export default LandingPricing;
