import React, { useEffect, useRef } from 'react';

interface EnergyTrailsCanvasProps {
  intensity?: 'high' | 'medium' | 'low';
  className?: string;
}

export const EnergyTrailsCanvas: React.FC<EnergyTrailsCanvasProps> = ({
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = intensity === 'high' ? 38 : intensity === 'medium' ? 24 : 12;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      color: string;
      pulseSpeed: number;
    }> = [];

    const colors = ['#0E7490', '#0D9488', '#06B6D4', '#F59E0B', '#D97706'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.08,
        alpha: Math.random() * 0.35 + 0.1,
        maxAlpha: Math.random() * 0.45 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.015 + 0.005
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Render flowing wave energy curves
      ctx.save();
      ctx.lineWidth = 1.2;

      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const yOffset = height * (0.28 + j * 0.24);
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(14, 116, 144, 0)');
        grad.addColorStop(0.3, 'rgba(6, 182, 212, 0.07)');
        grad.addColorStop(0.7, 'rgba(245, 158, 11, 0.08)');
        grad.addColorStop(1, 'rgba(14, 116, 144, 0)');
        ctx.strokeStyle = grad;

        ctx.moveTo(0, yOffset);
        for (let x = 0; x < width; x += 35) {
          const y = yOffset + Math.sin(x * 0.0025 + time + j * 1.4) * 35 + Math.cos(x * 0.0012 - time * 0.6) * 20;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // Render floating particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full -z-10 ${className}`}
    />
  );
};
