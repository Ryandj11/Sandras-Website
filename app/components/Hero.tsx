"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/* ── Cake data ── */
const cakes = [
  {
    title: "Wedding Elegance",
    subtitle: "Multi-tiered masterpieces",
    image: "/pictures/realcake1.jpeg",
  },
  {
    title: "Birthday Bliss",
    subtitle: "Custom celebration designs",
    image: "/pictures/realcake2.jpeg",
  },
  {
    title: "Petit Fours",
    subtitle: "Delicate bite-sized treats",
    image: "/pictures/realcake3.jpeg",
  },
  {
    title: "Fruit Tarts",
    subtitle: "Seasonal fruits & pastry",
    image: "/pictures/cake15.png",
    scale: "scale-125",
  },
  {
    title: "Fruit Tarts",
    subtitle: "Seasonal fruits & pastry",
    image: "/pictures/cake12.jpeg",
    
  },
  {
    title: "Fruit Tarts",
    subtitle: "Seasonal fruits & pastry",
    image: "/pictures/cake18.png",
    scale: "scale-115",
    
  },
  {
    title: "Fruit Tarts",
    subtitle: "Seasonal fruits & pastry",
    image: "/pictures/cake17.png",
    scale: "scale-125",
  },
];

/* ── Cake Logo SVG (from business card) ── */
function CakeLogo() {
  return (
    <svg
      width="140"
      height="115"
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-plum/70"
    >
      {/* Top laurel wreath */}
      <g opacity="0.7">
        <path
          d="M60 30 Q80 18 100 22 Q90 14 70 18 Q85 8 105 16 Q95 6 78 10 Q92 2 112 12 Q106 5 90 4 Q108 0 125 8"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="75"
          cy="22"
          rx="10"
          ry="4"
          transform="rotate(-30 75 22)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="88"
          cy="14"
          rx="9"
          ry="3.5"
          transform="rotate(-20 88 14)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="9"
          rx="9"
          ry="3.5"
          transform="rotate(-10 100 9)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="112"
          cy="6"
          rx="8"
          ry="3"
          transform="rotate(-5 112 6)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="65"
          cy="28"
          rx="8"
          ry="3.5"
          transform="rotate(-40 65 28)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M220 30 Q200 18 180 22 Q190 14 210 18 Q195 8 175 16 Q185 6 202 10 Q188 2 168 12 Q174 5 190 4 Q172 0 155 8"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="205"
          cy="22"
          rx="10"
          ry="4"
          transform="rotate(30 205 22)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="192"
          cy="14"
          rx="9"
          ry="3.5"
          transform="rotate(20 192 14)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="180"
          cy="9"
          rx="9"
          ry="3.5"
          transform="rotate(10 180 9)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="168"
          cy="6"
          rx="8"
          ry="3"
          transform="rotate(5 168 6)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="215"
          cy="28"
          rx="8"
          ry="3.5"
          transform="rotate(40 215 28)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M125 8 Q135 3 140 5 Q145 3 155 8"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
      </g>
      {/* Cake slice */}
      <g transform="translate(140, 120)" opacity="0.85">
        <ellipse
          cx="0"
          cy="48"
          rx="58"
          ry="10"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <g opacity="0.4">
          {[
            [-20, 52],
            [-15, 54],
            [-10, 53],
            [-5, 55],
            [0, 54],
            [5, 55],
            [10, 53],
            [15, 54],
            [20, 52],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i % 2 === 0 ? 1 : 0.8}
              fill="currentColor"
            />
          ))}
        </g>
        <path
          d="M-38 45 L-38 28 L38 28 L38 45"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <g opacity="0.3">
          {Array.from({ length: 10 }, (_, i) => {
            const x1 = -35 + i * 7;
            return (
              <line
                key={`d${i}`}
                x1={x1}
                y1="30"
                x2={x1 + 10}
                y2="44"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            );
          })}
          {Array.from({ length: 10 }, (_, i) => {
            const x1 = -35 + i * 7;
            return (
              <line
                key={`u${i}`}
                x1={x1}
                y1="44"
                x2={x1 + 10}
                y2="30"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            );
          })}
        </g>
        <line
          x1="-38"
          y1="28"
          x2="38"
          y2="28"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-38 28 L-38 12 L38 12 L38 28"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <g opacity="0.25">
          {Array.from({ length: 7 }, (_, i) => {
            const x1 = -35 + i * 10;
            return (
              <line
                key={`m${i}`}
                x1={x1}
                y1="14"
                x2={x1 + 10}
                y2="26"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            );
          })}
        </g>
        <line
          x1="-38"
          y1="12"
          x2="38"
          y2="12"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-40 12 Q-40 0 -38 -2 L38 -2 Q40 0 40 12"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-38 -2 Q-30 -6 -20 -4 Q-10 -7 0 -5 Q10 -8 20 -4 Q30 -7 38 -2"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-30 -2 Q-32 4 -30 8"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M-15 -3 Q-18 6 -15 12"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M8 -4 Q5 4 8 10"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M25 -2 Q22 5 25 12"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M35 -1 Q33 3 35 6"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <g transform="translate(0, -16)">
          <path
            d="M-7 0 Q-9 -8 -5 -14 Q-2 -18 0 -18 Q2 -18 5 -14 Q9 -8 7 0 Q4 3 0 3 Q-4 3 -7 0Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="-3" cy="-6" r="0.6" fill="currentColor" />
          <circle cx="2" cy="-8" r="0.6" fill="currentColor" />
          <circle cx="-1" cy="-12" r="0.6" fill="currentColor" />
          <circle cx="4" cy="-4" r="0.6" fill="currentColor" />
          <circle cx="-5" cy="-10" r="0.6" fill="currentColor" />
          <circle cx="1" cy="-3" r="0.6" fill="currentColor" />
          <path
            d="M0 -18 L-1 -22 Q-4 -20 -6 -18"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M0 -18 L1 -22 Q4 -20 7 -18"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M-1 -22 L0 -25 L1 -22"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
        </g>
      </g>
      {/* Bottom laurel wreath */}
      <g opacity="0.7" transform="translate(0, 186)">
        <path
          d="M60 0 Q80 12 100 8 Q90 16 70 12 Q85 22 105 14 Q95 24 78 20 Q92 28 112 18 Q106 25 90 26 Q108 30 125 22"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="75"
          cy="8"
          rx="10"
          ry="4"
          transform="rotate(30 75 8)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="88"
          cy="16"
          rx="9"
          ry="3.5"
          transform="rotate(20 88 16)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="100"
          cy="21"
          rx="9"
          ry="3.5"
          transform="rotate(10 100 21)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="112"
          cy="24"
          rx="8"
          ry="3"
          transform="rotate(5 112 24)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="65"
          cy="2"
          rx="8"
          ry="3.5"
          transform="rotate(40 65 2)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M220 0 Q200 12 180 8 Q190 16 210 12 Q195 22 175 14 Q185 24 202 20 Q188 28 168 18 Q174 25 190 26 Q172 30 155 22"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="205"
          cy="8"
          rx="10"
          ry="4"
          transform="rotate(-30 205 8)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="192"
          cy="16"
          rx="9"
          ry="3.5"
          transform="rotate(-20 192 16)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="180"
          cy="21"
          rx="9"
          ry="3.5"
          transform="rotate(-10 180 21)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="168"
          cy="24"
          rx="8"
          ry="3"
          transform="rotate(-5 168 24)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <ellipse
          cx="215"
          cy="2"
          rx="8"
          ry="3.5"
          transform="rotate(-40 215 2)"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M125 22 Q135 27 140 25 Q145 27 155 22"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
      </g>
    </svg>
  );
}

