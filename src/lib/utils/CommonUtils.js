import en from "@/lib/localization/en.json";

export const getLocalizedText = (section, key) => {
  const sectionData = en[section];
  return sectionData?.[key] || key;
};

export const getFormattedPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const getDiscountedPrice = (price, discountPercentage = 0) => {
  const discountedPrice =
    discountPercentage > 0 ? price * (1 - discountPercentage / 100) : price;
  return getFormattedPrice(discountedPrice);
};
