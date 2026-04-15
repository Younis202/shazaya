import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, X, ChevronDown, Menu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'تخفيضات', href: '/shop', class: 'offers' },
  { label: 'جديدنا', href: '/shop' },
  { label: 'الأكثر مبيعاً', href: '/shop' },
  { label: 'جميع المنتجات', href: '/shop' },
  {
    label: 'العطور', href: '/shop',
    sub: [
      { label: 'عطور رجالية', href: '/shop' },
      { label: 'عطور نسائية', href: '/shop' },
      { label: 'للجنسين', href: '/shop' },
      { label: 'عطور الجسم', href: '/shop' },
      { label: 'عطور الشعر', href: '/shop' },
      { label: 'معطر منزلي', href: '/shop' },
    ],
  },
  { label: 'عود', href: '/shop' },
  { label: 'دهن', href: '/shop' },
  { label: 'بخور', href: '/shop' },
  {
    label: 'المجموعات', href: '/shop',
    sub: [
      { label: 'هوس', href: '/shop' },
      { label: 'الوسام', href: '/shop' },
      { label: 'دارج', href: '/shop' },
      { label: 'توليفة', href: '/shop' },
      { label: 'نفائس الشغف', href: '/shop' },
      { label: 'سمو شذايا', href: '/shop' },
    ],
  },
];

export default function Navbar({ onOpenCart, onOpenSearch, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}${transparent ? ' transparent' : ''}`}>
        <div className="container navbar__inner">
          <button
            className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>

          <Link to="/" className="navbar__logo">
            <img src="/assets/logo.png" alt="شذايا" />
          </Link>

          <ul className="navbar__nav">
            {NAV_ITEMS.map((item, i) => (
              <li key={i} className="nav-item">
                <Link to={item.href} className={`nav-item__link${item.class ? ' ' + item.class : ''}`}>
                  {item.label}
                  {item.sub && <ChevronDown size={11} className="nav-arrow" />}
                </Link>
                {item.sub && (
                  <div className="nav-dropdown">
                    {item.sub.map((s, j) => (
                      <div key={j} className="nav-dropdown__item">
                        <Link to={s.href}>{s.label}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="nav-action-btn" onClick={onOpenSearch} aria-label="بحث">
              <Search size={19} />
            </button>
            <button className="nav-action-btn" aria-label="المفضلة">
              <Heart size={19} />
            </button>
            <Link to="/account" className="nav-action-btn" aria-label="حسابي">
              <User size={19} />
            </Link>
            <button className="nav-action-btn" onClick={onOpenCart} aria-label="السلة">
              <ShoppingCart size={19} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />

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
                      <Link key={j} to={s.href}>{s.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.href} className={`mm-link${item.class ? ' ' + item.class : ''}`}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mm-item">
            <Link to="/about" className="mm-link">من نحن</Link>
          </div>
          <div className="mm-item">
            <Link to="/contact" className="mm-link">اتصل بنا</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
