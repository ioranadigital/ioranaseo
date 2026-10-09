"use client";

import React, { FC, useEffect, useRef, useState } from "react";

const MetodologiaSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-visible={isVisible}
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9fafb",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .metodologia-title {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        section[data-visible="true"] .metodologia-title {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .metodologia-subtitle {
          opacity: 0;
        }

        section[data-visible="true"] .metodologia-subtitle {
          animation: fadeInUp 0.6s ease-out 0.1s forwards;
        }

        .metodologia-card {
          opacity: 0;
        }

        section[data-visible="true"] .metodologia-card {
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            className="metodologia-title"
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "24px",
              lineHeight: "1.3",
            }}
          >
            Experimenta el Poder de un{" "}
            <span style={{ color: "#4D32A5" }}>SEO Estratégico y Digital</span>
          </h2>
          <p
            className="metodologia-subtitle"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666",
              fontSize: "18px",
              lineHeight: "1.7",
              fontWeight: "500",
            }}
          >
            Ayudamos a las empresas a multiplicar sus ventas con estrategias SEO
            basadas en datos, PPC de alto rendimiento y contenido que posiciona
            de verdad.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginTop: "60px",
          }}
        >
          {/* Card 1 */}
          <div
            className="metodologia-card"
            style={{
              backgroundColor: "#ffffff",
              padding: "40px 30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(77, 50, 165, 0.15)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                backgroundColor: "#EDE9FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "32px" }}>📊</span>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "12px",
              }}
            >
              Datos y Análisis
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              Cada estrategia está respaldada por análisis profundo y métricas
              reales que demuestran ROI tangible.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="metodologia-card"
            style={{
              backgroundColor: "#ffffff",
              padding: "40px 30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(77, 50, 165, 0.15)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                backgroundColor: "#EDE9FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🎯</span>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "12px",
              }}
            >
              PPC de Alto Rendimiento
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              Campañas publicitarias optimizadas que generan leads y ventas con
              máxima eficiencia de presupuesto.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="metodologia-card"
            style={{
              backgroundColor: "#ffffff",
              padding: "40px 30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(77, 50, 165, 0.15)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                backgroundColor: "#EDE9FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "32px" }}>✍️</span>
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "12px",
              }}
            >
              Contenido que Posiciona
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              Contenido estratégico y optimizado que rankea en Google y
              convierte visitantes en clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
