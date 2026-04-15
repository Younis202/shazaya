import { X, ShoppingCart, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, items, onRemove }) {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-head">
          <div className="cart-head__title">
            <ShoppingCart size={18} />
            سلة التسوق
            {items.length > 0 && (
              <span style={{ background: 'var(--gold)', color: '#fff', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700' }}>
                {items.length}
              </span>
            )}
          </div>
          <button onClick={onClose} style={{ padding: '8px', borderRadius: '50%', color: 'var(--text-secondary)', display: 'flex', transition: 'background 0.2s' }}>
            <X size={18} />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon">🛒</div>
              <p>سلتك فارغة حالياً</p>
              <button onClick={onClose} className="btn btn-gold" style={{ marginTop: '8px' }}>
                تسوق الآن
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '12px', alignItems: 'center' }}>
                  <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '8px', background: 'var(--gray-100)', padding: '4px' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>{item.subtitle}</p>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--gold)' }}>{item.price} ر.س</p>
                  </div>
                  <button onClick={() => onRemove(i)} style={{ color: 'var(--text-secondary)', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-total">
              <span>الإجمالي</span>
              <span className="cart-total__val">{total.toFixed(2)} ر.س</span>
            </div>
            <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
              إتمام الشراء
            </button>
          </div>
        )}
      </div>
    </>
  );
}
