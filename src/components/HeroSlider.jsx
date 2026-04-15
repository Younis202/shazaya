import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    desktop: '/assets/hero-1.webp',
    mobile: '/assets/hero-1-mobile.webp',
    tag: 'الإصدار الحصري — ٢٠٢٥',
    headline: ['عطرك', 'يتكلّم', 'عنك'],
    goldWord: 1,
    sub: 'روائح نادرة صُنعت من أجود المكونات العالمية. لأن حضورك يستحق أكثر من مجرد كلام.',
    cta: 'اكتشف المجموعة',
    ctaLink: '/shop',
    cta2: 'أفضل العروض',
  },
  {
    desktop: '/assets/hero-2.webp',
    mobile: '/assets/hero-2-mobile.webp',
    tag: 'مجموعة المميزين',
    headline: ['فاخر', 'كما', 'أنت'],
    goldWord: 0,
    sub: 'استلهمنا من أعماق الشرق وصنعنا مجموعة تأسر الحواس وتبقى في الذاكرة طويلاً.',
    cta: 'تسوق الآن',
    ctaLink: '/shop',
    cta2: 'الجديد لدينا',
  },
];

const STATS = [
  { num: '+50', label: 'عطر فاخر' },
  { num: '+10K', label: 'عميل سعيد' },
  { num: '100%', label: 'أصالة وجودة' },
  { num: '5★', label: 'تقييم عملائنا' },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        navigation
        speed={1200}
        dir="rtl"
        onSlideChange={(s) => setActive(s.realIndex)}
        className="hero-swiper"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="hero-slide">
              <picture>
                <source media="(max-width: 640px)" srcSet={slide.mobile} />
                <img
                  className="hero-slide__img"
                  src={slide.desktop}
                  alt="شذايا"
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              </picture>
              <div className="hero-slide__overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-overlay-content">
        <div className="container hero-overlay-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="hero-text"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08, duration: 0.5 }}
              >
                <Sparkles size={11} />
                {slide.tag}
              </motion.div>

              <h1 className="hero-headline" dir="rtl">
                {slide.headline.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`hero-word${i === slide.goldWord ? ' gold-word' : ''}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 + i * 0.09, duration: 0.5, ease: 'easeOut' }}
                  >
                    {word}
                    {i < slide.headline.length - 1 && <br />}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="hero-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42, duration: 0.6 }}
              >
                {slide.sub}
              </motion.p>

              <motion.div
                className="hero-btns"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.5 }}
              >
                <Link to={slide.ctaLink} className="hero-cta-primary">
                  {slide.cta}
                  <ArrowLeft size={16} />
                </Link>
                <Link to="/shop" className="hero-cta-glass">
                  {slide.cta2}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats-row">
              {STATS.map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat__num">{s.num}</span>
                  <span className="hero-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
