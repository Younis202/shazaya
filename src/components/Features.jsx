import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react';

const items = [
  { Icon: Truck,         title: 'شحن مجاني',          desc: 'على الطلبات التي تزيد عن 350 ريال' },
  { Icon: ShieldCheck,   title: 'أصلي 100%',          desc: 'جميع عطورنا مضمونة الجودة والأصالة' },
  { Icon: RefreshCcw,    title: 'إرجاع سهل',          desc: 'سياسة إرجاع مرنة خلال 7 أيام' },
  { Icon: Headphones,    title: 'دعم 24/7',            desc: 'فريقنا دائمًا جاهز لمساعدتك' },
];

export default function Features() {
  return (
    <div className="features-strip">
      <div className="container">
        <div className="features-grid">
          {items.map(({ Icon, title, desc }, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon-wrap">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div className="feature-text">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
