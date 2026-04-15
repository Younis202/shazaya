import { motion } from 'framer-motion';

const ITEMS = [
  'مجموعة شذايا ٢٠٢٦',
  '✦',
  'شحن مجاني للطلبات فوق ٥٠٠ ريال',
  '✦',
  'إرجاع مجاني خلال ١٤ يوماً',
  '✦',
  'منتجات أصلية ١٠٠%',
  '✦',
  'ادفع بالتقسيط مع تمارة',
  '✦',
];

const text = ITEMS.join('   ') + '   ';

export default function AnnouncementBar() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        paddingTop: '18px',
        paddingBottom: '18px',
        borderBottom: '1px solid hsl(36 10% 16% / 0.5)',
        backgroundColor: 'hsl(36 14% 8% / 0.3)',
      }}
    >
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="whitespace-nowrap flex"
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-body inline-block"
            style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}
          >
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        animate={{ x: [-1500, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="whitespace-nowrap flex mt-2 opacity-25"
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-body inline-block"
            style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
