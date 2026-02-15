"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/*
 * To add a cake, set the `image` field to a path inside /public.
 * Example: image: "/pictures/cake1.jpg"
 */
const cakes = [
  {
    category: "Celebration Cakes",
    description: "Multi-tiered masterpieces for your special day",
    image: "/pictures/realcake1.jpeg",
  },
  {
    category: "Celebration Cakes",
    description: "Custom celebration designs",
    image: "/pictures/realcake2.jpeg",
  },
  {
    category: "Celebration Cakes",
    description: "Delicate bite-sized treats",
    image: "/pictures/realcake3.jpeg",
  },
  {
    category: "Celebration Cakes",
    description: "Seasonal fruits & pastry",
    image: "/pictures/cake12.jpeg",
  },
  {
    category: "Wedding Cakes",
    description: "Seasonal fruits & pastry",
    image: "/pictures/cake15.png",
  },
  {
    category: "Wedding Cakes",
    description: "Seasonal fruits & pastry",
    image: "/pictures/cake18.png",
  },
  {
    category: "Wedding Cakes",
    description: "Seasonal fruits & pastry",
    image: "/pictures/cake17.png",
  },
  {
    category: "Chocolate Bon Bons",
    description: "Seasonal fruits & pastry",
    image: "/pictures/cake21.png",
  },
];

function CakeCard({
  cake,
  index,
}: {
  cake: (typeof cakes)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
    >
      <div className="hover-lift rounded-xl overflow-hidden bg-white shadow-sm">
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
          <Image
            src={cake.image}
            alt={cake.description}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/20 transition-all duration-500" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs tracking-[0.15em] uppercase text-plum font-light">
            {cake.category}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-charcoal-light text-sm font-light leading-relaxed">
            {cake.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Creations() {
  return (
    <section id="creations" className="pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pt-28 lg:pb-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-2 sm:mb-3"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Creations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-[1px] bg-plum mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light font-light text-base max-w-xl mx-auto leading-relaxed"
          >
            Each creation is a work of art — crafted with the finest ingredients
            and an unwavering attention to detail.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {cakes.map((cake, i) => (
            <CakeCard key={`${cake.category}-${i}`} cake={cake} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 px-4 sm:px-0"
        >
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 border border-plum text-plum rounded-full text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-plum hover:text-white touch-manipulation"
          >
            Request a Custom Cake
          </a>
        </motion.div>
      </div>
    </section>
  );
}
