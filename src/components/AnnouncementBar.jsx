import React from 'react';

const msgs = [
  '✦  شحن مجاني للطلبات فوق 350 ريال',
  '✦  مجموعة شذايا الحصرية — أرقى العطور السعودية',
  '✦  ضمان الأصالة 100% على جميع منتجاتنا',
  '✦  الدفع بالتقسيط مع تمارا',
  '✦  شحن مجاني للطلبات فوق 350 ريال',
  '✦  مجموعة شذايا الحصرية — أرقى العطور السعودية',
  '✦  ضمان الأصالة 100% على جميع منتجاتنا',
  '✦  الدفع بالتقسيط مع تمارا',
];

export default function AnnouncementBar() {
  return (
    <div className="ann-bar" aria-label="إعلانات المتجر">
      <div className="ann-track" aria-hidden="true">
        {msgs.map((m, i) => (
          <span key={i} style={{ letterSpacing: '0.04em' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}
