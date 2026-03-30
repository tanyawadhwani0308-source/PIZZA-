import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, Clock, CheckCircle, Flame, Pizza } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, onClick }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = buttonRef.current;
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          scale: 1.03,
          ease: "power2.out",
          duration: 0.3
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 0.7
        });
      });
    }, buttonRef);
    return () => ctx.revert();
  }, []);

  return (
    <button 
      ref={buttonRef} 
      onClick={onClick}
      className={`relative overflow-hidden group rounded-full ${className}`}
    >
      <span className="absolute inset-0 bg-tenya-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Navbar
const Navbar = () => {
  const navRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'bg-tenya-dark/80 backdrop-blur-xl border-tenya-red/30 py-4 shadow-2xl',
          targets: navRef.current
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div 
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-8 py-5 rounded-full border border-transparent transition-all duration-500"
      >
        <div className="font-heading text-2xl text-tenya-yellow tracking-wider">TENYA'S</div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
          <a href="#about" className="hover:text-tenya-yellow transition-colors hover:-translate-y-[1px]">The Dough</a>
          <a href="#menu" className="hover:text-tenya-yellow transition-colors hover:-translate-y-[1px]">Menu</a>
          <a href="#process" className="hover:text-tenya-yellow transition-colors hover:-translate-y-[1px]">Process</a>
        </div>
        <MagneticButton className="bg-tenya-yellow text-tenya-dark font-heading uppercase text-sm px-6 py-3">
          Order Now
        </MagneticButton>
      </div>
    </nav>
  );
};

// Hero section
const Hero = () => {
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const pizzaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([title1Ref.current, title2Ref.current, title3Ref.current], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.to(pizzaRef.current, {
        y: -15,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] flex items-end pb-24 px-6 md:px-12 bg-tenya-dark overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img 
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2938&auto=format&fit=crop" 
          alt="Vintage Pizza Background" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tenya-dark via-tenya-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-2">
            <h1 ref={title1Ref} className="font-heading text-5xl md:text-8xl text-tenya-cream uppercase tracking-tight">
              Hot.
            </h1>
            <h1 ref={title2Ref} className="font-heading text-5xl md:text-8xl text-tenya-yellow uppercase tracking-tight">
              Loud.
            </h1>
            <h1 ref={title3Ref} className="font-heading text-7xl md:text-[10rem] leading-none text-transparent text-stroke-accent italic uppercase drop-shadow-2xl translate-x-4 md:translate-x-12">
              Loaded.
            </h1>
          </div>
          
          <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            <MagneticButton className="bg-tenya-red text-tenya-cream font-heading text-xl md:text-2xl px-10 py-5 uppercase shadow-[0_0_30px_rgba(212,27,44,0.4)]">
              Order The Stack
            </MagneticButton>
          </div>
        </div>

        {/* Floating Hero Pizza Element */}
        <div className="hidden md:block w-1/3 relative h-64">
           <div ref={pizzaRef} className="absolute -top-32 right-0 w-[400px] h-[400px]">
             {/* Realistic Pizza Snippet/Illustration Image via Unsplash */}
             <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-full drop-shadow-2xl border-4 border-tenya-yellow/30"
              alt="Floating Pizza"
             />
           </div>
        </div>
      </div>
    </section>
  );
};

// Shuffler Card
const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, label: "Sourdough Starter", desc: "Aged 48 Hours" },
    { id: 2, label: "400° Stone Oven", desc: "Blistering Heat" },
    { id: 3, label: "Hand-Tossed Daily", desc: "No Shortcuts" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1A1818] p-8 rounded-[2rem] border border-tenya-red/20 shadow-2xl relative h-[380px] overflow-hidden group flex flex-col items-center">
      <h3 className="font-heading text-2xl text-tenya-yellow mb-2 uppercase z-10 w-full text-center">Real Dough, Real Oven</h3>
      <p className="text-gray-400 text-sm mb-10 z-10 text-center">Hand-tossed. No shortcuts.</p>
      
      <div className="relative w-full flex-1 flex items-center justify-center">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          return (
             <div 
               key={card.id}
               className={`absolute w-full max-w-[240px] bg-tenya-dark border border-tenya-yellow/30 rounded-2xl p-6 transition-all duration-[800ms] flex flex-col items-center justify-center text-center`}
               style={{
                 transform: `translateY(${idx * 20}px) scale(${1 - idx * 0.1})`,
                 opacity: 1 - idx * 0.3,
                 zIndex: 10 - idx,
                 transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
               }}
             >
               <Flame className={`w-8 h-8 mb-4 ${isTop ? 'text-tenya-red animate-pulse' : 'text-gray-600'}`} />
               <h4 className="font-heading text-lg text-tenya-cream">{card.label}</h4>
               <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{card.desc}</p>
             </div>
          )
        })}
      </div>
    </div>
  );
};

