import { motion } from 'framer-motion';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'شحن مجاني فوق ٥٠٠ ريال' },
  { icon: ShieldCheck, label: 'أصالة مضمونة ١٠٠%' },
  { icon: RotateCcw, label: 'إرجاع خلال ١٤ يوماً' },
  { icon: Headphones, label: 'دعم على مدار الساعة' },
];

export default function FeaturesBar() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '32px 24px', borderTop: '1px solid hsl(36 10% 16% / 0.4)', borderBottom: '1px solid hsl(36 10% 16% / 0.4)', backgroundColor: 'hsl(36 14% 8% / 0.4)' }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <Icon size={18} strokeWidth={1.5} style={{ color: 'hsl(38 58% 52%)', flexShrink: 0 }} />
            <span className="font-body" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'hsl(36 10% 50%)' }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
