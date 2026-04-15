import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';

const COLLECTIONS = [
  { name: 'هوس', category: 'مجموعة رجالية', count: '٨ عطور', img: '/assets/col-1.webp', size: 'tall', href: '/shop' },
  { name: 'دارج', category: 'للجنسين', count: '٦ عطور', img: '/assets/col-2.webp', size: 'normal', href: '/shop' },
  { name: 'سمو شذايا', category: 'مجموعة نسائية', count: '١٠ عطور', img: '/assets/col-3.webp', size: 'normal', href: '/shop' },
  { name: 'نفائس الشغف', category: 'عود وبخور', count: '٥ عطور', img: '/assets/col-4.webp', size: 'tall', href: '/shop' },
  { name: 'الوسام', category: 'رجالية فاخرة', count: '٧ عطور', img: '/assets/col-5.webp', size: 'normal', href: '/shop' },
  { name: 'توليفة', category: 'للجنسين', count: '٩ عطور', img: '/assets/col-6.webp', size: 'normal', href: '/shop' },
];

const CollectionItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer ${item.size === 'tall' ? 'row-span-2' : ''}`}
    >
      <Link to={item.href}>
        <div
          className="relative overflow-hidden mb-4"
          style={{ aspectRatio: item.size === 'tall' ? '2/3' : '4/5', backgroundColor: 'hsl(36 14% 8%)' }}
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform"
            style={{ transitionDuration: '2s', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: 'linear-gradient(to top, hsl(36 18% 5% / 0.7) 0%, hsl(36 18% 5% / 0.1) 60%, transparent 100%)' }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="flex items-center justify-between">
              <span
                className="font-body"
                style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(36 20% 90%)', backgroundColor: 'hsl(36 18% 5% / 0.6)', backdropFilter: 'blur(8px)', padding: '10px 18px', transition: 'background-color 0.3s' }}
              >
                تسوق الآن
              </span>
              <div
                className="flex items-center justify-center"
                style={{ width: '36px', height: '36px', border: '1px solid hsl(36 20% 90% / 0.4)', color: 'hsl(36 20% 90%)' }}
              >
                <ArrowUpLeft size={13} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <span
              className="font-body"
              style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(36 20% 90% / 0.6)', backgroundColor: 'hsl(36 18% 5% / 0.5)', backdropFilter: 'blur(8px)', padding: '6px 10px' }}
            >
              {item.count}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start px-1">
          <div>
            <h3
              className="font-display transition-colors duration-500"
              style={{ fontSize: '1.1rem', fontWeight: 400, color: 'hsl(36 20% 90%)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 20% 90%)'}
            >
              {item.name}
            </h3>
            <p className="font-body mt-1.5" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
              {item.category}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Collections() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section style={{ padding: '64px 24px 80px' }}>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 max-w-screen-xl mx-auto"
      >
        <div>
          <p className="font-body mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)' }}>
            مجموعاتنا
          </p>
          <motion.span
            className="luxury-divider mb-6"
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            style={{ display: 'block', transformOrigin: 'right' }}
          />
          <h2
            className="font-display leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'hsl(36 20% 90%)' }}
          >
            عوالم <span style={{ fontStyle: 'italic' }}>شذايا</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="mt-8 md:mt-0 inline-flex items-center gap-3 font-body group"
          style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(36 10% 50%)', transition: 'color 0.4s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(38 58% 52%)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(36 10% 50%)'}
        >
          <span>عرض جميع المجموعات</span>
          <ArrowUpLeft size={12} strokeWidth={1.5} />
        </Link>
      </motion.div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-auto">
        {COLLECTIONS.map((item, index) => (
          <CollectionItem key={item.name} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
