"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FaqSection = () => {
  const thumbnailRef = useRef(null);

  useEffect(() => {
    if (thumbnailRef.current) {
      // Create infinite up-down floating animation
      gsap.to(thumbnailRef.current, {
        y: -20, // Move up 20px
        duration: 1.2, // 1.2 seconds duration (faster)
        ease: "power2.inOut", // Smooth easing
        yoyo: true, // Reverse the animation
        repeat: -1, // Infinite repeat
      });
    }
  }, []);

  return (
    <section
      className="faq-section"
      style={{ backgroundImage: "url(/images/faq-bg.png)" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xl={5}>
            <div className="section-title">
              <h2 className="title">Frequently Asked Questions</h2>

              <div ref={thumbnailRef}>
                <Image
                  src="/images/faq-thumb.png"
                  width={296}
                  height={400}
                  alt="faq-thumb"
                />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="accordion-title">
                    What kind of projects does PlutoHub work on?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  PlutoHub creates everything from simple business websites to
                  advanced web and mobile applications. <br />
                  Whether you need a fresh design, a full product build, or
                  both, we guide you from the idea stage to a polished,
                  launch-ready product.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="accordion-title">
                    Why should I choose PlutoHub over other agencies?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  We combine creative design with practical development so your
                  product not only looks stunning but also performs smoothly.
                  <br />
                  Our team listens, adapts, and keeps you involved, ensuring you
                  get results that truly support your goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="accordion-title">
                    Can you help if I'm just starting my business?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we often work with founders right from the start. We help
                  shape your idea, design a clear user experience, and build a
                  professional product. Plus, we offer unlimited revisions until
                  you’re completely satisfied with the result.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span className="accordion-title">
                    Do you improve or redesign existing products?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Definitely. If your current site or app feels outdated, loads
                  slowly, or isn't converting well, we start with a full UX
                  audit to find the real issues. Then we refine the design,
                  improve usability, and update the technology so it performs
                  better and feels fresh for today's audience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span className="accordion-title">
                    How long will my project take?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Time depends on the functional complexity. A small website
                  takes 3-4 weeks, while a larger app takes a few months. After
                  we learn your needs, we'll give a clear, realistic timeline
                  upfront.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <span className="accordion-title">
                    How much will it cost to work with PlutoHub?
                  </span>
                  <span className="accordion-icons">
                    <Plus /> <Minus />
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Costs vary based on features and scope. We believe in
                  transparency, so we'll provide a detailed proposal before
                  starting. This way, you know exactly what's included and can
                  plan your budget confidently. For more pricing Information,
                  contact us here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;
