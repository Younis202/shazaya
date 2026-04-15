import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
        zIndex: -1
      }} />
      
      <div className="container">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent mb-2"
            style={{ letterSpacing: '0.1em' }}
          >
            التجربة العطرية
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            رحلة الحواس
          </motion.h2>
        </div>

        <div className="grid-3" style={{ gap: '4rem 2rem' }}>
          {[
            {
              title: "الافتتاحية",
              desc: "لحظة اللقاء الأول. نفحات عليا تأسر الحواس وتعلن عن حضورك بثقة.",
              delay: 0
            },
            {
              title: "القلب",
              desc: "جوهر العطر. مزيج متناغم يعكس شخصيتك ويتفاعل مع كيميائك الخاصة.",
              delay: 0.2
            },
            {
              title: "القاعدة",
              desc: "الأثر الخالد. نوتات عميقة ودافئة تبقى معك كذكرى جميلة.",
              delay: 0.4
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.8 }}
              style={{
                padding: '3rem 2rem',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(10, 10, 10, 0.5)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                width: '40px', height: '2px', backgroundColor: 'var(--color-accent)'
              }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
