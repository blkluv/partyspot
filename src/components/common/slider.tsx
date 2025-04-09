"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "./button";
import { cn } from "@/lib/utils/cn";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Slider({ children, className, ...props }: SliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleScroll = useCallback(() => {
    if (!viewportRef.current) {
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const scrollPrev = useCallback(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({
        left: -viewportRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  }, []);

  const scrollNext = useCallback(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({
        left: viewportRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  }, []);

  useEffect(() => {
    const viewportElement = viewportRef.current;
    if (!viewportElement) {
      return;
    }

    handleScroll();

    viewportElement.addEventListener("scroll", handleScroll, { passive: true });

    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(viewportElement);

    return () => {
      viewportElement.removeEventListener("scroll", handleScroll);
      resizeObserver.unobserve(viewportElement);
      resizeObserver.disconnect();
    };
  }, [children, handleScroll]);

  return (
    <div
      className={cn("relative flex items-center px-4", className)}
      {...props}
    >
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        className={cn("absolute left-0 z-10 h-8 w-8 rounded-full", {
          "cursor-not-allowed opacity-50": !canScrollLeft
        })}
        onClick={scrollPrev}
        disabled={!canScrollLeft}
        aria-label="Scroll previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Scrollable Viewport */}
      <div
        ref={viewportRef}
        className="scrollbar-hide mx-10 overflow-x-hidden scroll-smooth"
      >
        <div className="flex w-max items-center gap-4">{children}</div>
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        className={cn("absolute right-0 z-10 h-8 w-8 rounded-full", {
          "cursor-not-allowed opacity-50": !canScrollRight
        })}
        onClick={scrollNext}
        disabled={!canScrollRight}
        aria-label="Scroll next"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export { Slider };
export type { SliderProps };
