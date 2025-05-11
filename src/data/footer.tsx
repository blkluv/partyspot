import { Facebook, Instagram, Twitter } from "lucide-react";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://facebook.com/photoboothmuseum",
    label: "Facebook",
    icon: (
      <Facebook className="h-5 w-5 text-blue-600 transition-colors hover:text-blue-800" />
    )
  },
  {
    href: "https://instagram.com/photoboothmuseum",
    label: "Instagram",
    icon: (
      <Instagram className="h-5 w-5 text-pink-600 transition-colors hover:text-pink-800" />
    )
  },
  {
    href: "https://twitter.com/photoboothmuseum",
    label: "Twitter",
    icon: (
      <Twitter className="h-5 w-5 text-blue-400 transition-colors hover:text-blue-600" />
    )
  }
];

export const footerSections: FooterSection[] = [
  {
    title: "About Us",
    links: [
      { href: "/about", label: "Learn More About the Museum" },
      { href: "/history", label: "Our History" },
      { href: "/contact", label: "Contact Us" },
      { href: "/events", label: "Upcoming Events" },
      { href: "/faq", label: "Frequently Asked Questions" },
      { href: "/trust-and-safety", label: "Trust & Safety" }
    ]
  },
  {
    title: "Exhibits & Collections",
    links: [
      { href: "/exhibits/classic-photo-booths", label: "Classic Photo Booths" },
      { href: "/exhibits/interactive-displays", label: "Interactive Displays" },
      { href: "/exhibits/modern-booths", label: "Modern Photo Booths" },
      { href: "/exhibits/selfie-stations", label: "Selfie Stations" },
      { href: "/exhibits/more", label: "See More Exhibits" }
    ]
  },
  {
    title: "Events & Rentals",
    links: [
      { href: "/events/weddings", label: "Weddings" },
      { href: "/events/birthdays", label: "Birthdays" },
      { href: "/events/corporate", label: "Corporate Events" },
      { href: "/events/parties", label: "Private Parties" },
      { href: "/events/museum-tours", label: "Museum Tours" },
      { href: "/events/rentals", label: "Rent a Photo Booth" }
    ]
  },
  {
    title: "Explore Atlantic City",
    links: [
      { href: "/attractions/boardwalk", label: "Atlantic City Boardwalk" },
      { href: "/attractions/casinos", label: "Casinos" },
      { href: "/attractions/beaches", label: "Beaches" },
      { href: "/attractions/funland", label: "Funland Amusement Park" },
      { href: "/attractions/other", label: "More Attractions" }
    ]
  }
];
