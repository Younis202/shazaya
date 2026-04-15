import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  const handleClose = () => { setQuery(''); onClose(); };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center"
          style={{ backgroundColor: 'hsl(36 18% 5% / 0.9)', backdropFilter: 'blur(16px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-body text-center mb-8" style={{ fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              ابحث في مجموعة شذايا
            </p>
            <div
              className="flex items-center gap-4"
              style={{ borderBottom: '1px solid hsl(36 10% 16% / 0.6)' }}
            >
              <Search size={18} strokeWidth={1.5} style={{ color: 'hsl(36 10% 50%)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="ابحث عن عطرك المفضل..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={isOpen}
                onKeyDown={(e) => e.key === 'Escape' && handleClose()}
                className="flex-1 bg-transparent font-body outline-none"
                style={{ padding: '16px 0', fontSize: '1.1rem', color: 'hsl(36 20% 90%)', letterSpacing: '0.05em' }}
              />
              <button onClick={handleClose} style={{ color: 'hsl(36 20% 90% / 0.3)', transition: 'color 0.2s' }}>
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <p className="font-body mt-4" style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'hsl(36 10% 50% / 0.4)' }}>
              اضغط ESC للإغلاق
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
