"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
}

const CONFIG = {
  count: 40,
  size: [2, 5],
  speed: [0.15, 0.4],
  opacity: [0.08, 0.35],
  wind: -0.08,
  sway: 0.3,
  maxDpr: 2,
};

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const runningRef = useRef(false);

  const createParticle = useCallback((width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * CONFIG.speed[1] + CONFIG.wind,
    vy: -CONFIG.speed[0] - Math.random() * (CONFIG.speed[1] - CONFIG.speed[0]),
    size: CONFIG.size[0] + Math.random() * (CONFIG.size[1] - CONFIG.size[0]),
    opacity: CONFIG.opacity[0] + Math.random() * (CONFIG.opacity[1] - CONFIG.opacity[0]),
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.01,
    life: 0,
    maxLife: 300 + Math.random() * 400,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const dpr = Math.min(window.devicePixelRatio, CONFIG.maxDpr);
    let destroyed = false;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    particlesRef.current = Array.from({ length: CONFIG.count }, () => {
      const p = createParticle(w, h);
      p.life = Math.random() * p.maxLife;
      return p;
    });

    const startLoop = () => {
      if (runningRef.current || destroyed) return;
      runningRef.current = true;

      const animate = () => {
        if (destroyed) return;

        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        ctx.clearRect(0, 0, width, height);

        particlesRef.current.forEach((p) => {
          p.life++;
          if (p.life > p.maxLife) {
            Object.assign(p, createParticle(width, height));
            p.y = height + 10;
          }

          p.x += p.vx + Math.sin(p.life * 0.01) * CONFIG.sway;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;

          const lifeRatio = p.life / p.maxLife;
          const fadeIn = Math.min(1, lifeRatio * 5);
          const fadeOut = lifeRatio > 0.8 ? 1 - (lifeRatio - 0.8) / 0.2 : 1;
          const alpha = p.opacity * fadeIn * fadeOut;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = "#d4a853";
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          if (p.x < -20 || p.x > width + 20 || p.y < -20) {
            Object.assign(p, createParticle(width, height));
            p.y = height + 10;
          }
        });

        rafRef.current = requestAnimationFrame(animate);
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };

    // IntersectionObserver gates the RAF loop — stops when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (destroyed) return;
        if (entry.isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas.parentElement || canvas);

    return () => {
      destroyed = true;
      stopLoop();
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}
