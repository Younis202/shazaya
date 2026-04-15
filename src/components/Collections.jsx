import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const COLLECTIONS = [
  { name: 'هوس', count: '٨ عطور', img: '/assets/col-1.webp' },
  { name: 'دارج', count: '٦ عطور', img: '/assets/col-2.webp' },
  { name: 'سمو شذايا', count: '١٠ عطور', img: '/assets/col-3.webp' },
  { name: 'نفائس الشغف', count: '٥ عطور', img: '/assets/col-4.webp' },
  { name: 'الوسام', count: '٧ عطور', img: '/assets/col-5.webp' },
  { name: 'توليفة', count: '٩ عطور', img: '/assets/col-6.webp' },
];

export default function Collections() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title fade-up">مجموعات مميزة</h2>
          <p className="section-subtitle fade-up">باقة فاخرة من عطور شذايا</p>
          <span className="title-border fade-up" />
        </div>
        <div className="collections-grid">
          {COLLECTIONS.map((col, i) => (
            <Link key={i} to="/shop" className="col-card fade-up">
              <div className="col-card__img-wrap">
                <img className="col-card__img" src={col.img} alt={col.name} loading="lazy" />
                <div className="col-card__hover-overlay">
                  <span className="col-card__hover-name">{col.name}</span>
                  <span className="col-card__hover-count">{col.count}</span>
                  <span className="col-card__hover-btn">تسوق الآن</span>
                </div>
              </div>
              <span className="col-card__name">{col.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
