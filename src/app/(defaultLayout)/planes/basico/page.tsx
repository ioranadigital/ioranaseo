export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import PlanDetailSection from "../../../Components/PlanDetail/PlanDetailSection";
import WebGratisSection from "../../../Components/WebGratis/WebGratisSection";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";
import { Zap, Layers, Rocket } from "lucide-react";

const basicoFeatures = [
  {
    icon: <Zap size={40} />,
    title: "Web Optimizada y Rápida",
    description:
      "Eliminamos problemas técnicos que ralentizan tu sitio. Velocidad de carga, móvil-friendly y estructura perfecta.",
  },
  {
    icon: <Layers size={40} />,
    title: "Contenido que Convierte",
    description:
      "Textos, imágenes y CTA estratégicos diseñados para guiar a visitantes hacia la acción. De curiosos a clientes.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Resultados en Semanas",
    description:
      "Empieza a ver mejoras en posicionamiento y conversiones en las primeras 4-6 semanas. Crecimiento real y medible.",
  },
];

const basicPlanIncludes = [
  "Todo del Plan Inicial",
  "SEO Local completo (Google Maps)",
  "Sincronización en directorios locales",
  "Sistema de reseñas automático",
  "Textos enfocados a conversión",
  "Soporte técnico 1h/mes",
];

const BasicoPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Planes y Precios"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes y Precios", href: "/planes" },
          { label: "Plan Básico" },
        ]}
      ></BreadCumb>

      <HeroBannerPlanes
        subtitle="Plan Básico"
        title="Apúntate a Nuestro<br/><span style='color: #4D32A5;'>Plan Básico</span>"
        content="Optimización completa de tu web y presencia online para atraer más clientes locales. Desde lo técnico hasta el contenido que convierte."
        img=""
        showBreadcrumb={false}
        showImage={false}
        rightImage="/assets/img/hero/pintores-profesionales.jpg"
      ></HeroBannerPlanes>

      <PlanDetailSection
        sectionTitle="Qué incluye este plan"
        sectionDescription="Optimización completa de tu web y presencia online. Desde lo técnico hasta el contenido que convierte."
        features={basicoFeatures}
        planName="Plan Básico"
        planPrice="€699"
        planDescription="Ideal para negocios locales que necesitan captar clientes en su ciudad."
        planFeatures={basicPlanIncludes}
        planButtonText="Contratar Ahora"
        planButtonUrl="/contacto"
      ></PlanDetailSection>

      <WebGratisSection></WebGratisSection>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default BasicoPage;
