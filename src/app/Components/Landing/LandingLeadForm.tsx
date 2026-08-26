"use client";
import { FC, useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { LEADS_WEBHOOK_URL } from "@/lib/submitLead";
import { trackEvent } from "@/lib/trackEvent";
import ConsentCheckbox from "@/app/Components/Common/ConsentCheckbox";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

interface LandingLeadFormProps {
  goalLabel: string | null;
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  fontSize: "14px",
  padding: "14px 16px",
  backgroundColor: LANDING_COLORS.bgLight,
  border: `1px solid ${LANDING_COLORS.border}`,
  borderRadius: "12px",
  color: LANDING_COLORS.ink,
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: LANDING_COLORS.inkSoft,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: "6px",
  display: "block",
};

const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = LANDING_COLORS.primary;
  e.target.style.boxShadow = "0 0 0 3px rgba(77, 50, 165, 0.12)";
};
const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = LANDING_COLORS.border;
  e.target.style.boxShadow = "none";
};

const LandingLeadForm: FC<LandingLeadFormProps> = ({ goalLabel }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const handleFirstInteraction = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("landing_form_start");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    try {
      const response = await fetch(LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_id: "iorana",
          nombre: String(data.get("nombre") || "").trim(),
          telefono: String(data.get("telefono") || "").trim(),
          email: String(data.get("email") || "").trim(),
          metadata: {
            url_origen: window.location.href,
            asunto: "landing-captacion",
            empresa: String(data.get("empresa") || "").trim(),
            website: String(data.get("website") || "").trim(),
            ciudad: String(data.get("ciudad") || "").trim(),
            necesidad: String(data.get("necesidad") || "").trim(),
          },
        }),
      });

      if (response.ok) {
        trackEvent("landing_form_submit");
        setSubmitted(true);
      } else {
        setError("No hemos podido enviar tu solicitud. Inténtalo de nuevo.");
      }
    } catch {
      setError("No hemos podido enviar tu solicitud. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="lead-form"
      style={{
        backgroundColor: LANDING_COLORS.white,
        borderRadius: "24px",
        border: `1px solid ${LANDING_COLORS.border}`,
        boxShadow: "0 24px 60px rgba(11, 3, 20, 0.08)",
        padding: "40px 32px",
        scrollMarginTop: "90px",
      }}
    >
      {submitted ? (
        <div style={{ textAlign: "center", padding: "24px 8px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(34, 197, 94, 0.12)",
              color: LANDING_COLORS.green,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h3
            style={{
              fontFamily: LANDING_FONT,
              fontWeight: 800,
              fontSize: "24px",
              color: LANDING_COLORS.ink,
              margin: "0 0 12px",
            }}
          >
            ¡Solicitud recibida!
          </h3>
          <p style={{ fontSize: "15px", color: LANDING_COLORS.inkSoft, lineHeight: 1.6, margin: 0 }}>
            Revisaremos tu información y nos pondremos en contacto contigo.
          </p>
        </div>
      ) : (
        <>
          <h3
            style={{
              fontFamily: LANDING_FONT,
              fontWeight: 800,
              fontSize: "22px",
              color: LANDING_COLORS.ink,
              margin: "0 0 8px",
              lineHeight: 1.3,
            }}
          >
            Descubre qué está frenando la captación de clientes de tu negocio.
          </h3>
          <p style={{ fontSize: "13px", color: LANDING_COLORS.inkSoft, margin: "0 0 28px" }}>
            Sin compromiso. Analizamos tu presencia digital y te mostramos oportunidades concretas de mejora.
          </p>

          <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} noValidate>
            <div className="landing-form-row" style={{ display: "grid", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={labelStyle} htmlFor="landing-nombre">Nombre *</label>
                <input id="landing-nombre" name="nombre" type="text" required placeholder="Tu nombre" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="landing-empresa">Empresa *</label>
                <input id="landing-empresa" name="empresa" type="text" required placeholder="Nombre de tu negocio" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </div>

            <div className="landing-form-row" style={{ display: "grid", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={labelStyle} htmlFor="landing-email">Email *</label>
                <input id="landing-email" name="email" type="email" required placeholder="tu@empresa.com" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="landing-telefono">Teléfono *</label>
                <input id="landing-telefono" name="telefono" type="tel" required placeholder="Tu teléfono" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </div>

            <div className="landing-form-row" style={{ display: "grid", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={labelStyle} htmlFor="landing-website">Web</label>
                <input id="landing-website" name="website" type="url" placeholder="https://tunegocio.com" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="landing-ciudad">Ciudad *</label>
                <input id="landing-ciudad" name="ciudad" type="text" required placeholder="Tu ciudad" style={fieldStyle} onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle} htmlFor="landing-necesidad">¿Qué quieres mejorar? (opcional)</label>
              <input
                id="landing-necesidad"
                name="necesidad"
                type="text"
                defaultValue={goalLabel ?? ""}
                key={goalLabel ?? "empty"}
                placeholder="Ej: más clientes, más visibilidad..."
                style={fieldStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <ConsentCheckbox id="landing-consent" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="landing-cta-btn"
              style={{
                width: "100%",
                padding: "18px 24px",
                backgroundColor: LANDING_COLORS.accent,
                color: LANDING_COLORS.white,
                border: "none",
                borderRadius: "14px",
                fontFamily: LANDING_FONT,
                fontWeight: 700,
                fontSize: "15px",
                cursor: loading ? "default" : "pointer",
                opacity: loading ? 0.6 : 1,
                boxShadow: "0 14px 30px rgba(255, 140, 0, 0.3)",
              }}
            >
              {loading ? "Enviando..." : "QUIERO MI ANÁLISIS GRATUITO →"}
            </button>

            {error && (
              <p style={{ color: "#dc2626", fontSize: "13px", fontWeight: 600, textAlign: "center", marginTop: "16px", marginBottom: 0 }}>
                {error}
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default LandingLeadForm;
