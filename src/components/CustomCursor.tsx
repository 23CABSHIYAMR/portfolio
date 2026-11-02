'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'button' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      const projectCard = target?.closest('[data-cursor="project"]');
      const dragArea = target?.closest('[data-cursor="drag"]');
      const interactive = target?.closest('a, button, [role="button"], input, textarea');

      if (projectCard) {
        setCursorVariant('project');
        setCursorText('VIEW ↗');
      } else if (dragArea) {
        setCursorVariant('drag');
        setCursorText('DRAG ↔');
      } else if (interactive) {
        setCursorVariant('button');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full bg-white pointer-events-none text-black font-mono text-[10px] font-bold tracking-widest text-center"
        animate={{
          x: mousePosition.x - (cursorVariant === 'project' || cursorVariant === 'drag' ? 42 : cursorVariant === 'button' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'project' || cursorVariant === 'drag' ? 42 : cursorVariant === 'button' ? 24 : 16),
          width: cursorVariant === 'project' || cursorVariant === 'drag' ? 84 : cursorVariant === 'button' ? 48 : 32,
          height: cursorVariant === 'project' || cursorVariant === 'drag' ? 84 : cursorVariant === 'button' ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      {cursorVariant === 'default' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 600,
          }}
        />
      )}
    </div>
  );
};

