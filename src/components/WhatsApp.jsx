import { MessageCircle } from 'lucide-react';

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/201000000000"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={26} />
    </a>
  );
}
