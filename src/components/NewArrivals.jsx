import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const NEW_PRODS = ALL_PRODUCTS.filter(p => p.isNew);

export default function NewArrivals({ onAddToCart, onQuickView }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section style={{ padding: '64px 24px 80px' }}>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 max-w-screen-xl mx-auto"
      >
        <div>
          <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            أحدث الإصدارات
          </p>
          <motion.span
            className="luxury-divider mb-6"
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            style={{ display: 'block', transformOrigin: 'right' }}
          />
          <h2
            className="font-display leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
          >
            وصل <span style={{ fontStyle: 'italic' }}>حديثاً</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="mt-8 md:mt-0 inline-flex items-center gap-3 font-body"
          style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', transition: 'color 0.4s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
        >
          <span>عرض الجميع</span>
          <ArrowUpLeft size={12} strokeWidth={1.5} />
        </Link>
      </motion.div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {NEW_PRODS.slice(0, 8).map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCard product={product} onAddToCart={onAddToCart} onQuickView={onQuickView} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