// Typewriter Card
const TypewriterCard = () => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING STACK...\n> Cheese: Edge to edge [OK]\n> Sauce: Bombay BBQ [OK]\n> Crust: Blistered [OK]\n> Status: LOADED.";
  
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current <= fullText.length) {
        setText(fullText.slice(0, current));
        current++;
      } else {
        current = 0; // loop
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1A1818] p-8 rounded-[2rem] border border-tenya-red/20 shadow-2xl relative h-[380px] flex flex-col">
      <div className="flex justify-between items-start mb-6 w-full">
        <div>
           <h3 className="font-heading text-2xl text-tenya-yellow uppercase mb-2">Stacked, Not Skimped</h3>
           <p className="text-gray-400 text-sm">Loaded edge to edge.</p>
        </div>
        <div className="flex items-center gap-2 bg-tenya-dark px-3 py-1 rounded-full border border-gray-800">
           <div className="w-2 h-2 bg-tenya-red rounded-full animate-pulse" />
           <span className="text-[10px] uppercase font-mono text-gray-400">Live Feed</span>
        </div>
      </div>

      <div className="flex-1 bg-tenya-dark rounded-xl p-6 border border-gray-800 font-mono text-sm text-tenya-cream whitespace-pre-line relative shadow-inner">
        {text}
        <span className="inline-block w-2 h-4 bg-tenya-yellow ml-1 animate-[ping_1s_infinite]" />
        <div className="absolute right-[-1px] bottom-4 w-[2px] h-12 bg-tenya-red shadow-[0_0_10px_#D41B2C]" />
      </div>
    </div>
  );
};

// Scheduler Card
const SchedulerCard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to('.cursor-svg', { x: 140, y: 70, duration: 1, ease: "power2.inOut" })
        .to('.cursor-svg', { scale: 0.9, duration: 0.1 })
        .to('.target-cell', { backgroundColor: '#D41B2C', color: '#fff', duration: 0.1 }, "<")
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.cursor-svg', { x: 220, y: 160, duration: 0.8, ease: "power2.inOut", delay: 0.5 })
        .to('.cursor-svg', { scale: 0.9, duration: 0.1 })
        .to('.save-btn', { backgroundColor: '#FFC107', color: '#100E0E', scale: 0.95, duration: 0.1 }, "<")
        .to('.cursor-svg', { opacity: 0, duration: 0.2 })
        .to('.save-btn', { scale: 1, duration: 0.1 })
        .to('.target-cell', { backgroundColor: 'transparent', color: '#9CA3AF', duration: 0.1, delay: 1 })
        .to('.save-btn', { backgroundColor: '#100E0E', color: '#fff', duration: 0.1 }, "<")
        .set('.cursor-svg', { x: 0, y: 0, opacity: 1, scale: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#1A1818] p-8 rounded-[2rem] border border-tenya-red/20 shadow-2xl relative h-[380px] flex flex-col items-center justify-between overflow-hidden">
      <div className="w-full text-center">
         <h3 className="font-heading text-2xl text-tenya-yellow uppercase mb-2">Fast Enough To Matter</h3>
         <p className="text-gray-400 text-sm">Hot delivery, always.</p>
      </div>

      <div className="w-full relative bg-tenya-dark rounded-xl p-6 border border-gray-800 mt-4 h-[180px]">
         <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono text-gray-400 mb-4">
           {['S','M','T','W','T','F','S'].map((d, i) => <div key={i}>{d}</div>)}
         </div>
         <div className="grid grid-cols-7 gap-2">
           {Array.from({length: 14}).map((_, i) => (
             <div key={i} className={`h-8 rounded-md flex items-center justify-center border border-gray-800 text-[10px] ${i === 10 ? 'target-cell' : ''}`}>
               {i + 1}
             </div>
           ))}
         </div>
         <button className="save-btn mt-4 w-full py-2 bg-tenya-dark border border-gray-700 rounded-lg text-xs font-mono text-gray-300 flex items-center justify-center gap-2 transition-colors">
            <CheckCircle size={14} /> CONFIRM SLICE
         </button>

         <MousePointer2 className="cursor-svg absolute top-0 left-0 w-8 h-8 text-tenya-yellow drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] z-20 pointer-events-none" fill="#FFC107" />
      </div>
    </div>
  );
};

// Features Section
const Features = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-tenya-dark relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ShufflerCard />
        <TypewriterCard />
        <SchedulerCard />
      </div>
    </section>
  );
};

