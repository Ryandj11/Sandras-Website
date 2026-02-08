"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    event: "Wedding Cake",
    text: "Sandra created the most beautiful wedding cake we could have dreamed of. Our guests couldn't stop talking about how amazing it looked and tasted!",
    stars: 5,
  },
  {
    name: "David L.",
    event: "Birthday Celebration",
    text: "The attention to detail was incredible. Sandra perfectly captured the theme we wanted, and the flavors were absolutely divine.",
    stars: 5,
  },
  {
    name: "Maria K.",
    event: "Anniversary Party",
    text: "Working with Sandra was a joy from start to finish. She listened to every detail and delivered something beyond our expectations.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36 bg-plum relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-plum-light/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Clients Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[1px] bg-gold mx-auto"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative"
            >
              <Quote
                size={32}
                className="text-gold/30 absolute top-6 right-6"
              />
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="text-gold"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-white/40 text-xs tracking-wider uppercase font-light">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
