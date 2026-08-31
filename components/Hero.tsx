"use client";

import Image from "next/image";
import AmbientParticles from "./AmbientParticles";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0" id="hero-img-container">
        <Image
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=85&auto=format"
          alt="Exquisitely plated Chinese fine dining dish"
          fill
          className="object-cover scale-110"
          id="hero-img"
          priority
          sizes="100vw"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Ambient particles layer */}
      <AmbientParticles />

      {/* Hero Content */}
      <div id="hero-content" className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-6" data-reveal="fade-up">
          <p className="text-gold text-[11px] sm:text-xs font-semibold tracking-[0.4em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Est. 1986 — San Francisco&apos;s Chinatown
          </p>
        </div>

        <div className="overflow-hidden mb-2" data-reveal="fade-up" data-reveal-delay="0.1">
          <h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[0.9] tracking-tight text-text hero-heading-shadow"
            data-motion-text="words"
          >
            Golden Dragon
          </h1>
        </div>

        <div className="deco-line mx-auto my-8" data-reveal="fade-up" data-reveal-delay="0.2" aria-hidden="true" />

        <div className="overflow-hidden mb-12" data-reveal="fade-up" data-reveal-delay="0.3">
          <p className="text-sm sm:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
            Where tradition meets elegance. Multi-regional Chinese cuisine crafted
            from five generations of culinary heritage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-reveal="fade-up" data-reveal-delay="0.4">
          <a
            href="#menu"
            data-magnetic="0.12"
            className="group w-full sm:w-auto px-9 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 text-sm tracking-wide flex items-center justify-center gap-3"
          >
            Explore Our Menu
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/20 transition-colors text-xs">
              →
            </span>
          </a>
          <a
            href="#reservations"
            data-magnetic="0.12"
            className="w-full sm:w-auto px-9 py-4 border border-white/15 text-text font-medium rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm tracking-wide text-center"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-dim">
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
