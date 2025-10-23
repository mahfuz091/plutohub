"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const industries = [
  { img: "/images/services-web/crypto.png", title: "Crypto" },
  { img: "/images/services-web/DigitalAgency.png", title: "Digital Agency" },
  { img: "/images/services-web/medical.png", title: "Medical" },
  { img: "/images/services-web/finance.png", title: "Finance" },
];

const IndustriesExpertise = () => {
  return (
    <div className="industries-expertise ">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1000}
        height={1200}
        className="ellipse-industries-expertise"
      />
      <Container>
        <div className="industries-content text-center mb-5">
          <h1 className="web-title">Industries Expertise</h1>
          <p className="web-description">
            We build custom websites for Fintech, SaaS, Healthcare, Edtech,
            E-commerce, and more. Designed to engage users and support real
            business growth.
          </p>
        </div>

        <Row className="g-4">
          {industries.map((item, index) => (
            <Col key={index} sm={6} md={6}>
              <div className="industry-card position-relative overflow-hidden rounded-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  height={300}
                  width={800}
                  className=" "
                  layout="responsive"
                />
                <div className="industry-overlay position-absolute bottom-0   text-white py-3">
                  <h5 className="mb-0">{item.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default IndustriesExpertise;
