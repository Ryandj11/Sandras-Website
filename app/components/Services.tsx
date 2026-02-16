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
} from "lucide-react";

const services = [
  {
    icon: Cake,
    title: "Custom Cakes & Pastries",
    subtitle: "For Your Special Moments",
    description:
      "From elegant wedding cakes to whimsical birthday creations, every cake is handcrafted to reflect your unique vision and taste.",
    features: [
      { icon: Sparkles, text: "Wedding & celebration cakes" },
      { icon: Sparkles, text: "Custom design & flavors" },
      { icon: Sparkles, text: "Chocolate bon bons & treats" },
      { icon: Sparkles, text: "Seasonal & holiday specials" },
    ],
    cta: "Order a Custom Cake",
    href: "/#contact?type=cake",
    inquiryType: "cake",
  },
  {
    icon: UtensilsCrossed,
    title: "Business & Restaurant Services",
    subtitle: "For Culinary Professionals",
    description:
      "Elevate your restaurant or business with expert pastry consultation, custom menu development, and signature recipe design.",
    features: [
      { icon: BookOpen, text: "Dessert menu development" },
      { icon: ChefHat, text: "Pastry consultation & training" },
      { icon: MessageSquare, text: "Signature recipe design" },
      { icon: Sparkles, text: "Brand-tailored creations" },
    ],
    cta: "Book a Consultation",
    href: "/#contact?type=business",
    inquiryType: "business",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCTAClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    inquiryType: string
  ) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("setInquiryType", { detail: inquiryType })
        );
      }, 600);
    }
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-plum-50 blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-full bg-gold/5 blur-3xl" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b1d4a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-3 sm:mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-[1px] bg-plum mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light font-light text-base max-w-2xl mx-auto"
          >
            Whether you&apos;re celebrating a personal milestone or looking to
            elevate your business&apos;s pastry offerings, Sandra brings artistry
            and expertise to every project.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="h-full bg-cream rounded-2xl p-6 sm:p-8 lg:p-10 border border-plum/5 hover:border-plum/15 transition-all duration-500 hover:shadow-lg hover:shadow-plum/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-plum/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-plum/15 transition-colors duration-500">
                  <service.icon size={26} className="text-plum" />
                </div>

                {/* Title */}
                <p className="text-plum text-xs tracking-[0.2em] uppercase font-light mb-2">
                  {service.subtitle}
                </p>
                <h3
                  className="text-xl sm:text-2xl text-charcoal mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal-light font-light text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-plum/8 flex items-center justify-center flex-shrink-0">
                        <feature.icon size={12} className="text-plum" />
                      </div>
                      <span className="text-charcoal-light text-sm font-light">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={service.href}
                  onClick={(e) => handleCTAClick(e, service.inquiryType)}
                  className="inline-flex items-center gap-2 text-plum text-sm tracking-[0.1em] uppercase font-light group/link hover:gap-3 transition-all duration-300"
                >
                  {service.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
