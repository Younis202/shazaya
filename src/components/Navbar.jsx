import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';

const navItems = [
  { label: 'تخفيضات', href: '#offers', className: 'offers' },
  { label: 'العطور', href: '#products' },
  { label: 'المجموعات', href: '#collections' },
  { label: 'الرجالية', href: '#men' },
  { label: 'النسائية', href: '#women' },
  { label: 'الهدايا', href: '#gifts' },
  { label: 'من نحن', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <Menu size={24} />
            </button>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={item.className || ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#" className="navbar-logo" aria-label="شذايا">
              <img
                src="/assets/لوجو_فاضي_1_1776217284462.png"
                alt="شذايا - Shadaya Perfumes"
              />
            </a>

            <div className="nav-actions">
              <button className="nav-btn" aria-label="بحث">
                <Search size={20} strokeWidth={1.8} />
              </button>
              <button className="nav-btn" aria-label="حسابي">
                <User size={20} strokeWidth={1.8} />
              </button>
              <button className="nav-btn" aria-label="المفضلة">
                <Heart size={20} strokeWidth={1.8} />
              </button>
              <button className="nav-btn" aria-label="السلة" style={{ position: 'relative' }}>
                <ShoppingBag size={20} strokeWidth={1.8} />
                <span className="cart-badge">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
            >
              <div className="drawer-header">
                <img
                  src="/assets/لوجو_فاضي_1_1776217284462.png"
                  alt="شذايا"
                />
                <button
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="إغلاق"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="drawer-nav">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={item.className || ''}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
