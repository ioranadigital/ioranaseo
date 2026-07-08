export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import PlanDetailSection from "../../../Components/PlanDetail/PlanDetailSection";
import WebGratisSection from "../../../Components/WebGratis/WebGratisSection";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";
import { Zap, BarChart3, TrendingUp } from "lucide-react";

const avanzadoFeatures = [
  {
    icon: <Zap size={40} />,
    title: "Automatización Inteligente",
    description:
      "Sistemas automáticos que trabajan 24/7. Lead capture, seguimiento de clientes y nurturing sin intervención manual.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Análisis en Tiempo Real",
    description:
      "Dashboard personalizado con métricas que importan. Ve exactamente qué tráfico generan llamadas, cuántos clientes vienen de cada fuente.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Escalamiento Sostenido",
    description:
      "Estrategia probada que adapta constantemente. A medida que creces, el sistema se ajusta para mantener rentabilidad y crecimiento.",
  },
];

const avanzadoPlanIncludes = [
  "Todo del Plan Básico",
  "1 artículo SEO optimizado/mes",
  "Vigilancia de 3 competidores",
  "SEO para vídeos (YouTube/Redes)",
  "Informe visual de conversiones",
];

const AvanzadoPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Planes y Precios"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes y Precios", href: "/planes" },
          { label: "Plan Avanzado" },
        ]}
      ></BreadCumb>

      <HeroBannerPlanes
        subtitle="Plan Avanzado"
        title="Apúntate a Nuestro<br/><span style='color: #4D32A5;'>Plan Avanzado</span>"
        content="Crecimiento acelerado con automatización, análisis profundo y estrategia de escalamiento. Para empresas con ambiciones de expansión."
        img=""
        showBreadcrumb={false}
        showImage={false}
        rightImage="/assets/img/hero/dentista-perspectiva.jpg"
      ></HeroBannerPlanes>

      <PlanDetailSection
        sectionTitle="Qué incluye este plan"
        sectionDescription="Crecimiento acelerado con automatización, análisis profundo y estrategia de escalamiento. Para empresas con ambiciones de expansión."
        features={avanzadoFeatures}
        planName="Plan Avanzado"
        planPrice="€899"
        planDescription="Para PYMEs en sectores competitivos que quieren superar a la competencia."
        planFeatures={avanzadoPlanIncludes}
        planButtonText="Contratar Ahora"
        planButtonUrl="/contacto"
      ></PlanDetailSection>

      <WebGratisSection></WebGratisSection>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default AvanzadoPage;