// Philosophy Section
const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.phi-text-1', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 30, opacity: 0, duration: 1, ease: "power3.out"
      });
      gsap.from('.phi-text-2', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
        },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-[#0B0A0A] relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 opacity-20 parallax-bg">
         <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover" alt="Texture" />
      </div>
      <div className="absolute inset-x-0 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCc+PHBhdGggZD0nTTBoMjB2MjBIMHptMjAgMjBoMjB2MjBIMjB6JyBmaWxsPScjRDQxQjJDJyBmaWxsLW9wYWNpdHk9JzAuMicvPjwvc3ZnPg==')] top-0" />
      <div className="absolute inset-x-0 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCc+PHBhdGggZD0nTTBoMjB2MjBIMHptMjAgMjBoMjB2MjBIMjB6JyBmaWxsPScjRDQxQjJDJyBmaWxsLW9wYWNpdHk9JzAuMicvPjwvc3ZnPg==')] bottom-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <p className="phi-text-1 text-gray-400 text-lg md:text-2xl font-body mb-8">
          Most places focus on: Flat cardboard & fast corners.
        </p>
        <p className="phi-text-2 font-heading text-4xl md:text-7xl leading-tight text-tenya-cream">
          We focus on: Hand-tossed, stacked, and <span className="text-tenya-red italic px-2">BOMBAY-FLAVOURED.</span>
        </p>
      </div>
    </section>
  );
};

// Protocol Cards Module
const ProtocolCard = ({ step, title, desc, animType, index, total }) => {
  return (
    <div className={`protocol-card w-full h-[100vh] flex items-center justify-center sticky top-0`} style={{ zIndex: index }}>
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 bg-tenya-dark border border-gray-800 p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[70vh]">
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
          <span className="font-mono text-tenya-yellow text-xl mb-4">STEP {step}</span>
          <h2 className="font-heading text-5xl md:text-7xl text-tenya-cream mb-6 uppercase">{title}</h2>
          <p className="text-gray-400 text-xl max-w-md">{desc}</p>
        </div>
        <div className="w-full md:w-1/2 h-full bg-[#1A1818] rounded-[2rem] border border-gray-800 flex items-center justify-center overflow-hidden relative group">
          {/* Visual abstract for each step */}
          {animType === 'geo' && (
             <div className="w-48 h-48 border-4 border-tenya-red rounded-full animate-[spin_10s_linear_infinite] group-hover:block transition-all flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-tenya-yellow rotate-45 animate-[spin_8s_linear_infinite_reverse]" />
             </div>
          )}
          {animType === 'scan' && (
             <div className="w-full h-full relative p-8">
                 <div className="grid grid-cols-10 grid-rows-10 w-full h-full gap-2">
                   {Array.from({length: 100}).map((_, i) => <div key={i} className="bg-gray-800 rounded-sm" />)}
                 </div>
                 <div className="absolute top-0 left-0 w-full h-[4px] bg-tenya-yellow shadow-[0_0_20px_#FFC107] animate-[pingpong_4s_linear_infinite] mix-blend-screen" style={{ animationTimingFunction: 'linear' }} />
                 <style>{`@keyframes pingpong { 0% { top: 10%; } 50% { top: 90%; } 100% { top: 10%; } }`}</style>
             </div>
          )}
          {animType === 'pulse' && (
             <div className="w-full flex items-center justify-center">
                 <svg viewBox="0 0 200 100" className="w-[80%] stroke-tenya-red fill-none stroke-[3]">
                    <path d="M0 50 L50 50 L60 20 L75 90 L90 50 L200 50" 
                          strokeDasharray="300" 
                          strokeDashoffset="300"
                          className="animate-[dash_2s_linear_infinite]" />
                 </svg>
                 <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.fromTo(cards[i - 1].querySelector('div.bg-tenya-dark'), 
            { scale: 1, filter: 'blur(0px)', opacity: 1 },
            { 
              scale: 0.9, 
              filter: 'blur(10px)', 
              opacity: 0.5,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
              }
            }
          );
        }
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="bg-tenya-dark relative pb-32 pt-20" id="process">
      <div className="text-center mb-10">
        <h2 className="font-heading text-4xl text-tenya-yellow uppercase tracking-widest">The Archive</h2>
      </div>
      <div className="relative h-[300vh]">
         {/* Cards stack on top of each other because they are sticky h-[100vh] */}
         <ProtocolCard step="01" title="Knead & Proof" desc="The foundation. Fermented flour, aged and stretched by hand." animType="geo" index={1} total={3} />
         <ProtocolCard step="02" title="Stack & Load" desc="Mapping out the flavour architecture. Edge to edge." animType="scan" index={2} total={3} />
         <ProtocolCard step="03" title="Fire & Fly" desc="400° searing heat. Blistered crusts delivered with kinetic urgency." animType="pulse" index={3} total={3} />
      </div>
    </section>
  );
}

