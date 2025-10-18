import ServicesPage from "@/Components/ServicesPage/ServicesPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Our Comprehensive Services - Web Design, UI/UX, Branding & More | Plutohob",
};
export default function page() {
  return (
    <div>
      <ServicesPage />
    </div>
  );
}
