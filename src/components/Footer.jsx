import React from 'react';
import { Camera, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/لوجو_فاضي_1_1776217284462.png" alt="شذايا" style={{ height: '40px' }} />
            <p>شذايا.. عطر يبدأ بهدوء، ويترك أثراً لا يُنسى. صُنع بشغف لمن يقدرون الفخامة.</p>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
              <a href="#" style={{ color: 'var(--color-text-muted)' }}><Camera size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-muted)' }}><MessageCircle size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-muted)' }}><Send size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">روابط سريعة</h4>
            <div className="footer-links">
              <a href="#collection">المجموعة</a>
              <a href="#about">قصتنا</a>
              <a href="#">سياسة الخصوصية</a>
              <a href="#">الشروط والأحكام</a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">تواصل معنا</h4>
            <div className="footer-links">
              <a href="mailto:info@shadaya.com">info@shadaya.com</a>
              <a href="tel:+966500000000">+966 50 000 0000</a>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                المملكة العربية السعودية<br />
                الرياض
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} شذايا للعطور. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
