"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  item: {
    id: string;
    postSlug: string;
    bannerAltText: string;
    title: string;
    category: string;
    image: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isVisible ? "appear" : ""}`}>
      <Link href={`/blog/${item.postSlug}`} className='blog-card-link'>
        <div className='blog-card'>
          <Image
            src={item.image}
            alt={item.bannerAltText}
            height={220}
            width={390}
          />
          <div className='blog-card-text'>
            <span>{item.category}</span>
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
