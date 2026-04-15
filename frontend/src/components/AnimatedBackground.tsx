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

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<Orb[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const fadeInProgressRef = useRef(0); // Track fade-in animation (0 to 1)
  const startTimeRef = useRef(0);

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

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = [];
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 0.5,
          opacity: 0, // Start with 0 opacity for fade-in effect
          color: Math.random() > 0.5 ? '#a3e635' : '#60a5fa',
        });
      }
    };

    // Initialize glowing orbs
    const initializeOrbs = () => {
      orbsRef.current = [
        {
          x: canvas.width * 0.3,
          y: canvas.height * 0.4,
          baseX: canvas.width * 0.3,
          baseY: canvas.height * 0.4,
          angle: 0,
          size: 150,
          color: '#a3e635',
          speed: 0.001,
        },
        {
          x: canvas.width * 0.7,
          y: canvas.height * 0.6,
          baseX: canvas.width * 0.7,
          baseY: canvas.height * 0.6,
          angle: Math.PI,
          size: 100,
          color: '#60a5fa',
          speed: 0.0008,
        },
        {
          x: 0,
          y: 0,
          baseX: 0,
          baseY: 0,
          angle: 0,
          size: 30,
          color: '#3dd606',
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
    const drawGlowingOrb = (x: number, y: number, size: number, color: string, hasInnerCircle: boolean = true, fadeInProgress: number = 1) => {
      // Create gradient
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      const alpha40 = Math.round(64 * fadeInProgress); // 64 = 255 * 0.25 (40 in hex)
      const alpha20 = Math.round(32 * fadeInProgress); // 32 = 255 * 0.125 (20 in hex)
      
      gradient.addColorStop(0, color + alpha40.toString(16).padStart(2, '0'));
      gradient.addColorStop(0.5, color + alpha20.toString(16).padStart(2, '0'));
      gradient.addColorStop(1, color + '00');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Inner glow (only for orbs that need it)
      if (hasInnerCircle) {
        const alpha60 = Math.round(96 * fadeInProgress); // 96 = 255 * 0.375 (60 in hex)
        ctx.strokeStyle = color + alpha60.toString(16).padStart(2, '0');
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Add glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 8;
    };

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const fadeInProgress = fadeInProgressRef.current;

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

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.2;
          particle.vy -= Math.sin(angle) * 0.2;
          particle.opacity = Math.min(
            (Math.random() * 0.5 + 0.2) * fadeInProgress, 
            particle.opacity + 0.05
          );
        } else {
          particle.opacity = Math.max(
            (Math.random() * 0.5 + 0.2) * fadeInProgress * 0.5,
            particle.opacity - 0.01
          );
        }

        // Limit velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2;
          particle.vy = (particle.vy / speed) * 2;
        }
      });
    };

    // Update orbs
    const updateOrbs = () => {
      const mouse = mouseRef.current;
      orbsRef.current.forEach((orb, index) => {
        if (index < 2) {
          // First 2 orbs move in circular pattern
          orb.angle += orb.speed;
          orb.x = orb.baseX + Math.cos(orb.angle) * 50;
          orb.y = orb.baseY + Math.sin(orb.angle) * 30;
        } else {
          // Third orb follows mouse
          const dx = mouse.x - orb.x;
          const dy = mouse.y - orb.y;
          orb.x += dx * 0.08;
          orb.y += dy * 0.08;
        }
      });
    };

    // Animation loop
    const animate = () => {
      // Calculate fade-in progress (2500ms = 2.5 seconds)
      const currentTime = performance.now();
      if (startTimeRef.current === 0) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;
      const fadeInDuration = 2500; // 2.5 seconds fade-in
      fadeInProgressRef.current = Math.min(1, elapsedTime / fadeInDuration);

      // Clear with dark background
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clear shadow for clean rendering
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      updateOrbs();
      updateParticles();

      // Draw orbs with fade-in effect
      orbsRef.current.forEach((orb) => {
        const hasInnerCircle = !orb.isFollowMouse;
        drawGlowingOrb(orb.x, orb.y, orb.size, orb.color, hasInnerCircle, fadeInProgressRef.current);
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
