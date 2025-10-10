"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: "Service-1",
    image: "/images/services-web/build.png",
    title: "Built Around Your Business Goals",
    description:
      "We don't just design for looks. Every website we create is aligned with your brand objectives and user needs to drive actual business results.",
    list: ["Focused on conversions and growth", "Aligned with your brand vision", "Designed for your target audience"],
  },
  {
    id: 2,
    number: "Service-2",
    image: "/images/services-web/easy-to-use.png",
    title: "Easy to Use, Easy to Love",
    description:
      "Good design keeps users engaged. We craft seamless, intuitive interfaces that feel natural, allowing people to enjoy using your site.",
    list: ["Clear structure and navigation", "Mobile-friendly experiences", "Smooth, frustration-free user flows"],
  },
  {
    id: 3,
    number: "Service-3",
    image: "/images/services-web/build-device.png",
    title: "Built for All Devices",
    description:
      "Whether on a phone, tablet, or desktop, your website should always shine. We make sure it's fast, responsive, and visually sharp on every screen.",
    list: ["Fully responsive design", "Optimized for all screen sizes", "No app download needed"],
  },
  {
    id: 4,
    number: "Service-4",
    image: "/images/services-web/made-to-grow.png",
    title: "Made to Grow With You",
    description:
      "We build your brand identity to connect emotionally and strategically with your audience.",
    list: ["Brand identity", "Market positioning", "Consistent messaging"],
  },
  {
    id: 5,
    number: "Service-4",
    image: "/images/services-web/headaches.png",
    title: "No Headaches, Just Results",
    description:
      "We build your brand identity to connect emotionally and strategically with your audience.",
    list: ["Brand identity", "Market positioning", "Consistent messaging"],
  },
  // {
  //   id: 6,
  //   number: "Service-4",
  //   image: "/images/services-web/your-in-loop.png",
  //   title: "Brand Strategy",
  //   description:
  //     "We build your brand identity to connect emotionally and strategically with your audience.",
  //   list: ["Brand identity", "Market positioning", "Consistent messaging"],
  // },
];

const ServicesScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = gsap.utils.toArray<HTMLElement>(".card_item");
    const triggers: (ScrollTrigger | undefined)[] = [];

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, {
        y: index * 70,
        filter: "blur(0px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=300",
          end: "top top+=40",
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(card, {
        scale: 1 - (cards.length - index) * 0.055,
        ease: "none",
        duration: 0.5,
      });

      const isLast = index === cards.length - 1;
      if (!isLast) {
        const blurStrength = 5 - index;
        const blurValue = `blur(${blurStrength}px)`;
        timeline.to(card, {
          filter: blurValue,
          ease: "none",
          duration: 0.5,
        });
      }

      triggers.push(timeline.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, []);

  return (
    <section className="rd_service_area section_padding pt-0">
      <Container>
         <div className="differenec-content text-center mb-5">
          <h1 className="web-title">Why Our UI/UX Design Services Make a Difference?</h1>
          <p className="web-description">
            We craft user-centered designs that not only look good but also work beautifully. By combining strategy with seamless interaction, we help your product connect with users and drive real business growth.
          </p>
        </div>
        <div className="service_card_inner">
          {services.map((feature, index) => (
            <div
              key={feature.id}
              className={`card_item ${
                index === services.length - 1 ? "sticky-card" : ""
              }`}
            >
              <Card.Body>
                

                <Row className="d-flex align-items-center justify-content-between g-4">

                 
                  <Col xl={4} className="text-center mb-3 mb-md-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={353.33}
                      height={250}
                      layout="responsive"
                      className="img-fluid rounded"
                    />
                  </Col>

                 
                  <Col xl={4} >

                  <div className="tides">
                     <h2 className="mb-3">{feature.title}</h2>
                    <p className="mb-3">{feature.description}</p>
                  </div>
                    
                   
                  </Col>

                  
                  <Col xl={4}>
                    <ul className="list-unstyled">
                      {feature.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="d-flex align-items-center mb-2 list"
                        >
                          <Image
                            src="/images/UiUx-Service/right.svg"
                            alt="check"
                            width={24}
                            height={24}
                            className="me-2"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesScroll;
