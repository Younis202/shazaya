import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button 
          className="mobile-menu-btn" 
          style={{ display: 'block', padding: '0.5rem' }} 
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        <ul className="nav-links">
          <li><a href="#collection">المجموعة</a></li>
          <li><a href="#about">قصتنا</a></li>
          <li><a href="#experience">التجربة</a></li>
        </ul>

        <a href="#" className="logo">
          <img src="/assets/لوجو_فاضي_1_1776217284462.png" alt="شذايا - Shadaya" />
        </a>

        <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>EN</a>
          <button style={{ position: 'relative' }}>
            <ShoppingBag size={24} strokeWidth={1.5} />
            <span style={{
              position: 'absolute', top: '-5px', right: '-5px', 
              background: 'var(--color-accent)', color: '#000', 
              fontSize: '0.7rem', width: '18px', height: '18px', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold'
            }}>0</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
              background: 'var(--color-bg)', zIndex: 1000, padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
              <img src="/assets/لوجو_فاضي_1_1776217284462.png" alt="Shadaya" style={{ height: '30px' }} />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.5rem' }}>
              <li><a href="#collection" onClick={() => setMobileMenuOpen(false)}>المجموعة الفاخرة</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>قصة شذايا</a></li>
              <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>تجربة العطر</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
