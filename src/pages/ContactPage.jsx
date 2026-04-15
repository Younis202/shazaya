import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';

const CONTACT_INFO = [
  { icon: <Phone size={20} />, label: 'الهاتف', value: '+20 10 0000 0000', href: 'tel:+201000000000' },
  { icon: <Mail size={20} />, label: 'البريد الإلكتروني', value: 'info@shadaya.eg', href: 'mailto:info@shadaya.eg' },
  { icon: <MessageCircle size={20} />, label: 'واتساب', value: '+20 10 0000 0000', href: 'https://wa.me/201000000000' },
  { icon: <MapPin size={20} />, label: 'العنوان', value: 'القاهرة، جمهورية مصر العربية', href: null },
  { icon: <Clock size={20} />, label: 'ساعات العمل', value: 'السبت – الخميس: 9 ص – 10 م', href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="page-hero__sub">شذايا</p>
          <h1 className="page-hero__title">اتصل بنا</h1>
          <p className="page-hero__desc">نحن هنا للإجابة على استفساراتك في أسرع وقت</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info-col">
            <h2 className="contact-col-title">تواصل معنا</h2>
            <p className="contact-col-desc">يسعدنا سماعك. تواصل معنا عبر أي من القنوات التالية وسنرد عليك في أقرب وقت.</p>

            <div className="contact-info-list">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{item.value}</a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginTop: '24px', display: 'inline-flex', gap: '8px' }}>
              <MessageCircle size={16} />
              تحدث معنا على واتساب
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            {sent ? (
              <div className="contact-success">
                <CheckCircle size={56} />
                <h3>تم إرسال رسالتك!</h3>
                <p>شكراً لتواصلك معنا. سيتواصل معك فريقنا قريباً.</p>
                <button className="btn btn-outline-gold" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contact-form-title">أرسل لنا رسالة</h2>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>الاسم الكامل <span>*</span></label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="أحمد محمد" required />
                  </div>
                  <div className="contact-field">
                    <label>رقم الهاتف</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+20 10 0000 0000" type="tel" />
                  </div>
                </div>
                <div className="contact-field">
                  <label>البريد الإلكتروني <span>*</span></label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" type="email" required />
                </div>
                <div className="contact-field">
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
                <div className="contact-field">
                  <label>الرسالة <span>*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="اكتب رسالتك هنا..." rows={5} required />
                </div>
                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? <span className="contact-spinner" /> : <Send size={16} />}
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
