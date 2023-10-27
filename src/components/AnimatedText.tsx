import React, { useState, useEffect } from "react";
import { Pixelify_Sans as font } from "next/font/google";

const a = font({ subsets: ["latin"], weight: ["400"] });

interface AnimatedTextProps {
  textArray: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ textArray }) => {
  return (
    <div className={`${a.className} w-fit p-3 rounded-lg`}>
      <div className="text-slate-200 font-bold text-5xl">
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
        <span>hi</span>
      </div>
    </div>
  );
};

export default AnimatedText;
