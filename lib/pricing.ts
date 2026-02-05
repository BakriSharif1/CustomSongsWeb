export type PackageType = "Basic" | "Plus" | "Premium";

export const PACKAGE_PRICING: Record<PackageType, number> = {
  Basic: 199,
  Plus: 299,
  Premium: 499
};

export const ADD_ONS = [
  { id: "rush", label: "Rush delivery", price: 99 },
  { id: "extraRevision", label: "Extra revision", price: 49 },
  { id: "instrumental", label: "Instrumental cut", price: 59 },
  { id: "lyricPdf", label: "Lyric PDF", price: 19 },
  { id: "commercial", label: "Commercial rights", price: 199 }
] as const;

export type AddOnId = (typeof ADD_ONS)[number]["id"];

export function calculateTotal(packageType: PackageType, addOns: AddOnId[]) {
  const base = PACKAGE_PRICING[packageType] ?? 0;
  const addOnTotal = ADD_ONS.filter((addOn) => addOns.includes(addOn.id)).reduce(
    (sum, addOn) => sum + addOn.price,
    0
  );
  return base + addOnTotal;
}
