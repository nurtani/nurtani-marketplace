<template>
  <div class="flex items-center gap-3 w-full max-w-md mx-auto my-4">
    <div class="relative flex-1">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
      >
        <Icon
          name="lucide:search"
          class="w-5 h-5 text-gray-400"
        />
      </div>

      <input
        type="text"
        placeholder=""
        class="block w-full py-3 pl-11 pr-4 text-sm text-gray-900 bg-[#FFFFFF] border border-[#E5E7EB] rounded-full focus:ring-2 f"
      >
    </div>
  </div>
</template>
