import React from "react";
import MiniNavbar from "./MiniNavBar";

interface FloatingProps {
  setShowFloating: Function;
}
function Floating(props: FloatingProps) {
  return (
    <div className="absolute h-full w-full bg-bg-white/20 backdrop-blur-sm z-50">
      <div className="flex items-center h-screen justify-center">
        <div className="h-[400px] w-[800px] absolute">
          <MiniNavbar setShowFloating={props.setShowFloating} />
          <div className="bg-white/10 h-full p-3 rounded-b border border-t-0 border-slate-900">
            <button onClick={() => props.setShowFloating(false)}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floating;
