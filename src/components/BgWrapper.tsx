import React, { useState, useEffect, ReactNode } from "react";

interface BackgroundImageSwitcherProps {
  imageArray: string[];
  interval?: number;
  className?: string;
  children?: ReactNode;
  dark: boolean;
}

const BackgroundImageSwitcher: React.FC<BackgroundImageSwitcherProps> = ({
  imageArray,
  interval = 10000,
  className,
  children,
  dark,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (dark) {
      setCurrentImageIndex(1);
    } else {
      setCurrentImageIndex(0);
    }
    console.log(currentImageIndex);
  });

  const backgroundImageStyle = {
    backgroundImage: `url(${imageArray[currentImageIndex]})`,
  };

  return (
    <div
      className={className}
      style={{
        ...backgroundImageStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: `background-image ${interval}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageSwitcher;
