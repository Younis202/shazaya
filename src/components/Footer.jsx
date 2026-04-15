import React from 'react';
import { Camera, MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'من نحن', href: '#about' },
  { label: 'سياسة الخصوصية', href: '#' },
  { label: 'سياسة الاسترجاع', href: '#' },
  { label: 'الشحن والتوصيل', href: '#' },
  { label: 'طرق الدفع', href: '#' },
  { label: 'تواصل معنا', href: '#' },
  { label: 'الأسئلة الشائعة', href: '#' },
  { label: 'الفروع', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>روابط مهمة</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-center-col">
            <img
              src="/assets/لوجو_فاضي_1_1776217284462.png"
              alt="شذايا"
              className="footer-logo"
            />
            <p className="footer-desc">
              شذايا دار عطور سعودية فاخرة تقدم أرقى العطور العربية بجودة عالمية، صُنعت بشغف لمن يقدّرون الفخامة والأصالة.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="انستقرام">
                <Camera size={15} />
              </a>
              <a href="#" className="social-link" aria-label="تويتر">
                <MessageCircle size={15} />
              </a>
              <a href="#" className="social-link" aria-label="تيليجرام">
                <Send size={15} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:info@shadaya.com">info@shadaya.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+966500000000">+966 50 000 0000</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-rights">
            © {new Date().getFullYear()} شذايا للعطور | جميع الحقوق محفوظة
          </p>
          <div className="payment-icons">
            <img src="/assets/pay-mada.png" alt="مدى" />
            <img src="/assets/pay-stc.png" alt="STC Pay" />
            <img src="/assets/pay-tamara.png" alt="تمارا" />
            <img src="/assets/pay-sbc.png" alt="SBC" />
          </div>
        </div>
      </div>
    </footer>
  );
}
