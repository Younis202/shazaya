import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ padding: '80px 24px', borderTop: '1px solid hsl(36 10% 16% / 0.4)' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center"
      >
        <span
          className="font-display"
          style={{
            fontSize: 'clamp(5rem, 20vw, 20rem)',
            fontWeight: 300,
            color: 'transparent',
            WebkitTextStroke: '1px hsl(36 20% 90% / 0.03)',
            letterSpacing: '-0.01em',
            lineHeight: 1,
            position: 'absolute',
          }}
        >
          اشترك
        </span>
      </motion.div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              نشرة شذايا
            </p>
            <motion.span
              className="luxury-divider mb-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
              style={{ display: 'block', transformOrigin: 'right' }}
            />
            <h2
              className="font-display leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
            >
              كن أول<br />من <span style={{ fontStyle: 'italic' }}>يعرف</span>
            </h2>
            <p className="font-body mb-10" style={{ fontSize: '13px', lineHeight: 1.75, color: 'hsl(36 10% 50%)' }}>
              اشترك واحصل على خصم <span style={{ color: 'hsl(38 58% 52%)' }}>١٥%</span> على أول طلب، وكن أول من يعرف عن إصداراتنا وعروضنا الحصرية.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 py-4"
              style={{ borderBottom: '1px solid hsl(38 58% 52% / 0.4)' }}
            >
              <span style={{ color: 'hsl(38 58% 52%)' }}>✓</span>
              <span className="font-body" style={{ fontSize: '13px', color: 'hsl(36 20% 90%)' }}>شكراً! سنرسل لك أفضل العروض قريباً.</span>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex items-stretch"
              style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.4)' }}
            >
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent font-body outline-none"
                style={{ padding: '14px 0', fontSize: '13px', color: 'hsl(36 20% 90%)', letterSpacing: '0.05em' }}
              />
              <button
                type="submit"
                className="flex items-center gap-2 font-body"
                style={{ padding: '14px 0 14px 4px', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.5)', transition: 'color 0.4s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.5)'}
              >
                اشترك
                <ArrowLeft size={13} strokeWidth={1.5} />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
