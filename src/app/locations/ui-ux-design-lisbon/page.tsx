import Location from "@/Components/Location/Loaction";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/locations/ui-ux-design-lisbon",
  },
  title: "Lisbon’s Trusted UI/UX Design Agency | Plutohub",
  description:
    "Partner with Plutohub, Lisbon’s trusted UI/UX design agency. We design seamless digital experiences that turn users into loyal customers.",
  openGraph: {
    title: "Lisbon’s Trusted UI/UX Design Agency | Plutohub",
    description:
      "Partner with Plutohub, Lisbon’s trusted UI/UX design agency. We design seamless digital experiences that turn users into loyal customers.",
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
