import ServicesPage from "@/Components/ServicesPage/ServicesPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Our Services: Build Your Brand Online With Us Today",
  description:
    "Ready to scale? Our services transform businesses through expert website development, UI/UX design, and branding. Get the competitive edge you need to succeed.| Plutohob",
};
export default function page() {
  return (
    <div>
      <ServicesPage />
    </div>
  );
}
