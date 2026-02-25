import { Suspense } from "react";
import { fetchVehicleList } from "@/lib/services/VehicleService";
import InventoryList from "@/components/inventory-list/InventoryList";
import HomepageSkeleton from "@/skeleton/HomepageSkeleton";

async function HomepageContent() {
  const data = await fetchVehicleList();
  const { products, total } = data;

  return <InventoryList products={products} total={total} />;
}

export default function Home() {
  return (
    <Suspense fallback={<HomepageSkeleton />}>
      <HomepageContent />
    </Suspense>
  );
}
