import { Heart, Eye, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const { title, subtitle, img, imgHover, price, originalPrice, discount, isNew, rating, reviews } = product;

  const handleAdd = (e) => {
    e.preventDefault();
    if (onAddToCart) onAddToCart(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    if (onQuickView) onQuickView(product);
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <a href="#">
          <img className="product-card__img main" src={img} alt={title} loading="lazy" />
          {imgHover && <img className="product-card__img hover-img" src={imgHover} alt={title} loading="lazy" />}
        </a>

        {discount && <span className="product-card__badge">{discount}%</span>}
        {isNew && !discount && <span className="product-card__badge new">جديد</span>}

        <div className="product-card__actions">
          <button className="p-action-btn" title="إضافة للمفضلة" aria-label="مفضلة">
            <Heart size={14} />
          </button>
          <button className="p-action-btn" title="عرض سريع" aria-label="عرض سريع" onClick={handleQuickView}>
            <Eye size={14} />
          </button>
        </div>
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">
          <a href="#">{title}</a>
        </h3>
        {subtitle && <p className="product-card__subtitle">{subtitle}</p>}

        {rating && (
          <div className="product-card__rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: i < Math.round(rating) ? '#f59e0b' : '#d1d5db' }}>★</span>
              ))}
            </div>
            {reviews && <span className="rating-count">({reviews})</span>}
          </div>
        )}

        <div className="product-card__price">
          {discount ? (
            <>
              <span className="price-sale">{price} <i className="price-egp">ج.م</i></span>
              <span className="price-original">{originalPrice} <i className="price-egp">ج.م</i></span>
            </>
          ) : (
            <span className="price-normal">{price} <i className="price-egp">ج.م</i></span>
          )}
        </div>
        {discount && <span className="discount-label">خصم {discount}%</span>}
      </div>

      <button className="product-card__add-btn" onClick={handleAdd}>
        <ShoppingCart size={14} />
        إضافة للسلة
      </button>
    </div>
  );
}
