"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section aria-labelledby="newsletter-heading" className="py-28 sm:py-36 lg:py-44 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-xl shadow-accent/20" data-reveal="scale">
          <span className="text-white font-serif text-2xl font-bold">龍</span>
        </div>

        <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
          VIP Access
        </p>
        <h2 id="newsletter-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" data-reveal="fade-up" data-reveal-delay="0.1">
          Join the inner circle
        </h2>
        <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto" data-reveal="fade-up" data-reveal-delay="0.15">
          Be the first to know about seasonal menus, exclusive tasting events,
          and limited-seat chef&apos;s table experiences.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubmit} data-reveal="fade-up" data-reveal-delay="0.2">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 bg-surface border border-border rounded-full text-text text-sm placeholder-text-dim focus:border-accent focus:outline-none transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className={`btn-press px-8 py-4 font-semibold rounded-full text-sm tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
              submitted
                ? "bg-green-600 text-white"
                : "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            }`}
          >
            {submitted ? "You're In!" : "Subscribe"}
          </button>
        </form>

        <p className="text-text-dim text-xs mt-5">
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  );
}
