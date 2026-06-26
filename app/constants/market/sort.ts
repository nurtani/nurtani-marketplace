export const sortOptions = [
  { key: "popular", value: "populer", sort: "createdAt", order: "desc" },
  { key: "latest", value: "terbaru", sort: "createdAt", order: "asc" },
  { key: "cheapest", value: "termurah", sort: "price", order: "asc" },
  { key: "expensive", value: "termahal", sort: "price", order: "desc" },
] as const;
