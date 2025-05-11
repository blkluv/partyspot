import { Camera, Ticket, ShieldCheck } from "lucide-react";

export interface FeatureItemProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundUrl: string;
}

export const featureItems: FeatureItemProps[] = [
  {
    id: 1,
    title: "Immersive Photo Experiences",
    description:
      "Step into our themed photo booths and capture unforgettable moments in our one-of-a-kind, immersive event spaces.",
    icon: <Camera className="text-primary h-7 w-7" />,
    backgroundUrl: "/images/photo-booth-experience.webp"
  },
  {
    id: 2,
    title: "Customizable Packages",
    description:
      "Choose from a variety of themed booths, backdrops, and props to create the perfect photo booth experience for your event.",
    icon: <Ticket className="text-primary h-7 w-7" />,
    backgroundUrl: "/images/custom-packages.webp"
  },
  {
    id: 3,
    title: "Secure & Hassle-Free Booking",
    description:
      "Our booking system ensures easy and secure reservations for your event. Guaranteed fun or your money back.",
    icon: <ShieldCheck className="text-primary h-7 w-7" />,
    backgroundUrl: "/images/secure-booking.webp"
  }
];
