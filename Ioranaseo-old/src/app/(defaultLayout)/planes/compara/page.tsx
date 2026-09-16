export const dynamic = "force-dynamic";
import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import PricingComparison from "../../../Components/PricingComparison/PricingComparison";
import AuditoriaGratis from "../../../Components/AuditoriaGratis/AuditoriaGratis";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";

const ComparaPlanesPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Compara Nuestros Planes"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes y Precios", href: "/planes" },
          { label: "Compara los Planes" },
        ]}
      ></BreadCumb>

      <PricingComparison></PricingComparison>

      <AuditoriaGratis></AuditoriaGratis>

      <ContactIno3 showForm={false}></ContactIno3>
    </div>
  );
};

export default ComparaPlanesPage;
