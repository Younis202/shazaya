import { useEffect } from 'react';
import { X, ShoppingCart, Heart, Star, Minus, Plus, Package, RotateCcw, Shield } from 'lucide-react';
import { useState } from 'react';

export default function QuickView({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!product) return null;

  const images = [product.img, product.imgHover].filter(Boolean);
  const { title, subtitle, price, originalPrice, discount, rating, reviews } = product;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      if (onAddToCart) onAddToCart(product);
    }
    onClose();
  };

  return (
    <>
      <div className="qv-overlay" onClick={onClose} />
      <div className="qv-modal" role="dialog" aria-modal="true" aria-label={title}>
        <button className="qv-close" onClick={onClose} aria-label="إغلاق">
          <X size={20} />
        </button>

        <div className="qv-inner">
          {/* Images */}
          <div className="qv-gallery">
            <div className="qv-main-img">
              <img src={images[activeImg] || product.img} alt={title} />
              {discount && <span className="qv-badge">خصم {discount}%</span>}
            </div>
            {images.length > 1 && (
              <div className="qv-thumbs">
                {images.map((src, i) => (
                  <button
                    key={i}
                    className={`qv-thumb${activeImg === i ? ' active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={src} alt={`${title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="qv-info">
            <p className="qv-category">{subtitle || 'عطور شذايا'}</p>
            <h2 className="qv-title">{title}</h2>

            {rating && (
              <div className="qv-rating">
                <div className="qv-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.round(rating) ? '#f59e0b' : 'none'} color={i < Math.round(rating) ? '#f59e0b' : '#d1d5db'} />
                  ))}
                </div>
                <span className="qv-rating-count">{rating} ({reviews || 0} تقييم)</span>
              </div>
            )}

            <div className="qv-price-row">
              {discount ? (
                <>
                  <span className="qv-price-sale">{price} <small>ج.م</small></span>
                  <span className="qv-price-original">{originalPrice} <small>ج.م</small></span>
                  <span className="qv-discount-pill">وفّر {discount}%</span>
                </>
              ) : (
                <span className="qv-price-main">{price} <small>ج.م</small></span>
              )}
            </div>

            <p className="qv-desc">
              عطر فاخر من مجموعة شذايا الحصرية، مستوحى من أعماق الطبيعة العربية. مزيج متناسق من أرقى المكونات يمنحك حضوراً استثنائياً لا يُنسى طوال اليوم.
            </p>

            <div className="qv-divider" />

            {/* Quantity */}
            <div className="qv-qty-row">
              <span className="qv-qty-label">الكمية:</span>
              <div className="qv-qty-ctrl">
                <button className="qv-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="تقليل">
                  <Minus size={14} />
                </button>
                <span className="qv-qty-val">{qty}</span>
                <button className="qv-qty-btn" onClick={() => setQty(q => q + 1)} aria-label="زيادة">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="qv-actions">
              <button className="qv-add-btn" onClick={handleAdd}>
                <ShoppingCart size={17} />
                إضافة للسلة
              </button>
              <button
                className={`qv-wish-btn${wishlisted ? ' active' : ''}`}
                onClick={() => setWishlisted(w => !w)}
                aria-label="المفضلة"
              >
                <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="qv-badges">
              <div className="qv-badge-item">
                <Package size={14} />
                شحن مجاني فوق 500 ج.م
              </div>
              <div className="qv-badge-item">
                <RotateCcw size={14} />
                إرجاع خلال 14 يوم
              </div>
              <div className="qv-badge-item">
                <Shield size={14} />
                منتج أصلي 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
