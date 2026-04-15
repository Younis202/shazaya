import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const COLS = [
  { title: 'تسوق', links: [
    { label: 'وصل حديثاً', href: '/shop' },
    { label: 'الأكثر مبيعاً', href: '/shop' },
    { label: 'عطور رجالية', href: '/shop' },
    { label: 'عطور نسائية', href: '/shop' },
    { label: 'عود وبخور', href: '/shop' },
  ]},
  { title: 'شذايا', links: [
    { label: 'قصتنا', href: '/about' },
    { label: 'المجموعات', href: '/shop' },
    { label: 'اتصل بنا', href: '/contact' },
    { label: 'حسابي', href: '/account' },
    { label: 'سياسة الإرجاع', href: '#' },
  ]},
  { title: 'المساعدة', links: [
    { label: 'الشحن والتسليم', href: '#' },
    { label: 'الأسئلة الشائعة', href: '/contact' },
    { label: 'تتبع طلبك', href: '#' },
    { label: 'دليل العناية', href: '#' },
    { label: 'الشروط والأحكام', href: '#' },
  ]},
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ padding: '80px 24px 40px', borderTop: '1px solid hsl(36 10% 16% / 0.4)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20 select-none"
      >
        <h2
          className="font-display leading-none"
          style={{
            fontSize: 'clamp(4rem, 12vw, 14rem)',
            fontWeight: 300,
            color: 'hsl(36 20% 90% / 0.025)',
            letterSpacing: '-0.01em',
          }}
        >
          شذايا
        </h2>
      </motion.div>

      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3
              className="font-display mb-4"
              style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.2em', color: 'hsl(36 20% 90%)' }}
            >
              شذايا
            </h3>
            <p className="font-body mb-8" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)', maxWidth: '280px' }}>
              براند عطور فاخر يؤمن بأن العطر هوية. نصنع روائح تحكي قصتك وتبقى في الذاكرة.
            </p>
            <div className="space-y-3 mb-8">
              {[
                [Mail, 'info@shadaya.eg', 'mailto:info@shadaya.eg'],
                [Phone, '+20 10 0000 0000', 'tel:+201000000000'],
                [MapPin, 'القاهرة، مصر', null],
              ].map(([Icon, text, href], i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon size={13} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)' }} />
                  {href ? (
                    <a href={href} className="font-body" style={{ fontSize: '12px', color: 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
                    >{text}</a>
                  ) : (
                    <span className="font-body" style={{ fontSize: '12px', color: 'hsl(36 10% 50%)' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body group"
              style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
            >
              <span>زر متجرنا</span>
              <ArrowUpLeft size={13} strokeWidth={1.5} />
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4
                className="font-body mb-6"
                style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body"
                      style={{ fontSize: '13px', color: 'hsl(36 20% 90% / 0.35)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.35)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)' }}
        >
          <p className="font-body" style={{ fontSize: '10px', color: 'hsl(36 10% 50% / 0.4)' }}>
            © {new Date().getFullYear()} شذايا. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-8">
            {['إنستغرام', 'تيك توك', 'يوتيوب', 'واتساب'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body"
                style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(36 10% 50% / 0.4)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50% / 0.4)'}
              >
                {s}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {['الخصوصية', 'الشروط'].map((l) => (
              <a key={l} href="#" className="font-body" style={{ fontSize: '10px', color: 'hsl(36 10% 50% / 0.4)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50% / 0.4)'}
              >{l}</a>
            ))}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center group"
              style={{ width: '40px', height: '40px', border: '1px solid hsl(36 10% 16% / 0.4)', color: 'hsl(36 20% 90% / 0.4)', transition: 'border-color 0.4s, color 0.4s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(38 58% 52%)'; e.currentTarget.style.color = 'hsl(38 58% 52%)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.4)'; e.currentTarget.style.color = 'hsl(36 20% 90% / 0.4)'; }}
              aria-label="للأعلى"
            >
              <ArrowUp size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
