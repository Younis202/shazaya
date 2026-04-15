import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div dir="rtl">
      <AnnouncementBar />
      <TopBar />
      <Navbar />
      <HeroBanner />
      <Features />
      <FeaturedProducts />
      <BrandStory />
      <Footer />
    </div>
  );
}
