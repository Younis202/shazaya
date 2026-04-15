import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'ليل حالك',
    desc: 'مزيج العود والورد الدمشقي',
    price: '450 ر.س',
    image: '/assets/product-2.png'
  },
  {
    id: 2,
    title: 'وهج الذهبي',
    desc: 'العنبر مع لمسات الفانيليا',
    price: '520 ر.س',
    image: '/assets/product-1.png'
  },
  {
    id: 3,
    title: 'نقاء الصباح',
    desc: 'زنبق الوادي والمسك الأبيض',
    price: '380 ر.س',
    image: '/assets/product-3.png'
  }
];

export default function Products() {
  return (
    <section id="collection" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent mb-2"
          >
            المجموعة الحصرية
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            عطور تحكي قصة
          </motion.h2>
        </div>

        <div className="grid-3">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="product-card"
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-overlay">
                  <button className="btn-primary" style={{ transform: 'translateY(20px)', opacity: 0, transition: 'all 0.4s ease' }} 
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(20px)'; e.currentTarget.style.opacity = '0'; }}
                  >
                    إضافة للسلة
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{product.desc}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <a href="#" className="btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
            عرض كل العطور
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
