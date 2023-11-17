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
    const preloadImages = () => {
      imageArray.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, [imageArray]);

  useEffect(() => {
    const switchImage = () => {
      if (dark) {
        setCurrentImageIndex(1);
      } else {
        setCurrentImageIndex(0);
      }
    };

    switchImage();

    const intervalId = setInterval(switchImage, interval * 1000);

    return () => clearInterval(intervalId);
  }, [dark, interval]);

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
