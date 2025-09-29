"use client";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const Drives = () => {
  const items = [
    {
      icon: "/images/noise.png",
      title: "Clarity Over Noise",
      text: "Great work begins with clear thinking. Every conversation, every decision, every design starts with purpose and intention, not fluff.",
    },
    {
      icon: "/images/thinking.png",
      title: "Strategic Thinking",
      text: "Behind every screen we design is a strategy built around real users, business goals, and digital momentum. Smart choices. Measurable results.",
    },
    {
      icon: "/images/design.png",
      title: "Design With Depth",
      text: "Good design looks nice. Great design works. We care about how things feel, flow, and function, not just how they appear.",
    },
    {
      icon: "/images/fast.png",
      title: "Fast Without the Chaos",
      text: "We move fast, but never lose. With a solid process and proactive communication, we deliver speed and stability side-by-side.",
    },
  ];

  return (
    <section
      className="drives"
    >
      <Container>
        <Row>
          <Col sm={4}>
            <Image
              src="/images/Drives-bg2.png"
              width={700}
              height={600}
              alt="blub"
              className="drives-bg"
            />
            <h5 className="">
              What Drives Us <br className="br-option" /> Forward
            </h5>
          </Col>
          <Col sm={8}>
            {items.map((item, index) => (
               <Container  key={index}>
                <Row key={index} className="drive-card">
                <Col sm={6} className="d-flex align-items-center">
                  <div className="drive-icon">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="drive-content">
                    <h6>{item.title}</h6>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="drive-content">
                    <p>{item.text}</p>
                  </div>
                </Col>
              </Row>
               </Container> 
              
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Drives;
