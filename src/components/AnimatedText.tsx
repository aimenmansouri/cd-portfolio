import React, { useState } from "react";
import { Pixelify_Sans as font } from "next/font/google";
import { motion } from "framer-motion";

const a = font({ subsets: ["latin"], weight: ["400"] });

interface AnimatedTextProps {
  textArray: string[];
}

const container = {
  hidden: { opacity: 1, scale: 0, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ textArray }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className={`${a.className} w-fit p-3 rounded-lg`}>
      <div className="text-green-600 bg-black px-4 py-2 rounded-lg border-4 border-sky-500 font-bold text-5xl">
        <motion.span variants={container} initial="hidden" animate="visible">
          {textArray[index].split("").map((char, index) => (
            <motion.span className="" key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </div>
  );
};

export default AnimatedText;
