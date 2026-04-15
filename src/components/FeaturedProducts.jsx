import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ليل حالك',
    sub: 'عطر رجالي | 100 مل',
    price: '450',
    oldPrice: '525',
    discount: '14%',
    badge: 'جديد',
    img: '/assets/p1.png',
  },
  {
    id: 2,
    name: 'وهج الذهبي',
    sub: 'عطر نسائي | 75 مل',
    price: '520',
    oldPrice: null,
    badge: null,
    img: '/assets/p2.png',
  },
  {
    id: 3,
    name: 'نقاء الصباح',
    sub: 'عطر للجنسين | 100 مل',
    price: '380',
    oldPrice: '450',
    discount: '16%',
    badge: 'تخفيض',
    badgeClass: 'sale',
    img: '/assets/p3.jpg',
  },
  {
    id: 4,
    name: 'سر المساء',
    sub: 'عطر رجالي | 100 مل',
    price: '490',
    oldPrice: null,
    badge: 'جديد',
    img: '/assets/p4.png',
  },
  {
    id: 5,
    name: 'زهر البرتقال',
    sub: 'عطر نسائي | 50 مل',
    price: '320',
    oldPrice: '380',
    discount: '16%',
    badge: null,
    img: '/assets/p5.jpg',
  },
  {
    id: 6,
    name: 'عود الملوك',
    sub: 'عطر رجالي | 100 مل',
    price: '680',
    oldPrice: null,
    badge: 'جديد',
    img: '/assets/p6.jpg',
  },
  {
    id: 7,
    name: 'مسك الليل',
    sub: 'عطر للجنسين | 75 مل',
    price: '410',
    oldPrice: '480',
    discount: '15%',
    badge: 'تخفيض',
    badgeClass: 'sale',
    img: '/assets/p7.jpg',
  },
  {
    id: 8,
    name: 'أمواج الفضة',
    sub: 'عطر نسائي | 100 مل',
    price: '560',
    oldPrice: null,
    badge: null,
    img: '/assets/p8.jpg',
  },
];

function ProductCard({ product, index }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
    >
      <div className="product-card__img-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-badge ${product.badgeClass || ''}`}>
            {product.badge}
          </span>
        )}
        <div className="product-hover-actions">
          <button className="icon-btn" aria-label="المفضلة" title="أضف للمفضلة">
            <Heart size={15} />
          </button>
          <button className="icon-btn" aria-label="عرض سريع" title="عرض سريع">
            <Eye size={15} />
          </button>
        </div>
      </div>

      <div className="product-card__info">
        <div className="product-card__name">{product.name}</div>
        <div className="product-card__sub">{product.sub}</div>
        <div className="product-card__price">
          <span className="price-now">{product.price} <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>ر.س</span></span>
          {product.oldPrice && (
            <>
              <span className="price-was">{product.oldPrice} ر.س</span>
              {product.discount && <span className="price-off">-{product.discount}</span>}
            </>
          )}
        </div>
        <button className="add-btn">
          <ShoppingCart size={14} />
          إضافة للسلة
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>أحدث منتجاتنا</h2>
          <div className="underline-bar" />
          <p>اكتشف أرقى العطور الفاخرة المختارة بعناية لك</p>
        </motion.div>

        <div className="products-grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="#"
            className="btn-primary"
            style={{ display: 'inline-block' }}
          >
            عرض جميع المنتجات
          </a>
        </div>
      </div>
    </section>
  );
}
