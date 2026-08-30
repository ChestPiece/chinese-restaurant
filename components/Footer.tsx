"use client";

export default function Footer() {
  return (
    <footer className="footer-surface relative overflow-hidden">
      {/* Deep atmospheric crimson wash — lantern warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 20%, rgba(200,16,46,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        {/* The statement — centered hero */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Decorative gold rule */}
          <div className="mx-auto mb-8 sm:mb-10 w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

          <p className="gold-text font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug sm:leading-snug lg:leading-tight font-medium max-w-2xl mx-auto">
            Where five generations<br className="hidden sm:block" /> meet your table.
          </p>

          {/* Decorative gold rule */}
          <div className="mx-auto mt-8 sm:mt-10 mb-10 sm:mb-12 w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

          {/* Wordmark */}
          <a href="#" className="inline-flex items-center gap-2.5 group" aria-label="Golden Dragon Home">
            <span className="text-accent font-serif text-xl font-bold transition-colors group-hover:text-accent-hover">龍</span>
            <span className="font-serif text-base font-medium tracking-wide text-text/70">
              Golden Dragon
            </span>
          </a>
        </div>

        {/* 4-column info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 text-left mb-14 sm:mb-16">
          {/* Column 1: Address */}
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 tracking-wide uppercase">Visit Us</h4>
            <address className="not-italic text-sm text-white/35 leading-relaxed">
              717 Grant Avenue<br />
              San Francisco, CA 94108
            </address>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 tracking-wide uppercase">Hours</h4>
            <div className="text-sm text-white/35 leading-relaxed">
              <p>Mon–Thu: 11:30 AM – 10:00 PM</p>
              <p>Fri–Sun: 11:00 AM – 11:00 PM</p>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 tracking-wide uppercase">Contact</h4>
            <div className="text-sm text-white/35 leading-relaxed">
              <p><a href="tel:+14153921122" className="hover:text-gold/60 transition-colors duration-300">(415) 392-1122</a></p>
              <p><a href="mailto:info@goldendragon.com" className="hover:text-gold/60 transition-colors duration-300">info@goldendragon.com</a></p>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-sm font-medium text-white/60 mb-4 tracking-wide uppercase">Follow Us</h4>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/35 hover:text-gold/60 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/35 hover:text-gold/60 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Yelp" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/35 hover:text-gold/60 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.276-.41.77-.41 1.046 0l2.22 3.305c.564.83-.217 1.906-1.001 1.2zm-9.32 3.406l1.433-4.995c.276-.96-.8-1.74-1.63-1.176l-4.308 2.905c-.41.276-.41.77 0 1.046l3.305 2.22c.83.564 1.906-.217 1.2-1.001zm-4.56-4.32l4.308 2.905c.96.276 1.74-.8 1.176-1.63l-1.433-4.995c-.276-.96-1.906-.217-1.2 1.001l-2.22 3.305c-.276.41-.276.904.37 1.414zM12 24c-6.627 0-12-5.373-12-12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.086-17.29l-2.905 4.308c-.276.41-.77.41-1.046 0L4.743 10.41c-.564-.83.217-1.906 1.001-1.2l4.995-1.433c.96-.276 1.74.8 1.176 1.63l.001-.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-[11px] text-white/25 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Golden Dragon
          </p>
          <span className="hidden sm:inline text-white/10" aria-hidden="true">·</span>
          <div className="flex items-center gap-5">
            <a href="#reservations" className="min-h-[44px] inline-flex items-center text-[11px] text-white/25 hover:text-gold/60 tracking-wider uppercase transition-colors duration-300">
              Reservations
            </a>
            <a href="tel:+14153921122" className="min-h-[44px] inline-flex items-center text-[11px] text-white/25 hover:text-gold/60 tracking-wider uppercase transition-colors duration-300">
              (415) 392-1122
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
