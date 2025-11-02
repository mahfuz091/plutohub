import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FaqSection from "../FAQ/faq";
import RecentWork from "./RecentWork/RecentWork";

import IndustriesExpertise from "./IndustriesExpertise/IndustriesExpertise";
import Number from "./Number/Number";

import DevelopmentProcess from "./DevelopmentProcess/DevelopmentProcess";
import ServicesScroll from "./Difference/Difference";
const WebDesignDevPage = () => {
  return (
    <div>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },
         
          { label: "Website design & development", href: "/services/web" },
        ]}
        title="Website Development Launch Your Online Success"
      />
      <Services/>
      <DevelopmentProcess/>
      <div className="common-bg">
        <RecentWork/>
        <ServicesScroll/>
      </div>

      <IndustriesExpertise/>
      <Number/>
      <FaqSection/>
      
    </div>
  );
};

export default WebDesignDevPage;
