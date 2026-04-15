import React from 'react';

const messages = [
  'مرحبًا بكم في متجر شذايا للعطور | احصل على شحن مجاني للطلبات التي تزيد عن 350 ريال',
  'اكتشف أرقى العطور العربية الفاخرة | شذايا.. عطرك يتكلم عنك',
  'مجموعات حصرية جديدة متاحة الآن | تسوق وادفع بأمان',
];

export default function AnnouncementBar() {
  const doubled = [...messages, ...messages];

  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {doubled.map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </div>
    </div>
  );
}
