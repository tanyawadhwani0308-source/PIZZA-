import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/order', label: 'Order Online' },
  { to: '/reservations', label: 'Reserve' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-pizza-cream border-b-4 border-double border-pizza-tan/50 sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif font-black text-pizza-red italic leading-none hover:rotate-[-1deg] transition-transform duration-200">
          Tenya's Pizza
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-serif tracking-tight font-bold text-base transition-all duration-150 hover:rotate-1 inline-block pb-0.5 ${
                    isActive
                      ? 'text-pizza-red border-b-2 border-pizza-red'
                      : 'text-pizza-brown hover:text-pizza-red'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/order"
          className="hidden lg:inline-flex btn-rustic text-sm px-6 py-3 font-bold"
        >
          Order Now 🍕
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-pizza-red focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-pizza-tan/30 bg-pizza-cream px-6 py-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-serif font-bold text-lg block py-1 border-b border-pizza-tan/30 ${
                      isActive ? 'text-pizza-red' : 'text-pizza-brown hover:text-pizza-red'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/order"
                onClick={() => setMobileOpen(false)}
                className="btn-rustic inline-block text-center w-full text-sm"
              >
                Order Now 🍕
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
