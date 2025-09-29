import Image from "next/image";
import React, { useState } from "react";

interface FilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="filter d-flex justify-content-center ">
      
      <button
        className={activeCategory === "" ? "active" : ""}
        onClick={() => handleClick("")}
      >
        All Blogs
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
