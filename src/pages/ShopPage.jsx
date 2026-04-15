import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
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

export default function ShopPage({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(600);

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS.filter(p => activeCategory === 'الكل' || p.category === activeCategory);
    list = list.filter(p => parseFloat(p.price) <= maxPrice);
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    if (sortBy === 'rating') list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sortBy === 'newest') list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sortBy === 'discount') list = [...list].sort((a, b) => (b.discount || 0) - (a.discount || 0));
    return list;
  }, [activeCategory, sortBy, maxPrice]);

  return (
    <div className="shop-page">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__sub">شذايا</p>
          <h1 className="page-hero__title">جميع المنتجات</h1>
          <p className="page-hero__desc">اكتشف مجموعتنا الكاملة من العطور والبخور والدهون الفاخرة</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>
        {/* Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-toolbar__left">
            <button className="shop-filter-btn" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal size={15} />
              فلترة
              {showFilters && <X size={13} />}
            </button>
            <span className="shop-count">{filtered.length} منتج</span>
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
          {/* Sidebar filters */}
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
                      {cat}
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
                  <span>50 ج.م</span>
                  <span className="shop-price-max">{maxPrice} ج.م</span>
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
          </aside>

          {/* Products grid */}
          <div className="shop-grid-wrap">
            {filtered.length === 0 ? (
              <div className="shop-empty">
                <p>لا توجد منتجات تطابق الفلاتر المختارة</p>
                <button className="btn btn-outline-gold" onClick={() => { setActiveCategory('الكل'); setMaxPrice(600); }}>إعادة ضبط</button>
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
