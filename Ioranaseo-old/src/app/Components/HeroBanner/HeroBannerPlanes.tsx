"use client";
import parse from "html-react-parser";
import { OptimizedImage } from "@/components";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { submitLead } from "@/lib/submitLead";

interface HeroBannerPlanesProps {
  subtitle: string;
  title: string;
  content: string;
  img: string;
  showBreadcrumb?: boolean;
  showImage?: boolean;
  showPlansButton?: boolean;
  benefits?: string[];
  whyImportant?: string[];
  rightImage?: string;
}

const HeroBannerPlanes: FC<HeroBannerPlanesProps> = ({
  subtitle,
  title,
  content,
  img,
  showBreadcrumb = true,
  showImage = true,
  showPlansButton = true,
  benefits = [
    "Higher Conversion Rates",
    "Increase Website Traffic",
    "Local Market Dominance",
  ],
  whyImportant = [
    "El 46% de todas las búsquedas en Google tienen intención local — tus clientes te están buscando ahora mismo",
    "El 76% de las personas que hacen una búsqueda local visitan el negocio en 24 horas",
    "Los negocios en el Local Pack de Google reciben el 44% de los clics totales de la página de resultados",
  ],
  rightImage,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [callPhone, setCallPhone] = useState("");
  const [callLoading, setCallLoading] = useState(false);
  const [callSubmitted, setCallSubmitted] = useState(false);
  const [callError, setCallError] = useState<string | null>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setCallSubmitted(false);
    setCallPhone("");
  };

  const handleCallSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCallLoading(true);
    setCallError(null);

    const ok = await submitLead({
      telefono: callPhone,
      asunto: "modal-te-llamamos-gratis",
    });

    if (ok) {
      setCallSubmitted(true);
    } else {
      setCallError("Error al enviar. Inténtalo de nuevo.");
    }
    setCallLoading(false);
  };

  return (
    <>
      <div
        className="hero2 hero-planes"
        style={{
          minHeight: "600px",
          margin: "0",
          padding: "0",
          marginTop: "-25px",
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* Overlay difuminado */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(1px)",
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center" style={{ margin: "0" }}>
            <div className="col-lg-6">
              <div className="main-heading" style={{ marginTop: "-5px" }}>
                <h1
                  className="text-anime-style-3"
                  style={{ fontWeight: "bold", fontSize: "48px" }}
                  dangerouslySetInnerHTML={{
                    __html: title.replace(
                      /<span[^>]*>/g,
                      "<span style='color: #4D32A5; font-weight: bold;'>",
                    ),
                  }}
                />

                <div className="space20"></div>
                <p data-aos="fade-right" data-aos-duration="800">
                  {parse(content)}
                </p>
                <div
                  data-aos="fade-right"
                  data-aos-duration="900"
                  style={{
                    marginTop: "24px",
                    marginBottom: "24px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  {benefits.map((benefit, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#333",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#4D32A5",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        ✓
                      </span>
                      {benefit}
                    </span>
                  ))}
                </div>
                <div
                  className="form-area"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  style={{
                    display: "flex",
                    gap: "24px",
                    flexWrap: "wrap",
                    marginTop: "100px",
                    marginLeft: "auto",
                    width: "fit-content",
                  }}
                >
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn-barrido"
                    style={{
                      display: "inline-block",
                      padding: "14px 32px",
                      backgroundColor: "#FF8C00",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "24px",
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      <i className="bi bi-telephone"></i> Llámanos
                    </span>
                  </button>
                  {showPlansButton && (
                    <Link
                      href="/planes/compara"
                      className="btn-barrido"
                      style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        backgroundColor: "#FF8C00",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "24px",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                        textDecoration: "none",
                        position: "relative",
                        overflow: "hidden",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <span style={{ position: "relative", zIndex: 1 }}>
                        Compara Nuestros Planes{" "}
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {rightImage ? (
              <div className="col-lg-6">
                <div className="relative w-full h-[650px] overflow-hidden">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Panza inferior ensanchada hacia la izquierda (valores X reducidos en el tramo final) */}
                      <clipPath id="true-organic-mask-expanded-blob" clipPathUnits="objectBoundingBox">
                        <path d="M 1,0 L 0.4,0 C 0.25,0.15 0.1,0.35 0.35,0.55 C 0.55,0.7 0.0,0.80 0.1,1 L 1,1 Z" />
                      </clipPath>
                    </defs>

                    {/* Imagen recortada */}
                    <g clipPath="url(#true-organic-mask-expanded-blob)">
                      <image
                        href={rightImage}
                        width="100"
                        height="100"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>

                    {/* TRAZO GRUESO MORADO: Siguiendo el nuevo recorrido expandido */}
                    <path
                      d="M 40,0 C 25,15 10,35 35,55 C 55,70 0,80 10,100"
                      vectorEffect="non-scaling-stroke"
                      stroke="#4C1D95"
                      strokeWidth="16"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="col-lg-6" style={{ display: showImage ? "none" : "block" }}>
                {!showImage && (
                  <div
                    style={{
                      padding: "40px 20px",
                      display: "flex",
                      alignItems: "center",
                      height: "600px",
                      justifyContent: "center",
                      backgroundImage: `url('${img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Imagen de fondo */}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="call-dialog"
        style={
          {
            maxWidth: "1000px",
            width: "90%",
            padding: "0",
            border: "none",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            backgroundColor: "rgba(245, 240, 250, 0.80)",
            margin: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          } as React.CSSProperties
        }
      >
        <button
          className="modal-close"
          onClick={closeModal}
          style={
            {
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "40px",
              height: "40px",
              backgroundColor: "#ffffff",
              border: "none",
              borderRadius: "50%",
              fontSize: "28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#333",
              zIndex: 10,
            } as React.CSSProperties
          }
        >
          ✕
        </button>

        <div
          className="modal-content"
          style={
            {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              padding: "40px",
              position: "relative",
            } as React.CSSProperties
          }
        >
          {/* Tarjeta Izquierda - Formulario */}
          <div
            className="modal-card form-card"
            style={
              {
                backgroundColor: "#ffffff",
                border: "2px solid #4D32A5",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              } as React.CSSProperties
            }
          >
            <h2
              className="card-title"
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 700,
                color: "#4D32A5",
              }}
            >
              Te llamamos Gratis
            </h2>

            {callSubmitted ? (
              <div
                style={{
                  padding: "24px",
                  backgroundColor: "rgba(34, 197, 94, 0.08)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#16a34a",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  ¡Solicitud enviada con éxito!
                </p>
                <p style={{ margin: "8px 0 0", color: "#333" }}>
                  Te llamaremos lo antes posible.
                </p>
              </div>
            ) : (
            <form
              id="modal-te-llamamos-gratis"
              className="modal-form"
              onSubmit={handleCallSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#4D32A5",
                  }}
                >
                  Número de teléfono*
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={callPhone}
                  onChange={(e) => setCallPhone(e.target.value)}
                  placeholder="Número de teléfono"
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4D32A5";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(77, 50, 165, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ddd";
                    e.target.style.boxShadow = "none";
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                    transition: "all 0.2s ease",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <input
                  type="checkbox"
                  id="consent-call"
                  required
                  style={{
                    width: "18px",
                    height: "18px",
                    marginTop: "2px",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                />
                <label
                  htmlFor="consent-call"
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    lineHeight: "1.6",
                    cursor: "pointer",
                    margin: 0,
                  }}
                >
                  Autorizo a contactarme comercialmente por email, teléfono y/o
                  via Whatsapp sobre los servicios y productos relativos al
                  marketing digital y directorios. Ver información sobre
                  protección de datos
                </label>
              </div>

              {callError && (
                <p style={{ color: "#ef4444", fontWeight: 600, margin: 0 }}>
                  {callError}
                </p>
              )}

              <button
                type="submit"
                disabled={callLoading}
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#ff6b35",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  opacity: callLoading ? 0.6 : 1,
                }}
              >
                {callLoading ? "Enviando..." : "TE LLAMAMOS"}
              </button>
            </form>
            )}
          </div>

          {/* Tarjeta Derecha - Información */}
          <div
            className="modal-card info-card"
            style={
              {
                backgroundColor: "#ffffff",
                border: "2px solid #4D32A5",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              } as React.CSSProperties
            }
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#4D32A5",
                  marginBottom: "8px",
                }}
              >
                Escribenos o Llámanos
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                Si lo prefieres puedes escribirnos o enviarnos un whatsapp a
                este numero y te contestaremos lo antes posible a tus consultas.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                borderTop: "1px solid #eee",
                paddingTop: "24px",
              }}
            >
              {/* Columna Izquierda - Llamar */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#4D32A5",
                  }}
                >
                  Llama Ahora
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                  }}
                >
                  603 149 158
                </p>
              </div>

              {/* Columna Derecha - Horario */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#4D32A5",
                  }}
                >
                  Horario
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "#333",
                    lineHeight: "1.5",
                  }}
                >
                  De lunes a Viernes
                  <br />
                  <strong>de 9:00 a 19:00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>

      <style>{`
        .btn-barrido {
          position: relative;
          overflow: hidden;
          background: #FF8C00 !important;
        }

        .btn-barrido::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #4D32A5;
          transition: left 0.4s ease;
          z-index: 0;
        }

        .btn-barrido:hover::before {
          left: 0;
        }

        .btn-barrido span {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default HeroBannerPlanes;
