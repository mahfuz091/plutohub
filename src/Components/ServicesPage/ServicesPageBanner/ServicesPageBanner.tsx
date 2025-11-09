"use client";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const ServicesPageBanner: React.FC = () => {
  const blubRef = useRef<HTMLImageElement>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const banner = document.querySelector(".service_banner_area") as HTMLElement | null;
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
    <section className='service_banner_area about'>
      <div
        className='hero-image'
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      ></div>

      {/* --- Animated Center Image --- */}
      <Image
        src='/images/AboutBannerEl.png'
        width={500}
        height={500}
        alt='banner element'
        className='banner-center-img'
        ref={blubRef}
      />

      <Container className='services-banner'>
        <Row className='d-flex justify-content-center align-items-center text-center'>
          <Col>
         
            <nav
              className='breadcrumb-services d-flex justify-content-center align-items-center'
              aria-label='Breadcrumb'
              style={{ zIndex: 5, position: "relative" }}
            >
              <ol>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={index} aria-current={isLast ? "page" : undefined}>
                      {isLast || !crumb.href ? (
                        <span>{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* --- Banner Title and Description --- */}
            <h1 className="section-title">
              Build Your Digital Foundation — UI/UX, Web Dev, and Branding
            </h1>
            <p className="section-description gray">
              Your ideas deserve designs that stand out and deliver tangible results. 
              From logos to websites and apps, we make every detail shine.
            </p>
          </Col>
        </Row>
      </Container>

      <div className='spotlight2'></div>
    </section>
  );
};

export default ServicesPageBanner;
