import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    img: '/assets/hero-bg.png',
    eyebrow: 'SHADAYA PERFUMES',
    title: 'أثر\nلا يُنسى.',
    desc: 'عطور فاخرة صُممت لتعكس شخصيتك وتترك بصمة لا تُمحى في كل مكان تحلّ فيه.',
    cta: 'اكتشف المجموعة',
    cta2: 'عروض حصرية',
  },
  {
    img: '/assets/hero-bg.png',
    eyebrow: 'مجموعة الشتاء',
    title: 'دفء\nالعطر الشرقي.',
    desc: 'اكتشف مجموعة شذايا الشتوية من أجود العطور العربية الدافئة والغامضة.',
    cta: 'تسوق الآن',
    cta2: 'تعرف علينا',
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero-banner">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={slide.img}
          alt="شذايا"
          className="hero-img"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      <div className="hero-overlay" />

      <AnimatePresence mode="wait">
        <motion.div
          key={active + '-content'}
          className="hero-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1 style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
          <p>{slide.desc}</p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">{slide.cta}</a>
            <a href="#about" className="btn-outline-white">{slide.cta2}</a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`الشريحة ${i + 1}`}
            style={{
              width: i === active ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === active ? 'var(--color-primary)' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  );
}
