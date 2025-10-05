import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FaqSection from "../FAQ/faq";

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
      <FaqSection/>
    </div>
  );
};

export default WebDesignDevPage;
