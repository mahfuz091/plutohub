"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CardServiceProps {
  icon: string;
  title: string;
  text: string;
}

const CardService: React.FC<CardServiceProps> = ({ icon, title, text }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.set(cardRef.current, { opacity: 0, y: 50, scale: 0.9 });
    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(cardRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
        });
      },
    });
  }, []);

  return (
    <div className="web_Services_fact_item p-4" ref={cardRef}>
      <div className="icon-wrapper mb-3 flex justify-center">
        <Image src={icon} alt={title} width={70} height={70} />
      </div>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
};

export default CardService;
