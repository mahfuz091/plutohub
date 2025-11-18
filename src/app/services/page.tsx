import ServicesPage from "@/Components/ServicesPage/ServicesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/services",
  },
  title: "Our Services: Build Your Brand Online With Us Today",
  description:
    "Ready to scale? Our services transform businesses through expert website development, UI/UX design, and branding. Get the competitive edge you need to succeed.",
  openGraph: {
    title: "Our Services: Build Your Brand Online With Us Today",
    description:
      "Ready to scale? Our services transform businesses through expert website development, UI/UX design, and branding. Get the competitive edge you need to succeed.",
    images: [
      {
        url: "/images/logo.svg", // local image from public folder
        alt: "My OG Image",
      },
    ],
  },
};
export default function page() {
  return (
    <div>
      <ServicesPage />
    </div>
  );
}
