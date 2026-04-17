<script setup lang="ts">
const route = useRoute()
const showCart = computed(() => route.meta?.showCart === true)
</script>

<template>
  <div>
    <UApp>
      <LandingNavbar />
      <UMain>
        <slot />
      </UMain>
      <LandingFooter />
    </UApp>

    <CartButton
      v-if="showCart"
      class="fixed right-6 z-50"
    />
  </div>
</template>
