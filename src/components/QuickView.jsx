import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Heart, Star, Minus, Plus, Package, RotateCcw, Shield } from 'lucide-react';

export default function QuickView({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  if (!product) return null;

  const images = [product.img, product.imgHover].filter(Boolean);
  const { title, subtitle, price, originalPrice, discount, rating, reviews } = product;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) { if (onAddToCart) onAddToCart(product); }
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[75] flex items-center justify-center p-4"
        style={{ backgroundColor: 'hsl(36 18% 5% / 0.85)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-y-auto"
          style={{ maxWidth: '900px', maxHeight: '90vh', backgroundColor: 'hsl(36 14% 8%)', border: '1px solid hsl(36 10% 16% / 0.4)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 flex items-center justify-center"
            style={{ width: '36px', height: '36px', color: 'hsl(36 20% 90% / 0.4)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.4)'}
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="p-6">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', backgroundColor: 'hsl(36 14% 6%)' }}>
                <img src={images[activeImg] || product.img} alt={title} className="w-full h-full object-cover" />
                {discount && (
                  <span className="absolute top-3 right-3 font-body" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '6px 10px', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', color: 'hsl(38 58% 52%)' }}>
                    -{discount}%
                  </span>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className="overflow-hidden"
                      style={{ width: '56px', height: '68px', border: i === activeImg ? '1px solid hsl(38 58% 52%)' : '1px solid hsl(36 10% 16% / 0.4)', transition: 'border-color 0.3s' }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 flex flex-col justify-center">
              <p className="font-body mb-1" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                {subtitle}
              </p>
              <h2 className="font-display mb-4" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{title}</h2>

              {rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.round(rating) ? 'hsl(38 58% 52%)' : 'none'} color={i < Math.round(rating) ? 'hsl(38 58% 52%)' : 'hsl(36 10% 30%)'} />
                    ))}
                  </div>
                  <span className="font-body" style={{ fontSize: '11px', color: 'hsl(36 10% 50%)' }}>({reviews || 0} تقييم)</span>
                </div>
              )}

              <div className="mb-6">
                {discount ? (
                  <div className="flex items-baseline gap-3">
                    <span className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{price} <small style={{ fontSize: '0.9rem' }}>ر.س</small></span>
                    <span className="font-body line-through" style={{ fontSize: '1rem', color: 'hsl(36 10% 40%)' }}>{originalPrice}</span>
                    <span className="font-body" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(38 58% 52%)', border: '1px solid hsl(38 58% 52% / 0.3)', padding: '3px 8px' }}>
                      وفّر {discount}%
                    </span>
                  </div>
                ) : (
                  <span className="font-display" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{price} <small style={{ fontSize: '0.9rem', color: 'hsl(36 10% 50%)' }}>ر.س</small></span>
                )}
              </div>

              <p className="font-body mb-6" style={{ fontSize: '13px', lineHeight: 1.7, color: 'hsl(36 10% 50%)' }}>
                عطر فاخر من مجموعة شذايا الحصرية، مستوحى من أعماق الطبيعة العربية. مزيج متناسق من أرقى المكونات يمنحك حضوراً استثنائياً لا يُنسى.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-body" style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>الكمية:</span>
                <div className="flex items-center" style={{ border: '1px solid hsl(36 10% 16% / 0.5)' }}>
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="flex items-center justify-center"
                    style={{ width: '36px', height: '36px', color: 'hsl(36 20% 90% / 0.5)', transition: 'color 0.2s' }}
                  >
                    <Minus size={12} strokeWidth={1.5} />
                  </button>
                  <span className="font-body" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: 'hsl(36 20% 90%)' }}>{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    className="flex items-center justify-center"
                    style={{ width: '36px', height: '36px', color: 'hsl(36 20% 90% / 0.5)', transition: 'color 0.2s' }}
                  >
                    <Plus size={12} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAdd}
                  className="flex-1 flex items-center justify-center gap-2 font-body"
                  style={{ padding: '14px', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', backgroundColor: 'hsl(36 20% 90%)', color: 'hsl(36 18% 5%)', transition: 'background-color 0.4s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'}
                >
                  <ShoppingBag size={15} strokeWidth={1.5} />
                  أضف للسلة
                </button>
                <button
                  onClick={() => setWishlisted(w => !w)}
                  className="flex items-center justify-center"
                  style={{
                    width: '50px',
                    border: wishlisted ? '1px solid hsl(38 58% 52%)' : '1px solid hsl(36 10% 16% / 0.5)',
                    color: wishlisted ? 'hsl(38 58% 52%)' : 'hsl(36 20% 90% / 0.4)',
                    transition: 'border-color 0.3s, color 0.3s',
                  }}
                >
                  <Heart size={16} strokeWidth={1.5} fill={wishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="space-y-2">
                {[
                  [Package, 'شحن مجاني للطلبات فوق ٥٠٠ ر.س'],
                  [RotateCcw, 'إرجاع مجاني خلال ١٤ يوم'],
                  [Shield, 'منتج أصلي ١٠٠% مضمون'],
                ].map(([Icon, text], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={13} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)' }} />
                    <span className="font-body" style={{ fontSize: '11px', color: 'hsl(36 10% 50%)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
