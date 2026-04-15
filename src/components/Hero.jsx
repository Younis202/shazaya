import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <img src="/assets/hero-bg.png" alt="شذايا عطر فاخر" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-accent mb-4" style={{ letterSpacing: '0.2em', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              <span className="text-serif">SHADAYA PERFUMES</span>
            </p>
            <h1 className="display-text mb-8">
              أثر<br />لا يُنسى.
            </h1>
            <p className="text-lead mb-12">
              عطور صُممت لتعبر عن حضورك الهادئ، وتترك بصمة فخمة في كل مكان تمر به. اكتشف جوهر الرقي.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#collection" className="btn-primary">اكتشف المجموعة</a>
              <a href="#about" className="btn-outline">قصتنا</a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          color: 'var(--color-text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em'
        }}
      >
        <span>اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
