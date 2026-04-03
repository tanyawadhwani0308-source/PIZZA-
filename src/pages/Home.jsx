import { Link } from 'react-router-dom';

// Doodle decorations component
const Doodle = ({ emoji, text, className }) => (
  <div className={`absolute opacity-15 pointer-events-none select-none ${className}`}>
    <div className="text-8xl">{emoji}</div>
    {text && <p className="font-serif italic text-pizza-olive text-sm mt-1">{text}</p>}
  </div>
);

// Feature card
const FeatureCard = ({ title, desc, icon, rotate = '' }) => (
  <div className={`rustic-card p-8 ${rotate}`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-serif font-bold text-xl text-pizza-red mb-2">{title}</h3>
    <p className="font-body text-pizza-brown text-sm leading-relaxed">{desc}</p>
  </div>
);

// Specialty pizza card
const PizzaCard = ({ name, desc, price, badge, featured }) => (
  <div className={`relative ${featured ? 'bg-pizza-red text-pizza-cream scale-105 z-10' : 'rustic-card'} p-8 transition-all duration-200`}
    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
    {badge && (
      <span className={`absolute -top-3 right-4 text-xs font-label font-bold uppercase tracking-widest px-3 py-1 rounded-full rotate-2 ${featured ? 'bg-pizza-cream text-pizza-red' : 'bg-pizza-olive text-pizza-cream'}`}>
        {badge}
      </span>
    )}
    <h3 className={`font-serif font-black text-2xl mb-3 ${featured ? 'text-pizza-cream' : 'text-pizza-red'}`}>{name}</h3>
    <div className={`h-0.5 w-10 my-4 ${featured ? 'bg-pizza-cream/40' : 'bg-pizza-terra/40'}`} />
    <p className={`font-body text-sm leading-relaxed mb-6 ${featured ? 'text-pizza-cream/80' : 'text-pizza-brown'}`}>{desc}</p>
    <div className="flex justify-between items-center">
      <span className={`font-serif font-black text-2xl ${featured ? 'text-pizza-cream' : 'text-pizza-terra'}`}>${price}</span>
      <Link to="/order" className={`text-sm font-label font-bold uppercase tracking-wide px-4 py-2 transition-colors ${featured ? 'bg-pizza-cream text-pizza-red hover:bg-pizza-cream/90' : 'border border-pizza-red text-pizza-red hover:bg-pizza-red hover:text-pizza-cream'}`}
        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
        Order →
      </Link>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 py-20 max-w-7xl mx-auto">
        {/* Doodles */}
        <Doodle emoji="🍕" text="Nonna's Secret Crust" className="top-10 left-4 -rotate-12 hidden lg:block" />
        <Doodle emoji="🌿" text="Fresh Basil Daily" className="bottom-20 right-8 rotate-6 hidden lg:block" />
        <Doodle emoji="🍅" text="Vesuvius Tomatoes" className="top-36 right-16 -rotate-3 hidden lg:block" />

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text */}
          <div className="space-y-8 z-10">
            <div className="inline-block px-4 py-1 bg-pizza-olive/10 text-pizza-olive rounded-full text-sm font-label font-bold uppercase tracking-widest -rotate-1">
              Est. 1984
            </div>
            <h1 className="font-serif font-black text-6xl md:text-7xl text-pizza-red leading-[1.05] tracking-tight">
              Crafted in Naples.{' '}
              <span className="italic text-pizza-terra">Served with Character.</span>
            </h1>
            <p className="text-xl text-pizza-brown font-body leading-relaxed max-w-lg">
              Tenya's Pizza is not just a pizzeria. It's a mood, a memory, and a{' '}
              <span className="border-b-2 border-pizza-terra/40 italic">very good excuse to eat with your hands.</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/reservations" className="btn-rustic text-base">
                Reserve a Table
              </Link>
              <Link to="/menu"
                className="border-2 border-pizza-terra text-pizza-terra px-8 py-4 font-heading text-base font-bold transition-all hover:-rotate-1 hover:bg-pizza-terra hover:text-pizza-cream"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                View Our Menu
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative z-10">
            <div className="relative w-full aspect-[4/5] bg-pizza-cream p-4 shadow-2xl"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
              {/* Tape accent */}
              <div className="absolute -top-5 right-8 w-16 h-6 bg-pizza-terra/25 rotate-3 z-20" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM58eWgDBbPqEauJ5ivTz_EwH_vl71NcplacFTrJnpCJHK5VnMPl_fv8j8UIv30upY1XJYzqAE-rGveN8Inib9hreg9ttyr7JUtz-qjXqqAjHtgQL3iSeb1AxDluopIEfaPz6TzlLMJORfj1BrL544Y59eyf2GWdcSKZ1YWherkjFIq9wBOF-shLLhDjH9Xgo30APkm0-uMS5R2Np9oCfWxIxlX0YRhmc566r1Qomcx82PoBVKqkDLnAVsWc0uoYDUGFQU6a1ncQ"
                alt="Artisanal Neapolitan pizza with blistered crust and fresh mozzarella"
                className="w-full h-full object-cover"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              />
              {/* Quote card */}
              <div className="absolute -bottom-6 -left-4 bg-pizza-cream p-4 shadow-md rotate-2 max-w-[200px] border border-pizza-tan/40"
                style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
                <p className="font-serif italic text-pizza-terra text-sm leading-tight">
                  "The crust must speak, the tomato must sing."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Tenya's Section ── */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">The Tenya's Way</span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-pizza-red mt-3 italic underline decoration-pizza-terra/30 decoration-wavy underline-offset-4">
              The Daily Sheet
            </h2>
            <p className="font-label text-pizza-brown/70 mt-2 uppercase tracking-widest text-xs">
              Scribbled from the kitchen counter
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card */}
            <div className="md:col-span-2 rustic-card p-0 overflow-hidden flex flex-col md:flex-row gap-0">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPTO1HFUusYTLuNAXYNQQliFNzxsz4ASvOpcNR4p8_DPm-cQKsUNfOaDtrvk_bQO82gmYvEQ7sqNrSyHQlLpNze5pwwgvz6hldoWvNr1wC-OrZr0ow1X7XDgMO_URzXKtQUs5Xon2SjUoX92tOgCCtjcYFmlMSLeaSd78wKCaMOe8LpqevslNQMw"
                  alt="Italian wood fired oven"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 space-y-4">
                <h3 className="font-serif font-bold text-xl text-pizza-red">The 90-Second Rule</h3>
                <p className="text-pizza-brown font-body text-sm leading-relaxed">
                  Our oven burns at 900 degrees. That means your pizza spends exactly 90 seconds in the fire. Intense? Yes. Necessary? Absolutely.
                </p>
                <Link to="/about" className="text-pizza-terra font-label font-bold text-sm uppercase tracking-wide hover:text-pizza-red transition-colors">
                  Our Story →
                </Link>
              </div>
            </div>

            {/* Feature cards */}
            <div className="flex flex-col gap-6">
              <FeatureCard icon="🧑‍🍳" title="Hand-Tossed Daily" desc="No machines, no shortcuts. Every crust stretched by hand, every morning." rotate="-rotate-[0.5deg]" />
              <FeatureCard icon="🌾" title="Sourdough Starter" desc="Our starter is 40 years old. Fed daily, never compromised." rotate="rotate-[0.5deg]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Pizzas ── */}
      <section className="py-24 px-6 md:px-10 bg-pizza-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">From The Stone</span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-pizza-red mt-3 italic">
              Signature Pies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            <PizzaCard
              name="The Classic"
              desc="San Marzano tomatoes, fresh buffalo mozzarella, torn basil, extra virgin olive oil."
              price="18"
            />
            <PizzaCard
              name="Bombay BBQ"
              desc="Smoked chicken, makhani drizzle, red onions, cilantro. A collision of worlds."
              price="24"
              badge="House Favourite"
              featured={true}
            />
            <PizzaCard
              name="Paneer Crunch"
              desc="Charred paneer tikka, crisp capsicum, mint chutney aioli, pomegranate seeds."
              price="22"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/menu" className="btn-rustic inline-block">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="py-20 px-6 md:px-10 bg-pizza-red text-pizza-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif font-black text-5xl md:text-6xl mb-6 italic">
            Your Table is Waiting.
          </h2>
          <p className="font-body text-pizza-cream/80 text-xl mb-10 max-w-xl mx-auto">
            Whether it's date night or a full family gathering — we've got the dough, the fire, and the heart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/reservations"
              className="bg-pizza-cream text-pizza-red px-10 py-5 font-heading font-bold text-lg transition-all hover:bg-pizza-cream/90 hover:-rotate-1"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
              Reserve a Table
            </Link>
            <Link to="/order"
              className="border-2 border-pizza-cream text-pizza-cream px-10 py-5 font-heading font-bold text-lg transition-all hover:bg-pizza-cream/10 hover:rotate-1"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
