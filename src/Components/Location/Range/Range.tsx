import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const services = [
  {
    img: "/assets/images/consulting.png",
    title: "UI UX Consulting",
    description:
      "PlutoHub helps you understand what’s slowing the product down. Our consultants surface the real issues, bring clarity to user needs, and guide teams toward smarter design decisions.",
  },
  {
    img: "/assets/images/design.png",
    title: "UI UX Design",
    description:
      "We shape interfaces with intention, focusing on clarity, flow, and ease of use. The result is a product experience that feels balanced, modern, and effortless for your users.",
  },
  {
    img: "/assets/images/visual-desgin.png",
    title: "Visual Design",
    description:
      "Visual direction becomes more refined here. PlutoHub elevates color, spacing, and typography to give your product a clean, consistent aesthetic that strengthens recognition and brand trust.",
  },
  {
    img: "/assets/images/audit.png",
    title: "UX Audit & Research",
    description:
      "An in-depth look at how people interact with your product. We uncover patterns, frustrations, and opportunities, giving your team the insights needed to move forward with confidence.",
  },
  {
    img: "/assets/images/prototyping.png",
    title: "Wireframing and Prototyping",
    description:
      "Early ideas gain structure through wireframes and prototypes. PlutoHub helps you explore interactions, test assumptions, and build alignment before committing to the final design.",
  },
  {
    img: "/assets/images/desgin-audit.png",
    title: "Design System Audit",
    description:
      "We review components, rules, and usage across your product. The audit highlights inconsistencies and gives you a clearer, more scalable system that supports both designers and developers.",
  },
];

const Range = () => {
  return (
    <div className="pt-120 range">
      <Container>
        <h2 className="loc-title range-title text-md-center">
          Our UX & UI Design Services in Lisbon, Portugal
        </h2>

        <div className=" pt-60">
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <div className="rang-card">
                  <div className="rang-card-img">
                    <img
                    src={service.img}
                    alt={service.title}
                    className=" "
                   
                  />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-desc">{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Range;
