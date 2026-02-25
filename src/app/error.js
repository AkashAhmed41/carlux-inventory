"use client";

import React from "react";
import Link from "next/link";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

export default function Error({ reset }) {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0b0f19] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md max-w-lg w-full">
        <h1 className="text-lg md:text-xl font-medium text-white mb-4">
          {getLocalizedText("ERROR", "TITLE")}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm mb-8">
          {getLocalizedText("ERROR", "DESCRIPTION")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {getLocalizedText("ERROR", "TRY_AGAIN")}
          </button>
          <Link
            href="/"
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-full transition-all duration-300 flex items-center justify-center border border-white/10 cursor-pointer"
          >
            {getLocalizedText("ERROR", "GO_HOME")}
          </Link>
        </div>
      </div>
    </div>
  );
}
