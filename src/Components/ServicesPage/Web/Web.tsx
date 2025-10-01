import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Web = () => {
  return (
    <div className="logo-branding position-relative web">
    
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
          src="/images/web-servicess.png"
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
              <h2 className="service-title">Website Design</h2>
              <p className="service-description">
               Blending creativity with functionality, our websites capture attention instantly, guide visitors effortlessly, and turn casual browsing into lasting customer connections.
              </p>
            </Col>

            <Col md={8}>
              <Row>
                {[
                  " Responsive & Mobile-First Design",
                  "Custom Layouts & Page Structures",
                  "SEO & Performance Optimization",
                  "Conversion-Focused Landing Pages",
                  "E-Commerce Integration",
                  "CMS Setup & Content Management",
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

export default Web;
