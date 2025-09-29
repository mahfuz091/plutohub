"use client";

import React from "react";
import { HiArrowUp } from "react-icons/hi";

interface ButtonsProps {
  btnText?: string;
  links?: string;
  className?: string;
}

const Buttons = ({
  btnText = "Explore more",
  links = "/",
  className,
}: ButtonsProps) => {
  return (
    <a
      href={links}
      target='_blank'
      className={className ? className : "theme_btn"}
    >
      {btnText}
      <div className='arrow_icon'>
        <HiArrowUp />
      </div>
    </a>
  );
};

export default Buttons;
