import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import RecentWork from "./RecentWork/RecentWork";
import UIUXExpertise from "./UIUXExpertise/UIUXExpertise";
import ContactSection from "../contact/contact";
import FaqSection from "../FAQ/faq";
import RealResults from "./RealResults/RealResults";

const UiUxServicePage = () => {
  return (
    <div>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },

          { label: "Services", href: "/services" },
          { label: "UI & UX Design", href: "/services/uiux" },
        ]}
        title="UI & UX Design"
      />
      <Services />
      <RecentWork />
      <RealResults />
      <UIUXExpertise />
      <div className="overflow-hidden">
        <ContactSection />
      </div>

      <FaqSection />
    </div>
  );
};

export default UiUxServicePage;
