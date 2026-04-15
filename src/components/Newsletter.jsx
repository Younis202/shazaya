import React from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-md mb-4"
          >
            انضم لعالم شذايا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lead mb-8"
          >
            كن أول من يكتشف إصداراتنا الحصرية وعطورنا الجديدة.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              required
              style={{
                padding: '1rem 1.5rem',
                background: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                width: '100%',
                maxWidth: '300px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              اشتراك
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
