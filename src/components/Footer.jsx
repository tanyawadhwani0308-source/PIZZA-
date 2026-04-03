import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-pizza-cream border-t-2 border-dashed border-pizza-olive/30 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-12 py-12 gap-10 w-full max-w-screen-xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Link to="/" className="text-2xl font-serif font-black text-pizza-red italic">
            Tenya's Pizza
          </Link>
          <p className="font-body text-sm text-pizza-brown leading-relaxed">
            Hand-crafted dough, locally sourced toppings, and a lot of heart in every slice. Est. 1984.
          </p>
          {/* Live status */}
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_6px_#22c55e]" />
            <span className="text-xs font-label uppercase tracking-wide text-pizza-brown">Ovens fired & ready</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <span className="section-label mb-1">Explore</span>
            <Link to="/" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Home</Link>
            <Link to="/menu" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Menu</Link>
            <Link to="/about" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">About Us</Link>
            <Link to="/gallery" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Gallery</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="section-label mb-1">Visit</span>
            <Link to="/order" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Order Online</Link>
            <Link to="/reservations" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Reservations</Link>
            <Link to="/contact" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="section-label mb-1">Connect</span>
            <a href="#" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Instagram</a>
            <a href="#" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Facebook</a>
            <a href="#" className="font-serif text-sm text-pizza-brown hover:text-pizza-red transition-colors">Yelp</a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <span className="section-label mb-1">Find Us</span>
          <p className="font-serif text-sm text-pizza-brown leading-relaxed">
            123 Olive Lane<br />
            Mumbai, MH 400001<br />
            India
          </p>
          <a href="tel:+912212345678" className="font-serif text-sm text-pizza-red hover:underline">+91 22 1234 5678</a>
          <a href="mailto:hello@tenyaspizza.com" className="font-serif text-sm text-pizza-red hover:underline">hello@tenyaspizza.com</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pizza-tan/30 py-4 px-8 text-center">
        <p className="font-body text-xs text-pizza-brown/60">
          © {new Date().getFullYear()} Tenya's Pizza. All rights reserved. Hand-made with ❤️ in Mumbai.
        </p>
      </div>
    </footer>
  );
}
