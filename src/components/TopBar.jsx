import { Mail, Phone, Globe } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <div className="top-bar__left">
          <a href="mailto:info@shadaya.sa" className="top-bar__link">
            <Mail size={13} />
            info@shadaya.sa
          </a>
          <a href="tel:+966500000000" className="top-bar__link">
            <Phone size={13} />
            966+ 50 000 0000
          </a>
        </div>
        <div className="top-bar__right">
          <span className="top-bar__link" style={{cursor:'pointer'}}>
            <Globe size={13} />
            العربية
          </span>
        </div>
      </div>
    </div>
  );
}
