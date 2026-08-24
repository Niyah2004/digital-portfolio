import React, { useEffect, useState, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Update global CSS variables for any section or card utilizing CSS spotlight
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if hovering over interactive elements (buttons, links, inputs)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('[role="button"]'))) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth animation loop for the hovering spotlight
    const animate = () => {
      // Linear interpolation (lerp) for smooth trailing light
      const ease = 0.15;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Smoothly trailing large ambient hovering spotlight */}
      <div
        ref={cursorRef}
        className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.14) 0%, rgba(251, 113, 133, 0.08) 30%, rgba(244, 114, 182, 0.02) 60%, transparent 75%)',
        }}
      />

      {/* Dark mode intense ambient glow */}
      <div
        className="hidden dark:block absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full will-change-transform"
        style={{
          transform: `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`,
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.18) 0%, rgba(236, 72, 153, 0.09) 35%, rgba(219, 39, 119, 0.03) 65%, transparent 75%)',
        }}
      />

      {/* Subtle core highlight near cursor */}
      <div
        className={`absolute -top-[100px] -left-[100px] w-[200px] h-[200px] rounded-full blur-xl transition-transform duration-150 will-change-transform ${
          isPointer ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`,
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, rgba(251, 207, 232, 0.1) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};
