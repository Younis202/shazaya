import { Sparkles, Star, Heart, Award, Droplets, Flower2, Wind, Flame, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VALUES = [
  {
    icon: <Sparkles size={24} />,
    title: 'الأصالة',
    desc: 'نؤمن بأن الجمال الحقيقي ينبع من الأصالة. كل عطر نصنعه يحمل هوية عربية حقيقية لا تُنكر.',
    color: '#ad8538',
  },
  {
    icon: <Star size={24} />,
    title: 'الجودة',
    desc: 'نختار أرقى المكونات الطبيعية من أفضل مصادرها حول العالم لضمان تجربة فريدة لا مثيل لها.',
    color: '#875f12',
  },
  {
    icon: <Heart size={24} />,
    title: 'الشغف',
    desc: 'خلف كل قارورة شذايا قصة شغف حقيقي بعالم العطور والحضارة العربية العريقة الأصيلة.',
    color: '#ef4444',
  },
  {
    icon: <Award size={24} />,
    title: 'الابتكار',
    desc: 'نمزج بين الموروث العطري العربي والرؤية المعاصرة لنقدم تجارب شمية لا مثيل لها في عالم العطور.',
    color: '#8b5cf6',
  },
];

const INGREDIENTS = [
  {
    icon: <Flame size={28} />,
    name: 'العود الكمبودي',
    origin: 'كمبوديا',
    desc: 'أغلى خشب في العالم، دخاني وعميق، يمنح العطر حضوراً ملكياً لا يُنسى ويدوم ساعات طويلة.',
    gradient: 'from-amber-900 to-amber-700',
    bg: '#2d1a00',
  },
  {
    icon: <Flower2 size={28} />,
    name: 'ورد الطائف',
    origin: 'المملكة العربية السعودية',
    desc: 'أشهر الورود العربية، يُعصر بالبرد للحفاظ على زيوته النادرة ذات العبق الفريد والمميز.',
    gradient: 'from-rose-900 to-rose-700',
    bg: '#2d0010',
  },
  {
    icon: <Wind size={28} />,
    name: 'المسك الأبيض',
    origin: 'الهند',
    desc: 'الخاتمة الحريرية لكل تركيبة شذايا، يثبت العطر على الجلد ويمنحه نعومة استثنائية ودفئاً.',
    gradient: 'from-slate-800 to-slate-600',
    bg: '#0a0a14',
  },
  {
    icon: <Droplets size={28} />,
    name: 'العنبر الرمادي',
    origin: 'المحيطات',
    desc: 'كنز المحيطات النادر، يضيف عمقاً أسطورياً وثباتاً لا يُضاهى للعطر يدوم أياماً على البشرة.',
    gradient: 'from-zinc-800 to-zinc-600',
    bg: '#141414',
  },
];

const MILESTONES = [
  { year: '2019', title: 'البداية', desc: 'انطلقت شذايا من حلم مصري بسيط — نقل روح العطر العربي للعالم.' },
  { year: '2020', title: 'أول مجموعة', desc: 'أطلقنا مجموعتنا الأولى من 10 عطور، حققت صدى واسعاً في السوق المحلي.' },
  { year: '2022', title: 'التوسع', desc: 'تجاوزنا 5,000 عميل راضٍ وأطلقنا خط البخور والدهون الفاخرة.' },
  { year: '2024', title: 'الانتشار', desc: 'وصلنا لأكثر من 10,000 عميل في مصر والخليج، وأطلقنا 50+ عطراً فريداً.' },
];

const PROMISES = [
  'مكونات طبيعية 100% بلا إضافات ضارة',
  'تغليف فاخر يحكي قصة براند أصيل',
  'ثبات استثنائي يصل لـ 12 ساعة',
  'شحن سريع مع ضمان الجودة الكاملة',
];

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ====== CINEMATIC HERO ====== */}
      <div className="about-hero">
        <div className="about-hero__bg-pattern" />
        <div className="about-hero__bottle-deco">
          <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-bottle-svg">
            <rect x="82" y="2" width="36" height="20" rx="6" stroke="currentColor" strokeWidth="2.5" />
            <rect x="70" y="20" width="60" height="12" rx="4" stroke="currentColor" strokeWidth="2.5" />
            <path d="M50 50 Q35 100 35 160 Q35 240 50 290 Q65 320 100 320 Q135 320 150 290 Q165 240 165 160 Q165 100 150 50 Q135 34 100 32 Q65 34 50 50Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="M60 100 Q50 140 50 180 Q50 230 65 270" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" />
            <path d="M75 65 Q68 80 65 100" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <ellipse cx="100" cy="200" rx="38" ry="55" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          </svg>
        </div>
        <div className="container about-hero__inner">
          <span className="about-hero__label">
            <Sparkles size={12} /> من القاهرة إلى العالم
          </span>
          <h1 className="about-hero__title">
            نصنع أثراً<br />
            <em>لا يُنسى</em>
          </h1>
          <p className="about-hero__desc">
            شذايا ليس مجرد براند عطور — هو رحلة حسية تجمع بين عمق الموروث العربي ورقي العصر الحديث
          </p>
          <div className="about-hero__stats">
            <div className="about-hero__stat">
              <span className="about-hero__stat-num">+50</span>
              <span className="about-hero__stat-label">عطراً فريداً</span>
            </div>
            <div className="about-hero__stat-divider" />
            <div className="about-hero__stat">
              <span className="about-hero__stat-num">+10K</span>
              <span className="about-hero__stat-label">عميل سعيد</span>
            </div>
            <div className="about-hero__stat-divider" />
            <div className="about-hero__stat">
              <span className="about-hero__stat-num">5+</span>
              <span className="about-hero__stat-label">سنوات خبرة</span>
            </div>
          </div>
        </div>
        <div className="about-hero__scroll-line" />
      </div>

      {/* ====== STORY SECTION ====== */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-imgs">
              <div className="about-img-main">
                <img src="/assets/brand-story.webp" alt="شذايا" />
                <div className="about-img-main__overlay">
                  <span className="about-img-badge">منذ 2019</span>
                </div>
              </div>
              <div className="about-img-sec">
                <img src="/assets/brand-story-2.webp" alt="شذايا" />
              </div>
              <div className="about-img-float">
                <img src="/assets/brand-story-3.webp" alt="شذايا" />
              </div>
            </div>
            <div className="about-story-text">
              <span className="brand-story__tag"><Sparkles size={12} /> بداية شذايا</span>
              <h2 className="about-heading">من حلم مصري<br /><span>إلى براند عالمي</span></h2>
              <p className="about-para">
                بدأت قصة شذايا في قلب القاهرة، حين قررنا أن نحمل موروثنا العطري الأصيل ونعيد صياغته بلغة العصر. آمنّا بأن العطر ليس مجرد رائحة — بل هو هوية وذاكرة وحكاية تُروى بلا كلام.
              </p>
              <p className="about-para">
                من مصر إلى العالم، نحمل معنا عبق التراث وعمق الجذور، ونُقدّمه في قوارير تجمع بين الأناقة الشرقية والحداثة العصرية. كل منتج من شذايا هو وعد بتجربة حسية لا تُنسى.
              </p>

              <div className="about-promises">
                {PROMISES.map((p, i) => (
                  <div key={i} className="about-promise-item">
                    <CheckCircle size={16} className="about-promise-icon" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">+50</span>
                  <span className="about-stat-label">عطراً فريداً</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">+10K</span>
                  <span className="about-stat-label">عميل سعيد</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">5+</span>
                  <span className="about-stat-label">سنوات خبرة</span>
                </div>
              </div>
              <Link to="/shop" className="btn btn-gold" style={{ marginTop: '8px', width: 'fit-content' }}>
                <ArrowLeft size={15} />
                تسوق المجموعة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== INGREDIENTS SHOWCASE ====== */}
      <section className="about-ingredients-section">
        <div className="about-ingredients-deco" />
        <div className="container">
          <div className="section-head">
            <span className="about-section-tag">مكونات الرقي</span>
            <h2 className="section-title" style={{ color: '#fff' }}>من أرقى مصادر الطبيعة</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
              نختار بعناية أجود المكونات من أصقاع العالم لنصنع عطوراً تدوم في الذاكرة
            </p>
            <span className="title-border" style={{ margin: '0 auto' }} />
          </div>

          <div className="about-ingredients-grid">
            {INGREDIENTS.map((ing, i) => (
              <div key={i} className="about-ingredient-card">
                <div className="about-ingredient-icon-wrap">
                  {ing.icon}
                </div>
                <div className="about-ingredient-origin">{ing.origin}</div>
                <h3 className="about-ingredient-name">{ing.name}</h3>
                <p className="about-ingredient-desc">{ing.desc}</p>
                <div className="about-ingredient-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRAND TIMELINE ====== */}
      <section className="section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head">
            <span className="about-section-tag about-section-tag--dark">مسيرتنا</span>
            <h2 className="section-title">رحلة شذايا عبر السنين</h2>
            <p className="section-subtitle">من الحلم إلى الواقع — كل خطوة كانت نحو الكمال</p>
            <span className="title-border" style={{ margin: '0 auto' }} />
          </div>

          <div className="about-timeline">
            {MILESTONES.map((m, i) => (
              <div key={i} className={`about-timeline-item${i % 2 === 0 ? '' : ' about-timeline-item--alt'}`}>
                <div className="about-timeline-content">
                  <div className="about-timeline-year">{m.year}</div>
                  <h3 className="about-timeline-title">{m.title}</h3>
                  <p className="about-timeline-desc">{m.desc}</p>
                </div>
                <div className="about-timeline-dot">
                  <div className="about-timeline-dot-inner" />
                </div>
                <div className="about-timeline-spacer" />
              </div>
            ))}
            <div className="about-timeline-line" />
          </div>
        </div>
      </section>

      {/* ====== VALUES ====== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-head">
            <span className="about-section-tag about-section-tag--dark">فلسفتنا</span>
            <h2 className="section-title">القيم التي تقوم عليها شذايا</h2>
            <p className="section-subtitle">مبادئ راسخة تُحرّك كل قرار نتخذه وكل عطر نصنعه</p>
            <span className="title-border" style={{ margin: '0 auto' }} />
          </div>
          <div className="about-values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="about-value-card-v2">
                <div className="about-value-icon-v2" style={{ background: v.color + '15', color: v.color, border: `1px solid ${v.color}30` }}>
                  {v.icon}
                </div>
                <h3 className="about-value-title-v2">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
                <div className="about-value-accent" style={{ background: v.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="about-final-cta">
        <div className="about-final-cta__overlay" />
        <div className="about-final-cta__bottle">
          <svg viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="65" y="2" width="30" height="16" rx="5" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <rect x="56" y="16" width="48" height="10" rx="3" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <path d="M38 42 Q26 85 26 135 Q26 200 40 238 Q54 265 80 265 Q106 265 120 238 Q134 200 134 135 Q134 85 122 42 Q108 28 80 26 Q52 28 38 42Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
        </div>
        <div className="container about-final-cta__inner">
          <span className="about-hero__label" style={{ marginBottom: '16px' }}>
            <Sparkles size={12} /> اكتشف عالم شذايا
          </span>
          <h2 className="about-final-cta__title">
            جاهز تكتشف <span>عطرك المثالي؟</span>
          </h2>
          <p className="about-final-cta__desc">
            تصفح مجموعتنا الكاملة من أكثر من 50 عطراً فاخراً، كل واحد يحكي قصة مختلفة
          </p>
          <div className="about-final-cta__btns">
            <Link to="/shop" className="btn btn-gold">تسوق الآن</Link>
            <Link to="/contact" className="btn btn-outline-white">تواصل معنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
