<template>
  <button
    :class="[
      'w-full p-4 rounded-xl font-medium text-base md:text-lg transition-all duration-300',
      'transform hover:scale-105 active:scale-95',
      'focus:outline-none focus:ring-2 focus:ring-white/50',
      'relative overflow-hidden',
      answerClass,
    ]"
    :disabled="showAnswer"
    @click="$emit('select', answer.id)"
  >
    <!-- Correct answer checkmark -->
    <span
      v-if="showAnswer && answer.correct"
      class="absolute top-2 right-2 text-2xl animate-scale-in"
    >
      ✓
    </span>

    <!-- Wrong answer X mark -->
    <span
      v-if="showAnswer && selectedId === answer.id && !answer.correct"
      class="absolute top-2 right-2 text-2xl animate-scale-in"
    >
      ✗
    </span>

    {{ answer.value }}
  </button>
</template>

<script setup lang="ts">
import type { Answer } from "~/types/trivia";

interface AnswerProps {
  answer: Answer;
  showAnswer: boolean;
  selectedId?: number;
}

const props = defineProps<AnswerProps>();

interface Emits {
  select: [answerId: number];
}

defineEmits<Emits>();

const answerClass = computed(() => {
  const isSelected = props.selectedId === props.answer.id;

  // Show answer state
  if (props.showAnswer) {
    if (props.answer.correct) {
      return "glass-strong bg-green-500/60 text-white shadow-neon-green border-4 border-green-300 scale-110 font-bold ring-4 ring-green-400/50 animate-pulse-slow";
    }
    if (isSelected && !props.answer.correct) {
      return "glass-strong bg-red-500/50 text-white shadow-neon border-3 border-red-400/70";
    }
    return "glass bg-white/5 text-white/30 cursor-not-allowed opacity-50";
  }

  // Selected but not revealed
  if (isSelected) {
    return "glass-strong bg-blue-500/40 text-white shadow-neon border-2 border-blue-400/50";
  }

  // Default state - color coded by position
  const colors = [
    "glass hover:bg-pink-500/30 text-white hover:shadow-neon-pink border border-pink-400/30",
    "glass hover:bg-blue-500/30 text-white hover:shadow-neon border border-blue-400/30",
    "glass hover:bg-purple-500/30 text-white hover:shadow-neon border border-purple-400/30",
    "glass hover:bg-teal-500/30 text-white hover:shadow-neon border border-teal-400/30",
  ];

  return colors[props.answer.id % colors.length];
});
</script>
