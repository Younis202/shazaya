const ITEMS = [
  { text: 'شحن مجاني للطلبات التي تزيد عن', hl: '500 ريال' },
  { text: 'مرحباً بكم في متجر شذايا — البراند الفاخر للعطور العربية' },
  { text: 'عطور شذايا — أثرٌ يبقى، وذكرى لا تُنسى' },
  { text: 'تسوق الآن واحصل على', hl: 'خصومات حصرية' },
];

export default function AnnouncementBar() {
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track">
        {items.map((item, i) => (
          <span key={i} className="announcement-bar__item">
            <span className="announcement-dot" />
            {item.text}{item.hl && <> <span className="gold">{item.hl}</span></>}
          </span>
        ))}
      </div>
    </div>
  );
}
