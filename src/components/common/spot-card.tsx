import Image from "next/image";
import { Star, Share2, Heart, MapPin } from "lucide-react";

interface SpotCardProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  imageUrl: string;
}

export function SpotCard({
  title,
  price,
  rating,
  reviews,
  location,
  imageUrl
}: SpotCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            className="rounded-full bg-gray-800/70 p-2.5 transition-transform hover:scale-105"
            aria-label="Share this spot"
          >
            <Share2 size={18} className="text-white" />
          </button>
          <button
            className="rounded-full bg-gray-800/70 p-2.5 transition-transform hover:scale-105"
            aria-label="Save to favorites"
          >
            <Heart size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-1 py-3">
        {/* Title */}
        <h3 className="font-medium text-gray-900">{title}</h3>

        {/* Price */}
        <div className="flex items-baseline">
          <span className="text-base font-semibold">
            ${price.toLocaleString()}
          </span>
          <span className="ml-1 text-sm text-gray-500">/h</span>
          <div className="ml-2 flex items-center text-sm">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
            <span className="ml-1 text-gray-500">({reviews})</span>
          </div>
        </div>

        {/* Availability */}
        <div className="text-sm text-gray-500">
          <span>Responde en el día</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500">
          <MapPin size={14} className="mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
}
