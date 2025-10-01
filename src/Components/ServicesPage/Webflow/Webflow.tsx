import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Webflow = () => {
  return (
    <div className="SaasDesign">
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
        <Image
            src="/images/sass-services.png"
            width={1500}
            height={400}
            alt="sass"
            layout="responsive"
            className="webflow-content"
          />
        <div className="webflow-heading ">
          <h1 className="service-title">Webflow Website Design</h1>
          <p className="service-description">
            With Webflow's flexibility and our design expertise, we build custom, responsive websites that look stunning and give you complete control over content updates.
          </p>
        </div>

       
        <Row>
          {[
            "Custom Webflow Development",
            "CMS Setup & Configuration",
            "Animation & Interaction Design",
            "E-Commerce Store Design",
            "SEO & Performance Setup",
            "Editor Training & Support",
          ].map((item, index) => (
            <Col sm={6} key={index} className="mb-3">
              <div className="branding-card d-flex align-items-center">
                <img
                  src="/images/LogoBrandingIcon.svg"
                  alt="icon"
                  className="me-3"
                  width={24}
                  height={24}
                />
                <span>{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Webflow;
