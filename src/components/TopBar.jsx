import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="tb-inner">
          <a href="mailto:info@shadaya.com">
            <span>✉</span>
            info@shadaya.com
          </a>
          <div className="tb-right">
            <span>المملكة العربية السعودية</span>
            <a href="#" style={{ fontWeight: 600 }}>العربية ▾</a>
          </div>
        </div>
      </div>
    </div>
  );
}
