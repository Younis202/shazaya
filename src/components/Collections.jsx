import { useEffect, useRef } from 'react';

const COLLECTIONS = [
  { name: 'هوس', img: '/assets/col-1.webp' },
  { name: 'دارج', img: '/assets/col-2.webp' },
  { name: 'سمو شذايا', img: '/assets/col-3.webp' },
  { name: 'نفائس الشغف', img: '/assets/col-4.webp' },
  { name: 'الوسام', img: '/assets/col-5.webp' },
  { name: 'توليفة', img: '/assets/col-6.webp' },
];

export default function Collections() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
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
            <a key={i} href="#" className="col-card fade-up">
              <div className="col-card__img-wrap">
                <img className="col-card__img" src={col.img} alt={col.name} loading="lazy" />
              </div>
              <span className="col-card__name">{col.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
