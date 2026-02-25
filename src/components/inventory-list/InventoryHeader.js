import React from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

const InventoryHeader = ({ total }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {getLocalizedText("INVENTORY", "TITLE")}
      </h1>
      <p className="text-gray-400 mt-2 text-[13px] md:text-sm">
        {getLocalizedText("INVENTORY", "TOTAL_VEHICLES").replace(
          "{total}",
          total,
        )}
      </p>
    </div>
  );
};

export default InventoryHeader;
