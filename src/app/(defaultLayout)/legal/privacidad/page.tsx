export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";

const PrivacidadPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Política de Privacidad"
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
                  Política de Privacidad
                </h2>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  En Iorana SEO, la privacidad de nuestros usuarios es fundamental para nosotros. Esta política de privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información.
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
                  1. Información que Recopilamos
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Recopilamos información que proporcionas directamente, como nombre, correo electrónico, número de teléfono y otra información cuando completas formularios en nuestro sitio web.
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
                  2. Uso de la Información
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Utilizamos la información que recopilamos para proporcionar y mejorar nuestros servicios, comunicarnos contigo, procesar solicitudes y enviar información promocional si lo autorizas.
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
                  3. Protección de Datos
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
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
                  4. Derechos de los Usuarios
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Tienes derecho a acceder, corregir, eliminar o portar tu información personal. Para ejercer estos derechos, por favor contáctanos en info@ioranaseo.com.
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
                  5. Cambios en esta Política
                </h3>
                <p
                  style={{
                    marginBottom: "16px",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Iorana SEO puede actualizar esta política de privacidad periódicamente. Notificaremos cualquier cambio significativo publicando la nueva política en nuestro sitio web.
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

export default PrivacidadPage;
