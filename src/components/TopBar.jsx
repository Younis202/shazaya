import React from 'react';
import { Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <div className="topbar-left">
            <a href="mailto:info@shadaya.com">
              <Mail size={12} />
              info@shadaya.com
            </a>
          </div>
          <div className="topbar-right">
            <span>الرياض، المملكة العربية السعودية</span>
            <a href="#">العربية ▾</a>
          </div>
        </div>
      </div>
    </div>
  );
}
