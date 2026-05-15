'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Cloud, Disc } from 'lucide-react';

const LinkedinIcon = ({ size = 24, strokeWidth = 2, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, strokeWidth = 2, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socials = [
  { icon: Mail, href: 'mailto:abelbijugeorge@gmail.com', label: 'Mail' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/abelbijugeorge', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/abel_721_bela/', label: 'Instagram' },
  { icon: Cloud, href: 'https://bsky.app/profile/abel-721-bela', label: 'Bluesky' },
  { icon: Disc, href: 'https://discord.com/invite/spirit07bruhh', label: 'Discord' },
];

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      {socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-button"
            data-tooltip={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx + 1, duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.3)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={20} strokeWidth={1.5} />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
