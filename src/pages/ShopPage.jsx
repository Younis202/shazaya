import { useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SlidersHorizontal, X, ChevronDown, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS, CATEGORIES } from '../data/products';

const SORT_OPTIONS = [
  { value: 'default', label: 'الترتيب الافتراضي' },
  { value: 'price-asc', label: 'السعر: الأقل أولاً' },
  { value: 'price-desc', label: 'السعر: الأعلى أولاً' },
  { value: 'rating', label: 'الأعلى تقييماً' },
  { value: 'newest', label: 'الأحدث' },
  { value: 'discount', label: 'أكبر خصم' },
];

const fieldStyle = {
  width: '100%',
  padding: '14px 0',
  backgroundColor: 'transparent',
  borderBottom: '1px solid hsl(36 10% 16% / 0.5)',
  color: 'hsl(36 20% 90%)',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: '13px',
  letterSpacing: '0.05em',
};

export default function ShopPage({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(600);
  const [searchQ, setSearchQ] = useState('');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS.filter(p => activeCategory === 'الكل' || p.category === activeCategory);
    list = list.filter(p => parseFloat(p.price) <= maxPrice);
    if (searchQ.trim()) {
      list = list.filter(p => p.title.includes(searchQ) || (p.subtitle || '').includes(searchQ));
    }
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    if (sortBy === 'rating') list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sortBy === 'newest') list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sortBy === 'discount') list = [...list].sort((a, b) => (b.discount || 0) - (a.discount || 0));
    return list;
  }, [activeCategory, sortBy, maxPrice, searchQ]);

  return (
    <div>
      <div
        className="relative overflow-hidden flex items-end"
        style={{
          height: '50vh',
          minHeight: '340px',
          paddingBottom: '60px',
          paddingTop: '130px',
        }}
      >
        <div className="absolute inset-0">
          <img src="/assets/hero-1.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(36 18% 5%) 0%, hsl(36 18% 5% / 0.5) 60%, hsl(36 18% 5% / 0.3) 100%)' }} />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-screen-xl mx-auto" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-4" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              متجر شذايا
            </p>
            <h1
              className="font-display leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
            >
              كل <span style={{ fontStyle: 'italic' }}>العطور</span>
            </h1>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(10rem, 25vw, 25rem)',
              fontWeight: 300,
              color: 'transparent',
              WebkitTextStroke: '1px hsl(36 20% 90% / 0.03)',
            }}
          >
            متجر
          </span>
        </div>
      </div>

      <div
        className="px-6 md:px-12 py-5 max-w-screen-xl mx-auto"
        style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}
      >
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-body transition-all duration-400"
              style={{
                padding: '9px 20px',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                backgroundColor: activeCategory === cat ? 'hsl(36 20% 90%)' : 'transparent',
                color: activeCategory === cat ? 'hsl(36 18% 5%)' : 'hsl(36 10% 50%)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'hsl(36 20% 90%)' : 'hsl(36 10% 16% / 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = 'hsl(36 20% 90% / 0.4)'; e.currentTarget.style.color = 'hsl(36 20% 90%)'; } }}
              onMouseLeave={(e) => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.4)'; e.currentTarget.style.color = 'hsl(36 10% 50%)'; } }}
            >
              {cat}
              <span className="mr-2 opacity-50">
                {cat === 'الكل' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-10 max-w-screen-xl mx-auto">
        <div
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6"
          style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 font-body"
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'hsl(36 10% 50%)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              {showFilters ? 'إخفاء الفلاتر' : 'الفلاتر'}
            </button>
            <span
              className="font-body"
              style={{ fontSize: '10px', color: 'hsl(36 10% 50% / 0.5)', letterSpacing: '0.15em' }}
            >
              {filtered.length} منتج
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search size={12} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)', position: 'absolute', right: '0' }} />
              <input
                type="text"
                placeholder="بحث..."
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                className="font-body bg-transparent outline-none"
                style={{ padding: '4px 20px 4px 0', fontSize: '12px', color: 'hsl(36 20% 90%)', borderBottom: '1px solid hsl(36 10% 16% / 0.4)', width: '140px' }}
              />
              {searchQ && (
                <button onClick={() => setSearchQ('')} style={{ position: 'absolute', left: '0', color: 'hsl(36 10% 50%)' }}>
                  <X size={12} strokeWidth={1.5} />
                </button>
              )}
            </div>

            <div className="relative flex items-center gap-1">
              <ChevronDown size={11} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)' }} />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="font-body appearance-none bg-transparent outline-none"
                style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'hsl(36 10% 50%)', cursor: 'pointer', paddingRight: '2px' }}
              >
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value} style={{ backgroundColor: 'hsl(36 14% 8%)' }}>{o.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 transition-all duration-500`}>
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1"
            >
              <div className="mb-10">
                <p className="font-body mb-6" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                  الفئة
                </p>
                <ul className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className="flex items-center justify-between w-full font-body group"
                        style={{ fontSize: '13px', color: activeCategory === cat ? 'hsl(38 58% 52%)' : 'hsl(36 20% 90% / 0.4)', transition: 'color 0.3s' }}
                        onMouseEnter={(e) => { if (activeCategory !== cat) e.currentTarget.style.color = 'hsl(36 20% 90%)'; }}
                        onMouseLeave={(e) => { if (activeCategory !== cat) e.currentTarget.style.color = 'hsl(36 20% 90% / 0.4)'; }}
                      >
                        {cat}
                        <span style={{ fontSize: '10px', color: 'hsl(36 10% 50%)' }}>
                          {cat === 'الكل' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <p className="font-body mb-6" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                  السعر الأقصى: {maxPrice} ر.س
                </p>
                <input
                  type="range"
                  min={50}
                  max={600}
                  step={10}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full appearance-none"
                  style={{ height: '1px', backgroundColor: 'hsl(36 10% 16%)', outline: 'none', accentColor: 'hsl(38 58% 52%)' }}
                />
              </div>

              <button
                onClick={() => { setActiveCategory('الكل'); setMaxPrice(600); setSearchQ(''); setSortBy('default'); }}
                className="font-body"
                style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', borderBottom: '1px solid hsl(36 10% 16% / 0.4)', paddingBottom: '4px', transition: 'color 0.3s, border-color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'hsl(38 58% 52%)'; e.currentTarget.style.borderColor = 'hsl(38 58% 52%)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'hsl(36 10% 50%)'; e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.4)'; }}
              >
                إعادة ضبط
              </button>
            </motion.aside>
          )}

          <div className={showFilters ? 'md:col-span-3' : 'md:col-span-4'}>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <span
                  className="font-display mb-4"
                  style={{ fontSize: '4rem', color: 'hsl(36 20% 90% / 0.05)', fontWeight: 300 }}
                >
                  ؟
                </span>
                <p className="font-display mb-2" style={{ fontSize: '1.5rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                  لا توجد نتائج
                </p>
                <p className="font-body mb-8" style={{ fontSize: '12px', color: 'hsl(36 10% 50%)', letterSpacing: '0.1em' }}>
                  جرّب البحث بكلمات مختلفة أو غيّر الفلاتر
                </p>
                <button
                  onClick={() => { setActiveCategory('الكل'); setMaxPrice(600); setSearchQ(''); }}
                  className="btn-primary"
                >
                  عرض الكل
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
