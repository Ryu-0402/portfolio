"use client";
import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  lifeTime: number;
  age: number;
  depthLayer: number;
};

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bubbleCount = 150;
    const bubbles: Bubble[] = [];

    // clampを使って半径を計算
    const getResponsiveRadius = (baseRadius: number) => {
      const width = window.innerWidth;
      // clamp(最小値, 基準値, 最大値) の計算
      const minRadius = baseRadius * 0.6;  // 最小60%
      const maxRadius = baseRadius * 1.4;  // 最大140%
      const scaledRadius = baseRadius * (width / 1024); // 1024pxを基準とした比例
      
      return Math.max(minRadius, Math.min(maxRadius, scaledRadius));
    };

    const createBubble = (canvasWidth: number, canvasHeight: number): Bubble => {
      const depthLayer = 1 + Math.random() * 4; // 1 ~ 5
      const layerScale = 0.5 + (depthLayer - 1) * 0.15;
      const baseRadius = (0.5 + Math.random() * 3) * layerScale; // ランダム要素
      
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: getResponsiveRadius(baseRadius), // ランダムな基本半径をレスポンシブに調整
        speedY: (Math.random() - 0.5) * 0.2 * layerScale,
        speedX: (Math.random() - 0.5) * 0.2 * layerScale,
        opacity: 0.15 + 0.15 * (depthLayer / 5),
        lifeTime: 500 + Math.random() * 400,
        age: 0,
        depthLayer,
      };
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // バブル再生成
      bubbles.length = 0;
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push(createBubble(canvas.width, canvas.height));
      }
    };

    resizeCanvas();

    // 初回生成
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(createBubble(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = window.scrollY;

      for (let bubble of bubbles) {
        bubble.age += 1;
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        const offsetY = -scrollY * (1 / 1024) * (bubble.depthLayer * 50);

        // フェードイン・アウト
        if (bubble.age < bubble.lifeTime * 0.1) {
          bubble.opacity = (bubble.age / (bubble.lifeTime * 0.1)) * (0.15 + 0.15 * (bubble.depthLayer / 5));
        } else if (bubble.age > bubble.lifeTime * 0.9) {
          bubble.opacity = ((bubble.lifeTime - bubble.age) / (bubble.lifeTime * 0.1)) * (0.15 + 0.15 * (bubble.depthLayer / 5));
        } else {
          bubble.opacity = 0.15 + 0.15 * (bubble.depthLayer / 5);
        }

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y + offsetY, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
        ctx.fill();

        if (bubble.age >= bubble.lifeTime) {
          Object.assign(bubble, createBubble(canvas.width, canvas.height));
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none blur-[1px]"
    />
  );
}