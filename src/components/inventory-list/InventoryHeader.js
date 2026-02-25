import React from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import SortDropdown from "@/components/common/SortDropdown";

const InventoryHeader = ({
  total,
  searchQuery,
  resultCount,
  selectedSort,
  onSortChange,
}) => {
  const isSearching = Boolean(searchQuery);
  const resultKey = resultCount === 1 ? "RESULT_FOUND" : "RESULTS_FOUND";

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {getLocalizedText("INVENTORY", "TITLE")}
          </h1>
          <p className="text-[13px] md:text-sm text-gray-400 mt-2 transition-all duration-200">
            {isSearching ? (
              <>
                <span className="text-emerald-400 font-semibold">
                  {resultCount}
                </span>{" "}
                {getLocalizedText("INVENTORY", resultKey)
                  .replace("{count}", "")
                  .trim()}
                {". "}
                {getLocalizedText("INVENTORY", "SHOWING_RESULTS_FOR")}{" "}
                <span className="text-emerald-400 font-semibold">
                  &quot;{searchQuery}&quot;
                </span>
              </>
            ) : (
              getLocalizedText("INVENTORY", "TOTAL_VEHICLES").replace(
                "{total}",
                total,
              )
            )}
          </p>
        </div>
        <SortDropdown selectedSort={selectedSort} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default InventoryHeader;
