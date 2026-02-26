"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Plus,
  ShoppingBag,
  Truck,
  AlertTriangle,
  ChevronRight,
  Check,
} from "lucide-react";
import OrderDrawer from "./OrderDrawer";

/* ============ DATA ============ */

type Size = '7"' | '9"' | '12"';

interface CakeItem {
  name: string;
  description: string;
  prices: Record<Size, number>;
}

const cakes: CakeItem[] = [
  {
    name: "Vanilla",
    description: "Vanilla sponge cake + vanilla whipped cream",
    prices: { '7"': 80, '9"': 100, '12"': 150 },
  },
  {
    name: "Chocolate",
    description: "Chocolate sponge cake + chocolate whipped ganache",
    prices: { '7"': 80, '9"': 100, '12"': 150 },
  },
  {
    name: "Rich Chocolate",
    description: "Chocolate fudge cake + chocolate ganache",
    prices: { '7"': 90, '9"': 130, '12"': 200 },
  },
  {
    name: "Strawberry Shortcake",
    description:
      "Vanilla sponge cake soaked in strawberry syrup + strawberry confit + vanilla whipped cream",
    prices: { '7"': 85, '9"': 110, '12"': 150 },
  },
  {
    name: "Mango Passionfruit",
    description: "Vanilla sponge cake, mango passionfruit mousse + mango confit",
    prices: { '7"': 90, '9"': 120, '12"': 170 },
  },
  {
    name: "Chocolate & Raspberry",
    description: "Chocolate sponge cake + raspberry confit + chocolate whipped ganache",
    prices: { '7"': 90, '9"': 120, '12"': 170 },
  },
  {
    name: "Lemon + Matcha",
    description: "Vanilla sponge cake + lemon curd and matcha whipped cream",
    prices: { '7"': 90, '9"': 120, '12"': 170 },
  },
];

interface BonbonOption {
  quantity: number;
  label: string;
  price: number;
}

const bonbonOptions: BonbonOption[] = [
  { quantity: 3, label: "3 pcs", price: 14 },
  { quantity: 6, label: "6 pcs", price: 25 },
  { quantity: 9, label: "9 pcs", price: 35 },
];

const sizes: Size[] = ['7"', '9"', '12"'];

/* ============ ORDER ITEM TYPE ============ */

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
}

