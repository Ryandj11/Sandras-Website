"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span
              className={`font-[var(--font-script)] text-xl xs:text-2xl sm:text-3xl transition-colors duration-300 ${
                scrolled ? "text-plum" : "text-plum"
              }`}
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              <span className="hidden xs:inline">Gâteaux et Pâtisseries</span>
              <span className="xs:hidden">G&P</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
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

          {/* Order CTA */}
          <a
            href="/#contact"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 border ${
              scrolled
                ? "border-plum text-plum hover:bg-plum hover:text-white"
                : "border-plum/40 text-plum hover:bg-plum hover:text-white"
            }`}
          >
            Contact
          </a>

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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
