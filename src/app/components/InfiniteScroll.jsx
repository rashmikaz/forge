// components/InfiniteScroll.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    label: "Project delivered",
    bg: "bg-[#f8ebdd]",
  },
  {
    number: "11",
    label: "Years of experience",
    bg: "bg-[#e9ddf8]",
  },
  {
    number: "90%",
    label: "Project delivered",
    bg: "bg-black text-white",
  },
  {
    number: "25",
    label: "Years of experience",
    bg: "bg-white",
  },
];

export default function InfiniteScroll() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f6fafd] py-10">
      <motion.div
        className="flex gap-6 items-stretch"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-6 items-stretch">
            {stats.map((s, idx) => (
              <div
                key={`${copy}-${idx}`}
                className={`${s.bg} rounded-3xl px-6 flex flex-col items-center justify-center shadow-md whitespace-nowrap h-28`}
              >
                <span className="text-5xl font-black leading-tight [text-shadow:_0_0_1px_rgb(0_0_0_/_90%)]">
                  {s.number}
                </span>

                <span className="text-lg">{s.label}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
