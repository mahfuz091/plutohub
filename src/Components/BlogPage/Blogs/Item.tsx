"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  item: {
    id: string;
    postSlug: string;
    title: string;
    category: string;
    image: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(item);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isVisible ? "appear" : ""}`}>
      <Link href={`/blog/${item.postSlug}`} className='blog-card-link'>
        <div className='blog-card'>
          <Image src={item.image} alt={item.title} height={300} width={390} />
          <div className='blog-card-text'>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
