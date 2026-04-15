import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 z-[9990] flex items-center gap-3 font-body"
          style={{
            backgroundColor: 'hsl(36 14% 8%)',
            border: '1px solid hsl(36 10% 16% / 0.5)',
            padding: '14px 24px',
            backdropFilter: 'blur(20px)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'hsl(36 20% 90%)',
            whiteSpace: 'nowrap',
          }}
        >
          <ShoppingBag size={14} strokeWidth={1.5} style={{ color: 'hsl(38 58% 52%)' }} />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
