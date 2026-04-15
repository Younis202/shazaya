import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const MILESTONES = [
  { year: '٢٠١٩', title: 'البداية', desc: 'انطلقت شذايا من حلم مصري — نقل روح العطر العربي للعالم.' },
  { year: '٢٠٢٠', title: 'أول مجموعة', desc: 'أطلقنا مجموعتنا الأولى من ١٠ عطور وحققت صدى واسعاً.' },
  { year: '٢٠٢٢', title: 'التوسع', desc: 'تجاوزنا ٥٠٠٠ عميل راضٍ وأطلقنا خط البخور والدهون الفاخرة.' },
  { year: '٢٠٢٤', title: 'الانتشار', desc: 'وصلنا لأكثر من ١٠٠٠٠ عميل في مصر والخليج.' },
  { year: '٢٠٢٦', title: 'المستقبل', desc: 'مجموعة جديدة تجمع بين الموروث والحداثة في تجربة غير مسبوقة.' },
];

const VALUES = [
  { num: '01', title: 'الأصالة', desc: 'نؤمن بأن الجمال الحقيقي ينبع من الأصالة. كل عطر يحمل هوية عربية لا تُنكر.' },
  { num: '02', title: 'الجودة', desc: 'نختار أرقى المكونات الطبيعية من أفضل مصادرها لضمان تجربة فريدة.' },
  { num: '03', title: 'الشغف', desc: 'خلف كل قارورة شذايا قصة شغف حقيقي بعالم العطور والحضارة العربية.' },
  { num: '04', title: 'الابتكار', desc: 'نمزج الموروث العطري مع الرؤية المعاصرة لتقديم تجارب شمية لا مثيل لها.' },
];

function SectionHeader({ label, title, titleItalic }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16"
    >
      <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
        {label}
      </p>
      <motion.span
        className="luxury-divider mb-6"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
        style={{ display: 'block', transformOrigin: 'right' }}
      />
      <h2
        className="font-display leading-[0.95]"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
      >
        {title}{' '}<span style={{ fontStyle: 'italic' }}>{titleItalic}</span>
      </h2>
    </motion.div>
  );
}

function MilestoneItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group py-7"
      style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.3)', transition: 'border-color 0.4s' }}
      onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'hsl(38 58% 52% / 0.3)'}
      onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'hsl(36 10% 16% / 0.3)'}
    >
      <div className="flex items-start gap-10 md:gap-16">
        <span className="font-display flex-shrink-0" style={{ fontSize: '1.5rem', fontWeight: 300, color: 'hsl(38 58% 52%)', minWidth: '70px' }}>{item.year}</span>
        <div>
          <h3 className="font-display mb-2" style={{ fontSize: '1.4rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{item.title}</h3>
          <p className="font-body" style={{ fontSize: '13px', color: 'hsl(36 10% 50%)', lineHeight: 1.7 }}>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ValueCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-8"
      style={{ border: '1px solid hsl(36 10% 16% / 0.4)' }}
    >
      <div className="flex items-start gap-6">
        <span className="font-display" style={{ fontSize: '3.5rem', fontWeight: 300, color: 'hsl(36 20% 90% / 0.06)', lineHeight: 1, flexShrink: 0 }}>{item.num}</span>
        <div>
          <h3 className="font-display mb-3" style={{ fontSize: '1.4rem', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>{item.title}</h3>
          <p className="font-body" style={{ fontSize: '13px', lineHeight: 1.8, color: 'hsl(36 10% 50%)' }}>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });

  return (
    <div>
      <div
        className="relative overflow-hidden flex items-end"
        style={{ height: '80vh', minHeight: '520px', paddingBottom: '80px', paddingTop: '120px' }}
      >
        <div className="absolute inset-0">
          <img src="/assets/brand-story.webp" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.15)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(36 18% 5%) 0%, hsl(36 18% 5% / 0.6) 60%, transparent 100%)' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display" style={{ fontSize: 'clamp(10rem, 28vw, 28rem)', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px hsl(36 20% 90% / 0.025)' }}>
            شذايا
          </span>
        </div>
        <div ref={heroRef} className="relative z-10 w-full px-6 md:px-12 max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              من القاهرة إلى العالم
            </p>
            <h1 className="font-display leading-[0.9]" style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
              نصنع أثراً<br /><span style={{ fontStyle: 'italic' }}>لا يُنسى</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '80px 24px' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader label="قصتنا" title="من حلم" titleItalic="إلى عالم" />
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-6" style={{ fontSize: '15px', lineHeight: 1.9, color: 'hsl(36 10% 50%)' }}>
              بدأت قصة شذايا في قلب القاهرة، حين قررنا أن نحمل موروثنا العطري الأصيل ونعيد صياغته بلغة العصر. آمنّا بأن العطر ليس مجرد رائحة — بل هو هوية وذاكرة وحكاية تُروى بلا كلام.
            </p>
            <p className="font-body mb-8" style={{ fontSize: '15px', lineHeight: 1.9, color: 'hsl(36 10% 50%)' }}>
              من مصر إلى العالم، نحمل معنا عبق التراث وعمق الجذور، ونُقدّمه في قوارير تجمع بين الأناقة الشرقية والحداثة العصرية.
            </p>
            <div className="flex items-center gap-10 pt-8" style={{ borderTop: '1px solid hsl(36 10% 16% / 0.3)' }}>
              {[
                { num: '+٥٠', label: 'عطراً' },
                { num: '+١٠K', label: 'عميل' },
                { num: '٥★', label: 'تقييم' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <span className="font-display block" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'hsl(38 58% 52%)' }}>{s.num}</span>
                  <p className="font-body mt-1" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', backgroundColor: 'hsl(36 14% 7%)' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader label="مسيرتنا" title="رحلة" titleItalic="شذايا" />
          <div className="space-y-0">
            {MILESTONES.map((item, i) => <MilestoneItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader label="فلسفتنا" title="قيمنا" titleItalic="الراسخة" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((item, i) => <ValueCard key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{ padding: '100px 24px', backgroundColor: 'hsl(36 14% 7%)' }}
      >
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="font-display" style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px hsl(36 20% 90% / 0.025)' }}>
            شذايا
          </span>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto text-center">
          <p className="font-body mb-6" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            اكتشف عالمنا
          </p>
          <h2 className="font-display mb-8 leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}>
            جاهز تجد <span style={{ fontStyle: 'italic' }}>عطرك المثالي؟</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/shop" className="btn-primary">تسوق الآن</Link>
            <Link to="/contact" className="btn-ghost">تواصل معنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
