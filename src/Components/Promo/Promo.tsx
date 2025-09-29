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
              <svg
                width='450'
                height='421'
                viewBox='0 0 450 421'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M44.7153 230.967L31.8811 156.869C24.9916 117.094 40.8498 76.7945 72.9988 52.3808C99.2222 32.4669 133.095 25.5978 165.005 33.7227L222.502 48.3631M294.344 170.863V280.863M294.344 280.863V390.863M294.344 280.863H420M294.344 280.863H175M294.344 280.863L378.515 198.776M294.344 280.863L89.5 87.8631M294.344 280.863L204.46 374.656M294.344 280.863L386.031 367.753'
                  stroke='url(#paint0_linear_315_409)'
                  strokeWidth='60'
                  strokeLinecap='round'
                  className='svg-elem-1'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_315_409'
                    x1='219.54'
                    y1='149.056'
                    x2='189.238'
                    y2='370.019'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#06D6A0' />
                    <stop offset='0.490644' stopColor='#71E094' />
                    <stop offset='1' stopColor='#E0EA87' />
                  </linearGradient>
                </defs>
              </svg>
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

              <Buttons links='#' btnText='More About Us' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;
