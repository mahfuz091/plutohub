import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FaqSection from "../FAQ/faq";
import RecentWork from "./RecentWork/RecentWork";
import Difference from './Difference/Difference';
import IndustriesExpertise from "./IndustriesExpertise/IndustriesExpertise";
import Number from "./Number/Number";

const WebDesignDevPage = () => {
  return (
    <div>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },
         
          { label: "Website design & development", href: "/services/web" },
        ]}
        title="Website Design & Development"
      />
      <Services/>
      <div className="common-bg">
        <RecentWork/>
        <Difference/>
      </div>

      <IndustriesExpertise/>
      <Number/>
      <FaqSection/>
      
    </div>
  );
};

export default WebDesignDevPage;
