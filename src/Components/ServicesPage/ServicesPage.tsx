import React from "react";
import ServicesPageBanner from "./ServicesPageBanner/ServicesPageBanner";
import LogoBranding from "./Logo & Branding/LogoBranding";
import UXDesign from "./UXDesign/UXDesign";
import Web from "./Web/Web";
import AppsDesign from "./AppsDesign/AppsDesign";
import SaasDesign from "./SaasDesign/SaasDesign";
import AiProduct from './AiProduct/AiProduct';
import Webflow from "./Webflow/Webflow";
import WordPress from "./WordPress/WordPress";
import Shopify from "./Shopify/Shopify";

const ServicesPage = () => {
  return (
    <div>
      <ServicesPageBanner />
      <LogoBranding />
      <UXDesign/>
      <Web/>
      <AppsDesign/>
      <SaasDesign/>
      <AiProduct/>
      <Webflow/>
      <WordPress/>
      <Shopify/>
    </div>
  );
};

export default ServicesPage;
