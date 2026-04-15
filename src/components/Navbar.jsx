import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, Menu, X, Heart, ChevronLeft } from 'lucide-react';

const links = [
  { label: 'تخفيضات', href: '#offers', cls: 'sale-link' },
  { label: 'العطور',    href: '#products' },
  { label: 'المجموعات', href: '#collections' },
  { label: 'الرجالية',  href: '#men' },
  { label: 'النسائية',  href: '#women' },
  { label: 'الهدايا',   href: '#gifts' },
  { label: 'من نحن',    href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <Menu size={22} />
            </button>

            <ul className="nav-links" role="list">
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href} className={l.cls || ''}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="/" className="nav-logo" aria-label="شذايا للعطور">
              <img
                src="/assets/لوجو_فاضي_1_1776217284462.png"
                alt="شذايا Shadaya"
              />
            </a>

            <div className="nav-actions">
              <button className="nav-icon-btn" aria-label="بحث"><Search size={19} strokeWidth={1.8} /></button>
              <button className="nav-icon-btn" aria-label="حسابي"><User size={19} strokeWidth={1.8} /></button>
              <button className="nav-icon-btn" aria-label="المفضلة"><Heart size={19} strokeWidth={1.8} /></button>
              <button className="nav-icon-btn" aria-label="السلة" style={{ position: 'relative' }}>
                <ShoppingBag size={19} strokeWidth={1.8} />
                <span className="cart-dot">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
            >
              <div className="drawer-top">
                <img src="/assets/لوجو_فاضي_1_1776217284462.png" alt="شذايا" />
                <button
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="إغلاق"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="drawer-nav" role="list">
                {links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={l.cls || ''}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                      <ChevronLeft size={16} style={{ opacity: 0.35 }} />
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
