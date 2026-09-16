"use client";
import { FC } from "react";
import { Star, Phone, MapPin, TrendingUp } from "lucide-react";
import LandingCtaButton from "./LandingCtaButton";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

const microcopy = ["Sin compromiso", "Análisis personalizado", "Recomendaciones claras"];

const LandingHero: FC = () => {
  return (
    <section
      id="landing-hero"
      style={{
        background: `linear-gradient(180deg, ${LANDING_COLORS.bgLighter} 0%, ${LANDING_COLORS.bgLight} 100%)`,
        padding: "56px 20px 72px",
      }}
    >
      <div
        className="landing-hero-grid"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          alignItems: "center",
          gap: "48px",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(77, 50, 165, 0.08)",
              color: LANDING_COLORS.primary,
              fontFamily: LANDING_FONT,
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              padding: "8px 16px",
              borderRadius: "30px",
              marginBottom: "24px",
            }}
          >
            SEO · GOOGLE · WEB · AUTOMATIZACIÓN
          </div>

          <h1
            className="landing-h1"
            style={{
              fontFamily: LANDING_FONT,
              fontWeight: 800,
              color: LANDING_COLORS.ink,
              lineHeight: 1.12,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Multiplica tus clientes apareciendo donde ya te están buscando.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: LANDING_COLORS.inkSoft,
              maxWidth: "560px",
              margin: "0 0 32px",
            }}
          >
            Analizamos tu presencia digital y detectamos qué está impidiendo
            que más clientes encuentren, contacten y elijan tu negocio.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <LandingCtaButton eventName="landing_hero_cta_click" size="lg">
              QUIERO MI INFORME GRATUITO
            </LandingCtaButton>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 20px",
              fontSize: "13px",
              color: LANDING_COLORS.inkSoft,
              fontWeight: 600,
            }}
          >
            {microcopy.map((item, i) => (
              <span
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {i > 0 && (
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: LANDING_COLORS.border }} />
                )}
                <span style={{ color: LANDING_COLORS.green }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="landing-hero-visual">
          <div
            className="landing-hero-google-card"
            style={{
              backgroundColor: LANDING_COLORS.white,
              borderRadius: "20px",
              boxShadow: "0 24px 60px rgba(11, 3, 20, 0.14)",
              padding: "24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path fill="#4285F4" d="M23.52 12.27c0-.84-.08-1.65-.22-2.43H12v4.6h6.47a5.53 5.53 0 01-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.8z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.87-3c-1.08.72-2.45 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.96H1.26v3.1A12 12 0 0012 24z" />
                <path fill="#FBBC05" d="M5.25 14.29a7.2 7.2 0 010-4.58v-3.1H1.26a12 12 0 000 10.78l3.99-3.1z" />
                <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 001.26 6.61l3.99 3.1C6.2 6.87 8.86 4.75 12 4.75z" />
              </svg>
              <span style={{ fontFamily: LANDING_FONT, fontWeight: 700, color: LANDING_COLORS.inkSoft, fontSize: "13px" }}>
                Google
              </span>
            </div>

            <div
              style={{
                fontSize: "14px",
                color: LANDING_COLORS.inkSoft,
                backgroundColor: LANDING_COLORS.bgLight,
                borderRadius: "10px",
                padding: "10px 14px",
                marginBottom: "18px",
              }}
            >
              &ldquo;dentista en Valencia&rdquo;
            </div>

            <div
              style={{
                border: `1px solid ${LANDING_COLORS.border}`,
                borderRadius: "14px",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span
                  style={{
                    backgroundColor: "#FFF4E5",
                    color: LANDING_COLORS.accentDark,
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "6px",
                  }}
                >
                  🥇 Tu empresa
                </span>
              </div>
              <div style={{ fontFamily: LANDING_FONT, fontWeight: 700, color: LANDING_COLORS.ink, fontSize: "16px", marginBottom: "4px" }}>
                Tu Negocio
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                <div style={{ display: "flex", gap: "1px", color: "#FBBC05" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="#FBBC05" strokeWidth={0} />
                  ))}
                </div>
                <span style={{ fontSize: "12px", color: LANDING_COLORS.inkSoft, fontWeight: 600 }}>4.9</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: LANDING_COLORS.primary,
                    backgroundColor: "rgba(77,50,165,0.08)",
                    padding: "6px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <Phone size={12} /> Llamar
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: LANDING_COLORS.primary,
                    backgroundColor: "rgba(77,50,165,0.08)",
                    padding: "6px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <MapPin size={12} /> Cómo llegar
                </span>
              </div>
            </div>
          </div>

          <div
            className="landing-hero-stat-card"
            style={{
              backgroundColor: LANDING_COLORS.navy,
              color: LANDING_COLORS.white,
              borderRadius: "18px",
              padding: "20px 22px",
              boxShadow: "0 20px 40px rgba(26, 17, 64, 0.35)",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                VISIBILIDAD
              </span>
              <TrendingUp size={16} color={LANDING_COLORS.green} />
            </div>
            <div style={{ fontFamily: LANDING_FONT, fontWeight: 800, fontSize: "34px", color: LANDING_COLORS.green, marginBottom: "12px" }}>
              +127%
            </div>
            <div style={{ display: "flex", gap: "20px", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "12px" }}>
              <div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 700 }}>Leads</div>
                <div style={{ fontSize: "16px", fontWeight: 700 }}>+73%</div>
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 700 }}>Llamadas</div>
                <div style={{ fontSize: "16px", fontWeight: 700 }}>+84%</div>
              </div>
            </div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", marginTop: "12px", fontStyle: "italic" }}>
              Datos ilustrativos de un caso tipo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
