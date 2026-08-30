"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-28 sm:py-36 lg:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with clip-path reveal */}
          <div className="relative" data-reveal="slide-right">
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden" data-image-reveal>
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format"
                alt="Elegant restaurant interior with warm ambient lighting"
                fill
                className="object-cover img-zoom"
                data-parallax-image
                data-parallax-speed="0.1"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card — double bezel */}
            <div className="absolute -bottom-8 -right-2 sm:right-8 bg-surface-elevated border border-border-strong rounded-2xl p-6 shadow-2xl" data-reveal="scale" data-reveal-delay="0.3">
              <p className="text-4xl font-serif font-semibold gold-text">40+</p>
              <p className="text-xs text-text-dim mt-1.5 font-medium tracking-wider uppercase">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gold text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
              Our Story
            </p>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] mb-8" data-reveal="fade-up" data-reveal-delay="0.1">
              Five generations of
              <br />
              culinary artistry
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-6" data-reveal="fade-up" data-reveal-delay="0.15">
              Founded in 1986 by Master Chef Chen Wei, Golden Dragon has been
              serving authentic Chinese cuisine crafted from recipes passed down
              through five generations. Our commitment to traditional techniques
              and the finest ingredients has made us a cornerstone of San
              Francisco&apos;s Chinatown.
            </p>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-12" data-reveal="fade-up" data-reveal-delay="0.2">
              Every dish tells a story — from our hand-pulled noodles made fresh
              daily to our Peking duck roasted to perfection over fruitwood
              flames.
            </p>

            <div className="flex flex-wrap items-center gap-8 sm:gap-12" data-reveal="fade-up" data-reveal-delay="0.25">
              <div>
                <p className="text-4xl font-serif font-semibold text-text">50+</p>
                <p className="text-xs text-text-dim mt-1.5 font-medium tracking-wider uppercase">Signature Dishes</p>
              </div>
              <div className="w-px h-12 bg-border-strong" aria-hidden="true" />
              <div>
                <p className="text-4xl font-serif font-semibold text-text">4.9</p>
                <p className="text-xs text-text-dim mt-1.5 font-medium tracking-wider uppercase">Star Rating</p>
              </div>
              <div className="w-px h-12 bg-border-strong" aria-hidden="true" />
              <div>
                <p className="text-4xl font-serif font-semibold text-text">12</p>
                <p className="text-xs text-text-dim mt-1.5 font-medium tracking-wider uppercase">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
