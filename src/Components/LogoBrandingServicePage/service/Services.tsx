"use client";

import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CardService from "./Card";

interface Stat {
  icon: string;
  title: string;
  text: string;
}

const Services: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutShapeRef = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title letters
    document.querySelectorAll<HTMLElement>(".title_animation2").forEach((heading) => {
      const text = heading.textContent || "";
      const wrappedText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      heading.innerHTML = wrappedText;

      gsap.from(heading.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: ".service_area",
          start: "top -8%",
          end: "bottom top",
        },
        opacity: 0.3,
        stagger: 0.2,
        duration: 0.5,
      });
    });

    // Reveal animation
    if (aboutShapeRef.current && aboutRef.current) {
      gsap.set(aboutShapeRef.current, { opacity: 0, y: 30, scale: 0.9 });
      gsap.to(aboutShapeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
      });
    }
  }, []);

  const stats: Stat[] = [
    {
      icon: "/images/LogoBranding/logo.svg",
      title: "Logo Design",
      text: "A well-crafted logo captures your brand's personality at a single glance. Designed for versatility and clarity, it becomes the face of your business across all channels.",
    },
    {
      icon: "/images/LogoBranding/startup.svg",
      title: "Brand Design",
      text: "Visual storytelling meets strategic thinking to shape an identity that connects emotionally and communicates consistently. Every detail reinforces your brand's position and voice.",
    },
    {
      icon: "/images/LogoBranding/brand.svg",
      title: "Website Strategy",
      text: "Every great website begins with a well-planned strategy. We help you define goals, understand your users, and map out a clear plan to build a site that works.",
    },
    {
      icon: "/images/LogoBranding/brand-sta.svg",
      title: "Brand Identity",
      text: "Solid strategy sets the tone before visuals begin. By understanding your audience and goals, brand design consultants define how your brand should speak, look, and evolve.",
    },
    {
      icon: "/images/LogoBranding/graphic.svg",
      title: "Graphic Design",
      text: "Custom-designed assets bring consistency to your marketing and communication. From business cards to digital creatives, everything aligns with your brand identity and messaging.",
    },
    {
      icon: "/images/LogoBranding/startup.svg",
      title: "Startup Branding",
      text: "Startups need branding that's bold, agile, and impactful. Startup branding packages are tailored to help new businesses establish credibility and make a strong first impression.",
    },
  ];

  return (
    <section
      className="service_about_area about_area  logo-services"
      ref={aboutRef}
    >
      <Container>
        <Row className=" mb-5">
          <Col xl={5}>
            <h5 className="text-left">Our Services</h5>
            <Image
              src="/images/services-bg.png"
              width={344}
              height={400}
              alt="background"
              className="services-bg"
            />
            <Image
              ref={image2Ref}
              src="/images/about-shape.png"
              width={244}
              height={200}
              alt="shape"
              className="services-shape"
            />
             <Image
                    src="/images/yellow.png"
                    alt="yellow ellipse"
                    width={400}
                    height={400}
                    className="ellipse ellipse-top-left"
                  />
                
          </Col>

          <Col xl={7}>
            <h2 className="title_animation2 text-right">
             Our Expert Branding and Identity Design Services
            </h2>
          </Col>
        </Row>       
        <Row className="g-4">
          {stats.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <CardService
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
