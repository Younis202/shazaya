import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from './ProductCard';

const PRODUCTS = [
  { id: 1, title: 'بخور مشاعر', subtitle: 'للجنسين / 100 جرام', img: '/assets/prod-1.jpg', imgHover: '/assets/prod-1-hover.jpg', price: '155.25', originalPrice: '258.75', discount: 40, rating: 4.5, reviews: 23 },
  { id: 2, title: 'بخور وجود', subtitle: 'للجنسين / 100 جرام', img: '/assets/prod-2.png', imgHover: '/assets/prod-2-hover.png', price: '155.25', originalPrice: '258.75', discount: 40, rating: 5, reviews: 1 },
  { id: 3, title: 'بخور انسجام', subtitle: 'للجنسين / 100 مل', img: '/assets/prod-3.png', imgHover: '/assets/prod-3-hover.png', price: '176', originalPrice: '251.50', discount: 30, rating: 4.8, reviews: 14 },
  { id: 4, title: 'عطر شذايا الأول', subtitle: 'رجالي / 100 مل', img: '/assets/prod-4.jpg', price: '189.75', originalPrice: '270', discount: 30, rating: 4.6, reviews: 8 },
  { id: 5, title: 'ماء العطور النخيل', subtitle: 'نسائي / 75 مل', img: '/assets/prod-5.png', price: '221.25', originalPrice: '295', discount: 25, rating: 4.7, reviews: 19 },
  { id: 6, title: 'بخور العود الخاص', subtitle: 'للجنسين / 50 جرام', img: '/assets/prod-6.png', price: '339', originalPrice: '452', discount: 25, rating: 4.9, reviews: 31 },
  { id: 7, title: 'دهن العنبر الفاخر', subtitle: 'رجالي / 12 مل', img: '/assets/prod-7.jpg', price: '127.50', originalPrice: '170', discount: 25, rating: 4.4, reviews: 7 },
  { id: 8, title: "ماء عطر الشرق", subtitle: "للجنسين / 100 مل", img: "/assets/prod-8.jpg", price: "198", originalPrice: "264", discount: 25, rating: 4.3, reviews: 5 },
];

export default function BestOffersSlider({ onAddToCart, onQuickView }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-padding" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-head--flex">
          <div className="section-head">
            <h2 className="section-title">أفضل العروض</h2>
            <p className="section-subtitle">خصومات حصرية لفترة محدودة</p>
            <span className="title-border" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" className="view-all-link">عرض الكل</a>
            <div className="slider-nav">
              <button className="s-nav-btn" ref={prevRef} aria-label="السابق"><ChevronRight size={15} /></button>
              <button className="s-nav-btn" ref={nextRef} aria-label="التالي"><ChevronLeft size={15} /></button>
            </div>
          </div>
        </div>

        <Swiper
          className="products-swiper"
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={14}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 18 },
            1280: { slidesPerView: 5, spaceBetween: 18 },
          }}
          dir="rtl"

        >
          {PRODUCTS.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
