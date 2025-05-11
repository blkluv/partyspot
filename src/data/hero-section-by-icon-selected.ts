import { HeroSectionByIconSelected } from "@/types";
import { Camera, Sparkles, PartyPopper, Diamond, Music } from "lucide-react";

// Extended type definition (add to your @/types file)
interface ExtendedHeroSection extends HeroSectionByIconSelected {
  emoji: string;
}

export const heroSectionByIconSelected: ExtendedHeroSection[] = [
  {
    highlight: "📸 Your Viral Moment",
    text: "Dive into our underwater AR selfie zone 🌊 #ACYFUN",
    icon: Camera, // Lucide icon for UI
    emoji: "🤿", // Emoji for social sharing
    backgroundUrl: "/atlantic-ocean-theme.webp"
  },
  {
    highlight: "🎰 Boardwalk Bash",
    text: "Strike a pose with retro casino glam ✨♠️♥️",
    icon: Sparkles,
    emoji: "🎲",
    backgroundUrl: "/golden-age-ac.webp"
  },
  {
    highlight: "🎓 NFT Graduation",
    text: "Tokenize your achievement 🏢⛓️ #BlockchainDiploma",
    icon: PartyPopper,
    emoji: "🧑‍🎓",
    backgroundUrl: "/grad-cap-booth.webp"
  },
  {
    highlight: "💍 Jersey Shore Wedding",
    text: "Say ‘I do’ with blockchain-preserved photos 💒⛓️",
    icon: Diamond,
    emoji: "👰‍♀️",
    backgroundUrl: "/wedding-boardwalk.webp"
  },
  {
    highlight: "🪩 Club Night Vibe",
    text: "Jersey Club beats + neon photo ops 🎧🌃",
    icon: Music,
    emoji: "🕺",
    backgroundUrl: "/acyfun-nightlife.webp"
  }
];
