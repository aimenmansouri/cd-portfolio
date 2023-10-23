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
        <div className="md:h-[400px] md:w-[800px] w-11/12 h-4/6 mx-20 md:m-0 absolute">
          <MiniNavbar setShowFloating={props.setShowFloating} />
          <div className="bg-white/50 h-full p-3 rounded-b border border-t-0 border-slate-900">
            <button onClick={() => props.setShowFloating(false)}>close</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Floating;
