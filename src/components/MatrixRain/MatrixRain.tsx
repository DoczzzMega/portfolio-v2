"use client";

import { useEffect, useRef } from "react";
import styles from "./MatrixRain.module.scss";

const GLYPHS =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01010110100101";

const getFontSize = (width: number) => {
  if (width >= 7680) return 36; // 8K
  if (width >= 5120) return 28; // 5K
  if (width >= 3840) return 24; // 4K
  if (width >= 2560) return 20; // 1440p / wide
  if (width >= 1440) return 17;
  if (width >= 480) return 16;
  return 13; // tiny phones
};

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let drops: number[] = [];
    let fontSize = getFontSize(window.innerWidth);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      fontSize = getFontSize(window.innerWidth);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const cols = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };

    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const frameInterval = 1000 / 30;

    const draw = (now: number) => {
      animationId = requestAnimationFrame(draw);
      if (now - last < frameInterval) return;
      last = now;

      ctx.fillStyle = "rgba(0, 8, 20, 0.12)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(220, 255, 250, 0.95)";
        ctx.shadowColor = "rgba(0, 255, 229, 0.85)";
        ctx.shadowBlur = 8;
        ctx.fillText(char, x, y);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(0, 224, 208, 0.55)";
        ctx.fillText(char, x, y - fontSize);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
