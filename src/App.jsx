import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import QuickView from './components/QuickView';
import WhatsApp from './components/WhatsApp';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const showToast = useCallback((msg) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2800);
  }, []);

  const handleAddToCart = useCallback((product) => {
    setCartItems(prev => [...prev, product]);
    showToast(`تمت إضافة "${product.title}" إلى السلة`);
  }, [showToast]);

  const handleRemoveFromCart = useCallback((index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleQuickView = useCallback((product) => setQuickViewProduct(product), []);
  const handleCloseQuickView = useCallback(() => setQuickViewProduct(null), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setCartOpen(false);
        setSearchOpen(false);
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const sharedProps = { onAddToCart: handleAddToCart, onQuickView: handleQuickView };

  return (
    <BrowserRouter>
      <div className="app">
        <AnnouncementBar />
        <TopBar />
        <Navbar
          onOpenCart={() => setCartOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
          cartCount={cartItems.length}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage {...sharedProps} />} />
            <Route path="/shop" element={<ShopPage {...sharedProps} />} />
            <Route path="/product/:id" element={<ProductPage {...sharedProps} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onRemove={handleRemoveFromCart}
        />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {quickViewProduct && (
          <QuickView
            product={quickViewProduct}
            onClose={handleCloseQuickView}
            onAddToCart={handleAddToCart}
          />
        )}

        <WhatsApp />
        <Toast message={toast.message} isVisible={toast.visible} />
      </div>
    </BrowserRouter>
  );
}
