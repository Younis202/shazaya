import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowLeft, CheckCircle } from 'lucide-react';

const FAQS = [
  { q: 'كيف أتأكد من أصالة المنتج؟', a: 'جميع منتجاتنا أصلية ١٠٠% ومرفقة بشهادة ضمان. يمكن التحقق عبر الرقم التسلسلي على كل عبوة.' },
  { q: 'ما هي سياسة الإرجاع؟', a: 'نتيح إرجاع المنتج مجاناً خلال ١٤ يوماً من الاستلام في حالة وجود أي عيب مصنعي.' },
  { q: 'هل تشحنون للخارج؟', a: 'نعم، نشحن لجميع دول الخليج العربي ونعمل على توسيع نطاق الشحن قريباً.' },
  { q: 'كم يستغرق وقت الشحن؟', a: 'في مصر: ٢–٣ أيام عمل. الخليج: ٣–٧ أيام عمل. وشحن مجاني للطلبات فوق ٥٠٠ ريال.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid hsl(36 10% 16% / 0.5)',
    color: 'hsl(36 20% 90%)',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    letterSpacing: '0.05em',
    transition: 'border-color 0.3s',
  };

  return (
    <div>
      <div
        className="relative overflow-hidden flex items-end"
        style={{ height: '50vh', minHeight: '360px', paddingBottom: '64px', paddingTop: '130px' }}
      >
        <div className="absolute inset-0">
          <img src="/assets/hero-1.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(36 18% 5%) 0%, hsl(36 18% 5% / 0.5) 60%, transparent 100%)' }} />
        </div>
        <div ref={headerRef} className="relative z-10 w-full px-6 md:px-12 max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-4" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              نحن هنا لك
            </p>
            <h1 className="font-display leading-[0.95]" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
              تواصل <span style={{ fontStyle: 'italic' }}>معنا</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                معلومات التواصل
              </p>
              <div className="space-y-6 mb-10">
                {[
                  [Phone, 'الهاتف', '+20 10 0000 0000', 'tel:+201000000000'],
                  [Mail, 'البريد', 'info@shadaya.eg', 'mailto:info@shadaya.eg'],
                  [MessageCircle, 'واتساب', '+20 10 0000 0000', 'https://wa.me/201000000000'],
                  [MapPin, 'العنوان', 'القاهرة، مصر', null],
                  [Clock, 'ساعات العمل', 'السبت – الخميس: ٩ص – ١٠م', null],
                ].map(([Icon, label, value, href], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0" style={{ width: '36px', height: '36px', border: '1px solid hsl(36 10% 16% / 0.4)' }}>
                      <Icon size={14} strokeWidth={1.5} style={{ color: 'hsl(38 58% 52%)' }} />
                    </div>
                    <div>
                      <p className="font-body mb-1" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{label}</p>
                      {href ? (
                        <a href={href} className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90% / 0.7)', transition: 'color 0.3s' }}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.7)'}
                        >{value}</a>
                      ) : (
                        <p className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90% / 0.7)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body w-full justify-center"
                style={{ padding: '14px', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', backgroundColor: '#25d366', color: '#fff', transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                تحدث معنا الآن
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-8" ref={formRef}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="flex items-center justify-center mb-6" style={{ width: '60px', height: '60px', border: '1px solid hsl(38 58% 52% / 0.4)' }}>
                  <CheckCircle size={24} strokeWidth={1.5} style={{ color: 'hsl(38 58% 52%)' }} />
                </div>
                <h3 className="font-display mb-3" style={{ fontSize: '2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                  تم الإرسال
                </h3>
                <p className="font-body mb-8" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)' }}>
                  شكراً لتواصلك معنا. سنرد عليك خلال ٢٤ ساعة.
                </p>
                <button className="btn-primary" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
              >
                <p className="font-body mb-10" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                  أرسل لنا رسالة
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    { name: 'name', label: 'الاسم الكامل *', placeholder: 'أحمد محمد', required: true },
                    { name: 'phone', label: 'رقم الهاتف', placeholder: '+20 10 0000 0000' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    البريد الإلكتروني *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                  />
                </div>

                <div className="mb-6">
                  <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    الموضوع *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                  >
                    <option value="" style={{ backgroundColor: 'hsl(36 14% 8%)' }}>اختر الموضوع</option>
                    {['استفسار عن منتج', 'متابعة طلب', 'إرجاع أو استبدال', 'شكوى', 'أخرى'].map(o => (
                      <option key={o} value={o} style={{ backgroundColor: 'hsl(36 14% 8%)' }}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-10">
                  <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                    style={{ ...inputStyle, resize: 'vertical', borderBottom: '1px solid hsl(36 10% 16% / 0.5)', lineHeight: 1.7 }}
                    onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                    onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 font-body"
                  style={{ padding: '16px 40px', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', backgroundColor: 'hsl(36 20% 90%)', color: 'hsl(36 18% 5%)', transition: 'background-color 0.4s', opacity: loading ? 0.6 : 1 }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'; }}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'}
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  {!loading && <ArrowLeft size={14} strokeWidth={1.5} />}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>

      <section style={{ padding: '60px 24px 80px', backgroundColor: 'hsl(36 14% 7%)' }}>
        <div className="max-w-screen-xl mx-auto max-w-2xl">
          <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            أسئلة شائعة
          </p>
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full py-6 font-body text-right"
                  style={{ fontSize: '14px', color: 'hsl(36 20% 90%)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '18px', color: 'hsl(38 58% 52% / 0.6)', flexShrink: 0, marginRight: '16px' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body pb-6" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
