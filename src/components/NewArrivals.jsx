import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from './ProductCard';

const NEW_PRODUCTS = [
  { id: 11, title: 'ماء عطر فجر شذايا', subtitle: 'للجنسين / 100 مل', img: '/assets/prod-new-1.png', price: '345', isNew: true, rating: 5, reviews: 3 },
  { id: 12, title: 'عطر ليل القمر', subtitle: 'نسائي / 75 مل', img: '/assets/prod-new-2.jpg', price: '289', isNew: true, rating: 4.8, reviews: 6 },
  { id: 13, title: 'بخور الورود الفاخر', subtitle: 'للجنسين / 100 جرام', img: '/assets/prod-new-3.jpg', price: '215', isNew: true, rating: 4.7, reviews: 9 },
  { id: 14, title: 'دهن الكشمير', subtitle: 'رجالي / 12 مل', img: '/assets/prod-new-4.png', price: '175', isNew: true, rating: 4.9, reviews: 2 },
  { id: 15, title: 'ماء عطر الصحراء', subtitle: 'رجالي / 100 مل', img: '/assets/prod-new-5.png', price: '265', isNew: true, rating: 4.6, reviews: 11 },
  { id: 16, title: 'بخور التراث العربي', subtitle: 'للجنسين / 50 جرام', img: '/assets/prod-new-6.png', price: '189', isNew: true, rating: 4.5, reviews: 4 },
  { id: 17, title: 'عطر الياسمين والعنبر', subtitle: 'نسائي / 50 مل', img: '/assets/prod-new-7.png', price: '235', isNew: true, rating: 5, reviews: 1 },
  { id: 18, title: 'ماء عطر الأرز', subtitle: 'للجنسين / 100 مل', img: '/assets/prod-new-8.png', price: '298', isNew: true, rating: 4.7, reviews: 7 },
];

export default function NewArrivals({ onAddToCart, onQuickView }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-head--flex">
          <div className="section-head">
            <h2 className="section-title">وصل حديثاً</h2>
            <p className="section-subtitle">أحدث إصدارات شذايا الفاخرة</p>
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {NEW_PRODUCTS.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
