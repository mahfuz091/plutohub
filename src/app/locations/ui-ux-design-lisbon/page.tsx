import Location from "@/Components/Location/Loaction";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/locations/ui-ux-design-lisbon",
  },
  title: "UI/UX Design Lisbon: Your Trusted Digital Solutions Partner",
  description: "UI/UX Design Lisbon: Your Trusted Digital Solutions Partner",
  openGraph: {
    title: "UI/UX Design Lisbon: Your Trusted Digital Solutions Partner",
    description: "UI/UX Design Lisbon: Your Trusted Digital Solutions Partner",
  },
};
const LocationPage = () => {
  return (
    <div>
      <Location />
    </div>
  );
};

export default LocationPage;
