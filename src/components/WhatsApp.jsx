import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-8 right-6 z-[9980] flex items-center justify-center"
      style={{
        width: '48px',
        height: '48px',
        backgroundColor: 'hsl(36 14% 8%)',
        border: '1px solid hsl(36 10% 16% / 0.5)',
        color: 'hsl(36 20% 90% / 0.6)',
        transition: 'border-color 0.4s, color 0.4s',
      }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(38 58% 52%)'; e.currentTarget.style.color = 'hsl(38 58% 52%)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(36 10% 16% / 0.5)'; e.currentTarget.style.color = 'hsl(36 20% 90% / 0.6)'; }}
    >
      <MessageCircle size={20} strokeWidth={1.5} />
    </motion.a>
  );
}
