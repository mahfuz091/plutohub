"use client";
import dynamic from "next/dynamic";

import Drives from "./Drives/Drives";
import IndustriesServe from "./IndustriesServe/IndustriesServe";
import Services from "./services/Services";
import Team from "./Team/Team";
import WeHelp from "./We-Help/WeHelp";
import WhyPlutohub from "./why/WhyPlutohub";

const Banner = dynamic(() => import("./Banner/Banner"), { ssr: false });
const AboutUs = () => {
  return (
    <div className=''>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
        title='We Help Brands Launch, Scale, And Lead Through Design'
      />
      {/* <WeHelp /> */}
      <Services />
      <Drives />
      <WhyPlutohub />
      <IndustriesServe />
      <Team />
    </div>
  );
};

export default AboutUs;
