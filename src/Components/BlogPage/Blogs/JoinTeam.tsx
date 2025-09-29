import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../Banner/Buttons';

const JoinTeam = () => {
    return (
        <div className="join blog-join mb-5">
            <Container>
        <div className=" team-container ">
        <Row className="align-items-center ">
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
          <Col sm={6} className="">
            <h5 className="team-5">
              Thrive, Build, and Belong  at PlutoHub
            </h5>
            <p className="team-p">
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
        </div>
    );
};

export default JoinTeam;