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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 lg:py-40 text-center">
        {/* Decorative gold rule */}
        <div className="mx-auto mb-10 w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

        {/* The statement — the whole point of this footer */}
        <p className="gold-text font-serif text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-snug lg:leading-tight font-medium max-w-2xl mx-auto">
          Where five generations<br className="hidden sm:block" /> meet your table.
        </p>

        {/* Decorative gold rule */}
        <div className="mx-auto mt-10 mb-12 w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />

        {/* Wordmark */}
        <a href="#" className="inline-flex items-center gap-2.5 mb-6 group" aria-label="Golden Dragon Home">
          <span className="text-accent font-serif text-xl font-bold transition-colors group-hover:text-accent-hover">龍</span>
          <span className="font-serif text-base font-medium tracking-wide text-text/70">
            Golden Dragon
          </span>
        </a>

        {/* Essential info — one line, muted */}
        <p className="text-[13px] text-white/35 tracking-wide leading-relaxed max-w-md mx-auto">
          717 Grant Avenue &nbsp;·&nbsp; San Francisco &nbsp;·&nbsp; Since 1986
        </p>

        {/* Minimal bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-[11px] text-white/25 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Golden Dragon
          </p>
          <span className="hidden sm:inline text-white/10" aria-hidden="true">·</span>
          <div className="flex items-center gap-5">
            <a href="#reservations" className="text-[11px] text-white/25 hover:text-gold/60 tracking-wider uppercase transition-colors duration-300">
              Reservations
            </a>
            <a href="tel:+14153921122" className="text-[11px] text-white/25 hover:text-gold/60 tracking-wider uppercase transition-colors duration-300">
              (415) 392-1122
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
