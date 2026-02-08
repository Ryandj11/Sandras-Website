"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Creations", href: "#creations" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-plum to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <p
              className="text-3xl text-white mb-3"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Sandra Sharon
            </p>
            <p className="text-white/40 text-sm font-light tracking-wider uppercase mb-4">
              Pastry Chef
            </p>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Handcrafted cakes and pastries made with love, precision, and the
              finest ingredients.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
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
          <div className="md:text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-5">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18195763848"
                className="block text-white/60 text-sm font-light hover:text-gold transition-colors"
              >
                (819) 576-3848
              </a>
              <a
                href="mailto:sandy.sharon101@gmail.com"
                className="block text-white/60 text-sm font-light hover:text-gold transition-colors"
              >
                sandy.sharon101@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6 md:justify-end">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Facebook size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; {new Date().getFullYear()} Sandra Sharon Pastry. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs font-light flex items-center gap-1">
            Made with <Heart size={12} className="text-plum-light" fill="currentColor" /> and butter
          </p>
        </div>
      </div>
    </footer>
  );
}
