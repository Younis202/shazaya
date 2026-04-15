import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const SLIDES = [
  { desktop: '/assets/hero-1.webp', mobile: '/assets/hero-1-mobile.webp' },
  { desktop: '/assets/hero-2.webp', mobile: '/assets/hero-2-mobile.webp' },
];

export default function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        speed={1400}
        dir="rtl"
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
    </div>
  );
}
