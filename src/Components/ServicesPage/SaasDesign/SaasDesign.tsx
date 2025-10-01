import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SaasDesign() {
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
        <div className="sassHeading-heading">
          <h1 className="service-title">SaaS Design</h1>
          <p className="service-description">
            Turning complex systems into clear, user-friendly tools, our SaaS
            designs help users focus on getting work done with minimal effort
            and maximum satisfaction.
          </p>
        </div>

        <div className="">
          <Image
            src="/images/sass-services.png"
            width={1500}
            height={400}
            alt="sass"
            layout="responsive"
            className="sassHeading-content"
          />
        </div>
        <Row>
          {[
            " Dashboard & Data Visualization",
            "Intuitive User Workflows",
            "Onboarding & Guidance Screens",
            "Responsive Web App Layouts",
            "Feature-Focused UI Elements",
            "Consistent Design Systems",
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
}
