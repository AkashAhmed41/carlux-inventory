import React from "react";

const VehicleCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md h-full">
      <div className="relative aspect-[16/10] bg-white/5 shimmer" />
      <div className="flex flex-col gap-3.5 p-5 flex-1 bg-white/[0.01]">
        <div className="flex justify-between items-center whitespace-nowrap">
          <div className="h-2.5 w-16 rounded-full bg-white/10 shimmer" />
          <div className="h-2.5 w-12 rounded-full bg-white/5 shimmer" />
        </div>
        <div className="h-5 w-3/4 rounded-md bg-white/10 shimmer" />
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full rounded-md bg-white/5 shimmer" />
          <div className="h-3 w-4/5 rounded-md bg-white/5 shimmer" />
        </div>
        <div className="flex gap-2.5 py-3.5 border-y border-white/5">
          <div className="h-2.5 w-12 rounded-full bg-white/5 shimmer" />
          <div className="h-2.5 w-16 rounded-full bg-white/5 shimmer" />
          <div className="h-2.5 w-14 rounded-full bg-white/5 shimmer" />
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="h-6 w-24 rounded-md bg-white/10 shimmer" />
          <div className="h-5 w-16 rounded-md bg-white/5 shimmer" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCardSkeleton;
