import {
  API_URL,
  DEFAULT_REVALIDATE_TIME,
} from "@/lib/constants/ApplicationConstants";

export async function fetchVehicleList() {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: DEFAULT_REVALIDATE_TIME },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch vehicle inventory: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle inventory:", error);
    throw error;
  }
}
