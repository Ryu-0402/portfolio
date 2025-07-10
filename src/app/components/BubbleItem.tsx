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

    setAnimationStyle({ animation: "bubble-pop 0.6s ease-out" });

    setTimeout(() => {
      setAnimationStyle({});
      setIsAnimating(false);
    }, 500);
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
      className="flex flex-col items-center justify-center w-[115px] p-2 mr-[5px] bubble-container cursor-pointer"
    >
      {iconComponent && iconComponent}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={altText}
          width={60}
          height={60}
        />
      )}
      {label && (
        <p className="text-[12px] text-center mt-1">{label}</p>
      )}
    </div>
  );
}