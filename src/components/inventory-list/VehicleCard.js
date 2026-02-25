import React from "react";
import Image from "next/image";

const VehicleCard = ({ vehicle }) => {
  const {
    title,
    brand,
    price,
    rating,
    thumbnail,
    availabilityStatus,
    discountPercentage,
  } = vehicle;

  const isInStock = availabilityStatus === "In Stock";
  const hasDiscount = discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? price * (1 - discountPercentage / 100)
    : null;

  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-sm border ${
            isInStock
              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
              : "bg-red-500/20 border-red-500/40 text-red-300"
          }`}
        >
          {availabilityStatus}
        </span>
        <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 border border-white/20 backdrop-blur-sm text-yellow-400">
          ★ {Number(rating).toFixed(1)}
        </span>
        {hasDiscount && (
          <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#FF7A5C]/90 text-white tracking-wide">
            -{Math.round(discountPercentage)}% OFF
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-4 flex-1">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A8F5E8]/80">
          {brand}
        </p>
        <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-[#A8F5E8] transition-colors duration-200">
          {title}
        </h3>
        <div className="h-px bg-white/10 mt-auto" />
        <div className="flex items-end justify-between pt-1">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-xs text-gray-500 line-through">
                ${price.toLocaleString("en-US", { minimumFractionDigits: 0 })}
              </span>
            )}
            <span className="text-lg font-bold text-white">
              $
              {(hasDiscount ? discountedPrice : price).toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#6B5CE6] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View details →
          </span>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
