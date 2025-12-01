<template>
  <button
    :disabled="disabled"
    @click="$emit('click')"
    :class="[
      'px-6 py-3 rounded-xl font-semibold text-base md:text-lg',
      'transition-all duration-300 transform hover:scale-105 active:scale-95',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      variantClass,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success";
}

const { disabled = false, variant = "primary" } = defineProps<ButtonProps>();

interface Emits {
  click: [];
}

defineEmits<Emits>();

const variantClass = computed(() => {
  switch (variant) {
    case "primary":
      return "glass-strong bg-blue-500/40 text-white hover:bg-blue-500/60 hover:shadow-neon focus:ring-blue-400";
    case "secondary":
      return "glass bg-white/20 text-white hover:bg-white/30 hover:shadow-glass focus:ring-white/50";
    case "success":
      return "glass-strong bg-green-500/40 text-white hover:bg-green-500/60 hover:shadow-neon-green focus:ring-green-400";
    default:
      return "glass-strong bg-blue-500/40 text-white hover:bg-blue-500/60 hover:shadow-neon focus:ring-blue-400";
  }
});
</script>
