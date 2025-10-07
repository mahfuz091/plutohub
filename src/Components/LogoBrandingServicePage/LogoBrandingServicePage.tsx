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

          { label: "Logo & Branding", href: "/services/web" },
        ]}
        title="Logo & Branding"
      />
      <Services/>
      <DesignProcess/>
      <RecentWork/>
      <Benefits/>
      <IndustriesExpertise/>
      <Number/>
      <FaqSection/>
    </div>
  );
};

export default LogoBrandingServicePage;
