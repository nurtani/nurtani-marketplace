<template>
  <div
    class="w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm flex flex-col"
  >
    <!-- Image area -->
    <USkeleton class="w-full aspect-[4/3] md:aspect-[5/4]" />

    <div class="p-4 md:p-5 flex flex-col justify-between flex-1">
      <div>
        <!-- Location -->
        <USkeleton class="h-3 w-24 rounded-full mb-2" />

        <!-- Title -->
        <USkeleton class="h-5 w-full rounded-lg mb-1.5" />
        <USkeleton class="h-5 w-3/4 rounded-lg mb-3" />

        <!-- Seller -->
        <div class="flex items-center gap-2 mt-3 mb-4">
          <USkeleton class="w-6 h-6 rounded-full shrink-0" />
          <USkeleton class="h-3 w-28 rounded-full" />
          <USkeleton class="ml-auto h-3 w-10 rounded-full" />
        </div>
      </div>

      <div>
        <hr class="border-gray-100 my-3" />
        <div class="flex justify-between items-end">
          <div class="flex flex-col gap-2">
            <!-- Price label -->
            <USkeleton class="h-3 w-20 rounded-full" />
            <!-- Price -->
            <USkeleton class="h-7 w-28 rounded-lg" />
          </div>
          <!-- Action button -->
          <USkeleton class="w-9 h-9 md:w-10 md:h-10 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
