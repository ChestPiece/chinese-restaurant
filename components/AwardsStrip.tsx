"use client";

import { useEffect, useRef, useState } from "react";

const awards = [
  { value: 40, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "", label: "Awards Won" },
  { value: 50, suffix: "+", label: "Signature Dishes" },
  { value: 4.9, suffix: "", label: "Star Rating" },
];

const pressLogos = [
  { name: "Michelin", initials: "M" },
  { name: "The Daily Table", initials: "DT" },
  { name: "San Francisco Chronicle", initials: "SF" },
  { name: "Bon Appétit", initials: "BA" },
  { name: "James Beard", initials: "JB" },
];

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          observer.disconnect();

          const isFloat = value % 1 !== 0;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setCount(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref}>
      <p className="text-4xl sm:text-5xl font-serif font-semibold gold-text" aria-live="polite">
        {count}{suffix}
      </p>
    </div>
  );
}

export default function AwardsStrip() {
  return (
    <section className="py-28 sm:py-36 lg:py-44 px-6 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-24" data-reveal-group>
          {awards.map((award) => (
            <div
              key={award.label}
              className="stat-card rounded-2xl p-7 sm:p-8 text-center group hover:border-gold/15 transition-colors duration-500"
              data-reveal-item
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" aria-hidden="true" />
              <AnimatedCounter value={award.value} suffix={award.suffix} />
              <p className="text-[11px] text-text-dim mt-3 font-medium tracking-wider uppercase">
                {award.label}
              </p>
            </div>
          ))}
        </div>

        {/* Press logos */}
        <div className="text-center">
          <p className="text-text-dim text-[11px] font-semibold tracking-[0.3em] uppercase mb-10" data-reveal="fade-up">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14" data-reveal="fade-up" data-reveal-delay="0.1">
            {pressLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2.5 text-text-dim/60 hover:text-text-dim transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                  <span className="font-serif text-sm font-semibold">{logo.initials}</span>
                </div>
                <span className="text-sm font-medium hidden sm:block">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
