"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*
 * To add a cake, set the `image` field to a path inside /public.
 * Example: image: "/pictures/cake1.jpg"
 */
const cakes = [
  {
    title: "Wedding Elegance",
    category: "Wedding Cakes",
    description: "Multi-tiered masterpieces for your special day",
    image: "/pictures/cake1.jpg",
  },
  {
    title: "Birthday Bliss",
    category: "Celebration Cakes",
    description: "Custom designs to make every birthday unforgettable",
    image: "/pictures/cake2.jpg",
  },
  {
    title: "Petit Fours",
    category: "Pastries",
    description: "Delicate bite-sized treats crafted with precision",
    image: "/pictures/cake3.webp",
  },
  {
    title: "Chocolate Indulgence",
    category: "Specialty Cakes",
    description: "Rich, decadent chocolate creations for true connoisseurs",
    image: "/pictures/cake4.jpeg",
  },
  {
    title: "Fruit Tarts",
    category: "Pastries",
    description: "Seasonal fruits on buttery, flaky pastry shells",
    image: "/pictures/cake5.jpg",
  },
];

function CakeCard({
  cake,
  index,
}: {
  cake: (typeof cakes)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
    >
      <div className="hover-lift rounded-2xl overflow-hidden bg-white shadow-sm">
        {/* Image area */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
          <Image
            src={cake.image}
            alt={cake.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/20 transition-all duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-xs tracking-[0.15em] uppercase text-plum font-light">
            {cake.category}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3
            className="text-xl mb-2 text-charcoal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cake.title}
          </h3>
          <p className="text-charcoal-light text-sm font-light leading-relaxed">
            {cake.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Creations() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="creations" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-plum text-sm tracking-[0.3em] uppercase font-light mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Creations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[1px] bg-plum mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light font-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Each creation is a work of art — crafted with the finest ingredients
            and an unwavering attention to detail.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, i) => (
            <CakeCard key={cake.title} cake={cake} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-plum text-plum rounded-full text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-plum hover:text-white"
          >
            Request a Custom Cake
          </a>
        </motion.div>
      </div>
    </section>
  );
}
