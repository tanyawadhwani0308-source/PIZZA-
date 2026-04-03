/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rustic Earthy Palette
        'pizza-cream': '#F5F0E8',
        'pizza-red': '#8B1A1A',
        'pizza-red-light': '#8f000d',
        'pizza-olive': '#4A5C2F',
        'pizza-terra': '#C4622D',
        'pizza-brown': '#603d16',
        'pizza-tan': '#e2beba',
        // Legacy (keep for backward compat)
        'tenya-red': '#8B1A1A',
        'tenya-yellow': '#C4622D',
        'tenya-dark': '#2C1810',
        'tenya-cream': '#F5F0E8',
      },
      fontFamily: {
        heading: ['"Playfair Display"', '"Georgia"', 'serif'],
        serif: ['"Playfair Display"', '"Georgia"', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        label: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        // Gingham/plaid texture via CSS
        'gingham': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='20' height='20' fill='rgba(139,26,26,0.07)'/%3E%3Crect x='20' y='20' width='20' height='20' fill='rgba(139,26,26,0.07)'/%3E%3Crect x='20' y='0' width='20' height='20' fill='rgba(139,26,26,0.03)'/%3E%3Crect x='0' y='20' width='20' height='20' fill='rgba(139,26,26,0.03)'/%3E%3C/svg%3E")`,
        'checkerboard': `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20z' fill='%23000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      },
      borderRadius: {
        'wobbly': '255px 15px 225px 15px / 15px 225px 15px 255px',
      },
      boxShadow: {
        'rustic': '4px 4px 0px rgba(139, 26, 26, 0.2)',
        'rustic-lg': '8px 8px 0px rgba(139, 26, 26, 0.15)',
      },
    },
  },
  plugins: [],
}
