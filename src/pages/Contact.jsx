import { useState } from 'react';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="relative">
      {/* Doodles */}
      <div className="absolute top-20 left-6 text-8xl opacity-10 rotate-12 pointer-events-none hidden md:block">✉️</div>
      <div className="absolute bottom-40 right-6 text-8xl opacity-10 -rotate-6 pointer-events-none hidden md:block">☎️</div>

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="section-label block mb-3">Get In Touch</span>
            <h1 className="font-serif font-black text-5xl md:text-6xl text-pizza-red leading-tight mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="font-body text-pizza-brown text-lg leading-relaxed mb-10">
              Questions about the menu, events, catering, or just want to tell us your favourite pizza? We read every message. Slowly, because we're usually covered in flour.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  label: 'Visit Us',
                  lines: ['123 Olive Lane, South Mumbai', 'Maharashtra 400001, India'],
                },
                {
                  icon: '📞',
                  label: 'Call Us',
                  lines: ['+91 22 1234 5678', 'Mon–Sun: 11am – 10pm'],
                },
                {
                  icon: '✉️',
                  label: 'Email Us',
                  lines: ['hello@tenyaspizza.com', 'We reply within 24 hours'],
                },
                {
                  icon: '🕐',
                  label: 'Hours',
                  lines: ['Mon–Fri: 11am – 10pm', 'Sat–Sun: 10am – 11pm'],
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <div className="text-3xl mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-pizza-red mb-1">{item.label}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="font-body text-sm text-pizza-brown">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="font-serif font-bold text-pizza-red mb-3">Follow Along</h3>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', icon: '📸', href: '#' },
                  { label: 'Facebook', icon: '👍', href: '#' },
                  { label: 'Yelp', icon: '⭐', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rustic-card px-4 py-2 flex items-center gap-2 text-sm font-label font-bold text-pizza-brown hover:text-pizza-red transition-colors no-underline"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="rustic-card p-8 md:p-10">
              <h2 className="font-serif font-bold text-2xl text-pizza-red mb-6">Send a Message</h2>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🍕</div>
                  <h3 className="font-serif font-bold text-xl text-pizza-olive mb-2">Message Received!</h3>
                  <p className="font-body text-sm text-pizza-brown mb-6">
                    We'll get back to you within 24 hours. In the meantime, have you seen our menu?
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-label font-bold text-pizza-terra underline hover:text-pizza-red transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Name */}
                  <div>
                    <label className="font-serif italic font-bold text-pizza-terra text-sm mb-1 block -rotate-[0.5deg]" htmlFor="c-name">
                      Your Name *
                    </label>
                    <input
                      className="sketched-input"
                      id="c-name"
                      name="name"
                      type="text"
                      placeholder="First & last name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-serif italic font-bold text-pizza-terra text-sm mb-1 block rotate-[0.5deg]" htmlFor="c-email">
                      Email *
                    </label>
                    <input
                      className="sketched-input"
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder="Where should we reply?"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-serif italic font-bold text-pizza-terra text-sm mb-1 block -rotate-[0.5deg]" htmlFor="c-subject">
                      Subject
                    </label>
                    <input
                      className="sketched-input"
                      id="c-subject"
                      name="subject"
                      type="text"
                      placeholder="What's on your mind?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-serif italic font-bold text-pizza-terra text-sm mb-1 block rotate-[0.5deg]" htmlFor="c-message">
                      Message *
                    </label>
                    <textarea
                      className="sketched-input resize-none"
                      id="c-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us everything..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-rustic w-full text-center text-base">
                    Send Message ✉️
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rustic-card overflow-hidden h-48 relative"
              style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
              <div className="absolute inset-0 bg-pizza-olive/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-serif font-bold text-pizza-red">123 Olive Lane, South Mumbai</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-label text-pizza-brown underline hover:text-pizza-red"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
