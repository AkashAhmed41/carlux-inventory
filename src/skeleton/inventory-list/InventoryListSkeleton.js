import React from "react";
import VehicleCardSkeleton from "@/skeleton/inventory-list/VehicleCardSkeleton";

const InventoryListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[...Array(8)].map((_, i) => (
        <VehicleCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default InventoryListSkeleton;
