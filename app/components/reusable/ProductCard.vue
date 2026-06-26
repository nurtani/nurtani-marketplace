<template>
  <div
    class="w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm flex flex-col cursor-pointer"
    @click="handleCardClick"
  >
    <div class="relative w-full aspect-[4/3] md:aspect-[5/4] bg-gray-100">
      <NuxtImg
        :src="product.imageUrl"
        :alt="product.name"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        loading="lazy"
      />

      <div
        class="absolute top-2 left-2 right-2 md:top-3 md:left-3 md:right-3 flex justify-between items-center gap-1.5 md:gap-2"
      >
        <span
          :class="
            product.status === 'available'
              ? 'bg-[#1A4D2E] text-white'
              : 'bg-gray-400 text-white'
          "
          class="text-[9px] md:text-[10px] font-extrabold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-wide flex items-center justify-center min-h-[24px] md:min-h-[26px] leading-none text-center w-max max-w-[55%] shadow-sm"
        >
          <span class="truncate">
            {{ product.status === "available" ? "Tersedia" : "Habis" }}
          </span>
        </span>

        <span
          class="bg-[#F4F1E4] text-[#1A4D2E] text-[9px] md:text-[10px] font-extrabold px-2 py-1 md:px-2.5 md:py-1.5 rounded-md md:rounded-lg flex items-center justify-center gap-1 uppercase tracking-wide min-h-[24px] md:min-h-[26px] leading-none w-max max-w-[45%] shadow-sm"
        >
          <span class="truncate">{{ product.category.name }}</span>
        </span>
      </div>
    </div>

    <div class="p-4 md:p-5 flex flex-col justify-between flex-1">
      <div>
        <!-- Location -->
        <div
          class="flex items-center gap-1 text-[#6B7280] text-[9px] md:text-[11px] font-semibold mb-1.5 uppercase tracking-wider"
        >
          <NuxtImg
            src="/icon/component/location.png"
            alt="Ikon Lokasi"
            class="w-[10px] h-[12px] md:w-[12px] md:h-[15px] shrink-0"
            loading="lazy"
          />
          <span class="truncate">{{ product.location }}</span>
        </div>

        <!-- Title -->
        <h2
          class="text-sm md:text-xl py-1 md:py-2 font-extrabold text-[#111827] line-clamp-2 leading-snug min-h-[2.5rem] md:min-h-[4rem]"
        >
          {{ product.name }}
        </h2>

        <!-- Farmer -->
        <div
          class="flex items-center gap-1.5 md:gap-2 mt-2 md:mt-3 mb-4 min-h-[28px] md:min-h-[32px]"
        >
          <NuxtImg
            v-if="product.farmer?.avatar"
            :src="product.farmer?.avatar"
            :alt="product.farmer?.name"
            class="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover shrink-0"
            format="webp"
            loading="lazy"
          />
          <div
            v-else
            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 shrink-0 flex items-center justify-center text-[8px] font-bold text-gray-500"
          >
            {{ product.farmer?.name?.charAt(0) ?? "?" }}
          </div>

          <div class="text-[10px] md:text-xs truncate">
            <span class="text-gray-500 hidden sm:inline md:inline">Oleh: </span>
            <span class="font-bold text-[#111827]">{{
              product.farmer?.name ?? "-"
            }}</span>
          </div>

          <div
            class="ml-auto flex items-center gap-1 text-[#00A63E] font-bold text-[10px] md:text-sm shrink-0"
          >
            {{ product.greenPoint }}
            <NuxtImg
              src="/icon/component/leaf.png"
              alt="Ikon Poin"
              class="w-3 h-3 md:w-4 md:h-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div>
        <hr class="border-gray-100 my-3" />
        <div class="flex justify-between items-end gap-2">
          <div class="min-w-0">
            <!-- Price label pakai unit -->
            <p
              class="text-gray-500 text-[9px] md:text-xs font-medium mb-0.5 truncate"
            >
              Harga per {{ product.unit }}
            </p>
            <p
              class="text-base md:text-lg font-extrabold text-[#1A4D2E] leading-none whitespace-nowrap"
            >
              {{ product.price.formatted }}
            </p>
          </div>

          <div class="shrink-0">
            <slot name="action">
              <ActionButton
                :icon="actionIcon"
                :variant="actionVariant"
                :size="size"
                @click.stop="emit('action')"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/../../types/market/development/MarketProduct";

const router = useRouter();

const props = withDefaults(
  defineProps<{
    product: Product;
    actionIcon?: string;
    actionVariant?: "primary" | "danger" | "neutral";
    size?: "sm" | "md" | "lg";
    linkTo?: string;
  }>(),
  {
    actionIcon: "+",
    actionVariant: "primary",
    size: "md",
  },
);

const emit = defineEmits<{
  (e: "action"): void;
}>();

function handleCardClick() {
  if (props.linkTo) {
    router.push(props.linkTo);
  }
}
</script>
