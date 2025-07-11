"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";

interface BubbleItemProps {
  iconSrc?: string;
  alt?: string;
  label?: string | ReactNode;
  iconComponent?: ReactNode;
  onClick?: () => void;
}

export default function BubbleItem({ iconSrc, alt, label, iconComponent, onClick }: BubbleItemProps) {
  const [animationStyle, setAnimationStyle] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationStyle({ animation: "bubble-pop 0.6s ease-in-out forwards" });

    setTimeout(() => {
      setAnimationStyle({});
      setIsAnimating(false);
    }, 450);
  };

  const altText =
    typeof alt === "string" && alt.trim() !== ""
      ? alt
      : typeof label === "string"
      ? label
      : "icon";

  return (
    <div
  onMouseEnter={handleHover}
  onClick={onClick}
  style={animationStyle}
  className="
    flex flex-col items-center justify-center
    bubble-container cursor-pointer
    transition-all duration-300
  "
>
     {iconComponent && (
        <div
          className="
            flex items-center justify-center
          "
          style={{
            width: "clamp(20px, 4vw, 70px)",
            height: "clamp(20px, 4vw, 70px)",
          }}
        >
          {iconComponent}
        </div>
      )}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={altText}
          width={42}
          height={42}
          className="
          "
          style={{
            width: "clamp(20px, 4vw, 70px)",
            height: "clamp(20px, 4vw, 70px)",
          }}
        />
      )}
      {label && (
        <p
          className="
          "
          style={{
            fontSize:"clamp(5.5px, 0.8vw, 20px)", 
            
          }}
        >
          {label}
        </p>
      )}
    </div>
  );
}