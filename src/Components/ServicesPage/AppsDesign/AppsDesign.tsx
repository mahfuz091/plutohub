import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AppsDesign = () => {
  const uxServices = [
    "Mobile-First UI/UX",
    "iOS & Android Optimized Designs",
    "Interactive Prototypes",
    "Streamlined Navigation Flows",
    "Engaging Visual Elements",
    "Usability Testing & Iteration",
  ];

  return (
    <div className="ux-design">
      <Image
        src="/images/yellow.png"
        alt="yellow ellipse"
        width={400}
        height={400}
        className="ellipse ellipse-bottom-left"
      />
      <Image
        src="/images/green.png"
        alt="green ellipse"
        width={400}
        height={400}
        className="ellipse ui-ux-ellipse-right"
      />

      <Container>
        <div className="ux-design-heading">
          <h1 className="section-title">Apps Design</h1>
          <p className="section-description">
            Designed for the small screen but big on impact, our apps deliver smooth interactions, clear navigation, and visuals that keep users engaged on the go.
          </p>
        </div>
      </Container>

      <Container>
        <Row className="d-flex align-items-center ui-ux-contain-main">
          <Col md={5}>
            <Image
              src="/images/services-uiux.png"
              width={670}
              height={401}
              layout="responsive"
              alt="uiux"
            />
          </Col>
          <Col md={7}>
            <div className="ux-services-grid ui-ux-content">
              {uxServices.map((service, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-start  ${
                    index === 2 || index === 3 ? "borders" : ""
                  }`}
                >
                  <Image
                    src="/images/LogoBrandingIcon.svg"
                    alt="icon"
                    width={24}
                    height={24}
                    className="me-3 pt-service"
                  />
                  <span className="servicename">{service}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppsDesign;
