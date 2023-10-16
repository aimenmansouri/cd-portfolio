import React, { useState } from "react";

function Floating() {
  const [position, setPosition] = useState({ top: 100, left: 100 });
  let dragOffset = { x: 0, y: 0 };

  const handleMouseDown = (e) => {
    const offsetX = e.clientX - position.left;
    const offsetY = e.clientY - position.top;
    dragOffset = { x: offsetX, y: offsetY };

    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseUp(e) {
      setPosition({
        top: e.clientY - dragOffset.y,
        left: e.clientX - dragOffset.x,
      });
      document.removeEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div className="absolute h-full w-full">
      <div className="relative">
        <div
          className="h-32 w-40 bg-white absolute z-40"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
}

export default Floating;
