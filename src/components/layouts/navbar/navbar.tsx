import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import type { NavbarProps } from "@/types";
import MobileMenu from "./mobile-menu";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
  SignedIn
} from "@clerk/nextjs";

const Navbar: React.FC<NavbarProps> = ({ className = "", children }) => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full border-b border-gray-200 bg-white ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto grid grid-cols-2 items-center px-4 py-2 md:grid-cols-[1fr_auto_1fr] lg:px-4">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 transition-opacity hover:opacity-90 sm:gap-2"
            aria-label="PartySpot Home"
          >
            <Image
              src={images.logo.icon}
              alt="PartySpot Logo"
              width={25}
              height={35}
              className="h-auto w-5 sm:w-6 md:w-7 lg:w-8"
              priority
            />
            <Image
              src={images.logo.text}
              alt="PartySpot"
              width={70}
              height={60}
              className="h-auto w-14 sm:w-16 md:w-[70px] lg:w-[80px]"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="mx-4 hidden md:block">{children}</div>

        {/* User Actions - Right */}
        <div className="flex items-center justify-end gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="navbar-link">Iniciar sesión</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="navbar-link-active">Registrarse</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu />
    </header>
  );
};

export default Navbar;
