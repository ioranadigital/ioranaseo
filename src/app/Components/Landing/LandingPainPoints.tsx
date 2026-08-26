"use client";
import { FC } from "react";
import { EyeOff, MousePointerClick, MapPinOff, ListX } from "lucide-react";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const pains = [
  {
    icon: EyeOff,
    title: "No apareces",
    text: "Tus clientes buscan tus servicios, pero encuentran primero a tu competencia.",
  },
  {
    icon: MousePointerClick,
    title: "No conviertes",
    text: "Recibes visitas, pero pocas terminan en contactos.",
  },
  {
    icon: MapPinOff,
    title: "Google no te genera suficientes clientes",
    text: "Tu presencia local no está aprovechando toda la demanda disponible.",
  },
  {
    icon: ListX,
    title: "No sabes qué priorizar",
    text: "Tienes muchas opciones, pero no sabes qué acción tendrá mayor impacto.",
  },
];

const LandingPainPoints: FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.white }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h2
          className="landing-h2"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.ink,
            textAlign: "center",
            margin: "0 0 48px",
            letterSpacing: "-0.01em",
          }}
        >
          ¿Cuántos clientes estás perdiendo sin darte cuenta?
        </h2>

        <div
          className="landing-grid-4"
          style={{ display: "grid", gap: "24px" }}
        >
          {pains.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              style={{
                backgroundColor: LANDING_COLORS.bgLight,
                border: `1px solid ${LANDING_COLORS.border}`,
                borderRadius: "18px",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 140, 0, 0.12)",
                  color: LANDING_COLORS.accentDark,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                }}
              >
                <Icon size={22} />
              </div>
              <h3
                style={{
                  fontFamily: LANDING_FONT,
                  fontWeight: 700,
                  fontSize: "17px",
                  color: LANDING_COLORS.ink,
                  margin: "0 0 8px",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: LANDING_COLORS.inkSoft, margin: 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPainPoints;
