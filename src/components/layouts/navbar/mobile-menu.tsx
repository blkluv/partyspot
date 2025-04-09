"use client";

import React from "react";
import NavLinks from "./nav-links";
import { useStore } from "@/store";

const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen } = useStore();

  return (
    <div
      className={`mobile-menu-container overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
        isMobileMenuOpen
          ? "max-h-[300px] animate-[slideDown_0.3s_ease-in-out]"
          : "max-h-0 animate-[slideUp_0.3s_ease-in-out]"
      }`}
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <div className="px-4 py-3">
        <NavLinks isMobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;
