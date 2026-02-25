"use client";

import React, { useState, useCallback, useMemo } from "react";
import VehicleGrid from "@/components/inventory-list/VehicleGrid";
import InventoryHeader from "@/components/inventory-list/InventoryHeader";
import EmptyList from "@/components/common/EmptyList";
import Header from "@/components/header/Header";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { SortOptions } from "@/lib/constants/default-data/SortOptions";

const InventoryList = ({ products, total }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(SortOptions[0].value);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSelectedSort(value);
  }, []);

  const getEffectivePrice = (product) =>
    product.price * (1 - (product.discountPercentage || 0) / 100);

  const filteredProducts = useMemo(() => {
    let result = searchQuery
      ? products.filter(
          (v) =>
            v.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.brand?.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [...products];

    switch (selectedSort) {
      case SortOptions[1].value:
        result.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
        break;
      case SortOptions[2].value:
        result.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
        break;
    }

    return result;
  }, [products, searchQuery, selectedSort]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="pt-[100px] pb-12">
        <InventoryHeader
          total={total}
          searchQuery={searchQuery}
          resultCount={filteredProducts.length}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
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
