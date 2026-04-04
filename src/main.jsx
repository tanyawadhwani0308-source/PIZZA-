import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import OrderOnline from './pages/OrderOnline'
import Reservations from './pages/Reservations'
import Contact from './pages/Contact'
import Login from './pages/Login'

// Shows a full-screen spinner while Firebase resolves auth state
function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#100E0E',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid rgba(212,27,44,0.2)',
        borderTop: '4px solid #D41B2C',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ color: '#FFC107', fontFamily: 'Georgia, serif', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        TENYA'S
      </p>
    </div>
  )
}

// Redirects unauthenticated users to /login
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/login" replace />
  return children
}

// Redirects already-logged-in users away from /login
function PublicRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (user) return <Navigate to="/" replace />
  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Login — standalone, no Navbar/Footer */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* All other routes require auth */}
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
