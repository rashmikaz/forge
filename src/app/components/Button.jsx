"use client";

import React, { useState } from "react";

const Button = ({
  text = "Get in touch",
  size = 36,
  bgColor = "bg-blue-600",
  textColor = "text-white",
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 120;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 120;
    setOffset({ x: moveX, y: moveY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <button
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        className={`
          w-${size} h-${size} 
          rounded-full 
          ${bgColor} 
          ${textColor} 
          text-sm 
          flex items-center justify-center 
          transition-transform duration-300 ease-out
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
