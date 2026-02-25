import { Suspense } from "react";
import { fetchVehicleList } from "@/lib/services/VehicleService";
import VehicleGrid from "@/components/inventory-list/VehicleGrid";
import InventoryHeader from "@/components/inventory-list/InventoryHeader";
import EmptyList from "@/components/common/EmptyList";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

async function HomepageContent() {
  const data = await fetchVehicleList();
  const { products, total } = data;

  return (
    <main className="py-12">
      <InventoryHeader total={total} />
      {isEmptyArray(products) ? (
        <EmptyList
          title={getLocalizedText("INVENTORY", "EMPTY_TITLE")}
          description={getLocalizedText("INVENTORY", "EMPTY_DESCRIPTION")}
        />
      ) : (
        <VehicleGrid products={products} />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="py-12">
          <p className="text-gray-400">
            {getLocalizedText("INVENTORY", "LOADING")}
          </p>
        </main>
      }
    >
      <HomepageContent />
    </Suspense>
  );
}
