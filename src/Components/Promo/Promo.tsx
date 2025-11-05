"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../Banner/Buttons";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";

// gsap.registerPlugin(ScrollTrigger);

const Promo = () => {
  const promoImgRef = useRef(null);
  const pathname = usePathname();
  const { inView, ref } = useInView({
    triggerOnce: false, // Continue observing after the element comes into view
    threshold: 0.8, // Trigger when 80% of the element is visible
  });

  // useEffect(() => {
  //   if (promoImgRef.current) {
  //     ScrollTrigger.create({
  //       trigger: promoImgRef.current,
  //       start: "top 80%",
  //       once: false,
  //       onEnter: () => {
  //         promoImgRef.current.classList.add("svg_animation");
  //       },
  //     });
  //   }
  // }, []);

  return (
    <section className='pomo_area sec_padding'>
      <video autoPlay loop muted playsInline className='bg_video'>
        <source src='/promo.mp4' type='video/mp4' />
      </video>

      <Container>
        <Row>
          <Col md={6}>
            <div
              className={`promo_img text-center ${
                inView ? "svg_animation" : ""
              }`}
              ref={ref}
            >
             <img src="/images/promo.png" alt="promo" />
            </div>
          </Col>
          <Col md={6}>
            <div className='promo_content'>
              <h2 className='title'>
                Innovative design is our tool to reshape business
              </h2>
              <p>
                We’re a passionate team of UI/UX designers dedicated to creating
                intuitive digital experiences. With years of experience, we
                blend creativity and strategy to design solutions that engage
                users and drive business success.
              </p>
              <p>
                We turn ideas into seamless, Beautiful designs. Let’s build
                digital experiences that not only look stunning but also deliver
                real results.
              </p>

              <Buttons links='/about' btnText='More About Us' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;
