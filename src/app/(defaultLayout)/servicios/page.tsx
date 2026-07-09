export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiciosGrid from "@/app/Components/Services/ServiciosGrid";
import AuditoriaGratis from "@/app/Components/AuditoriaGratis/AuditoriaGratis";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const ServiciosPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Conoce Nuestros Servicios"
      ></BreadCumb>

      <div
        style={{
          maxWidth: "1280px",
          margin: "80px auto 0",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "44px",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "16px",
            lineHeight: "1.2",
          }}
        >
          Encuentra el servicio que mejor se adapte a tu negocio
        </h2>
      </div>

      <ServiciosGrid></ServiciosGrid>

      <AuditoriaGratis></AuditoriaGratis>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default ServiciosPage;
