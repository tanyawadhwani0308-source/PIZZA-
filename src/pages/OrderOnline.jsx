import { useState } from 'react';
import { Link } from 'react-router-dom';

const pizzas = [
  {
    id: 1, name: 'Margherita', category: 'classic', price: 450, time: '20 min',
    desc: 'San Marzano tomatoes, buffalo mozzarella, basil, EVOO',
    img: '/images/order/margherita.jpg',
    spice: 0,
  },
  {
    id: 2, name: 'Bombay BBQ', category: 'bombay', price: 850, time: '25 min',
    desc: 'Smoked chicken, makhani drizzle, red onions, cilantro, chillies',
    img: '/images/order/bombayBBQ .jpg',
    spice: 3, badge: '🔥 Best Seller',
  },
  {
    id: 3, name: 'Paneer Crunch', category: 'bombay', price: 799, time: '22 min',
    desc: 'Charred paneer tikka, capsicum, mint chutney aioli, pomegranate',
    img: '/images/order/pannercrunch.jpg',
    spice: 2,
  },
  {
    id: 4, name: 'Diavola', category: 'classic', price: 550, time: '20 min',
    desc: 'Spicy Calabrian salami, chilli flakes, crushed tomato, mozzarella',
    img: '/images/order/diavola.jpg',
    spice: 3,
  },
  {
    id: 5, name: 'Wild Mushroom', category: 'veggie', price: 699, time: '20 min',
    desc: 'Truffle oil, mixed wild mushrooms, fresh thyme, pecorino shavings',
    img: '/images/order/Wild Mushroom Pizza.jpg',
    spice: 0,
  },
  {
    id: 6, name: 'Keema Masala', category: 'bombay', price: 749, time: '28 min',
    desc: 'Spiced lamb keema, pickled jalapeño, mozzarella, fresh coriander',
    img: '/images/order/keemamasalaPizza.jpg',
    spice: 3, badge: '🌶️ Chef\'s Pick',
  },
];

const SpiceLevel = ({ level }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3].map((i) => (
      <span key={i} className={i <= level ? 'text-pizza-red' : 'text-pizza-tan text-opacity-40'}>🌶️</span>
    ))}
  </div>
);

export default function OrderOnline() {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [toastMsg, setToastMsg] = useState('');

  const filtered = filter === 'all' ? pizzas : pizzas.filter((p) => p.category === filter);

  const increment = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === pizza.id);
      if (existing) return prev.map((p) => p.id === pizza.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...pizza, qty: 1 }];
    });
    setToastMsg(`Added ${pizza.name} to your order!`);
    setTimeout(() => setToastMsg(''), 2500);
  };

  const decrement = (id) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);
      if (!item) return prev;
      if (item.qty === 1) return prev.filter((p) => p.id !== id); // remove at 0
      return prev.map((p) => p.id === id ? { ...p, qty: p.qty - 1 } : p);
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const getQty = (id) => cart.find((p) => p.id === id)?.qty ?? 0;

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="relative">
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-24 right-6 bg-pizza-olive text-pizza-cream px-6 py-3 font-label font-bold text-sm shadow-rustic-lg z-50 transition-all duration-300"
          style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
          ✓ {toastMsg}
        </div>
      )}

      {/* Header */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="section-label block mb-3">Ready in ~25 Minutes</span>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-pizza-red leading-tight mb-4">
              Order Online
            </h1>
            <p className="font-body text-pizza-brown text-lg leading-relaxed mb-8">
              Fresh from our stone oven to your door. Every pizza made to order — we don't pre-make, we don't reheat.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['all', 'classic', 'bombay', 'veggie'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-label font-bold text-xs uppercase tracking-widest px-4 py-2 transition-all ${
                    filter === cat
                      ? 'bg-pizza-red text-pizza-cream shadow-rustic'
                      : 'border border-pizza-red/30 text-pizza-brown hover:border-pizza-red hover:text-pizza-red'
                  }`}
                  style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                >
                  {cat === 'all' ? '🍕 All Pies' : cat === 'bombay' ? '🌶️ Bombay Specials' : cat === 'veggie' ? '🌿 Veggie' : '🍕 Classics'}
                </button>
              ))}
            </div>

            {/* Pizza Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {filtered.map((pizza) => (
                <div key={pizza.id} className="rustic-card overflow-hidden group">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '192px' }}>
                    <img
                      src={pizza.img}
                      alt={pizza.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ width: '100%', height: '100%' }}
                    />
                    {pizza.badge && (
                      <span className="absolute top-3 left-3 bg-pizza-red text-pizza-cream text-xs font-label font-bold px-2 py-0.5 rounded-full">
                        {pizza.badge}
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-lg text-pizza-red">{pizza.name}</h3>
                      <span className="font-serif font-black text-xl text-pizza-terra">₹{pizza.price}</span>
                    </div>
                    <p className="font-body text-xs text-pizza-brown/70 mb-3 leading-relaxed">{pizza.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <SpiceLevel level={pizza.spice} />
                        <span className="text-xs text-pizza-olive font-label">⏱ {pizza.time}</span>
                      </div>
                      {getQty(pizza.id) === 0 ? (
                        <button
                          onClick={() => increment(pizza)}
                          className="bg-pizza-red text-pizza-cream text-xs font-label font-bold px-4 py-2 hover:bg-pizza-red/90 active:scale-95 transition-all"
                          style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                        >
                          + Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-1" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                          <button
                            onClick={() => decrement(pizza.id)}
                            className="w-8 h-8 bg-pizza-red text-pizza-cream font-black text-base flex items-center justify-center hover:bg-pizza-red/80 active:scale-95 transition-all leading-none"
                            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                            aria-label="Remove one"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-serif font-black text-sm text-pizza-red">
                            {getQty(pizza.id)}
                          </span>
                          <button
                            onClick={() => increment(pizza)}
                            className="w-8 h-8 bg-pizza-red text-pizza-cream font-black text-base flex items-center justify-center hover:bg-pizza-red/80 active:scale-95 transition-all leading-none"
                            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                            aria-label="Add one more"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="rustic-card p-6 sticky top-24">
              <h2 className="font-serif font-bold text-2xl text-pizza-red mb-6 flex items-center gap-2">
                🛒 Your Order
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-pizza-brown/50">
                  <div className="text-5xl mb-3">🍕</div>
                  <p className="font-serif italic text-sm">Your basket is hungry.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((p) => (
                      <div key={p.id} className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-serif font-bold text-sm text-pizza-brown">{p.name}</p>
                          <p className="text-xs text-pizza-brown/60">× {p.qty} = ₹{p.price * p.qty}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(p.id)}
                          className="text-pizza-red text-sm hover:text-pizza-red/60 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-dashed border-pizza-terra/30 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-serif font-bold text-pizza-brown">Total</span>
                      <span className="font-serif font-black text-2xl text-pizza-red">₹{total}</span>
                    </div>
                  </div>
                  <button className="btn-rustic w-full text-center text-sm">
                    Checkout →
                  </button>
                  <p className="text-center text-xs text-pizza-brown/50 font-label mt-3">
                    Free delivery over ₹699
                  </p>
                </>
              )}

              {/* Divider */}
              <div className="border-t border-dashed border-pizza-tan/40 mt-6 pt-4">
                <p className="font-serif italic text-xs text-pizza-brown/50 text-center">
                  "Made fresh, not fast — but faster than you'd expect."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
