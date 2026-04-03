import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Google Fonts for Heritage Edition ─── */
const HeritageFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    .font-heritage { font-family: 'Noto Serif', Georgia, serif; }
    .font-jakarta  { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
  `}</style>
);

/* ─── Navbar (Heritage Edition) ─── */
const ContactNav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
      <div
        ref={navRef}
        className="pointer-events-auto w-full max-w-5xl flex items-center justify-between px-8 py-4 rounded-full"
        style={{
          background: 'rgba(255,248,240,0.85)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: '0 4px 24px rgba(52,48,36,0.08)',
        }}
      >
        <Link to="/" className="font-heritage text-2xl font-bold tracking-widest" style={{ color: '#485422' }}>
          TENYA'S
        </Link>
        <div className="hidden md:flex gap-8 font-jakarta text-sm font-semibold" style={{ color: '#1f1b10' }}>
          {['The Dough', 'Menu', 'Process'].map(link => (
            <Link
              key={link}
              to={`/#${link.toLowerCase().replace(' ', '-')}`}
              className="transition-all hover:-translate-y-[1px]"
              style={{ color: '#1f1b10' }}
              onMouseEnter={e => e.target.style.color = '#485422'}
              onMouseLeave={e => e.target.style.color = '#1f1b10'}
            >
              {link}
            </Link>
          ))}
          <Link to="/contact" className="font-semibold" style={{ color: '#485422' }}>Contact</Link>
        </div>
        <Link
          to="/"
          className="font-jakarta font-semibold text-sm px-6 py-3 transition-all hover:opacity-90 hover:-translate-y-[1px]"
          style={{ background: '#485422', color: '#fff', borderRadius: '9999px' }}
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
};

/* ─── Hero Header ─── */
const ContactHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(['.hero-overline', '.hero-headline', '.hero-subtext'], {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });
      gsap.from('.hero-motif', {
        x: 40, opacity: 0, duration: 1.4, ease: 'power3.out', delay: 0.5,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden" style={{ background: '#fff8f0' }}>
      {/* Decorative Motif - Olive Branch SVG */}
      <div className="hero-motif absolute right-8 md:right-24 top-24 opacity-70 pointer-events-none select-none">
        <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 200 C90 150, 60 120, 30 80 M90 200 C90 150, 120 120, 150 80" stroke="#924c00" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="30" cy="75" rx="18" ry="10" fill="#924c00" opacity="0.7" transform="rotate(-30 30 75)"/>
          <ellipse cx="55" cy="95" rx="16" ry="9" fill="#924c00" opacity="0.6" transform="rotate(-15 55 95)"/>
          <ellipse cx="78" cy="118" rx="15" ry="8" fill="#924c00" opacity="0.5" transform="rotate(5 78 118)"/>
          <ellipse cx="150" cy="75" rx="18" ry="10" fill="#924c00" opacity="0.7" transform="rotate(30 150 75)"/>
          <ellipse cx="125" cy="95" rx="16" ry="9" fill="#924c00" opacity="0.6" transform="rotate(15 125 95)"/>
          <ellipse cx="102" cy="118" rx="15" ry="8" fill="#924c00" opacity="0.5" transform="rotate(-5 102 118)"/>
          <path d="M90 200 L90 30" stroke="#924c00" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="90" cy="28" rx="10" ry="6" fill="#924c00" opacity="0.8"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="hero-overline font-jakarta text-sm font-semibold uppercase tracking-[0.3em] mb-6" style={{ color: '#902b19' }}>
          BENVENUTO
        </p>
        <h1 className="hero-headline font-heritage text-6xl md:text-8xl font-bold leading-[1.08] mb-8" style={{ color: '#485422' }}>
          Let's Talk<br />Pizza.
        </h1>
        <p className="hero-subtext font-jakarta text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: '#1f1b10a8' }}>
          Whether it's a large order, a partnership, or you just want to tell us your favourite topping — we're all ears.
        </p>
      </div>
    </section>
  );
};

