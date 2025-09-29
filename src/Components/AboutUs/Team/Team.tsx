'use client'
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../Banner/Buttons";

const Team = () => {
  const data = [
    
    {
      img: "/images/shahin.png",
      name: "Shahinul Islam",
      post: "Founder & CEO",
    },
    {
      img: "/images/MahmudKabir.png",
      name: "Mahmud Kabir",
      post: "Co-Founder & COO",
    },
    {
      img: "/images/Mehedi.png",
      name: "Mehedi Hasan",
      post: "Product Designer",
    },
    {
      img: "/images/ux.png",
      name: "Saiful Islam",
      post: "UI/UX Designer",
    },
    
  ];

  return (
    <section className="team ">
      <Container>
        <h5 className="text-center mb-5">Meet Our Team</h5>
        <Row className="g-4 justify-content-center">
          {data.map((member, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <div className="team-card text-center">
               <div>
                 <Image
                  src={member.img}
                  width={267}
                  height={260}
                  alt={member.name}
                  className=" "
                  layout="responsive"
                />
               </div>
                <h6 className="name">{member.name}</h6>
                <p className="post">{member.post}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <div className=" team-container ">
        <Row className="align-items-center">
          <Col sm={5}>
            <Image
              src="/images/team.png"
              width={400.94}
              height={418.4}
              alt="team"
               layout="responsive" 
              
               className="teamimg"
            />
          </Col>
          <Col sm={7} className="">
            <h5 className="team-5">
              Thrive, Build, and Belong  at PlutoHub
            </h5>
            <p>
              Step into a workplace where your ideas matter. At PlutoHub, we
              nurture individual talent while working as one bold, creative
              team. Here, your growth, passion, and impact shape tomorrow's best
              digital experiences.
            </p>
            <Buttons links="#" btnText="Join Our Team" />
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default Team;
