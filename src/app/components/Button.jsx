"use client";
import React, { useState } from "react";

const Button = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // effect
    const moveX = (e.clientX / window.innerWidth - 0.5) * 160;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 160;

    setOffset({ x: moveX, y: moveY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="flex justify-center items-center h-screen"
    >
      <button
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
        className="
          w-28 h-28 
          rounded-full 
          bg-blue-600 
          text-white 
          text-sm 
          flex items-center justify-center 
          transition-transform duration-300 ease-out
        "
      >
        send it
      </button>
    </div>
  );
};

export default Button;
