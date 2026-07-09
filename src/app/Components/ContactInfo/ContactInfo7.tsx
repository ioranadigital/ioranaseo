"use client";
import parse from "html-react-parser";
import { OptimizedImage } from "@/components";
import { FC, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import ConsentCheckbox from "@/app/Components/Common/ConsentCheckbox";

interface ContactInfo7Props {
  title?: string;
  heading?: string;
  description?: string;
  email?: string;
  phone?: string;
  buttonText?: string;
}

const ContactInfo7: FC<ContactInfo7Props> = ({
  title = "Contáctanos IoranaSEO",
  heading = "Contáctanos Hoy",
  description = "Completa el formulario y nuestro equipo se pondrá en contacto contigo para discutir tus necesidades de SEO y marketing digital.",
  email = "seomax@gmail.com",
  phone = "+1 123 456 7890",
  buttonText = "Inicia tu Auditoría Gratis",
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    website: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "#FF8C00";
    e.target.style.boxShadow = "0 0 0 3px rgba(255, 140, 0, 0.1)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "#e5e7eb";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const ok = await submitLead({
      nombre: `${formData.nombre} ${formData.apellido}`.trim(),
      telefono: formData.telefono,
      email: formData.email,
      asunto: "form-contacto",
    });

    if (ok) {
      setSubmitted(true);
    } else {
      setError("Error al enviar. Inténtalo de nuevo.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="faq-contact contact-page sp bg1"
        style={{ marginTop: "-50px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="heading3"
                style={{ padding: "0", marginTop: "-50px" }}
              >
                <p className="title">
                  {" "}
                  <span className="span">
                    <OptimizedImage
                      src="/assets/img/logo/main-span3.svg"
                      alt="img"
                      width={20}
                      height={20}
                    />
                    {title}
                  </span>
                </p>
                <h2>{parse(heading)}</h2>
                <div className="space16"></div>
                <p>{parse(description)}</p>

                <div style={{ marginTop: "56px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      marginBottom: "24px",
                    }}
                  >
                    ¿En qué{" "}
                    <span style={{ color: "#FF8C00" }}>
                      podemos ayudarte
                    </span>
                    ?
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {[
                      "Posicionamiento SEO y visibilidad en Google y Maps",
                      "Diseño de páginas web y tiendas online que convierten",
                      "Campañas de Google Ads y Facebook Ads con resultados medibles",
                      "Automatizaciones, CRM y gestión documental para tu negocio",
                      "Asesoría personalizada de un equipo experto en marketing digital",
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          color: "#333",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        <span
                          style={{
                            color: "#22c55e",
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      gap: "32px",
                      paddingTop: "32px",
                      borderTop: "1px solid #e5e7eb",
                      marginTop: "32px",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      "SIN COMPROMISO",
                      "RESPUESTA EN 24H",
                      "ATENCIÓN PERSONALIZADA",
                    ].map((text, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "11px",
                          fontWeight: "700",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        <span style={{ color: "#999" }}>✓</span>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {submitted ? (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "48px",
                    borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 32px",
                      fontSize: "40px",
                    }}
                  >
                    ✅
                  </div>
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      marginBottom: "16px",
                    }}
                  >
                    ¡Mensaje enviado con éxito!
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    Nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "48px",
                    borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      marginBottom: "32px",
                    }}
                  >
                    Envíanos{" "}
                    <span style={{ color: "#FF8C00" }}>un mensaje</span>
                  </h2>

                  <form
                    id="form-contacto"
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                      }}
                    >
                      <div>
                        <label style={labelStyle}>NOMBRE *</label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>APELLIDO</label>
                        <input
                          type="text"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          placeholder="Tu apellido"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                      }}
                    >
                      <div>
                        <label style={labelStyle}>TELÉFONO</label>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Tu teléfono"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>EMAIL *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@empresa.com"
                          style={inputStyle}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>SITIO WEB</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://tusitio.com"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>TU MENSAJE</label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Cuéntanos en qué podemos ayudarte"
                        style={{ ...inputStyle, resize: "vertical" as const }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>

                    <ConsentCheckbox id="consent-contacto" />

                    {error && (
                      <p
                        style={{
                          color: "#ef4444",
                          fontSize: "14px",
                          fontWeight: "600",
                          textAlign: "center",
                          margin: 0,
                        }}
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        backgroundColor: "#FF8C00",
                        color: "#ffffff",
                        padding: "14px 32px",
                        borderRadius: "20px",
                        border: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        opacity: loading ? 0.6 : 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4D32A5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#FF8C00";
                      }}
                    >
                      {loading ? "Enviando..." : "Enviar Consulta"} →
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo7;
