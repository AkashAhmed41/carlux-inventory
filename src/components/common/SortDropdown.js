"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import { ChevronDownIcon } from "@/lib/svg/icons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { SortOptions } from "@/lib/constants/default-data/SortOptions";

const SortDropdown = ({ selectedSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption =
    SortOptions.find((opt) => opt.value === selectedSort) || SortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-2.5" ref={containerRef}>
      <label className="text-[13px] md:text-sm font-medium text-gray-500 whitespace-nowrap hidden sm:block">
        {getLocalizedText("INVENTORY", "SORT_BY")}:
      </label>
      <div className="relative w-[180px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-xl text-[13px] md:text-sm font-medium border transition-all duration-200 cursor-pointer ${
            isOpen
              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
              : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-white/20 hover:text-white"
          }`}
        >
          <span className="truncate">
            {getLocalizedText("INVENTORY", selectedOption.labelKey)}
          </span>
          <ChevronDownIcon
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-emerald-400" : "text-gray-500"
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-full bg-[#111827] border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-50 overflow-hidden py-1">
            {SortOptions.map((option, index) => (
              <Fragment key={option.value}>
                <button
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-4 py-2.5 text-[13px] md:text-sm transition-all duration-150 cursor-pointer ${
                    selectedSort === option.value
                      ? "text-emerald-400 font-semibold bg-emerald-500/5"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {getLocalizedText("INVENTORY", option.labelKey)}
                </button>
                {index < SortOptions.length - 1 && (
                  <div className="mx-3 border-t border-white/[0.05]" />
                )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
