"use client";
import { FC } from "react";
import { ShieldCheck, BarChart3, MessagesSquare, Gauge } from "lucide-react";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sin promesas imposibles",
    text: "No prometemos el puesto 1 garantizado. Aplicamos buenas prácticas de SEO con total transparencia.",
  },
  {
    icon: BarChart3,
    title: "Métricas claras, no vanity metrics",
    text: "Llamadas, mensajes y clientes. Sin informes técnicos confusos que no dicen nada del negocio real.",
  },
  {
    icon: Gauge,
    title: "Estrategia priorizada por impacto",
    text: "Analizamos primero, y actuamos sobre lo que más mueve la aguja para tu negocio concreto.",
  },
  {
    icon: MessagesSquare,
    title: "Acompañamiento cercano",
    text: "Revisamos los resultados contigo cada mes, con acceso a tus datos siempre disponible.",
  },
];

const LandingTrust: FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.bgLight }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          Por qué IoranaSEO
        </h2>

        <div className="landing-grid-4" style={{ display: "grid", gap: "20px" }}>
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} style={{ textAlign: "left" as const }}>
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(77, 50, 165, 0.1)",
                  color: LANDING_COLORS.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Icon size={21} />
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
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: LANDING_COLORS.inkSoft, margin: 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTrust;
