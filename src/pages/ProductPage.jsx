import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, ChevronLeft, Package, RotateCcw, Shield, Truck, Sparkles, Droplets, Wind, Flame } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const SCENT_PYRAMID = [
  { level: 'القمة', time: 'أول 15 دقيقة', notes: ['برغموت', 'ليمون'], icon: <Wind size={16} />, color: '#e0f2fe', border: '#7dd3fc', text: '#0369a1' },
  { level: 'القلب', time: 'ساعة لـ 4 ساعات', notes: ['ورد الطائف', 'عود'], icon: <Flame size={16} />, color: '#fef3e2', border: '#fcd34d', text: '#92400e' },
  { level: 'القاعدة', time: 'تدوم 8+ ساعات', notes: ['مسك أبيض', 'عنبر'], icon: <Droplets size={16} />, color: '#f0fdf4', border: '#86efac', text: '#166534' },
];

const SIZE_OPTIONS = [
  { label: '30 مل', price: null, popular: false },
  { label: '50 مل', price: null, popular: false },
  { label: '100 مل', price: null, popular: true },
];

export default function ProductPage({ onAddToCart, onQuickView }) {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('desc');
  const [selectedSize, setSelectedSize] = useState('100 مل');
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="not-found-page">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <div style={{ fontSize: '72px', marginBottom: '16px' }}>🔍</div>
          <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>المنتج غير موجود</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>عذراً، لم نجد هذا المنتج.</p>
          <Link to="/shop" className="btn btn-gold">تصفح المنتجات</Link>
        </div>
      </div>
    );
  }

  const images = [product.img, product.imgHover].filter(Boolean);
  const related = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) onAddToCart && onAddToCart(product);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="product-page">

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">الرئيسية</Link>
          <ChevronLeft size={13} className="breadcrumb-sep" />
          <Link to="/shop" className="breadcrumb-link">المتجر</Link>
          <ChevronLeft size={13} className="breadcrumb-sep" />
          <Link to="/shop" className="breadcrumb-link">{product.category}</Link>
          <ChevronLeft size={13} className="breadcrumb-sep" />
          <span className="breadcrumb-current">{product.title}</span>
        </div>
      </div>

      {/* Main Product */}
      <div className="container" style={{ padding: '40px 20px 60px' }}>
        <div className="pp-grid">

          {/* Gallery */}
          <div className="pp-gallery">
            <div className="pp-main-img">
              <img src={images[activeImg] || product.img} alt={product.title} />
              {product.discount && <span className="pp-badge">خصم {product.discount}%</span>}
              {product.isNew && !product.discount && <span className="pp-badge pp-badge--new">جديد</span>}
              <div className="pp-img-actions">
                <button
                  className={`pp-img-wish${wishlisted ? ' active' : ''}`}
                  onClick={() => setWishlisted(w => !w)}
                  title="أضف للمفضلة"
                >
                  <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
            {images.length > 1 && (
              <div className="pp-thumbs">
                {images.map((src, i) => (
                  <button key={i} className={`pp-thumb${activeImg === i ? ' active' : ''}`} onClick={() => setActiveImg(i)}>
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}

            {/* Scent Pyramid */}
            <div className="pp-scent-pyramid">
              <div className="pp-scent-pyramid__header">
                <Sparkles size={13} />
                <span>هرم العطر</span>
              </div>
              <div className="pp-scent-pyramid__levels">
                {SCENT_PYRAMID.map((level, i) => (
                  <div key={i} className="pp-scent-level" style={{ background: level.color, borderColor: level.border }}>
                    <div className="pp-scent-level__icon" style={{ color: level.text }}>{level.icon}</div>
                    <div className="pp-scent-level__info">
                      <span className="pp-scent-level__name" style={{ color: level.text }}>{level.level}</span>
                      <span className="pp-scent-level__notes">{level.notes.join('، ')}</span>
                      <span className="pp-scent-level__time">{level.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pp-info">
            <div className="pp-category-row">
              <span className="pp-category">{product.category}</span>
              {product.isNew && <span className="pp-new-tag"><Sparkles size={10} /> جديد</span>}
            </div>
            <h1 className="pp-title">{product.title}</h1>
            <p className="pp-subtitle">{product.subtitle}</p>

            {product.rating && (
              <div className="pp-rating">
                <div className="pp-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill={i < Math.round(product.rating) ? '#f59e0b' : 'none'} color={i < Math.round(product.rating) ? '#f59e0b' : '#d1d5db'} />
                  ))}
                </div>
                <span className="pp-rating-text">{product.rating} ({product.reviews || 0} تقييم)</span>
                <span className="pp-rating-sep">|</span>
                <span className="pp-instock">✓ متوفر في المخزون</span>
              </div>
            )}

            <div className="pp-price-block">
              {product.discount ? (
                <>
                  <span className="pp-price-sale">{product.price} <small>ر.س</small></span>
                  <span className="pp-price-original">{product.originalPrice} <small>ر.س</small></span>
                  <span className="pp-save-pill">وفّر {product.discount}%</span>
                </>
              ) : (
                <span className="pp-price-main">{product.price} <small>ر.س</small></span>
              )}
            </div>

            <p className="pp-desc">
              عطر فاخر من مجموعة شذايا الحصرية، مستوحى من أعماق الطبيعة العربية. مزيج متناسق من أرقى المكونات يمنحك حضوراً استثنائياً لا يُنسى طوال اليوم. يجمع بين الأناقة الشرقية والرقي العصري في قارورة تحفة فنية.
            </p>

            {/* Size Selector */}
            <div className="pp-size-section">
              <div className="pp-size-header">
                <span className="pp-qty-label">الحجم</span>
                <span className="pp-selected-size">{selectedSize}</span>
              </div>
              <div className="pp-size-options">
                {SIZE_OPTIONS.map((s) => (
                  <button
                    key={s.label}
                    className={`pp-size-btn${selectedSize === s.label ? ' active' : ''}`}
                    onClick={() => setSelectedSize(s.label)}
                  >
                    {s.popular && <span className="pp-size-popular">الأكثر مبيعاً</span>}
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pp-divider" />

            {/* Qty */}
            <div className="pp-qty-row">
              <span className="pp-qty-label">الكمية</span>
              <div className="pp-qty-ctrl">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}><Minus size={14} /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}><Plus size={14} /></button>
              </div>
            </div>

            {/* Actions */}
            <div className="pp-actions">
              <button className="pp-add-btn" onClick={handleAdd}>
                <ShoppingCart size={18} />
                أضف إلى السلة
              </button>
              <button className={`pp-wish-btn${wishlisted ? ' active' : ''}`} onClick={() => setWishlisted(w => !w)} title="مفضلة">
                <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="pp-share-btn" onClick={handleShare} title={copied ? 'تم النسخ!' : 'مشاركة'}>
                <Share2 size={18} />
              </button>
            </div>
            {copied && <p style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '4px' }}>✓ تم نسخ الرابط</p>}

            {/* Trust */}
            <div className="pp-trust">
              <div className="pp-trust-item"><Truck size={15} /><span>شحن سريع خلال 24-48 ساعة</span></div>
              <div className="pp-trust-item"><Package size={15} /><span>شحن مجاني للطلبات فوق 500 ر.س</span></div>
              <div className="pp-trust-item"><RotateCcw size={15} /><span>إرجاع مجاني خلال 14 يوم</span></div>
              <div className="pp-trust-item"><Shield size={15} /><span>منتج أصلي 100% مضمون</span></div>
            </div>

            {/* Scent Family Badge */}
            <div className="pp-scent-family">
              <span className="pp-scent-family__label">عائلة العطر:</span>
              <span className="pp-scent-family__value">شرقي خشبي</span>
              <span className="pp-scent-family__dot">•</span>
              <span className="pp-scent-family__label">مناسب لـ:</span>
              <span className="pp-scent-family__value">للجنسين</span>
              <span className="pp-scent-family__dot">•</span>
              <span className="pp-scent-family__label">المناسبة:</span>
              <span className="pp-scent-family__value">يومي / خاص</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="pp-tabs">
          <div className="pp-tabs-nav">
            {[['desc', 'الوصف الكامل'], ['ingr', 'المكونات'], ['reviews', 'التقييمات']].map(([key, label]) => (
              <button key={key} className={`pp-tab-btn${activeTab === key ? ' active' : ''}`} onClick={() => setActiveTab(key)}>{label}</button>
            ))}
          </div>
          <div className="pp-tab-content">
            {activeTab === 'desc' && (
              <div className="pp-tab-body">
                <p>مستوحى من روائح الطبيعة العربية الأصيلة، يجمع هذا العطر بين قوة الخشب العربي ونعومة المسك الشرقي وزهور البرية الندية. تركيبة فريدة تدوم على البشرة لساعات طويلة، مناسب للمناسبات الخاصة والاستخدام اليومي على حدٍّ سواء.</p>
                <div className="pp-desc-specs">
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">رائحة العائلة</span>
                    <span className="pp-spec-val">شرقي خشبي</span>
                  </div>
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">الحجم</span>
                    <span className="pp-spec-val">{product.subtitle?.split('/')[1]?.trim() || '100 مل'}</span>
                  </div>
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">النوع</span>
                    <span className="pp-spec-val">{product.subtitle?.split('/')[0]?.trim()}</span>
                  </div>
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">الفئة</span>
                    <span className="pp-spec-val">{product.category}</span>
                  </div>
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">الثبات</span>
                    <span className="pp-spec-val">8–12 ساعة</span>
                  </div>
                  <div className="pp-spec-item">
                    <span className="pp-spec-key">الانتشار</span>
                    <span className="pp-spec-val">متوسط إلى قوي</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'ingr' && (
              <div className="pp-tab-body">
                <p style={{ marginBottom: '20px' }}>نختار أجود المكونات الطبيعية من مصادرها الأصلية حول العالم لضمان تجربة عطرية لا مثيل لها.</p>
                <div className="pp-ingr-grid">
                  {[
                    { name: 'عود كمبودي', origin: 'كمبوديا', icon: '🪵' },
                    { name: 'مسك أبيض', origin: 'الهند', icon: '🌿' },
                    { name: 'ورد الطائف', origin: 'السعودية', icon: '🌹' },
                    { name: 'عنبر رمادي', origin: 'المحيطات', icon: '🫧' },
                    { name: 'صندل هندي', origin: 'الهند', icon: '🌴' },
                    { name: 'فانيلا طبيعية', origin: 'مدغشقر', icon: '✨' },
                  ].map((ing, i) => (
                    <div key={i} className="pp-ingr-item-v2">
                      <span className="pp-ingr-emoji">{ing.icon}</span>
                      <div>
                        <span className="pp-ingr-name">{ing.name}</span>
                        <span className="pp-ingr-origin">{ing.origin}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="pp-tab-body">
                <div className="pp-reviews-summary-v2">
                  <div className="pp-reviews-score-card">
                    <span className="pp-score-big">{product.rating}</span>
                    <div className="pp-score-stars">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < Math.round(product.rating) ? '#f59e0b' : 'none'} color={i < Math.round(product.rating) ? '#f59e0b' : '#d1d5db'} />)}
                    </div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>بناءً على {product.reviews} تقييم</span>
                  </div>
                  <div className="pp-rating-bars">
                    {[5, 4, 3, 2, 1].map(star => {
                      const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 6 : star === 2 ? 3 : 1;
                      return (
                        <div key={star} className="pp-rating-bar-row">
                          <span className="pp-rating-bar-label">{star} ★</span>
                          <div className="pp-rating-bar-track">
                            <div className="pp-rating-bar-fill" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="pp-rating-bar-pct">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pp-review-list">
                  {[
                    { name: 'أحمد محمود', city: 'القاهرة', rating: 5, date: 'منذ أسبوع', text: 'منتج رائع جداً، الرائحة فاخرة وتدوم طويلاً. شحن سريع وتغليف ممتاز. سأشتري مرة أخرى بالتأكيد.' },
                    { name: 'سارة خالد', city: 'الإسكندرية', rating: 4, date: 'منذ شهر', text: 'عطر جميل جداً، الرائحة ناعمة ومميزة. سعره مناسب مقارنة بالجودة العالية. أنصح به جداً.' },
                    { name: 'محمد علي', city: 'الرياض', rating: 5, date: 'منذ أسبوعين', text: 'اشتريته هدية وكان الاستقبال رائعاً. التغليف فاخر جداً ويعكس مستوى البراند.' },
                  ].map((r, i) => (
                    <div key={i} className="pp-review-card-v2">
                      <div className="pp-review-avatar">{r.name[0]}</div>
                      <div className="pp-review-body">
                        <div className="pp-review-head-v2">
                          <div>
                            <span className="pp-reviewer-name">{r.name}</span>
                            <span className="pp-reviewer-city">— {r.city}</span>
                          </div>
                          <span className="pp-review-date">{r.date}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '2px', margin: '6px 0' }}>
                          {[...Array(5)].map((_, j) => <Star key={j} size={13} fill={j < r.rating ? '#f59e0b' : 'none'} color={j < r.rating ? '#f59e0b' : '#d1d5db'} />)}
                        </div>
                        <p className="pp-review-text">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="pp-related">
            <div className="section-head" style={{ textAlign: 'right', marginBottom: '24px' }}>
              <h2 className="section-title">منتجات ذات صلة</h2>
              <span className="title-border" style={{ margin: 0 }} />
            </div>
            <div className="pp-related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
