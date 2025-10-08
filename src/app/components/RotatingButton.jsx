"use client";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

export default function RotatingButton() {
  return (
    <div className="relative flex items-center justify-center w-36 h-36 cursor-pointer group">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fontSize="8.5"
            letterSpacing="4"
            fontWeight="600"
            className="fill-black"
          >
            <textPath href="#circlePath" startOffset="0%">
              • FEATURED PRODUCT • FEATURED PRODUCT •
            </textPath>
          </text>
        </svg>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md"
      >
        <ThumbsUp className="w-6 h-6 text-black group-hover:text-gray-600 transition-colors duration-300" />
      </motion.div>
    </div>
  );
}
