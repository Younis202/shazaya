import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: 'عطور نسائية', img: '/assets/cat-women.webp', count: '٤٢ منتجاً', href: '/shop' },
  { name: 'للجنسين', img: '/assets/cat-unisex.webp', count: '٣٦ منتجاً', href: '/shop' },
  { name: 'عطور رجالية', img: '/assets/cat-men.webp', count: '٢٨ منتجاً', href: '/shop' },
  { name: 'عطر العود', img: '/assets/cat-oud.webp', count: '١٨ منتجاً', href: '/shop' },
  { name: 'عطور نسائية', img: '/assets/cat-women.webp', count: '٤٢ منتجاً', href: '/shop' },
  { name: 'للجنسين', img: '/assets/cat-unisex.webp', count: '٣٦ منتجاً', href: '/shop' },
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
            <button className="s-nav-btn" ref={prevRef} aria-label="السابق">
              <ChevronRight size={16} />
            </button>
            <button className="s-nav-btn" ref={nextRef} aria-label="التالي">
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          dir="rtl"
        >
          {CATEGORIES.map((cat, i) => (
            <SwiperSlide key={i} className="cat-slide">
              <Link to={cat.href} className="cat-card">
                <div className="cat-card__img-wrap">
                  <img className="cat-card__img" src={cat.img} alt={cat.name} loading="lazy" />
                  <div className="cat-card__overlay">
                    <span className="cat-card__overlay-name">{cat.name}</span>
                    <span className="cat-card__overlay-count">{cat.count}</span>
                  </div>
                </div>
                <span className="cat-card__name">{cat.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
