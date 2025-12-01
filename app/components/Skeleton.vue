<template>
  <div class="w-full max-w-2xl mx-auto animate-pulse">
    <Card :animated="false">
      <!-- Progress skeleton -->
      <div class="mb-6">
        <div class="flex justify-between mb-2">
          <div class="h-4 w-32 bg-white/20 rounded"></div>
          <div class="h-4 w-20 bg-white/20 rounded"></div>
        </div>
        <div class="h-3 bg-white/10 rounded-full overflow-hidden">
          <div class="h-full w-1/3 bg-white/20 rounded-full"></div>
        </div>
      </div>

      <!-- Question skeleton -->
      <div class="mb-6 space-y-3">
        <div class="h-8 bg-white/20 rounded w-full mx-auto"></div>
        <div class="h-8 bg-white/20 rounded w-3/4 mx-auto"></div>
      </div>

      <!-- Tags skeleton -->
      <div class="flex gap-2 justify-center mb-6">
        <div class="h-6 w-24 bg-white/20 rounded-full"></div>
        <div class="h-6 w-20 bg-white/20 rounded-full"></div>
      </div>

      <!-- Answers skeleton -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
        <div class="h-14 bg-white/20 rounded-xl"></div>
        <div class="h-14 bg-white/20 rounded-xl"></div>
        <div class="h-14 bg-white/20 rounded-xl"></div>
        <div class="h-14 bg-white/20 rounded-xl"></div>
      </div>
    </Card>
  </div>
</template>
