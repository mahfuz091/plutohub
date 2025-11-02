import Image from 'next/image';
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Benefits = () => {
     const processSteps = [
        {
          id: 1,
          icon: "/images/LogoBranding/Strategic.svg",
          title: "Strategic Brand Clarity",
          des: "Clear branding communicates who you are and what you stand for. Our branding design service aligns your visual identity with your mission, helping you attract the right audience with a focused, consistent brand message.",
        },
        {
          id: 2,
          icon: "/images/LogoBranding/Professional.svg",
          title: "Professional Visual Identity",
          des: "A strong identity makes your brand instantly recognizable. We design cohesive logo systems, typography, color palettes, and visuals that work together seamlessly across all platforms to create a polished and professional presence.",
        },
        {
          id: 3,
          icon: "/images/LogoBranding/Credibility.svg",
          title: "Credibility & Trust Building",
          des: "Consistent branding builds trust. With our corporate design services, your business will present a unified, reliable image that boosts confidence and credibility in the minds of customers and partners alike.",
        },
        {
          id: 4,
          icon: "/images/LogoBranding/Differentiation.svg",
          title: "Differentiation in the Market",
          des: "In crowded industries, standing out is key. Our branding and identity design services position your brand strategically, creating a distinct voice and look that separates you from competitors and captures attention.",
        },
        {
          id: 5,
          icon: "/images/LogoBranding/Scalable.svg",
          title: "Scalable Design Systems",
          des: "Whether you're a startup or scaling enterprise, we create flexible branding systems that grow with you. Our brand design service ensures your identity looks great across all media, from web to print..",
        },
        {
          id: 6,
          icon: "/images/LogoBranding/Increased.svg",
          title: "Increased Brand Recognition",
          des: "Memorable brands win loyalty. Through thoughtful logo design and strategic visuals, we create identities that are instantly recognizable and easy to recall, boosting visibility and long-term recognition in your market.",
        },
      ];
    return (
        <div className='benefits'>
           
                  <Image
                    src="/images/idu.png"
                    alt="yellow ellipse"
                    width={1200}
                    height={800}
                    className=" ellipse-benefits"
                  />
                  <Image src="/images/LogoBranding/benefits-vector.png"
                    alt="yellow ellipse"
                    width={390}
                    height={403}
                    className=" ellipse-benefits-vector"
                  />
                  <Image src="/images/contact-vector.png"
                    alt="yellow ellipse"
                    width={390}
                    height={403}
                    className="ellipse-benefits-vector-2"
                  />
            <Container>

                <div className="benefits-header text-center">
                    <h1 className="">Benefits of Our Logo & Branding Services</h1>
                    <p className="gray">Our branding design service helps you craft a memorable identity that communicates your values and builds trust. From logo creation to full brand systems, we ensure your brand looks sharp and performs with purpose.</p>
                </div>


                 <Row className="g-4">
          {processSteps.map((step) => (
            <Col key={step.id} xs={12} sm={6} lg={4}>
              <div key={step.id} className="">
              <div className="process-card  ">
                <img src={step.icon} alt={step.title} className="mb-3" />
                <h5 className="heading">{step.title}</h5>
                <p className="description">{step.des}</p>
              </div>
            </div>
            </Col>
          ))}
        </Row>





            </Container>
        </div>
    );
};

export default Benefits;