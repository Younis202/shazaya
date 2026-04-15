import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose, items, onRemove }) {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full flex flex-col"
            style={{
              maxWidth: '440px',
              backgroundColor: 'hsl(36 14% 8%)',
              borderLeft: '1px solid hsl(36 10% 16% / 0.3)',
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={17} strokeWidth={1.5} style={{ color: 'hsl(36 20% 90%)' }} />
                <h2 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                  حقيبتك <span style={{ fontStyle: 'italic' }}>الفاخرة</span>
                </h2>
                <span className="font-body" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                  ({items.length} قطعة)
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center"
                style={{ width: '36px', height: '36px', color: 'hsl(36 20% 90% / 0.4)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.4)'}
              >
                <X size={17} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag size={40} strokeWidth={1} style={{ color: 'hsl(36 20% 90% / 0.08)' }} />
                  <p className="font-display" style={{ fontSize: '1.2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                    سلتك فارغة
                  </p>
                  <p className="font-body" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    اكتشف مجموعتنا
                  </p>
                  <Link
                    to="/shop"
                    onClick={onClose}
                    className="font-body mt-4"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                      color: 'hsl(36 20% 90%)',
                      border: '1px solid hsl(36 10% 16% / 0.5)',
                      padding: '12px 28px',
                      transition: 'border-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(38 58% 52%)'; e.currentTarget.style.color = 'hsl(38 58% 52%)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.5)'; e.currentTarget.style.color = 'hsl(36 20% 90%)'; }}
                  >
                    تسوق الآن
                  </Link>
                </div>
              ) : (
                <div>
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      className="flex gap-4 py-5"
                      style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.2)' }}
                    >
                      <Link to={`/product/${item.id}`} onClick={onClose} className="flex-shrink-0 overflow-hidden" style={{ width: '70px', height: '85px' }}>
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ backgroundColor: 'hsl(36 14% 10%)' }} />
                      </Link>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            onClick={onClose}
                            className="font-display block truncate"
                            style={{ fontSize: '0.95rem', color: 'hsl(36 20% 90%)', fontWeight: 400, transition: 'color 0.3s' }}
                          >
                            {item.title}
                          </Link>
                          <p className="font-body mt-1" style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'hsl(36 10% 50%)' }}>
                            {item.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-body" style={{ fontSize: '13px', color: 'hsl(38 58% 52%)', fontWeight: 500 }}>
                            {item.price} ر.س
                          </span>
                          <button
                            onClick={() => onRemove(i)}
                            style={{ color: 'hsl(36 20% 90% / 0.25)', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0 70% 60%)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.25)'}
                          >
                            <Trash2 size={13} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-5 space-y-4" style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-body" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    الإجمالي
                  </span>
                  <span className="font-display" style={{ fontSize: '1.3rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                    {total.toFixed(2)} ر.س
                  </span>
                </div>
                <p className="font-body" style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'hsl(36 10% 50% / 0.5)' }}>
                  رسوم الشحن تُحسب عند الإتمام
                </p>
                <button
                  className="w-full flex items-center justify-center gap-3 font-body"
                  style={{
                    padding: '16px',
                    fontSize: '11px',
                    letterSpacing: '0.35em',
                    textTransform: 'uppercase',
                    backgroundColor: 'hsl(36 20% 90%)',
                    color: 'hsl(36 18% 5%)',
                    transition: 'background-color 0.4s, color 0.4s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'; }}
                >
                  إتمام الشراء
                  <ArrowLeft size={14} strokeWidth={1.5} />
                </button>
                <button
                  onClick={onClose}
                  className="w-full font-body text-center py-2"
                  style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
                >
                  متابعة التسوق
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
