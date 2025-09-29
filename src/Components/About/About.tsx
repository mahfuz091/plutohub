'use client'
import { Col, Container, Row } from "react-bootstrap";
import Counter from "../Counter/Counter";
import Image from "next/image";
import Buttons from "../Banner/Buttons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const aboutShapeRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Existing title animation
    document.querySelectorAll(".title_animation").forEach((heading) => {
      const text = heading.textContent;
      const wrappedText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      heading.innerHTML = wrappedText;

      gsap.from(heading.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: ".banner_area",
          start: "top top",
          end: "bottom 0",
          pin: false,
          scrub: true,
        },
        opacity: 0.3,
        stagger: 1.5,
        duration: 2,
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
    };

    const handleMouseLeave = () => {
      if (!aboutShapeRef.current) return;

      gsap.to(aboutShapeRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
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
    <section className='P_about_area about_area' ref={aboutRef}>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className='sub_title'>About Us</h5>
            <Image
              ref={aboutShapeRef}
              src='/images/about-shape.png'
              width={244}
              height={200}
              alt='About Us'
              className='mt-5 about-shape'
            />
          </Col>
          <Col sm={8}>
            <h2 className='title title_animation'>
              We create innovative digital products customized to your business
              needs. Our goal is to help you grow faster and easier.
            </h2>
            <Buttons links='#' btnText='Lets Connect' />
          </Col>
        </Row>
        <Counter />
      </Container>
    </section>
  );
};
export default About;
