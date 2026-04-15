import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, ChevronLeft, Package, RotateCcw, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

export default function ProductPage({ onAddToCart, onQuickView }) {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('desc');

  if (!product) {
    return (
      <div className="not-found-page">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
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

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">الرئيسية</Link>
          <ChevronLeft size={13} className="breadcrumb-sep" />
          <Link to="/shop" className="breadcrumb-link">المتجر</Link>
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
          </div>

          {/* Info */}
          <div className="pp-info">
            <p className="pp-category">{product.category}</p>
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
              <button className={`pp-wish-btn${wishlisted ? ' active' : ''}`} onClick={() => setWishlisted(w => !w)}>
                <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="pp-share-btn">
                <Share2 size={18} />
              </button>
            </div>

            {/* Trust */}
            <div className="pp-trust">
              <div className="pp-trust-item"><Truck size={15} /><span>شحن سريع خلال 24-48 ساعة</span></div>
              <div className="pp-trust-item"><Package size={15} /><span>شحن مجاني للطلبات فوق 500 ر.س</span></div>
              <div className="pp-trust-item"><RotateCcw size={15} /><span>إرجاع مجاني خلال 14 يوم</span></div>
              <div className="pp-trust-item"><Shield size={15} /><span>منتج أصلي 100% مضمون</span></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="pp-tabs">
          <div className="pp-tabs-nav">
            {[['desc', 'الوصف'], ['ingr', 'المكونات'], ['reviews', 'التقييمات']].map(([key, label]) => (
              <button key={key} className={`pp-tab-btn${activeTab === key ? ' active' : ''}`} onClick={() => setActiveTab(key)}>{label}</button>
            ))}
          </div>
          <div className="pp-tab-content">
            {activeTab === 'desc' && (
              <div className="pp-tab-body">
                <p>مستوحى من روائح الطبيعة العربية الأصيلة، يجمع هذا العطر بين قوة الخشب العربي ونعومة المسك الشرقي وزهور البرية الندية. تركيبة فريدة تدوم على البشرة لساعات طويلة، مناسب للمناسبات الخاصة والاستخدام اليومي على حدٍّ سواء.</p>
                <ul style={{ margin: '16px 0 0', paddingRight: '20px', color: 'var(--text-secondary)', lineHeight: 2 }}>
                  <li>رائحة العائلة: شرقي خشبي</li>
                  <li>الحجم: {product.subtitle?.split('/')[1]?.trim() || '100 مل'}</li>
                  <li>النوع: {product.subtitle?.split('/')[0]?.trim()}</li>
                  <li>الفئة: {product.category}</li>
                </ul>
              </div>
            )}
            {activeTab === 'ingr' && (
              <div className="pp-tab-body">
                <div className="pp-ingr-grid">
                  {['عود كمبودي', 'مسك أبيض', 'ورد الطائف', 'عنبر رمادي', 'صندل هندي', 'فانيلا طبيعية'].map(i => (
                    <div key={i} className="pp-ingr-item">
                      <span className="pp-ingr-dot" />
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="pp-tab-body">
                <div className="pp-reviews-summary">
                  <div className="pp-reviews-score">
                    <span className="pp-score-big">{product.rating}</span>
                    <div className="pp-score-stars">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < Math.round(product.rating) ? '#f59e0b' : 'none'} color={i < Math.round(product.rating) ? '#f59e0b' : '#d1d5db'} />)}
                    </div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{product.reviews} تقييم</span>
                  </div>
                </div>
                <div className="pp-review-list">
                  {[
                    { name: 'أحمد محمود', rating: 5, date: 'منذ أسبوع', text: 'منتج رائع جداً، الرائحة فاخرة وتدوم طويلاً. شحن سريع وتغليف ممتاز. سأشتري مرة أخرى.' },
                    { name: 'سارة خالد', rating: 4, date: 'منذ شهر', text: 'عطر جميل جداً، الرائحة ناعمة ومميزة. سعره مناسب مقارنة بالجودة.' },
                  ].map((r, i) => (
                    <div key={i} className="pp-review-card">
                      <div className="pp-review-head">
                        <span className="pp-reviewer-name">{r.name}</span>
                        <span className="pp-review-date">{r.date}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '2px', margin: '6px 0' }}>
                        {[...Array(5)].map((_, j) => <Star key={j} size={13} fill={j < r.rating ? '#f59e0b' : 'none'} color={j < r.rating ? '#f59e0b' : '#d1d5db'} />)}
                      </div>
                      <p className="pp-review-text">{r.text}</p>
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
