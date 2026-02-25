import React from "react";

const InventoryHeaderSkeleton = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div>
          <div className="h-8 md:h-9 w-48 md:w-64 rounded-xl bg-white/10 shimmer" />
          <div className="h-4 w-56 md:w-80 rounded-full bg-white/5 shimmer mt-3" />
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden sm:block h-3 w-16 rounded-full bg-white/5 shimmer" />
          <div className="h-9 w-[180px] rounded-xl bg-white/5 border border-white/5 shimmer" />
        </div>
      </div>
    </div>
  );
};

export default InventoryHeaderSkeleton;
