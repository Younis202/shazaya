import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';

const slides = [
  {
    img: '/assets/hero-bg.png',
    tag: 'SHADAYA PERFUMES — الإصدار الحصري',
    title: ['عطرك', 'يتكلّم', 'عنك.'],
    titleGold: 2,
    sub: 'روائح نادرة صُنعت بيد أمينة من أجود المكونات العالمية. لأن حضورك يستحق أكثر من مجرد كلام.',
    cta: 'اكتشف المجموعة',
    cta2: 'قصة شذايا',
  },
  {
    img: '/assets/hero-bg.png',
    tag: 'مجموعة الشتاء 2025',
    title: ['دفء', 'العطر', 'الشرقي.'],
    titleGold: 0,
    sub: 'استلهمنا من أعماق الشرق وصنعنا مجموعة تأسر الحواس وتبقى في الذاكرة طويلاً.',
    cta: 'تسوق الآن',
    cta2: 'عروض حصرية',
  },
];

const stats = [
  { num: '+50', suf: '', label: 'عطر فاخر' },
  { num: '4', suf: '+', label: 'سنوات خبرة' },
  { num: '+10K', suf: '', label: 'عميل سعيد' },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero" aria-label="البانر الرئيسي">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={slide.img}
          alt=""
          className="hero-bg-img"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden="true"
        />
      </AnimatePresence>

      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-noise"    aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="hero-text"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              {slide.tag}
            </div>

            <h1 className="hero-title" dir="rtl">
              {slide.title.map((word, i) => (
                <span key={i}>
                  {i === slide.titleGold
                    ? <span className="gold-word">{word}</span>
                    : word
                  }
                  {i < slide.title.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="hero-sub">{slide.sub}</p>

            <div className="hero-actions">
              <a href="#products" className="btn-gold">
                {slide.cta}
                <ArrowLeft size={16} />
              </a>
              <button className="btn-glass">
                {slide.cta2}
              </button>
            </div>

            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="hero-stat-num">
                    {s.num}<span>{s.suf}</span>
                  </div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.4rem',
          zIndex: 3,
        }}
        aria-label="مؤشرات الشرائح"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`الشريحة ${i + 1}`}
            style={{
              width: i === active ? '28px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
