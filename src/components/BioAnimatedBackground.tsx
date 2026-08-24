import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const BioAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Livestock Bio Particles (Rumen Microbes, Macsumsuk Bio-Minerals, Feed Fermentation Enzymes, Probiotic Spores)
    interface BioParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      type: 'mineral' | 'probiotic' | 'enzyme' | 'spore';
      color: string;
      glowColor: string;
      pulseSpeed: number;
      pulseOffset: number;
      orbitAngle: number;
      orbitSpeed: number;
      orbitRadius: number;
    }

    const particleCount = Math.min(Math.floor((width * height) / 28000), 28);
    const particles: BioParticle[] = [];

    // Very soft, high-transparency pastel bio palette (Emerald, Soft Teal, Warm Mineral Gold, Mint)
    const colorPalette = [
      { color: 'rgba(16, 185, 129, 0.22)', glow: 'rgba(52, 211, 153, 0.10)', type: 'probiotic' as const }, // Green Probiotic Node
      { color: 'rgba(13, 148, 136, 0.20)', glow: 'rgba(45, 212, 191, 0.08)', type: 'enzyme' as const },    // Teal Rumen Enzyme
      { color: 'rgba(217, 119, 6, 0.18)',  glow: 'rgba(245, 158, 11, 0.08)', type: 'mineral' as const },   // Macsumsuk Bio-Mineral Cation
      { color: 'rgba(34, 197, 94, 0.18)',  glow: 'rgba(134, 239, 172, 0.07)', type: 'spore' as const },     // Natural Ferment Spore
    ];

    for (let i = 0; i < particleCount; i++) {
      const palette = colorPalette[i % colorPalette.length];
      const baseRadius = 2 + Math.random() * 2.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.25,
        radius: baseRadius,
        baseRadius,
        type: palette.type,
        color: palette.color,
        glowColor: palette.glow,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: 0.006 + Math.random() * 0.012,
        orbitRadius: 12 + Math.random() * 20,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw Connection Filaments (Bio-fermentation & mineral bonding strands) - very faint & transparent
      const maxDistance = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.09;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);

            // Subtle organic curved bridge
            const midX = (particles[i].x + particles[j].x) / 2 + Math.sin(time + i) * 2;
            const midY = (particles[i].y + particles[j].y) / 2 + Math.cos(time + j) * 2;
            ctx.quadraticCurveTo(midX, midY, particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render Each Bio Particle with Organic Pulsing & Cellular Membrane
      particles.forEach((p) => {
        // Move with smooth, gentle floating drift
        p.x += p.vx + Math.sin(time * 0.4 + p.pulseOffset) * 0.15;
        p.y += p.vy + Math.cos(time * 0.35 + p.pulseOffset) * 0.12;

        // Wrap around boundaries
        if (p.x < -25) p.x = width + 25;
        if (p.x > width + 25) p.x = -25;
        if (p.y < -25) p.y = height + 25;
        if (p.y > height + 25) p.y = -25;

        // Soft pulsing radius
        const currentPulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset);
        p.radius = p.baseRadius + currentPulse * 0.8;

        // 1. Outer Soft Bio-luminescent Halo
        const glowRadius = Math.max(p.radius * 3, 6);
        const gradient = ctx.createRadialGradient(p.x, p.y, p.radius * 0.4, p.x, p.y, glowRadius);
        gradient.addColorStop(0, p.glowColor);
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // 2. Probiotic Micro-organism Capsule or Mineral Octahedron Outline
        if (p.type === 'probiotic' || p.type === 'spore') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.6, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        // 3. Core Bio Particle Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.radius, 0.8), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // 4. Orbiting Bio-Mineral Ion
        if (p.type === 'mineral' || p.type === 'enzyme') {
          p.orbitAngle += p.orbitSpeed;
          const satX = p.x + Math.cos(p.orbitAngle) * (p.baseRadius * 2.2);
          const satY = p.y + Math.sin(p.orbitAngle) * (p.baseRadius * 2.2);

          ctx.beginPath();
          ctx.arc(satX, satY, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(217, 119, 6, 0.25)';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* 1. Extremely Soft, Subtle Background Wash (Transparent & Gentle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-slate-50/30" />

      {/* 2. Floating Ambient Bio-Luminescence Orbs (Super Low Opacity) */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -18, 15, 0],
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.1, 0.92, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-teal-100/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 20, -25, 0],
          y: [0, -15, 20, 0],
          scale: [0.95, 1.05, 1, 0.95],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] rounded-full bg-amber-100/20 blur-3xl"
      />

      {/* 3. Subtle Livestock Bio & Natural Feed DNA / Mineral Hexagonal Wireframes (Faint 0.06 ~ 0.09 Opacity) */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-[0.08]">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          viewBox="0 0 100 100"
          className="w-full h-full text-emerald-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          {/* Bio-Mineral Mineral Crystalline Hexagon with Bio-nodes */}
          <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeDasharray="3 3" />
          <circle cx="50" cy="15" r="2" fill="currentColor" />
          <circle cx="80" cy="32" r="2" fill="currentColor" />
          <circle cx="80" cy="68" r="2" fill="currentColor" />
          <circle cx="50" cy="85" r="2" fill="currentColor" />
          <circle cx="20" cy="68" r="2" fill="currentColor" />
          <circle cx="20" cy="32" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="15" strokeWidth="0.4" strokeDasharray="2 2" />
        </motion.svg>
      </div>

      <div className="absolute bottom-10 left-8 w-40 h-40 opacity-[0.07]">
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          viewBox="0 0 100 100"
          className="w-full h-full text-teal-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          {/* Natural Gut Microbe / Probiotic Bio-Cycle ring */}
          <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(-30 50 50)" strokeDasharray="2 2" />
          <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(30 50 50)" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="25" cy="35" r="2" fill="currentColor" />
          <circle cx="75" cy="65" r="2" fill="currentColor" />
        </motion.svg>
      </div>

      {/* 4. Canvas for Animated Livestock Micro-organism & Mineral Nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-70" />
    </div>
  );
};

