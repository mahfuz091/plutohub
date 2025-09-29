"use client";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import Buttons from "../../Banner/Buttons";
import Counter from "../../Counter/Counter";

const Services = () => {
  const aboutRef = useRef(null);
  const aboutShapeRef = useRef(null);
  const image2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Existing title animation
    document.querySelectorAll(".title_animation2").forEach((heading) => {
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

    // Initial reveal animation for about shape
    gsap.set(aboutShapeRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.9,
    });

    gsap.to(aboutShapeRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Mouse move animation for about shape
    const handleMouseMove = (e) => {
      if (!aboutRef.current || !aboutShapeRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = ((e.clientX - centerX) / rect.width) * 30; // Adjust multiplier for intensity
      const deltaY = ((e.clientY - centerY) / rect.height) * 30;

      gsap.to(aboutShapeRef.current, {
        x: deltaX,
        y: deltaY,
        rotation: deltaX * 0.1, // Slight rotation based on horizontal movement
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(image2Ref.current, {
        x: deltaX * 1.2,
        y: deltaY * 1.2,
        rotation: deltaX * 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      [aboutShapeRef.current, image2Ref.current].forEach((img) => {
        if (!img) return;
        gsap.to(img, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    // Add event listeners
    const aboutSection = aboutRef.current;
    if (aboutSection) {
      aboutSection.addEventListener("mousemove", handleMouseMove);
      aboutSection.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function
    return () => {
      if (aboutSection) {
        aboutSection.removeEventListener("mousemove", handleMouseMove);
        aboutSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className='service_about_area about_area services' ref={aboutRef}>
      {/*  */}

      <Container>
        <Row>
          <Col sm={5}>
            <div className='blub-main'>
              <h5 className='sub_title'>Our Services</h5>
              <Image
                ref={aboutShapeRef}
                src='/images/blub.svg'
                width={146}
                height={197}
                alt='blub'
                className=' blub-shape'
              />
            </div>

            <Image
              src='/images/services-bg.png'
              width={344}
              height={400}
              alt='blub'
              className='services-bg'
            />

            <Image
              ref={image2Ref}
              src='/images/about-shape.png'
              width={244}
              height={200}
              alt='blub'
              className='services-shape'
            />
          </Col>
          <Col sm={6}>
            <h2 className=' title_animation2'>
              Plutohub is a product design partner built for impact
            </h2>
            <p>
              We work with SaaS teams, startups, and modern brands to create
              design that performs, no matter your size, market, or tech stack.
              Design that clicks with users and converts for business.
            </p>
            <Buttons links='#' btnText="Let's Talk" />
          </Col>
        </Row>
        <Counter />
      </Container>
    </section>
  );
};
export default Services;
