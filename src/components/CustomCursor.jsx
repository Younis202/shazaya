import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onOver = (e) => {
      const t = e.target;
      setHovering(
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.classList.contains('cursor-pointer')
      );
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - (hovering ? 24 : 16),
          y: pos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ border: '1px solid hsl(36 20% 90% / 0.6)' }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible ? (hovering ? 0 : 1) : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'hsl(36 20% 90%)' }}
        />
      </motion.div>
    </>
  );
}