// Menu SECTION
const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-[#0B0A0A] relative border-t border-tenya-red/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-5xl md:text-7xl text-center text-tenya-cream mb-20 uppercase">The Board</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Card 1 */}
          <div className="bg-[#1A1818] p-10 rounded-[2rem] border border-gray-800 hover:border-tenya-red/50 transition-colors">
            <h3 className="font-heading text-3xl text-tenya-cream uppercase break-words">The Classic</h3>
            <div className="h-1 w-12 bg-tenya-red my-6" />
            <p className="text-gray-400 mb-8 font-body">San Marzano, fresh mozzarella, torn basil, evoo.</p>
            <span className="font-heading text-2xl text-tenya-yellow">$18</span>
          </div>

          {/* Middle Card - POPS */}
          <div className="bg-tenya-red p-12 rounded-[2.5rem] border-4 border-tenya-dark shadow-2xl transform md:scale-105 z-10 hover:rotate-1 transition-transform">
            <div className="flex justify-between items-start">
               <h3 className="font-heading text-4xl text-tenya-dark uppercase break-words leading-none">Bombay<br/>BBQ</h3>
               <div className="bg-tenya-yellow text-tenya-dark font-heading text-xs px-3 py-1 uppercase rounded-full rotate-12">Spicy</div>
            </div>
            <div className="h-1 w-16 bg-tenya-dark my-6" />
            <p className="text-tenya-dark font-semibold mb-8 font-body text-lg">Smoked chicken, makhani drizzle, red onions, cilantro, liquid fire.</p>
            <div className="flex justify-between items-center">
              <span className="font-heading text-3xl text-tenya-dark">$24</span>
              <button className="bg-tenya-dark text-tenya-yellow px-6 py-3 rounded-full font-heading uppercase text-sm hover:bg-tenya-yellow hover:text-tenya-dark border-2 border-transparent hover:border-tenya-dark transition-all">
                Add Stack
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1818] p-10 rounded-[2rem] border border-gray-800 hover:border-tenya-red/50 transition-colors">
            <h3 className="font-heading text-3xl text-tenya-cream uppercase break-words">Paneer<br/>Crunch</h3>
            <div className="h-1 w-12 bg-tenya-red my-6" />
            <p className="text-gray-400 mb-8 font-body">Charred paneer tikka, crisp capsicum, mint chutney aioli.</p>
            <span className="font-heading text-2xl text-tenya-yellow">$22</span>
          </div>

        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#050404] rounded-t-[4rem] pt-20 pb-10 px-10 relative overflow-hidden border-t-4 border-tenya-red">
       <div className="absolute inset-x-0 top-0 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCc+PHBhdGggZD0nTTBoMjB2MjBIMHptMjAgMjBoMjB2MjBIMjB6JyBmaWxsPScjRkZDMTA3JyBmaWxsLW9wYWNpdHk9JzAuOSIvPjwvc3ZnPg==')]" />
       
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-8">
         <div className="md:col-span-2">
            <h2 className="font-heading text-6xl text-tenya-cream mb-4 uppercase">Tenya's</h2>
            <p className="text-tenya-red font-heading text-2xl mb-8 uppercase italic tracking-wider text-stroke-accent">Hot. Loud. Loaded.</p>
            <div className="flex items-center gap-4 bg-[#1A1818] w-fit px-4 py-2 rounded-full border border-gray-800">
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
               <span className="font-mono text-xs uppercase text-gray-300">Ovens Fired & Ready</span>
            </div>
         </div>
         
         <div>
            <h4 className="font-heading text-tenya-yellow mb-6 uppercase">Navigate</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#about" className="hover:text-tenya-cream transition-colors">The Dough</a></li>
              <li><a href="#menu" className="hover:text-tenya-cream transition-colors">Menu</a></li>
              <li><a href="#process" className="hover:text-tenya-cream transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-tenya-cream transition-colors">Location</a></li>
            </ul>
         </div>

         <div>
            <h4 className="font-heading text-tenya-yellow mb-6 uppercase">Legal</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><a href="#" className="hover:text-tenya-cream transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-tenya-cream transition-colors">Terms</a></li>
            </ul>
         </div>
       </div>
       
       <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center font-mono text-xs text-gray-600">
         © {new Date().getFullYear()} Tenya's Pizza. All rights reserved. Cinematic UI Frame.
       </div>
    </footer>
  )
}

function App() {
  return (
    <div className="noise-overlay-container">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
