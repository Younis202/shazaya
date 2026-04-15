import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

const CONTACT_INFO = [
  { icon: <Phone size={20} />, label: 'الهاتف', value: '+20 10 0000 0000', href: 'tel:+201000000000', color: '#22c55e' },
  { icon: <Mail size={20} />, label: 'البريد الإلكتروني', value: 'info@shadaya.eg', href: 'mailto:info@shadaya.eg', color: '#3b82f6' },
  { icon: <MessageCircle size={20} />, label: 'واتساب', value: '+20 10 0000 0000', href: 'https://wa.me/201000000000', color: '#25d366' },
  { icon: <MapPin size={20} />, label: 'العنوان', value: 'القاهرة، جمهورية مصر العربية', href: null, color: '#f59e0b' },
  { icon: <Clock size={20} />, label: 'ساعات العمل', value: 'السبت – الخميس: 9 ص – 10 م', href: null, color: '#8b5cf6' },
];

const FAQS = [
  { q: 'كيف أتأكد من أصالة المنتج؟', a: 'جميع منتجاتنا أصلية 100% ومرفقة بشهادة ضمان. يمكنك التحقق عبر الرقم التسلسلي الموجود على كل عبوة.' },
  { q: 'ما هي سياسة الإرجاع؟', a: 'نتيح إرجاع المنتج مجاناً خلال 14 يوماً من الاستلام في حالة وجود أي عيب مصنعي.' },
  { q: 'هل تشحنون للخارج؟', a: 'نعم، نشحن لجميع دول الخليج العربي ونعمل على توسيع نطاق الشحن الدولي قريباً.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="contact-page">

      {/* ====== HERO ====== */}
      <div className="contact-hero">
        <div className="contact-hero__pattern" />
        <div className="contact-hero__bottle">
          <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="47" y="2" width="26" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
            <rect x="40" y="13" width="40" height="8" rx="3" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
            <path d="M24 36 Q15 65 15 100 Q15 148 26 172 Q37 192 60 192 Q83 192 94 172 Q105 148 105 100 Q105 65 96 36 Q85 22 60 20 Q35 22 24 36Z" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.2" />
          </svg>
        </div>
        <div className="container contact-hero__inner">
          <span className="contact-hero__label"><Sparkles size={12} /> نحن هنا لك</span>
          <h1 className="contact-hero__title">تواصل مع<br /><span>فريق شذايا</span></h1>
          <p className="contact-hero__desc">
            يسعدنا الإجابة على جميع استفساراتك. تواصل معنا وسنرد عليك في أسرع وقت ممكن
          </p>
        </div>
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="contact-main-section">
        <div className="container">
          <div className="contact-layout">

            {/* Info Column */}
            <div className="contact-info-panel">
              <div className="contact-info-panel__header">
                <h2 className="contact-info-panel__title">معلومات التواصل</h2>
                <p className="contact-info-panel__desc">
                  يسعدنا سماعك في أي وقت. اختر القناة الأنسب لك وسنتواصل معك فوراً.
                </p>
              </div>

              <div className="contact-cards-list">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="contact-card">
                    <div className="contact-card__icon" style={{ background: item.color + '18', color: item.color, border: `1px solid ${item.color}30` }}>
                      {item.icon}
                    </div>
                    <div className="contact-card__text">
                      <p className="contact-card__label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact-card__value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact-card__value-plain">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="contact-wa-btn">
                <MessageCircle size={18} />
                <span>تحدث معنا على واتساب الآن</span>
              </a>

              {/* Store Image Card */}
              <div className="contact-store-card">
                <img src="/assets/brand-story.webp" alt="متجر شذايا" className="contact-store-card__img" />
                <div className="contact-store-card__overlay">
                  <span className="contact-store-card__badge">
                    <Sparkles size={10} /> متجرنا
                  </span>
                  <p className="contact-store-card__name">شذايا — القاهرة</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-panel">
              {sent ? (
                <div className="contact-success-v2">
                  <div className="contact-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="contact-success-title">تم إرسال رسالتك بنجاح!</h3>
                  <p className="contact-success-desc">
                    شكراً لتواصلك مع شذايا. سيتواصل معك فريقنا المتخصص في غضون 24 ساعة.
                  </p>
                  <button
                    className="btn btn-gold"
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form className="contact-form-v2" onSubmit={handleSubmit}>
                  <div className="contact-form-v2__header">
                    <h2 className="contact-form-v2__title">أرسل لنا رسالة</h2>
                    <p className="contact-form-v2__sub">سنرد عليك في خلال 24 ساعة</p>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field-v2">
                      <label>الاسم الكامل <span>*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="أحمد محمد" required />
                    </div>
                    <div className="contact-field-v2">
                      <label>رقم الهاتف</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+20 10 0000 0000" type="tel" />
                    </div>
                  </div>

                  <div className="contact-field-v2">
                    <label>البريد الإلكتروني <span>*</span></label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" type="email" required />
                  </div>

                  <div className="contact-field-v2">
                    <label>الموضوع <span>*</span></label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">اختر الموضوع</option>
                      <option>استفسار عن منتج</option>
                      <option>متابعة طلب</option>
                      <option>إرجاع أو استبدال</option>
                      <option>شكوى</option>
                      <option>أخرى</option>
                    </select>
                  </div>

                  <div className="contact-field-v2">
                    <label>الرسالة <span>*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="اكتب رسالتك هنا..." rows={5} required />
                  </div>

                  <button type="submit" className="contact-submit-v2" disabled={loading}>
                    {loading ? <span className="contact-spinner" /> : <Send size={16} />}
                    {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ====== FAQ SECTION ====== */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">أسئلة شائعة</h2>
            <p className="section-subtitle">إجابات سريعة لأكثر الأسئلة تكراراً</p>
            <span className="title-border" style={{ margin: '0 auto' }} />
          </div>
          <div className="contact-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`contact-faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="contact-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="contact-faq-arrow">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="contact-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
