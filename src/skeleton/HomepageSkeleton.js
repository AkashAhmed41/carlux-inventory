import React from "react";
import HeaderSkeleton from "@/skeleton/HeaderSkeleton";
import InventoryHeaderSkeleton from "@/skeleton/inventory-list/InventoryHeaderSkeleton";
import InventoryListSkeleton from "@/skeleton/inventory-list/InventoryListSkeleton";

const HomepageSkeleton = () => {
  return (
    <>
      <HeaderSkeleton />
      <main className="pt-[100px] pb-12">
        <InventoryHeaderSkeleton />
        <InventoryListSkeleton />
      </main>
    </>
  );
};

export default HomepageSkeleton;
