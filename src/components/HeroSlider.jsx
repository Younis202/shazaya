import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const SLIDES = [
  { desktop: '/assets/hero-1.webp', mobile: '/assets/hero-1-mobile.webp', alt: 'شذايا - عطور فاخرة' },
  { desktop: '/assets/hero-2.webp', mobile: '/assets/hero-2-mobile.webp', alt: 'شذايا - مجموعة خاصة' },
];

export default function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        speed={1200}
        dir="rtl"

      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="hero-slide">
              <picture>
                <source media="(max-width: 640px)" srcSet={slide.mobile} />
                <img className="hero-slide__img" src={slide.desktop} alt={slide.alt} fetchPriority={i === 0 ? 'high' : 'auto'} />
              </picture>
              <div className="hero-slide__overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
