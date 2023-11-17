import React from "react";
import MiniNavbar from "./MiniNavBar";
import { motion } from "framer-motion";
interface FloatingProps {
  setShowFloating: Function;
}
function Floating(props: FloatingProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className="absolute h-full w-full bg-bg-white/20 backdrop-blur-sm z-50"
    >
      <div className="flex items-center h-screen justify-center">
        <div className="md:w-fit h-fit w-11/12  mx-20 md:m-0 absolute">
          <MiniNavbar setShowFloating={props.setShowFloating} />
          <div className="bg-slate-600/50 h-full p-3 rounded-b border border-t-0 border-slate-900">
            <div className="text-green-400 text-lg max-w-sm">
              <p>
                Employing <strong>Next.js 13</strong>,{" "}
                <strong>Framer Motion</strong>, and <strong>Tailwind</strong>,
                this portfolio simulates a <strong>Linux terminal</strong>,
                utilizing a <strong>JSON file system</strong> as a disk for data
                access. Users can navigate through content using commands like
                &apos;
                <strong>cd dirname</strong>,&apos; &apos;<strong>ls</strong>
                &apos; for directory listing, and &apos;
                <strong>cat filename</strong>&apos; to read files. The interface
                replicates a <strong>command-line structure</strong>, offering
                an experience akin to navigating a{" "}
                <strong>Linux terminal</strong> within a website environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Floating;
