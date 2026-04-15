import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="brand-section section" id="about">
      <div className="container">
        <div className="brand-inner">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="brand-label">قصة شذايا</div>
            <h2 className="brand-title">
              فنّ صُنع لأصحاب<br />
              الذوق الرفيع
            </h2>
            <p className="brand-body">
              في شذايا نؤمن أن العطر ليس مجرد رائحة — بل هو هوية وحضور وانطباع أول لا يُمحى.
              أسسنا دارنا بشغف حقيقي لصناعة العطور الفاخرة، مستلهمين من عمق التراث العربي
              ومنفتحين على أرقى مواد العطور حول العالم.
            </p>
            <a href="#" className="btn-gold">
              اعرف أكثر عنّا
              <ArrowLeft size={16} />
            </a>
            <div className="brand-stats">
              <div>
                <div className="brand-stat-num">+50</div>
                <div className="brand-stat-label">عطر فاخر في مجموعتنا</div>
              </div>
              <div>
                <div className="brand-stat-num">+10K</div>
                <div className="brand-stat-label">عميل يثق بشذايا</div>
              </div>
              <div>
                <div className="brand-stat-num">4+</div>
                <div className="brand-stat-label">سنوات من الخبرة</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="brand-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="brand-img-wrap">
              <img src="/assets/hero-bg.png" alt="عطور شذايا" />
            </div>
            <div className="brand-img-card brand-img-card-bottom">
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.25rem' }}>
                مُصنَّع بمكونات
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>
                ✦ من أجود المواد الطبيعية
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
