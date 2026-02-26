import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Menu | Sandra Sharon Pastry",
  description:
    "Browse our selection of handcrafted cakes, chocolate bonbons, and custom tiered cakes. Order your favorites today.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />
      <Menu />
      <Footer />
    </>
  );
}
