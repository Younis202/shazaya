import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const FOOTER_LINKS = {
  shop: [
    { label: 'تخفيضات', href: '#' },
    { label: 'وصل حديثاً', href: '#' },
    { label: 'الأكثر مبيعاً', href: '#' },
    { label: 'عطور رجالية', href: '#' },
    { label: 'عطور نسائية', href: '#' },
    { label: 'للجنسين', href: '#' },
  ],
  info: [
    { label: 'من نحن', href: '#' },
    { label: 'سياسة الخصوصية', href: '#' },
    { label: 'الشروط والأحكام', href: '#' },
    { label: 'سياسة الإرجاع', href: '#' },
    { label: 'تتبع طلبك', href: '#' },
  ],
};

const SOCIALS = [
  { label: 'إنستغرام', char: '📸', href: '#' },
  { label: 'تيك توك', char: '🎵', href: '#' },
  { label: 'سناب شات', char: '👻', href: '#' },
  { label: 'تويتر', char: '✕', href: '#' },
  { label: 'يوتيوب', char: '▶', href: '#' },
  { label: 'واتساب', icon: <MessageCircle size={15} />, href: 'https://wa.me/966500000000' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <img src="/assets/logo.png" alt="شذايا" className="footer__logo" />
              <p className="footer__brand-desc">
                شذايا — براند عطور سعودي فاخر. نؤمن بأن لكل شخص قصة تستحق أن تُروى برائحة مميزة. عطوراً تصنع الأثر، وتبقى في الذاكرة.
              </p>
              <div className="footer__social">
                {SOCIALS.map((s, i) => (
                  <a key={i} href={s.href} className="social-btn" aria-label={s.label} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {s.icon || <span style={{ fontSize: '13px', lineHeight: 1 }}>{s.char}</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="footer__col-title">تسوق</h4>
              <ul className="footer__links">
                {FOOTER_LINKS.shop.map((l, i) => (
                  <li key={i}><a href={l.href} className="footer__link">‹ {l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="footer__col-title">معلومات</h4>
              <ul className="footer__links">
                {FOOTER_LINKS.info.map((l, i) => (
                  <li key={i}><a href={l.href} className="footer__link">‹ {l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer__col-title">تواصل معنا</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><Mail size={14} /></div>
                  <div className="footer__contact-text">
                    <div className="footer__contact-label">البريد الإلكتروني</div>
                    <a href="mailto:info@shadaya.sa" style={{ color: 'rgba(255,255,255,0.65)' }}>info@shadaya.sa</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><Phone size={14} /></div>
                  <div className="footer__contact-text">
                    <div className="footer__contact-label">الهاتف / واتساب</div>
                    <a href="tel:+966500000000" dir="ltr" style={{ color: 'rgba(255,255,255,0.65)' }}>+966 50 000 0000</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><MapPin size={14} /></div>
                  <div className="footer__contact-text">
                    <div className="footer__contact-label">العنوان</div>
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">© {new Date().getFullYear()} شذايا. جميع الحقوق محفوظة.</p>
            <div className="footer__payments">
              <img src="/assets/pay-visa.png" alt="Visa" className="pay-icon" />
              <img src="/assets/pay-mada.png" alt="Mada" className="pay-icon" />
              <img src="/assets/pay-apple.png" alt="Apple Pay" className="pay-icon" />
              <img src="/assets/pay-stc.png" alt="STC Pay" className="pay-icon" />
              <img src="/assets/pay-tamara.png" alt="Tamara" className="pay-icon" />
              <img src="/assets/pay-bank.png" alt="Bank Transfer" className="pay-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
