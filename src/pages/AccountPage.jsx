import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Lock, Mail, Phone, CheckCircle } from 'lucide-react';

const inputStyle = {
  width: '100%',
  padding: '14px 0 14px 28px',
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

export default function AccountPage() {
  const [mode, setMode] = useState('login');
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
    <div className="flex min-h-screen" style={{ paddingTop: '80px' }}>
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img src="/assets/brand-story.webp" alt="شذايا" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, hsl(36 18% 5%) 0%, hsl(36 18% 5% / 0.4) 60%, transparent 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <h2
            className="font-display text-center mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 300, color: 'hsl(36 20% 90%)', lineHeight: 1.2 }}
          >
            "عطرك هويتك<br /><span style={{ fontStyle: 'italic' }}>اجعله لا يُنسى"</span>
          </h2>
          <div className="flex items-center gap-8 mt-10">
            {[
              { num: '+١٠K', label: 'عميل سعيد' },
              { num: '٤.٩★', label: 'تقييم عملائنا' },
              { num: '+٥٠', label: 'عطراً فريداً' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span className="font-display block" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{s.num}</span>
                <p className="font-body mt-1" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none select-none flex items-end justify-center pb-12">
          <span className="font-display" style={{ fontSize: 'clamp(8rem, 18vw, 16rem)', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px hsl(36 20% 90% / 0.04)' }}>
            شذايا
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {done ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center mb-6" style={{ width: '64px', height: '64px', border: '1px solid hsl(38 58% 52% / 0.4)' }}>
                <CheckCircle size={28} strokeWidth={1.5} style={{ color: 'hsl(38 58% 52%)' }} />
              </div>
              <h2 className="font-display mb-3" style={{ fontSize: '2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                {mode === 'login' ? 'مرحباً بعودتك!' : 'أهلاً بك في شذايا!'}
              </h2>
              <p className="font-body mb-8" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)' }}>
                {mode === 'login' ? 'تم تسجيل دخولك بنجاح. استمتع بتسوق حصري.' : 'حسابك جاهز. انضم لعالم شذايا الفاخر.'}
              </p>
              <button
                className="btn-primary w-full justify-center"
                onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', password: '', confirmPassword: '' }); }}
              >
                متابعة
              </button>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <p className="font-body mb-4" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                  شذايا
                </p>
                <h1 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
                  {mode === 'login' ? 'مرحباً بعودتك' : 'انضم لعائلتنا'}
                </h1>
              </motion.div>

              <div className="flex mb-10" style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)' }}>
                {[['login', 'تسجيل الدخول'], ['register', 'إنشاء حساب']].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setMode(key)}
                    className="pb-4 ml-8 font-body relative"
                    style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: mode === key ? 'hsl(36 20% 90%)' : 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
                  >
                    {label}
                    {mode === key && (
                      <motion.span
                        layoutId="account-tab"
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ backgroundColor: 'hsl(38 58% 52%)' }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <motion.form
                key={mode}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {mode === 'register' && (
                  <div>
                    <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                      الاسم الكامل
                    </label>
                    <div className="relative">
                      <User size={14} strokeWidth={1.5} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'hsl(36 10% 50%)' }} />
                      <input name="name" value={form.name} onChange={handleChange} placeholder="أحمد محمد" required style={inputStyle}
                        onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail size={14} strokeWidth={1.5} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'hsl(36 10% 50%)' }} />
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@email.com" required style={inputStyle}
                      onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                    />
                  </div>
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="font-body block mb-3" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                      رقم الهاتف
                    </label>
                    <div className="relative">
                      <Phone size={14} strokeWidth={1.5} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'hsl(36 10% 50%)' }} />
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+20 10 0000 0000" style={inputStyle}
                        onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-body" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                      كلمة المرور
                    </label>
                    {mode === 'login' && (
                      <a href="#" className="font-body" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
                      >نسيت كلمة المرور؟</a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock size={14} strokeWidth={1.5} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'hsl(36 10% 50%)' }} />
                    <input name="password" type={showPass ? 'text' : 'password'} value={form.password} onChange={handleChange} placeholder="••••••••" required style={{ ...inputStyle, paddingRight: '36px' }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'hsl(38 58% 52%)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'hsl(36 10% 16% / 0.5)'}
                    />
                    <button type="button" onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', color: 'hsl(36 10% 50%)', transition: 'color 0.2s' }}>
                      {showPass ? <EyeOff size={14} strokeWidth={1.5} /> : <Eye size={14} strokeWidth={1.5} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 font-body mt-8"
                  style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', backgroundColor: 'hsl(36 20% 90%)', color: 'hsl(36 18% 5%)', transition: 'background-color 0.4s', opacity: loading ? 0.6 : 1 }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = 'hsl(38 58% 52%)'; }}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(36 20% 90%)'}
                >
                  {loading ? 'جاري التحميل...' : (mode === 'login' ? 'تسجيل الدخول' : 'إنشاء الحساب')}
                </button>

                {mode === 'register' && (
                  <p className="font-body text-center" style={{ fontSize: '10px', color: 'hsl(36 10% 50% / 0.4)', letterSpacing: '0.1em', lineHeight: 1.7 }}>
                    بإنشاء حساب، أنت توافق على{' '}
                    <a href="#" style={{ color: 'hsl(38 58% 52%)', textDecoration: 'none' }}>شروط الاستخدام</a>
                    {' '}و{' '}
                    <a href="#" style={{ color: 'hsl(38 58% 52%)', textDecoration: 'none' }}>سياسة الخصوصية</a>
                  </p>
                )}
              </motion.form>

              <p className="font-body text-center mt-8" style={{ fontSize: '12px', color: 'hsl(36 10% 50%)' }}>
                {mode === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب؟'}{' '}
                <button
                  onClick={() => setMode(m => m === 'login' ? 'register' : 'login')}
                  style={{ color: 'hsl(38 58% 52%)', transition: 'opacity 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  {mode === 'login' ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
