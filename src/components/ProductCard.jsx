import { useState } from 'react';
import { Heart, ArrowUpLeft, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const { id, title, subtitle, img, imgHover, price, originalPrice, discount, isNew, rating, reviews } = product;
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = (e) => { e.preventDefault(); if (onAddToCart) onAddToCart(product); };
  const handleQuickView = (e) => { e.preventDefault(); if (onQuickView) onQuickView(product); };

  return (
    <div className="group" style={{ cursor: 'pointer' }}>
      <Link to={`/product/${id}`}>
        <div
          className="relative overflow-hidden mb-4"
          style={{ aspectRatio: '4/5', backgroundColor: 'hsl(36 14% 8%)' }}
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform"
            style={{ transitionDuration: '2s', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          {imgHover && (
            <img
              src={imgHover}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          )}

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: 'linear-gradient(to top, hsl(36 18% 5% / 0.65) 0%, hsl(36 18% 5% / 0.1) 50%, transparent 100%)' }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="flex items-center justify-between">
              <button
                className="font-body flex items-center gap-2"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  backgroundColor: 'hsl(36 20% 90%)',
                  color: 'hsl(36 18% 5%)',
                  padding: '10px 16px',
                  transition: 'background-color 0.3s',
                }}
                onClick={handleAdd}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'}
              >
                <ShoppingBag size={11} strokeWidth={1.5} />
                أضف
              </button>
              <button
                onClick={handleQuickView}
                className="flex items-center justify-center"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid hsl(36 20% 90% / 0.4)',
                  color: 'hsl(36 20% 90%)',
                  transition: 'border-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(38 58% 52%)'; e.currentTarget.style.color = 'hsl(38 58% 52%)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(36 20% 90% / 0.4)'; e.currentTarget.style.color = 'hsl(36 20% 90%)'; }}
              >
                <ArrowUpLeft size={13} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {discount && (
            <div className="absolute top-3 right-3">
              <span
                className="font-body"
                style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', color: 'hsl(38 58% 52%)', padding: '6px 10px' }}
              >
                -{discount}%
              </span>
            </div>
          )}
          {isNew && !discount && (
            <div className="absolute top-3 right-3">
              <span
                className="font-body"
                style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', color: 'hsl(36 20% 90% / 0.7)', padding: '6px 10px' }}
              >
                جديد
              </span>
            </div>
          )}

          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span
              className="font-body"
              style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', backgroundColor: 'hsl(36 18% 5% / 0.5)', backdropFilter: 'blur(8px)', color: 'hsl(36 10% 50%)', padding: '6px 10px' }}
            >
              {subtitle?.split('/')[0]?.trim()}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start px-1">
          <div>
            <h3
              className="font-display transition-colors duration-500"
              style={{ fontSize: '1rem', fontWeight: 400, color: 'hsl(36 20% 90%)', lineHeight: 1.3 }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
            >
              {title}
            </h3>
            <p className="font-body mt-1.5" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              {subtitle?.split('/')[1]?.trim() || subtitle}
            </p>
            {rating && (
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill={i < Math.round(rating) ? 'hsl(38 58% 52%)' : 'none'} color={i < Math.round(rating) ? 'hsl(38 58% 52%)' : 'hsl(36 10% 30%)'} />
                ))}
                {reviews && <span className="font-body mr-1" style={{ fontSize: '10px', color: 'hsl(36 10% 50%)' }}>({reviews})</span>}
              </div>
            )}
          </div>
          <div className="text-right mt-1">
            {discount ? (
              <>
                <span className="font-body block" style={{ fontSize: '13px', color: 'hsl(38 58% 52%)', fontWeight: 500 }}>{price} ر.س</span>
                <span className="font-body block line-through" style={{ fontSize: '11px', color: 'hsl(36 10% 40%)' }}>{originalPrice}</span>
              </>
            ) : (
              <span className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90% / 0.6)' }}>{price} ر.س</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
