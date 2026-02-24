import { Suspense } from "react";
import { fetchVehicleList } from "@/lib/services/VehicleService";

async function HomepageContent() {
  const data = await fetchVehicleList();
  const { products, total, skip, limit } = data;

  console.log("Fetched vehicle data:", { products, total, skip, limit });

  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold text-white">Vehicle Inventory</h1>
      <p className="text-gray-400 mt-2">Total: {total} vehicles</p>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="py-12">
          <p className="text-gray-400">Loading vehicle inventory...</p>
        </main>
      }
    >
      <HomepageContent />
    </Suspense>
  );
}
