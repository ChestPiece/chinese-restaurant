"use client";

import Image from "next/image";

export default function ChefSpotlight() {
  return (
    <section id="chef" aria-labelledby="chef-heading" className="py-28 sm:py-36 lg:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center sm:text-left">
            <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
              The Chef
            </p>
            <h2 id="chef-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] mb-8" data-reveal="fade-up" data-reveal-delay="0.1">
              Master Chef
              <br />
              Chen Wei
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-6" data-reveal="fade-up" data-reveal-delay="0.15">
              Born into a lineage of master cooks spanning five generations,
              Chef Chen Wei brings over three decades of expertise to every plate.
              Trained in Guangzhou, Beijing, and Shanghai, he bridges regional
              traditions with a modern sensibility that has earned Golden Dragon
              its legendary status.
            </p>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-10" data-reveal="fade-up" data-reveal-delay="0.2">
              His philosophy is simple: respect the ingredient, honor the
              technique, and let the dish speak. Every morning begins at 4 AM
              in the kitchen, hand-selecting produce and preparing the stocks
              that form the backbone of our menu.
            </p>

            {/* Philosophy pillars */}
            <div className="flex overflow-x-auto scroll-snap-x no-scrollbar sm:grid sm:grid-cols-3 gap-6" data-reveal-group>
              {[
                { number: "01", title: "Tradition", desc: "Five generations of recipes" },
                { number: "02", title: "Precision", desc: "Every cut, every flame" },
                { number: "03", title: "Soul", desc: "Food that tells a story" },
              ].map((pillar) => (
                <div key={pillar.number} className="min-w-[70vw] sm:min-w-0 scroll-snap-start shrink-0" data-reveal-item>
                  <p className="text-gold font-serif text-2xl font-semibold mb-1">{pillar.number}</p>
                  <p className="text-text text-sm font-medium">{pillar.title}</p>
                  <p className="text-text-dim text-xs mt-1 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image with clip-path reveal */}
          <div className="order-1 lg:order-2 relative mx-auto sm:mx-0" data-reveal="slide-left">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-auto lg:h-auto lg:aspect-[3/4] rounded-[1.5rem] overflow-hidden" data-image-reveal>
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format"
                alt="Chef Chen Wei in the kitchen"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent/30 rounded-bl-[1.5rem]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
