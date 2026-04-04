import { useState } from 'react';

const galleryData = [
  {
    id: 'pizza',
    label: 'Pizza',
    icon: '🍕',
    images: [
      { id: 1, src: '/images/gallery/pizza/fromthestone.jpg',   alt: 'Rustic stone-baked Neapolitan pizza', label: 'From the Stone' },
      { id: 3, src: '/images/gallery/pizza/margherita .jpg',    alt: 'Classic Margherita with fresh basil', label: 'Margherita' },
      { id: 6, src: '/images/gallery/pizza/theslice.jpg',       alt: 'Artisan cheese pizza golden and bubbling', label: 'The Slice' },
      { id: 12, src: '/images/gallery/pizza/perfectlycharred.jpg', alt: 'Perfectly charred Neapolitan crust', label: 'Perfectly Charred' },
    ],
  },
  {
    id: 'process',
    label: 'Process',
    icon: '🧑‍🍳',
    images: [
      { id: 2, src: '/images/gallery/process/handtossed.jpg',    alt: 'Chef hand-stretching dough', label: 'Hand-Tossed' },
      { id: 7, src: '/images/gallery/process/900oven.jpg',       alt: 'Glowing wood-fired oven', label: '900° Oven' },
      { id: 8, src: '/images/gallery/process/behindthepass.jpg', alt: 'Chef plating a dish in the kitchen', label: 'Behind the Pass' },
      { id: 11, src: '/images/gallery/process/dustedandready.jpg', alt: 'Flouring the dough before shaping', label: 'Dusted & Ready' },
    ],
  },
  {
    id: 'ambiance',
    label: 'Dining Room',
    icon: '🕯️',
    images: [
      { id: 4, src: '/images/gallery/diningroom/diningroom.jpg',  alt: 'Warm restaurant dining room', label: 'The Dining Room' },
      { id: 5, src: '/images/gallery/diningroom/datenight.jpg',   alt: 'Candlelit table for two', label: 'Date Night' },
      { id: 10, src: '/images/gallery/diningroom/tablesetting.jpg', alt: 'Rustic table with wine glasses', label: 'Table Setting' },
    ],
  },
];

// Zigzag vertical offset per photo index: 0 → up, 1 → down, etc.
const zigzagY = ['-20px', '20px', '-20px', '20px'];
const zigzagRot = ['-2deg', '2deg', '-2deg', '2deg'];

function CategoryStrip({ group, onOpen }) {
  return (
    <div className="mb-20">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-3xl">{group.icon}</span>
        <h2 className="font-serif font-bold text-3xl text-pizza-red">{group.label}</h2>
        <div className="flex-1 border-b-2 border-dashed border-pizza-terra/25 ml-2" />
      </div>

      {/* Thread + photos */}
      <div className="relative">
        {/* Red thread SVG behind photos */}
        <svg
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full pointer-events-none"
          style={{ height: '6px', zIndex: 0 }}
          preserveAspectRatio="none"
        >
          <line
            x1="0" y1="3"
            x2="100%" y2="3"
            stroke="#C0392B"
            strokeWidth="2.5"
            strokeDasharray="8 5"
            strokeLinecap="round"
          />
        </svg>

        {/* Photos row */}
        <div
          className="flex gap-6 items-center"
          style={{ paddingBottom: '40px', paddingTop: '40px', position: 'relative', zIndex: 1 }}
        >
          {group.images.map((img, i) => (
            <div
              key={img.id}
              className="group relative cursor-pointer flex-shrink-0 shadow-rustic"
              style={{
                width: '260px',
                height: '200px',
                transform: `translateY(${zigzagY[i % 4]}) rotate(${zigzagRot[i % 4]})`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
              onClick={() => onOpen(img)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(${zigzagY[i % 4]}) rotate(${zigzagRot[i % 4]}) scale(1.07)`;
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translateY(${zigzagY[i % 4]}) rotate(${zigzagRot[i % 4]}) scale(1)`;
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Tape strip */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 z-20"
                style={{ width: '48px', height: '18px', background: 'rgba(180,140,80,0.3)', borderRadius: '2px' }}
              />

              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Hover overlay — label in red */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
              >
                <span
                  className="font-serif font-bold text-base leading-tight"
                  style={{ color: '#E74C3C' }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

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

      {/* Category strips */}
      <section className="px-6 md:px-10 pb-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {galleryData.map((group) => (
            <CategoryStrip key={group.id} group={group} onOpen={setLightboxImg} />
          ))}
        </div>
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
              style={{ borderRadius: '12px' }}
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
