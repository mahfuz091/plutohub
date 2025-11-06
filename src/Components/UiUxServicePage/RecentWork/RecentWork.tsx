"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const industries = [
  { img: "/images/LogoBranding/recent-work-01.png", title: "Crypto" },
  { img: "/images/LogoBranding/recent-work-02.png", title: "Travel" },
  { img: "/images/LogoBranding/recent-work-03.png", title: "Medical" },
  { img: "/images/LogoBranding/recent-work-04.png", title: "Finance" },
  { img: "/images/LogoBranding/recent-work-05.png", title: "Finance" },
  { img: "/images/LogoBranding/recent-work-06.png", title: "Finance" },
];

const RecentWork = () => {
  return (
    <div className="  recent-work-uiux">
      <Image
        src="/images/yellow.png"
        alt="yellow ellipse"
        width={1000}
        height={1200}
        className="ellipse-industries-uiux"
      />
      <Container>
        <Row>
          <Col md={4}>
            <div className="industries-content  mb-5">
              <h2 className="web-title">
                Our Recent UI/UX <br /> Design Works
              </h2>
            </div>
          </Col>
          <Col md={8}>
            <Row className="g-4 industry-b">
              {industries.map((item, index) => (
                <Col key={index} sm={6} md={6}>
                  <div className="industry-card position-relative overflow-hidden rounded-3">
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={253.13}
                      width={337.5}
                      className=" "
                      layout="responsive"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecentWork;
