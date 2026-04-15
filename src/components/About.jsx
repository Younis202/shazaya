import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)', position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="/assets/Untitled-11_1776217284464.png" 
              alt="Shadaya Logo" 
              style={{ width: '100%', maxWidth: '400px', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.1))' }} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-accent mb-4" style={{ letterSpacing: '0.1em' }}>فلسفة شذايا</p>
            <h2 className="heading-md mb-8">ليس مجرد عطر،<br/>بل امتداد لشخصيتك.</h2>
            <p className="text-lead mb-8">
              في شذايا، نؤمن أن العطر هو لغتك الصامتة. نختار أندر المكونات وأجود الزيوت العطرية لنبتكر روائح تتناغم مع هدوئك، وتبرز فخامتك، وتترك خلفك أثراً لا يمحى.
            </p>
            <p className="text-lead mb-12">
              كل زجاجة هي تحفة فنية، صُبّت بشغف، لتكون الرفيق الأوفى في لحظاتك الاستثنائية.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 className="text-accent" style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>01</h4>
                <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>مكونات نادرة</h5>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>نستخلص أندر الزهور والأخشاب لنقدم نقاء لا يضاهى.</p>
              </div>
              <div>
                <h4 className="text-accent" style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>02</h4>
                <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>ثبات استثنائي</h5>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>تركيز عالي يضمن بقاء أثرك طويلاً.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
