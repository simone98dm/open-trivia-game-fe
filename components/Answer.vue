<template>
  <span
    :class="[
      'answer',
      'inline-block',
      'm-2',
      'px-8',
      'py-4',
      'rounded-full',
      'text-lg',
      {
        'bg-green-500 bg-gray-100 transform scale-125 text-white':
          showAnswer && answer.correct,
        'text-red-500 bg-gray-100': showAnswer && !answer.correct,
      },
      {
        'bg-pink-500 text-white': !showAnswer && answer.id === 0,
        'bg-teal-500 text-white': !showAnswer && answer.id === 1,
        'bg-violet-500 text-white': !showAnswer && answer.id === 2,
        'bg-orange-500 text-white': !showAnswer && answer.id === 3,
      },
    ]"
  >
    {{ answer.value }}
  </span>
</template>

<script setup lang="ts">
import type { Answer } from "~/models/Question";

interface AnswerProps {
  answer: Answer;
  showAnswer: boolean;
}

defineProps<AnswerProps>();
</script>
