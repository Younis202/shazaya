import { useState, useEffect, useCallback } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FeaturesBar from './components/FeaturesBar';
import Collections from './components/Collections';
import WideBanner from './components/WideBanner';
import CategorySlider from './components/CategorySlider';
import BestOffersSlider from './components/BestOffersSlider';
import NewArrivals from './components/NewArrivals';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import QuickView from './components/QuickView';
import WhatsApp from './components/WhatsApp';
import Toast from './components/Toast';

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

  const handleQuickView = useCallback((product) => {
    setQuickViewProduct(product);
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setQuickViewProduct(null);
  }, []);

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

  return (
    <div className="app">
      <AnnouncementBar />
      <TopBar />
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        cartCount={cartItems.length}
      />

      <main>
        <HeroSlider />
        <FeaturesBar />
        <Collections />
        <WideBanner />
        <BestOffersSlider onAddToCart={handleAddToCart} onQuickView={handleQuickView} />
        <CategorySlider />
        <NewArrivals onAddToCart={handleAddToCart} onQuickView={handleQuickView} />
        <BrandStory />
        <Newsletter />
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
  );
}