/* ─── Contact Form ─── */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', reason: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(formRef.current, { scale: 0.98, duration: 0.1, yoyo: true, repeat: 1 });
    setSubmitted(true);
  };

  const fieldStyle = {
    background: '#fff8f0',
    border: 'none',
    borderRadius: '0.75rem',
    padding: '1rem 1.25rem',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.95rem',
    color: '#1f1b10',
    width: '100%',
    outline: 'none',
    transition: 'background 0.2s ease',
  };

  const labelStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#485422',
    display: 'block',
    marginBottom: '0.5rem',
  };

  return (
    <div
      ref={formRef}
      className="rounded-xl p-8 md:p-10"
      style={{ background: '#fcf3e1', boxShadow: '0 20px 40px rgba(52,48,36,0.07)' }}
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full py-20 text-center gap-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#485422' }}>
            <svg className="w-8 h-8" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heritage text-3xl font-bold" style={{ color: '#485422' }}>Message Sent!</h3>
          <p className="font-jakarta" style={{ color: '#924c00' }}>We'll get back to you faster than our pizzas arrive. 🍕</p>
          <button
            onClick={() => setSubmitted(false)}
            className="font-jakarta font-semibold text-sm px-6 py-3 mt-4 rounded-full transition-opacity hover:opacity-80"
            style={{ background: '#485422', color: '#fff' }}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                required
                placeholder="Tanya Wadhwani"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={fieldStyle}
                onFocus={e => e.target.style.background = '#f0e9d8'}
                onBlur={e => e.target.style.background = '#fff8f0'}
              />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={fieldStyle}
                onFocus={e => e.target.style.background = '#f0e9d8'}
                onBlur={e => e.target.style.background = '#fff8f0'}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Phone Number <span style={{ color: '#924c00', fontSize: '0.72rem' }}>(Optional)</span></label>
            <input
              type="tel"
              placeholder="+91 98200 00000"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              style={fieldStyle}
              onFocus={e => e.target.style.background = '#f0e9d8'}
              onBlur={e => e.target.style.background = '#fff8f0'}
            />
          </div>

          <div>
            <label style={labelStyle}>What's this about?</label>
            <select
              required
              value={formData.reason}
              onChange={e => setFormData({ ...formData, reason: e.target.value })}
              style={{ ...fieldStyle, cursor: 'pointer', appearance: 'none' }}
              onFocus={e => e.target.style.background = '#f0e9d8'}
              onBlur={e => e.target.style.background = '#fff8f0'}
            >
              <option value="" disabled>Choose a reason...</option>
              <option>Large Order Enquiry</option>
              <option>Partnership</option>
              <option>Catering</option>
              <option>Feedback</option>
              <option>Just saying hi! 🍕</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us everything..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{ ...fieldStyle, resize: 'none' }}
              onFocus={e => e.target.style.background = '#f0e9d8'}
              onBlur={e => e.target.style.background = '#fff8f0'}
            />
          </div>

          <button
            type="submit"
            className="w-full font-jakarta font-semibold text-base py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-[1px] mt-2"
            style={{ background: 'radial-gradient(ellipse at center, #606c38, #485422)', color: '#fff' }}
          >
            Send My Message →
          </button>
          <p className="text-center font-jakarta text-xs" style={{ color: '#924c00' }}>
            We reply within 1 business day. Usually much faster. 🍕
          </p>
        </form>
      )}
    </div>
  );
};

