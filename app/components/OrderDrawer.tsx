"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  Minus,
  Plus,
  Trash2,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
} from "lucide-react";
import type { OrderItem } from "./Menu";

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function OrderDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
}: OrderDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            variant: item.variant,
            price: item.price,
            quantity: item.quantity,
          })),
          customer: formData,
          subtotal,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-plum/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-plum" />
                <h3
                  className="text-xl text-charcoal"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Your Order
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-plum/5 transition-colors text-charcoal-light"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {status === "success" ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full px-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h4
                    className="text-2xl text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Order Request Sent!
                  </h4>
                  <p className="text-charcoal-light font-light text-sm leading-relaxed max-w-xs mb-8">
                    Thank you! Sandra will review your order and reach out
                    within 24 hours to confirm details and availability.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        eventDate: "",
                        notes: "",
                      });
                      onClose();
                    }}
                    className="px-6 py-3 bg-plum text-white rounded-xl text-sm font-light tracking-wide hover:bg-plum-dark transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Order Items */}
                  <div className="px-6 py-5">
                    {items.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag
                          size={40}
                          className="text-charcoal-light/20 mx-auto mb-4"
                        />
                        <p className="text-charcoal-light font-light text-sm">
                          Your order is empty.
                          <br />
                          Browse the menu to add items.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-center gap-4 bg-white rounded-xl p-4 border border-plum/5"
                          >
                            <div className="flex-1 min-w-0">
                              <p
                                className="text-sm text-charcoal font-medium truncate"
                              >
                                {item.name}
                              </p>
                              <p className="text-xs text-charcoal-light/60 font-light">
                                {item.variant}
                              </p>
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="w-7 h-7 rounded-lg bg-plum/5 flex items-center justify-center text-plum hover:bg-plum/10 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm text-charcoal w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="w-7 h-7 rounded-lg bg-plum/5 flex items-center justify-center text-plum hover:bg-plum/10 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Price */}
                            <p
                              className="text-sm text-plum min-w-[50px] text-right"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              ${item.price * item.quantity}
                            </p>

                            {/* Remove */}
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-charcoal-light/40 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Subtotal */}
                    {items.length > 0 && (
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-plum/10">
                        <span className="text-sm text-charcoal-light font-light">
                          Estimated Total
                        </span>
                        <span
                          className="text-xl text-plum"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          ${subtotal}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contact Form */}
                  {items.length > 0 && (
                    <form
                      onSubmit={handleSubmit}
                      className="px-6 pb-6 space-y-4"
                    >
                      <div className="pt-4 border-t border-plum/10">
                        <p className="text-xs text-charcoal-light/70 uppercase tracking-[0.15em] font-light mb-4">
                          Your Details
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-plum/10 text-sm font-light text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-plum/30 focus:ring-2 focus:ring-plum/5 transition-all"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email *"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-plum/10 text-sm font-light text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-plum/30 focus:ring-2 focus:ring-plum/5 transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-plum/10 text-sm font-light text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-plum/30 focus:ring-2 focus:ring-plum/5 transition-all"
                        />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-plum/10 text-sm font-light text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-plum/30 focus:ring-2 focus:ring-plum/5 transition-all"
                        />
                      </div>

                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Special requests, allergies, or notes..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-plum/10 text-sm font-light text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-plum/30 focus:ring-2 focus:ring-plum/5 transition-all resize-none"
                      />

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-light">
                          <AlertCircle size={16} />
                          Something went wrong. Please try again.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-plum text-white rounded-xl text-sm font-light tracking-wide hover:bg-plum-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Order Request
                          </>
                        )}
                      </button>

                      <p className="text-xs text-charcoal-light/50 font-light text-center">
                        This is an order request, not a payment. Sandra will
                        confirm availability and details with you directly.
                      </p>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