/* ============ COMPONENT ============ */

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedSizes, setSelectedSizes] = useState<Record<string, Size>>(
    () => Object.fromEntries(cakes.map((c) => [c.name, '7"']))
  );
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const addCake = (cake: CakeItem) => {
    const size = selectedSizes[cake.name];
    const id = `${cake.name}-${size}`;
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        { id, name: cake.name, variant: size, price: cake.prices[size], quantity: 1 },
      ];
    });
    setJustAdded(id);
    setTimeout(() => setJustAdded(null), 1200);
  };

  const addBonbon = (option: BonbonOption) => {
    const id = `bonbons-${option.label}`;
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        { id, name: "Chocolate Bonbons", variant: option.label, price: option.price, quantity: 1 },
      ];
    });
    setJustAdded(id);
    setTimeout(() => setJustAdded(null), 1200);
  };

  const removeItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <section
        id="menu"
        className="py-12 sm:py-16 lg:py-20 bg-cream relative overflow-hidden"
      >
        <div
          ref={ref}
          className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        >
          {/* ====== HEADER ====== */}
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl text-charcoal mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Menu
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-12 h-[1px] bg-plum/40 mx-auto mb-3"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal-light/60 font-light text-base italic"
            >
              Handcrafted with the finest ingredients
            </motion.p>
          </div>

          {/* ====== TWO-COLUMN LAYOUT (desktop) ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 lg:gap-y-0">
            {/* LEFT COLUMN: Signature Cakes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className="text-base sm:text-lg text-plum tracking-[0.2em] uppercase font-light mb-1 text-center"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Signature Cakes
              </h3>
              <div className="w-8 h-[1px] bg-plum/25 mb-5 mx-auto" />

              {/* Size legend */}
              <div className="flex justify-end items-center gap-1 mb-1 text-[11px] text-charcoal-light/40 uppercase tracking-wider font-light">
                {sizes.map((s) => (
                  <span key={s} className="w-14 text-center">{s}</span>
                ))}
                <span className="w-16" />
              </div>

              {/* Cake items */}
              <div className="border-t border-plum/10">
                {cakes.map((cake, i) => {
                  const currentId = `${cake.name}-${selectedSizes[cake.name]}`;
                  const isAdded = justAdded === currentId;

                  return (
                    <div
                      key={cake.name}
                      className="border-b border-plum/8 py-4 group"
                    >
                      <div className="flex items-start gap-2">
                        {/* Name + desc */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-1.5">
                            <h4
                              className="text-base sm:text-lg text-charcoal leading-snug whitespace-nowrap"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {cake.name}
                            </h4>
                            <div className="flex-1 border-b border-dotted border-charcoal-light/15 translate-y-[-3px] hidden sm:block" />
                          </div>
                          <p className="text-xs sm:text-sm text-charcoal-light/50 font-light italic leading-snug mt-0.5 pr-2">
                            {cake.description}
                          </p>

                          {/* Mobile: size pills */}
                          <div className="flex items-center gap-1.5 mt-2 sm:hidden">
                            {sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() =>
                                  setSelectedSizes((prev) => ({ ...prev, [cake.name]: size }))
                                }
                                className={`px-3 py-1.5 rounded-md text-xs font-light transition-all ${
                                  selectedSizes[cake.name] === size
                                    ? "bg-plum text-white"
                                    : "bg-plum/5 text-charcoal-light"
                                }`}
                              >
                                {size} ${cake.prices[size]}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Desktop: prices + add */}
                        <div className="hidden sm:flex items-center gap-1 shrink-0">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() =>
                                setSelectedSizes((prev) => ({ ...prev, [cake.name]: size }))
                              }
                              className={`w-14 py-1.5 rounded-md text-sm text-center transition-all ${
                                selectedSizes[cake.name] === size
                                  ? "bg-plum/10 text-plum font-medium"
                                  : "text-charcoal-light/70 font-light hover:text-plum"
                              }`}
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              ${cake.prices[size]}
                            </button>
                          ))}
                          <button
                            onClick={() => addCake(cake)}
                            className={`w-16 py-1.5 rounded-md text-xs font-light tracking-wide transition-all duration-300 ml-1 ${
                              isAdded
                                ? "bg-green-600 text-white"
                                : "bg-plum/6 text-plum hover:bg-plum hover:text-white"
                            }`}
                          >
                            {isAdded ? (
                              <Check size={14} className="mx-auto" />
                            ) : (
                              <span className="flex items-center justify-center gap-0.5">
                                <Plus size={13} /> Add
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Mobile add */}
                      <div className="mt-2 sm:hidden">
                        <button
                          onClick={() => addCake(cake)}
                          className={`w-full py-2.5 rounded-lg text-xs font-light tracking-wide transition-all duration-300 ${
                            isAdded
                              ? "bg-green-600 text-white"
                              : "bg-plum/6 text-plum active:bg-plum active:text-white"
                          }`}
                        >
                          {isAdded ? (
                            <span className="flex items-center justify-center gap-1">
                              <Check size={11} /> Added
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-1">
                              <Plus size={11} /> Add · {selectedSizes[cake.name]} · ${cake.prices[selectedSizes[cake.name]]}
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Bonbons + Tiered + Notes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 lg:mt-0"
            >
              {/* Bonbons */}
              <h3
                className="text-base sm:text-lg text-plum tracking-[0.2em] uppercase font-light mb-1 text-center"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Chocolate Bonbons
              </h3>
              <div className="w-8 h-[1px] bg-plum/25 mb-5 mx-auto" />

              <div className="border-t border-plum/10">
                {bonbonOptions.map((opt) => {
                  const isAdded = justAdded === `bonbons-${opt.label}`;
                  return (
                    <div
                      key={opt.label}
                      className="border-b border-plum/8 py-4 flex items-center gap-2"
                    >
                      <div className="flex-1 flex items-baseline gap-1.5">
                        <h4
                          className="text-base sm:text-lg text-charcoal whitespace-nowrap"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {opt.label}
                        </h4>
                        <div className="flex-1 border-b border-dotted border-charcoal-light/15 translate-y-[-3px]" />
                        <span
                          className="text-base sm:text-lg text-charcoal font-light"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          ${opt.price}
                        </span>
                      </div>
                      <button
                        onClick={() => addBonbon(opt)}
                        className={`w-16 py-1.5 rounded-md text-xs font-light tracking-wide transition-all duration-300 ${
                          isAdded
                            ? "bg-green-600 text-white"
                            : "bg-plum/6 text-plum hover:bg-plum hover:text-white"
                        }`}
                      >
                        {isAdded ? (
                          <Check size={14} className="mx-auto" />
                        ) : (
                          <span className="flex items-center justify-center gap-0.5">
                            <Plus size={13} /> Add
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Tiered Cakes */}
              <div className="mt-8">
                <h3
                  className="text-base sm:text-lg text-plum tracking-[0.2em] uppercase font-light mb-1 text-center"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Tiered Cakes
                </h3>
                <div className="w-8 h-[1px] bg-plum/25 mb-5 mx-auto" />

                <div className="border-t border-b border-plum/10 py-6 text-center">
                  <p className="text-charcoal-light/50 font-light text-sm italic mb-2">
                    Multi-tiered cakes for weddings &amp; grand celebrations
                  </p>
                  <div className="flex items-baseline gap-1.5 justify-center mb-4">
                    <span className="text-xs text-charcoal-light/40 uppercase tracking-wider font-light">
                      Starting at
                    </span>
                    <span
                      className="text-2xl text-charcoal"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      $250
                    </span>
                  </div>
                  <a
                    href="/consultation"
                    className="inline-flex items-center gap-1.5 text-plum text-xs tracking-[0.12em] uppercase font-light border-b border-plum/25 pb-0.5 hover:border-plum transition-colors"
                  >
                    Request a Quote <ChevronRight size={13} />
                  </a>
                </div>
              </div>

              {/* Footer notes */}
              <div className="mt-8 flex flex-col gap-3 text-xs text-charcoal-light/45 font-light">
                <div className="flex items-center gap-2">
                  <Truck size={15} className="text-plum/35 shrink-0" />
                  <span>Delivery &amp; Pickup Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={15} className="text-plum/35 shrink-0" />
                  <span>Please Communicate Any Allergies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FLOATING ORDER BUTTON ====== */}
      <AnimatePresence>
        {totalItems > 0 && !drawerOpen && (
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setDrawerOpen(true)}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2.5 bg-plum text-white px-5 py-3 rounded-full shadow-xl shadow-plum/30 hover:shadow-2xl hover:shadow-plum/40 transition-shadow duration-300 group"
          >
            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-light tracking-wide">View Order</span>
            <span className="bg-white text-plum text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ====== ORDER DRAWER ====== */}
      <OrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={orderItems}
        onRemoveItem={removeItem}
        onUpdateQuantity={updateQuantity}
      />
    </>
  );
}
