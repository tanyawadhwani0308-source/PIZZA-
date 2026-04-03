const categories = [
  {
    id: 'classics',
    name: 'Neapolitan Classics',
    icon: '🍕',
    items: [
      { name: 'Margherita', desc: 'San Marzano tomatoes, fresh buffalo mozzarella, basil, EVOO', price: 18 },
      { name: 'Marinara', desc: 'The original. Tomato, garlic, oregano — no cheese, pure fire', price: 15 },
      { name: 'Quattro Formaggi', desc: 'Fior di latte, gorgonzola, pecorino, goat cheese, honey drizzle', price: 22 },
      { name: 'Diavola', desc: 'Spicy Calabrian salami, chilli, crushed tomatoes, mozzarella', price: 21 },
    ],
  },
  {
    id: 'bombay',
    name: 'Bombay Specials',
    icon: '🌶️',
    badge: 'House Signature',
    items: [
      { name: 'Bombay BBQ', desc: 'Smoked chicken, makhani drizzle, red onions, cilantro, liquid fire', price: 24, featured: true },
      { name: 'Paneer Crunch', desc: 'Charred paneer tikka, crisp capsicum, mint chutney aioli', price: 22 },
      { name: 'Keema Masala', desc: 'Spiced lamb keema, pickled jalapeño, mozzarella, coriander', price: 26 },
      { name: 'Chutney Verde', desc: 'Green chutney base, roasted vegetables, goat cheese, pomegranate', price: 20 },
    ],
  },
  {
    id: 'vegetarian',
    name: 'From The Garden',
    icon: '🌿',
    items: [
      { name: 'Zucchini & Ricotta', desc: 'Shaved zucchini, whipped ricotta, lemon zest, pine nuts', price: 19 },
      { name: 'Wild Mushroom', desc: 'Truffle oil base, mixed wild mushrooms, thyme, pecorino', price: 21 },
      { name: 'Caponata', desc: 'Sicilian sweet-sour aubergine relish, capers, olives, burrata', price: 20 },
    ],
  },
  {
    id: 'sides',
    name: 'Sides & Starters',
    icon: '🥗',
    items: [
      { name: 'Burrata e Prosciutto', desc: 'Fresh burrata, prosciutto crudo, basil oil, sourdough crostini', price: 16 },
      { name: 'Arancini (x3)', desc: 'Saffron risotto balls, mozzarella centre, marinara dip', price: 12 },
      { name: 'Tiramisu', desc: "Nonno Carlo's original recipe. Savoiardi, mascarpone, espresso", price: 10 },
    ],
  },
];

const MenuSection = ({ category }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-8 border-b-2 border-dashed border-pizza-terra/30 pb-4">
      <span className="text-3xl">{category.icon}</span>
      <div>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-pizza-red">{category.name}</h2>
        {category.badge && (
          <span className="text-xs font-label font-bold uppercase tracking-widest text-pizza-olive bg-pizza-olive/10 px-2 py-0.5 rounded-full">
            {category.badge}
          </span>
        )}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {category.items.map((item) => (
        <div
          key={item.name}
          className={`flex justify-between items-start p-6 transition-all duration-200 gap-4 ${
            item.featured
              ? 'bg-pizza-red text-pizza-cream shadow-rustic-lg'
              : 'rustic-card'
          }`}
          style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`font-serif font-bold text-lg ${item.featured ? 'text-pizza-cream' : 'text-pizza-brown'}`}>
                {item.name}
              </h3>
              {item.featured && (
                <span className="text-[10px] bg-pizza-cream text-pizza-red px-2 py-0.5 font-label font-bold uppercase tracking-wide rounded-full">
                  ⭐ Best Seller
                </span>
              )}
            </div>
            <p className={`font-body text-sm leading-relaxed ${item.featured ? 'text-pizza-cream/80' : 'text-pizza-brown/70'}`}>
              {item.desc}
            </p>
          </div>
          <span className={`font-serif font-black text-xl shrink-0 ${item.featured ? 'text-pizza-cream' : 'text-pizza-terra'}`}>
            ${item.price}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function Menu() {
  return (
    <div className="relative">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
        {/* Doodles */}
        <div className="absolute top-8 right-8 text-7xl opacity-10 rotate-12 hidden md:block">🌿</div>
        <div className="absolute bottom-4 left-6 text-8xl opacity-10 -rotate-6 hidden md:block">🍕</div>

        <div className="max-w-xl">
          <span className="section-label block mb-3">What's Cooking</span>
          <h1 className="font-serif font-black text-5xl md:text-7xl text-pizza-red leading-tight mb-6">
            The Menu
          </h1>
          <p className="font-body text-pizza-brown text-lg leading-relaxed">
            Every pizza made fresh to order. Every ingredient chosen with intention.
            Our menu changes with the seasons — this is what's on the stone today.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_6px_#22c55e]" />
            <span className="text-sm font-label text-pizza-brown">Kitchen opens 11am – 10pm daily</span>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-10 px-6 md:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          {categories.map((cat) => (
            <MenuSection key={cat.id} category={cat} />
          ))}

          {/* Allergen note */}
          <div className="mt-8 p-6 border-2 border-dashed border-pizza-olive/30 text-center"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
            <p className="font-serif italic text-pizza-brown/60 text-sm">
              🌾 All our doughs contain gluten. We accommodate dietary needs with 48-hour notice.
              Please inform your server of any allergies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
