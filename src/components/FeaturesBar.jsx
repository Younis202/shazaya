import { Truck, ShieldCheck, Headphones, RefreshCw } from 'lucide-react';

const FEATURES = [
  { icon: <Truck size={20} />, title: 'شحن مجاني', desc: 'للطلبات فوق 350 ريال' },
  { icon: <ShieldCheck size={20} />, title: 'ضمان الجودة', desc: 'عطور أصلية 100%' },
  { icon: <Headphones size={20} />, title: 'دعم 24/7', desc: 'خدمة عملاء متميزة' },
  { icon: <RefreshCw size={20} />, title: 'إرجاع سهل', desc: 'خلال 7 أيام من الاستلام' },
];

export default function FeaturesBar() {
  return (
    <div className="features-bar">
      <div className="container">
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <div>
                <p className="feature-text-title">{f.title}</p>
                <p className="feature-text-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
