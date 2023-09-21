<script setup lang="ts">
import { Answer } from "~/models/Question";

interface AnswerProps {
  answer: Answer;
  showAnswer: boolean;
}

defineProps<AnswerProps>();
</script>

<template>
  <span
    :class="[
      {
        correct: showAnswer && answer.correct,
        incorrect: showAnswer && !answer.correct,
      },
      'answer',
    ]"
  >
    {{ answer.value }}
  </span>
</template>

<style scoped>
.answer {
  margin: 8px;
  padding: 4px 16px;
  border-radius: 24px;
}
.correct {
  border: 1px solid green;
}
.incorrect {
  border: 1px solid red;
}
</style>
