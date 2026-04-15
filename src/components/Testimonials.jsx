import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STATEMENT_WORDS = [
  { text: 'عطرك', highlight: false },
  { text: 'ليس', highlight: false },
  { text: 'مجرد', highlight: false },
  { text: 'رائحة', highlight: true },
  { text: '—', highlight: false },
  { text: 'بل', highlight: false },
  { text: 'هو', highlight: false },
  { text: 'حضورك،', highlight: false },
  { text: 'هويتك،', highlight: true },
  { text: 'وأثرك', highlight: false },
  { text: 'في', highlight: false },
  { text: 'الذاكرة', highlight: true },
];

const REVIEWS = [
  { name: 'أحمد الراشدي', city: 'الرياض', rating: 5, text: 'من أفضل العطور التي جربتها. ثبات ممتاز ورائحة تملأ المكان. شذايا براند يستحق.' },
  { name: 'سارة المنصوري', city: 'دبي', rating: 5, text: 'الرائحة خيالية وتدوم طوال اليوم. التغليف فاخر جداً. أنصح به لكل محبي العطور.' },
  { name: 'خالد الزهراني', city: 'جدة', rating: 5, text: 'جودة لا تُنكر. كل عطر قصة بحد ذاته. سأستمر في الطلب من شذايا بكل تأكيد.' },
];

export default function Testimonials() {
  const statRef = useRef(null);
  const isStatInView = useInView(statRef, { once: true, margin: '-100px' });
  const revRef = useRef(null);
  const isRevInView = useInView(revRef, { once: true, margin: '-100px' });

  return (
    <>
      <section
        ref={statRef}
        style={{ padding: '80px 24px 80px', overflow: 'hidden' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isStatInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            {STATEMENT_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isStatInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="font-display inline-block"
                style={{
                  fontSize: 'clamp(1.8rem, 4.5vw, 5.5rem)',
                  fontWeight: 300,
                  color: word.highlight ? 'hsl(38 58% 52%)' : 'hsl(36 20% 90%)',
                  lineHeight: 1.1,
                  fontStyle: word.highlight ? 'italic' : 'normal',
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        ref={revRef}
        style={{ padding: '64px 24px 80px', backgroundColor: 'hsl(36 14% 7%)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
                آراء عملائنا
              </p>
              <motion.span
                className="luxury-divider mb-6"
                initial={{ scaleX: 0 }}
                animate={isRevInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                style={{ display: 'block', transformOrigin: 'right' }}
              />
              <h2
                className="font-display leading-[0.95]"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
              >
                يقولون <span style={{ fontStyle: 'italic' }}>عن شذايا</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {['5.0', '١٢٠٠+', 'تقييم'].map((s, i) => (
                <div key={i} className="text-center px-6" style={{ borderLeft: i < 2 ? '1px solid hsl(36 10% 16% / 0.4)' : 'none' }}>
                  {i === 0 ? (
                    <span className="font-display block" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{s}</span>
                  ) : i === 1 ? (
                    <span className="font-display block" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{s}</span>
                  ) : (
                    <span className="font-body block mt-1" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{s}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isRevInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8"
                style={{ border: '1px solid hsl(36 10% 16% / 0.4)', backgroundColor: 'hsl(36 14% 8%)' }}
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 12 12" fill="hsl(38 58% 52%)" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0l1.545 3.13L11 3.627l-2.5 2.436.59 3.437L6 7.77 2.91 9.5l.59-3.437L1 3.627l3.455-.497L6 0z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="font-body mb-8 leading-relaxed"
                  style={{ fontSize: '13px', color: 'hsl(36 10% 50%)', lineHeight: 1.75 }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)' }}
                >
                  <div>
                    <p className="font-display" style={{ fontSize: '1rem', fontWeight: 400, color: 'hsl(36 20% 90%)' }}>{r.name}</p>
                    <p className="font-body mt-1" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{r.city}</p>
                  </div>
                  <div
                    style={{ width: '32px', height: '32px', backgroundColor: 'hsl(38 58% 52% / 0.1)', border: '1px solid hsl(38 58% 52% / 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span className="font-display" style={{ fontSize: '14px', color: 'hsl(38 58% 52%)' }}>{r.name[0]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
