"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchInputField from "@/components/header/SearchInputField";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import {
  HEADER_VISIBLE_THRESHOLD,
  INITIAL_HEADER_SCROLL_POSITION,
} from "@/lib/constants/ApplicationConstants";
import { useEffect } from "react";

const Header = ({ onSearch }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(
    INITIAL_HEADER_SCROLL_POSITION,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < HEADER_VISIBLE_THRESHOLD) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/[0.06] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-[76px] px-5 md:px-10 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-end gap-2.5 shrink-0">
          <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent tracking-tight uppercase leading-none">
            {getLocalizedText("HEADER", "TITLE")}
          </span>
          <span className="hidden sm:block text-[11px] font-medium text-gray-500 tracking-widest uppercase leading-none mb-[1px]">
            {getLocalizedText("HEADER", "TAGLINE")}
          </span>
        </Link>
        <div className="flex-1 max-w-[200px] sm:max-w-[260px] md:max-w-[420px] min-w-0">
          <SearchInputField onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
