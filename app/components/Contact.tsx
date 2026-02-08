"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: connect to a backend or email service
    alert("Thank you for your inquiry! Sandra will get back to you soon.");
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-cream relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-plum-50 blur-3xl opacity-40" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-plum text-sm tracking-[0.3em] uppercase font-light mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Create Together
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[1px] bg-plum mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light font-light text-lg max-w-2xl mx-auto"
          >
            Have a special occasion coming up? Reach out to discuss your dream
            cake, and Sandra will bring it to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="text-2xl text-charcoal mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Information
              </h3>
              <p className="text-charcoal-light font-light leading-relaxed mb-8">
                Whether you have a specific design in mind or need inspiration,
                Sandra is here to help. Don&apos;t hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+18195763848"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center group-hover:bg-plum/20 transition-colors">
                  <Phone size={18} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light mb-1">
                    Phone
                  </p>
                  <p className="text-charcoal font-light">(819) 576-3848</p>
                </div>
              </a>

              <a
                href="mailto:sandy.sharon101@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center group-hover:bg-plum/20 transition-colors">
                  <Mail size={18} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light mb-1">
                    Email
                  </p>
                  <p className="text-charcoal font-light">
                    sandy.sharon101@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center">
                  <MapPin size={18} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light mb-1">
                    Serving
                  </p>
                  <p className="text-charcoal font-light">
                    Local &amp; Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent appearance-none"
                  >
                    <option value="">Select an event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-light font-light mb-2">
                  Tell Us About Your Dream Cake
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent resize-none"
                  placeholder="Describe your ideal cake — flavors, design, number of servings..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-plum text-white rounded-full text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-plum-dark hover:shadow-lg hover:shadow-plum/20"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
