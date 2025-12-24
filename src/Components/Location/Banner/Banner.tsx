import React from "react";
import { Container } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";


import Link from "next/link";
import LogoSlider from "../LogoSlider/LogoSLider";

const Banner = () => {
  return (
    <div className="hero img-hero">
      <Container>
        <div className="hero-container">
          <h1 className="hero-title">
            UX/UI Strategy and Design Experts in{" "}
            <span className="hero-highlight">Lisbon, Portugal</span>
          </h1>
          <p className="hero-description">
            PlutoHub is a Lisbon based design partner trusted by teams across
            SaaS, fintech, and ecommerce. Recognized as one of the best UI UX
            design consulting agencies in Lisbon, we turn complex tools into
            clear, effortless digital experiences. Through product strategy, UX
            research, and refined interfaces, your product feels intuitive from
            day one.
          </p>

          <Link href="/contact">
           <button className="theme_btn mt-3 mt-md-4 ">
            Get Started
            <div className="arrow_icon">
              <HiArrowUp />
            </div>
          </button>
          </Link>
         
        </div>

        <div className="trusted-container">
          {/* <button className="trusted-badge">
            Trusted By 200+ Global Brands
          </button> */}
        </div>
      </Container>

      <div className="logo-section">
        <div className="logo-slider-wrapper">
          <LogoSlider />
          {/* <LogoSliderTwo/> */}

        </div>
      </div>
    </div>
  );
};

export default Banner;
