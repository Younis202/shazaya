import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail, Phone, CheckCircle } from 'lucide-react';

export default function AccountPage() {
  const [mode, setMode] = useState('login'); // login | register
  const [showPass, setShowPass] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setDone(true);
    setLoading(false);
  };

  return (
    <div className="account-page">
      <div className="account-page-inner">
        {done ? (
          <div className="account-success">
            <CheckCircle size={60} />
            <h2>{mode === 'login' ? 'مرحباً بعودتك!' : 'تم إنشاء حسابك!'}</h2>
            <p>{mode === 'login' ? 'تم تسجيل دخولك بنجاح.' : 'حسابك جاهز. يمكنك الآن التسوق.'}</p>
            <button className="btn btn-gold" onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', password: '', confirmPassword: '' }); }}>
              العودة للرئيسية
            </button>
          </div>
        ) : (
          <div className="account-card">
            {/* Logo */}
            <div className="account-logo">
              <img src="/assets/logo.png" alt="شذايا" />
            </div>

            {/* Tabs */}
            <div className="account-tabs">
              <button className={`account-tab${mode === 'login' ? ' active' : ''}`} onClick={() => setMode('login')}>تسجيل الدخول</button>
              <button className={`account-tab${mode === 'register' ? ' active' : ''}`} onClick={() => setMode('register')}>إنشاء حساب</button>
            </div>

            <form onSubmit={handleSubmit} className="account-form">
              {mode === 'register' && (
                <div className="account-field">
                  <label>الاسم الكامل</label>
                  <div className="account-input-wrap">
                    <User size={16} className="account-input-icon" />
                    <input name="name" value={form.name} onChange={handleChange} placeholder="أحمد محمد" required />
                  </div>
                </div>
              )}

              <div className="account-field">
                <label>البريد الإلكتروني</label>
                <div className="account-input-wrap">
                  <Mail size={16} className="account-input-icon" />
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="example@email.com" required />
                </div>
              </div>

              {mode === 'register' && (
                <div className="account-field">
                  <label>رقم الهاتف</label>
                  <div className="account-input-wrap">
                    <Phone size={16} className="account-input-icon" />
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+20 10 0000 0000" />
                  </div>
                </div>
              )}

              <div className="account-field">
                <label>
                  كلمة المرور
                  {mode === 'login' && <a href="#" className="account-forgot">نسيت كلمة المرور؟</a>}
                </label>
                <div className="account-input-wrap">
                  <Lock size={16} className="account-input-icon" />
                  <input name="password" value={form.password} onChange={handleChange} type={showPass ? 'text' : 'password'} placeholder="••••••••" required />
                  <button type="button" className="account-eye" onClick={() => setShowPass(s => !s)}>
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {mode === 'register' && (
                <div className="account-field">
                  <label>تأكيد كلمة المرور</label>
                  <div className="account-input-wrap">
                    <Lock size={16} className="account-input-icon" />
                    <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type={showPass ? 'text' : 'password'} placeholder="••••••••" required />
                  </div>
                </div>
              )}

              <button type="submit" className="account-submit-btn" disabled={loading}>
                {loading ? <span className="contact-spinner" /> : null}
                {loading ? 'جاري التحميل...' : mode === 'login' ? 'تسجيل الدخول' : 'إنشاء الحساب'}
              </button>

              {mode === 'register' && (
                <p className="account-terms">
                  بإنشاء حساب، أنت توافق على <a href="#">شروط الاستخدام</a> و<a href="#">سياسة الخصوصية</a>
                </p>
              )}
            </form>

            <p className="account-switch">
              {mode === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
              <button onClick={() => setMode(m => m === 'login' ? 'register' : 'login')}>
                {mode === 'login' ? ' إنشاء حساب جديد' : ' تسجيل الدخول'}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
