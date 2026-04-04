import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// All known Firebase Auth error codes → friendly messages
const ERROR_MESSAGES = {
  'auth/user-not-found': 'No account found with this email. Please sign up first.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/email-already-in-use': 'An account with this email already exists. Please sign in.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/too-many-requests': 'Too many attempts. Please wait a few minutes and try again.',
  'auth/invalid-credential': 'Incorrect email or password. Please try again.',
  'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Please contact support.',
  'auth/weak-password': 'Password is too weak. Please use at least 6 characters.',
  'auth/network-request-failed': 'Network error. Please check your connection and try again.',
  'auth/popup-closed-by-user': null, // silently ignore
  'auth/cancelled-popup-request': null,
  'auth/popup-blocked': 'Popup was blocked by your browser. Please allow popups and try again.',
  'auth/account-exists-with-different-credential': 'An account already exists with this email. Try signing in with email/password.',
  'auth/requires-recent-login': 'Please sign out and sign back in to continue.',
  'auth/user-disabled': 'This account has been disabled. Please contact support.',
  'auth/missing-email': 'Please enter your email address.',
  'auth/internal-error': 'An internal error occurred. Please try again.',
};

function getErrorMessage(err) {
  const mapped = ERROR_MESSAGES[err.code];
  if (mapped === null) return null; // silently ignore
  if (mapped) return mapped;
  // Show the raw code in dev for debugging, generic message in prod
  if (import.meta.env.DEV) {
    return `Error (${err.code}): ${err.message}`;
  }
  return 'Something went wrong. Please try again.';
}

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const clearError = () => setError('');

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      console.error('Firebase auth error:', err.code, err.message);
      const msg = getErrorMessage(err);
      if (msg) setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      console.error('Google auth error:', err.code, err.message);
      const msg = getErrorMessage(err);
      if (msg) setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        backgroundColor: '#F5F0E8',
        backgroundImage:
          'linear-gradient(45deg, rgba(139,26,26,0.06) 25%, transparent 25%), linear-gradient(-45deg, rgba(139,26,26,0.06) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(139,26,26,0.06) 75%), linear-gradient(-45deg, transparent 75%, rgba(139,26,26,0.06) 75%)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
      }}
    >
      {/* Decorative doodles */}
      <div className="absolute top-8 left-6 text-7xl opacity-10 -rotate-12 pointer-events-none select-none hidden md:block">🍕</div>
      <div className="absolute bottom-12 right-8 text-6xl opacity-10 rotate-6 pointer-events-none select-none hidden md:block">🌿</div>
      <div className="absolute top-24 right-12 text-5xl opacity-10 -rotate-3 pointer-events-none select-none hidden md:block">🍅</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-10 rotate-12 pointer-events-none select-none hidden md:block">🫒</div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block font-serif font-black text-3xl mb-1 hover:opacity-80 transition-opacity"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#8B1A1A' }}
          >
            Tenya's
          </Link>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#603d16' }}
          >
            {mode === 'login' ? 'Welcome back, friend.' : 'Join our table.'}
          </p>
        </div>

        {/* Card */}
        <div
          className="p-8 md:p-10 shadow-lg"
          style={{
            backgroundColor: '#FAF7F2',
            border: '2px solid rgba(139,26,26,0.2)',
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            boxShadow: '6px 6px 0px rgba(139, 26, 26, 0.12)',
          }}
        >
          {/* Mode toggle tabs */}
          <div
            className="flex p-1 mb-8 gap-1"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', background: 'rgba(139,26,26,0.08)' }}
          >
            {['login', 'signup'].map((m) => (
              <button
                key={m}
                id={`auth-tab-${m}`}
                onClick={() => { setMode(m); clearError(); }}
                className="flex-1 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-200"
                style={{
                  fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  backgroundColor: mode === m ? '#8B1A1A' : 'transparent',
                  color: mode === m ? '#F5F0E8' : '#8B1A1A',
                }}
              >
                {m === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Error message */}
          {error && (
            <div
              className="mb-6 px-4 py-3 text-sm"
              style={{
                borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px',
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                background: 'rgba(139,26,26,0.08)',
                border: '1px solid rgba(139,26,26,0.3)',
                color: '#8B1A1A',
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleEmailAuth} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#4A5C2F' }}
              >
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="sketched-input"
                disabled={loading}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="block text-xs font-bold uppercase tracking-widest mb-2"
                style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#4A5C2F' }}
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="At least 6 characters"
                className="sketched-input"
                disabled={loading}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
            </div>

            {/* Confirm Password (signup only) */}
            {mode === 'signup' && (
              <div>
                <label
                  htmlFor="login-confirm-password"
                  className="block text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#4A5C2F' }}
                >
                  Confirm Password
                </label>
                <input
                  id="login-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Repeat your password"
                  className="sketched-input"
                  disabled={loading}
                  autoComplete="new-password"
                />
              </div>
            )}

            {/* Submit button */}
            <button
              id="auth-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full btn-rustic text-center flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {mode === 'login' ? 'Signing in…' : 'Creating account…'}
                </>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-7 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: 'rgba(139,26,26,0.2)' }} />
            <span
              className="text-xs uppercase tracking-widest font-bold"
              style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: 'rgba(96,61,22,0.5)' }}
            >
              or
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(139,26,26,0.2)' }} />
          </div>

          {/* Google sign-in */}
          <button
            id="google-signin-btn"
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-6 border-2 font-bold text-sm uppercase tracking-widest transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-rotate-[0.5deg] active:translate-y-[1px]"
            style={{
              borderColor: 'rgba(139,26,26,0.3)',
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
              color: '#603d16',
              backgroundColor: 'transparent',
              boxShadow: '3px 3px 0px rgba(139,26,26,0.1)',
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Footer link */}
          <p
            className="text-center text-xs mt-8"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: 'rgba(96,61,22,0.6)' }}
          >
            {mode === 'login' ? (
              <>
                First time here?{' '}
                <button
                  id="switch-to-signup"
                  onClick={() => { setMode('signup'); clearError(); }}
                  className="font-bold underline decoration-dotted underline-offset-2 transition-colors"
                  style={{ color: '#8B1A1A' }}
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  id="switch-to-login"
                  onClick={() => { setMode('login'); clearError(); }}
                  className="font-bold underline decoration-dotted underline-offset-2 transition-colors"
                  style={{ color: '#8B1A1A' }}
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: 'rgba(96,61,22,0.5)' }}
          >
            ← <Link to="/" className="hover:opacity-80 transition-opacity font-semibold" style={{ color: 'rgba(96,61,22,0.5)' }}>Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