/* ─── Contact Details ─── */
const ContactDetails = () => {
  const detailsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.contact-detail-item', {
        scrollTrigger: { trigger: detailsRef.current, start: 'top 75%' },
        x: -30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
    }, detailsRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={detailsRef} className="flex flex-col gap-8">
      {/* Photo */}
      <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 12px 32px rgba(52,48,36,0.1)' }}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop"
          alt="Rustic Diner"
          className="w-full object-cover"
          style={{ height: '260px' }}
        />
      </div>

      {/* Info Card */}
      <div className="rounded-xl p-6 flex flex-col gap-5" style={{ background: '#fff8f0' }}>
        {[
          { icon: <MapPin size={18} />, text: '42, Linking Road, Bandra West, Mumbai 400050' },
          { icon: <Phone size={18} />, text: '+91 98200 12345' },
          { icon: <Mail size={18} />, text: 'hello@tenyas.in' },
        ].map(({ icon, text }, i) => (
          <div key={i} className="contact-detail-item flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0" style={{ color: '#902b19' }}>{icon}</span>
            <span className="font-jakarta text-sm" style={{ color: '#1f1b10' }}>{text}</span>
          </div>
        ))}

        {/* Hours */}
        <div className="contact-detail-item pt-4" style={{ borderTop: '1px solid rgba(72,84,34,0.12)' }}>
          <p className="font-jakarta text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#485422' }}>Opening Hours</p>
          <p className="font-heritage italic text-sm leading-relaxed" style={{ color: '#1f1b10' }}>
            Mon – Sat: 11am – 11pm<br />Sun: 12pm – 10pm
          </p>
        </div>

        {/* Social Chips */}
        <div className="contact-detail-item flex flex-wrap gap-3 pt-2">
          {[
            { icon: <Instagram size={14} />, label: 'Instagram' },
            { icon: <MessageCircle size={14} />, label: 'WhatsApp' },
            { icon: <Star size={14} />, label: 'Reviews' },
          ].map(({ icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-jakarta text-xs font-semibold transition-all hover:-translate-y-[1px]"
              style={{ background: '#fcf3e1', color: '#902b19' }}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Heritage Divider ─── */
const HeritageDivider = () => (
  <div className="py-16 flex flex-col items-center gap-3" style={{ background: '#fff8f0' }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#924c00" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#924c00">🍕</text>
    </svg>
    <p className="font-heritage italic text-base" style={{ color: '#924c00' }}>Est. 2019</p>
  </div>
);

/* ─── Heritage Footer ─── */
const ContactFooter = () => (
  <footer className="pt-20 pb-10 px-8 md:px-16" style={{ background: '#485422', borderRadius: '4rem 4rem 0 0' }}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <h2 className="font-heritage text-5xl font-bold mb-2" style={{ color: '#fff8f0' }}>TENYA'S</h2>
        <p className="font-jakarta italic text-lg mb-8" style={{ color: 'rgba(255,248,240,0.7)' }}>Hot. Loud. Loaded.</p>
        <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full" style={{ background: 'rgba(255,248,240,0.1)' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 8px #4ade80' }}/>
          <span className="font-jakarta text-xs uppercase tracking-widest" style={{ color: 'rgba(255,248,240,0.8)', fontFamily: 'monospace' }}>Ovens Fired & Ready</span>
        </div>
      </div>
      <div>
        <h4 className="font-heritage font-bold mb-5" style={{ color: 'rgba(255,248,240,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigate</h4>
        <ul className="space-y-3 font-jakarta text-sm" style={{ color: 'rgba(255,248,240,0.75)' }}>
          {['The Dough', 'Menu', 'Process', 'Contact'].map(l => (
            <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-heritage font-bold mb-5" style={{ color: 'rgba(255,248,240,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
        <ul className="space-y-3 font-jakarta text-sm" style={{ color: 'rgba(255,248,240,0.75)' }}>
          {['Privacy Policy', 'Terms of Service', 'Contact'].map(l => (
            <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-16 pt-8 text-center font-jakarta text-xs" style={{ borderTop: '1px solid rgba(255,248,240,0.15)', color: 'rgba(255,248,240,0.4)' }}>
      © {new Date().getFullYear()} Tenya's Pizza. Mumbai's finest.
    </div>
  </footer>
);

/* ─── Main Page ─── */
export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#fff8f0', minHeight: '100vh' }}>
      <HeritageFont />
      <ContactNav />
      <ContactHero />

      {/* Two-column contact section */}
      <section className="px-6 md:px-16 py-20" style={{ background: '#fcf3e1' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <ContactDetails />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <HeritageDivider />
      <ContactFooter />
    </div>
  );
}
