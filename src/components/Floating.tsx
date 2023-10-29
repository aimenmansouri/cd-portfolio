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
          <div className="bg-slate-600/30 h-full p-3 rounded-b border border-t-0 border-slate-900">
            <div className="text-green-400 text-lg">
              <ul>
                <li>cd dirName: enter directory</li>
                <li>ls : list current dir content</li>
                <li>cat fileName : read file</li>
                <li>clear : clear command line</li>
                <li className="flex items-center">
                  Use
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                  and
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                  to browse commands history
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Floating;
