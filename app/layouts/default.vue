<script setup lang="ts">
const route = useRoute()

const showCart = computed(() => route.meta.showCart === true)
</script>

<template>
  <UApp>
    <LandingNavbar />

    <UMain>
      <slot />
    </UMain>

    <!-- Cart Button -->
    <div
      v-if="showCart"
      class="sticky bottom-0 lg:hidden bg-white p-4 z-10"
    >
      <CartButton />
    </div>

    <LandingFooter />
  </UApp>
</template>
