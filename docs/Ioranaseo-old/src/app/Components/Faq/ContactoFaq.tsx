"use client";
import { FC, useState } from "react";

interface FaqItem {
  title: string;
  desc: string;
}

const CONTACTO_FAQ: FaqItem[] = [
  {
    title: "¿De verdad la página web o tienda online es gratis?",
    desc: "Sí, totalmente. Si contratas cualquiera de nuestros planes mensuales de posicionamiento y visibilidad, nosotros nos encargamos del diseño, desarrollo y puesta en marcha de tu web sin ningún coste inicial.",
  },
  {
    title: "¿Tengo algún tipo de permanencia?",
    desc: "Si tu plan incluye el diseño web gratuito, se establece una permanencia mínima de 6 meses para amortizar el desarrollo. Pasado ese periodo, puedes darte de baja cuando quieras.",
  },
  {
    title: "¿Cuánto tardaré en ver los primeros resultados en Google?",
    desc: "El posicionamiento es una estrategia sólida a medio plazo. Los cambios técnicos y la optimización local en Google Maps suelen reflejar mejoras de visibilidad en las primeras semanas, mientras que el volumen constante de llamadas y visitas web se consolida de forma sostenida a partir del tercer o cuarto mes.",
  },
  {
    title: "Ya tengo una página web que me gusta, ¿puedo contratar vuestros planes?",
    desc: "¡Por supuesto! Analizaremos tu web actual, corregiremos los fallos técnicos o de lentitud que estén frenando tus ventas y aplicaremos toda la estrategia de posicionamiento sobre ella.",
  },
  {
    title: "¿Cómo se realizan los pagos mensuales?",
    desc: "Para tu total comodidad y automatización, el cobro de la suscripción se realiza de forma mensual mediante tarjeta de crédito/débito o domiciliación bancaria.",
  },
  {
    title: "No me interesa el posicionamiento de momento, ¿puedo contratar solo el diseño de la página web?",
    desc: "¡Claro que sí! Aunque nuestros planes mensuales son la forma más rentable de crecer porque incluyen la web gratis, también puedes contratar el diseño y desarrollo de tu página web o tienda online como un servicio único de un solo pago. Cuéntanos qué necesita tu negocio en el formulario de abajo y te enviaremos un presupuesto a medida en menos de 24 horas.",
  },
  {
    title: "¿Puedo cambiar de plan o darme de baja cuando lo necesite?",
    desc: "Sí, tienes total flexibilidad. Si tu negocio crece y necesitas pasar a un plan superior con más artículos y asesoría, o si prefieres bajar a un plan más básico, puedes solicitar el cambio de un mes para otro sin penalizaciones. Queremos ser el socio digital de tu empresa, no una obligación.",
  },
  {
    title: "¿Qué tengo que poner yo para empezar a trabajar en mi plan?",
    desc: "Prácticamente nada, nosotros nos encargamos de todo el trabajo pesado. Solo te pediremos la información básica de tu negocio en una breve charla inicial: qué servicios ofreces, en qué ciudades trabajas y las fotos o logotipos que quieras que utilicemos. A partir de ahí, nuestro equipo se pone en marcha para que tú no pierdas tiempo.",
  },
];

const ContactoFaq: FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "60px",
            lineHeight: "1.3",
          }}
        >
          <span style={{ color: "#1a1a1a" }}>Preguntas</span>{" "}
          <span style={{ color: "#4D32A5" }}>Frecuentes</span>
        </h2>

        <div className="accordion accordion1" id="accordionContacto">
          {CONTACTO_FAQ.map((item, index) => (
            <div
              key={index}
              className={`cs_accordian accordion-item ${index === openIndex ? "active" : ""}`}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h3 className="accordion-header" id={`contacto-faq-heading-${index}`}>
                <button
                  onClick={() => handleItemClick(index)}
                  className="accordion-button"
                  type="button"
                  aria-expanded={index === openIndex}
                  aria-controls={`contacto-faq-collapse-${index}`}
                >
                  {item.title}
                </button>
              </h3>
              <div
                id={`contacto-faq-collapse-${index}`}
                className="accordion-collapse accordion-content"
                aria-labelledby={`contacto-faq-heading-${index}`}
              >
                <div className="accordion-body">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #accordionContacto .accordion-item {
          border: 1px solid #D1D5DB !important;
          border-radius: 14px !important;
          background-color: rgba(237, 233, 254, 0.25) !important;
          margin-top: 16px !important;
          transition: all 0.4s !important;
        }

        #accordionContacto .accordion-item button {
          border: none !important;
          background: none !important;
          width: 100%;
          padding: 20px 20px !important;
          color: #000 !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          position: relative !important;
          text-align: left !important;
          line-height: 1.4 !important;
          outline: none !important;
          box-shadow: none !important;
          min-height: 65px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        #accordionContacto .accordion-item button:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        #accordionContacto .accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease;
        }

        #accordionContacto .accordion-content > .accordion-body {
          overflow: hidden;
        }

        #accordionContacto .accordion-item.active .accordion-content {
          grid-template-rows: 1fr;
        }

        #accordionContacto .accordion-item .accordion-body {
          color: #333 !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          line-height: 1.6 !important;
          padding: 0 20px 0 !important;
          text-align: start !important;
        }

        #accordionContacto .accordion-item.active .accordion-body {
          padding: 20px 20px 20px !important;
        }

        #accordionContacto .accordion-item.active {
          background-color: rgba(255, 255, 255, 0.5) !important;
          transition: all 0.4s !important;
          border-color: #4D32A5 !important;
        }

        #accordionContacto .accordion-item.active button {
          color: #4D32A5 !important;
          background-color: rgba(77, 50, 165, 0.25) !important;
          border-radius: 12px 12px 0 0 !important;
        }

        #accordionContacto .accordion-item.active .accordion-body {
          color: #4D32A5 !important;
        }

        #accordionContacto {
          min-height: 400px;
        }
      `}</style>
    </section>
  );
};

export default ContactoFaq;
