'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, AtSign } from 'lucide-react';
import './ClosingSection.css';

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.23, 1, 0.32, 1] as const },
  },
});

// Brand icons (not available in lucide-react)
const LinkedInIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:abelbijugeorge@gmail.com',
    icon: Mail,
    display: 'abelbijugeorge@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abelbijugeorge',
    icon: LinkedInIcon,
    display: 'linkedin.com/in/abelbijugeorge',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/abelbijugeorge',
    icon: GitHubIcon,
    display: 'github.com/abelbijugeorge',
    external: true,
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/abel-721-bela',
    icon: AtSign,
    display: 'bsky.app/abel-721-bela',
    external: true,
  },
];

// ═══════════════════════════════════════════════════
//  AMBIENT PARTICLES
// ═══════════════════════════════════════════════════

const AmbientParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      alphaDir: number;
    }

    const particles: Particle[] = [];
    const COUNT = 35;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * (w / window.devicePixelRatio),
          y: Math.random() * (h / window.devicePixelRatio),
          r: Math.random() * 1.2 + 0.3,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.08,
          alpha: Math.random() * 0.3 + 0.05,
          alphaDir: (Math.random() - 0.5) * 0.003,
        });
      }
    };

    const draw = () => {
      const cw = w / window.devicePixelRatio;
      const ch = h / window.devicePixelRatio;
      ctx.clearRect(0, 0, cw, ch);

      // Detect theme for adaptive particle colors
      const isWarm = document.documentElement.getAttribute('data-theme') === 'warm';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;

        if (p.alpha <= 0.03 || p.alpha >= 0.35) p.alphaDir *= -1;
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;
        if (p.y < -10) p.y = ch + 10;
        if (p.y > ch + 10) p.y = -10;

        // Warm mode: amber-tinted atmospheric, slightly brighter
        // Cool mode: soft white atmospheric
        const alpha = isWarm ? p.alpha * 0.8 : p.alpha;
        const color = isWarm
          ? `rgba(200, 160, 100, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;

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
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="closing-particles" />;
};

// ═══════════════════════════════════════════════════
//  DISCORD ICON (custom inline SVG since lucide doesn't have it)
// ═══════════════════════════════════════════════════

const DiscordIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7.76 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M15.27 5.52A12.5 12.5 0 0 0 12 5a12.5 12.5 0 0 0-3.27.52 17.9 17.9 0 0 0-3.57 4.95A16.84 16.84 0 0 0 4 15.56s1.31 2.25 5.8 2.44a6.62 6.62 0 0 0 1.12-1.56 9.44 9.44 0 0 1-2.86-1.22l.34-.27a8.76 8.76 0 0 0 7.2 0l.34.27a9.44 9.44 0 0 1-2.86 1.22 6.62 6.62 0 0 0 1.12 1.56c4.49-.19 5.8-2.44 5.8-2.44a16.84 16.84 0 0 0-1.16-5.09 17.9 17.9 0 0 0-3.57-4.95Z" />
  </svg>
);

// ═══════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════

const ClosingSection: React.FC = () => {
  return (
    <section id="closing" className="closing-section">
      {/* Atmosphere */}
      <div className="closing-atmosphere">
        <div className="closing-grain" />
        <div className="closing-glow" />
        <AmbientParticles />
      </div>

      <div className="closing-content">
        {/* ─── Editorial Layout ─── */}
        <div className="closing-grid">

          {/* Left: Cinematic Statement */}
          <div className="closing-left">
            <motion.h2
              className="closing-statement"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.1)}
            >
              Still building.<br />
              Still learning.<br />
              Still becoming.
            </motion.h2>

            <motion.p
              className="closing-vision"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.3)}
            >
              I&rsquo;m excited by systems that blend technology, creativity, and
              human-centered thinking — especially where innovation can create
              meaningful real-world impact. The journey ahead is about building
              products people genuinely connect with, and growing through every
              challenge along the way.
            </motion.p>
          </div>

          {/* Right: Contact */}
          <motion.div
            className="closing-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp(0.4)}
          >
            <span className="closing-contact-label">Get in Touch</span>

            <div className="closing-links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="closing-link"
                  >
                    <Icon size={15} />
                    <span className="closing-link-text">{link.display}</span>
                  </a>
                );
              })}

              {/* Discord (custom icon) */}
              <a
                href="https://discord.com/invite/spirit07bruhh"
                target="_blank"
                rel="noopener noreferrer"
                className="closing-link"
              >
                <DiscordIcon size={15} />
                <span className="closing-link-text">discord/spirit07bruhh</span>
              </a>
            </div>

            <motion.p
              className="closing-availability"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.55)}
            >
              Open to opportunities, collaborations, and meaningful conversations.
            </motion.p>
          </motion.div>
        </div>

        {/* ─── Bottom Credit ─── */}
        <motion.div
          className="closing-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.6)}
        >
          <span className="closing-credit">
            Designed & built by Abel Biju George
          </span>
          <span className="closing-year">© {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
