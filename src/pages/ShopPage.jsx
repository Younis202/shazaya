import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown, Sparkles, Droplets, Flame, Wind, Star, Search } from 'lucide-react';
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

const CAT_ICONS = {
  'الكل': <Sparkles size={18} />,
  'عطور': <Wind size={18} />,
  'عود': <Flame size={18} />,
  'دهن': <Droplets size={18} />,
  'بخور': <Star size={18} />,
};

const CAT_DESCS = {
  'الكل': 'جميع منتجاتنا الفاخرة',
  'عطور': 'تراكيب عطرية فاخرة',
  'عود': 'أجود أنواع العود',
  'دهن': 'دهون وزيوت نادرة',
  'بخور': 'بخور وعود الشذى',
};

export default function ShopPage({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(600);
  const [searchQ, setSearchQ] = useState('');

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
    <div className="shop-page">

      {/* ====== SHOP HERO ====== */}
      <div className="shop-hero">
        <div className="shop-hero__pattern" />
        <div className="shop-hero__bottle shop-hero__bottle--1">
          <svg viewBox="0 0 100 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="38" y="1" width="24" height="12" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <rect x="32" y="11" width="36" height="8" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <path d="M18 35 Q10 60 10 90 Q10 130 20 148 Q30 162 50 162 Q70 162 80 148 Q90 130 90 90 Q90 60 82 35 Q72 22 50 20 Q28 22 18 35Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
          </svg>
        </div>
        <div className="shop-hero__bottle shop-hero__bottle--2">
          <svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="1" width="20" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <rect x="24" y="9" width="32" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M14 28 Q8 48 8 72 Q8 106 16 120 Q24 132 40 132 Q56 132 64 120 Q72 106 72 72 Q72 48 66 28 Q58 18 40 16 Q22 18 14 28Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
          </svg>
        </div>
        <div className="container shop-hero__inner">
          <span className="shop-hero__label"><Sparkles size={12} /> شذايا</span>
          <h1 className="shop-hero__title">متجر العطور الفاخر</h1>
          <p className="shop-hero__desc">اكتشف مجموعتنا الكاملة من العطور والبخور والدهون الأصيلة</p>

          {/* Search bar */}
          <div className="shop-hero__search">
            <Search size={18} className="shop-hero__search-icon" />
            <input
              type="text"
              placeholder="ابحث عن عطرك المفضل..."
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
              className="shop-hero__search-input"
            />
            {searchQ && (
              <button className="shop-hero__search-clear" onClick={() => setSearchQ('')}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ====== CATEGORY VISUAL BAR ====== */}
      <div className="shop-cat-bar">
        <div className="container">
          <div className="shop-cat-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`shop-cat-pill${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="shop-cat-pill__icon">
                  {CAT_ICONS[cat] || <Sparkles size={18} />}
                </span>
                <span className="shop-cat-pill__name">{cat}</span>
                <span className="shop-cat-pill__count">
                  {cat === 'الكل' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ====== PRODUCTS AREA ====== */}
      <div className="container shop-products-area">

        {/* Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-toolbar__left">
            <button className="shop-filter-btn" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal size={15} />
              فلترة
              {showFilters && <X size={13} />}
            </button>
            <span className="shop-count">
              {filtered.length} منتج
              {activeCategory !== 'الكل' && <span className="shop-count__cat"> في {activeCategory}</span>}
            </span>
          </div>
          <div className="shop-toolbar__right">
            <div className="shop-sort">
              <ChevronDown size={14} />
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="shop-sort__select">
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="shop-layout">
          {/* Sidebar */}
          <aside className={`shop-sidebar${showFilters ? ' open' : ''}`}>
            <div className="shop-filter-group">
              <h3 className="shop-filter-title">الفئة</h3>
              <ul className="shop-filter-list">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      className={`shop-filter-item${activeCategory === cat ? ' active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'inherit', opacity: 0.7 }}>{CAT_ICONS[cat]}</span>
                        {cat}
                      </span>
                      <span className="shop-filter-count">
                        {cat === 'الكل' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shop-filter-group">
              <h3 className="shop-filter-title">السعر الأقصى</h3>
              <div className="shop-price-range">
                <input
                  type="range" min={50} max={600} step={10}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="shop-range"
                />
                <div className="shop-price-vals">
                  <span>50 ر.س</span>
                  <span className="shop-price-max">{maxPrice} ر.س</span>
                </div>
              </div>
            </div>

            <div className="shop-filter-group">
              <h3 className="shop-filter-title">نوع العطر</h3>
              <ul className="shop-filter-list">
                {['رجالي', 'نسائي', 'للجنسين'].map(t => (
                  <li key={t}>
                    <label className="shop-check-label">
                      <input type="checkbox" className="shop-check" />
                      {t}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shop-filter-group">
              <h3 className="shop-filter-title">التقييم</h3>
              <ul className="shop-filter-list">
                {[5, 4, 3].map(r => (
                  <li key={r}>
                    <label className="shop-check-label">
                      <input type="checkbox" className="shop-check" />
                      <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                        {[...Array(r)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                        {r < 5 && <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>فأعلى</span>}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="btn btn-outline-gold"
              style={{ width: '100%', justifyContent: 'center', fontSize: '12px' }}
              onClick={() => { setActiveCategory('الكل'); setMaxPrice(600); setSearchQ(''); }}
            >
              إعادة ضبط الفلاتر
            </button>
          </aside>

          {/* Products grid */}
          <div className="shop-grid-wrap">
            {filtered.length === 0 ? (
              <div className="shop-empty">
                <div className="shop-empty__icon">🔍</div>
                <h3 className="shop-empty__title">لا توجد نتائج</h3>
                <p>لا توجد منتجات تطابق البحث أو الفلاتر المختارة</p>
                <button className="btn btn-gold" onClick={() => { setActiveCategory('الكل'); setMaxPrice(600); setSearchQ(''); }}>عرض جميع المنتجات</button>
              </div>
            ) : (
              <div className="shop-grid">
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
