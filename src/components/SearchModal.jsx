import { X, Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  return (
    <div className={`search-overlay${isOpen ? ' open' : ''}`} onClick={handleClose}>
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <Search size={19} className="search-box__icon" />
        <input
          type="text"
          placeholder="ابحث عن عطرك المفضل..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus={isOpen}
          onKeyDown={e => e.key === 'Escape' && handleClose()}
        />
        <button className="search-box__close" onClick={handleClose} aria-label="إغلاق">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
