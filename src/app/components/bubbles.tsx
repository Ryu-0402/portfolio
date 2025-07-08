"use client";
import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  radius: number;
};

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // サイズ設定
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbleCount = 200;
    const bubbles: Bubble[] =[];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 , // 2 ~ 6 px
      });
    }

    // 泡を描画
    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let bubble of bubbles) {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      }
    };

    drawBubbles();

    // ウィンドウリサイズ対応
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBubbles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none blur-[1px]"
    />
  );
}