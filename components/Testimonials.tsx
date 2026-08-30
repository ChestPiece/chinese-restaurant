"use client";

const testimonials = [
  {
    quote:
      "An extraordinary dining experience. The Peking duck was the best I've ever had outside Beijing, and the service was impeccable. Golden Dragon is a true San Francisco treasure.",
    name: "James Morrison",
    title: "Food Critic, The Daily Table",
    initials: "JM",
  },
  {
    quote:
      "Every visit feels like stepping into a different world. The hand-pulled noodles alone are worth the trip — perfectly chewy, deeply flavorful, and made with obvious love and skill.",
    name: "Sarah Chen",
    title: "Michelin Guide Inspector",
    initials: "SC",
  },
  {
    quote:
      "We celebrated our anniversary here and it exceeded every expectation. The tasting menu was a masterclass in balance and tradition. We'll be back next month.",
    name: "David & Lisa Park",
    title: "Returning Guests Since 2019",
    initials: "DP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-28 sm:py-36 lg:py-44 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
          What Our Guests Say
        </p>
        <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-20" data-reveal="fade-up" data-reveal-delay="0.1">
          Words of praise
        </h2>

        <div className="relative" data-reveal="blur-in">
          {/* Decorative quote mark */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-accent/15 font-serif text-[140px] leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Main testimonial */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-text-muted italic mb-12 relative z-10">
            {testimonials[0].quote}
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center" aria-hidden="true">
              <span className="font-serif text-white font-semibold text-sm">{testimonials[0].initials}</span>
            </div>
            <div className="text-left">
              <p className="font-medium text-text text-sm">{testimonials[0].name}</p>
              <p className="text-xs text-text-dim mt-0.5">{testimonials[0].title}</p>
            </div>
          </div>
        </div>

        {/* Secondary testimonials */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16" data-reveal-group>
          {testimonials.slice(1).map((t) => (
            <div
              key={t.name}
              className="bg-surface-elevated border border-border rounded-2xl p-8 text-left"
              data-reveal-item
            >
              <p className="font-serif text-base sm:text-lg leading-relaxed text-text-muted italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="font-serif text-bg font-semibold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-text text-sm">{t.name}</p>
                  <p className="text-xs text-text-dim">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
