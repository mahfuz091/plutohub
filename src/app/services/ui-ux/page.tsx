import UiUxServicePage from "@/Components/UiUxServicePage/UiUxServicePage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/services/ui-ux",
  },
  title: "UI & UX Design Services: Increase Website User Engagement",
  description:
    "Losing users to poor interfaces? Get professional UI & UX Design that transforms frustration into flawless customer journeys and maximum retention. Contact Now!",
  openGraph: {
    title: "UI & UX Design Services: Increase Website User Engagement",
    description:
      "Losing users to poor interfaces? Get professional UI & UX Design that transforms frustration into flawless customer journeys and maximum retention. Contact Now!",
  },
};

const page = () => {
  return (
    <div>
      <UiUxServicePage />
    </div>
  );
};

export default page;
