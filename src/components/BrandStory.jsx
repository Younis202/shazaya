import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  { num: '01', title: 'اختيار المكونات', desc: 'نختار أجود المواد الخام من أرقى المصادر حول العالم — عود كمبودي، ورد طائف، مسك هندي أبيض.' },
  { num: '02', title: 'التركيب الفني', desc: 'يعمل عطارون محترفون على بناء هرم عطري متوازن يجمع بين الموروث العربي والأسلوب المعاصر.' },
  { num: '03', title: 'التخمير والنضج', desc: 'تُترك العطور لتتخمر لأشهر حتى تنضج روائحها وتتعمق ثراء مكوناتها.' },
  { num: '04', title: 'جودة واعتماد', desc: 'كل قارورة تمر بثلاث مراحل فحص قبل أن تحمل اسم شذايا وتصل إليك.' },
];

export default function BrandStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      style={{ padding: '64px 24px 80px', overflow: 'hidden' }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={isInView ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : {}}
          transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
          className="relative overflow-hidden"
          style={{ aspectRatio: '1/1', position: 'sticky', top: '128px' }}
        >
          <motion.img
            src="/assets/brand-story.webp"
            alt="شذايا — قصة البراند"
            className="w-full h-full object-cover"
            style={{ y: imageY }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, hsl(36 18% 5% / 0.5) 0%, transparent 60%)' }}
          />
          <div className="absolute bottom-5 right-5">
            <span
              className="font-body"
              style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.6)', backgroundColor: 'hsl(36 18% 5% / 0.4)', backdropFilter: 'blur(8px)', padding: '6px 12px' }}
            >
              مرسم شذايا — القاهرة
            </span>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              قصتنا
            </p>
            <motion.span
              className="luxury-divider mb-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
              style={{ display: 'block', transformOrigin: 'right' }}
            />
            <h2
              className="font-display leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
            >
              مصنوع بـ<span style={{ fontStyle: 'italic' }}>يد</span>
              <br />وبـ<span style={{ fontStyle: 'italic' }}>قلب</span>
            </h2>
          </motion.div>

          <div>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group py-7 cursor-default"
                style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)', transition: 'border-color 0.6s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'hsl(38 58% 52% / 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'hsl(36 10% 16% / 0.3)'}
              >
                <div className="flex items-start gap-8 md:gap-10">
                  <span
                    className="font-display leading-none mt-1 select-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'hsl(36 20% 90% / 0.06)', transition: 'color 0.6s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52% / 0.25)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90% / 0.06)'}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="font-display mb-2 transition-colors duration-500"
                      style={{ fontSize: '1.3rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-body transition-opacity duration-500"
                      style={{ fontSize: '13px', lineHeight: 1.75, color: 'hsl(36 10% 50%)', maxWidth: '380px', opacity: 0.55 }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.55'}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center gap-8"
          >
            {[
              { num: '+٥٠', label: 'عطراً فريداً' },
              null,
              { num: '+١٠K', label: 'عميل سعيد' },
              null,
              { num: '٥★', label: 'تقييم عملائنا' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} style={{ width: '1px', height: '48px', backgroundColor: 'hsl(36 10% 16% / 0.4)' }} />
              ) : (
                <div key={i} className="text-center">
                  <span className="font-display block" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{item.num}</span>
                  <p className="font-body mt-1" style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{item.label}</p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
