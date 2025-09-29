import React from "react";
import ServicesPageBanner from "./ServicesPageBanner/ServicesPageBanner";
import LogoBranding from "./Logo & Branding/LogoBranding";
import UXDesign from "./UXDesign/UXDesign";
import Web from "./Web/Web";
import AppsDesign from "./AppsDesign/AppsDesign";

const ServicesPage = () => {
  return (
    <div>
      <ServicesPageBanner />
      <LogoBranding />
      <UXDesign/>
      <Web/>
      <AppsDesign/>
    </div>
  );
};

export default ServicesPage;
