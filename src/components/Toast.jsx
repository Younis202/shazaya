import { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  return (
    <div className={`toast${isVisible ? ' show' : ''}`}>
      <ShoppingCart size={15} className="toast__icon" />
      <span className="toast__msg">{message}</span>
    </div>
  );
}
