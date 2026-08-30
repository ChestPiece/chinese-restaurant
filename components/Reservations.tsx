"use client";

import { useState } from "react";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const guestOptions = [
  "1 Guest", "2 Guests", "3 Guests", "4 Guests",
  "5 Guests", "6+ Guests (Call to book)",
];

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-text text-sm">{title}</h4>
        <div className="text-text-muted text-sm mt-1.5 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reservations" className="py-28 sm:py-36 lg:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div>
            <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
              Reservations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-8" data-reveal="fade-up" data-reveal-delay="0.1">
              Reserve your table
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-14" data-reveal="fade-up" data-reveal-delay="0.15">
              For parties of 6 or more, please call us directly. We recommend
              booking at least 48 hours in advance for weekend dining.
            </p>

            <div className="space-y-8" data-reveal-group>
              <ContactItem
                title="Location"
                icon={
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                }
              >
                733 Kearny Street
                <br />
                San Francisco, CA 94108
              </ContactItem>

              <ContactItem
                title="Hours"
                icon={
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                Mon-Thu: 11:30 AM - 10:00 PM
                <br />
                Fri-Sun: 11:00 AM - 11:00 PM
              </ContactItem>

              <ContactItem
                title="Contact"
                icon={
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                }
              >
                (415) 555-8888
                <br />
                reservations@goldendragon.com
              </ContactItem>
            </div>
          </div>

          {/* Reservation Form — double bezel */}
          <div className="bg-surface rounded-[1.5rem] border border-border p-2" data-reveal="slide-left">
            <div className="bg-surface-elevated rounded-[calc(1.5rem-0.5rem)] p-6 sm:p-8 border border-border">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim transition-all duration-200"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim transition-all duration-200"
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                      Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select guests</option>
                    {guestOptions.map((opt, i) => (
                      <option key={opt} value={i + 1 <= 5 ? String(i + 1) : "6+"}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="requests" className="block text-[11px] font-medium text-text-muted mb-2 tracking-wider uppercase">
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={3}
                    className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim transition-all duration-200 resize-none"
                    placeholder="Dietary requirements, allergies, or special occasions..."
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-press w-full px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:shadow-lg text-sm tracking-wide cursor-pointer ${
                    submitted
                      ? "bg-green-600 text-white hover:bg-green-500 hover:shadow-green-600/20"
                      : "bg-accent text-white hover:bg-accent-hover hover:shadow-accent/25"
                  }`}
                >
                  {submitted ? "Request Sent!" : "Request Reservation"}
                </button>

                <p className="text-center text-text-dim text-xs">
                  We&apos;ll confirm your reservation within 2 hours via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
