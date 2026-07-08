"use client";

import React from "react";

interface Feature {
  name: string;
  bullets?: string[];
  inicial: boolean | string;
  basico: boolean | string;
  avanzado: boolean | string;
  premium: boolean | string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Plan Inicial",
    price: "€349",
    description: "Ideal para nuevos negocios o que no aparecen en Google. Ponemos tu negocio en el mapa de internet corrigiendo los fallos y definiendo las palabras exactas por las que te buscarán tus clientes.",
    isPopular: false,
  },
  {
    name: "Plan Básico",
    price: "€699",
    description: "Ideal para empresas locales que necesitan que el teléfono suene todas las semanas. El motor para captar clientes en tu ciudad multiplicando tu presencia en mapas y directorios.",
    isPopular: true,
  },
  {
    name: "Plan Avanzado",
    price: "€899",
    description: "Ideal para PYMEs en sectores competitivos que quieren superar a los negocios de toda la vida. Adelanta a tu competencia creando contenidos nuevos todos los meses.",
    isPopular: false,
  },
  {
    name: "Plan Premium",
    price: "€1.299",
    description: "La solución definitiva para empresas que quieren delegar todo su internet en un profesional sénior. Tu propio departamento de marketing digital con un asesor estratégico.",
    isPopular: false,
  },
];

const FEATURES: Feature[] = [
  {
    name: "Página Web o Tienda Online Gratis",
    bullets: ["Si no tienes web, la diseñamos sin coste inicial"],
    inicial: true,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Puesta a punto y visibilidad en Google",
    bullets: [
      "Revisión técnica de fallos y lentitud",
      "Alta oficial en las herramientas de Google",
    ],
    inicial: true,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Estrategia de Atracción de Clientes",
    bullets: [
      "Estudio de palabras clave de tu negocio",
      "Redacción de títulos atractivos para Google",
    ],
    inicial: true,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Control de Resultados",
    bullets: [
      "Informe mensual sencillo en tu email",
      "Informe de rendimiento detallado (visitas y llamadas)",
    ],
    inicial: "Sencillo",
    basico: "Sencillo",
    avanzado: "Detallado",
    premium: "Detallado",
  },
  {
    name: "SEO Local y Mapas",
    bullets: [
      "Gestión y optimización de tu ficha de Google Maps",
      "Sincronización en directorios y mapas de internet",
    ],
    inicial: false,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Reputación y Confianza",
    bullets: ["Sistema automatizado para conseguir más reseñas"],
    inicial: false,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Optimización de Contenidos para Vender",
    bullets: ["Textos enfocados a la venta y conversión"],
    inicial: false,
    basico: true,
    avanzado: true,
    premium: true,
  },
  {
    name: "Soporte Técnico Mensual",
    bullets: ["Cambios de fotos, textos y mantenimiento"],
    inicial: false,
    basico: "Hasta 2h",
    avanzado: "Hasta 4h",
    premium: "Ilimitado",
  },
  {
    name: "Vigilancia de tu Competencia",
    bullets: ["Análisis mensual de tus 3 rivales directos"],
    inicial: false,
    basico: false,
    avanzado: true,
    premium: true,
  },
  {
    name: "Artículos Profesionales para tu Web",
    bullets: ["Redacción de textos optimizados para el Blog"],
    inicial: false,
    basico: false,
    avanzado: "2 al mes",
    premium: "4 al mes",
  },
  {
    name: "Especialistas en Búsquedas de Vídeo",
    bullets: ["Posicionamiento de vídeos en Google y YouTube"],
    inicial: false,
    basico: false,
    avanzado: true,
    premium: true,
  },
  {
    name: "Asesor Digital Dedicado",
    bullets: ["Asesoramiento senior con reunión por videollamada"],
    inicial: false,
    basico: false,
    avanzado: false,
    premium: true,
  },
  {
    name: "Tecnología de Vanguardia e IA (GEO)",
    bullets: [
      "Optimización para asistentes de voz y ChatGPT",
      "Mejora continua del diseño para vender más (CRO)",
    ],
    inicial: false,
    basico: false,
    avanzado: false,
    premium: true,
  },
];

