export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";

const AvisoLegalPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Aviso Legal"
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
                  Términos y Condiciones de Uso
                </h2>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Bienvenido a Iorana SEO. Los siguientes términos y condiciones rigen el uso de nuestro sitio web y servicios. Al acceder y utilizar este sitio, aceptas cumplir con estos términos.
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
                  1. Uso de Licencia
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Se te otorga una licencia limitada, no exclusiva y revocable para acceder y hacer uso del sitio web para propósitos legales únicamente. No está permitido modificar, reproducir o distribuir el contenido sin permiso expreso.
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
                  2. Descargo de Responsabilidad
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  El contenido y servicios en este sitio se proporcionan "tal como están" sin garantías de ningún tipo, explícitas o implícitas. Iorana SEO no es responsable por ningún daño directo, indirecto, incidental o consecuente derivado del uso de este sitio.
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
                  3. Limitaciones de Responsabilidad
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  En ningún caso Iorana SEO será responsable por pérdidas de datos, ganancias perdidas o cualquier daño especial, incidental o consecuente resultante del acceso o uso del sitio.
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
                  4. Modificaciones
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Iorana SEO se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos al momento de su publicación en el sitio.
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
                  5. Contacto
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Si tienes preguntas sobre estos términos, por favor contáctanos en:
                  <br />
                  Email: <strong>info@ioranaseo.com</strong>
                  <br />
                  Teléfono: <strong>+1 (555) 123-4567</strong>
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

export default AvisoLegalPage;
