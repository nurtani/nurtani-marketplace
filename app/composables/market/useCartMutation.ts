// composables/market/useCartMutation.ts
import { useMutation } from "@pinia/colada";
import { useCartStore } from "@/composables/store/cart";
import type { Product } from "~/../../types/market/development/MarketProduct";

export function useCartMutation() {
  const { mutate: addToCart, status } = useMutation({
    mutation: async (product: Product) => {
      console.log("🛒 Product yang ditambahkan:", product);

      const cartStore = useCartStore();
      cartStore.addItem(product);

      console.log("📦 Isi cart sekarang:", cartStore.items);
      console.log("🔢 Total item unik:", cartStore.uniqueItemCount);

      return product;
    },
    onSuccess(product) {
      // ✅ Ganti product.title → product.name
      console.log(`✅ Berhasil ditambahkan: ${product.name}`);
    },
    onError(error) {
      console.error("❌ Gagal tambah ke keranjang:", error);
    },
  });

  return { addToCart, status };
}
