export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";

const CookiesPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Política de Cookies"
      ></BreadCumb>

      <section className="sp" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="legal-content">
                <h2
                  style={{
                    marginBottom: "24px",
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  Política de Cookies
                </h2>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Este sitio utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que se almacenan en tu dispositivo y nos ayudan a entender cómo utilizas nuestro sitio.
                </p>

                <h3
                  style={{
                    marginTop: "32px",
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  1. ¿Qué son las Cookies?
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Las cookies son pequeños archivos de texto que se guardan en tu navegador cuando visitas un sitio web. Nos permiten reconocerte, recordar tus preferencias y mejorar tu experiencia de navegación.
                </p>

                <h3
                  style={{
                    marginTop: "32px",
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  2. Tipos de Cookies que Utilizamos
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  <strong>Cookies de Sesión:</strong> Se eliminan cuando cierras tu navegador. Se utilizan para mantener tu sesión activa mientras navegas.
                </p>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  <strong>Cookies Persistentes:</strong> Se mantienen en tu dispositivo durante un período especificado. Las usamos para recordar tus preferencias.
                </p>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  <strong>Cookies de Terceros:</strong> Provenientes de sitios externos para análisis y publicidad.
                </p>

                <h3
                  style={{
                    marginTop: "32px",
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  3. Control de Cookies
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Puedes controlar y eliminar cookies en cualquier momento a través de los ajustes de tu navegador. Sin embargo, esto puede afectar tu experiencia en nuestro sitio web.
                </p>

                <h3
                  style={{
                    marginTop: "32px",
                    marginBottom: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                  }}
                >
                  4. Consentimiento
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con esta política. Puedes cambiar tu consentimiento en cualquier momento.
                </p>

                <div
                  style={{
                    marginTop: "40px",
                    paddingTop: "24px",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <p style={{ fontSize: "12px", color: "#999" }}>
                    Última actualización: 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
