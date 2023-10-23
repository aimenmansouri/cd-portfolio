import React, { useState, useEffect, ReactNode } from "react";

interface BackgroundImageSwitcherProps {
  imageArray: string[];
  interval?: number;
  className?: string;
  children?: ReactNode;
}

const BackgroundImageSwitcher: React.FC<BackgroundImageSwitcherProps> = ({
  imageArray,
  interval = 10000,
  className,
  children,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, imageArray]);

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
        transition: "background-image 1s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageSwitcher;
