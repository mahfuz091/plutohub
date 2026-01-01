import React from "react";
import { Container } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";


import Link from "next/link";
import LogoSlider from "../LogoSlider/LogoSLider";

const Banner = () => {
    return (
        <div className="hero-lisbon-web img-hero-lisbon-web">
            <Container>
                <div className="hero-container">
                    <h1 className="hero-title">
                        Strategic Web Design Experts in
                        <span className="hero-highlight"> Lisbon, Portugal</span>
                    </h1>
                    <p className="hero-description">
                        Plutohub is a Lisbon-based web design agency helping startups, SaaS, and growing businesses build modern, high-performing websites. We design conversion-focused, responsive websites that combine strong visual identity with clear structure and usability. From brand-led marketing sites to scalable web platforms, our team turns complex ideas into websites that feel effortless, fast, and results-driven from day one.
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



        </div>
    );
};

export default Banner;
