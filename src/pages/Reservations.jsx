import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  partySize: '2',
  specialRequests: '',
};

// Returns an error string if the time is outside restaurant hours, else null.
function validateBookingTime(dateStr, timeStr) {
  if (!dateStr || !timeStr) return null;
  const date = new Date(dateStr + 'T00:00:00'); // parse in local time
  const day = date.getDay(); // 0=Sun,1=Mon,...,6=Sat
  const [h, m] = timeStr.split(':').map(Number);
  const mins = h * 60 + m;
  const isWeekend = day === 0 || day === 6; // Sun or Sat
  const openMins  = isWeekend ? 10 * 60 : 11 * 60; // 10:00 or 11:00
  const closeMins = isWeekend ? 23 * 60 : 22 * 60; // 23:00 or 22:00
  if (mins < openMins || mins >= closeMins) {
    return "We're closed at this time! Our hours are Mon–Fri 11am–10pm, Sat–Sun 10am–11pm.";
  }
  return null;
}

export default function Reservations() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Today's date as YYYY-MM-DD (no past dates)
  const todayStr = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear time-related errors when user changes date or time
    if ((e.target.name === 'date' || e.target.name === 'time') && status === 'error') {
      setErrorMsg('');
      setStatus('idle');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required field check
    if (!form.name || !form.email || !form.date || !form.time || !form.partySize) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    // Restaurant hours check
    const hoursError = validateBookingTime(form.date, form.time);
    if (hoursError) {
      setErrorMsg(hoursError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Log reservation data (replace with Firebase once Firestore rules are configured)
    console.log('📋 Reservation submitted:', {
      name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      partySize: form.partySize,
      specialRequests: form.specialRequests,
      createdAt: new Date().toISOString(),
      status: 'pending',
    });

    // Simulate a brief server delay, then confirm
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1000);
  };

  const getLabelClass = (rotate = '') =>
    `font-serif italic font-bold text-pizza-terra text-sm mb-1 ml-1 block ${rotate}`;

  return (
    <div className="relative">
      {/* Header */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        {/* Doodles */}
        <div className="absolute top-16 left-6 text-8xl opacity-10 rotate-12 hidden md:block">🌿</div>
        <div className="absolute bottom-4 right-8 text-9xl opacity-10 -rotate-6 hidden md:block">🍽️</div>

        <div className="max-w-4xl mx-auto">
          {/* Form Card */}
          <div className="border-4 border-pizza-red/80 relative bg-pizza-cream p-8 md:p-14 shadow-rustic-lg">
            {/* Taped photo accent */}
            <div className="absolute -top-10 -right-5 md:block hidden rotate-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-pizza-terra/25 z-10" />
              <div className="w-44 h-56 bg-pizza-cream p-2 shadow-rustic border border-pizza-tan/40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9Qn50RoKltCl9jGh4IiXIqLvRXJeJ5J4QHkKv_Z2oUgIuuyzqjoBJQHFff6C4L2blLESjL33XZJzAtIFJ23dxMs8-BY1umfKLeW6-nGPQEYWyfFTvS4gPrLIJiMqnSRaXKxXVsCdEvXqfZ3Byt1KIx9LFQpGVjZE2d9HuKAZswZcXMfkcdCqzFGCkRbreW6Y41lTGxyjLAoQhTcUD3lDhsvHRjmRd2GSGGTGDDRKnA7eoSOalDShIxVmVLC9Kuao6wYx7nRRTA"
                  alt="Candlelit Italian restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <span className="section-label block mb-3">Book Your Spot</span>
              <h1 className="font-serif font-black text-5xl md:text-6xl text-pizza-red mb-3 leading-tight">
                Secure Your Table
              </h1>
              <p className="font-body text-pizza-brown text-lg mb-10 max-w-lg leading-relaxed">
                Whether you're planning a quiet dinner or a loud celebration — there's always a seat for you at Tenya's.
              </p>

              {/* Success State */}
              {status === 'success' && (
                <div className="mb-8 p-6 bg-pizza-olive/10 border-2 border-pizza-olive text-center"
                  style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                  <div className="text-5xl mb-3">🍕</div>
                  <h3 className="font-serif font-bold text-2xl text-pizza-olive mb-2">Table confirmed! See you soon 🍕</h3>
                  <p className="font-body text-sm text-pizza-brown">
                    Your table is locked in. We can't wait to see you!
                    <br />
                    <span className="italic">Tables are held for 15 minutes past your booking time.</span>
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-label font-bold text-pizza-olive underline hover:text-pizza-red transition-colors"
                  >
                    Make another reservation
                  </button>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-pizza-red text-pizza-red font-body text-sm"
                  style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Form */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('-rotate-[0.5deg]')} htmlFor="name">
                        Name *
                      </label>
                      <input
                        className="sketched-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Who are we welcoming?"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('rotate-[0.5deg]')} htmlFor="email">
                        Email *
                      </label>
                      <input
                        className="sketched-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="For your confirmation"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('-rotate-[0.5deg]')} htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="sketched-input"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Optional, if we need to reach you"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Party Size */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('rotate-[0.5deg]')} htmlFor="partySize">
                        Party Size *
                      </label>
                      <select
                        className="sketched-input bg-transparent cursor-pointer"
                        id="partySize"
                        name="partySize"
                        value={form.partySize}
                        onChange={handleChange}
                        required
                        style={{ appearance: 'none' }}
                      >
                        <option value="1">Just me (1)</option>
                        <option value="2">Table for 2</option>
                        <option value="3">Party of 3</option>
                        <option value="4">Group of 4</option>
                        <option value="5">Table for 5</option>
                        <option value="6">Table for 6</option>
                        <option value="8+">Family Party (8+)</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('-rotate-[0.5deg]')} htmlFor="date">
                        Date *
                      </label>
                      <input
                        className="sketched-input"
                        id="date"
                        name="date"
                        type="date"
                        min={todayStr}
                        value={form.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Time */}
                    <div className="flex flex-col">
                      <label className={getLabelClass('rotate-[0.5deg]')} htmlFor="time">
                        Time *
                      </label>
                      <input
                        className="sketched-input"
                        id="time"
                        name="time"
                        type="time"
                        min="11:00"
                        max="22:00"
                        value={form.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="flex flex-col">
                    <label className={getLabelClass('-rotate-[0.5deg]')} htmlFor="specialRequests">
                      Special Requests
                    </label>
                    <textarea
                      className="sketched-input resize-none"
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Birthdays, allergies, window seats, dietary needs..."
                      rows={3}
                      value={form.specialRequests}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`btn-rustic flex items-center gap-3 text-lg ${status === 'submitting' ? 'opacity-60 cursor-wait' : ''}`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Confirming...
                        </>
                      ) : (
                        <>Confirm Reservation 🍕</>
                      )}
                    </button>
                  </div>

                  {/* Note */}
                  <div className="flex items-center gap-3 text-pizza-brown/50 mt-6">
                    <span className="text-2xl">✏️</span>
                    <p className="font-serif italic text-sm">
                      "Tables are held for 15 minutes past your booking. See you soon!"
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              { icon: '🕐', title: 'Opening Hours', lines: ['Mon–Fri: 11am – 10pm', 'Sat–Sun: 10am – 11pm'] },
              { icon: '📞', title: 'Call Us', lines: ['+91 22 1234 5678', 'hello@tenyaspizza.com'] },
              { icon: '📍', title: 'Location', lines: ['123 Olive Lane', 'South Mumbai, MH 400001'] },
            ].map((info) => (
              <div key={info.title} className="rustic-card p-6 text-center hover:rotate-1">
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-serif font-bold text-pizza-red mb-2">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="font-body text-sm text-pizza-brown">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
