import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const processData = [
  {
    img: "/assets/images/process-01.png",
    step: "Step 1",
    title: "Brand Discovery",
    desc: "This stage uncovers your goals, audience, and product challenges. It helps define what makes your brand or platform unique, whether you're building fintech tools, improving an ecommerce experience, or shaping hotel website design in Lisbon.",
  },
  {
    img: "/assets/images/process-02.png",
    step: "Step 2",
    title: "Market & Competitor Research",
    desc: "Industry patterns, user expectations, and competitive gaps are analyzed to reveal opportunities. The research keeps your product aligned with the future of UI/UX design and strengthens your position in a growing digital landscape.",
  },
  {
    img: "/assets/images/process-03.png",
    step: "Step 3",
    title: "Visual Exploration",
    desc: "Early creative directions, moodboards, and style studies help clarify how your brand should look and feel. This step is especially important as the importance of UI UX design service for e-commerce businesses continues to rise.",
  },
];

const Process = () => {
  
  return (
    <div className="pt-120 process-loc">
      <Container>
        <div className="d-flex justify-content-between gap-2 flex-wrap">
          <h2 className="loc-title">Our Strategic Branding & Identity Design Process</h2>
          <p className="loc-des">
            A clear, structured approach that guides brands and digital products
            from early understanding to refined execution. Each stage supports
            better decisions for SaaS, fintech, ecommerce, and hospitality teams
            in Lisbon.
          </p>
        </div>

        <div className="pt-60">
          <Row className="">
            {processData.map((item, index) => (
              <Col lg={4} md={6} xs={12} key={index} className="mb-4 gap-4">
                <div className="card-custom process-card ">
                  <img src={item.img} alt={item.title} className="process-img" />
                  <span className="step-tag">{item.step}</span>
                  <h4 className="process-title">{item.title}</h4>
                  <p className="process-desc">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Process;
