'use client';

import React, { useEffect, useRef } from 'react';
import './AmbientBackground.css';

const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface MicroParticle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      alphaDir: number;
    }

    const particles: MicroParticle[] = [];
    const COUNT = 45;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth * dpr;
      h = canvas.offsetHeight * dpr;
      canvas.width = w;
      canvas.height = h;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          r: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.06,
          alpha: Math.random() * 0.15 + 0.02,
          alphaDir: (Math.random() - 0.5) * 0.002,
        });
      }
    };

    const draw = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      const isWarm = document.documentElement.getAttribute('data-theme') === 'warm';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;

        if (p.alpha <= 0.01 || p.alpha >= 0.18) p.alphaDir *= -1;
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;
        if (p.y < -10) p.y = ch + 10;
        if (p.y > ch + 10) p.y = -10;

        const color = isWarm
          ? `rgba(200, 160, 100, ${p.alpha})`
          : `rgba(255, 255, 255, ${p.alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="ambient-background" aria-hidden="true">
      {/* Layer 1: Gradient mesh orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />

      {/* Layer 2: Micro-particle field */}
      <canvas
        ref={canvasRef}
        className="ambient-particles-canvas"
      />

      {/* Layer 3: Grain texture */}
      <div className="ambient-grain" />

      {/* Layer 4: Edge vignette for depth */}
      <div className="ambient-vignette" />
    </div>
  );
};

export default AmbientBackground;
