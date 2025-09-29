"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Container } from "react-bootstrap";

import question_image from "../../assets/img/question.svg";
import we_make_shape1 from "../../assets/img/we-make-shape1.svg";
import we_make_shape2 from "../../assets/img/we-make-shape2.svg";
import standout_light from "../../assets/img/standout-light.svg";
import standout_long_arrow from "../../assets/img/standout-long-arrow.svg";
import why_we_project from "../../assets/img/gsapLandingPage.svg";
import we_drive_icon from "../../assets/img/we-drive-icon.svg";
import work_icon from "../../assets/img/work-icon.svg";
import why_we_project2 from "../../assets/img/gsapMobil.svg";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const WhyWe = () => {
  const pathname = usePathname();
  const containerRef = useRef(null); // Ref for .why_we_area
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useLayoutEffect(() => {
    const wrapper = containerRef.current?.querySelector(".why_we_inner");
    if (!wrapper) return;

    const totalScrollWidth = wrapper.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollDistance = totalScrollWidth - containerWidth;
    const extraScroll = 500; // Add 500px extra scroll area

    const mainScrollTL = gsap.to(wrapper, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: `+=${scrollDistance + extraScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const animateShape = (selector, animationProps) => {
      gsap.from(selector, {
        ...animationProps,
        scrollTrigger: {
          trigger: selector,
          containerAnimation: mainScrollTL,
          start: "left center",
          toggleActions: "play none none reverse",
        },
      });
    };

    // Animate shapes
    animateShape(".we_make_shape1", {
      rotationZ: -90,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".we_make_shape2", {
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".standout_light", {
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    });
    animateShape(".standout_long_arrow", {
      x: -100,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".why_we_project", {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".we_drive_icon", {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".btn-business", {
      rotation: 15,
      y: 100,
      duration: 1,
      ease: "power2.out",
    });
    animateShape(".letter_o", {
      width: 48,
      duration: 1,
      ease: "power2.out",
    });

    // Cleanup function for ScrollTrigger instances
    return () => {
      // Ensure cleanup happens when the component unmounts or pathname changes
      if (containerRef.current) {
        // Kill the main scrollTrigger for the timeline
        if (mainScrollTL && mainScrollTL.scrollTrigger) {
          mainScrollTL.scrollTrigger.kill();
        }

        // Kill any other scrollTriggers that were created
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <section className='why_we_area' ref={containerRef}>
        <Container>
          <div className='why_we_inner'>
            <div className='single-slide slide_one'>
              <div className='media-text'>
                <Image src={question_image} alt='question image' />
                <div className='btn-wrap'>
                  <h4>Why we perfect</h4>
                  <h4 className='green'>for your business?</h4>
                </div>
              </div>
              <p>
                From intuitive apps to powerful dashboards, we craft digital
                products that solve real problems and delight users
              </p>
            </div>

            <div className='single-slide slide_two'>
              <Image
                className='we_make_shape1'
                src={we_make_shape1}
                alt='we make shape 1'
              />
              <Image
                className='we_make_shape2'
                src={we_make_shape2}
                alt='we make shape 2'
              />
              <h2>We Make &</h2>
            </div>

            <div className='single-slide slide_three'>
              <Image
                className='standout_light'
                src={standout_light}
                alt='light'
              />
              <div>
                <h2>You Stand Out</h2>
                <Image
                  className='standout_long_arrow'
                  src={standout_long_arrow}
                  alt='long arrow'
                />
              </div>
            </div>

            <div className='single-slide slide_four'>
              <Image
                className='why_we_project'
                src={why_we_project}
                alt='project'
              />
            </div>

            <div className='single-slide slide_five'>
              <div className='text-part'>
                <Image
                  className='we_drive_icon'
                  src={we_drive_icon}
                  alt='we drive icon'
                />
                <h2>We Drive</h2>
              </div>
              <div className='btn-part'>
                <h3 className='green btn-business'>Business</h3>
                <h3 className='yellow'>Growth</h3>
              </div>
            </div>
            <div className='single-slide slide_six'>
              <div className='work-part'>
                <h2>
                  We{" "}
                  <span>
                    W <span className='letter_o'></span>rk
                  </span>{" "}
                  <br /> Like Partners
                </h2>
              </div>
              <Image className='work_icon' src={work_icon} alt='work icon' />
            </div>
            <div className='single-slide slide_seven'>
              <Image
                className='why_we_project2'
                src={why_we_project2}
                alt='project 2'
              />
            </div>
            <div className='extra-scroll-space' />
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyWe;
