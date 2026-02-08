"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every cake is crafted by hand with passion and the finest quality ingredients.",
  },
  {
    icon: Award,
    title: "Years of Expertise",
    description:
      "Professional pastry artistry honed through years of dedicated practice and training.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description:
      "Custom creations tailored to your vision — no two cakes are ever the same.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b1d4a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative background - smaller on mobile */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-full bg-plum-50 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left — Image / Business Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Background card shape */}
            <div className="relative">
              {/* Main card area */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-plum to-plum-dark flex items-center justify-center relative overflow-hidden">
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-20a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="text-center p-10">
                  {/* Laurel top */}
                  <svg
                    width="120"
                    height="20"
                    viewBox="0 0 180 30"
                    fill="none"
                    className="text-gold/60 mx-auto mb-6"
                  >
                    <path
                      d="M90 28C75 28 60 20 50 15C40 10 25 5 10 8C15 3 30 2 45 8C55 12 70 18 90 18C110 18 125 12 135 8C150 2 165 3 170 8C155 5 140 10 130 15C120 20 105 28 90 28Z"
                      fill="currentColor"
                    />
                  </svg>

                  {/* Cake icon */}
                  <div className="text-7xl mb-4 opacity-80">🎂</div>

                  <p
                    className="text-white text-3xl sm:text-4xl mb-2"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                  >
                    Sandra Sharon
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.25em] uppercase font-light">
                    Pastry Chef
                  </p>

                  {/* Laurel bottom */}
                  <svg
                    width="120"
                    height="20"
                    viewBox="0 0 180 30"
                    fill="none"
                    className="text-gold/60 mx-auto mt-6 rotate-180"
                  >
                    <path
                      d="M90 28C75 28 60 20 50 15C40 10 25 5 10 8C15 3 30 2 45 8C55 12 70 18 90 18C110 18 125 12 135 8C150 2 165 3 170 8C155 5 140 10 130 15C120 20 105 28 90 28Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center">
                  <Heart className="text-plum" size={22} fill="currentColor" />
                </div>
                <div>
                  <p className="text-charcoal text-sm font-medium">
                    Handcrafted
                  </p>
                  <p className="text-charcoal-light text-xs font-light">
                    with love &amp; passion
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-3 sm:mb-4">
              Our Story
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Passion for
              <br />
              <span className="text-plum">Perfect Pastry</span>
            </h2>
            <div className="w-16 h-[1px] bg-plum mb-6" />

            <p className="text-charcoal-light font-light leading-relaxed mb-4 text-base sm:text-lg">
              Sandra Sharon is a dedicated pastry chef with a deep love for the
              art of cake making. Every creation begins with the finest
              ingredients and a spark of imagination — blending classic
              techniques with modern elegance.
            </p>
            <p className="text-charcoal-light font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              From elaborate wedding cakes to intimate birthday treats, Sandra
              brings warmth, creativity, and meticulous craftsmanship to every
              order. Her philosophy is simple: every cake should be as
              beautiful as it is delicious.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-plum/10 flex items-center justify-center mt-0.5">
                    <item.icon size={18} className="text-plum" />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-charcoal-light text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
