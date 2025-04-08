"use client";
import { useState } from "react";

export const ShowMap = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <label className="group inline-flex cursor-pointer items-center gap-2">
        {/* Label text */}
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
          Mostrar mapa
        </span>

        <span className="sr-only">
          {showMap ? "Ocultar mapa" : "Mostrar mapa"}
        </span>

        {/* Toggle background */}
        <span
          className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
            showMap ? "bg-primary" : "bg-gray-200"
          }`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowMap(!showMap);
            }
          }}
        >
          {/* Toggle slider */}
          <span
            className={`${
              showMap ? "translate-x-5" : "translate-x-0"
            } inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out`}
          />
        </span>

        {/* Hidden checkbox for accessibility */}
        <input
          type="checkbox"
          className="sr-only"
          checked={showMap}
          onChange={() => setShowMap(!showMap)}
          aria-label={showMap ? "Ocultar mapa" : "Mostrar mapa"}
        />
      </label>
    </div>
  );
};
