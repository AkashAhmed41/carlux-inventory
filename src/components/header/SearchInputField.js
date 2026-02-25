"use client";

import React, { useState, useEffect } from "react";
import { SearchIcon, CloseIcon } from "@/lib/svg/icons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { SEARCH_DEBOUNCE_TIME } from "@/lib/constants/ApplicationConstants";

const SearchInputField = ({ onSearch }) => {
  const [typedInput, setTypedInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(typedInput.trim());
    }, SEARCH_DEBOUNCE_TIME);

    return () => clearTimeout(timer);
  }, [typedInput, onSearch]);

  const handleClear = () => {
    setTypedInput("");
    onSearch("");
  };

  return (
    <div className="relative flex items-center w-full">
      <SearchIcon className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
      <input
        type="text"
        value={typedInput}
        onChange={(e) => setTypedInput(e.target.value)}
        placeholder={getLocalizedText("HEADER", "SEARCH_PLACEHOLDER")}
        className="w-full pl-10 pr-9 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-[13px] text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all duration-300 cursor-text"
      />
      {typedInput && (
        <button
          onClick={handleClear}
          className="absolute right-3 text-gray-500 hover:text-white transition-colors cursor-pointer"
        >
          <CloseIcon className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default SearchInputField;
