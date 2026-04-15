import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <Link to={`/product/${product.id}`}>
          <img className="product-card__img main" src={img} alt={title} loading="lazy" />
          {imgHover && (
            <img className="product-card__img hover-img" src={imgHover} alt={title} loading="lazy" />
          )}
        </Link>

        {discount && (
          <span className="product-card__badge discount-badge">-{discount}%</span>
        )}
        {isNew && !discount && (
          <span className="product-card__badge new-badge">جديد</span>
        )}

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
          <Link to={`/product/${product.id}`}>{title}</Link>
        </h3>
        {subtitle && <p className="product-card__subtitle">{subtitle}</p>}

        {rating && (
          <div className="product-card__rating">
            <div className="card-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  fill={i < Math.round(rating) ? '#f59e0b' : 'none'}
                  color={i < Math.round(rating) ? '#f59e0b' : '#d1d5db'}
                />
              ))}
            </div>
            {reviews && <span className="rating-count">({reviews})</span>}
          </div>
        )}

        <div className="product-card__price">
          {discount ? (
            <>
              <span className="price-sale">
                {price} <i className="price-egp">ر.س</i>
              </span>
              <span className="price-original">
                {originalPrice} <i className="price-egp">ر.س</i>
              </span>
            </>
          ) : (
            <span className="price-normal">
              {price} <i className="price-egp">ر.س</i>
            </span>
          )}
        </div>
      </div>

      <button className="product-card__add-btn" onClick={handleAdd}>
        <ShoppingCart size={14} />
        إضافة للسلة
      </button>
    </div>
  );
}
