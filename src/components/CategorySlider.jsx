import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: 'عطور رجالية', desc: 'قوة وحضور', img: '/assets/cat-men.webp', href: '/shop' },
  { name: 'عطور نسائية', desc: 'أناقة وإبداع', img: '/assets/cat-women.webp', href: '/shop' },
  { name: 'للجنسين', desc: 'روح مشتركة', img: '/assets/cat-unisex.webp', href: '/shop' },
  { name: 'عطر العود', desc: 'موروث شرقي', img: '/assets/cat-oud.webp', href: '/shop' },
];

export default function CategorySlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '64px 24px 80px' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            تصفح حسب الفئة
          </p>
          <motion.span
            className="luxury-divider mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            style={{ display: 'block', transformOrigin: 'right' }}
          />
          <h2
            className="font-display leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
          >
            تسوق <span style={{ fontStyle: 'italic' }}>ذوقك</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={cat.href} className="group block">
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: '3/4', backgroundColor: 'hsl(36 14% 8%)' }}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform"
                    style={{ transitionDuration: '2s', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, hsl(36 18% 5% / 0.6) 0%, transparent 60%)' }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <h3
                      className="font-display"
                      style={{ fontSize: '1.2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
                    >
                      {cat.name}
                    </h3>
                    <p className="font-body mt-0.5" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.55)' }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
