"use client";
import { useStore } from "@/store";

interface BackgroundPageContainerProps {
  children: React.ReactNode;
}

export default function BackgroundPageContainer({
  children
}: BackgroundPageContainerProps) {
  const backgroundUrl = useStore((state) => state.backgroundUrl);

  return (
    <div className="relative mb-12 grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-center gap-4 sm:mb-16 md:mb-20">
      {/* Black overlay */}
      <div className="absolute inset-0 -z-50 bg-black opacity-90 transition-opacity duration-700"></div>

      {/* Background image with animation */}
      <div
        className="absolute inset-0 -z-50 bg-cover bg-center opacity-40 transition-all duration-700"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>

      {/* Content wrapper - no inherited background styling */}
      <div className="row-span-1 row-start-2 text-white">{children}</div>
    </div>
  );
}
