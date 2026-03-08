"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-plum/10 py-3"
            : "bg-transparent border-b border-plum/10 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group relative z-10">
            <span
              className={`font-[var(--font-serif)] text-2xl xs:text-3xl sm:text-4xl tracking-[-0.02em] font-bold transition-colors duration-300 ${
                scrolled ? "text-plum" : "text-plum"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="bg-gradient-to-b from-plum via-plum-dark to-plum text-transparent bg-clip-text drop-shadow-[0_4px_10px_rgba(107,29,74,0.35)]">
                Ini
              </span>
            </span>
          </a>

          {/* Desktop Links – centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 group ${
                  scrolled
                    ? "text-charcoal hover:text-plum"
                    : "text-charcoal/80 hover:text-plum"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/menu"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 bg-plum text-white hover:bg-plum-dark shadow-md shadow-plum/20 hover:shadow-lg hover:shadow-plum/30`}
            >
              Menu
            </a>
            <a
              href="/consultation"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 border ${
                scrolled
                  ? "border-plum text-plum hover:bg-plum hover:text-white"
                  : "border-plum/40 text-plum hover:bg-plum hover:text-white"
              }`}
            >
              Book
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 -mr-2 transition-colors ${
              scrolled ? "text-plum" : "text-plum"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-plum flex flex-col items-center justify-center gap-6 sm:gap-8 px-6"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-white/80 hover:text-white transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <X size={32} />
            </motion.button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-white text-xl sm:text-2xl font-light tracking-[0.3em] uppercase py-2 touch-manipulation"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Emphasized Menu CTA in mobile */}
            <motion.a
              href="/menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-white text-plum text-lg sm:text-xl font-medium tracking-[0.25em] uppercase px-10 py-3.5 rounded-full shadow-lg shadow-white/20 touch-manipulation"
            >
              Menu
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
