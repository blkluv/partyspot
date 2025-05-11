import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PartySpot | Have Atlantic City Fun",
  description:
    "Find the perfect venue for your event, from private parties to social and corporate gatherings. Discover the best place to celebrate your birthday, wedding, or special occasion!",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          logoPlacement: "inside"
        },
        elements: {
          formButtonPrimary: "bg-[#E6267B] hover:bg-[#E6267B]/90",
          footerActionLink: "text-[#E6267B] hover:text-[#E6267B]/90",
          card: "rounded-lg shadow-md border-0"
        }
      }}
    >
      <html suppressHydrationWarning lang="en" className="scroll-smooth">
        <body className={`${gabarito.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
