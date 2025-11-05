import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const UXDesign = () => {
  const uxServices = [
    "User Research & Journey Mapping",
    "Wireframing & Interactive Prototyping",
    "Visual Interface Design",
    "Usability Testing & Feedback Loops",
    "Interaction & Motion Design",
    "Accessibility & Inclusive Design",
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
          <h2 className="service-title text-start text-md-center">UI/UX Design</h2>
          <p className="service-description gray text-start text-md-center">
            Focused on blending usability with style, our designs make every
            click intuitive, every screen engaging, and every interaction align
            seamlessly with your brand.
          </p>
        </div>
      </Container>

      <Container>
        <Row className="d-flex align-items-center ui-ux-contain-main g-4">
          <Col xl={5}>
            <Image
              src="/images/services-uiux.png"
              width={670}
              height={401}
              layout="responsive"
              alt="uiux"
            />
          </Col>
          <Col xl={7}>
            <div className="ux-services-grid ui-ux-content data text-start">
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
                  <span className="servicename white">{service}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UXDesign;
