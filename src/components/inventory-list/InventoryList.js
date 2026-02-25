"use client";

import React, { useState, useCallback } from "react";
import VehicleGrid from "@/components/inventory-list/VehicleGrid";
import InventoryHeader from "@/components/inventory-list/InventoryHeader";
import EmptyList from "@/components/common/EmptyList";
import Header from "@/components/header/Header";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

const InventoryList = ({ products, total }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const filteredProducts = searchQuery
    ? products.filter(
        (v) =>
          v.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.brand?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : products;

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="pt-[100px] pb-12">
        <InventoryHeader
          total={total}
          searchQuery={searchQuery}
          resultCount={filteredProducts.length}
        />
        {isEmptyArray(filteredProducts) ? (
          <EmptyList
            title={getLocalizedText("INVENTORY", "EMPTY_TITLE")}
            description={getLocalizedText("INVENTORY", "EMPTY_DESCRIPTION")}
          />
        ) : (
          <VehicleGrid products={filteredProducts} />
        )}
      </main>
    </>
  );
};

export default InventoryList;
