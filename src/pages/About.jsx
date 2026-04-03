import { Link } from 'react-router-dom';

const milestones = [
  { year: '1984', title: 'The Beginning', desc: "Nonna Tenya opens a 12-seat trattoria in South Mumbai with one wood-fired oven and a 40-year-old sourdough starter brought from Naples." },
  { year: '1997', title: 'The Bombay Twist', desc: "After years of cooking for the neighbourhood, we introduce our first Bombay-inspired pizzas. The Keema Masala sells out on day one. It still does." },
  { year: '2008', title: 'Renovation & Revival', desc: "We expand the space, add a second oven, and preserve every brick of the original wall. Some things are too good to change." },
  { year: '2024', title: 'Still Hand-Tossed', desc: "Forty years in. Still no machines, no shortcuts, no frozen dough. Just flour, water, salt, time, and a lot of love." },
];

const TeamCard = ({ name, role, note, emoji }) => (
  <div className="rustic-card p-8 text-center hover:rotate-1">
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className="font-serif font-bold text-lg text-pizza-red mb-1">{name}</h3>
    <p className="font-label text-xs text-pizza-olive uppercase tracking-widest mb-3">{role}</p>
    <p className="font-serif italic text-sm text-pizza-brown/70 leading-relaxed">"{note}"</p>
  </div>
);

export default function About() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="absolute top-8 right-8 text-8xl opacity-10 -rotate-6 hidden md:block">🍕</div>
        <div className="absolute bottom-8 left-4 text-7xl opacity-10 rotate-12 hidden md:block">🌿</div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label block mb-3">Our Story</span>
            <h1 className="font-serif font-black text-5xl md:text-6xl text-pizza-red leading-tight mb-6">
              Forty Years of Flour & Fire
            </h1>
            <p className="font-body text-pizza-brown text-lg leading-relaxed mb-6">
              Tenya's Pizza was not built on ambition. It was built on hunger — the kind that comes from knowing exactly what a perfect pizza should taste like and refusing to accept anything less.
            </p>
            <p className="font-body text-pizza-brown text-base leading-relaxed mb-8">
              Nonna Tenya arrived in Mumbai in 1984 with a suitcase, a notebook of her mother's recipes, and a tiny jar containing her sourdough starter — 40 years old, fed every single day since. That starter is still alive. Still being fed. Still making your crust.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="text-center">
                <div className="font-serif font-black text-4xl text-pizza-red">40+</div>
                <div className="font-label text-xs text-pizza-olive uppercase tracking-wide">Years Open</div>
              </div>
              <div className="w-px bg-pizza-tan self-stretch" />
              <div className="text-center">
                <div className="font-serif font-black text-4xl text-pizza-red">1</div>
                <div className="font-label text-xs text-pizza-olive uppercase tracking-wide">Secret Recipe</div>
              </div>
              <div className="w-px bg-pizza-tan self-stretch" />
              <div className="text-center">
                <div className="font-serif font-black text-4xl text-pizza-red">∞</div>
                <div className="font-label text-xs text-pizza-olive uppercase tracking-wide">Slices Served</div>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 shadow-rustic-lg -rotate-2"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=800&fit=crop"
                alt="Italian restaurant interior"
                className="w-full h-full object-cover"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              />
              {/* tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-pizza-terra/25 z-10" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 shadow-rustic rotate-3"
              style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500&fit=crop"
                alt="Pizza fresh from oven"
                className="w-full h-full object-cover"
                style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}
              />
            </div>
            {/* Handwritten note */}
            <div className="absolute top-12 right-4 bg-pizza-cream border border-pizza-tan/50 p-4 shadow-rustic rotate-6 max-w-[140px]">
              <p className="font-serif italic text-pizza-terra text-sm leading-tight">
                "Every pizza has my grandmother's hands in it."
              </p>
              <p className="font-label text-xs text-pizza-olive mt-2">— Tenya, 1987</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:px-10 bg-pizza-cream/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label block mb-3">The Journey</span>
            <h2 className="font-serif font-bold text-4xl text-pizza-red italic">
              How We Got Here
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-pizza-terra/30 border-l-2 border-dashed border-pizza-terra/30" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div className={`inline-block mb-2 px-4 py-1 bg-pizza-red text-pizza-cream font-label font-bold text-sm uppercase tracking-widest ${i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}>
                      {m.year}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-pizza-red mb-2">{m.title}</h3>
                    <p className="font-body text-sm text-pizza-brown leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-4">
                    <div className="w-4 h-4 rounded-full bg-pizza-red border-2 border-pizza-cream shadow-md" />
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label block mb-3">The People</span>
            <h2 className="font-serif font-bold text-4xl text-pizza-red italic">
              Behind the Dough
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TeamCard
              emoji="👩‍🍳"
              name="Tenya Mancini"
              role="Founder & Head Pizzaiola"
              note="I didn't come here to make average pizza. Average pizza has no soul."
            />
            <TeamCard
              emoji="🧑‍🍳"
              name="Marco Fernandes"
              role="Sous Chef & Dough Master"
              note="The starter wakes up before I do. That's just how it has to be."
            />
            <TeamCard
              emoji="👨‍🍳"
              name="Priya Desai"
              role="Bombay Specials Creator"
              note="I asked: what happens if Keema meets Napoli? Delicious chaos."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-10 bg-pizza-cream/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-black text-5xl text-pizza-red italic mb-4">
            What We Believe In
          </h2>
          <p className="font-body text-pizza-brown text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We believe pizza is a language everyone speaks. We believe a too-thin crust is a moral failing.
            We believe you should always eat with your hands.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: '🔥', title: 'No Shortcuts', desc: 'Every dough fermented 48 hours minimum. No exceptions, ever.' },
              { icon: '🤝', title: 'Local First', desc: 'Every ingredient sourced within 200km, except the San Marzanos.' },
              { icon: '❤️', title: 'Community', desc: 'Every Friday, we feed 20 people who need it. No menu, no charge.' },
            ].map((v) => (
              <div key={v.title} className="rustic-card p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-serif font-bold text-lg text-pizza-red mb-2">{v.title}</h3>
                <p className="font-body text-sm text-pizza-brown leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/reservations" className="btn-rustic inline-block">
              Come Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
