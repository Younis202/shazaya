import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="newsletter section-padding">
      <div className="container">
        <div className="newsletter__inner">
          <h2 className="newsletter__title">اشترك في نشرتنا الإخبارية</h2>
          <p className="newsletter__text">
            كن أول من يعلم بإصداراتنا الجديدة وعروضنا الحصرية. اشترك واحصل على خصم <strong>15%</strong> على أول طلب.
          </p>
          {sent ? (
            <p style={{ color: 'white', fontSize: '16px', fontWeight: '600', background: 'rgba(255,255,255,0.15)', padding: '14px 24px', borderRadius: '50px' }}>
              ✓ شكراً! سنرسل لك أفضل العروض قريباً.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                className="newsletter__input"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button className="newsletter__btn" type="submit">
                <Send size={14} />
                اشترك الآن
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
