'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Orb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  angle: number;
  size: number;
  color: string;
  speed: number;
  isFollowMouse?: boolean;
}

export const ProjectAnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<Orb[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize particles - Different colors for project pages
    const initializeParticles = () => {
      particlesRef.current = [];
      const particleCount = 35;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.4 + 0.15,
          color: Math.random() > 0.5 ? '#a3e635' : '#a78bfa', // Green and Purple
        });
      }
    };

    // Initialize glowing orbs - Smaller and fewer orbs
    const initializeOrbs = () => {
      orbsRef.current = [
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.5,
          baseX: canvas.width * 0.2,
          baseY: canvas.height * 0.5,
          angle: 0,
          size: 100,
          color: '#a78bfa',
          speed: 0.0006,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.3,
          baseX: canvas.width * 0.8,
          baseY: canvas.height * 0.3,
          angle: Math.PI,
          size: 70,
          color: '#a3e635',
          speed: 0.0005,
        },
        {
          x: 0,
          y: 0,
          baseX: 0,
          baseY: 0,
          angle: 0,
          size: 40,
          color: '#818cf8',
          speed: 0,
          isFollowMouse: true,
        },
      ];
    };

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Draw glowing circle with blur
    const drawGlowingOrb = (x: number, y: number, size: number, color: string, hasInnerCircle: boolean = true) => {
      // Create gradient
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color + '30');
      gradient.addColorStop(0.5, color + '15');
      gradient.addColorStop(1, color + '00');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Inner glow (only for orbs that need it)
      if (hasInnerCircle) {
        ctx.strokeStyle = color + '50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.25, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Add subtle glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 5;
    };

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x - particle.size < 0 || particle.x + particle.size > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        }
        if (particle.y - particle.size < 0 || particle.y + particle.size > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
        }

        // Mouse interaction - Reduced effect
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.15;
          particle.vy -= Math.sin(angle) * 0.15;
          particle.opacity = Math.min(0.8, particle.opacity + 0.03);
        } else {
          particle.opacity = Math.max(
            0.15,
            particle.opacity - 0.01
          );
        }

        // Limit velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 1.5) {
          particle.vx = (particle.vx / speed) * 1.5;
          particle.vy = (particle.vy / speed) * 1.5;
        }
      });
    };

    // Update orbs
    const updateOrbs = () => {
      const mouse = mouseRef.current;
      orbsRef.current.forEach((orb, index) => {
        if (index < 2) {
          // First 2 orbs move in circular pattern - Slower
          orb.angle += orb.speed;
          orb.x = orb.baseX + Math.cos(orb.angle) * 40;
          orb.y = orb.baseY + Math.sin(orb.angle) * 25;
        } else {
          // Third orb follows mouse - Gentler
          const dx = mouse.x - orb.x;
          const dy = mouse.y - orb.y;
          orb.x += dx * 0.05;
          orb.y += dy * 0.05;
        }
      });
    };

    // Animation loop
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clear shadow for clean rendering
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      updateOrbs();
      updateParticles();

      // Draw orbs
      orbsRef.current.forEach((orb) => {
        const hasInnerCircle = !orb.isFollowMouse;
        drawGlowingOrb(orb.x, orb.y, orb.size, orb.color, hasInnerCircle);
      });

      // Draw particles
      particlesRef.current.forEach((particle) => {
        drawParticle(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initializeParticles();
    initializeOrbs();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
};
