import LisbonPortugalNewPage from "@/Components/Location/LisbonPortugalNewPage/LisbonPortugalNewPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    metadataBase: new URL("https://plutohub.agency"),

    alternates: {
        canonical: "/locations/web-design-lisbon",
    },

    title: "Web Design Lisbon - PlutoHub Web Design Agency",
    description:
        "Web Design Lisbon, Portugal. Top web design agency in Portugal. We help your brand and business grow with stunning designs. Serving clients worldwide this year!",

    openGraph: {
        title: "Web Design Lisbon - PlutoHub Web Design Agency",
        description:
            "Web Design Lisbon, Portugal. Top web design agency in Portugal. We help your brand and business grow with stunning designs. Serving clients worldwide this year!",

    },

    twitter: {
        card: "summary_large_image",
        title: "Web Design Lisbon - PlutoHub Web Design Agency",
        description:
            "Web Design Lisbon, Portugal. Top web design agency in Portugal. We help your brand and business grow with stunning designs. Serving clients worldwide this year!",
    },

    robots: {
        index: true,
        follow: true,
    },
};

const LisbonPortugalNew = () => {
    return (
        <div>
            <LisbonPortugalNewPage />
        </div>
    );
};

export default LisbonPortugalNew;
