export default function AnnouncementBar() {
  const items = [
    { text: 'شحن مجاني للطلبات التي تزيد عن', hl: '500 جنيه' },
    { text: 'مرحباً بكم في متجر شذايا — البراند المصري للعطور الفاخرة' },
    { text: 'عطور شذايا — أثرٌ يبقى، وذكرى لا تُنسى' },
    { text: 'تسوق الآن واحصل على', hl: 'خصومات حصرية' },
    { text: 'شحن مجاني للطلبات التي تزيد عن', hl: '500 جنيه' },
    { text: 'مرحباً بكم في متجر شذايا — البراند المصري للعطور الفاخرة' },
    { text: 'عطور شذايا — أثرٌ يبقى، وذكرى لا تُنسى' },
    { text: 'تسوق الآن واحصل على', hl: 'خصومات حصرية' },
  ];
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
