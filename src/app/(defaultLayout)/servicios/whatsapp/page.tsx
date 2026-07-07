export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerServicios from "@/app/Components/HeroBanner/HeroBannerServicios";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const WhatsappPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Notificaciones WhatsApp"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Notificaciones WhatsApp" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerServicios
          subtitle="Servicios Digitales"
          title="Notificaciones WhatsApp"
          content="Comunica con tus clientes directamente por WhatsApp. Automatiza mensajes y aumenta la interacción con tu audiencia."
          img="/assets/img/hero/hero3-main-img.png"
        ></HeroBannerServicios>
      </div>

      <FeaturesSection></FeaturesSection>

      <NuestroProcesoLocal></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default WhatsappPage;
