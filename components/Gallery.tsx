"use client";

import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format",
    alt: "Fine dining experience with elegant plating",
    className: "col-span-2 row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80&auto=format",
    alt: "Restaurant ambiance with warm lighting",
    className: "",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80&auto=format",
    alt: "Elegant interior design",
    className: "",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80&auto=format",
    alt: "Fresh colorful ingredients",
    className: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&q=80&auto=format",
    alt: "Chef preparing dish",
    className: "",
    aspect: "aspect-[3/4]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-28 sm:py-36 lg:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase mb-5" data-reveal="fade-up">
            Gallery
          </p>
          <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium" data-reveal="fade-up" data-reveal-delay="0.1">
            A feast for the eyes
          </h2>
        </div>

        {/* Gallery Grid — asymmetric bento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4" data-reveal-group>
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-2xl overflow-hidden ${img.className} ${img.aspect}`}
              data-reveal-item
            >
              <div data-image-reveal className="w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
