"use client";
import { FC } from "react";
import { MapPin, LayoutTemplate, Target, PenLine, Workflow, Sparkles } from "lucide-react";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const services = [
  { icon: MapPin, title: "SEO Local", text: "Aumenta tu visibilidad en Google y Maps." },
  { icon: LayoutTemplate, title: "Web que convierte", text: "Landing pages y webs orientadas a generar oportunidades." },
  { icon: Target, title: "Google Ads", text: "Aparece cuando tus potenciales clientes están buscando." },
  { icon: PenLine, title: "Contenidos", text: "Construye autoridad y tráfico orgánico." },
  { icon: Workflow, title: "Automatización", text: "Automatiza procesos y seguimiento." },
  { icon: Sparkles, title: "IA", text: "Integra inteligencia artificial en procesos reales del negocio." },
];

const LandingServices: FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.bgLight }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
          <h2
            className="landing-h2"
            style={{
              fontFamily: LANDING_FONT,
              fontWeight: 800,
              color: LANDING_COLORS.ink,
              margin: "0 0 14px",
              letterSpacing: "-0.01em",
            }}
          >
            Todo lo que necesitas para convertir búsquedas en clientes.
          </h2>
          <p style={{ fontSize: "16px", color: LANDING_COLORS.inkSoft, lineHeight: 1.6, margin: 0 }}>
            No son seis servicios independientes: son las piezas de un mismo sistema de captación.
          </p>
        </div>

        <div className="landing-services-wrap" style={{ position: "relative" }}>
          <div className="landing-grid-6" style={{ display: "grid", gap: "18px", position: "relative", zIndex: 1 }}>
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                style={{
                  backgroundColor: LANDING_COLORS.white,
                  border: `1px solid ${LANDING_COLORS.border}`,
                  borderRadius: "16px",
                  padding: "24px 20px",
                  textAlign: "left" as const,
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "11px",
                    backgroundColor: "rgba(77, 50, 165, 0.1)",
                    color: LANDING_COLORS.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3
                  style={{
                    fontFamily: LANDING_FONT,
                    fontWeight: 700,
                    fontSize: "15px",
                    color: LANDING_COLORS.ink,
                    margin: "0 0 6px",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.55, color: LANDING_COLORS.inkSoft, margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
