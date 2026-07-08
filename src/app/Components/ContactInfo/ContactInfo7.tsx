"use client";
import { OptimizedImage } from "@/components";
import { FC } from "react";

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
                <h2>{heading}</h2>
                <div className="space16"></div>
                <p>{description}</p>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-contact-form">
                <h4>Envíanos un Mensaje</h4>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" placeholder="Nombre" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" placeholder="Apellido" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="number" placeholder="Número de Teléfono" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="email" placeholder="Correo Electrónico" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-input">
                        <input type="url" placeholder="URL del Sitio Web" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-input">
                        <textarea rows={5} placeholder="Tu Mensaje"></textarea>
                      </div>
                      <div className="space30"></div>
                      <div className="button">
                        <button
                          className="btn-barrido-contact"
                          style={{
                            display: "inline-block",
                            backgroundColor: "#FF8C00",
                            color: "#ffffff",
                            padding: "14px 32px",
                            borderRadius: "24px",
                            textDecoration: "none",
                            fontWeight: "600",
                            fontSize: "14px",
                            cursor: "pointer",
                            border: "none",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <span style={{ position: "relative", zIndex: 1 }}>
                            Enviar Consulta{" "}
                            <span>
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </span>
                        </button>
                      </div>
                      <style>{`
                        .btn-barrido-contact {
                          position: relative;
                          overflow: hidden;
                          background: #FF8C00 !important;
                        }

                        .btn-barrido-contact::before {
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

                        .btn-barrido-contact:hover::before {
                          left: 0;
                        }

                        .btn-barrido-contact span {
                          position: relative;
                          z-index: 1;
                          color: #ffffff !important;
                        }

                        .btn-barrido-contact:hover span {
                          color: #ffffff !important;
                        }
                      `}</style>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo7;
