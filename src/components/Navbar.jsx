import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, ArrowUpLeft } from 'lucide-react';

const NAV_LINKS = [
  { label: 'المتجر', href: '/shop' },
  { label: 'وصل حديثاً', href: '/shop' },
  { label: 'المجموعات', href: '/shop', sub: [
    { name: 'هوس', desc: '٨ عطور', href: '/shop' },
    { name: 'دارج', desc: '٦ عطور', href: '/shop' },
    { name: 'سمو شذايا', desc: '١٠ عطور', href: '/shop' },
    { name: 'نفائس الشغف', desc: '٥ عطور', href: '/shop' },
    { name: 'الوسام', desc: '٧ عطور', href: '/shop' },
    { name: 'توليفة', desc: '٩ عطور', href: '/shop' },
  ]},
  { label: 'العطور', href: '/shop', sub: [
    { name: 'عطور رجالية', desc: 'تميّز لا يُنسى', href: '/shop' },
    { name: 'عطور نسائية', desc: 'أناقة شرقية', href: '/shop' },
    { name: 'للجنسين', desc: 'روائح مشتركة', href: '/shop' },
    { name: 'دهون وزيوت', desc: 'نادرة وفاخرة', href: '/shop' },
    { name: 'بخور وعود', desc: 'أجود الأنواع', href: '/shop' },
    { name: 'معطر منزلي', desc: 'روح المكان', href: '/shop' },
  ]},
  { label: 'من نحن', href: '/about' },
  { label: 'تواصل', href: '/contact' },
];

export default function Navbar({ onOpenCart, onOpenSearch, cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const location = useLocation();
  const { scrollY } = useScroll();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80));

  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-700"
        style={{
          backgroundColor: scrolled ? 'hsl(36 18% 5% / 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(36 10% 16% / 0.4)' : 'none',
        }}
        onMouseLeave={() => setActiveMega(null)}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.sub ? setActiveMega(link.label) : setActiveMega(null)}
              >
                <Link
                  to={link.href}
                  className="nav-link font-body flex items-center gap-1"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'hsl(36 20% 90% / 0.55)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.55)'}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="relative font-display flex-shrink-0 group"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, letterSpacing: '0.3em', color: 'hsl(36 20% 90%)' }}
          >
            شذايا
            <motion.span
              className="absolute -bottom-1 left-0 right-0 origin-right"
              style={{ height: '1px', backgroundColor: 'hsl(38 58% 52%)', scaleX: 0 }}
              whileHover={{ scaleX: 1, originX: 'left' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {NAV_LINKS.slice(3).map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.sub ? setActiveMega(link.label) : setActiveMega(null)}
              >
                <Link
                  to={link.href}
                  className="nav-link font-body"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'hsl(36 20% 90% / 0.55)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.55)'}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <button
              onClick={onOpenSearch}
              style={{ color: 'hsl(36 20% 90% / 0.55)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.55)'}
              aria-label="بحث"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={onOpenCart}
              className="relative"
              style={{ color: 'hsl(36 20% 90% / 0.55)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.55)'}
              aria-label="السلة"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 flex items-center justify-center font-body font-medium"
                  style={{ backgroundColor: 'hsl(38 58% 52%)', color: 'hsl(36 18% 5%)', fontSize: '9px' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-5 lg:hidden">
            <button onClick={onOpenCart} className="relative" style={{ color: 'hsl(36 20% 90% / 0.7)' }}>
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 flex items-center justify-center font-body"
                  style={{ backgroundColor: 'hsl(38 58% 52%)', color: 'hsl(36 18% 5%)', fontSize: '9px' }}
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'hsl(36 20% 90%)' }}>
              {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {activeMega && NAV_LINKS.find(l => l.label === activeMega)?.sub && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block overflow-hidden"
              style={{ borderTop: '1px solid hsl(36 10% 16% / 0.2)', backgroundColor: 'hsl(36 18% 5% / 0.97)', backdropFilter: 'blur(24px)' }}
              onMouseEnter={() => {}}
              onMouseLeave={() => setActiveMega(null)}
            >
              <div className="px-12 py-10 grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <p className="font-body mb-6" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    {activeMega}
                  </p>
                  <span className="luxury-divider mb-6" />
                  <p className="font-body" style={{ fontSize: '12px', color: 'hsl(38 58% 52%)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    مجموعة شذايا ٢٠٢٦
                  </p>
                </div>
                <div className="col-span-7 grid grid-cols-2 gap-x-12 gap-y-3">
                  {NAV_LINKS.find(l => l.label === activeMega)?.sub?.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setActiveMega(null)}
                        className="group flex items-center justify-between py-3"
                        style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.2)', transition: 'border-color 0.4s' }}
                      >
                        <div>
                          <span className="font-display block" style={{ fontSize: '1.1rem', color: 'hsl(36 20% 90%)', transition: 'color 0.3s ease', fontWeight: 400 }}>
                            {item.name}
                          </span>
                          <p className="font-body mt-0.5" style={{ fontSize: '10px', color: 'hsl(36 10% 50%)' }}>{item.desc}</p>
                        </div>
                        <ArrowUpLeft size={13} strokeWidth={1.5} style={{ color: 'hsl(36 20% 90% / 0.15)', transition: 'color 0.3s' }} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="col-span-2 flex items-end">
                  <Link
                    to="/shop"
                    onClick={() => setActiveMega(null)}
                    className="font-body flex items-center gap-2 group"
                    style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.35)', transition: 'color 0.3s' }}
                  >
                    <span>عرض الكل</span>
                    <ArrowUpLeft size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center lg:hidden"
            style={{ backgroundColor: 'hsl(36 18% 5%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-display leading-none" style={{ fontSize: '28vw', fontWeight: 300, color: 'hsl(36 20% 90% / 0.02)' }}>ش</span>
            </div>
            <nav className="flex flex-col items-center gap-5 relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display block text-center"
                    style={{ fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: 300, letterSpacing: '0.05em', color: 'hsl(36 20% 90%)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-10 flex flex-col items-center gap-5"
            >
              <div className="flex gap-8">
                {['إنستغرام', 'تيك توك', 'يوتيوب'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-body"
                    style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
