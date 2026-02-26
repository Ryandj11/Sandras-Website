"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ConsultationEmbed() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Square Appointments widget script
    const script = document.createElement("script");
    script.src =
      "https://square.site/appointments/buyer/widget/ez4y6k7sl1odkf/LJKGF1X2B0635.js";
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (widgetRef.current && script.parentNode === widgetRef.current) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top bar */}
      <div className="px-5 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-plum text-xs font-light tracking-wide hover:gap-2.5 transition-all"
        >
          <ArrowLeft size={14} />
          Back
        </a>
        <p
          className="text-charcoal text-sm font-light tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Book a Consultation
        </p>
        <div className="w-12" />
      </div>

      {/* Widget centered */}
      <div className="flex-1 flex items-start justify-center px-4 py-6 sm:py-10">
        <div ref={widgetRef} className="w-full max-w-4xl" />
      </div>
    </div>
  );
}
