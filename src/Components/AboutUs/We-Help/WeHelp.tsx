'use client'
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const WeHelp = () => {
  return (
    <section
      className="wehelp"
    >
      <Container>
        <Row>
          <div className="">
            
          </div>
          <Col xs={12} md={6}>
            <h5>We Help Digital Products Grow With Purpose</h5>
          </Col>
          <Col xs={12} md={6}>
            <p>
              At Plutohub, we're a team of thinkers, creators, and
              problem-solvers on a mission to craft design that actually works.
            </p>
            <p>
              From SaaS tools to mobile apps, we create intuitive,
              human-centered experiences that drive real business outcomes.
            </p>
          </Col>
        </Row>
      </Container>

      <Container >
        <Row className="gx-1">
          <Col xs={12} xl={8} className="mb-3 mb-xl-0">
            <Image
              src="/images/employe.png"
              width={800}
              height={400}
              alt="screw"
              style={{ maxWidth: "100%", height: "auto" }}
              className="weHelpImg"
            />
          </Col>
          <Col xs={12} xl={4}>
            <Image
              src="/images/office1.png"
              width={420}
              height={400}
              alt="screw"
              style={{ maxWidth: "100%", height: "auto" }}
              className="weHelpImg"
            />
          </Col>
        </Row>
      </Container>

      <Container >
        <Row className="align-items-end missionVision">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <Image
              src="/images/office2.png"
              width={560}
              height={600}
              alt="screw"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="mission">
              <h5>Our Mission</h5>
              <p>
                At Plutohub, our mission is to design digital products that are
                not only visually appealing but also purpose-driven. We aim to
                simplify complexity through intuitive UX, help brands
                communicate clearly, and empower teams with scalable,
                user-first design systems.
              </p>
            </div>
            <div className="vision">
              <h5>Our Vision</h5>
              <span className="visiontext1">
                We envision a digital world where every product feels effortless
                to use and deeply connected to the people it serves. At
                Plutohub, our vision is to lead the future of design by shaping
                interfaces that are not just visually appealing but
                strategically built for clarity, usability, and growth. 
              </span>
              <br />
              <br />
              <span className="visiontext2">
                We aspire to be the go-to design partner for startups, SaaS
                platforms, and innovation-driven teams worldwide, recognized
                for creating scalable, user-centered solutions that address
                real-world problems.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeHelp;
