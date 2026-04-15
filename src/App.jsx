import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import QuickView from './components/QuickView';
import WhatsApp from './components/WhatsApp';
import Toast from './components/Toast';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import FilmGrain from './components/FilmGrain';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppInner({ cartItems, handleAddToCart, handleRemoveFromCart, handleQuickView, quickViewProduct, handleCloseQuickView }) {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = useCallback((msg) => {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2800);
  }, []);

  const addToCart = useCallback((product) => {
    handleAddToCart(product);
    showToast(`تمت إضافة "${product.title}" إلى السلة`);
  }, [handleAddToCart, showToast]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setCartOpen(false);
        setSearchOpen(false);
        handleCloseQuickView();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleCloseQuickView]);

  const sharedProps = { onAddToCart: addToCart, onQuickView: handleQuickView };

  return (
    <>
      <AnnouncementBar />
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        cartCount={cartItems.length}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage {...sharedProps} />} />
              <Route path="/shop" element={<ShopPage {...sharedProps} />} />
              <Route path="/product/:id" element={<ProductPage {...sharedProps} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
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
          onAddToCart={addToCart}
        />
      )}

      <WhatsApp />
      <Toast message={toast.message} isVisible={toast.visible} />
    </>
  );
}

export default function App() {
  const devSkip = import.meta.env.DEV && new URLSearchParams(window.location.search).has('skip');
  const [loaded, setLoaded] = useState(devSkip);
  const [cartItems, setCartItems] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleAddToCart = useCallback((product) => {
    setCartItems(prev => [...prev, product]);
  }, []);

  const handleRemoveFromCart = useCallback((index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleQuickView = useCallback((product) => setQuickViewProduct(product), []);
  const handleCloseQuickView = useCallback(() => setQuickViewProduct(null), []);

  return (
    <BrowserRouter>
      <CustomCursor />
      <FilmGrain />

      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="app"
          >
            <AppInner
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleQuickView={handleQuickView}
              quickViewProduct={quickViewProduct}
              handleCloseQuickView={handleCloseQuickView}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
