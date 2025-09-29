import React from "react";
import ServicesPageBanner from "./ServicesPageBanner/ServicesPageBanner";
import LogoBranding from "./Logo & Branding/LogoBranding";
import UXDesign from "./UXDesign/UXDesign";

const ServicesPage = () => {
  return (
    <div>
      <ServicesPageBanner />
      <LogoBranding />
      <UXDesign/>
    </div>
  );
};

export default ServicesPage;
