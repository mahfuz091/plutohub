"use client";

import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Buttons from "../Banner/Buttons";
import ProjectsItem from "./ProjectsItem";
import Image from "next/image";

const Projects = () => {
  const shapeRef = useRef(null);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctxs = gsap.context(() => {
      // title animation
      document.querySelectorAll(".title_animation4").forEach((heading) => {
        const text = heading.textContent || "";
        const wrappedText = text
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
        heading.innerHTML = wrappedText;

        gsap.fromTo(
          heading.querySelectorAll("span"),
          {
            opacity: 0.3,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: ".project_area",
              start: "bottom center",
              end: "bottom top",
            },
            stagger: 0.2,
            duration: 0.5,
          }
        );
      });

      // Mouse movement animation for shape
      const handleMouseMove = (e) => {
        if (!shapeRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();

        // Calculate mouse position relative to container
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        // Calculate movement intensity (adjust these values to control sensitivity)
        const moveX = (mouseX - containerRect.width / 2) * 0.05;
        const moveY = (mouseY - containerRect.height / 2) * 0.05;

        // Animate the shape with smooth movement
        gsap.to(shapeRef.current, {
          x: moveX,
          y: moveY,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      // Reset position when mouse leaves
      const handleMouseLeave = () => {
        if (!shapeRef.current) return;

        gsap.to(shapeRef.current, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      };

      // Add event listeners
      if (containerRef.current) {
        containerRef.current.addEventListener("mousemove", handleMouseMove);
        containerRef.current.addEventListener("mouseleave", handleMouseLeave);
      }

      // Cleanup function
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            "mousemove",
            handleMouseMove
          );
          containerRef.current.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      };
    });

    return () => ctxs.revert();
  }, []);

  return (
    <section className='project_area sec_padding' ref={containerRef}>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className='sub_title'>Our Projects</h5>
            <Image
              ref={shapeRef}
              src='/images/project-shape.png'
              width={244}
              height={200}
              alt='About Us'
              className='mt-5 about-shape'
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col sm={8}>
            <h2 className='title title_animation4'>
              Take a look at the projects that have turned our clients' ideas
              into remarkable success stories!
            </h2>
            <Buttons links='#' btnText='View All Projects' />
          </Col>
        </Row>
        <ProjectsItem />
      </Container>
    </section>
  );
};

export default Projects;
