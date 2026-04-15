import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail, Phone, CheckCircle, Sparkles, Star } from 'lucide-react';

const BRAND_QUOTES = [
  '"عطرك هويتك — اجعله لا يُنسى"',
  '"الرقي لا يُرى، يُشَمّ"',
  '"شذايا — حيث تبدأ القصة"',
];

export default function AccountPage() {
  const [mode, setMode] = useState('login');
  const [showPass, setShowPass] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [quote] = useState(() => BRAND_QUOTES[Math.floor(Math.random() * BRAND_QUOTES.length)]);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setDone(true);
    setLoading(false);
  };

  return (
    <div className="account-split-page">

      {/* LEFT PANEL — Brand Visual */}
      <div className="account-brand-panel">
        <div className="account-brand-panel__bg">
          <img src="/assets/brand-story.webp" alt="شذايا" className="account-brand-panel__img" />
          <div className="account-brand-panel__overlay" />
        </div>

        <div className="account-brand-panel__content">
          {/* Bottle SVG Decoration */}
          <div className="account-bottle-deco">
            <svg viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="63" y="2" width="34" height="18" rx="6" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              <rect x="54" y="18" width="52" height="12" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              <path d="M35 50 Q22 95 22 150 Q22 215 38 248 Q54 275 80 275 Q106 275 122 248 Q138 215 138 150 Q138 95 125 50 Q110 34 80 32 Q50 34 35 50Z" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.04)" opacity="0.6" />
              <path d="M48 90 Q40 125 40 165 Q40 210 55 242" stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" opacity="0.3" />
            </svg>
          </div>

          <div className="account-brand-panel__logo">
            <img src="/assets/logo.png" alt="شذايا" />
          </div>

          <blockquote className="account-brand-quote">{quote}</blockquote>

          <div className="account-brand-features">
            <div className="account-brand-feat">
              <Star size={14} fill="currentColor" />
              <span>أكثر من 50 عطراً فريداً</span>
            </div>
            <div className="account-brand-feat">
              <Star size={14} fill="currentColor" />
              <span>شحن مجاني فوق 500 ر.س</span>
            </div>
            <div className="account-brand-feat">
              <Star size={14} fill="currentColor" />
              <span>ضمان الأصالة 100%</span>
            </div>
          </div>

          <div className="account-brand-stats">
            <div className="account-brand-stat">
              <span className="account-brand-stat-num">+10K</span>
              <span className="account-brand-stat-label">عميل سعيد</span>
            </div>
            <div className="account-brand-stat-div" />
            <div className="account-brand-stat">
              <span className="account-brand-stat-num">4.9★</span>
              <span className="account-brand-stat-label">تقييم العملاء</span>
            </div>
            <div className="account-brand-stat-div" />
            <div className="account-brand-stat">
              <span className="account-brand-stat-num">5+</span>
              <span className="account-brand-stat-label">سنوات خبرة</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Form */}
      <div className="account-form-panel">
        <div className="account-form-panel__inner">
          {done ? (
            <div className="account-success-v2">
              <div className="account-success-icon">
                <CheckCircle size={52} />
              </div>
              <h2 className="account-success-title">
                {mode === 'login' ? 'مرحباً بعودتك!' : 'تم إنشاء حسابك!'}
              </h2>
              <p className="account-success-desc">
                {mode === 'login' ? 'تم تسجيل دخولك بنجاح. يمكنك الآن الاستمتاع بتسوق حصري.' : 'حسابك جاهز. انضم لعالم شذايا واستمتع بتجربة تسوق فاخرة.'}
              </p>
              <button
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', password: '', confirmPassword: '' }); }}
              >
                العودة للرئيسية
              </button>
            </div>
          ) : (
            <>
              <div className="account-form-header">
                <span className="account-form-tag"><Sparkles size={11} /> شذايا</span>
                <h1 className="account-form-title">
                  {mode === 'login' ? 'مرحباً بعودتك' : 'انضم لعائلة شذايا'}
                </h1>
                <p className="account-form-subtitle">
                  {mode === 'login' ? 'سجّل دخولك للوصول لحسابك وطلباتك' : 'أنشئ حسابك واستمتع بتجربة تسوق فاخرة'}
                </p>
              </div>

              {/* Mode Tabs */}
              <div className="account-tabs-v2">
                <button className={`account-tab-v2${mode === 'login' ? ' active' : ''}`} onClick={() => setMode('login')}>
                  تسجيل الدخول
                </button>
                <button className={`account-tab-v2${mode === 'register' ? ' active' : ''}`} onClick={() => setMode('register')}>
                  إنشاء حساب
                </button>
              </div>

              <form onSubmit={handleSubmit} className="account-form-v2">
                {mode === 'register' && (
                  <div className="account-field-v2">
                    <label>الاسم الكامل</label>
                    <div className="account-input-wrap-v2">
                      <User size={16} className="account-input-icon-v2" />
                      <input name="name" value={form.name} onChange={handleChange} placeholder="أحمد محمد" required />
                    </div>
                  </div>
                )}

                <div className="account-field-v2">
                  <label>البريد الإلكتروني</label>
                  <div className="account-input-wrap-v2">
                    <Mail size={16} className="account-input-icon-v2" />
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="example@email.com" required />
                  </div>
                </div>

                {mode === 'register' && (
                  <div className="account-field-v2">
                    <label>رقم الهاتف</label>
                    <div className="account-input-wrap-v2">
                      <Phone size={16} className="account-input-icon-v2" />
                      <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+20 10 0000 0000" />
                    </div>
                  </div>
                )}

                <div className="account-field-v2">
                  <label>
                    كلمة المرور
                    {mode === 'login' && <a href="#" className="account-forgot-v2">نسيت كلمة المرور؟</a>}
                  </label>
                  <div className="account-input-wrap-v2">
                    <Lock size={16} className="account-input-icon-v2" />
                    <input name="password" value={form.password} onChange={handleChange} type={showPass ? 'text' : 'password'} placeholder="••••••••" required />
                    <button type="button" className="account-eye-v2" onClick={() => setShowPass(s => !s)}>
                      {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {mode === 'register' && (
                  <div className="account-field-v2">
                    <label>تأكيد كلمة المرور</label>
                    <div className="account-input-wrap-v2">
                      <Lock size={16} className="account-input-icon-v2" />
                      <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type={showPass ? 'text' : 'password'} placeholder="••••••••" required />
                    </div>
                  </div>
                )}

                <button type="submit" className="account-submit-v2" disabled={loading}>
                  {loading ? <span className="contact-spinner" /> : null}
                  {loading ? 'جاري التحميل...' : mode === 'login' ? 'تسجيل الدخول' : 'إنشاء الحساب'}
                </button>

                {mode === 'register' && (
                  <p className="account-terms-v2">
                    بإنشاء حساب، أنت توافق على <a href="#">شروط الاستخدام</a> و<a href="#">سياسة الخصوصية</a>
                  </p>
                )}
              </form>

              <p className="account-switch-v2">
                {mode === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                <button onClick={() => setMode(m => m === 'login' ? 'register' : 'login')}>
                  {mode === 'login' ? ' إنشاء حساب جديد' : ' تسجيل الدخول'}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
