import React from "react";
import CardTop from "@/components/inventory-list/vehicle-card/CardTop";
import CardBottom from "@/components/inventory-list/vehicle-card/CardBottom";
import { ArrowRightIcon } from "@/lib/svg/icons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

const VehicleCard = ({ vehicle }) => {
  return (
    <article className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] cursor-pointer">
      <CardTop vehicle={vehicle} />
      <CardBottom vehicle={vehicle} />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none z-10">
        <span className="px-5 py-2 md:px-6 md:py-2.5 rounded-full bg-emerald-500/20 border border-white/20 backdrop-blur-xl text-white text-[12px] md:text-[13px] font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-2">
          {getLocalizedText("INVENTORY", "VIEW_DETAILS")}
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};

export default VehicleCard;
