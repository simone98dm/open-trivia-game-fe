<script setup lang="ts">
interface ButtonProps {
  disable: boolean;
}

const p = defineProps<ButtonProps>();
console.log("🚀 ~ file: Button.vue:7 ~ p:", p);
</script>

<template>
  <button :disabled="disable" @click="$emit('click')" class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
  border: 1px solid #0056b3;
  color: #fff;
}
.btn:disabled {
  background-color: #ccc;
  border: 1px solid #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
