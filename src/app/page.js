import { Suspense } from "react";
import { fetchVehicleList } from "@/lib/services/VehicleService";
import InventoryList from "@/components/inventory-list/InventoryList";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

async function HomepageContent() {
  const data = await fetchVehicleList();
  const { products, total } = data;

  return <InventoryList products={products} total={total} />;
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
