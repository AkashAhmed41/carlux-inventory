import React from "react";

const HeaderSkeleton = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto h-[76px] px-5 md:px-10 flex items-center justify-between gap-4">
        <div className="flex items-end gap-2.5 shrink-0">
          <div className="h-6 w-20 md:h-8 md:w-28 rounded bg-white/10 shimmer" />
          <div className="hidden sm:block h-3 w-20 rounded-full bg-white/5 shimmer mb-[1.5px]" />
        </div>
        <div className="flex-1 max-w-[200px] sm:max-w-[260px] md:max-w-[420px] h-10 rounded-xl bg-white/5 border border-white/5 shimmer overflow-hidden" />
      </div>
    </header>
  );
};

export default HeaderSkeleton;
