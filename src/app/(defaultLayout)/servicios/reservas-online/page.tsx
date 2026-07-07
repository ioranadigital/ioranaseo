export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerServicios from "@/app/Components/HeroBanner/HeroBannerServicios";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const ReservasOnlinePage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Reservas Online"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Reservas Online" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerServicios
          subtitle="Servicios Digitales"
          title="Reservas Online"
          content="Sistema de reservas y citas online para tu negocio. Facilita que tus clientes reserven sin necesidad de llamadas."
          img="/assets/img/hero/hero3-main-img.png"
        ></HeroBannerServicios>
      </div>

      <FeaturesSection></FeaturesSection>

      <NuestroProcesoLocal></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default ReservasOnlinePage;
