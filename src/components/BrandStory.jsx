import { Sparkles } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="brand-story section-padding">
      <div className="container">
        <div className="brand-story__grid">
          {/* Text side */}
          <div>
            <span className="brand-story__tag">
              <Sparkles size={12} />
              قصة شذايا
            </span>
            <h2 className="brand-story__title">
              نصنع <span>أثراً</span><br />لا يُنسى
            </h2>
            <p className="brand-story__text">
              شذايا براند عطور سعودي ناشئ، يؤمن بأن العطر ليس مجرد رائحة — بل هو حضور وهوية وذاكرة. نصنع عطوراً تحكي قصتك قبل أن تنطق بكلمة.
            </p>
            <p className="brand-story__text">
              نختار أنقى المكونات من أرقى المصادر حول العالم، ونمزجها بإتقان يعكس موروثاً عربياً أصيلاً ورؤية معاصرة جريئة. كل قارورة من شذايا هي تجربة حسية متكاملة.
            </p>

            <div className="brand-story__stats">
              <div>
                <div className="stat-num">+50</div>
                <div className="stat-label">عطراً فريداً</div>
              </div>
              <div>
                <div className="stat-num">+10K</div>
                <div className="stat-label">عميل راضٍ</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">أصالة وجودة</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-gold">تسوق الآن</a>
              <a href="#" className="btn btn-outline-white">قصتنا كاملة</a>
            </div>
          </div>

          {/* Images side */}
          <div className="brand-story__images">
            <div className="brand-img brand-img--main">
              <img src="/assets/brand-story.webp" alt="شذايا - قصة البراند" />
            </div>
            <div className="brand-img brand-img--sec">
              <img src="/assets/brand-story-2.webp" alt="شذايا - العطور" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
