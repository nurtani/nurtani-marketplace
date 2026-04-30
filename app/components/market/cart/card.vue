<script setup lang="ts">
import { computed } from "vue";
import type { Product } from "~~/types/market/product";

export interface CartItem {
  cartItemId: string | number;
  product: Product;
  quantity: number;
}

const props = defineProps<{
  item: CartItem;
}>();

const emit = defineEmits(["increment", "decrement", "remove"]);

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

const formattedPrice = computed(() => formatRupiah(props.item.product.price));
const subtotal = computed(() => props.item.product.price * props.item.quantity);
const formattedSubtotal = computed(() => formatRupiah(subtotal.value));

const displayImage = computed(() => {
  return props.item.product.images && props.item.product.images.length > 0
    ? props.item.product.images[0]
    : "/placeholder-image.jpg";
});

const incrementQuantity = () => emit("increment", props.item.cartItemId);
const decrementQuantity = () => {
  if (props.item.quantity > 1) {
    emit("decrement", props.item.cartItemId);
  }
};
const removeItem = () => emit("remove", props.item.cartItemId);
</script>

<template>
  <div
    class="bg-white rounded-[24px] p-4 flex gap-4 shadow-sm border border-gray-100 mb-4 w-full"
  >
    <div class="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
      <NuxtImg
        :src="displayImage"
        :alt="item.product.title"
        class="w-full h-full object-cover rounded-2xl bg-gray-50"
        loading="lazy"
        width="128"
        height="128"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <h3 class="font-bold text-gray-900 text-lg leading-tight">
            {{ item.product.title }}
          </h3>

          <div
            class="flex items-center gap-1 mt-1 text-gray-500 text-xs uppercase tracking-wide"
          >
            <svg
              class="w-3.5 h-3.5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{{ item.product.location }}</span>
          </div>

          <div class="flex items-center gap-1.5 mt-2">
            <NuxtImg
              :src="item.product.seller.avatar || '/default-avatar.png'"
              :alt="item.product.seller.name"
              class="w-5 h-5 rounded-full object-cover bg-gray-200"
              width="20"
              height="20"
            />
            <span class="text-xs text-gray-600"
              >Oleh:
              <strong class="font-semibold text-gray-900">{{
                item.product.seller.name
              }}</strong></span
            >
            <div
              class="flex items-center gap-0.5 text-green-600 text-[11px] font-bold ml-1"
            >
              • {{ item.product.points }}
              <svg
                class="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-10 10Z"
                />
                <path
                  d="M11 20c-1.2 0-2.5-1.6-2.5-3s1.3-3.1 2.5-3 2.5 1.6 2.5 3-1.3 3-2.5 3Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          @click="removeItem"
          class="hover:bg-red-50 p-1.5 rounded-lg transition-colors -mt-1 -mr-1 flex items-center justify-center"
        >
          <NuxtImg
            src="/icons/trash.svg"
            alt="Hapus Item"
            width="24"
            height="24"
            class="w-6 h-6 object-contain"
          />
        </button>
      </div>

      <div class="flex justify-between items-end mt-4">
        <div class="flex flex-col">
          <p class="text-[11px] text-gray-400 font-medium">
            {{ item.product.priceLabel || `Harga per ${item.product.unit}` }}
          </p>
          <p class="font-extrabold text-[#14552B] text-lg">
            {{ formattedPrice }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="decrementQuantity"
            class="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#14552B] text-[#14552B] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            :disabled="item.quantity <= 1"
          >
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          <span class="text-gray-900 font-bold text-lg w-5 text-center">{{
            item.quantity
          }}</span>

          <button
            @click="incrementQuantity"
            class="w-8 h-8 rounded-full flex items-center justify-center bg-[#14552B] text-white hover:bg-green-800 transition-all shadow-sm"
          >
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>

      <div
        class="flex justify-between items-end mt-3 border-t border-dashed border-gray-200 pt-3"
      >
        <div></div>
        <div class="flex flex-col items-end">
          <p class="text-[11px] text-gray-500 font-medium mb-0.5">Subtotal:</p>
          <p class="text-[#14552B] font-extrabold text-xl leading-none">
            {{ formattedSubtotal }}
          </p>

          <div
            class="flex items-center gap-1 text-green-600 text-[11px] font-bold mt-1"
          >
            + {{ item.product.points * item.quantity }}
            <svg
              class="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-10 10Z"
              />
              <path
                d="M11 20c-1.2 0-2.5-1.6-2.5-3s1.3-3.1 2.5-3 2.5 1.6 2.5 3-1.3 3-2.5 3Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
