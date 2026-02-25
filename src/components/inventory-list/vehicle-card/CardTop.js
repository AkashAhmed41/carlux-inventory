import React from "react";
import Image from "next/image";
import { StarIcon } from "@/lib/svg/icons";
import { AvailabilityStatus } from "@/lib/constants/enum/AvailabilityStatus";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

const CardTop = ({ vehicle }) => {
  const { thumbnail, title, availabilityStatus, rating, discountPercentage } =
    vehicle;

  const isInStock = availabilityStatus === AvailabilityStatus.IN_STOCK;
  const hasDiscount = discountPercentage > 0;

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
      <Image
        src={thumbnail}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <span
        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider backdrop-blur-md border ${
          isInStock
            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
            : "bg-red-500/20 border-red-500/40 text-red-300"
        }`}
      >
        {availabilityStatus}
      </span>
      <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 border border-white/10 backdrop-blur-md text-yellow-400">
        <StarIcon /> {Number(rating).toFixed(1)}
      </span>
      {hasDiscount && (
        <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-[11px] font-black bg-rose-600 text-white tracking-tight shadow-lg">
          {Math.round(discountPercentage)}%{" "}
          {getLocalizedText("INVENTORY", "OFF")}
        </span>
      )}
    </div>
  );
};

export default CardTop;
