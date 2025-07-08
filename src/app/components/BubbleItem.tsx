"use client";
import { useState } from "react";
import Image from "next/image";

interface BubbleItemProps {
  iconSrc?: string;
  label?: string;
}

export default function BubbleItem({ iconSrc, label }: BubbleItemProps) {
  const [animationStyle, setAnimationStyle] = useState({});
  const [isAnimating, setIsAnimating] = useState(false); // 🔥 アニメ中フラグ

  const handleHover = () => {
    if (isAnimating) return; // 🔥 アニメ中は無視
    setIsAnimating(true);

    setAnimationStyle({ animation: "bubble-pop 0.4s ease-out" });

    setTimeout(() => {
      setAnimationStyle({});
      setIsAnimating(false); // 🔥 アニメ終了後に再度受け付け可能
    }, 400);
  };

  return (
    <div
      onMouseEnter={handleHover}
      style={animationStyle}
      className="flex flex-col items-center justify-center w-[115px] p-2 mr-[5px] bubble-container"
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={label || "icon"}
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