interface PlanGuide {
  planLabel: string;
  text: string;
}

const PLAN_GUIDES: PlanGuide[] = [
  {
    planLabel: "PLAN INICIAL",
    text: "Ya tienes una web pero notas que no entra nadie, va lenta o tiene fallos. Es el empujón perfecto para empezar a existir en Google con buen pie.",
  },
  {
    planLabel: "PLAN BÁSICO",
    text: "Tienes un negocio físico o de servicios locales (clínica, reformas, tienda, fontanería) y tu prioridad absoluta es que suene el teléfono y te encuentren los clientes de tu ciudad. (El plan más recomendado).",
  },
  {
    planLabel: "PLAN AVANZADO",
    text: "Tu sector es competitivo y necesitas adelantar a los negocios de toda la vida. Ideal si quieres desmarcarte creando contenido y posicionando tus trabajos en vídeo.",
  },
  {
    planLabel: "PLAN PREMIUM",
    text: "Quieres delegar el 100% de tu presencia en internet en un especialista senior, necesitas una estrategia intensiva y quieres que las nuevas herramientas de Inteligencia Artificial (como ChatGPT o asistentes de voz) recomienden tu empresa.",
  },
];

const renderFeatureValue = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <span style={{ fontSize: "20px", color: "#22c55e", fontWeight: "700" }}>
        ✓
      </span>
    ) : (
      <span style={{ color: "#d1d5db", fontSize: "20px" }}>—</span>
    );
  }
  return (
    <span style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "14px" }}>
      {value}
    </span>
  );
};

