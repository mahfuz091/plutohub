import React from "react";
import Banner from "./Banner/Banner";
import Services from "./service/Services";
import DesignProcess from "./DesignProcess/DesignProcess";
import Number from "./Number/Number";
import FaqSection from "../FAQ/faq";
import RecentWork from "./RecentWork/RecentWork";
import IndustriesExpertise from "./IndustriesExpertise/IndustriesExpertise";
import Benefits from "./Benefits/Benefits";

const LogoBrandingServicePage = () => {
  return (
    <div>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },

          { label: "Services", href: "/services" },

          { label: "Logo & Branding", href: "/services/logo-and-branding" },
        ]}
        title="Logo & Branding Services Fast, Professional, Affordable"
      />
      <Services />
      <DesignProcess />
      <RecentWork />
      <Benefits />
      <IndustriesExpertise />
      <Number />
      <div className="pt-5 pt-md-0">
      <FaqSection />
      </div>
    </div>
  );
};

export default LogoBrandingServicePage;
