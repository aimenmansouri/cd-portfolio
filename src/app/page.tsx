"use client";

import Navbar from "@/components/NavBar";
import Floating from "@/components/Floating";
import { useState } from "react";

export default function Page() {
  const [showFloating, setShowFloating] = useState(false);
  return (
    <div className="relative site-back h-screen w-full bg-cover">
      {showFloating && <Floating />}
      <div className="flex h-screen items-center justify-center">
        <div className="h-3/4 w-2/3">
          <Navbar
            setShowFloating={setShowFloating}
            showFloating={showFloating}
          />
          <div className="h-full w-full backdrop-blur-xl bg-white/20 opacity-70 rounded-b"></div>
        </div>
      </div>
    </div>
  );
}
