"use client";

import Navbar from "@/components/NavBar";
import Floating from "@/components/Floating";
import { useState } from "react";
import { SideIconProps } from "@/components/SideIcon";
import SideIcon from "@/components/SideIcon";
import TopBar from "@/components/TopBar";
import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import BackgroundImageSwitcher from "@/components/BgWrapper";

export default function Page() {
  const [showFloating, setShowFloating] = useState(false);
  const sideIcons: SideIconProps[] = [
    {
      link: "https://github.com/aimenmansouri",
      imageLink: "/social/github.png",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/aymene-mansouri-a06b47288",
      imageLink: "/social/linkedin.png",
      name: "Linkedin",
    },
    {
      link: "https://twitter.com",
      imageLink: "/social/twitter.png",
      name: "X",
    },
    {
      link: "https://www.facebook.com/aimen.aimenrma",
      imageLink: "/social/facebook.png",
      name: "Facebook",
    },
  ];
  const imageArray: string[] = ["/bg/1.jpg", "/bg/3.jpg"];

  const [dark, setDark] = useState(false);
  return (
    <BackgroundImageSwitcher
      imageArray={imageArray}
      className="relative h-screen w-full bg-cover"
      interval={2}
      dark={dark}
    >
      <TopBar setDark={setDark} />
      {showFloating && <Floating setShowFloating={setShowFloating} />}
      <div className="absolute lg:block hidden bottom-0 right-0 text-slate-500 text-sm p-1">
        Built with 💙 by{" "}
        <a href="https://aymene.net" className="underline">
          Aymene Mansouri
        </a>
      </div>

      <div className="flex flex-col h-screen overflow-y-hidden">
        <div className="flex items-center h-full w-full">
          <div className="flex flex-col grow h-fit items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2,
                duration: 1,
              }}
              className="h-3/5 w-3/5 mx-auto lg:mt-32 mt-20"
            >
              <Navbar
                setShowFloating={setShowFloating}
                showFloating={showFloating}
              />
              <Terminal />
            </motion.div>
          </div>
        </div>
        <div className="mt-auto w-fit mx-auto over">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            <div className="flex mx-auto px-3 py-1 rounded-t-lg items-center justify-center bg-slate-900/70 shadow">
              {sideIcons.map((sideIcon, index) => (
                <motion.div
                  key={sideIcon.imageLink}
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5 + index / 4,
                    duration: 1,
                  }}
                >
                  <SideIcon {...sideIcon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundImageSwitcher>
  );
}
