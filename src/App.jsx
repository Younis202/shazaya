import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Experience from './components/Experience';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div dir="rtl">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Experience />
      <Newsletter />
      <Footer />
    </div>
  );
}
