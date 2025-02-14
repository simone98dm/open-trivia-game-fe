<template>
  <button
    :disabled="disable"
    @click="$emit('click')"
    class="px-4 py-2 rounded font-semibold disabled:text-gray-800 text-gray-50 dark:text-gray-800 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  disable: boolean;
}

defineProps<ButtonProps>();
</script>
