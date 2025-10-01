import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LogoBranding = () => {
  return (
    <div className="logo-branding position-relative">
      <Image
        src="/images/yellow.png"
        alt="yellow ellipse"
        width={400}
        height={400}
        className="ellipse ellipse-top-left"
      />
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
        className="ellipse ellipse-right"
      />

      <Container>
        <Image
          src="/images/logoBranding.png"
          alt="branding"
          width={1385}
          height={400}
          layout="responsive"
        />
      </Container>

      <div className="logo-branding-section">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="service-title">Logo & Branding</h2>
              <p className="service-description">
                We create brand identities that leave a strong and lasting
                impression. From distinctive logos to complete visual systems,
                we make sure every detail reflects your personality and connects
                with your audience.
              </p>
            </Col>

            <Col md={8}>
              <Row>
                {[
                  "Custom Logo Design",
                  "Brand Identity Systems",
                  "Brand Guidelines",
                  "Rebranding & Brand Refresh",
                  "Stationery & Marketing Collateral",
                  "Social Media Branding",
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LogoBranding;
