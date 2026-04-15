import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, Heart, Share2, Star, Minus, Plus, ChevronLeft, Package, RotateCcw, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

const SIZE_OPTIONS = ['30 مل', '50 مل', '100 مل'];

const INGREDIENTS = [
  { name: 'عود كمبودي', origin: 'كمبوديا' },
  { name: 'مسك أبيض', origin: 'الهند' },
  { name: 'ورد الطائف', origin: 'السعودية' },
  { name: 'عنبر رمادي', origin: 'المحيطات' },
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
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '70vh', padding: '80px 24px' }}>
        <span className="font-display mb-6" style={{ fontSize: '6rem', fontWeight: 300, color: 'hsl(36 20% 90% / 0.05)' }}>٤٠٤</span>
        <h2 className="font-display mb-3" style={{ fontSize: '2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>المنتج غير موجود</h2>
        <p className="font-body mb-8" style={{ fontSize: '13px', color: 'hsl(36 10% 50%)' }}>عذراً، لم نجد هذا المنتج.</p>
        <Link to="/shop" className="btn-primary">تصفح المنتجات</Link>
      </div>
    );
  }

  const images = [product.img, product.imgHover].filter(Boolean);
  const related = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) onAddToCart && onAddToCart(product);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="px-6 md:px-12 max-w-screen-xl mx-auto mb-6">
        <nav className="flex items-center gap-2 font-body" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
          <Link to="/" className="transition-colors duration-300 hover:text-current" style={{ color: 'inherit', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
          >الرئيسية</Link>
          <span>/</span>
          <Link to="/shop" style={{ color: 'inherit', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
          >المتجر</Link>
          <span>/</span>
          <span style={{ color: 'hsl(36 20% 90% / 0.6)' }}>{product.title}</span>
        </nav>
      </div>

      <div ref={mainRef} className="px-6 md:px-12 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-20">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={isInView ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : {}}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        >
          <div
            className="relative overflow-hidden mb-4"
            style={{ aspectRatio: '4/5', backgroundColor: 'hsl(36 14% 8%)' }}
          >
            <img
              src={images[activeImg] || product.img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <span className="absolute top-4 right-4 font-body" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '6px 12px', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', color: 'hsl(38 58% 52%)' }}>
                -{product.discount}%
              </span>
            )}
            <div className="absolute top-4 left-4">
              <button
                onClick={() => setWishlisted(w => !w)}
                className="flex items-center justify-center"
                style={{ width: '40px', height: '40px', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', color: wishlisted ? 'hsl(38 58% 52%)' : 'hsl(36 20% 90% / 0.6)', border: `1px solid ${wishlisted ? 'hsl(38 58% 52% / 0.5)' : 'hsl(36 10% 16% / 0.3)'}`, transition: 'all 0.3s' }}
              >
                <Heart size={16} strokeWidth={1.5} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="overflow-hidden flex-shrink-0"
                  style={{
                    width: '72px',
                    height: '88px',
                    border: i === activeImg ? '1px solid hsl(38 58% 52%)' : '1px solid hsl(36 10% 16% / 0.3)',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
          style={{ paddingTop: '20px' }}
        >
          <p className="font-body mb-2" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            {product.category}
          </p>
          <h1 className="font-display mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'hsl(36 20% 90%)', lineHeight: 1.1 }}>
            {product.title}
          </h1>
          <p className="font-body mb-5" style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            {product.subtitle}
          </p>

          {product.rating && (
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < Math.round(product.rating) ? 'hsl(38 58% 52%)' : 'none'} color={i < Math.round(product.rating) ? 'hsl(38 58% 52%)' : 'hsl(36 10% 30%)'} />
                ))}
              </div>
              <span className="font-body" style={{ fontSize: '11px', color: 'hsl(36 10% 50%)' }}>{product.rating} ({product.reviews || 0} تقييم)</span>
              <span className="font-body" style={{ fontSize: '10px', color: 'hsl(38 58% 52%)', letterSpacing: '0.15em' }}>✓ متوفر</span>
            </div>
          )}

          <div className="mb-8">
            {product.discount ? (
              <div className="flex items-baseline gap-4">
                <span className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{product.price} <small style={{ fontSize: '1rem' }}>ر.س</small></span>
                <span className="font-body line-through" style={{ fontSize: '1.1rem', color: 'hsl(36 10% 40%)' }}>{product.originalPrice}</span>
                <span className="font-body" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(38 58% 52%)', border: '1px solid hsl(38 58% 52% / 0.3)', padding: '3px 10px' }}>
                  وفّر {product.discount}%
                </span>
              </div>
            ) : (
              <span className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{product.price} <small style={{ fontSize: '1rem', color: 'hsl(36 10% 50%)' }}>ر.س</small></span>
            )}
          </div>

          <p className="font-body mb-8" style={{ fontSize: '13px', lineHeight: 1.85, color: 'hsl(36 10% 50%)', maxWidth: '480px' }}>
            عطر فاخر من مجموعة شذايا الحصرية، مستوحى من أعماق الطبيعة العربية. مزيج متناسق من أرقى المكونات يمنحك حضوراً استثنائياً لا يُنسى طوال اليوم.
          </p>

          <div className="mb-8">
            <p className="font-body mb-4" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              الحجم
            </p>
            <div className="flex gap-3">
              {SIZE_OPTIONS.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className="font-body"
                  style={{
                    padding: '10px 20px',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    border: `1px solid ${selectedSize === size ? 'hsl(38 58% 52%)' : 'hsl(36 10% 16% / 0.4)'}`,
                    color: selectedSize === size ? 'hsl(38 58% 52%)' : 'hsl(36 10% 50%)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { if (selectedSize !== size) { e.currentTarget.style.borderColor = 'hsl(36 20% 90% / 0.4)'; e.currentTarget.style.color = 'hsl(36 20% 90%)'; } }}
                  onMouseLeave={(e) => { if (selectedSize !== size) { e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.4)'; e.currentTarget.style.color = 'hsl(36 10% 50%)'; } }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <p className="font-body" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              الكمية
            </p>
            <div className="flex items-center" style={{ border: '1px solid hsl(36 10% 16% / 0.4)' }}>
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="flex items-center justify-center"
                style={{ width: '40px', height: '40px', color: 'hsl(36 20% 90% / 0.4)', transition: 'color 0.2s' }}
              >
                <Minus size={12} strokeWidth={1.5} />
              </button>
              <span className="font-body" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'hsl(36 20% 90%)', borderRight: '1px solid hsl(36 10% 16% / 0.4)', borderLeft: '1px solid hsl(36 10% 16% / 0.4)' }}>{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="flex items-center justify-center"
                style={{ width: '40px', height: '40px', color: 'hsl(36 20% 90% / 0.4)', transition: 'color 0.2s' }}
              >
                <Plus size={12} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAdd}
              className="flex-1 flex items-center justify-center gap-3 font-body"
              style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', backgroundColor: 'hsl(36 20% 90%)', color: 'hsl(36 18% 5%)', transition: 'background-color 0.4s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'}
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              أضف إلى السلة
            </button>
            <button
              onClick={handleShare}
              className="flex items-center justify-center"
              style={{ width: '52px', border: '1px solid hsl(36 10% 16% / 0.4)', color: copied ? 'hsl(38 58% 52%)' : 'hsl(36 20% 90% / 0.4)', transition: 'all 0.3s' }}
              title={copied ? 'تم النسخ!' : 'مشاركة'}
            >
              <Share2 size={15} strokeWidth={1.5} />
            </button>
          </div>

          <div className="space-y-3 pt-6" style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)' }}>
            {[
              [Truck, 'شحن سريع خلال 24–48 ساعة'],
              [Package, 'شحن مجاني للطلبات فوق ٥٠٠ ر.س'],
              [RotateCcw, 'إرجاع مجاني خلال ١٤ يوم'],
              [Shield, 'منتج أصلي ١٠٠% مضمون'],
            ].map(([Icon, text], i) => (
              <div key={i} className="flex items-center gap-3">
                <Icon size={13} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)' }} />
                <span className="font-body" style={{ fontSize: '12px', color: 'hsl(36 10% 50%)' }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto mb-20">
        <div className="flex gap-8 mb-10" style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}>
          {[['desc', 'الوصف'], ['ingr', 'المكونات'], ['reviews', 'التقييمات']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="font-body pb-5 relative"
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: activeTab === key ? 'hsl(36 20% 90%)' : 'hsl(36 10% 50%)',
                transition: 'color 0.3s',
              }}
            >
              {label}
              {activeTab === key && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ backgroundColor: 'hsl(38 58% 52%)' }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {activeTab === 'desc' && (
            <div>
              <p className="font-body mb-8" style={{ fontSize: '14px', lineHeight: 1.9, color: 'hsl(36 10% 50%)' }}>
                مستوحى من روائح الطبيعة العربية الأصيلة، يجمع هذا العطر بين قوة الخشب العربي ونعومة المسك الشرقي. تركيبة فريدة تدوم على البشرة لساعات طويلة.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  ['رائحة العائلة', 'شرقي خشبي'],
                  ['الحجم', product.subtitle?.split('/')[1]?.trim() || '100 مل'],
                  ['النوع', product.subtitle?.split('/')[0]?.trim()],
                  ['الفئة', product.category],
                  ['الثبات', '8–12 ساعة'],
                  ['الانتشار', 'متوسط إلى قوي'],
                ].map(([key, val]) => (
                  <div key={key} className="py-4" style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}>
                    <p className="font-body mb-1" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{key}</p>
                    <p className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90%)' }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ingr' && (
            <div>
              <p className="font-body mb-8" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)' }}>
                نختار أجود المكونات الطبيعية من مصادرها الأصلية لضمان تجربة عطرية لا مثيل لها.
              </p>
              <div className="space-y-4">
                {INGREDIENTS.map((ing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.2)' }}
                  >
                    <span className="font-body" style={{ fontSize: '14px', color: 'hsl(36 20% 90%)' }}>{ing.name}</span>
                    <span className="font-body" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{ing.origin}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center gap-8 mb-12 pb-8" style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}>
                <div className="text-center">
                  <span className="font-display block" style={{ fontSize: '4rem', fontWeight: 300, color: 'hsl(38 58% 52%)', lineHeight: 1 }}>{product.rating}</span>
                  <div className="flex gap-1 justify-center mt-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="hsl(38 58% 52%)" color="hsl(38 58% 52%)" />)}
                  </div>
                  <p className="font-body mt-2" style={{ fontSize: '10px', color: 'hsl(36 10% 50%)', letterSpacing: '0.15em' }}>
                    {product.reviews} تقييم
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  { name: 'أحمد محمود', city: 'القاهرة', rating: 5, date: 'منذ أسبوع', text: 'منتج رائع جداً، الرائحة فاخرة وتدوم طويلاً.' },
                  { name: 'سارة خالد', city: 'الإسكندرية', rating: 4, date: 'منذ شهر', text: 'عطر جميل جداً، الرائحة ناعمة ومميزة. أنصح به.' },
                  { name: 'محمد علي', city: 'الرياض', rating: 5, date: 'منذ أسبوعين', text: 'اشتريته هدية وكان الاستقبال رائعاً.' },
                ].map((r, i) => (
                  <div key={i} className="py-6" style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.2)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div style={{ width: '32px', height: '32px', backgroundColor: 'hsl(38 58% 52% / 0.1)', border: '1px solid hsl(38 58% 52% / 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="font-display" style={{ fontSize: '14px', color: 'hsl(38 58% 52%)' }}>{r.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90%)' }}>{r.name}</p>
                          <p className="font-body" style={{ fontSize: '10px', color: 'hsl(36 10% 50%)', letterSpacing: '0.15em' }}>{r.city}</p>
                        </div>
                      </div>
                      <span className="font-body" style={{ fontSize: '10px', color: 'hsl(36 10% 50%)' }}>{r.date}</span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={j < r.rating ? 'hsl(38 58% 52%)' : 'none'} color={j < r.rating ? 'hsl(38 58% 52%)' : 'hsl(36 10% 30%)'} />)}
                    </div>
                    <p className="font-body" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 55%)' }}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {related.length > 0 && (
        <div
          className="px-6 md:px-12 max-w-screen-xl mx-auto pb-20"
          style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)', paddingTop: '60px' }}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body mb-4" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>قد يعجبك أيضاً</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 3rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                منتجات <span style={{ fontStyle: 'italic' }}>ذات صلة</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} />)}
          </div>
        </div>
      )}
    </div>
  );
}
