import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const REVIEWS = [
  {
    name: 'أحمد الراشدي',
    city: 'الرياض',
    rating: 5,
    text: 'شذايا من أفضل ما جربت في عطور العود. الثبات على الجلد ممتاز والرائحة فاخرة جداً. بالتأكيد سأشتري مرة أخرى!',
    product: 'بخور العود الخاص',
    avatar: 'أ',
  },
  {
    name: 'سارة المنصوري',
    city: 'دبي',
    rating: 5,
    text: 'الرائحة خيالية وتدوم طوال اليوم. الشحن كان سريع والتغليف فاخر. أنصح به بشدة لكل من يبحث عن عطر مميز.',
    product: 'ماء العطور النخيل',
    avatar: 'س',
  },
  {
    name: 'خالد الزهراني',
    city: 'جدة',
    rating: 5,
    text: 'من أجمل ما مررت به من عطور عربية. ثبات ممتاز ورائحة تجعل الجميع يستفسر عنها. لن أتوقف عن الطلب منهم.',
    product: 'عطر شذايا الأول',
    avatar: 'خ',
  },
  {
    name: 'نورة الشمري',
    city: 'الكويت',
    rating: 5,
    text: 'منتج رائع وسعر معقول مقارنة بالجودة. البخور من أفضل ما رأيته. الرائحة تملأ المكان بشكل رائع ساعات طويلة.',
    product: 'بخور مشاعر',
    avatar: 'ن',
  },
  {
    name: 'محمد العتيبي',
    city: 'أبوظبي',
    rating: 5,
    text: 'اشتريت لي ولزوجتي، الاثنين سعيدان جداً. رائحة راقية وتدوم، والتغليف يليق هدية فاخرة. شكراً شذايا!',
    product: 'عود الملوك',
    avatar: 'م',
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title testimonials-title">ماذا يقول عملاؤنا</h2>
          <p className="section-subtitle testimonials-subtitle">آراء حقيقية من عملاء شذايا حول العالم العربي</p>
          <span className="title-border" />
        </div>

        <div className="testimonials-slider-wrap">
          <button className="s-nav-btn testi-prev" ref={prevRef} aria-label="السابق">
            <ChevronRight size={15} />
          </button>
          <button className="s-nav-btn testi-next" ref={nextRef} aria-label="التالي">
            <ChevronLeft size={15} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            dir="rtl"
          >
            {REVIEWS.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="review-card">
                  <div className="review-card__top">
                    <Quote size={22} className="review-quote-icon" />
                    <div className="review-stars">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          fill={j < r.rating ? '#f59e0b' : 'none'}
                          color={j < r.rating ? '#f59e0b' : 'rgba(255,255,255,0.2)'}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="review-text">&ldquo;{r.text}&rdquo;</p>

                  <span className="review-product-tag">{r.product}</span>

                  <div className="review-author">
                    <div className="review-avatar">{r.avatar}</div>
                    <div>
                      <p className="review-name">{r.name}</p>
                      <p className="review-city">{r.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
