
import React, { useCallback, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, radius: 150 });

  const colors = ['#e5deff', '#d6bcfa', '#8B5CF6', '#6E59A5'];

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particles.current = [];
    const numberOfParticles = Math.min(canvas.width * 0.03, 100);
    
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2;
      const y = Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2;
      const speedX = Math.random() * 0.5 - 0.25;
      const speedY = Math.random() * 0.5 - 0.25;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.current.push({ x, y, size, speedX, speedY, color });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i];
      
      // Check collision with mouse
      const dx = p.x - mouse.current.x;
      const dy = p.y - mouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.current.radius + p.size) {
        const angle = Math.atan2(dy, dx);
        const tx = p.x + Math.cos(angle) * 1;
        const ty = p.y + Math.sin(angle) * 1;
        
        particles.current[i].x = tx;
        particles.current[i].y = ty;
      }
      
      // Update position
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Bounce off edges
      if (p.x < p.size || p.x > canvas.width - p.size) {
        p.speedX = -p.speedX;
      }
      
      if (p.y < p.size || p.y > canvas.height - p.size) {
        p.speedY = -p.speedY;
      }
      
      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Draw connections
      for (let j = i; j < particles.current.length; j++) {
        const p2 = particles.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }, [init]);

  useEffect(() => {
    init();
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [init, animate, handleMouseMove, handleResize]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  );
};
