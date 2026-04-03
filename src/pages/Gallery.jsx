import { useState } from 'react';

const galleryImages = [
  // ── PIZZA ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&fit=crop',
    alt: 'Rustic stone-baked Neapolitan pizza fresh from the oven',
    label: 'From the Stone',
    category: 'pizza',
    span: 'md:col-span-2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&fit=crop',
    alt: 'Classic Margherita pizza with fresh basil',
    label: 'Margherita',
    category: 'pizza',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&fit=crop',
    alt: 'Artisan cheese pizza golden and bubbling',
    label: 'The Slice',
    category: 'pizza',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&fit=crop',
    alt: 'Neapolitan pizza with perfectly charred golden crust',
    label: 'Perfectly Charred',
    category: 'pizza',
  },
  // ── PROCESS ───────────────────────────────────────────────────────────────
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=600&fit=crop',
    alt: 'Chef hand-stretching pizza dough on floured surface',
    label: 'Hand-Tossed',
    category: 'process',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&fit=crop',
    alt: 'Glowing wood-fired pizza oven mouth',
    label: '900° Oven',
    category: 'process',
    span: 'md:col-span-2',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&fit=crop',
    alt: 'Chef in white coat plating a dish in the kitchen',
    label: 'Behind the Pass',
    category: 'process',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1607077512783-3e18b3e7a2e9?q=80&w=600&fit=crop',
    alt: 'Flouring the pizza dough before shaping',
    label: 'Dusted & Ready',
    category: 'process',
  },
  // ── AMBIANCE ──────────────────────────────────────────────────────────────
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=700&fit=crop',
    alt: 'Warm cosy restaurant dining room with exposed brick',
    label: 'The Dining Room',
    category: 'ambiance',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=700&fit=crop',
    alt: 'Candlelit restaurant table set for a romantic dinner',
    label: 'Date Night',
    category: 'ambiance',
    span: 'md:col-span-2',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=600&fit=crop',
    alt: 'Rustic wooden table with wine glasses and cutlery',
    label: 'Table Setting',
    category: 'ambiance',
  },
  // ── FOOD ──────────────────────────────────────────────────────────────────
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1551183053-bf91798d8254?q=80&w=600&fit=crop',
    alt: 'Fresh burrata with tomatoes and basil on a board',
    label: 'Antipasti',
    category: 'food',
  },
];

const categories = ['all', 'pizza', 'process', 'ambiance', 'food'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="relative">
      {/* Header */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
        <div className="absolute top-6 right-10 text-8xl opacity-10 rotate-12 hidden md:block">📸</div>
        <div className="max-w-xl">
          <span className="section-label block mb-3">The Visual Story</span>
          <h1 className="font-serif font-black text-5xl md:text-7xl text-pizza-red leading-tight mb-4">
            Gallery
          </h1>
          <p className="font-body text-pizza-brown text-lg leading-relaxed">
            Pizza is visual before it's edible. Here's proof.
            From the fire to the table — every frame tells a story of craft.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label font-bold text-sm uppercase tracking-widest px-5 py-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-pizza-red text-pizza-cream shadow-rustic'
                    : 'border-2 border-pizza-red/30 text-pizza-brown hover:border-pizza-red hover:text-pizza-red'
                }`}
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              >
                {cat === 'all' ? '🍕 All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry/Grid Gallery */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden cursor-pointer shadow-rustic hover:shadow-rustic-lg transition-all duration-300 ${img.span || ''} ${i % 3 === 0 ? 'rotate-[-0.3deg]' : i % 3 === 1 ? 'rotate-[0.3deg]' : ''}`}
              style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}
              onClick={() => setLightboxImg(img)}
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-pizza-terra/25 z-20 rotate-2" />

              <div className="aspect-video overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pizza-red/0 group-hover:bg-pizza-red/40 transition-colors duration-300 flex items-end p-4">
                <span className="font-serif font-bold text-pizza-cream text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-pizza-cream/90 text-pizza-red text-xs font-label font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                {img.category}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-pizza-brown/50 font-serif text-xl italic">
            No images in this category yet...
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className="w-full h-auto shadow-2xl"
              style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}
            />
            <div className="mt-4 text-center">
              <p className="font-serif font-bold text-pizza-cream text-xl">{lightboxImg.label}</p>
            </div>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-pizza-red text-pizza-cream rounded-full font-bold text-lg hover:bg-pizza-red/80 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
