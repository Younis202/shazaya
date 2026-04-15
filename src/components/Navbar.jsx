import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, Heart, X, ChevronDown, Menu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'تخفيضات', href: '#', class: 'offers' },
  { label: 'جديدنا', href: '#' },
  { label: 'الأكثر مبيعاً', href: '#' },
  { label: 'جميع المنتجات', href: '#' },
  {
    label: 'العطور', href: '#',
    sub: ['عطور رجالية', 'عطور نسائية', 'للجنسين', 'عطور الجسم', 'عطور الشعر', 'معطر منزلي'],
  },
  { label: 'عود', href: '#' },
  { label: 'دهن', href: '#' },
  { label: 'بخور', href: '#' },
  {
    label: 'المجموعات', href: '#',
    sub: ['هوس', 'الوسام', 'دارج', 'توليفة', 'نفائس الشغف', 'سمو شذايا'],
  },
];

export default function Navbar({ onOpenCart, onOpenSearch, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Hamburger */}
          <button
            className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>

          {/* Logo */}
          <a href="/" className="navbar__logo">
            <img src="/assets/logo.png" alt="شذايا" />
          </a>

          {/* Desktop Nav */}
          <ul className="navbar__nav">
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className="nav-item">
                <a href={item.href} className={`nav-item__link${item.class ? ' ' + item.class : ''}`}>
                  {item.label}
                  {item.sub && <ChevronDown size={11} className="nav-arrow" />}
                </a>
                {item.sub && (
                  <div className="nav-dropdown">
                    {item.sub.map((s, j) => (
                      <div key={j} className="nav-dropdown__item">
                        <a href="#">{s}</a>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button className="nav-action-btn" onClick={onOpenSearch} aria-label="بحث">
              <Search size={19} />
            </button>
            <button className="nav-action-btn" aria-label="المفضلة">
              <Heart size={19} />
            </button>
            <button className="nav-action-btn" aria-label="حسابي">
              <User size={19} />
            </button>
            <button className="nav-action-btn" onClick={onOpenCart} aria-label="السلة">
              <ShoppingCart size={19} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <div className="mm-head">
          <img src="/assets/logo.png" alt="شذايا" />
          <button className="mm-close" onClick={() => setMobileOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <nav className="mm-nav">
          {NAV_ITEMS.map((item, i) => (
            <div key={i} className="mm-item">
              {item.sub ? (
                <>
                  <button
                    className="mm-trigger"
                    onClick={() => setOpenSub(openSub === i ? null : i)}
                  >
                    {item.label}
                    <ChevronDown size={13} style={{ transform: openSub === i ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
                  </button>
                  <div className={`mm-sub${openSub === i ? ' open' : ''}`}>
                    {item.sub.map((s, j) => (
                      <a key={j} href="#">{s}</a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href} className={`mm-link${item.class ? ' ' + item.class : ''}`} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
