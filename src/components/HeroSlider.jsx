import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const SLIDES = [
  {
    desktop: "/assets/hero-1.webp",
    mobile: "/assets/hero-1-mobile.webp",
    tag: "الإصدار الحصري — ٢٠٢٥",
    headline: ["عطرك", "يتكلّم", "عنك"],
    goldWord: 1,
    sub: "روائح نادرة صُنعت من أجود المكونات العالمية. لأن حضورك يستحق أكثر من مجرد كلام.",
    cta: "اكتشف المجموعة",
    ctaLink: "/shop",
    cta2: "أفضل العروض",
  },
  {
    desktop: "/assets/hero-2.webp",
    mobile: "/assets/hero-2-mobile.webp",
    tag: "مجموعة المميزين",
    headline: ["فاخر", "كما", "أنت"],
    goldWord: 0,
    sub: "استلهمنا من أعماق الشرق وصنعنا مجموعة تأسر الحواس وتبقى في الذاكرة طويلاً.",
    cta: "تسوق الآن",
    ctaLink: "/shop",
    cta2: "الجديد لدينا",
  },
];

const STATS = [
  { num: "+50", label: "عطر فاخر" },
  { num: "+10K", label: "عميل سعيد" },
  { num: "100%", label: "أصالة وجودة" },
  { num: "5★", label: "تقييم عملائنا" },
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
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              </picture>
              <div className="hero-slide__overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
