"use client";

import Navbar from "@/components/NavBar";
import Floating from "@/components/Floating";
import { useState } from "react";
import { SideIconProps } from "@/components/SideIcon";
import SideIcon from "@/components/SideIcon";
import TopBar from "@/components/TopBar";
import { motion } from "framer-motion";

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
      {/*<div className="basis-[90px] flex items-center justify-center bg-slate-900/70 shadow">
          <div className="h-fit space-y-6 px-3">
            {sideIcons.map((sideIcon) => (
              <SideIcon key={sideIcon.imageLink} {...sideIcon} />
            ))}
          </div>
        </div>*/}

      <div className="flex flex-col h-screen">
        <div className="flex h-full items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="h-3/5 w-3/5 mx-auto mt-20"
          >
            <Navbar
              setShowFloating={setShowFloating}
              showFloating={showFloating}
            />
            <div className="h-full w-full px-3 py-1 backdrop-blur-[2px] bg-slate-900/75 rounded-b border border-t-0 border-slate-900 shadow-slate-900/20 shadow-md">
              <div className=" text-emerald-400">132</div>
              <div className=" text-green-400 flex space-x-2">
                <div className="">User@aymene.net : &gt; &gt;</div>
                <div className=" grow">
                  <input
                    type="text"
                    className="bg-transparent text-white outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-auto w-fit mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 1,
            }}
          >
            <div className="flex mx-auto px-3 py-1 rounded-t-lg items-center justify-center bg-slate-900/70 shadow">
              {sideIcons.map((sideIcon) => (
                <SideIcon key={sideIcon.imageLink} {...sideIcon} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
