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
import AnimatedText from "@/components/AnimatedText";

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
  const imageArray: string[] = [
    "https://cdn.dynamicwallpaper.club/wallpapers/e4ynelwzzr6/thumbs/1600/1.jpg",
    "https://cdn.dynamicwallpaper.club/wallpapers/e4ynelwzzr6/thumbs/1600/3.jpg",
  ];

  const imageArray2: string[] = [
    "https://cdn.dynamicwallpaper.club/wallpapers/e4ynelwzzr6/thumbs/1600/1.jpg",
    "https://cdn.dynamicwallpaper.club/wallpapers/e4ynelwzzr6/thumbs/1600/2.jpg",
    "https://cdn.dynamicwallpaper.club/wallpapers/e4ynelwzzr6/thumbs/1600/3.jpg",
  ];

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
      {/*<div className="basis-[90px] flex items-center justify-center bg-slate-900/70 shadow-sm">
          <div className="h-fit space-y-6 px-3">
            {sideIcons.map((sideIcon) => (
              <SideIcon key={sideIcon.imageLink} {...sideIcon} />
            ))}
          </div>
        </div>*/}

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
