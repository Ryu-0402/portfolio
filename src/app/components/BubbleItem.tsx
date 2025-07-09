"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";

interface BubbleItemProps {
  iconSrc?: string;
  label?: string;
  iconComponent?:ReactNode
}

export default function BubbleItem({ iconSrc, label,iconComponent }: BubbleItemProps) {
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
      {iconComponent && iconComponent}
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