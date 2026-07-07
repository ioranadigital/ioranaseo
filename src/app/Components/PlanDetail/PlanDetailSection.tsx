"use client";

import React, { useState, ReactNode } from "react";

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface PlanDetailSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
  planName: string;
  planPrice: string;
  planDescription: string;
  planFeatures: string[];
  planButtonText?: string;
  planButtonUrl?: string;
}

const PlanDetailSection: React.FC<PlanDetailSectionProps> = ({
  sectionTitle,
  sectionDescription,
  features,
  planName,
  planPrice,
  planDescription,
  planFeatures,
  planButtonText = "Contratar Ahora",
  planButtonUrl = "/contacto",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* COLUMNA IZQUIERDA - Contenido Descriptivo */}
          <div>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "16px",
                lineHeight: "1.3",
                margin: "0 0 16px 0",
              }}
            >
              <span style={{ color: "#4D32A5" }}>¿{sectionTitle}?</span>
            </h2>

            <div
              style={{
                height: "4px",
                width: "120px",
                backgroundColor: "#4D32A5",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            ></div>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "48px",
                margin: "0 0 48px 0",
              }}
            >
              {sectionDescription}
            </p>

            {/* Características */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: "flex", gap: "16px" }}>
                  {feature.icon && (
                    <div
                      style={{
                        flexShrink: 0,
                        color: "#4D32A5",
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: "4px",
                      }}
                    >
                      {feature.icon}
                    </div>
                  )}
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "12px",
                        margin: "0 0 12px 0",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA - Tarjeta del Plan */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #e5e7eb",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                boxShadow: isHovered
                  ? "0 20px 40px rgba(0, 0, 0, 0.12)"
                  : "0 10px 30px rgba(0, 0, 0, 0.08)",
                position: "relative",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Precio en esquina derecha superior */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  textAlign: "right",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#FF8C00",
                    lineHeight: "1",
                  }}
                >
                  {planPrice}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    fontWeight: "500",
                  }}
                >
                  /mes
                </div>
              </div>

              {/* Nombre del Plan */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#4D32A5",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                {planName}
              </h3>

              {/* Descripción breve */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "24px",
                }}
              >
                {planDescription}
              </p>

              {/* Características incluidas */}
              <div style={{ marginBottom: "32px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "16px",
                  }}
                >
                  Incluye:
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {planFeatures.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "14px",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          color: "#22c55e",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón CTA */}
              <a
                href={planButtonUrl}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px 32px",
                  backgroundColor: "#FF8C00",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "20px",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  border: "none",
                  marginBottom: "12px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4D32A5";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF8C00";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {planButtonText} →
              </a>

              {/* Texto adicional */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#999",
                  textAlign: "center",
                  margin: "12px 0 0 0",
                  fontWeight: "500",
                }}
              >
                30 días de prueba sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanDetailSection;
