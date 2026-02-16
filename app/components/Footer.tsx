"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Creations", href: "#creations" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-plum to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p
              className="text-2xl sm:text-3xl text-white mb-2 sm:mb-3"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Sandra Sharon
            </p>
            <p className="text-white/40 text-xs sm:text-sm font-light tracking-wider uppercase mb-3 sm:mb-4">
              Pastry Chef
            </p>
            <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed max-w-xs mx-auto sm:mx-0">
              Handcrafted cakes and pastries made with love, precision, and the
              finest ingredients.
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left md:text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4 sm:mb-5">
              Navigation
            </p>
            <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-4 sm:gap-3 flex-wrap">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 text-sm font-light hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left md:text-right sm:col-span-2 md:col-span-1">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4 sm:mb-5">
              Connect
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+18195763848"
                className="block text-white/60 text-sm font-light hover:text-gold transition-colors"
              >
                (819) 576-3848
              </a>
              <a
                href="mailto:sandy.sharon101@gmail.com"
                className="block text-white/60 text-xs sm:text-sm font-light hover:text-gold transition-colors break-all sm:break-normal"
              >
                sandy.sharon101@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 lg:mt-14 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-xs font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sandra Sharon Pastry. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