const PricingComparison: React.FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            Compara Nuestros Planes
          </h2>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "0" }}>
            Encuentra el plan perfecto para tu negocio
          </p>
        </div>

        {/* Tabla Comparativa Tipo Revolut */}
        <div style={{ overflowX: "auto", marginBottom: "40px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1000px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    paddingTop: "80px",
                    paddingBottom: "12px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    textAlign: "center",
                    width: "30%",
                    borderBottom: "2px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    verticalAlign: "top",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    ¿Qué incluye cada plan?
                  </h3>
                </th>

                {PRICING_PLANS.map((plan, index) => (
                  <th
                    key={index}
                    style={{
                      padding: "48px 24px",
                      textAlign: "center",
                      width: "17.5%",
                      borderBottom: "2px solid #e5e7eb",
                      backgroundColor: plan.isPopular ? "rgba(255, 140, 0, 0.05)" : "#f9fafb",
                      position: "relative",
                      verticalAlign: "top",
                    }}
                  >
                    {plan.isPopular && (
                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "0",
                          right: "0",
                          backgroundColor: "#FF8C00",
                          color: "#ffffff",
                          padding: "4px 12px",
                          fontSize: "11px",
                          fontWeight: "700",
                          textAlign: "center",
                          borderRadius: "8px",
                          margin: "0 auto",
                          width: "fit-content",
                        }}
                      >
                        Más Vendido
                      </div>
                    )}
                    <div style={{ marginTop: plan.isPopular ? "8px" : "0" }}>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          margin: "0 0 20px 0",
                        }}
                      >
                        {plan.name}
                      </h4>
                      <div style={{ marginBottom: "20px" }}>
                        <span
                          style={{
                            fontSize: "28px",
                            fontWeight: "700",
                            color: "#FF8C00",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span style={{ color: "#666", fontSize: "12px" }}>
                          /mes
                        </span>
                      </div>
                      <a
                        href={
                          plan.name === "Plan Inicial"
                            ? "/planes/inicio"
                            : plan.name === "Plan Básico"
                              ? "/planes/basico"
                              : plan.name === "Plan Avanzado"
                                ? "/planes/avanzado"
                                : "/planes/premium"
                        }
                        style={{
                          display: "inline-block",
                          padding: "8px 16px",
                          backgroundColor: "#4D32A5",
                          color: "#ffffff",
                          textDecoration: "none",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxSizing: "border-box",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#FF8C00";
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#4D32A5";
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        Ver Plan
                      </a>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {FEATURES.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      backgroundColor: featureIndex % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <div
                      style={{
                        color: "#1a1a1a",
                        fontWeight: "600",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        marginBottom: feature.bullets ? "6px" : "0",
                      }}
                    >
                      {feature.name}
                    </div>
                    {feature.bullets && (
                      <ul
                        style={{
                          margin: "0",
                          paddingLeft: "18px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                        }}
                      >
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            style={{
                              fontSize: "13px",
                              color: "#666",
                              fontWeight: "400",
                              lineHeight: "1.4",
                            }}
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>

                  <td
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      textAlign: "center",
                      backgroundColor:
                        featureIndex % 2 === 0
                          ? "rgba(255, 140, 0, 0.02)"
                          : "rgba(255, 140, 0, 0.05)",
                    }}
                  >
                    {renderFeatureValue(feature.inicial)}
                  </td>

                  <td
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      textAlign: "center",
                      backgroundColor:
                        featureIndex % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    {renderFeatureValue(feature.basico)}
                  </td>

                  <td
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      textAlign: "center",
                      backgroundColor:
                        featureIndex % 2 === 0
                          ? "rgba(255, 140, 0, 0.02)"
                          : "rgba(255, 140, 0, 0.05)",
                    }}
                  >
                    {renderFeatureValue(feature.avanzado)}
                  </td>

                  <td
                    style={{
                      padding: "16px 24px",
                      borderBottom: "1px solid #f0f0f0",
                      textAlign: "center",
                      backgroundColor:
                        featureIndex % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    {renderFeatureValue(feature.premium)}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td
                  style={{
                    padding: "24px",
                    borderTop: "2px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                  }}
                ></td>

                {PRICING_PLANS.map((plan, index) => (
                  <td
                    key={index}
                    style={{
                      padding: "24px",
                      borderTop: "2px solid #e5e7eb",
                      textAlign: "center",
                      backgroundColor: plan.isPopular
                        ? "rgba(255, 140, 0, 0.05)"
                        : "#f9fafb",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        backgroundColor: plan.isPopular ? "#FF8C00" : "#4D32A5",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = plan.isPopular
                          ? "#4D32A5"
                          : "#FF8C00";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = plan.isPopular
                          ? "#FF8C00"
                          : "#4D32A5";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      Elegir Plan
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Guía: ¿Qué plan elegir? */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {PLAN_GUIDES.map((guide, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#4D32A5",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                }}
              >
                Elige el {guide.planLabel} si:
              </h4>
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {guide.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            padding: "24px",
            backgroundColor: "#f0f9ff",
            borderRadius: "20px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p style={{ color: "#1a1a1a", margin: "0", fontSize: "20px" }}>
            ¿No estás seguro de cuál elegir? No pasa nada,{" "}
            <a
              href="/contacto"
              style={{
                color: "#FF8C00",
                fontWeight: "600",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4D32A5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FF8C00";
              }}
            >
              contacta con nosotros
            </a>{" "}
            para una consulta personalizada.
          </p>
        </div>

        {/* Web Gratis Section */}
        <div
          style={{
            backgroundColor: "#4D32A5",
            padding: "60px 20px",
            borderRadius: "20px",
            marginTop: "40px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#ffffff",
                margin: "0 0 16px 0",
              }}
            >
              ¿Aún no tienes página web o tienda online?{" "}
              <span style={{ color: "#FF8C00" }}>¡Te la creamos!</span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#f0f0f0",
                maxWidth: "700px",
                margin: "0 auto 32px",
                lineHeight: "1.6",
              }}
            >
              Si contratas cualquiera de nuestros planes de posicionamiento
              mensual, nosotros nos encargamos de diseñar tu página web o tienda
              online totalmente gratis, rápido y fácil.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#FF8C00",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "700",
                      margin: "0",
                    }}
                  >
                    Lista en tiempo récord
                  </h3>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#FF8C00",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "700",
                      margin: "0",
                    }}
                  >
                    Hecha para vender
                  </h3>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#FF8C00",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "700",
                      margin: "0",
                    }}
                  >
                    Adaptada al móvil
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
