import type { Metadata } from "next";
import ConsultationEmbed from "./ConsultationEmbed";

export const metadata: Metadata = {
  title: "Book a Consultation | Sandra Sharon Pastry",
  description:
    "Schedule a consultation with Sandra Sharon for custom cakes, wedding cakes, or business pastry services.",
};

export default function ConsultationPage() {
  return <ConsultationEmbed />;
}
