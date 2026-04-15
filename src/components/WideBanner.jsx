import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function WideBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '70vh', minHeight: '400px', maxHeight: '700px', position: 'relative' }}>
      <motion.div
        initial={{ scale: 1.15 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: imageY }}
        className="absolute inset-0"
      >
        <img
          src="/assets/banner-wide.webp"
          alt="مجموعة شذايا الحصرية"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ minHeight: '100%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, hsl(36 18% 5% / 0.65) 0%, hsl(36 18% 5% / 0.1) 60%, transparent 100%)' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
      >
        <div className="max-w-screen-xl mx-auto flex items-end justify-between">
          <div>
            <p className="font-body mb-3" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.45)' }}>
              العطر الحصري
            </p>
            <h2
              className="font-display leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
            >
              مجموعة <span style={{ fontStyle: 'italic' }}>الربيع ٢٠٢٦</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-primary flex-shrink-0"
          >
            تسوق الآن
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
