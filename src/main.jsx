import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import OrderOnline from './pages/OrderOnline'
import Reservations from './pages/Reservations'
import Contact from './pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy route redirect support */}
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
