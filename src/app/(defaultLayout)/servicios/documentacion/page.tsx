export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerServicios from "@/app/Components/HeroBanner/HeroBannerServicios";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const DocumentacionPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Documentación Controlada"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Documentación Controlada" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerServicios
          subtitle="Servicios Digitales"
          title="Documentación Controlada"
          content="Gestión eficiente de documentación. Sistema de control de versiones y acceso seguro para tu equipo."
          img="/assets/img/hero/hero3-main-img.png"
        ></HeroBannerServicios>
      </div>

      <FeaturesSection></FeaturesSection>

      <NuestroProcesoLocal></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default DocumentacionPage;
