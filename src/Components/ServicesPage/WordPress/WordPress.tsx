import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WordPress = () => {
  return (
    <div className="WordPress">
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
        <Row className="d-flex align-items-center">
          <Col>
            <Image
              src="/images/wordpress-services.png"
              alt="WordPress"
              width={567}
              height={400}
            />
          </Col>
          <Col>
            <h1 className="service-title">
              WordPress Website <br /> Design
            </h1>
            <p className="service-description">
              Combining creativity with WordPress's flexibility, we design and
              build sites that are easy to manage, visually engaging, and
              optimized for performance.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="webflow-services-row">
          {[
            ["Custom Theme Design", "Plugin Setup & Integration"],
            ["SEO-Friendly Structure", "Mobile & Tablet Optimization"],
            ["E-Commerce with WooCommerce", "Security & Maintenance Support"],
          ].map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((item, colIndex) => (
                <Col
                  sm={6}
                  key={colIndex}
                  className={`service-col ${
                    rowIndex % 2 === 0 ? "bg-light-row" : "bg-dark-row"
                  }`}
                >
                  <div className="d-flex align-items-center p-3">
                    <img
                      src="/images/LogoBrandingIcon.svg"
                      alt="icon"
                      className="me-3"
                      width={20}
                      height={20}
                    />
                    <span>{item}</span>
                  </div>
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WordPress;
