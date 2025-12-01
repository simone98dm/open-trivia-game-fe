<template>
  <div
    class="w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
  >
    <div
      class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out shadow-neon"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
interface ProgressBarProps {
  progress: number;
}

defineProps<ProgressBarProps>();
</script>
