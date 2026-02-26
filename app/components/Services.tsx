"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cake,
  UtensilsCrossed,
  ArrowRight,
  Sparkles,
  BookOpen,
  ChefHat,
  MessageSquare,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Cake,
    title: "Custom Cakes & Pastries",
    subtitle: "For Your Special Moments",
    description:
      "From elegant wedding cakes to whimsical birthday creations, every cake is handcrafted to reflect your unique vision and taste.",
    features: [
      "Wedding & celebration cakes",
      "Custom design & flavors",
      "Chocolate bon bons & treats",
      "Seasonal & holiday specials",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Business & Restaurant Services",
    subtitle: "For Culinary Professionals",
    description:
      "Elevate your restaurant or business with expert pastry consultation, custom menu development, and signature recipe design.",
    features: [
      "Dessert menu development",
      "Pastry consultation & training",
      "Signature recipe design",
      "Brand-tailored creations",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-12 h-[1px] bg-plum/40 mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-charcoal-light font-light text-base max-w-xl mx-auto"
          >
            Whether you&apos;re celebrating a personal milestone or elevating
            your business, Sandra brings artistry to every project.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="text-center md:text-left"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-plum/8 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <service.icon size={22} className="text-plum" />
              </div>

              {/* Subtitle */}
              <p className="text-plum text-[11px] tracking-[0.25em] uppercase font-light mb-2">
                {service.subtitle}
              </p>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl text-charcoal mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal-light/70 font-light text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features — simple list */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-plum/40 shrink-0" />
                    <span className="text-charcoal-light text-sm font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full h-[1px] bg-plum/10 my-14 sm:my-16"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-charcoal-light/60 font-light text-sm italic mb-5">
            Ready to discuss your vision?
          </p>
          <a
            href="/consultation"
            className="inline-flex items-center gap-2.5 bg-plum text-white px-8 py-3.5 rounded-full text-sm tracking-[0.12em] uppercase font-light hover:bg-plum-dark hover:shadow-lg hover:shadow-plum/20 transition-all duration-300 group"
          >
            <CalendarCheck size={18} />
            Book a Consultation
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
