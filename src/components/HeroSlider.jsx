import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SplitText = ({ text, className, delay = 0 }) => (
  <span className="inline-flex overflow-hidden">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay: delay + i * 0.035, ease: [0.16, 1, 0.3, 1] }}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

export default function HeroSlider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '120vh', width: '100%' }}>
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <picture>
          <source media="(max-width: 640px)" srcSet="/assets/hero-1-mobile.webp" />
          <img
            src="/assets/hero-1.webp"
            alt="شذايا — مجموعة ٢٠٢٦"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, hsl(36 18% 5% / 0.1) 0%, hsl(36 18% 5% / 0.35) 40%, hsl(36 18% 5% / 0.92) 100%)' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: -90 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block origin-center"
      >
        <span className="font-body whitespace-nowrap" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.2)' }}>
          مصنوع باحتراف — شذايا ٢٠٢٦
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 90 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden md:block origin-center"
      >
        <span className="font-body whitespace-nowrap" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.15)' }}>
          الإصدار الحصري — ٢٠٢٦
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12"
      >
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body"
            style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.4)' }}
          >
            مجموعة الربيع / الصيف ٢٠٢٦
          </motion.p>
        </div>

        <div className="mb-2">
          <SplitText
            text="عطرك"
            delay={2.4}
            className="font-display leading-[0.85]"
            style={{ display: 'inline-block' }}
          />
        </div>
        <div className="mb-2">
          <SplitText
            text="يتكلّم"
            delay={2.65}
            className="font-display leading-[0.85]"
          />
        </div>
        <div>
          <SplitText
            text="عنك"
            delay={2.9}
            className="font-display italic leading-[0.85]"
          />
        </div>

        <style>{`
          .hero-split .font-display {
            font-size: clamp(3.2rem, 8vw, 9.5rem);
            font-weight: 300;
            color: hsl(36 20% 90%);
            letter-spacing: -0.01em;
          }
          .hero-split .italic { font-style: italic; }
        `}</style>

        <div style={{ fontSize: 'clamp(3.2rem, 8vw, 9.5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)', letterSpacing: '-0.01em', lineHeight: 0.85, display: 'none' }}>placeholder</div>

        <div className="overflow-hidden mt-12 md:mt-16">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 3.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-10"
          >
            <Link
              to="/shop"
              className="btn-primary"
            >
              تسوق الآن
            </Link>
            <Link
              to="/shop"
              className="btn-ghost group flex items-center gap-4"
            >
              <span>اكتشف المجموعة</span>
              <span
                className="block h-px transition-all duration-700"
                style={{ width: '48px', backgroundColor: 'hsl(36 20% 90% / 0.2)' }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-body" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.2)' }}>
          تمرير
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, hsl(36 20% 90% / 0.2), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