/* ── Mobile: single-image carousel with fast auto-advance ── */
const MOBILE_ADVANCE_MS = 2500; // 2.5s between slides
const TRANSITION_DURATION = 0.4;

function CakeCarouselMobile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % cakes.length);
    }, MOBILE_ADVANCE_MS);
    return () => clearInterval(t);
  }, []);

  const cake = cakes[index];

  return (
    <div className="relative w-full max-w-[340px] mx-auto overflow-hidden rounded-lg">
      <div className="relative aspect-[3/2]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
            className="absolute inset-0 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={cake.image}
              alt={cake.title}
              fill
              className={`object-cover ${cake.scale || ""}`}
              sizes="(max-width: 640px) 100vw, 340px"
              priority={index < 2}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-black/5" />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-2">
        {cakes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index ? "bg-plum" : "bg-plum/25"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Desktop: infinite scroll ticker carousel ── */
function CakeCarouselDesktop() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const scrollPos = useRef(0);
  const rafRef = useRef<number>(0);

  const items = [...cakes, ...cakes];
  const cardWidth = 322;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    const animate = () => {
      if (!paused) {
        scrollPos.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (scrollPos.current >= halfWidth) scrollPos.current = 0;
        track.style.transform = `translateX(-${scrollPos.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  const scrollTo = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;

    if (direction === "right") scrollPos.current += cardWidth;
    else scrollPos.current -= cardWidth;

    if (scrollPos.current >= halfWidth) scrollPos.current -= halfWidth;
    else if (scrollPos.current < 0) scrollPos.current += halfWidth;

    track.style.transform = `translateX(-${scrollPos.current}px)`;
  };

  return (
    <div
      className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden group/carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        onClick={() => scrollTo("left")}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-plum opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scrollTo("right")}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-plum opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-cream to-transparent" />

      <div ref={trackRef} className="flex gap-2 w-max will-change-transform">
        {items.map((cake, i) => (
          <motion.div
            key={`${cake.title}-${i}`}
            className="group relative flex-shrink-0 w-[280px] sm:w-[320px] rounded-lg overflow-hidden cursor-pointer shadow-md"
            style={{ perspective: 1000 }}
            whileHover={{
              scale: 1.03,
              rotateY: 5,
              rotateX: -2,
              z: 50,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="aspect-[3/2] relative bg-cream-dark">
              <Image
                src={cake.image}
                alt={cake.title}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${cake.scale || ""}`}
                sizes="(max-width: 640px) 280px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/20 group-hover:to-transparent transition-all duration-700" />
              <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/5 transition-all duration-500" />
              <div className="absolute inset-0 rounded-lg ring-1 ring-black/5 group-hover:ring-plum/20 group-hover:shadow-xl group-hover:shadow-plum/10 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Responsive wrapper: mobile single-image, desktop scroll ── */
function CakeCarousel() {
  return (
    <>
      <div className="sm:hidden">
        <CakeCarouselMobile />
      </div>
      <div className="hidden sm:block">
        <CakeCarouselDesktop />
      </div>
    </>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax transforms at different speeds
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const y3 = useTransform(scrollY, [0, 500], [0, -30]);
  const y4 = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
    >
      {/* ── Background with animated gradient ── */}
      <div className="absolute inset-0 bg-cream">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #faf7f2 0%, #f5ede3 50%, #faf7f2 100%)",
              "linear-gradient(135deg, #f5ede3 0%, #faf7f2 50%, #fdf2f8 100%)",
              "linear-gradient(135deg, #faf7f2 0%, #fdf2f8 50%, #f5ede3 100%)",
              "linear-gradient(135deg, #faf7f2 0%, #f5ede3 50%, #faf7f2 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b1d4a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient blurs with parallax - smaller on mobile */}
      <motion.div
        className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-plum/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-plum-50/40 blur-3xl"
        style={{ y: y2 }}
      />

      {/* Floating decorative elements with parallax - hidden on mobile for cleaner look */}
      <motion.div
        className="hidden sm:block absolute top-32 left-[15%] w-2 h-2 rounded-full bg-plum/20"
        style={{ y: y1 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute top-48 right-[20%] w-3 h-3 rounded-full bg-gold/30"
        style={{ y: y2 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute top-[40%] left-[8%] w-1.5 h-1.5 rounded-full bg-plum/15"
        style={{ y: y3 }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="hidden md:block absolute top-[35%] right-[12%] w-2 h-2 rounded-full bg-gold/25"
        style={{ y: y4 }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="hidden lg:block absolute bottom-[35%] left-[18%] w-1 h-1 rounded-full bg-plum/25"
        style={{ y: y2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="hidden lg:block absolute bottom-[40%] right-[15%] w-2.5 h-2.5 rounded-full bg-plum/10"
        style={{ y: y3 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 pt-16 sm:pt-20 pb-6 sm:pb-8">
        {/* Title section - tighter spacing */}
        <div className="flex flex-col items-center mb-2">
          {/* Main title with shimmer effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight pt-4 px-2"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            <span className="relative inline-block">
              {/* Base text */}
              <span className="text-plum">Gâteaux et Pâtisseries</span>
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 w-[200%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%, transparent 100%)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle with decorative lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-2 sm:gap-3 mt-1"
          >
            <motion.div
              className="h-[1px] bg-plum/30 hidden xs:block"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <span
              className="text-plum/80 text-lg xs:text-xl sm:text-2xl lg:text-3xl"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              by Sandra Sharon
            </span>
            <motion.div
              className="h-[1px] bg-plum/30 hidden xs:block"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-charcoal-light/60 text-xs sm:text-sm tracking-[0.25em] uppercase mt-3 font-light"
          >
            Handcrafted with Love
          </motion.p>
        </div>

        {/* Carousel - tighter spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full my-5"
        >
          <CakeCarousel />
        </motion.div>

        {/* CTAs - Custom styled */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary CTA - elegant with icon */}
          <motion.a
            href="#contact"
            className="group relative overflow-hidden px-6 sm:px-8 py-3 bg-plum text-white text-xs sm:text-sm tracking-[0.15em] uppercase font-light transition-all duration-500 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Decorative corners */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30" />
            {/* Hover fill effect */}
            <span className="absolute inset-0 bg-plum-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">Get in Touch</span>
          </motion.a>

          {/* Secondary CTA - underline style */}
          <motion.a
            href="/gallery"
            className="group relative text-plum text-xs sm:text-sm tracking-[0.15em] uppercase font-light py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative">
              View Gallery
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-plum group-hover:w-full transition-all duration-500" />
            </span>
            {/* Arrow */}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col items-center gap-1 mt-6"
        >
          <motion.span
            className="text-plum/30 text-[10px] tracking-[0.3em] uppercase"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-plum/30" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
