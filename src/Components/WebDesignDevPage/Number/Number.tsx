import Counter from "@/Components/Counter/Counter";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const Number = () => {
  return (
    <div className="number">
      {/* <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1200}
        height={800}
        className="ellipse-number"
      /> */}
      <Container>
        <div className="number-heading">
          <Row>
            <Col md={6}>
              <h2>
                Number <br /> Don’t lie
              </h2>
            </Col>
            <Col md={6}>
              <p>
                Trusted by hundreds of businesses to deliver websites that
                perform and grow with them.
              </p>
            </Col>
          </Row>
        </div>
        <Counter />
      </Container>
    </div>
  );
};

export default Number;
