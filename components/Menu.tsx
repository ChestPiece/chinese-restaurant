"use client";

import Image from "next/image";

const dishes = [
  {
    name: "Peking Duck",
    price: "$48",
    description:
      "Whole duck roasted over fruitwood for 48 hours, served with hand-made thin pancakes, scallions, and house-aged hoisin sauce. Carved tableside.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80&auto=format",
    alt: "Peking Duck carved tableside",
    tags: [
      { label: "Chef's Special", color: "accent" },
      { label: "Must Try", color: "gold" },
    ],
    featured: true,
  },
  {
    name: "Dim Sum Selection",
    price: "$32",
    description:
      "Assortment of steamed har gow, siu mai, and char siu bao with chili oil and black vinegar.",
    image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&q=80&auto=format",
    alt: "Dim Sum platter with steaming baskets",
    tags: [],
    featured: false,
  },
  {
    name: "Kung Pao Chicken",
    price: "$26",
    description:
      "Wok-tossed with peanuts, dried chilies, and Sichuan peppercorns in a savory-spicy glaze.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&auto=format",
    alt: "Kung Pao Chicken with peanuts",
    tags: [],
    featured: false,
  },
  {
    name: "Mapo Tofu",
    price: "$22",
    description:
      "Silken tofu in fiery Sichuan sauce with fermented black beans and ground pork.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80&auto=format",
    alt: "Mapo Tofu in clay pot",
    tags: [],
    featured: false,
  },
  {
    name: "Hand-Pulled Noodles",
    price: "$24",
    description:
      "Fresh noodles pulled to order in our open kitchen, served in rich bone broth with braised beef, bok choy, and soft egg.",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80&auto=format",
    alt: "Hand-pulled noodles in rich broth",
    tags: [{ label: "Made to Order", color: "accent" }],
    featured: true,
  },
  {
    name: "Steamed Sea Bass",
    price: "$42",
    description:
      "Whole sea bass steamed with ginger, scallions, and soy, finished with sizzling hot oil.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format",
    alt: "Steamed sea bass with ginger",
    tags: [],
    featured: false,
  },
];

function Tag({ label, color }: { label: string; color: string }) {
  const colorClass =
    color === "gold"
      ? "bg-gold/10 text-gold border border-gold/20"
      : "bg-accent/10 text-accent border border-accent/20";
  return (
    <span className={`px-3 py-1 ${colorClass} text-[11px] font-medium rounded-full tracking-wide`}>
      {label}
    </span>
  );
}

function FeaturedDish({ dish }: { dish: (typeof dishes)[0] }) {
  return (
    <div className="sm:col-span-2 card-lift bg-surface rounded-[1.5rem] overflow-hidden border border-border" data-reveal="fade-up">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden" data-image-reveal>
          <Image
            src={dish.image}
            alt={dish.alt}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 sm:p-10 flex flex-col justify-center">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">{dish.name}</h3>
            <span className="text-gold font-semibold text-xl font-serif">{dish.price}</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">{dish.description}</p>
          {dish.tags.length > 0 && (
            <div className="mt-5 flex items-center gap-2">
              {dish.tags.map((tag) => (
                <Tag key={tag.label} {...tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RegularDish({ dish }: { dish: (typeof dishes)[0] }) {
  return (
    <div className="card-lift bg-surface rounded-[1.5rem] overflow-hidden border border-border" data-reveal="fade-up">
      <div className="relative aspect-[4/3] overflow-hidden" data-image-reveal>
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          className="object-cover img-zoom"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-medium">{dish.name}</h3>
          <span className="text-gold font-semibold font-serif">{dish.price}</span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">{dish.description}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="py-28 sm:py-36 lg:py-44 px-6 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
            The Menu
          </p>
          <h2 id="menu-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium" data-reveal="fade-up" data-reveal-delay="0.1">
            Culinary masterpieces
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7" data-reveal-group>
          {dishes.map((dish) =>
            dish.featured ? (
              <FeaturedDish key={dish.name} dish={dish} />
            ) : (
              <RegularDish key={dish.name} dish={dish} />
            )
          )}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-14 lg:mt-18" data-reveal="fade-up">
          <a
            href="#reservations"
            data-magnetic="0.12"
            className="inline-flex items-center gap-3 px-9 py-4 border border-accent/25 text-accent font-medium rounded-full hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 text-sm tracking-wide group"
          >
            Reserve Your Table
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors text-xs group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
