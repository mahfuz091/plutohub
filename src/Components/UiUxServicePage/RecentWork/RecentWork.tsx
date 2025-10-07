"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const industries = [
  { img: "/images/LogoBranding/recent-work-4.png", title: "Crypto" },
  { img: "/images/LogoBranding/recent-work-2.png", title: "Travel" },
  { img: "/images/LogoBranding/recent-work-3.png", title: "Medical" },
  { img: "/images/LogoBranding/recent-work-5.png", title: "Finance" },
  { img: "/images/LogoBranding/recent-work-6.png", title: "Finance" },
  { img: "/images/LogoBranding/recent-work-1.png", title: "Finance" },
];

const RecentWork = () => {
    
  return (
    <div className="  recent-work-uiux">
         <Image
                src="/images/yellow.png"
                alt="yellow ellipse"
                width={1000}
                height={1200}
                className="ellipse-industries-uiux"
              />
      <Container>

        <Row>
            <Col md={4}><div className="industries-content  mb-5">
          <h1 className="web-title">Our Recent UI/UX <br/> Design Works</h1>
         
        </div>
            </Col>
            <Col md={8}>
             <Row className="g-4">
          {industries.map((item, index) => (
            <Col key={index}  sm={6} md={6}>
              <div className="industry-card position-relative overflow-hidden rounded-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  height={253.13}
                  width={337.5}
                  className=" "
                  layout="responsive"
                />
                
              </div>
            </Col>
          ))}
        </Row>
            </Col>
        </Row>
        

       
      </Container>
    </div>
  );
};

export default RecentWork;
