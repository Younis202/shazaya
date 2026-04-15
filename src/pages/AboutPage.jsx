import { Sparkles, Star, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const VALUES = [
  { icon: <Sparkles size={22} />, title: 'الأصالة', desc: 'نؤمن بأن الجمال الحقيقي ينبع من الأصالة. كل عطر نصنعه يحمل هوية عربية حقيقية.' },
  { icon: <Star size={22} />, title: 'الجودة', desc: 'نختار أرقى المكونات الطبيعية من أفضل مصادرها حول العالم لضمان تجربة فريدة.' },
  { icon: <Heart size={22} />, title: 'الشغف', desc: 'خلف كل قارورة شذايا قصة شغف حقيقي بعالم العطور والحضارة العربية العريقة.' },
  { icon: <Award size={22} />, title: 'الابتكار', desc: 'نمزج بين الموروث العطري العربي والرؤية المعاصرة لنقدم تجارب شمية لا مثيل لها.' },
];

const TEAM = [
  { name: 'أحمد رضا', role: 'المؤسس والمدير التنفيذي', img: '/assets/brand-story.webp' },
  { name: 'سارة منصور', role: 'رئيسة فريق التصميم', img: '/assets/brand-story-2.webp' },
  { name: 'محمد فاروق', role: 'خبير العطور الرئيسي', img: '/assets/brand-story-3.webp' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="page-hero page-hero--dark">
        <div className="container">
          <p className="page-hero__sub">قصتنا</p>
          <h1 className="page-hero__title">من نحن</h1>
          <p className="page-hero__desc">رحلة من المصر إلى العالم — نصنع أثراً لا يُنسى</p>
        </div>
      </div>

      {/* Story section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-imgs">
              <div className="about-img-main">
                <img src="/assets/brand-story.webp" alt="شذايا" />
              </div>
              <div className="about-img-sec">
                <img src="/assets/brand-story-2.webp" alt="شذايا" />
              </div>
            </div>
            <div className="about-story-text">
              <span className="brand-story__tag"><Sparkles size={12} /> بداية شذايا</span>
              <h2 className="about-heading">من حلم مصري<br /><span>إلى براند عالمي</span></h2>
              <p className="about-para">
                بدأت قصة شذايا في قلب مصر، حين قررنا أن نحمل موروثنا العطري الأصيل ونعيد صياغته بلغة العصر. آمنّا بأن العطر ليس مجرد رائحة — بل هو هوية وذاكرة وحكاية.
              </p>
              <p className="about-para">
                من مصر إلى العالم، نحمل معنا عبق التراث وعمق الجذور، ونُقدّمه في قوارير تجمع بين الأناقة الشرقية والحداثة العصرية. كل منتج من شذايا هو وعد بتجربة حسية لا تُنسى.
              </p>
              <div className="about-stats">
                <div className="about-stat"><span className="about-stat-num">+50</span><span className="about-stat-label">عطراً فريداً</span></div>
                <div className="about-stat"><span className="about-stat-num">+10K</span><span className="about-stat-label">عميل سعيد</span></div>
                <div className="about-stat"><span className="about-stat-num">5+</span><span className="about-stat-label">سنوات خبرة</span></div>
              </div>
              <Link to="/shop" className="btn btn-gold" style={{ marginTop: '8px' }}>تسوق الآن</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">قيمنا</h2>
            <p className="section-subtitle">المبادئ التي تقوم عليها شذايا</p>
            <span className="title-border" />
          </div>
          <div className="about-values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-icon">{v.icon}</div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">فريقنا</h2>
            <p className="section-subtitle">العقول المبدعة خلف شذايا</p>
            <span className="title-border" />
          </div>
          <div className="about-team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-img">
                  <img src={m.img} alt={m.name} />
                </div>
                <h3 className="about-team-name">{m.name}</h3>
                <p className="about-team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>جاهز تكتشف عالم شذايا؟</h2>
          <p>تصفح مجموعتنا الكاملة من العطور الفاخرة</p>
          <Link to="/shop" className="btn btn-gold">تسوق الآن</Link>
        </div>
      </section>
    </div>
  );
}
