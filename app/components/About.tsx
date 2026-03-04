"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// Icons removed to keep the design sleek and non AI-generated

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
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Text Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center w-full"
          >
            <p className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-3 sm:mb-4">
              Our Story
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Passion for <span className="text-plum">Perfect Pastry</span>
            </h2>
            <div className="w-16 h-[1px] bg-plum mb-8 sm:mb-10 mx-auto" />

            <div className="max-w-3xl mx-auto text-center mt-6 sm:mt-10 px-4 sm:px-0 space-y-8">
              <motion.p 
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
                }}
                className="text-charcoal-light font-light leading-relaxed text-base sm:text-lg"
              >
                Sandra Sharon is a professional Pastry Chef based in Ottawa. As a graduate of Le Cordon Bleu, she showcases her baking and pastry skills at private dinners, weddings, custom cake programs, and events at Restaurant 18 and Social Lounge, located in the heart of the Byward Market.
              </motion.p>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
                }}
                className="text-charcoal-light font-light leading-relaxed text-base sm:text-lg"
              >
                Embracing her Tamil heritage, Sandra created Ini Pâtisserie. Ini, from the Tamil word Inimai, meaning sweetness, represents a celebration of flavour and her next step in embracing her philosophy of giving every dessert a story.
              </motion.p>

              <motion.p 
                custom={3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
                }}
                className="text-charcoal-light font-light leading-relaxed text-base sm:text-lg"
              >
                Using the finest ingredients and the most delicate touch, Sandra expresses her artistry and professional prowess in every creation.
              </motion.p>
              
              <motion.p 
                custom={4}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
                }}
                className="text-plum block mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-plum/20 text-xl sm:text-2xl md:text-3xl leading-tight italic" 
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span style={{ fontFamily: "var(--font-great-vibes)" }}>
                  Celebrate your life’s meaningful moments with<br className="hidden sm:block" /> Ini Pâtisserie.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
