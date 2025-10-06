import React from "react";
import { Container } from "react-bootstrap";
import WorkItem from "./WorkItem";
import Image from "next/image";

const RecentWork = () => {
  return (
    <div className="recent-work">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1200}
        height={800}
        className="ellipse-recentwork"
      />
      <Container>
        <h1 className="text-center  web-title">
          Our Recent UI/UX Design Works
        </h1>
        <WorkItem />
      </Container>
    </div>
  );
};

export default RecentWork;
