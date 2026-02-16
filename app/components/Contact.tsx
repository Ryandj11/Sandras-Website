"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Cake,
  UtensilsCrossed,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type InquiryType = "cake" | "business";
type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [inquiryType, setInquiryType] = useState<InquiryType>("cake");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [cakeForm, setCakeForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const [businessForm, setBusinessForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceType: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    const handleSetInquiryType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "cake" || customEvent.detail === "business") {
        setInquiryType(customEvent.detail);
      }
    };

    window.addEventListener("setInquiryType", handleSetInquiryType);
    return () =>
      window.removeEventListener("setInquiryType", handleSetInquiryType);
  }, []);

  const handleCakeChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setCakeForm({ ...cakeForm, [e.target.name]: e.target.value });
  };

  const handleBusinessChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setBusinessForm({ ...businessForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const payload =
      inquiryType === "cake"
        ? { type: "cake" as const, ...cakeForm }
        : { type: "business" as const, ...businessForm };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send. Please try again.");
      }

      setStatus("success");
      if (inquiryType === "cake") {
        setCakeForm({ name: "", email: "", phone: "", eventType: "", date: "", message: "" });
      } else {
        setBusinessForm({ name: "", email: "", phone: "", businessName: "", serviceType: "", timeline: "", message: "" });
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClasses =
    "w-full px-3 py-3 sm:py-2.5 border border-gray-200 rounded-lg text-charcoal font-light focus:outline-none focus:border-plum focus:ring-1 focus:ring-plum/20 transition-all bg-transparent text-base sm:text-sm";

  const labelClasses =
    "block text-xs tracking-wider uppercase text-charcoal-light font-light mb-1.5";

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-cream relative overflow-hidden"
    >
      {/* Background decor */}
      <div className="absolute top-20 left-0 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-full bg-plum-50 blur-3xl opacity-40" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-plum text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-3 sm:mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Create Together
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
            {inquiryType === "cake"
              ? "Have a special occasion coming up? Reach out to discuss your dream cake, and Sandra will bring it to life."
              : "Looking to elevate your business\u2019s pastry offerings? Let\u2019s discuss how Sandra can help develop your dessert vision."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-5"
          >
            <div>
              <h3
                className="text-xl text-charcoal mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Information
              </h3>
              <p className="text-charcoal-light font-light leading-relaxed text-sm">
                Whether you have a specific design in mind or need inspiration,
                Sandra is here to help. Don&apos;t hesitate to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+18195763848"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-plum/10 flex items-center justify-center group-hover:bg-plum/20 transition-colors">
                  <Phone size={16} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light">
                    Phone
                  </p>
                  <p className="text-charcoal font-light text-sm">
                    (819) 576-3848
                  </p>
                </div>
              </a>

              <a
                href="mailto:sandy.sharon101@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-plum/10 flex items-center justify-center group-hover:bg-plum/20 transition-colors">
                  <Mail size={16} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light">
                    Email
                  </p>
                  <p className="text-charcoal font-light text-sm">
                    sandy.sharon101@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-plum/10 flex items-center justify-center">
                  <MapPin size={16} className="text-plum" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-light tracking-wider uppercase font-light">
                    Serving
                  </p>
                  <p className="text-charcoal font-light text-sm">
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
              className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:p-8 space-y-5"
            >
              {/* Inquiry type toggle */}
              <div className="flex rounded-xl bg-cream p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setInquiryType("cake")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-2 rounded-lg text-xs tracking-[0.1em] uppercase font-light transition-all duration-300 touch-manipulation ${
                    inquiryType === "cake"
                      ? "bg-white text-plum shadow-sm"
                      : "text-charcoal-light hover:text-charcoal"
                  }`}
                >
                  <Cake size={14} />
                  <span>Custom Cake</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("business")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-2 rounded-lg text-xs tracking-[0.1em] uppercase font-light transition-all duration-300 touch-manipulation ${
                    inquiryType === "business"
                      ? "bg-white text-plum shadow-sm"
                      : "text-charcoal-light hover:text-charcoal"
                  }`}
                >
                  <UtensilsCrossed size={14} />
                  <span>Business</span>
                </button>
              </div>

              {/* Cake inquiry form */}
              {inquiryType === "cake" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={cakeForm.name}
                        onChange={handleCakeChange}
                        required
                        className={inputClasses}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={cakeForm.email}
                        onChange={handleCakeChange}
                        required
                        className={inputClasses}
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={cakeForm.phone}
                        onChange={handleCakeChange}
                        className={inputClasses}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Event Type</label>
                      <select
                        name="eventType"
                        value={cakeForm.eventType}
                        onChange={handleCakeChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select an event</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label className={labelClasses}>Event Date</label>
                      <input
                        type="date"
                        name="date"
                        value={cakeForm.date}
                        onChange={handleCakeChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Tell Us About Your Dream Cake
                    </label>
                    <textarea
                      name="message"
                      value={cakeForm.message}
                      onChange={handleCakeChange}
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Describe your ideal cake — flavors, design, number of servings..."
                    />
                  </div>
                </div>
              )}

              {/* Business inquiry form */}
              {inquiryType === "business" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={businessForm.name}
                        onChange={handleBusinessChange}
                        required
                        className={inputClasses}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={businessForm.email}
                        onChange={handleBusinessChange}
                        required
                        className={inputClasses}
                        placeholder="jane@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={businessForm.businessName}
                        onChange={handleBusinessChange}
                        required
                        className={inputClasses}
                        placeholder="Restaurant / Business name"
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={businessForm.phone}
                        onChange={handleBusinessChange}
                        className={inputClasses}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Service Needed</label>
                      <select
                        name="serviceType"
                        value={businessForm.serviceType}
                        onChange={handleBusinessChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select a service</option>
                        <option value="menu-development">
                          Dessert Menu Development
                        </option>
                        <option value="consultation">
                          Pastry Consultation
                        </option>
                        <option value="recipe-design">
                          Signature Recipe Design
                        </option>
                        <option value="training">
                          Staff Training &amp; Workshops
                        </option>
                        <option value="multiple">
                          Multiple Services
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Project Timeline</label>
                      <select
                        name="timeline"
                        value={businessForm.timeline}
                        onChange={handleBusinessChange}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select a timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1 – 3 months</option>
                        <option value="3-6-months">3 – 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={businessForm.message}
                      onChange={handleBusinessChange}
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Describe your business needs — type of cuisine, current dessert offerings, goals for the project..."
                    />
                  </div>
                </div>
              )}

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-sm font-light">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>
                    {inquiryType === "cake"
                      ? "Thank you for your inquiry! Sandra will get back to you soon."
                      : "Thank you for your business inquiry! Sandra will reach out shortly."}
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm font-light">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 sm:py-3 bg-plum text-white rounded-full text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-plum-dark hover:shadow-lg hover:shadow-plum/20 touch-manipulation disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-plum disabled:hover:shadow-none"
              >
                {status === "sending" ? (
                  <>
                    Sending...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {inquiryType === "cake" ? "Send Inquiry" : "Send Consultation Request"}
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
