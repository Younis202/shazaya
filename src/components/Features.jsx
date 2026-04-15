import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react';

const items = [
  {
    icon: <Truck size={20} />,
    title: 'شحن مجاني',
    desc: 'على الطلبات التي تزيد عن 350 ريال',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'منتجات أصلية 100%',
    desc: 'جميع عطورنا أصلية ومضمونة الجودة',
  },
  {
    icon: <RefreshCcw size={20} />,
    title: 'إرجاع سهل',
    desc: 'سياسة إرجاع واستبدال مرنة خلال 7 أيام',
  },
  {
    icon: <Headphones size={20} />,
    title: 'دعم على مدار الساعة',
    desc: 'فريقنا جاهز لمساعدتك في أي وقت',
  },
];

export default function Features() {
  return (
    <div className="section-alt" style={{ padding: '0' }}>
      <div className="container">
        <div className="features-row">
          {items.map((item, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{item.icon}</div>
              <div className="feature-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
