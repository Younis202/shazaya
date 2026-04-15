import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye, ArrowLeft } from 'lucide-react';

const products = [
  { id:1,  name:'ليل حالك',       sub:'رجالي · 100 مل',   price:450, old:525,  pct:'14%', badge:'new',  img:'/assets/p1.png' },
  { id:2,  name:'وهج الذهبي',     sub:'نسائي · 75 مل',    price:520, old:null, pct:null,  badge:null,   img:'/assets/p2.png' },
  { id:3,  name:'نقاء الصباح',    sub:'للجنسين · 100 مل', price:380, old:450,  pct:'16%', badge:'sale', img:'/assets/p3.jpg' },
  { id:4,  name:'سر المساء',      sub:'رجالي · 100 مل',   price:490, old:null, pct:null,  badge:'new',  img:'/assets/p4.png' },
  { id:5,  name:'زهر البرتقال',   sub:'نسائي · 50 مل',    price:320, old:380,  pct:'16%', badge:'hot',  img:'/assets/p5.jpg' },
  { id:6,  name:'عود الملوك',     sub:'رجالي · 100 مل',   price:680, old:null, pct:null,  badge:'new',  img:'/assets/p6.jpg' },
  { id:7,  name:'مسك الليل',      sub:'للجنسين · 75 مل',  price:410, old:480,  pct:'15%', badge:'sale', img:'/assets/p7.jpg' },
  { id:8,  name:'أمواج الفضة',    sub:'نسائي · 100 مل',   price:560, old:null, pct:null,  badge:null,   img:'/assets/p8.jpg' },
];

const BADGE = {
  new:  { cls: 'badge-new',  label: 'جديد' },
  sale: { cls: 'badge-sale', label: 'تخفيض' },
  hot:  { cls: 'badge-hot',  label: 'الأكثر مبيعًا' },
};

function Card({ p, i }) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (i % 4) * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="product-img-wrap">
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.badge && (
          <span className={`product-badge ${BADGE[p.badge].cls}`}>
            {BADGE[p.badge].label}
          </span>
        )}
        <div className="product-quick-actions">
          <button className="quick-btn" aria-label="أضف للمفضلة"><Heart size={14} /></button>
          <button className="quick-btn" aria-label="عرض سريع"><Eye size={14} /></button>
        </div>
      </div>

      <div className="product-body">
        <div className="product-name">{p.name}</div>
        <div className="product-sub">{p.sub}</div>
        <div className="product-price-row">
          <span className="price-main">{p.price}</span>
          <span className="price-currency">ر.س</span>
          {p.old && (
            <>
              <span className="price-old">{p.old} ر.س</span>
              {p.pct && <span className="price-pct">-{p.pct}</span>}
            </>
          )}
        </div>
        <button className="add-cart-btn">
          <ShoppingBag size={14} strokeWidth={2} />
          إضافة للسلة
        </button>
      </div>
    </motion.article>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">مجموعتنا الحصرية</div>
          <h2 className="section-title">أحدث منتجاتنا</h2>
          <p className="section-sub">
            اكتشف أرقى العطور الفاخرة المختارة بعناية — كل عطر قصة لا تُنسى.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="#" className="btn-ghost-gold">
            عرض جميع المنتجات
            <ArrowLeft size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
