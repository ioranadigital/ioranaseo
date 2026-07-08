export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import PlanDetailSection from "../../../Components/PlanDetail/PlanDetailSection";
import WebGratisSection from "../../../Components/WebGratis/WebGratisSection";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";
import { Crown, Settings, Target } from "lucide-react";

const premiumFeatures = [
  {
    icon: <Crown size={40} />,
    title: "Acompañamiento Estratégico Exclusivo",
    description:
      "Account manager dedicado + reuniones semanales. Estrategia personalizada que evoluciona con tu negocio. Acceso directo a expertos.",
  },
  {
    icon: <Settings size={40} />,
    title: "Stack Tecnológico Completo",
    description:
      "CRM, marketing automation, analytics avanzado y herramientas premium integradas. Todo conectado para máxima eficiencia.",
  },
  {
    icon: <Target size={40} />,
    title: "Dominio Total de tu Mercado",
    description:
      "Posicionamiento multisistema: Google Search, Maps, redes sociales, email y presencia offline. Dominas dónde está tu cliente.",
  },
];

const premiumPlanIncludes = [
  "Todo del Plan Avanzado",
  "10 horas/mes flexibles (elige qué quieres)",
  "Asesor digital dedicado",
  "Reunión de estrategia trimestral",
  "Acceso directo por email/WhatsApp",
];

const PremiumPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Planes y Precios"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes y Precios", href: "/planes" },
          { label: "Plan Premium" },
        ]}
      ></BreadCumb>

      <HeroBannerPlanes
        subtitle="Plan Premium"
        title="Apúntate a Nuestro<br/><span style='color: #4D32A5;'>Plan Premium</span>"
        content="El máximo en soporte, tecnología y estrategia. Para empresas que quieren ser líderes indiscutibles en su mercado."
        img=""
        showBreadcrumb={false}
        showImage={false}
        rightImage="/assets/img/hero/bar-hosteleria.jpg"
        benefits={[
          "Asesor Digital Dedicado",
          "Stack Tecnológico Completo",
          "Dominio Total del Mercado",
        ]}
      ></HeroBannerPlanes>

      <PlanDetailSection
        sectionTitle="Qué incluye este plan"
        sectionDescription="El máximo en soporte, tecnología y estrategia. Para empresas que quieren ser líderes indiscutibles en su mercado."
        features={premiumFeatures}
        planName="Plan Premium"
        planPrice="€1.299"
        planDescription="Para empresas escalando que quieren delegar su estrategia digital a un profesional sénior."
        planFeatures={premiumPlanIncludes}
        planButtonText="Contratar Ahora"
        planButtonUrl="/contacto"
      ></PlanDetailSection>

      <WebGratisSection></WebGratisSection>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default PremiumPage;
