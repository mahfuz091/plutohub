'use client'; // If using Next.js App Router

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const ClientlogoData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  image: require(`../../assets/logos/${i + 1}.png`),
}));
 
export default function LogoSlider() {
   
 

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;
    const speed = 50;

    gsap.to(marquee, {
      transform: 'translateX(-100%)',
      duration: totalWidth / speed,
      ease: 'none',
      repeat: -1,

    });
  }, []);

  return (
      <div className="client_logo_slider" ref={marqueeRef}>
        {[...ClientlogoData,...ClientlogoData].map((item, index) => (
          <div className="logo_slider_item" key={`${item.id}-${index}`} >
            <Image
               src={item.image}
            alt={`client-${item.id}`}/>
          </div>
        ))}
      </div>
  );
}
