"use client";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { gsap } from "gsap";
import Buttons from "../../Banner/Buttons";
import Link from "next/link";
type BreadcrumbItem = {
  label: string;
  href?: string; // optional (last item usually doesn’t need a link)
};

// interface BannerProps {
//   breadcrumbs: BreadcrumbItem[];
//   title: string;
// }

const ServicesPageBanner = () => {
  const blubRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
   
    const handleMouseMove = (e: MouseEvent) => {
      const banner = document.querySelector(
        ".service_banner_area"
      ) as HTMLElement | null;
      if (banner) {
        banner.style.setProperty("--clientX", `${e.clientX}px`);
        banner.style.setProperty("--clientY", `${e.clientY}px`);
      }

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      if (blubRef.current) {
        gsap.to(blubRef.current, {
          duration: 0.8,
          x: xPos * 20,
          y: yPos * 15,
          rotation: xPos * 5,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className='service_banner_area about '>
      <div
        className='hero-image'
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      ></div>
      <Image
        src='/images/AboutBannerEl.png'
        width={500}
        height={500}
        alt='screw'
        className='banner-center-img'
      />
      <Container className=' services-banner'>
        <h1 className="section-title">Our Services</h1>
        <p className="section-description">Your ideas deserve designs that stand out and deliver tangible results. From logos to websites and apps, we make every detail shine.</p>
        
      </Container>
      <div className='spotlight2'></div>
    </section>
  );
};

export default ServicesPageBanner;
