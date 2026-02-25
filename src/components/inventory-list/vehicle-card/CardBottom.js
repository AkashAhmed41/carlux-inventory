import React from "react";
import {
  getFormattedPrice,
  getDiscountedPrice,
  getLocalizedText,
} from "@/lib/utils/CommonUtils";
import { ShieldCheckIcon, TruckIcon, BoxIcon } from "@/lib/svg/icons";
import { MAX_VISIBLE_TAGS } from "@/lib/constants/ApplicationConstants";

const CardBottom = ({ vehicle }) => {
  const {
    title,
    brand,
    price,
    description,
    discountPercentage,
    stock,
    tags,
    warrantyInformation,
    shippingInformation,
    reviews,
  } = vehicle;

  const hasDiscount = discountPercentage > 0;
  const reviewCount = reviews?.length || 0;
  const visibleTags = tags?.slice(0, MAX_VISIBLE_TAGS) || [];

  return (
    <div className="flex flex-col gap-2.5 p-5 flex-1 bg-white/[0.01]">
      <div className="flex justify-between items-center -mb-1">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400/80">
          {brand}
        </p>
        <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
          {reviewCount} {getLocalizedText("INVENTORY", "REVIEWS")}
        </span>
      </div>
      <h3 className="text-[15px] font-bold text-slate-200 leading-snug line-clamp-1 group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[12px] text-gray-400/90 leading-relaxed line-clamp-2 h-[2.5rem]">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-5">
        {visibleTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-gray-400 font-medium whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-0.5 border-y border-white/5 py-2.5">
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <BoxIcon className="w-3 h-3 text-blue-400/70" />
          <span>
            {stock} {getLocalizedText("INVENTORY", "STOCK")}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <ShieldCheckIcon className="w-3 h-3 text-emerald-400/70" />
          <span className="truncate">
            {warrantyInformation?.split(" ")[0]}{" "}
            {warrantyInformation?.split(" ")[1]}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <TruckIcon className="w-3 h-3 text-purple-400/70" />
          <span className="truncate">{shippingInformation}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-0.5 font-bold tracking-tight">
        <span className="text-[15px] md:text-[16px] text-slate-200 group-hover:text-emerald-300 transition-colors duration-300">
          {getDiscountedPrice(price, discountPercentage)}
        </span>
        {hasDiscount && (
          <span className="text-[13px] md:text-[14px] text-gray-500 line-through opacity-60 font-semibold">
            {getFormattedPrice(price)}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardBottom;
