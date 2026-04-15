import React from 'react';
import { Camera, MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

const links1 = [
  'من نحن', 'سياسة الخصوصية', 'سياسة الاسترجاع',
  'الشحن والتوصيل', 'طرق الدفع', 'الأسئلة الشائعة', 'الفروع',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/لوجو_فاضي_1_1776217284462.png" alt="شذايا" />
            <p>
              شذايا دار عطور سعودية فاخرة تقدم أرقى العطور العربية بجودة عالمية،
              صُنعت بشغف لمن يقدّرون الفخامة والأصالة.
            </p>
            <div className="footer-social">
              <button className="social-btn" aria-label="انستقرام"><Camera size={15} /></button>
              <button className="social-btn" aria-label="تويتر"><MessageCircle size={15} /></button>
              <button className="social-btn" aria-label="تيليجرام"><Send size={15} /></button>
            </div>
          </div>

          <div className="footer-col">
            <h5>روابط مهمة</h5>
            <ul className="footer-links">
              {links1.map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>تواصل معنا</h5>
            <div className="footer-contact-row"><Mail size={13} /><a href="mailto:info@shadaya.com">info@shadaya.com</a></div>
            <div className="footer-contact-row"><Phone size={13} /><a href="tel:+966500000000">+966 50 000 0000</a></div>
            <div className="footer-contact-row"><MapPin size={13} /><span>الرياض، المملكة العربية السعودية</span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} شذايا للعطور · جميع الحقوق محفوظة
          </p>
          <div className="payment-row">
            <img src="/assets/pay-mada.png"   alt="مدى" />
            <img src="/assets/pay-stc.png"    alt="STC Pay" />
            <img src="/assets/pay-tamara.png" alt="تمارا" />
            <img src="/assets/pay-sbc.png"    alt="SBC" />
          </div>
        </div>
      </div>
    </footer>
  );
}
