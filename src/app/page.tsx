"use client";

import Navbar from "@/components/NavBar";
import Floating from "@/components/Floating";
import { useState } from "react";
import { SideIconProps } from "@/components/SideIcon";
import SideIcon from "@/components/SideIcon";
import TopBar from "@/components/TopBar";

export default function Page() {
  const [showFloating, setShowFloating] = useState(false);
  const sideIcons: SideIconProps[] = [
    {
      link: "https://github.com/aimenmansouri",
      imageLink: "/social/github.png",
      name: "Github",
    },
    {
      link: "https://github.com/aimenmansouri",
      imageLink: "/social/linkedin.png",
      name: "Github",
    },
    {
      link: "https://github.com/aimenmansouri",
      imageLink: "/social/twitter.png",
      name: "Github",
    },
    {
      link: "https://github.com/aimenmansouri",
      imageLink: "/social/facebook.png",
      name: "Github",
    },
  ];
  return (
    <div className="relative site-back h-screen w-full bg-cover">
      <TopBar />
      {showFloating && <Floating setShowFloating={setShowFloating} />}
      <div className="flex h-fit">
        <div className="basis-[90px] flex items-center justify-center bg-slate-900/70 shadow">
          <div className="h-fit space-y-6 px-3">
            {sideIcons.map((sideIcon) => (
              <SideIcon key={sideIcon.imageLink} {...sideIcon} />
            ))}
          </div>
        </div>
        <div className="flex grow h-screen items-center justify-center">
          <div className="h-3/4 w-2/3">
            <Navbar
              setShowFloating={setShowFloating}
              showFloating={showFloating}
            />
            <div className="h-full w-full backdrop-blur-xl bg-white/20 opacity-70 rounded-b border border-t-0 border-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
