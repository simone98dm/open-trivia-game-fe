<template>
  <div
    :class="[
      'glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-glass-lg',
      {
        'cursor-pointer': clickable,
        'animate-fade-in-up': animated,
      },
      customClass,
    ]"
    @click="clickable && $emit('click')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  clickable?: boolean;
  animated?: boolean;
  customClass?: string;
}

const {
  clickable = false,
  animated = true,
  customClass = "",
} = defineProps<CardProps>();

interface Emits {
  click: [];
}

defineEmits<Emits>();
</script>
