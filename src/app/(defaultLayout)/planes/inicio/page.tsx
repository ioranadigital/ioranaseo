export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import PlanDetailSection from "../../../Components/PlanDetail/PlanDetailSection";
import WebGratisSection from "../../../Components/WebGratis/WebGratisSection";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";
import { CheckCircle, TrendingUp, Target } from "lucide-react";

const inicialPlanFeatures = [
  {
    icon: <CheckCircle size={40} />,
    title: "Análisis Completo de tu Web",
    description:
      "Descubre cómo te buscan tus clientes, dónde falla tu sitio y qué hace la competencia. Datos claros para decisiones inteligentes.",
  },
  {
    icon: <Target size={40} />,
    title: "Identifica Oportunidades",
    description:
      "Encuentra las palabras clave con potencial, nichos sin explotar y estrategias que funcionan en tu sector.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Plan de Acción Claro",
    description:
      "Recibe recomendaciones prioritarias y un roadmap de qué hacer primero para empezar a crecer.",
  },
];

const initialPlanIncludes = [
  "Revisión y puesta a punto de tu web",
  "Estudio de 10 palabras clave",
  "Optimización de títulos y metadatos",
  "Alta en Google Search Console",
  "Informe mensual automatizado",
];

const PlanesInicio = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Planes y Precios"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes y Precios", href: "/planes" },
          { label: "Plan Inicial" },
        ]}
      ></BreadCumb>

      <HeroBannerPlanes
        subtitle="Plan Inicial"
        title="Apúntate a Nuestro<br/><span style='color: #4D32A5;'>Plan Inicial</span>"
        content="Aparece más en búsquedas locales, gana visibilidad online y atrae más clientes desde una única plataforma con el respaldo de nuestros expertos"
        img="/assets/img/hero/pareja-tienda.jpg"
        showBreadcrumb={false}
        showImage={true}
      ></HeroBannerPlanes>

      <PlanDetailSection
        sectionTitle="Qué incluye este plan"
        sectionDescription="Comienza con un diagnóstico sólido de tu presencia digital. Entiende dónde estás, hacia dónde vas y cómo llegamos juntos."
        features={inicialPlanFeatures}
        planName="Plan Inicial"
        planPrice="€349"
        planDescription="Perfectos para startups y negocios nuevos que necesitan aparecer en Google."
        planFeatures={initialPlanIncludes}
        planButtonText="Contratar Ahora"
        planButtonUrl="/contacto"
      ></PlanDetailSection>

      <WebGratisSection></WebGratisSection>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default PlanesInicio;
