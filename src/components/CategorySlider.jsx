import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CATEGORIES = [
  { name: 'نسائي', img: '/assets/cat-women.webp' },
  { name: 'للجنسين', img: '/assets/cat-unisex.webp' },
  { name: 'رجالي', img: '/assets/cat-men.webp' },
  { name: 'عود', img: '/assets/cat-oud.webp' },
  { name: 'نسائي', img: '/assets/cat-women.webp' },
  { name: 'للجنسين', img: '/assets/cat-unisex.webp' },
];

export default function CategorySlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-padding" style={{ paddingTop: '0' }}>
      <div className="container">
        <div className="section-head--flex">
          <div className="section-head">
            <h2 className="section-title">تسوق حسب ذوقك</h2>
            <p className="section-subtitle">إصدارات فاخرة لكل الأذواق</p>
            <span className="title-border" />
          </div>
          <div className="slider-nav">
            <button className="s-nav-btn" ref={prevRef} aria-label="السابق"><ChevronRight size={16} /></button>
            <button className="s-nav-btn" ref={nextRef} aria-label="التالي"><ChevronLeft size={16} /></button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView="auto"
          spaceBetween={14}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          dir="rtl"

        >
          {CATEGORIES.map((cat, i) => (
            <SwiperSlide key={i} className="cat-slide">
              <a href="#" className="cat-card">
                <div className="cat-card__img-wrap">
                  <img className="cat-card__img" src={cat.img} alt={cat.name} loading="lazy" />
                </div>
                <span className="cat-card__name">{cat.name}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
